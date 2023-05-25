<template>
    <div id="app">
        <vue-sidebar/>
        <router-view></router-view>
    </div>
</template>

<script>

import VueSidebar from "./components/VueAwesomeSideBar.vue";
import "vue-awesome-sidebar/dist/vue-awesome-sidebar.css";

export default {
  name: 'App',
  components:{
      VueSidebar
  }
}
</script>

<style lang="less">
    @import "@/assets/less/style.less";
</style>
