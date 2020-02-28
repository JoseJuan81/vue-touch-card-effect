import directive from './touchDirective';

export function install(Vue) {
	Vue.directive('touch-card', directive);
}

export default directive;
