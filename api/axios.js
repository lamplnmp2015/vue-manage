import axios from "axios";
import config from '../config'
const baseUrL = process.env.NODE_ENV ? config.baseUrl.dev:config.baseUrl.pro
class HttpRequest{
  constructor(baseUrl){
    this.baseUrL = baseUrL
  }
  getInsideConfig(){
    const config = {
      baseUrL:this.baseUrL,
      header:{

      }
    }
    return config
  }
  interceptors(instance){
    instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
      }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      });
    
    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
      }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      });
    }
    request(options){
      const instance = axios.create()
      this.interceptors(instance)
      options = {
        ...this.getInsideConfig(),
        ...options
      }
      return instance(options)
    }
}
export default new HttpRequest(baseUrL)