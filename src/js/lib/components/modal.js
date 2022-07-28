import $ from '../core';

$.prototype.modal = function(created) {
	for (let i = 0; i < this.length; i++) {
		const target = this[i].getAttribute('data-target');

		const scrollBarWidthOff = function(time) {
			const widthWithoutScroll = document.documentElement.clientWidth,
					widthWithScroll = window.innerWidth,
					widthDifference = widthWithScroll - widthWithoutScroll;
			if (widthDifference > 0) {
				document.body.style.paddingRight = `${widthDifference}px`;
				document.body.style.overflow = 'hidden';
			} else {
				setTimeout(() => {
					document.body.style.paddingRight = '';
					document.body.style.overflow = '';
				}, time);
			}
		};

		$(this[i]).click((e) => {
			e.preventDefault();
			scrollBarWidthOff();
			$(target).fadeIn(500);
		});

		const closeElements = $(target).find('[data-close]');
		closeElements.click((e) => {
			e.preventDefault();
			scrollBarWidthOff(500);
			$(target).fadeOut(500);
			if (created) {
				console.log(target);
				document.querySelector(target).remove();
			}
		});

		$(target).click((e) => {
			if (e.target.classList.contains('modal')) {
				scrollBarWidthOff(500);
				$(target).fadeOut(500);
				if (created) {
					console.log(target);
					document.querySelector(target).remove();
				}
			}
		});
	}
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function({text, btns} = {}) {
	for (let i = 0; i < this.length; i++) {
		let modal = document.createElement('div');
		modal.classList.add('modal');
		modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

		const buttons = [];
		for (let j = 0; j < btns.count; j++) {
			let btn = document.createElement('button');
			btn.classList.add('btn', ...btns.settings[j][1]);
			btn.textContent = btns.settings[j][0];
			if (btns.settings[j][2]) {
				btn.setAttribute('data-close', 'true');
			}
			if (btns.settings[j][3] && typeof btns.settings[j][3] === 'function') {
				btn.addEventListener('click', btns.settings[j][3]);
			}
			buttons.push(btn);
		}



		modal.innerHTML = `
			<div class="modal-dialog">
				<div class="modal-content">
					<button class="close" data-close>
						<span>&times;</span>
					</button>
					<div class="modal-header">
						<div class="modal-title">
							${text.title}
						</div>
					</div>
					<div class="modal-body">
						${text.body}
					</div>
					<div class="modal-footer">
					</div>
				</div>
			</div>
		`;

		
		modal.querySelector('.modal-footer').append(...buttons);
		document.body.appendChild(modal);
		$(this[i]).modal(true);
		$(this[i].getAttribute('data-target')).fadeIn(500);
	}
};