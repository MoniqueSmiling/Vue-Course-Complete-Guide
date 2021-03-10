import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js'
 
const app = createApp(App)

// Allows us to connect and use vue package
app.use(router); // in this case router
app.mount('#app');
