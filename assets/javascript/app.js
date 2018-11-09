$(document).ready(function(){
//declare global variables
// this array will be skateboarding based including professional skaters, tricks, magazines, sites, brands...
var topics = ["Chris Cole", "Shane O'neill", "Mike Mo Capaldi", "Nyjah Juston", "Paul Rodriguez", "Tony Hawk",
"Rodney Mullen", "Jamie Thomas", "PJ Ladd", "Kickflip", "Ollie", "360 Flip", "Zero Skateboards", "Thrasher Mag"]

// var APIkey = "QPQXb6tfP8EP1P1Ci0aJnPiFOUxjDuj5";

// var searchTerm;

function initialButtons(){
    for (var i=0; i<topics.length ; i++){
        var newBtn = $("<button>");
        newBtn.addClass("btn btn-success initial-buttons");
        newBtn.attr("data-filter", topics[i]);
        newBtn.text(topics[i]);
        $("#button-section").append(newBtn);
    }
};

function searchGiphy() {

    var buttonValue = $(this).attr("data-filter");
    console.log(buttonValue);
    var limit = 10;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonValue +"&api_key=QPQXb6tfP8EP1P1Ci0aJnPiFOUxjDuj5" + "&limit=" + limit;
    console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    var results = response.data;
    for (var j=0; j<results.length; j++) {
    var rating = results[j].rating;
    var p = $("<h6>").text("Rating: " + rating);

    var imgURL = results[j].images.original_still.url;
    var stillImage = $("<img>").attr("src", imgURL);

    $("#gif-section").prepend(p , stillImage);
    }
    
});
}

initialButtons();

$(document).on("click", ".initial-buttons", searchGiphy);







});