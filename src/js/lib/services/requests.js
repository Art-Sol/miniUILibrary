import $ from '../core';

$.prototype.get = async function(url, dataTypeAnswer = 'json') {
	let response = await fetch (url);

	if (!response.ok) {
		throw new Error(`Could not fetch ${url}, status: ${response.status}`);
	}

	switch (dataTypeAnswer) {
		case 'json': 
			return await response.json();
		case 'text':
			return await response.text();
		case 'blob':
			return await response.blob();
	}
	
};

$.prototype.post = async function(url, data, dataTypeAnswer = 'text') {
	let response = await fetch (url, {
		method: "POST",
		body: data
	});

	switch (dataTypeAnswer) {
		case 'json': 
			return await response.json();
		case 'text':
			return await response.text();
		case 'blob':
			return await response.blob();
	}

};