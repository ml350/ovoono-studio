<template>
    <VueAwesomeSideBar v-model:miniMenu="miniMenu"
                       v-model:collapsed="collapsed"
                       :menu="myMenu"
                       vueRouterEnable></VueAwesomeSideBar>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import VueAwesomeSideBar from 'vue-awesome-sidebar'

const store = useStore()
const collapsed = ref(false)
const miniMenu = ref(false)
// You can now access your Vuex state like this:
const isAuthenticated = computed(() => store.state.isAuthenticated)
const myMenu = [
  {
    name: 'Getting Started',
    icon: { text: 'home', class: 'material-icons-outlined' },
    children: [
      {
        name: 'level 1.1',
        href: '/a',
        icon: { text: 'home', class: 'material-icons-outlined' },
        children: [
          {
            href: '/b',
            name: 'level 1.1.1',
          },
        ],
      },
      {
        name: 'level 1.2',
      },
    ],
  },
  {
    header: 'Settings',
  },
  {
    name: 'Dashboard',
    icon: { class: 'material-icons-outlined', text: 'dashboard' },
    children: [
      {
        href: '/c',
        name: 'level 2.1',
      },
    ],
  },
  // Only show this menu item if isAuthenticated is true
  isAuthenticated.value ? {
    name: 'close menu',
    icon: { text: 'settings', class: 'material-icons-outlined' },
  } : {},
]
</script>
