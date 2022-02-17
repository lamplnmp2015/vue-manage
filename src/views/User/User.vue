<template>
  <div>
    <el-row>
      <el-tag effect="dark">首页</el-tag>
    </el-row>
    <el-table
      :data="tableData"
      style="width:100%"
      :header-row-style="{height:'10px'}"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      >
      <el-table-column
        fixed
        prop="date" 
        label="日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名字"
        width="220">
      </el-table-column>
      <el-table-column
        prop="province"  
        label="省份"
        width="220">
      </el-table-column>
      <el-table-column
        prop="city"       
        label="市区"
        width="220">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"       
        width="600">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"      
        width="320">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"      
        width="120">
        <template slot-scope="scope">
          <el-button
            @click="open(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  
</template>

<script>
export default {
data() {
 return{
        tableData: [{
          date: '2016-05-03',
          name: '小兰',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '小花',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '小篮',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '小树',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '小芦',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '小萝',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '小莉',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
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
},
//方法表示一个具体的操作，主要书写业务逻辑；
methods: { 
  deleteRow(index, rows) {
    rows.splice(index, 1);
  },
  handleClick(row) {
    console.log(row);
  },
  open(index, rows) {
    
        this.$confirm('此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then((action) => {
          if(action === 'confirm'){
              this.deleteRow(index, rows);
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
          }
          
        }).catch((err) => {
          console.log(err);
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
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
  .el-main{
    line-height: 55px;
  }
  .el-table__body-wrapper::-webkit-scrollbar {
   width: 20px; 
   height: 20px; 
 }
 .el-scrollbar__wrap::-webkit-scrollbar {
   width: 20px; 
   height: 20px; 

 }
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
   background: #CACACA;
   border-radius: 5px;
   /* height: 120px; */
 }
 
 
 
 



</style>
