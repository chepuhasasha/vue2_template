import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './less/main.less';
import Container from './components/utils/Container.vue';

Vue.config.productionTip = false;

Vue.component('container', Container);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
