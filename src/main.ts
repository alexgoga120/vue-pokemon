import {createApp} from 'vue'
import App from './App.vue'
import store from "./store/store";
import {vuetify} from "./vuetify/vuetify";
import {router} from "./router/router";

createApp(App)
    .use(store)
    .use(vuetify)
    .use(router)
    .mount('#app')
