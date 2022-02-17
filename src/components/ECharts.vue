<template>
  <div ref="echart"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
data() {
  return{
    axisOption:{
      legend:{
        textStyle:{
          color:"#333"
        },
      },
      grid:{
        left:"20%"
      },
      tooltip:{
        trigger:"axis",           
        // trigger:"item" ,           
      },
      xAxis:{
        type:"category",
        data:[],
        axisLine:{
          lineStyle:{
            color:"#17b3a3",
          }
        },
        axisLabel:{
          interval:0,
          color:"#333"
        },
      },
      yAxis:[
        {
          type:"value",
          axisLine:{
            lineStyle:{
              color:"#17b3a3",
            }
          },
        }
      ],
      // color:["#2ec7c9","#b6a2de"],
      series:[
      ],
    },
    normalOption:{
      tooltip:{
        trigger:"item",                      
      },
      color:[
        "#0f78f4",
        "#dd536b",
        "#9462e5",
        "#a6a6a6",
        "#e1bb66",   
      ],
      series:[   
      ],
    },
    echart:null
  }
},
components: {
},
//静态
props: {
  isAxisChart:{
    type:Boolean,
    default:true
  },
  chartData:{
    type:Object,
    default(){
      return {
        xData:[],
        series:[]
      }
    }
  }
},
//对象内部的属性监听，也叫深度监听
watch: {
  chartData:{
    handler:function(){
      this.initChart()
    },
    //初次进入也要初始化
    deep:true
  }
  
},
//属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
computed: { 
  options(){
    return this.isAxisChart ? this.axisOption:this.normalOption
  }
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  initChart(){  
    this.initChartData()
    if(this.echart == null) this.echart = echarts.init(this.$refs.echart)
    this.echart.setOption(this.options)
    window.addEventListener("resize", () => { 
        this.echart.resize();  
    });
    
  },
  initChartData(){
    if(this.isAxisChart == true){
      this.axisOption.xAxis.data = this.chartData.xData
      this.axisOption.series = this.chartData.series
    }else if(this.isAxisChart == false){
      this.normalOption.series = this.chartData.series
      // console.log(this.normalOption);
    }
    
     
  }
},
//请求数据
created() {
},
mounted() {

}
}
</script>

<style scoped>

</style>
