/*var twitterKeys = require("./assets/key.js");*/
/*var spotifyKeys = require("./assets/key.js");*/

var request = require("request");
/*var twitter = require ("twitter");
var spotify = require("spotify-web-api-node");*/
var userCommands = process.argv[2];
var userRequests = process.argv[3];
var searchThis = "";
//MAKE FOR LOOP A GLOBAL variable (so it will loop through songs as well)
for (var i = 3; i < userRequests.length; i++) {
  searchThis += " " + userRequests[i]};

/*CAN't GET WORKNG! :(*/
//different commands
switch(userCommands){
/*    case 'my-tweets':
        tweets();
        break;
    case 'spotify-this-song':
        song();
        break;*/
    case 'movie-this':
        movie();
        break;
/*    case 'do-what-it-says':
        doSomething();
        break;*/
}

//runs the "movie-this" function
function movie() {
//Store all of the arguments in an array
// var userRequest = process.argv;
//Create an empty variable for holding the movie name
/*var movieName = "";*/

//Loop through all the words in the node argument (use a for loop for inclusion)
 
// We then run the request module on a URL with a JSON
var queryUrl = "http://www.omdbapi.com/?t=" + userRequests + "&y=&plot=short&tomatoes=true&apikey=40e9cece";
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
  // If there were no errors and the response code was 200 (i.e. the request was successful)...
/*
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.*/
/*inquirer.prompt([
{
    type: 'list',
    name: 'theme',
    message: 'What would you like to see?',
    choices: [
      'My last tweets?',
      'Song information?',
      'Some information about a movie?',
    ]
  }]);*/
  // If there were no errors and the response code was 200 (i.e. the request was successful)...
/*
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.*/
/*inquirer.prompt([
{
    type: 'list',
    name: 'theme',
    message: 'What would you like to see?',
    choices: [
      'My last tweets?',
      'Song information?',
      'Some information about a movie?',
    ]
  }]);*/
