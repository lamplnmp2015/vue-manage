import axios from "./axios";
export const  getMenu = params =>{
   return axios.request({
    method:'post',
    data:params,
    url:'/permission/getMenu'
  })
}
export const  getData = params =>{
  return axios.request({
   url:'/home/getData'
 })
}