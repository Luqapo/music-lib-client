import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import installElementPlus from './plugins/element';
import 'element-plus/lib/theme-chalk/index.css';
import { stateSymbol, createStore } from './store';

const app = createApp(App);
app.provide(stateSymbol, createStore());
installElementPlus(app);
app.use(router).mount('#app');
