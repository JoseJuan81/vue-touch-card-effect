var touchDirective = {
	bind: function (el, binding) {
		/* eslint-disable no-param-reassign */
		el.style.transition = 'transform 150ms ease';
		el.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
		el.addEventListener('mousemove', function (v) {
			/* eslint-disable max-len */
			var x = v.offsetX;
			var y = v.offsetY;
			var v_target = v.target;
			var elWidth = v_target.offsetWidth;
			var elHeight = v_target.offsetHeight;
			var middleX = elWidth / 2;
			var middleY = elHeight / 2;
			var maxDeg = Number(binding.value);
			var rateX = (middleX - x) / (elWidth / 2);
			var rateY = (middleY - y) / (elHeight / 2);
			var transformStyle = "perspective(1000px) rotateY(" + ((-rateX * maxDeg)) + "deg) rotateX(" + ((rateY * maxDeg)) + "deg) scale3d(1.02, 1.02, 1.02)";
			el.style.transform = transformStyle;
		});
		el.addEventListener('mouseleave', function () {
			el.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
		});
	},
};

export default touchDirective;
