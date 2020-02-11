// Creating test div to see results via Prepros and browser inspector
var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "Hello World";

// Using window.onload to perform js functions after html elements load
function myfunc(){
  var mydiv = document.getElementById("mydiv");
  mydiv.innerHTML = "Hello World.";
};

window.onload = myfunc();

// Using AJAX with native JS functions
function jsAjax(){
  // Create function to request AJAX
  var ajaxRequest = new XMLHttpRequest();
  // Define variable to hold data
  var mydata;



  // Create event handler to send data to callback function
  // where it can be held while page loads
  ajaxRequest.onreadystatestage = function(){
    if (ajaxRequest.readyState == 4){
      callback(ajaxRequest.response);
    };
  };

  // Open server connection
  ajaxRequest.open('GET','data/MegaCities.geojson',true);

  // Make data response type JSON
  ajaxRequest.responseType = "json";

  // Send the request
  ajaxRequest.send();
};

// Define callback function
function callback(response){
  // Tasks using data are in this block so that they can be
  // used as server responds to data requests
  // Print data by calling it within AJAX method
  var mydata = ajaxRequest.response;
  console.log(mydata);
  console.log(response);
};

// Call AJAX function after elements load
window.onload = jsAjax();

// Initialize function when page loads, which calls the table function
function initialize(){
  newTable();
};

// Function for making new table
function newTable(){
  // Create arrays
  var name = [
    'Kitty',
    'Oreo',
    'Snowbell'
  ];
  var birthYear = [
    2013,
    2012,
    2003
  ];

  // Make table element to be filled
  var table = document.createElement("table");

  // Make header row to be filled
  var headerRow = document.createElement("tr");

  // Add column for names
  var nameColumn = document.createElement("th");
  nameColumn.innerHTML = "Name";
  headerRow.appendChild(nameColumn);

  // Add column for birth years
  var birthYearColumn = document.createElement("th");
  birthYearColumn.innerHTML = "Birth Year";
  headerRow.appendChild(birthYearColumn);

  // Add row, with the columns appended to them, to the table
  table.appendChild(headerRow);

  // Add rows for each cat with a for loop
  for (var i = 0; i < name.length; i++){
    var tr = document.createElement("tr");

    var cat = document.createElement("td");
    cat.innerHTML = name[i];
    tr.appendChild(cat);

    var year = document.createElement("td");
    year.innerHTML = birthYear[i];
    tr.appendChild(year);

    table.appendChild(tr);
  };

  // Add table to div in index.html
  var mydiv = document.getElementById("mydiv");
  mydiv.appendChild(table);
};

// console.log(mydata);

// Call the initialize function after elements load
window.onload = initialize();
// Call AJAX function after elements load
// window.onload = jsAjax();
// Scripts by Chris Archuleta, 2020
