export default{
  state:{
    isCollapse:false,
    //面包屑
    tabsList:[
      {
        path:'/home',
        name:'Home',
        label:'首页',
        icon:'home'
      }
    ],
    //当前
    currentMenu:null
  },
  mutations:{
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val){
      console.log(val);  
      if(val.name !== 'Home'){
        state.currentMenu = val
        const res = state.tabsList.findIndex(item => item.name === val.name)
        if(res === -1){
          state.tabsList.push(val)
        }
      }else{
        state.currentMenu = null
      }
    }
  },

}