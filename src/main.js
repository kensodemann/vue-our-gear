import Vue from 'vue';
import App from './App.vue';

import { defineCustomElements } from 'kws-weather-widgets';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/kws-\w*/];

defineCustomElements(window);

new Vue({
  render: h => h(App)
}).$mount('#app');
