import Vue from 'vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from './store'
import router from './router'
import App from './App.vue'

import Utils from '@/components/utils/'
import UI from '@/components/UI/'

library.add(fas);
library.add(fab);

Vue.component("icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  components: {
    ...Utils,
    ...UI
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 