// from data.js
var tableData = data;

// select the table body
var tbody = d3.select("tbody");

// append rows to the table
tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// select the button and the form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// function to filter the table based on entry
function runEnter() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // filter the table based on input
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);

    // clear the table 
    var body = d3.select("#body");
    body.html("");
}