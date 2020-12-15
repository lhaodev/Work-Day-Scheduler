$(document).ready(function () {
    // listen for save button clicks

    $(".saveBtn").on("click", function () {
        //grabbing the values from HTML
        var input = $(this).siblings(".text-entry").val();
        var time = $(this).parent().attr("id");

        //put in locolStorage

        localStorage.setItem(time, input);
    });


    function hourChanger() {

        var currentHour = moment().hours();
        $(".calendar-row").each(function () {
            var hourGroup = parseInt($(this).attr("id").split("-")[1]);
            if (hourGroup < currentHour) {
                $(this).addClass("past");
            }
            else if (hourGroup === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    hourChanger();

    //var timeCheck = setInterval(hourChanger, 15000);

    // print saved data from local storage

    $("#hour-9 .text-entry").val(localStorage.getItem("hour-9"));
    $("#hour-10 .text-entry").val(localStorage.getItem("hour-10"));
    $("#hour-11 .text-entry").val(localStorage.getItem("hour-11"));
    $("#hour-12 .text-entry").val(localStorage.getItem("hour-12"));
    $("#hour-13 .text-entry").val(localStorage.getItem("hour-13"));
    $("#hour-14 .text-entry").val(localStorage.getItem("hour-14"));
    $("#hour-15 .text-entry").val(localStorage.getItem("hour-15"));
    $("#hour-16 .text-entry").val(localStorage.getItem("hour-16"));
    $("#hour-17 .text-entry").val(localStorage.getItem("hour-17"));

    //show current day and time

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

});
























// var currentDay = document.getElementById("currentDay");
// var scheduleArea = document.getElementById("schedule");
// var timeBlocks = document.getElementById("calendar-row");
// var saveBtn = document.getElementsByClassName("saveBtn");
// var currentDate = moment().format("dddd, MMMM Do");
// var currentHour = moment().format("H");

// console.log(currentDate);
// console.log(currentHour);

// var savedItem = [];

// var savedThing = localStorage.getItem("savedItem");
// if (savedThing) {
//     scheduleInput = savedThing
// };

// console.log("I'm currently saving: ", savedThing)


// //show current day and time
// var dynamicTime = function () {
//     document.getElementById("currentDay")
//         .innerHTML = moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a');
// }
// setInterval(dynamicTime, 1000);



// // set localstorage
// //if (window.localStorage) {
// $(".text-entry").each(function () {
//     var hours = $(this).parent().attr("data-hour");
//     var todos = $(this).val().trim();
//     //var todos = (($(this).parent()).children("textarea")).val();
//     var scheduleInput = {
//         hour: hours,
//         text: todos,
//     };
//     savedItem.push(scheduleInput);
// });

// $(".saveBtn").on("click", function (event) {
//     event.preventDefault();

//     //scheduleInput = $(this).siblings(".text-entry").val();
//     alert(savedItem);
//     localStorage.setItem("savedItem", JSON.stringify(savedItem));
// });

// //};




// function colorCode() {
//     $(".calendar-row").each(function () {
//         var hourDisplay = $(this).attr("data-hour");
//         console.log(hourDisplay);
//         var calendarRow = $(".calendar-row");
//         //add style to time blocks to show different color codes
//         if (parseInt(hourDisplay) == currentHour) {
//             $(this).addClass("present").removeClass("past future");
//         }
//         else if (parseInt(hourDisplay) < currentHour) {
//             $(this).addClass("past").removeClass("present future");
//         }
//         else if (parseInt(hourDisplay) > currentHour) {
//             $(this).addClass("future").removeClass("past present");
//         };
//     });
// };

// colorCode();

























