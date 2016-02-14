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

      var url=require('url')
      var urlParts=url.parse(req.url,true)
      var query=urlParts.query;
      var itemToSearch=query.myquery;
      var request = require('request');
      var endpoint="https://api.spotify.com/v1/search?q="+itemToSearch+"&type=track,artist,album&market=US";
      request(endpoint, function (error, response, body) {
          if (!error && response.statusCode == 200) {

              console.log("Recieved response") // Print the google web page.
              res.render('results',{
                itemToSearch:itemToSearch,
                another:'another',
                result:body
              });
          }
      })
      // console.log("query is "+query.myquery);
	});

};
