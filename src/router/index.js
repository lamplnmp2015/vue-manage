import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
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
          title:"首页"
        },
        component:()=>import('views/Home/Home')
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