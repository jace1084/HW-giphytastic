$( document ).ready(function() {

	//first, create my original array that will (hopefully) be updated with the users choices.

	var subj = ["Princess Leia", "Luke Skywalker", "Anakin Skywalker", "Yoda", "R2-D2", "C-3PO", "Han Solo", "Chewbacca"];

	//Now, create a function that will display the gif buttons...loop throught the array

	function disButtons(){
		$("#buttonsView").empty();
		for(var i=0; i<subj.length; i++){
			var gifButton = $("<button>");
			gifButton.addClass("fav");
			gifButton.addClass("btn btn-primary");
			gifButton.attr("data-name", subj[i]);
			gifButton.text(subj[i]);
			$("#buttonsView").append(gifButton);
		}
	}

	// Next, create a function that will display the gif buttons

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
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + char + "&api_key=QFIiD3HZspx02x93i3uxFzMlF0dTiA8N"

		$.ajax({
			url: queryURL,
			method: "GET"
		});

		// This will show the results of the gifs
		done(function(res){
			$("#gifsView").empty();
			var results = res.data;
			if(res == ""){
				alert("Aww, I don't have a Giphy for that one, try again!!");

			}
			for (var i = 0; i<results.length; i++){
				//This will put the gifs in the specified div
				var gifDiv = $("<div>");
				//This is going to add the rating of the gif
				var gifRating = $("<p>").text("Rating " + results[i].rating);
				gifDiv.append(gifRating);

		//This will now pull the Gif from the site.

				var gifImg = $("#<img>");
				gifImg.attr("src", results[i].images.fixed_height_small_still.url);
				//This is for paused imgs 
				gifImg.attr("data-still", results[i].images.fixed_height_small_still.url);
				//This is for animated imgs
				gifImg.attr("data-animate", results[i].images.fixed_height_small.url);
				//When imgs are already paused
				gifImg.attr("data-state", "still");
				gifImg.addClass("image");
				gifDiv.append(gifImg);
				//Next, I will add a new div to the existing divs
				$("gifsView").prepend(gifDiv);

			}

		});
	} 

		//Here is the list of the Characters already provided

		disButtons();
		addButton();
		removeButton();

		//Here are the event listeners
		$(document).on("click", ".fav", displayGifs);
		$(document).on("click", ".image", function(){
			var state = $(this).attr("data-state");
			if (state == "still"){
				$(this).attr("src", $(this).data("animate"));
				$(this).attr("data-source", "animate");

			}else{
				$(this).attr("src", $(this).data("still"));
				$(this).attr("data-state", "still");

			}

		});

	});


