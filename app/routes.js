module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
//	app.get('*', function(req, res) {
//		res.sendfile('./public/index.html');
//	});
    
    app.get('/something', function(req, res) {
        console.log("Modified")
        res.send('Hitting the spotify api');
        var request = require('request');
        request('https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Print the google web page.
            }
        })
        
	});
    
    app.get('/search', function(req, res) {
	   res.sendfile('./public/results.html');
	});

};