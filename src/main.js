import { createApp } from 'vue'
import App from './App.vue'
import dogStore from './stores/DogStore';

createApp(App)
    .use(dogStore)
    .mount('#app');

