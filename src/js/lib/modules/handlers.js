import $ from '../core';

$.prototype.on = function(eventType, callback) {
	if ((eventType && callback) && (typeof eventType === 'string' && typeof callback === 'function')) {
		for (let i = 0; i < this.length; i++) {
				this[i].addEventListener(eventType, callback);
		}
	} else {
		console.error('on - Неправильный тип или отсутствуют аргументы');
	}
	return this;
};

$.prototype.off = function(eventType, callback) {
	if ((eventType && callback) && (typeof eventType === 'string' && typeof callback === 'function')) {
		for (let i = 0; i < this.length; i++) {
				this[i].removeEventListener(eventType, callback);
		}
	} else {
		console.error('off - Неправильный тип или отсутствуют аргументы');
	}
	return this;
};

$.prototype.click = function(handler) {
	if (handler && typeof handler === 'function') {
		for (let i = 0; i < this.length; i++) {
				this[i].addEventListener('click', handler);
		}
	} else {
		for (let i = 0; i < this.length; i++) {
			this[i].click();
		}
	}
	return this;
};