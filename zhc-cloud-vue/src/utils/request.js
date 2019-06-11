import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import SYSCONST from '@/utils/sysconst'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})
function checkTimeout(res) {
  if (res[SYSCONST.STATUS_KEY] == SYSCONST.STATUS_TIMEOUT) {  //|| res[SYSCONST.STATUS_KEY] === 50012 || res[SYSCONST.STATUS_KEY] === 50014
    // to re-login
    MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      confirmButtonText: 'Re-Login',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      store.dispatch('user/resetToken').then(() => {
        location.reload()
      })
    })
    return true;
  }
  return false
}
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token --['X-Token'] as a custom key.
      // please modify it according to the actual situation.
      //config.headers['X-Token'] = getToken()
      //console.log("bearer " + getToken())
      config.headers["Authorization"] = "bearer " + getToken();
      //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      
      // if (config.url.indexOf("?")==-1)
      //   config.url=config.url+"?access_token="+getToken();
      // else
      //   config.url=config.url+"&access_token="+getToken();
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code.
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res[SYSCONST.STATUS_KEY] != SYSCONST.STATUS_SUCCESS) {


      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (!checkTimeout(res)) {
        Message({
          message: res.msg || 'error',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(res.msg || 'error')
    } else {
      return res
    }
  },
  error => {
    const res = error.response.data;
    if (!checkTimeout(res)) {
      Message({
        message: error.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)

export default service
