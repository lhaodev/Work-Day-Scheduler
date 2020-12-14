var currentDay = document.getElementById("currentDay");
var scheduleArea = document.getElementById("schedule");
var timeBlocks = document.getElementById("calendar-row");

var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

console.log(currentDate);
console.log(currentHour);

var savedItem = [];
var scheduleInput = [];

var savedThing = localStorage.getItem("savedItem");
if (savedThing) {
    scheduleInput = savedThing
};

console.log("I'm currently saving: ", savedThing)


//show current day and time
var dynamicTime = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(dynamicTime, 1000);


// function init() {
//     //for each time block
//     timeBlocks.each(function () {
//         var thisBlockHr = parseInt($(this).attr("data-hour"));
//         var scheduleInput = {
//             //set related todo hour to same as data-hour
//             hour: thisBlockHr,
//             //get text ready to accept string input
//             text: "",
//         };
//         //add this todo object to array
//         savedItem.push(scheduleInput);
//     });

//     localStorage.setItem("savedItem", JSON.stringify(savedItem));

// };

// function renderSchedule() {
//     savedItem = JSON.parse(window.localStorage.getItem("savedItem")) || [];
//     //loop thru array then assign the text to the timeBlock with data-hour equal to hour. 
//     //make a variable where [data-hour={hour}] then plug it in to the selector $('[data-hour={hour}')
//     for (var i = 0; i < savedItem.length; i++) {
//         var itemHour = savedItem[i].hour;
//         var itemText = savedItem[i].text;

//         $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);
//     }
//     console.log(savedItem);
// };


// $(".saveBtn").on("click", function (event) {
//     event.preventDefault();

//     var hourToUpdate = $(this).parent().attr("data-hour");
//     var itemToAdd = (($(this).parent()).children("textarea")).val();

//     //see which item we need to update based on the hour of the button clicked matching
//     for (var j = 0; j < savedItem.length; j++) {
//         if (savedItem[j].hour == hourToUpdate) {
//             //set its text to what was added to textarea
//             savedItem[j].text = itemToAdd;
//         }
//     }
//     localStorage.setItem("savedItem", JSON.stringify(savedItem));
//     renderSchedule();
// });


var hourDisplay = $(".calendar-row").attr("data-hour");
console.log(hourDisplay);
var calendarRow = $(".calendar-row");

//add style to time blocks to show different color codes
if (parseInt(hourDisplay) === parseInt(currentHour)) {
    $(".calendar-row").addClass("present").removeClass("past future");
}
else if (parseInt(hourDisplay) < parseInt(currentHour)) {
    $(".calendar-row").addClass("past").removeClass("present future");
}
else if (parseInt(hourDisplay) > parseInt(currentHour)) {
    $(".calendar-row").addClass("future").removeClass("past present");
};


























