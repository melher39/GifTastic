$(document).ready(function(){
//declare global variables
// this array will be skateboarding based including professional skaters, tricks, magazines, sites, brands...
var topics = ["Chris Cole", "Shane O'neill", "Mike Mo Capaldi", "Nyjah Juston", "Paul Rodriguez", "Tony Hawk",
"Rodney Mullen", "Jamie Thomas", "PJ Ladd", "Chris Joslin", "Kickflip", "Ollie", "360 Flip", "Lazer Flip",
"Zero Skateboards", "Thrasher Mag", "Nike SB", "Baker Skateboards"]


function initialButtons(){
    for (var i=0; i < topics.length ; i++){
        var newBtn = $("<button>");
        newBtn.addClass("btn btn-success initial-buttons");
        newBtn.attr("data-filter", topics[i]);
        newBtn.text(topics[i]);
        $("#button-section").append(newBtn);
    }

    $()
};


function searchGiphy() {

    var buttonValue = $(this).attr("data-filter");
    console.log(buttonValue);
    var limit = 10;
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonValue +"&api_key=QPQXb6tfP8EP1P1Ci0aJnPiFOUxjDuj5" + "&limit=" + limit;
    console.log(queryURL);
    $("#gif-section").empty();

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    var results = response.data;

    for (var j=0; j < results.length; j++) {
    var rating = results[j].rating;
    var p = $("<h6>").text("Rating: " + rating);

    var gifURL = results[j].images.original.url;
    

    var stillURL = results[j].images.original_still.url;
    
    var image = $("<img>").attr({"src" : stillURL, "data-still": stillURL, "data-animate" : gifURL, "data-state": "still"});
    

    $("#gif-section").append(p , image);
    }
    
});
};


function compare(){

if ($(this).attr("src")===$(this).attr("data-still")) {

    $(this).attr("src", $(this).attr("data-animate"));
}
else{
    $(this).attr("src", $(this).attr("data-still"));
}

};

$("#form-section").on("click", function(){

});



initialButtons();

$(document).on("click", ".initial-buttons", searchGiphy);

$(document).on("click", "img", compare)







});