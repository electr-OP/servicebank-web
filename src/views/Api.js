import axios from 'axios'
const axios_instance = axios.create();
axios_instance.defaults.timeout = 300000;
axios_instance.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
axios_instance.defaults.headers.post['Accept'] = 'application/json;';
axios_instance.interceptors.request.use(async function (config) {
let token = await localStorage.getItem('token') 
    if(!navigator.onLine){
        alert("Hello! Seems you're offline");
        
        return {
          headers: {},
          method: config.method,
          url: ""
        };
      };
    if (token == null) {
    //   return JSON.parse(token)[0].access_token;
    }
  token =  JSON.parse(token)?.access
  token ? config.headers.Authorization = `Bearer ${token}` : null;
  // config.headers['Access-Key'] = 'ChFwjUfM.gl9elkgX3RCiXRmVrOqogltEarg8vbEq';
  config.headers['Access-Key'] = 'eFk4JQ1D.LIkXkb3NGakZG0obYQhYOS2anplmxAma'
  return config;
});
// const baseUrl = 'https://09c2-102-89-23-110.eu.ngrok.io/api/'

// const baseUrl = '//localhost:8000/';
const baseUrl = 'http://50.19.18.134/';
// axios_instance.interceptors.request.use(config => {
//   this.$progress.start() 
//   return configDoctor
// })

// // before a response is returned stop nprogress
// axios_instance.interceptors.response.use(response => {
//   NProgress.done()
//   return response
// },
// function (error) {  
//   NProgress.done()
//   // console.log(error.response)
//   return Promise.reject(error);  
// })

export default {
  axios_instance,
  baseUrl,
}               