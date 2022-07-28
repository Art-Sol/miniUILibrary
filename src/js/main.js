import './lib/lib';
import $ from './lib/lib';

$('#fadeOut').click(() => {
	$('.buttons__someText').fadeOut(800);
});

$('#fadeIn').click(() => {
	$('.buttons__someText').fadeIn(800);
});

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'Modal window - Js generated',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum eveniet necessitatibus nihil a eligendi tempora, exercitationem qui natus hic quasi aut magni praesentium est pariatur nesciunt, at, alias totam.'
	},
	btns: {
		count: 3,
		settings: [
			[
				'Close',
				['btn-danger', 'mr-10'],
				true
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('Данные сохранены');
				}
			],
			[
				'Another btn',
				['btn-warning', 'ml-10'],
				false,
				() => {
					alert('Hello World');
				}
			]
		]
	}
}));

$('.carousel-1').createCarousel({
	width: '900px',
	imgs: [
		'https://on-desktop.com/wps/Cities_____Night_Vancouver_Canada_093043_.jpg',
		'https://vsegda-pomnim.com/uploads/posts/2022-04/1649129708_24-vsegda-pomnim-com-p-priroda-norvegii-foto-37.jpg',
		'https://i.pinimg.com/originals/32/2e/05/322e05d6a52e151ffdda036663d0193b.jpg'
	]
});

$().get('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => console.log(response));