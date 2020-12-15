var currentDay = document.getElementById("currentDay");
var scheduleArea = document.getElementById("schedule");
var timeBlocks = document.getElementById("calendar-row");
var saveBtn = document.getElementsByClassName("saveBtn");
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

console.log(currentDate);
console.log(currentHour);

var savedItem = [];

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



// set localstorage

//if (window.localStorage) {
$(".text-entry").each(function () {
    var hours = $(this).parent().attr("data-hour");
    var todos = $(this).val().trim();
    //var todos = (($(this).parent()).children("textarea")).val();
    var scheduleInput = {
        hour: hours,
        text: todos,
    };
    savedItem.push(scheduleInput);
});

$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    //scheduleInput = $(this).siblings(".text-entry").val();
    alert(savedItem);
    localStorage.setItem("savedItem", JSON.stringify(savedItem));
});

//};




function colorCode() {
    $(".calendar-row").each(function () {
        var hourDisplay = $(this).attr("data-hour");
        console.log(hourDisplay);
        var calendarRow = $(".calendar-row");
        //add style to time blocks to show different color codes
        if (parseInt(hourDisplay) == currentHour) {
            $(this).addClass("present").removeClass("past future");
        }
        else if (parseInt(hourDisplay) < currentHour) {
            $(this).addClass("past").removeClass("present future");
        }
        else if (parseInt(hourDisplay) > currentHour) {
            $(this).addClass("future").removeClass("past present");
        };
    });
};

colorCode();

























