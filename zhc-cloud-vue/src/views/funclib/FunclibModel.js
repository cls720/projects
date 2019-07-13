export default {
  modelFile: "funclib",
  fields: {
    className: {
      desc: "类名",
      dbType: "dbString"
    },
    classNameCn: {
      desc: "类中文名称",
      dbType: "dbString"
    },
    methodName: {
      desc: "函数名",
      dbType: "dbString",
      default: {
        exps: (model) => {
          return model.rawData.methodName || model.rawData.refMethodName;
        }
      }
    },
    methodNameCn: {
      desc: "函数中文名",
      dbType: "dbString"
    },
    expression: {
      desc: "调用表达式",
      dbType: "dbString",
      default: {
        exps: (model) => {
          return model.rawData.className + "." + model.rawData.methodName + "()";
        }
      }
    },
    showDoc: {
      desc: "ShowDoc注释",
      dbType: "dbString"
    },
    searchKeyWorld: {
      desc: "搜索关键字",
      dbType: "dbString"
    },
    searchKeyWorld: {
      desc: "搜索关键字",
      dbType: "dbString",
      default: {
        exps: (model) => {
          return model.rawData.searchKeyWorld || model.rawData.classNameCn;
        }
      }
    },
    contextParams: {
      desc: "上下文参数定义",
      dbType: "dbString"
    },
    refClassImport: {
      desc: "引用文件",
      dbType: "dbString"
    },
    refClassName: {
      desc: "引用类名",
      dbType: "dbString"
    },
    refClassExt: {
      desc: "引用类扩展名",
      dbType: "dbString"
    },
    refMethodName: {
      desc: "引用方法名",
      dbType: "dbString"
    },
    refExpression: {
      desc: "引用方法表达式",
      dbType: "dbString",
      default: {
        exps: (model) => {
          return model.rawData.refClassName + "." + model.rawData.refMethodName + "()";
        }
      }
    },
    refMethodContent: {
      desc: "引用函数内容",
      dbType: "dbString"
    },
    testCaseContent: {
      desc: "测试用例内容",
      dbType: "dbString"
    },
    testCaseFiles: {
      desc: "测试用例文件列表",
      dbType: "dbString"
    },
    onlineModify: {
      desc: "是否支持在线修改",
      dbType: "dbString"
    },
    methodType: {
      desc: "方法类型",
      dbType: "dbString"
    },
    writeTime: {
      desc: "创建时间",
      dbType: "dbString",
      default: {
        //rule: 'first', //prior
        exps: (model) => {
          return (new Date()).valueOf() + "";
        }
      }
    },
    lastModifyTime: {
      desc: "最后修改时间",
      dbType: "dbString"
    },
    operator: {
      desc: "创建人",
      dbType: "dbString",
      default: {
        exps: (model) => {
          return "04297";
        }
      }
    },
    note: {
      desc: "备注说明",
      dbType: "dbString"
    }
  }
}
