import { createApp } from 'vue'
import App from './App.vue'
import dogStore from './stores/DogStore';
import '@fortawesome/fontawesome-free/js/all';

createApp(App)
    .use(dogStore)
    .mount('#app');

