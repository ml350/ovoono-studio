<template>
  <div class="wrapper">
    <aside :class="{ open: isSidebarOpen }">
      <ul class="sidebar-head">
        <li>
          <img src="@/assets/logo/logo-cropped.png" alt="logo" width="32" height="32">
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
              <router-link to="/dashboard">
                  <IconEmployeeGroup />
                  <transition name="fade">
                      <span v-show="isSidebarOpen">Log In</span>
                  </transition>
              </router-link>
          </li>
          <li>
              <a href="https://dalle.emelrizvanovic.com/" target="_blank" rel="noopener noreferrer">
                  <IconImageGenerator />
                  <transition name="fade">
                      <span v-show="isSidebarOpen">Image Generator</span>
                  </transition>
              </a>
          </li>
          <h4 :class="{ transparent: !isSidebarOpen }">Discord Bots</h4>
          <h4 :class="{ transparent: isSidebarOpen }">-----</h4>
          <li>
              <a href="https://top.gg/bot/1041454438595965049" target="_blank" rel="noopener noreferrer">

                  <img :src="require('@//assets/icons/sidebar/scanner.png')" width="32" height="32" alt="logo">
                  <transition name="fade">
                      <span v-show="isSidebarOpen">Polygon Scanner</span>
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
    import IconImageGenerator from '../assets/icons/sidebar/IconImageGenerator.vue';
    
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
    .wrapper {
        /* Add any necessary styles for the wrapper */
    }

    aside {
        color: #67c4a5;
        background: #380062;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding-block: 1rem;
        transition: all 300ms;
        width: 4rem;
    }

        aside.open {
            width: 12rem;
        }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-block-end: 1rem;
    }

    img {
        object-fit: contain;
    }

    li {
        min-width: fit-content;
        cursor: pointer;
        padding-inline-start: 1rem;
    }

        li:hover {
            color: #380062;
            background-color: #67c4a5;
        }

        li a {
            display: flex;
            align-items: center;
            column-gap: 0.75rem;
            position: relative;
            padding-block: 0.5rem;
        }

    a.router-link-exact-active::after {
        content: '';
        position: absolute;
        right: 0;
        width: 0.25rem;
        height: 100%;
        background-color: @secondary;
    }

    .sidebar-head {
        position: relative;
    }

    .sidebar-toggle {
        padding-inline-start: 1rem;
    }

    h4 {
        padding-block-end: 0rem;
        padding-inline-start: 1rem;
        user-select: none;
        pointer-events: none;
        opacity: 0.7;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.125ch;
        transition: opacity 300ms;
    }

        h4.transparent {
            opacity: 0;
        }

    button {
        cursor: pointer;
        position: absolute;
        transition-duration: 300ms;
        transition-property: transform, left, top;
        left: 0;
        top: 1rem;
        transform: translateX(0%) translateY(2rem) rotateZ(0deg);
    }

        button.toggle-button {
            left: 100%;
            top: 0;
            transform: translateX(-100%) translateY(0rem) rotateZ(180deg);
        }

    .fade-enter-active,
    .fade-leave-active {
        transition-property: opacity, transform;
        transition-duration: 300ms;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }
</style>
