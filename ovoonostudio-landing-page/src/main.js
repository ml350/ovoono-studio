import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSidebar from 'vue-awesome-sidebar';
import "vue-awesome-sidebar/dist/vue-awesome-sidebar.css";


createApp(App).use(store).use(router).use(VueSidebar).mount('#app');