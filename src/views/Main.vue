<template>
<div class="home">
  <el-container>
    <el-aside  width='null'>
      <common-aside ></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main><router-view/></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</div>
</template>

<script>
import CommonAside from 'components/CommonAside'
import CommonHeader from 'components/CommonHeader'
export default {
data() {
 return{
 
 }
},
components: {
CommonAside,
CommonHeader
},
//静态
props: {
},
//对象内部的属性监听，也叫深度监听
watch: {
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
   
},
//请求数据
created() {
},
mounted() {
}
}
</script>

<style lang='less' scoped>
// .el-aside{
//   background-color: rgb(84, 92, 101);
//   height: 812px;
// }
// .el-header{
//   background-color: #333;
  
// }
  .el-container{
    height: 100%;
    width:100%;
  }
  .home{
    height: 100%;
    width: 100%;
  }
  .el-header, .el-footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    width:auto !important;
    background-color: rgb(84, 92, 101);
    color: #333;
    text-align: center;
    line-height:100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
