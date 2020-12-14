var currentDay = document.getElementById("currentDay");
var scheduleArea = document.getElementById("schedule");
var timeBlocks = document.getElementById("calendar-row");

var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

console.log(currentDate);
console.log(currentHour);

var savedItem = [];
var scheduleInput = [];

//show current day and time
var dynamicTime = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(dynamicTime, 1000);


function init() {
    //for each time block
    timeBlocks.each(function () {
        var thisBlockHr = parseInt($(this).attr("data-hour"));
        var scheduleInput = {
            //set related todo hour to same as data-hour
            hour: thisBlockHr,
            //get text ready to accept string input
            text: "",
        };
        //add this todo object to todoitems array
        savedItem.push(scheduleInput);
    });

    localStorage.setItem("savedItem", JSON.stringify(savedItem));

};
































