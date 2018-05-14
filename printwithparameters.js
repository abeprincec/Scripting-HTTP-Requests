var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html',
};

function getAndPrintHTML(options) {

	var getData = '';
	/* Add your code here */
	https.get(options, function(response) {
		response.setEncoding('utf8');

		response.on('data', function(data) {
			//	console.log(data);
			getData += data;
		});

		response.on('end', function() {
			console.log('Response stream complete.');
			console.log('print data after getting it', getData);
		});
	});
};

getAndPrintHTML(requestOptions)