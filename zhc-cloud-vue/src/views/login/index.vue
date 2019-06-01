<template>
  <el-container class="login-container">
    <el-header>
      <el-row type="flex" align="middle" class="login-head">
        <el-col :span="4">
          <div class="login-logo">
            <image-title :image-url="hcCloudLogo" width="46px" height="46px"/>海创云
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
        >
          <div class="title-container">
            <h3 class="title">{{ $t('login.title') }}</h3>
          </div>

          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user"/>
            </span>
            <el-input
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

          <el-button
            :loading="loading"
            size="large"
            type="primary"
            style="width:100%;margin-bottom:30px;"
            @click.native.prevent="handleLogin"
          >{{ $t('login.logIn') }}</el-button>
        </el-form>
      </div>
    </el-main>
    <el-footer>版权所有 © 2018-2025 中海创集团</el-footer>
  </el-container>
</template>

<script>
import ImageTitle from "@/components/ImageTitle";
import { validUsername } from "@/utils/validate";
import LangSelect from "@/components/LangSelect";
import SocialSign from "./components/SocialSignin";
import md5 from "js-md5";

import { debuglog } from "util";

export default {
  name: "Login",
  components: { LangSelect, SocialSign, ImageTitle },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      hcCloudLogo: "url(" + require("@/images/hcCloudLogo.png") + ")",
      loginForm: {
        username: "admin",
        password: "fdauto"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
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
        "可视化开发工具、前端框架、开箱即用组件、规范化项目管理方案、在线领域建设"
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
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
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
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
        /* reset element-ui css */
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
          margin: 0 0 20px 0;
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
