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

// create event handlers
button.on("click", runEnter);

// function to filter the table based on entry
function runEnter() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");

    // Get the value property of the input elements
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value").toLowerCase();

    console.log(dateValue);
    console.log(cityValue);

    // filter the table based on input
    if (dateValue) {
        filteredData = tableData.filter(ufo => ufo.datetime === dateValue);
    }
    if (cityValue) {
        filteredData = tableData.filter(ufo => ufo.city === cityValue);
    }

    console.log(filteredData);

    // clear the table 
    var body = d3.select("#body");
    body.html("");

    // append rows to the table
    filteredData.forEach((filter) => {
        var row = tbody.append("tr");
        Object.entries(filter).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}