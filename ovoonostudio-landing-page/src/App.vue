<template>
  <div id="app">
    <sidebar-menu v-if="!isLoginRoute"></sidebar-menu>
    <router-view></router-view>
  </div>
</template>

<script>   
  import SidebarMenu from './components/SidebarMenu.vue';

  export default {
    name: 'App',  
    components: {
      SidebarMenu,
    },
    computed: {
      isLoginRoute() {
        return this.$route.path === '/login';
      },
    },
  }
</script>

<style lang="less">
  @import "@/assets/less/style.less"; 
  .wrapper {
    position: fixed;
    z-index: 9;
  }
</style>
