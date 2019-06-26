import axios from 'axios';
import url from '@/api/url.js'

axios.defaults.timeout = 3000; // 超时时间
axios.defaults.baseURL ='';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称'); 存cookie ??
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode == -1){ // 未登录
      // router.push({
        // path:"/login",
        // querry:{redirect:router.currentRoute.fullPath} // 从哪个页面跳转
      // })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}){
  return new Promise((resolve,reject) => {
    axios.get(url, {
      params:params
    }).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err)
    })
  })
}


// 使用
// this.$get('/testapi', {as:123}).then((response) => {
//   console.log(response)
// });