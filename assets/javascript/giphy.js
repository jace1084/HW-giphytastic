$(document).ready(function(){

	//first, create my original array that will (hopefully) be updated with the users choices.

	var subj = ["Princess Leia", "Luke Skywalker", "Anakin Skywalker", "Yoda", "R2-D2", "C-3PO", "Han Solo", "Chubacca"];

	//Now, create a function that will display the gif buttons...loop throught the array

	function disButtons(){
		$("#buttonsView").empty();
		for(var i=0; i<subj.length; i++){
			var gifButton = $("<button>");
			var gifButton.addClass("fav");
			var gifButton.addClass("btn btn-primary");
			gifButton.attr("data-name", subj[i]);
			gifButton.text(subj[i]);
			$("#buttonsView").append(gifButton);
		}
	}

	//Next, create a function that will display the gif buttons

	function newButton(){
		$("#addGif").on("click", function(){
			var char = $("#subjInput").val().trim();
			if (char == ""){
				return false; //This will stop blank buttons from being created
			}

			subj.push(char);

			disButtons();
			return false;

		});
	}

	//Now, create a function to remove the last button.
	function removeButton(){
		var char = $(this).attr("data-name");
		var queryURL = 

		$.ajax({
			url: queryURL,
			method: "GET"
		})

		// This will show the results of the gifs
		.done(function(res){
			$("#gifsView").empty();
			var results = res.data;
			if(res == ""){
				alert("Aww, I don't have a Giphy for that one, try again!!");

			}
			for (var i = 0; i<res.length; i++);
				//This will put the gifs in the specified div
				var gifDiv = $("<div>");
				//This is going to add the rating of the gif
				var gifRating = $("<p>").text("Rating " + res[i].rating);
				gifDiv.append(gifRating);

		//This will now pull the Gif from the site

		})
	} 

	
})