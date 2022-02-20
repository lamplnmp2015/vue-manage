<template>
<div>
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse='isCollapse'
      :collapse-transition='false'
      >
        
        <h3 style="padding:15px 5px 5px 5px">{{titleChange}}</h3>
        <el-menu-item v-for="(item,key) in noChildren" :index="item.path" :key='item.path' @click='clickMenu(item)'>
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
        <el-submenu v-for="(item,key) in haveChildren" :index="item.path" :key='item.path'>
          <template slot="title">
            <i :class="'el-icon-'+item.icon"></i>
            <span>{{item.label}}</span>
          </template>
          <el-menu-item-group v-for="(item1,key1) in item.children" >
            <el-menu-item @click='clickMenu(item1)' :index="item1.path" >{{item1.label}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-coin"></i>
          <span slot="title">导航五</span>
        </el-menu-item> -->
  </el-menu>
</div>
</template>

<script>
export default {
  // name:'CommonAside',
data() {
 return{
  //  isCollapse:true,
   menuList:[
    //  {
    //    path:'/',
    //    name:'Home',
    //    label:'首页',
    //    icon:'s-home',
    //    url:'Home/Home'
    //  },
     {
       path:'/home',
       name:'Home',
       label:'首页',
       icon:'s-home',
       url:'Home/Home'
     },
     {
       path:'/mall',
       name:'Mall',
       label:'苗木管理',
       icon:'video-play',
       url:'MallManage/MallManage'
     },
     {
       path:'/user',
       name:'User',
       label:'用户管理',
       icon:'user',
       url:'UserManage/UserManage'
     },
     {
       path:'/Other',
       label:'其他',
       icon:'location',
       children:[
         {
           path:'/other/page1',
           name:'Other/Page1',
           label:'页面1',
           icon:'setting',
           url:'Other/Page1'
           
         },
         {
           path:'/other/page2',
           name:'Other/Page2',
           label:'页面2',
           icon:'setting',
           url:'Other/Page2'   
         },
       ]
     },
     
   ]
 }
},
components: {
},
//静态
props: {
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
  noChildren(){
    return this.menuList.filter(item=>!item.children)
  },
  haveChildren(){
    return this.menuList.filter(item=>item.children)
  },
  isCollapse(){
    return this.$store.state.tab.isCollapse
  },
  titleChange(){
    return this.$store.state.tab.isCollapse?'百苗':'百苗网管理系统'
  }
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  handleOpen(key, keyPath) {
    // console.log(key, keyPath);
  },
  handleClose(key, keyPath) {
    // console.log(key, keyPath);
  },
  clickMenu(item){
    // if(item.name == this.$route.name) return 
    this.$router.push({
      name:item.name
    })
    this.$store.commit('selectMenu',item)
  }
},
//请求数据
created() {
  console.log(typeof(this.$store.state.tab.isCollapse));
},
mounted() {
}
}
</script>

<style lang='less' scoped>
.el-menu{
  border: none;
  height: 100%;
  // .el-menu-item,.el-submenu{
  //   text-align: left;
  // }
  h3{
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
 
</style>
