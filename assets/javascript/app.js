$(document).ready(function(){

//declare global variable
// this array will be based on skateboarding including professional skaters, tricks, magazines, sites, brands...
var topics = ["Chris Cole", "Shane O'neill", "Mike Mo Capaldi", "Nyjah Juston", "Paul Rodriguez", "Tony Hawk", 
"Andrew Reynolds", "Rodney Mullen", "Jamie Thomas", "PJ Ladd", "Chris Joslin", "Kickflip", "Ollie", "360 Flip", 
"Lazer Flip", "Zero Skateboards", "Thrasher Mag", "Nike SB", "Baker Skateboards"];

// This will display the buttons on the page as soon as the page is loaded
// The info comes from the topics array
function initialButtons(){
    // In order to avoid repeated buttons when the user adds their own, empty the previous ones
    $("#button-section").empty();

    // for as long as the length of the topics array, run the following...
    for (var i=0; i < topics.length ; i++){
        // dynamically create a new button
        var newBtn = $("<button>");
        // add some Bootstrap classes to it and also a custom one
        newBtn.addClass("btn btn-success initial-buttons");
        // add an attribute with the selected array index value as its value
        newBtn.attr("data-filter", topics[i]);
        // display the button's index value as its text
        newBtn.text(topics[i]);
        // add one by one to the button-section in the html
        $("#button-section").append(newBtn);
    }
};

// This function will be used to search the Giphy API
function searchGiphy() {

    // Since this is called by the buttons created dynamically, 'this' refers to the button's data-filter attribute value
    var buttonValue = $(this).attr("data-filter");
    // Number of search results to return
    var limit = 10;
    // The link to the API with my custom API key and search filters
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonValue +"&api_key=QPQXb6tfP8EP1P1Ci0aJnPiFOUxjDuj5" + "&limit=" + limit;
    // Empty the previous gifs displayed
    $("#gif-section").empty();

    // use the jquery ajax function to retrieve info from the Giphy API
$.ajax({
    url: queryURL,
    method: "GET"
    // once we have a succesful response...
}).then(function(response){

    // Store the search results in an easy to call variable
    var results = response.data;

    // loop through the results ten times...
    for (var j=0; j < results.length; j++) {
    // create a new div with some bootstrap class for each gif
    var resultsDisplayed = $("<div class='col-md-3'>");
    // save the image rating in this var
    var rating = results[j].rating;
    // create a new <p> element with the rating
    var ratingDisplay = $("<p>").html("<h5>Rating: " + rating + "</h5>");
    // link to the original image (gif)
    var gifURL = results[j].images.original.url;
    // link to the original still image
    var stillURL = results[j].images.original_still.url;
    // create a new image element with three attributes, default, still and animated
    var image = $("<img>").attr({"src" : stillURL, "data-still": stillURL, "data-animate" : gifURL});
    // add the Bootstrap class to keep images responsive within their divs
    image.addClass("img-fluid");
    // append the rating sentence and image to the var we created earlier
    resultsDisplayed.append(ratingDisplay);
    resultsDisplayed.append(image); 
    // display the all-inclusive var resultsDisplayed on the gif-section of the html page
    $("#gif-section").append(resultsDisplayed);
    }
    
});
};

// This function will be used to compare the still image to the gif when called upon by the user click
function compare(){

// If the attr source link of the image displayed is equal to the attr data-still link, 
if ($(this).attr("src")===$(this).attr("data-still")) {
    // change the attr source link of the image to the animated image link (gif)
    $(this).attr("src", $(this).attr("data-animate"));
}
// otherwise
else{
    // change the attr source link of the image to the still image link (data-still)
    $(this).attr("src", $(this).attr("data-still"));
}
};

// Every time the user clicks the submit button
$("#form-section").on("click", function(event){
// prevent the enter key or submit to refresh the page
event.preventDefault();
// store the user typed search term in this var
var userSearch = $("#user-input").val();
// add the userSearch to the topics array
topics.push(userSearch);
// call this function to display the initial buttons, but now with the new one added at the end also
initialButtons();
});

// call this function as soon as the page is loaded to display the buttons dynamically
initialButtons();

// Since the search buttons are being created dynamically, we add this event listener to the entire document
// so every time a search-term button is clicked, run this searchGiphy function
$(document).on("click", ".initial-buttons", searchGiphy);

// Since the gifs are being added dynamically, we add this event listener to the entire document
// so every time an image is clicked, run this compare function
$(document).on("click", "img", compare)

});