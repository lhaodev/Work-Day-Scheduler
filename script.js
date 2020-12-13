
var test = document.getElementsByClassName("text-entry1");
console.log(test);

var test2 = document.getElementById("text-entry1");
console.log(test2);

var test3 = document.querySelectorAll("#text-entry1");
console.log(test3);

//show current day and time
var dynamicTime = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(dynamicTime, 1000);

//save function for the saveBtn
var saveItems = document.getElementById("save");

$("#save").on("click", function (event) {
    event.preventDefault();
    // var scheduleInput = document.getElementById("text-entry1").value.trim();
    var scheduleInput = document.getElementsByClassName("text-entry1").value;
    console.log(scheduleInput);
    var savedItem = [];
    savedItem = JSON.parse(localStorage.getItem("scheduleInput")) || [];
    savedItem.push(scheduleInput);
    alert(savedItem);
    localStorage.setItem("savedItem", JSON.stringify(savedItem));

});


