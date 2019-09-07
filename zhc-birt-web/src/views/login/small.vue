<template>
  <div class="small-login">
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
</template>
<script>
import md5 from "js-md5";
import { validUsername } from "@/utils/validate";
export default {
  components: {},
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
      loading: false,
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
      passwordType: "password"
    };
  },
  computed: {},
  mounted() {},
  methods: {
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
    }
  },
  created() {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #333;

.small-login {
  padding: 5px;

  $formWidth: 380px;
  .login-form {

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



        top: 0;
        bottom: 0;
        right: 0;
        //width: $formWidth;
        //height: 320px;
        //padding: 25px;
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
}
</style>
