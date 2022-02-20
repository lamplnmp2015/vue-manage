<template>
<div>
  <!-- <el-row>
    <el-tag effect="dark">首页</el-tag>
  </el-row> -->
  <el-row class="home" :gutter="20" :style="{}" type="flex">
    <el-col :span='8' style="height:100%">
      <el-card class="box-card" shadow="hover">
        <div class="user">
          <div class="logo">
            <img src="~assets/images/user.jpg" alt="">
          </div>
          <div class="info">
            <h3 class="name">Admin</h3>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2022-2-12</span></p>
          <p>上次登录地点:<span>北京</span></p>
        </div>
      </el-card>
      <el-card >
        <el-table
        style="height:480px"
          :data="tableData"
          :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}"          
          >
          </el-table-column>

          <el-table-column
            prop="name"
            label="名称"
            >
          </el-table-column>
          <el-table-column
            prop="todayBuy"
            label="今日购买"
           >
          </el-table-column>
          <el-table-column
            prop="monthBuy"
            label="本月购买">
          </el-table-column>
          <el-table-column
            prop="totalBuy"
            label="总购买">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="height:100%">
      <div class="num">
        <el-card v-for="value in countData" :key="value.name" :body-style="bodyStyle" >         
          <i class="icon" :class="`el-icon-${value.icon}`" :style="{background:value.color}"></i>        
          <div class="detail">
            <p>￥{{value.value}}</p>
            <p>{{value.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height:280px">
        <!-- <div style="height:280px;width:100%" ref="echarts"></div> -->
        <echart :chartData='echartData.order' style="height:240px"/>
      </el-card>
      <div class="gragh">
        <el-card style='height:280px;width:100%'>
          <!-- <div style="height:240px" ref="userEcharts"></div> -->
          <echart :chartData='echartData.user' style="height:240px"/>
        </el-card>
        <el-card style='height:280px;width:100%'>
          <!-- <div style="height:240px" ref="videoEcharts"></div> -->
           <echart :chartData='echartData.video' :isAxisChart = 'false' style="height:240px"/>
        </el-card>
      </div>
    </el-col>
  </el-row>
</div>

</template>

<script>
import {getData} from '../../../api/data.js'
// import * as echarts from 'echarts';
import Echart from 'components/ECharts'
export default {
data() {
  return{
    bodyStyle:{
      display:'flex',
      width:'350px',
      height:'100px',
      'flex-derection':'column',
      'align-items':'center',
      padding:0,
      'justify-content':'left'
    },
    tableData:[],
    countData:[
      {
        name:'今日支付订单',
        value:210,
        icon:"success",
        color:"#2ec7c9"
      },
      {
        name:'今日收藏订单',
        value:210,
        icon:"star-on",
        color:"#ffb980"
      },
      {
        name:'今日未支付订单',
        value:210,
        icon:"s-goods",
        color:"#5ab1ef"
      },
      {
        name:'本月支付订单',
        value:210,
        icon:"success",
        color:"#2ec7c9"
      },
      {
        name:'本月收藏订单',
        value:210,
        icon:"star-on",
        color:"#ffb980"
      },
      {
        name:'本月未支付订单',
        value:210,
        icon:"s-goods",
        color:"#5ab1ef"
      },
    ],
    echartData:{
      order:{
        xData:[],
        series:[]
      },
      user:{
        xData:[],
        series:[]
      },
      video:{
        series:[]
      }
    }
  }
  },
  components: {
    Echart
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
    getData().then(res=>{
      const {code,data} = res.data
      if(code === 20000){
        this.tableData = data.tableData
        const orderData = data.oderData
        const keysArray = Object.keys(orderData.data[0])
        const series = []
        keysArray.forEach(key=>{
          //数据
          series.push({
            //苹果
            name:key,
            //苹果每日销量[1200,2220,3000,1000,10000,122,2000]
            data:orderData.data.map(item => item[key]),
            //折线类型
            type:'line'
          })
        })
        this.echartData.order.xData = orderData.date
        this.echartData.order.series = series
        
        // const option = {
        //   //横向坐标
        //   // [1,2,3,45,6,]
        //   xAxis:{
        //     data:orderData.date
        //   },
        //   //纵向坐标
        //   yAxis:{
            
        //   },
        //   //上方表头
        //   // ['苹果','小米'...]
        //   legend:{
        //     data:keysArray
        //   },
        //   //鼠标覆盖触发显示详细信息
        //   tooltip:{
        //     trigger:"axis",           
        //     // trigger:"item" ,           
        //   },
        //   //数据
        //   // [{
        //   //   name:'苹果',
        //   //   data:[1200,2220,3000,1000,10000,122,2000]
        //   // }]
        //   series
        // }
        // 初始化
        // const E = echarts.init(this.$refs.echarts)
        //  // 绘图
        // E.setOption(option)
        // const userOption = {
        //   legend:{
        //     textStyle:{
        //       color:"#333"
        //     },
        //   },
        //   grid:{
        //     left:"20%"
        //   },
        //   tooltip:{
        //     trigger:"axis",           
        //     // trigger:"item" ,           
        //   },
        //   xAxis:{
        //     type:"category",
        //     data:data.userData.map(item=>item.date),
        //     axisLine:{
        //       lineStyle:{
        //         color:"#17b3a3",
        //       }
        //     },
        //     axisLabel:{
        //       interval:0,
        //       color:"#333"
        //     },
        //   },
        //   yAxis:[
        //     {
        //       type:"value",
        //       axisLine:{
        //         lineStyle:{
        //           color:"#17b3a3",
        //         }
        //       },
        //     }
        //   ],
        //   color:["#2ec7c9","#b6a2de"],
        //   series:[
        //     {
        //       name:'新增用户',
        //       data:data.userData.map(item=>item.new),
        //       type:'bar'
        //     },
        //     {
        //       name:'活跃用户',
        //       data:data.userData.map(item=>item.active),
        //       type:'bar'
        //     },
        //   ],
        // }
        this.echartData.user.xData = data.userData.map(item=>item.date)
        this.echartData.user.series = [
            {
              name:'新增用户',
              data:data.userData.map(item=>item.new),
              type:'bar'
            },
            {
              name:'活跃用户',
              data:data.userData.map(item=>item.active),
              type:'bar'
            },
          ]
        // 初始化
        // const userE = echarts.init(this.$refs.userEcharts)
        // userE.setOption(userOption)
        this.echartData.video.series = [
            {
              data:data.videoData,
              type:'pie'
            }
          ]
        // const videoOption = {
        //   tooltip:{
        //     trigger:"item",
        //   },
        //   color:[
        //     "#0f78f4",
        //     "#dd536b",
        //     "#9462e5",
        //     "#a6a6a6",
        //     "#e1bb66",
        //     "#39c362",
        //     "#3ed1cf",
        //   ],
        //   series:[
        //     {
        //       data:data.videoData,
        //       type:'pie'
        //     }
        //   ]
        // }
        // const videoE = echarts.init(this.$refs.videoEcharts)
        // videoE.setOption(videoOption)
        // setTimeout(function (){
        //   window.onresize = function () {
        //       E.resize();
        //       userE.resize();
        //       videoE.resize();
        //     }
        //   },1000)
      //  console.log(this.echartData);
        // console.log(orderData.data);
      }
      
    })
  }
}
</script>

<style lang='less' >
.gragh{
  width: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: space-around;
}
.icon{
  height: 100px;
  width: 100px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail{
  text-align: left;
  font-size: 30px;
  margin-left: 20px;
  p:nth-of-type(2){
    font-size:15px ;
    color: #888888;
  }
}
.num{
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
}
.img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.user{
  height: 180px;
  display: flex;
  // justify-content: left;
  align-items: center;
  border-bottom: 1px solid rgb(207, 204, 204);
  .logo{
    height: 100px;
    width: 100px;
    margin-right: 40px;
    // vertical-align: middle;
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  
  .info{
    line-height: 20px;
    text-align: left;
    .access{
      color:#A4A4A4
    }
  }
  
}
.login-info{
  float:left;
  line-height: 30px;
  font-size: 10px;
  text-align: left;
  p{
    color:#A4A4A4;
    span{
      padding-left: 40px;
      color: black;
    }
  }
}
.el-card:hover{
  box-shadow: 0px 0px 20px #888888;
}
.el-card{
  min-height:100%;
  height: 100%;
  margin-bottom:10px;
}
.el-tag{
  float: left;
}
</style>
