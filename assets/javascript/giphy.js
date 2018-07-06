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
	
	
})