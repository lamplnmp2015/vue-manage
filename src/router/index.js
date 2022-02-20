import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//解决跳转本页面报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path:'/',
    name:'Main',
    meta:{
      title:"百苗网"
    },
    component:()=>import('views/Main'),
    children:[
      {
        path:'/',
        name:'Home',
        meta:{
          title:'首页'
        },
        component:()=>import('views/Home/Home'),
        redirect:'/home'
      },
      {
        path:'/home',
        name:'Home',
        meta:{
          title:"首页"
        },
        component:()=>import('views/Home/Home')
      },
      {
        path:'/user',
        name:'User',
        meta:{
          title:"用户管理"
        },
        component:()=>import('views/User/User')
      },
      {
        path:'/mall',
        name:'Mall',
        meta:{
          title:"苗木管理"
        },
        component:()=>import('views/Mall/Mall')
      },
      {
        path:'/other/page1',
        name:'Other/Page1',
        meta:{
          title:"页面1"
        },
        component:()=>import('views/Other/Page1')
      },
      {
        path:'/other/page2',
        name:'Other/Page2',
        meta:{
          title:"页面2"
        },
        component:()=>import('views/Other/Page2')
      },
      
    ]
  },
  
  
]
const router = new VueRouter({
  mode:'history',
  routes
});
router.beforeEach((to,from,next)=>{
  // document.title = to.matched[0].meta.title
  document.title=to.meta.title
  next()    
  
})
export default router