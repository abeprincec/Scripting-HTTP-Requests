var https = require('https');

function getHTML(options, callback) {
    var getData = '';

	https.get(options, function(response) {
		response.setEncoding('utf8');

		response.on('data', function(data) {
			//	console.log(data);
			getData += data;
		});

		response.on('end', function() {
			console.log('Response stream complete.');
			console.log('print data after getting it', callback(getData));
		});
	});
}

function printHTML(html) {
	console.log(html);
}

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step4.html',
};

getHTML(requestOptions, printHTML);
