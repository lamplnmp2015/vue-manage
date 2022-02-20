<template>
<header>
  <div class="l-content">
    <el-button plain icon="el-icon-menu" size="mini" @click="menuChange"/>
    <!-- <h3 style="color:#fff">首页</h3> -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :class="index == tags.length-1 ? 'redColor':'myColor'" v-for="(item,index) in tags" :key="item.path" :to="{ path:item.path }">{{item.label}}</el-breadcrumb-item>
      
    </el-breadcrumb>
  </div>
  <div class="r-content">
    <el-dropdown trigger="click" size='mini'>
      <div class="el-dropdown-link">
        <img src="~assets/images/user.jpg" alt="">
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item> 
        <el-dropdown-item divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</header>
</template>

<script>
import {mapState} from 'vuex'
export default {
data() {
 return{
 
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
  ...mapState({
    tags:state=>state.tab.tabsList
  }),
  tag(){
    console.log(this.$store.state.tab.tabsList);
    // return 
    
  }
  // tags(){
  //   return this.$store.state.tab.tabList
  // }
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  menuChange(){
    this.$store.commit('collapseMenu')
  }
},
//请求数据
created() {
},
mounted() {
}
}
</script>

<style lang='less' scoped>
header{
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
  .l-content{
    display: flex;
    align-items: center;
    .el-button{
      margin-right:10px;
    }
  }
  .r-content{
    display: flex;
    align-items: center;
  }
  .el-dropdown-link {
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #409EFF;
    img{
      width: 40px;
      height:40px;
      border-radius: 50%;
    }
  }
  .el-breadcrumb__inner{
    color: white;
  }
  .myColor /deep/ .el-breadcrumb__inner{
    color: #fff;
  }
  .redColor /deep/ .el-breadcrumb__inner{
    // color: red;
  }
  
  .myColor ,.redColor /deep/ .el-breadcrumb__inner:hover{
    color: hsl(223, 89%, 59%) ;
  }
  // //或者这样写
  // .myColor >>> .el-breadcrumb__inner {
  //   color: #fff ;
  // }
</style>
