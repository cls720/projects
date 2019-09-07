/**
 * ConfigObject通用对象工具类
 * 
 * 命名空间 $.ConfigObject 简写 $.co
 * 
 * @author cls
 * @date 2019/09/04
 */
import {
  getConfigObjInfo
} from '@/api/config-object'

jQuery.ConfigObject = jQuery.co = {
  // 获取通用对象配置信息
  getCoInfo(ctName) {
    if (!ctName) return;
    $.coInfo = $.coInfo || {};
    if ($.coInfo[ctName]) {
      return $.coInfo[ctName];
    } else {
      return new Promise((resolve, reject) => {
        getConfigObjInfo(ctName).then(response => {
          const data = response.dataPack;
          $.coInfo[ctName] = data;
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
      i;
    radix = radix || chars.length;

    if (len) {
      for (i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  },
  getInnerXml(co, infos, tplId) {
    var ctXml = "";
    var me = this;
    $.each(infos, function () {
      var key = this.name;
      var propInfo = infos[key];
      var param = [key];
      if (key == "controlId" && !co.controlId) {
        co.controlId = co.controlName + "_" + this.uuid(8);
      }
      if (key == "controlDesc" && !co.controlDesc) {
        co.controlDesc = co.displayName;
      }
      if ((co[key] == undefined) ||
        (co[key] === "" && propInfo.propObject
          .toLocaleLowerCase() != "string") ||
        (propInfo.defaultValue === co[key]))
        return true;

      if (!propInfo.propType) {
        alert("配置不完整, 通用对象 propType 未定义");
      }
      if (propInfo.propType == "basic") {
        param.push("");
        if (propInfo.cdata) {
          if (typeof co[key] == "object") {
            `<![CDATA[${co[key]}]]>`
            param.push(`<![CDATA[${JSON.parse(co[key])}]]>`)
            //param.push($.format("<![CDATA[{0}]]>", $.fn.obj2str(co[key])));
          } else {
            param.push(`<![CDATA[${co[key]}]]>`)
            // param.push($.format("<![CDATA[{0}]]>", co[key]));
          }
        } else {
          param.push(co[key]);
        }
      } else {
        param.push(`class="${propInfo.propObject || ''}"`);
        // param.push($.format('class="{0}"', propInfo.propObject ||""));
        if (propInfo.propType.toLowerCase() == "configobject") {
            debugger
        //   let val = "";
        //   me.getConfigObjXml(co[key]).then(value => {
        //     val = value
        //   });
          param.push(me.getConfigObjXml(co[key]));
        } else if (propInfo.propType == "list") {
          param.push(me.getConfigObjListXml(propInfo, co[key]));
        }
      }
      if (!tplId || (tplId === 1)) {
        ctXml += `<property name="${param[0]}" ${param[1]}>${param[2]}</property>`;
      } else if (tplId === 2) {
        ctXml += `<event name="${param[0]}" ${param[1]}>${param[2]}</event>`;
      }
    });
    return ctXml;
  },
  async getConfigObjXml(co) {
    debugger
    if (!co) {
      return "";
    }
    if (typeof co == "string") {
      co = JSON.parse(co);
    }
    var ctXml = "";

    var ctName = co.controlName;
    if (!ctName) return;

    var ctInfo = await this.getCoInfo(ctName);

    ctXml = this.getInnerXml(co.properties, ctInfo.propertyInfos, 1);
    ctXml += this.getInnerXml(co.events, ctInfo.eventInfos, 2);
    // return new Promise(resolve => {
    //   resolve(`<${ctName}>${ctXml}</${ctName}>`)
    // })
    return `<${ctName}>${ctXml}</${ctName}>`;
    //$.format("<{0}>{1}</{0}>", ctName, ctXml);
  },
  getConfigObjListXml(propInfo, liCo) {
      debugger
    var coXml = `<list type="${propInfo.propObject || ''}">`
    var me = this
    $.each(liCo || [], function () {
      if (propInfo.propObject == "string") {
        coXml += `<string>${this}</string>`
      } else
        coXml += me.getConfigObjXml(this);
    })
    coXml += "</list>";
    return coXml;
  }
};

export default jQuery.ConfigObject
