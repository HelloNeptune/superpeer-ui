import Vue from 'vue'

/**
 * Plugins
 */
import moment from './plugins/moment';

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
