// Callback function to work after
// server receives and sends data
function debugCallback(response){
  // Define variable to hold response
  mydata = response;
  // Convert data to strings and add to "mydiv"
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
  // Add data to "mydiv"
  $(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

// Define AJAX function
function debugAjax(){
  // Create variable for callback function
  var mydata;
  // JQuery AJAX method with path, data type, and success sequence
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
      mydata = response;
      // Call callback function
			debugCallback(mydata);
      // Display the GeoJSON data on the console
      console.log(mydata);
    }
	});
};
// Call AJAX function upon loading the page
window.onload = debugAjax();
