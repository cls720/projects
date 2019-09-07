<template>
  <el-container class="login-container">
    <el-header>
      <el-row type="flex" align="middle" class="login-head">
        <el-col :span="4">
          <div class="login-logo">
            <image-title :image-url="hcCloudLogo" width="46px" height="46px"/>报表决策系统
          </div>
        </el-col>
        <el-col :span="2" :offset="18">
          <lang-select class="set-language"/>
        </el-col>
      </el-row>
    </el-header>
    <el-main :style="{'background-image':loginBgImg}">
      <div class="login-main">
        <div class="eap-desc">
          <div class="eap-main-image">
            <image-title :image-url="loginMainImg" width="446px" height="404px"/>
            <div class="eap-main-imageDesc">
              <h2>{{mainImageDesc1}}</h2>
              <p>{{mainImageDesc2}}</p>
            </div>
          </div>
          <div class="eap-login-info">
            <ul>
              <li
                v-for="infoImg in loginInfoImgGroup"
                :key="infoImg.desc"
                :style="{'background-image':infoImg.ico}"
              >{{infoImg.desc}}</li>
            </ul>
            <h2>{{loginInfoTitle}}</h2>
            <p>{{loginInfoText}}</p>
          </div>
        </div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
          :style="isVerifyCode?'height:355px;':''"
        >
          <div id="login_trigger" class="qr_trigger">
            <div class="login-tip">
              <div class="poptip">
                <div class="poptip-arrow">
                  <em></em>
                  <span></span>
                </div>
                <div class="poptip-content">{{loginType[1].title}}</div>
              </div>
            </div>
            <svg-icon :icon-class="loginType[1].name" @click="loginTrigger"/>
          </div>
          <div class="title-container">
            <h3 class="title">{{loginType[0].title}}</h3>
          </div>

          <div class="pclogin" v-show="loginType[0].name=='pc'">
            <el-form-item prop= "username">
              <span class="svg-container">
                <svg-icon icon-class="user"/>
              </span>
              <el-input
                ref="username"
                v-model="loginForm.username"
                :placeholder="$t('login.username')"
                name="username"
                type="text"
                auto-complete="on"
                size="large"
              />
            </el-form-item>
            <el-form-item prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password"/>
              </span>
              <el-input
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                :placeholder="$t('login.password')"
                name="password"
                auto-complete="on"
                size="large"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
              </span>
            </el-form-item>
            <el-form-item prop="verifyCode" v-show="isVerifyCode">
              <span class="svg-container">
                <svg-icon icon-class="verifyCode"/>
              </span>
              <el-input
                ref="verifyCode"
                v-model="loginForm.verifyCode"
                type="text"
                placeholder="验证码"
                name="verifyCode"
                size="large"
                @keyup.enter.native="handleLogin"
                style="width:calc(100% - 136px);"
              />
              <img ref="verifyCodeImg" src="" @click="resetVerifyCode" title="点击切换验证码"/>
            </el-form-item>
            <el-button
              :loading="loading"
              size="large"
              type="primary"
              style="width:100%;margin-bottom:30px;"
              @click.native.prevent="handleLogin">{{ $t('login.logIn') }}</el-button>
          </div>
          <div class="qrlogin" v-show="loginType[0].name=='qrcode'">
            <div class="qrImg">
              <p class="qrSuccess" v-show="isQrSuccess">登陆成功！</p>
              <img :src="qrloginImg" v-show="!isQrSuccess">
              <div class="qrcode_error" v-show="isQrError">
                <p>二维码失效</p>
                <button class="refresh" type="button">刷新二维码</button>
              </div>
            </div>
            
            <p class="qrDesc">
              <svg-icon class="qrDesc_icon" icon-class="saoma"/>
              打开<a>海创云</a>APP<br>扫一扫登录
            </p>
          </div>
        </el-form>
      </div>
    </el-main>
    <el-footer>版权所有 © 2018-2025 中海创集团</el-footer>
  </el-container>
</template>

<script>
import ImageTitle from "@/components/ImageTitle";
import { validUsername } from "@/utils/validate";
import axios from 'axios'
import LangSelect from "@/components/LangSelect";
import SocialSign from "./components/SocialSignin";
import { getToken, setToken, removeToken } from '@/utils/auth'
import md5 from "js-md5";

import { debuglog } from "util";
axios.defaults.withCredentials = true
export default {
  name: "Login",
  components: { LangSelect, SocialSign, ImageTitle },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的账号"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value&&value.length < 6) {
        callback(new Error("密码不能少于6位"));
      } else {
        callback();
      }
    };
    const validateVerifyCode = (rule, value, callback) => {
      if(this.isVerifyCode){
        if (value&&value.length == 4) {
          callback();
        } else {
          callback(new Error("请输入4位验证码"));
        }
      }else{
        callback();
      }
    };
    return {
      hcCloudLogo: "url(" + require("@/images/hcCloudLogo.png") + ")",
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ],
        verifyCode:[
          { required: true, trigger: "blur", validator: validateVerifyCode}
        ]
      },
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      loginBgImg: "url(" + require("@/images/login/loginBg.jpg") + ")",
      loginMainImg: "url(" + require("@/images/login/loginMain.png") + ")",
      mainImageDesc1: "开源、免费",
      mainImageDesc2: "开发平台",
      loginInfoImgGroup: [
        {
          ico: "url(" + require("@/images/login/loginIco1.png") + ")",
          desc: "快速"
        },
        {
          ico: "url(" + require("@/images/login/loginIco2.png") + ")",
          desc: "易用"
        },
        {
          ico: "url(" + require("@/images/login/loginIco3.png") + ")",
          desc: "灵活"
        }
      ],
      loginInfoTitle: "全栈解决方案",
      loginInfoText:
        "可视化开发工具、前端框架、开箱即用组件、规范化项目管理方案、在线领域建设",
      loginType:[
        {
          name:"pc",
          title:"密码登录"
        },{
          name:"qrcode",
          title:"扫码登录"
        }
      ],
      qrloginImg:"",
      isQrError:false,
      isVerifyCode:false,
      isQrSuccess:false,
      errorCount:0,
      linkHost:location.hostname+":91"
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && (key >= "a" && key <= "z")) ||
          (!shiftKey && (key >= "A" && key <= "Z"))
        ) {
          this.capsTooltip = true;
        } else {
          this.capsTooltip = false;
        }
      }
      if (key === "CapsLock" && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
    },
    async handleLogin() {
      let _succ=false;      
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          _succ=true;
        } else {
          _succ=false;
        }
      });
      if(_succ){
        if(this.errorCount >= 3 && this.loginForm.verifyCode){
          try{
            let _v=await this.checkVerifyCode({code:this.loginForm.verifyCode});
            if(!_v.data.success){
              this.$message.error(_v.data.msg);
              this.resetVerifyCode();
              return false;
            }
          }catch(e){          
            this.$message.error('验证出错');
            this.resetVerifyCode();
            return false;
          }
        }
        this.loading = true;
          this.$store
            .dispatch("user/login", {
              username: this.loginForm.username,
              password: md5(this.loginForm.password)
            })
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
              this.errorCount++;
              if(this.errorCount>=3){                
                this.isVerifyCode=true;
                this.resetVerifyCode();
              }
            });
      }else{
        console.log("error submit!!");
          return false;
      }
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    },
    loginTrigger(){
      if(this.loginType[0].name=="pc"){
        this.loadQrCode();
      }else{
        
      }
      this.loginType.reverse();
    },
    loadQrCode(){
      let that=this;
      let userID=this.RndNum(6)+"USER";
      let _message=btoa("webSocket-192.168.4.194:5101-"+userID);
      this.qrloginImg="http://"+this.linkHost+"/web/cxf/WebServiceWadl/QRCodeService/encodeQRCode?message="+_message;
      let websocket = null;		
      //判断当前浏览器是否支持WebSocket
      if('WebSocket' in window){
          //websocket = new WebSocket("ws://"+ window.location.host +"/eaptpl/webSocket/"+ userID);
          websocket = new WebSocket("ws://192.168.4.194:5101/eaptpl/webSocket/login/"+ userID);
      }
      else{
          alert('Not support websocket')
      }	
      //连接发生错误的回调方法
      websocket.onerror = function(){
          console.log("error");
      };		
      //连接成功建立的回调方法
      websocket.onopen = function(event){
          console.log("open");
      }		
      //接收到消息的回调方法
      websocket.onmessage = function(event){
        //setToken("d7d380bf-b7aa-4e01-b65b-75b476ea9c75");
        if(event.data){
          that.isQrSuccess=true;
          that.$store.commit('user/SET_TOKEN',event.data);
          setToken(event.data);
          that.$router.push({ path: that.redirect || "/" });
        }        
      }		
      //连接关闭的回调方法
      websocket.onclose = function(){
          console.log("close");
      }		
      //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = function(){
          websocket.close();
      }
      //关闭连接
      function closeWebSocket(){
          websocket.close();
      }
    },
    RndNum(n){
      let data="";
      for(let i=0;i<n;i++){
        data+=Math.floor(Math.random()*10);
      }
      return data;
    },
    resetVerifyCode(){
      let link="http://"+this.linkHost+"/web/cxf/WebServiceWadl/QRCodeService/getCode";
      this.$refs.verifyCodeImg.src=link+"?"+this.RndNum(4);
    },
    checkVerifyCode(data){
      return new Promise((resolve,reject) => {
        axios.get("http://"+this.linkHost+"/web/cxf/WebServiceWadl/QRCodeService/verifyCode",{
          params:data
        }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        })
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #333;
@supports (-webkit-mask: none) and (not (caret-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
    &::first-line {
      color: $light_gray;
    }
  }
}
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  color: #fff;
  .el-header {
    border-bottom: 1px solid #fff;
    .login-head {
      height: 100%;
      .login-logo {
        font-size: 28px;
        cursor: pointer;
        .image-title {
          vertical-align: middle;
          margin-right: 0.5em;
          display: inline-block;
        }
      }
      .set-language {
        font-size: 24px;
        cursor: pointer;
        float: right;
        color: #fff;
      }
    }
  }
  .el-main {
    display: flex;
    .login-main {
      width: 80%;
      min-width: 1200px;
      position: relative;
      margin: 0 auto;
      $formWidth: 380px;
      .eap-desc {
        position: absolute;
        height: 450px;
        top: 0;
        bottom: 0;
        left: 0;
        width: calc(100% - #{$formWidth} - 20px);
        margin: auto;
        padding: 20px;
        display: flex;
        align-items: center;
        .eap-main-image {
          position: relative;
          float: left;
          .eap-main-imageDesc {
            position: absolute;
            width: 200px;
            height: 122px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            text-align: center;
            transform: translateY(25px);
            h2 {
              color: #ffcc00;
              font-size: 38px;
              line-height: 70px;
              margin: 0;
            }
            p {
              color: #fff;
              font-size: 30px;
              line-height: 52px;
              margin: 0;
            }
          }
        }
        .eap-login-info {
          float: left;
          width: 314px;
          color: #fff;
          padding: {
            left: 30px;
            top: 70px;
          }
          ul {
            list-style: none;
            overflow: hidden;
            margin: 0;
            padding: 0;
            li {
              float: left;
              height: 128px;
              width: 68px;
              background-repeat: no-repeat;
              line-height: 215px;
              font-size: 16px;
              text-align: center;
              margin-right: 10px;
            }
          }
          h2 {
            line-height: 64px;
            font-size: 38px;
            margin: 0;
            font-weight: normal;
          }
          p {
            line-height: 26px;
            font-size: 14px;
            margin: 0;
          }
        }
      }
      .login-form {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: $formWidth;
        height: 320px;
        padding: 25px;
        margin: auto;
        overflow: hidden;
        background-color: #fff;
        padding-top:10px;
        /* reset element-ui css */
        .qrlogin{
          height:calc(100% - 70px);
          .qrImg{
            height:140px;
            width:140px;
            margin:20px auto;
            position: relative;
            font-size:14px;
            .qrSuccess{
              text-align:center;
              color:#0073BE;
              line-height:150px;
            }
            img{
              height:100%;
              width:100%;
            }
            .qrcode_error{
              background: hsla(0,0%,100%,.95);
              position: absolute;
              left: 0;
              top: 0;
              z-index: 9999;
              width: 100%;
              height: 100%;
              p{
                color: #222;
                margin-top: 38px;
                margin-bottom: 8px;
                text-align: center;
              }
              .refresh{
                width: 110px;
                height: 34px;
                line-height: 34px;
                text-align: center;
                margin: 0 auto;
                background-color: #0073BE;
                border: none;
                display: block;
                color: #fff;
                border-radius: 3px;
                font-size: 14px;
                cursor: pointer;
              }
            }
          }
          .qrDesc{
            font-size:12px;
            color:#666;
            width: 160px;
            margin:auto;
            overflow:hidden;
            line-height: 17px;
            .qrDesc_icon{
              color:#0073BE;
              font-size: 34px;
              vertical-align: middle;
              margin-right:15px;
              float: left;
            }
          }
        }
        .el-input {
          display: inline-block;
          height: 47px;
          width: 100%;
          /deep/input {
            background: #fff;
            border: 1px solid #d7d8d9;
            -webkit-appearance: none;
            border-radius: 5px;
            padding: 12px 30px;
            color: #333;
            height: 47px;
            caret-color: $cursor;
            &:-webkit-autofill {
              -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
              -webkit-text-fill-color: $cursor !important;
            }
            &:hover,
            &:focus {
              border-color: #409eff;
            }
          }
        }
        .el-form-item {
          color: #454545;
          img{
            width:131px;
            float:right;
            cursor: pointer;
          }
        }
        .qr_trigger{
          height:40px;
          width:40px;
          position:absolute;
          top:15px;
          right:25px;
          font-size:40px;
          color:#333;
          cursor:pointer;
          z-index:99;
          .login-tip {
            position: absolute;
            top: 0;
            left: -80px;
            display: block;
            .poptip{
              background-color: #e6f9fc;
              line-height: 16px;
              position: relative;
              z-index: 9999;
              border: 1px solid #0073BE;
              padding: 5px 10px;
              .poptip-arrow{
                position: absolute;
                z-index: 10;
                top: 8px;
                right: 0;
                em,span{
                  position: absolute;
                  width: 0;
                  height: 0;
                  border-color: hsla(0,0%,100%,0);
                  border-style: solid;
                  overflow: hidden;
                  top: 0;
                  left: 0;
                  border-width: 6px 0 6px 6px;
                }
                em{
                  left: 1px;
                  border-left-color: #0073BE;
                }
                span{
                  border-left-color: #e6f9fc;
                }
              }
              .poptip-content{
                font-size: 12px;
                font-weight: 400;
                color: #0073BE;
              }
            }
          }
        }
      }
      .el-form-item.is-success input {
        border-color: #409eff;
      }
      .tips {
        font-size: 14px;
        margin-bottom: 10px;
        span {
          &:first-of-type {
            margin-right: 16px;
          }
        }
      }
      .svg-container,
      .show-pwd {
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        display: inline-block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        margin: auto;
      }
      .title-container {
        position: relative;
        .title {
          font-size: 18px;
          line-height: 40px;
          color: $dark_gray;
          margin: 0 0 30px 0;
        }
      }
      .show-pwd {
        right: 0;
        left: unset;
        cursor: pointer;
        user-select: none;
      }
    }
  }

  //footer
  .el-footer {
    background-color: #4f5e71;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
}
</style>
