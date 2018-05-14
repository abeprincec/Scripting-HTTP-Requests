var https = require('https');

module.exports = function getHTML(options, callback) {
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
};
