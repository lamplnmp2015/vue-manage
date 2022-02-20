<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
    if (this.$router.path !== "/home"){
      this.$router.replace("home")
    }
  }
}
</script>
<style >

/* @import url('./assets/css/base.css') */
/* @import 'assets/css/base.css' */
#app{
  height: 100vh;
}

</style>
