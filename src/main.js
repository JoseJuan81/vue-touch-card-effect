import Vue from 'vue';
import App from './App.vue';
import directive from '../touchDirective';

Vue.config.productionTip = false;
Vue.directive('touch-card', directive);

new Vue({
	render: (h) => h(App),
}).$mount('#app');
