// Creating test div to see results via Prepros and browser inspector
var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "Hello World";

// Using window.onload to perform js functions after html elements load
function myfunc(){
  var mydiv = document.getElementById("mydiv");
  mydiv.innerHTML = "Hello World.";
};

window.onload = myfunc();

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

// Call the initialize function after elements load
window.onload = initialize();
// Scripts by Chris Archuleta, 2020
