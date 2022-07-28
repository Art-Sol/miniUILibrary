import $ from '../core';

$.prototype.carousel = function() {
	for (let i = 0; i < this.length; i++) {
		const innerWidth = parseInt(window.getComputedStyle(this[i].querySelector('.carousel-inner')).width),
				slides = this[i].querySelectorAll('.carousel-item'),
				slideWrapper = this[i].querySelector('.carousel-slides'),
				prevBtn = this[i].querySelector('[data-slide="prev"]'),
				nextBtn = this[i].querySelector('[data-slide="next"]'),
				indicators = this[i].querySelectorAll('.carousel-indicators li');

		let slideIndex = 1;

		slideWrapper.style.width = innerWidth * slides.length + 'px';
		slides.forEach(slide => slide.style.width = innerWidth + 'px');

		function nextSlide() {
			if (slideIndex < slides.length) {
				slideWrapper.style.transform = `translateX(-${innerWidth * slideIndex}px)`;
				slideIndex++;

			} else {
				slideWrapper.style.transform = `translateX(0px)`;
				slideIndex = 1;
			}

			indicators.forEach(indicator => indicator.classList.remove('active'));
			indicators[slideIndex - 1].classList.add('active');
		}

		function prevSlide() {
			if (slideIndex === 1) {
				slideIndex = slides.length;
				slideWrapper.style.transform = `translateX(-${innerWidth * (slideIndex - 1)}px)`;
			} else {
				slideIndex--;
				slideWrapper.style.transform = `translateX(-${innerWidth * (slideIndex - 1)}px)`;
			}

			indicators.forEach(indicator => indicator.classList.remove('active'));
			indicators[slideIndex - 1].classList.add('active');
		}

		prevBtn.addEventListener('click', (e) => {
			e.preventDefault();
			prevSlide();
		});

		nextBtn.addEventListener('click', (e) => {
			e.preventDefault();
			nextSlide();
		});

		indicators.forEach(indicator => {
			indicator.addEventListener('click', (e) => {
				const slideTo = e.target.getAttribute('data-slide-to');
				slideIndex = +slideTo ;
				nextSlide();
			});
		});

	}
};

$('.carousel').carousel();


$.prototype.createCarousel = function({width, imgs} = {}) {
	for (let i = 0; i < this.length; i++) {
		this[i].style.cssText = `
			display: block;
			margin: 0 auto;
			width: ${width};
			position: relative;
		`;

		this[i].innerHTML = `
			<ol class="carousel-indicators">
				<li class="active" data-slide-to="0"></li>
				<li data-slide-to="1"></li>
				<li data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-slides">
					
				</div>
			</div>
			<a href="" class="carousel-prev" data-slide="prev">
				<span class="carousel-prev-icon">&lt;</span>
			</a>
			<a href="" class="carousel-next" data-slide="next">
				<span class="carousel-next-icon">&gt;</span>
			</a>
		`;

		imgs.forEach(img => {
			const imgBlock = document.createElement('img');
			imgBlock.setAttribute('src', img);
			imgBlock.setAttribute('alt', 'photo');
			
			const itemBlock = document.createElement('div');
			itemBlock.classList.add('carousel-item');
			itemBlock.append(imgBlock);

			this[i].querySelector('.carousel-slides').appendChild(itemBlock);
		});
		$(this[i]).carousel();
	}
};

