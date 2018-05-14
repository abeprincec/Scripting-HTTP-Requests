var https = require('https');

(function getAndPrintHTML() {
	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step2.html',
	};
	var getData = '';
	/* Add your code here */
	https.get(requestOptions, function(response) {
		response.setEncoding('utf8');

		response.on('data', function(data) {
			//	console.log(data);
			data2 += data;
		});

		response.on('end', function() {
			console.log('Response stream complete.');
			console.log('print data after getting it', getData);
		});
	});
})();
