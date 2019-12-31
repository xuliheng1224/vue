import axios from 'axios'
import global from '../global'

// // axios 配置
// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.withCredentials = true;
// // Axios实现请求重试
// axios.defaults.retry = 1; // 重试次数
// axios.defaults.retryDelay = 1000; // 重试延时
// eslint-disable-next-line handle-callback-err
axios.defaults.shouldRetry = (error) => true // 重试条件，默认只要是错误都需要重试

// 创建一个axios实例
const service = axios.create({
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    'token': 'one'
  },
  // baseURL: global.BASE_UR,
  withCredentials: true,
  timeout: 5000,
  retry: 1,
  retryDelay: 1000
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做某事，比如说 设置token
  // config.headers['token'] = 'token';
  config.headers['X-Token'] = 'xxxxxxxxxxxxxxxxxxx'
  return config
}, error => {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  // 如果返回的状态不是200 就主动报错
  if (res.state !== 200) {
    return Promise.reject(res.message || 'error')
  }
  return response
}, error => {
  return Promise.reject(error.response.data) // 返回接口返回的错误信息
})

/* 封装get方法 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(
      global.BASE_UR + url,
      {
        params
      }
    ).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/* 封装post方法 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(global.BASE_UR + url, data).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
