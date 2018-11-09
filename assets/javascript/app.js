$(document).ready(function(){
//declare global variables
// this array will be skateboarding based including professional skaters, tricks, magazines, sites, brands...
var topics = ["Chris Cole", "Shane O'neill", "Mike Mo Capaldi", "Nyjah Juston", "Paul Rodriguez", "Tony Hawk",
"Rodney Mullen", "Jamie Thomas", "PJ Ladd", "Kickflip", "Ollie", "360 Flip", "Zero Skateboards", "Thrasher Mag"]

// var APIkey = "QPQXb6tfP8EP1P1Ci0aJnPiFOUxjDuj5";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=QPQXb6tfP8EP1P1Ci0aJnPiFOUxjDuj5&q=";

function initialButtons(){
    for (var i=0; i<topics.length ; i++){
        var newBtn = $("<button>");
        newBtn.addClass("btn btn-success initial-buttons");
        newBtn.attr("data-filter", topics[i]);
        newBtn.text(topics[i]);
        $("#button-section").append(newBtn);
    }
};

function 


$(document).on("click", ".initial-buttons", );


initialButtons();




});