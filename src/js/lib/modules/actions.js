import $ from "../core";

$.prototype.html = function(content) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].tagName) {
			continue;
		}

		if (content) {
			if (typeof content === 'string') {
				this[i].innerHTML = content;
			} else {
				console.error('html - Аргумент должен быть типа строка');
			}
		} else {
			return this[i].innerHTML;
		}
	}
	return this;
};

$.prototype.eq = function(num) {
	if (typeof num === 'number') {
		const curLength = Object.keys(this).length;

		if (num < curLength - 1) {
			const elem = this[num];
			
			for (let i = 0; i < curLength; i++) {
				delete this[i];
			}
			
			this[0] = elem;
			this.length = 1;
			return this;
		} else {
			console.error('eq - переданный аргумент больше чем всего элементов в массиве');
		}

	} else {
		console.error('eq - Неправильный тип или отсутствуют аргументы');
	}
	return this;
};

$.prototype.index = function() {
	const parent = this[0].parentElement;
	return [...parent.children].indexOf(this[0]);
};

$.prototype.find = function(selector) {
	if (selector && typeof selector === 'string') {
		const copyObj = Object.assign({}, this),
				objLength = Object.keys(this).length;
		let count = 0;


		for (let i = 0; i < objLength; i++) {
			delete this[i];
		}

		for (let i = 0; i < copyObj.length; i++) {
			const arr = copyObj[i].querySelectorAll(selector);
			
			if (arr) {
				arr.forEach(item => {
					this[count] = item;
					count++;
				});
			} else {
				continue;
			}
		}
		this.length = count;
	} else {
		console.error('find - Неправильный тип или отсутствуют аргументы');
	}
	return this;
};

$.prototype.closest = function(selector) {
	if (selector && typeof selector === 'string') {
		let check = false;
		for (let i = 0; i < this.length; i++) {
			if (this[i].closest(selector)) {
				check = true;
			}
		}

		if (check) {
			const copyObj = Object.assign({}, this),
					objLength = Object.keys(this).length;
			let count = 0;

			for (let i = 0; i < objLength; i++) {
				delete this[i];
			}

			for (let i = 0; i < copyObj.length; i++) {
				if (copyObj[i].closest(selector)) {
					this[count] = copyObj[i].closest(selector);
					count++;
				} else { 
					continue;
				}
			}
			this.length = count;

		} else {
			return this;
		}
	} else {
		console.error('closest - Неправильный тип или отсутствуют аргументы');
	}
	return this;
};

$.prototype.siblings = function() {
	let check = false;
	for (let i = 0; i < this.length; i++) {
		if (this[i].parentElement.children) {
			check = true;
		}
	}

	if (check) {
		const copyObj = Object.assign({}, this),
				objLength = Object.keys(this).length;
		let count = 0;

		for (let i = 0; i < objLength; i++) {
			delete this[i];
		}

		for (let i = 0; i < copyObj.length; i++) {
			const arr = copyObj[i].parentElement.children;
			if (arr) {
				for (let j = 0; j < arr.length; j++) {
					if (arr[j] === copyObj[i]) {
						continue;
					} else {
						this[count] = arr[j];
						count++;
					}
				}
			} else {
				continue;
			}
		}
		this.length = count;
	} else {
		return this;
	}
	return this;
};