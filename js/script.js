$(document).ready(function() {

//GOAL: When user chooses a city name from a dropdown menu, the background photo changes to match that city.

//1. User clicks on down arrow.

	//Click event
	$("#city-type").click(showList);

//2. List of cities appears.

	function showList() {
}
	//(I grabbed the subsequent code from the Internet and have no idea how or why it works.)

	//Make list of cities.
	var citiesArray = new Array(); 
	citiesArray[0]="Austin";
	citiesArray[1]="Los Angeles";
	citiesArray[2]="New York";
	citiesArray[3]="San Francisco";
	citiesArray[4]="Sydney";

	//Display array. 
	var cities = document.getElementById("city-type");
	for (i=0;i<citiesArray.length;i++) 
	{
	var entry = document.createElement("option");
	entry.text = citiesArray[i];
	cities.add(entry ,null);
	}

//3. User selects a city.

	//Form submission
	$("select").change(changePhoto);

//4. Background photo changes.
	
	function changePhoto(event) {

	event.preventDefault();

	var city = $("#city-type").val();

		if (city == "New York") {
		$("body").removeClass();
		$("body").addClass("nyc");
		//Clear the form on submission
		document.getElementById("form").reset();
		}

		else if (city == "San Francisco") {
		$("body").removeClass();
		$("body").addClass("sf");
		document.getElementById("form").reset();
		}

		else if (city == "Austin") {
		$("body").removeClass();
		$("body").addClass("austin");
		document.getElementById("form").reset();
		}

		else if (city == "Los Angeles") {
		$("body").removeClass();
		$("body").addClass("la");
		document.getElementById("form").reset();
		}

		else if (city == "Sydney") {
		$("body").removeClass();
		$("body").addClass("sydney");
		document.getElementById("form").reset();
		}  

	}




});