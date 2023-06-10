<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content}` : `SITE_NAME` }}</template>
  </metainfo>
  <AdSense />
  <div id="app">
    <sidebar-menu v-if="!isLoginRoute && !isDashboardRoute"></sidebar-menu>
    <div id="adsense">
      <!-- Your ad will be inserted here -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>   
  import SidebarMenu from './components/SidebarMenu.vue';
  import { useMeta } from 'vue-meta';

  export default {
    name: 'App',  
    components: { 
      SidebarMenu
    },
    computed: {
      isLoginRoute() {
        return this.$route.path === '/login';
      },

      isDashboardRoute() {
        return this.$route.path === '/dashboard';
      }
    },
    setup () {
      useMeta({
        title: 'OvoOno Studio | Web3 Agency',
        htmlAttrs: { lang: 'en', amp: true }, 
        meta: [
          // set og:title and og:description meta tags
          { property: 'og:title', content: 'OvoOno Studio'},
          { property: 'og:description', content: 'OvoOno Studio is Web3 agency that provides services as development of dapps and smart contracts, maintencing and monitoring existing once, or making you new brand for your metaverse experience.'},
          { property: 'og:image', content: 'https://ovoono.studio/assets/logo/ovo3dlogo.png'}
        ]
      })
    } 
  }
</script>

<style lang="less">
  @import "@/assets/less/style.less"; 
  .wrapper {
    position: fixed;
    z-index: 9;
  }
</style>
