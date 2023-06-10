<template>
  <div class="wrapper">
    <aside :class="{ open: isSidebarOpen }">
      <ul class="sidebar-head">
        <li>
          <a href="/">
            <img class="sidebar-logo" src="@/assets/logo/logo-cropped.png" alt="logo" width="32" height="32">
          </a>
        </li>
        <li>
          <button class="sidebar-toggle" @click="toggleSidebar" :class="isSidebarOpen ? 'toggle-button' : ''">
            <IconAngle />
          </button>
        </li>
      </ul>

      <h4 :class="{ transparent: !isSidebarOpen }">Menu</h4>

      <ul>
          <li>
              <router-link to="/">
                  <IconHome />
                  <transition name="fade">
                      <span v-show="isSidebarOpen">Home</span>
                  </transition>
              </router-link>
          </li>
          <li>
              <router-link to="/about">
                  <IconHome />
                  <transition name="fade">
                      <span v-show="isSidebarOpen">About</span>
                  </transition>
              </router-link>
          </li>
          <li>
              <router-link to="/dashboard">
                  <IconEmployeeGroup />
                  <transition name="fade">
                      <span v-show="isSidebarOpen">Log In</span>
                  </transition>
              </router-link>
          </li> 
          <h4 :class="{ transparent: !isSidebarOpen }">Tools</h4>
          <h4 :class="{ transparent: isSidebarOpen }">--------</h4>
          <li>
              <a href="https://polygonscan-scrapper.ovoono.studio" target="_blank" rel="noopener noreferrer">

                  <img :src="require('@//assets/icons/sidebar/scanner.png')" width="32" height="32" alt="logo">
                  <transition name="fade">
                      <span v-show="isSidebarOpen">Polygon Scanner</span>
                  </transition>
              </a>
          </li>
          <li>
              <a href="https://dalle-generator.ovoono.studio" target="_blank" rel="noopener noreferrer">
                  <IconImageGenerator />
                  <transition name="fade">
                      <span v-show="isSidebarOpen">Art Generator</span>
                  </transition>
              </a>
          </li>
      </ul>
    </aside>
  </div>
</template>


<script>
    import IconAngle from '../assets/icons/sidebar/IconAngle.vue';
    import IconHome from '../assets/icons/sidebar/IconHome.vue';
    import IconEmployeeGroup from '../assets/icons/sidebar/IconEmployeeGroup.vue';
    import IconImageGenerator from '../assets/icons/sidebar/imageGenerator.vue';
    
    export default {
        data() {
            return {
                isSidebarOpen: false,
                
            };
        },
        components: {
            IconAngle,
            IconHome,
            IconEmployeeGroup,
            IconImageGenerator,
            
        },
        methods: {
            toggleSidebar() {
                this.isSidebarOpen = !this.isSidebarOpen;
            },
            toggleBotList() {
                this.isBotListOpen = !this.isBotListOpen;
            },
        },
    };
</script>

<style scoped>  
</style>
