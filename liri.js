var key = require("./key.js");
var request = require("request");
var Twitter = require ("twitter");
var spotify = require("node-spotify-api");
var userCommands = process.argv[2];
var userRequests = process.argv.splice(3).join('+');
var twitKeys = new Twitter(key.twitterKeys);
var spotKeys = new spotify(key.spotifyKeys);
var param = {screen_name: 'ThinMintz5', count: 20};
var fs = require("fs");

//different commands
switch(userCommands){
    case 'my-tweets':
        tweets();
        break;
    case 'spotify-this-song':
        song();
        break;
    case 'movie-this':
        movie();
        break;
   case 'do-what-it-says':
        doSomething();
        break;
}

//runs the "movie-this" function
function movie() {
 
// We then run the request module on a URL with a JSON
var queryUrl = "http://www.omdbapi.com/?t=" + userRequests + "&y=&plot=short&tomatoes=true&apikey=40e9cece";
console.log(queryUrl);
request(queryUrl, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // Then we print out the imdbRating
    console.log("Title of the movie: " + JSON.parse(body).Title);
    console.log("Year Released: " + JSON.parse(body).Year);
    console.log("Rating: " + JSON.parse(body).Rated);
    console.log("Rotten Tomatoes rating: " + JSON.parse(body).tomatoRating);
    console.log("This movie was made in: " + JSON.parse(body).Country);
    console.log("Movies Language: " + JSON.parse(body).Language);
    console.log("Plot of the Movie: "  + JSON.parse(body).Plot);
    console.log("This movie stars: "  + JSON.parse(body).Actors);
  }
  else{
  	console.log(error);
  }
});	
};

function tweets() {
	twitKeys.get("statuses/user_timeline", param, function(error, tweets, response) {
		//if not an error, loop through tweets and show the texts
    if (!error) {
			for (var i = 0; i < tweets.length; i++) {
				console.log(tweets[i].text);
				}
			} else {
				console.log(error);
			}
	});

};

function doSomething() {
	fs.appendFile("random.txt" , "," + userRequests);
	spotify.search({type: "track", query: userRequests}, function(error, data){
		console.log(data);
	})
}

function song(){
    spotKeys.search({ type: 'track', query: "Amish Paradise" }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      
/*      console.log(JSON.stringify(data, null, 2));*/
//attempting to get the needed info
      var spot = JSON.parse(data);
      console.log(data)
      });
};

/*  spotKeys.search({ type: 'track', query: 'Amish Paradise' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
console.log(data); 
});
};*/