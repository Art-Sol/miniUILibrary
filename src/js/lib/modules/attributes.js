import $ from '../core';

$.prototype.addAttr = function (name, value) {
	if ((name && value) && (typeof value === 'string' && typeof name === 'string')) {
		for (let i = 0; i < this.length; i++) {
			if (!this[i].tagName) {
				continue;
			}
			this[i].setAttribute(name, value);
		}
	} else {
		console.error('addAttr - Неправильный тип или отсутствуют аргументы');
	}
	return this;
};

$.prototype.removeAttr = function (name) {
	if (name && typeof name === 'string') {
		for (let i = 0; i < this.length; i++) {
			if (!this[i].tagName) {
				continue;
			}
			this[i].removeAttribute(name);
		}
	} else {
		console.error('removeAttr - Неправильный тип или отсутствуют аргументы');
	}
	return this;
};

$.prototype.toggleAttr = function (name, value) {
	if ((name && value) && (typeof value === 'string' && typeof name === 'string')) {
		for (let i = 0; i < this.length; i++) {
			if (!this[i].tagName) {
				continue;
			}

			if (this[i].hasAttribute(name)) {
				this[i].removeAttribute(name);
			} else {
				this[i].setAttribute(name, value);
			}
		}
	} else {
		console.error('toggleAttr - Неправильный тип или отсутствуют аргументы');
	}
	return this;
};

$.prototype.getAttr = function (name) {
	if (name && typeof name === 'string') {
		for (let i = 0; i < this.length; i++) {
			if (!this[i].tagName) {
				continue;
			}
			return this[i].getAttribute(name);
		}
	} else {
		console.error('getAttr - Неправильный тип или отсутствуют аргументы');
		return this;
	}
};
