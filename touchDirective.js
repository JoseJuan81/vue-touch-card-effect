export default {
	bind: (el, binding) => {
		/* eslint-disable no-param-reassign */
		el.style.transition = 'transform 150ms ease';
		el.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
		el.addEventListener('mousemove', (v) => {
			/* eslint-disable max-len */
			const { offsetX: x, offsetY: y, target: { offsetWidth: elWidth, offsetHeight: elHeight } } = v;
			const middleX = elWidth / 2;
			const middleY = elHeight / 2;
			const maxDeg = Number(binding.value);
			const rateX = (middleX - x) / (elWidth / 2);
			const rateY = (middleY - y) / (elHeight / 2);
			const transformStyle = `perspective(1000px) rotateY(${(-rateX * maxDeg)}deg) rotateX(${(rateY * maxDeg)}deg) scale3d(1.02, 1.02, 1.02)`;
			el.style.transform = transformStyle;
		});
		el.addEventListener('mouseleave', () => {
			el.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
		});
	},
};
