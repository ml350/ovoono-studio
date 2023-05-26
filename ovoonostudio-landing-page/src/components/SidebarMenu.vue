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
            <Transition name="fade">
              <span v-show="isSidebarOpen">Home</span>
            </Transition>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard">
            <IconEmployeeGroup />
            <Transition name="fade">
              <span v-show="isSidebarOpen">Dashboard</span>
            </Transition>
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
  import IconAngle from '../assets/icons/sidebar/IconAngle.vue';
  import IconHome from '../assets/icons/sidebar/IconHome.vue';
  import IconEmployeeGroup from '../assets/icons/sidebar/IconEmployeeGroup.vue';

  export default {
    data() {
      return {
        isSidebarOpen: false,
      };
    },
    components: {
      IconAngle,
      IconHome,
      IconEmployeeGroup
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
    },
  };
</script>

<style lang="less" scoped>
  @import (reference) "@/assets/less/colors.less";

  @sidebar-width: 4rem;
  @toggle-duration: 300ms;
  @sidebar-padding-inline-start: 1rem;

  aside {
    color: @primary;
    background: @bg-dark;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-block: 1rem;
    transition: all @toggle-duration;
    width: @sidebar-width;

    &.open {
      width: 3 * @sidebar-width;
    }
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
    padding-inline-start: @sidebar-padding-inline-start;

    &:hover {
      color: @secondary;
      background-color: lighten(@bg-dark, 5%);
    }

    & a {
      // border-right: 0.25rem solid white;
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
  }

  .sidebar-head {
    position: relative;
    // padding-block-end: 4rem;
  }

  .sidebar-toggle {
    padding-inline-start: @sidebar-padding-inline-start;
  }

  h4 {
    padding-block-end: 1rem;
    padding-inline-start: @sidebar-padding-inline-start;
    user-select: none;
    pointer-events: none;
    opacity: 0.5;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.125ch;
    transition: opacity @toggle-duration;

    &.transparent {
      opacity: 0;
    }
  }

  button {
    cursor: pointer;
    position: absolute;
    transition-duration: @toggle-duration;
    transition-property: transform, left, top;
    left: 0;
    top: 1rem;
    transform: translateX(0%) translateY(2rem) rotateZ(0deg);

    &.toggle-button {
      left: 100%;
      top: 0;
      transform: translateX(-100%) translateY(0rem) rotateZ(180deg);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity, transform;
    transition-duration: @toggle-duration;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
</style>