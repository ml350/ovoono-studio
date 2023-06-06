import 'the-new-css-reset';
import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta'
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App)
    .use(router)
    .use(store)
    .use(createMetaManager())

await router.isReady()
store.dispatch('loadUser');
app.mount('#app');