import axios from 'axios'


const service = axios.create({
  baseURL: '/', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

export default service
