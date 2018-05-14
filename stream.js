var https = require('https');

(function getAndPrintHTMLChunks() {
	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step1.html',
	};

	https.get(requestOptions, function(response) {
		response.setEncoding('utf8');

		response.on('data', function(data) {
			console.log('New Chunk', data, +'\n');
			// .toString()
			// .split('\n')
			// .forEach((line, index, arr) => {
			// 	console.log(line)
			// });
		});

		response.on('end', function() {
			console.log('Response stream complete.');
		});
	});
})();

//getAndPrintHTMLChunks();
// https.get(requestOptions, function getAndPrintHTMLChunks(response) {
// 	response.setEncoding('utf8');

// 	response.on('data', function(data) {
// 		console.log(
// 			'Chunk Received',
// 			data
// 				.toString()
// 				.split('\n')
// 				.forEach(elem => {
// 					console.log(elem);
// 				})
// 		);
// 	});

// 	response.on('end', function() {
// 		console.log('Response stream complete.');
// 	});
// });
