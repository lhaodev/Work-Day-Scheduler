$(document).ready(function () {
    // listen for save button clicks

    $(".saveBtn").on("click", function () {

        //grabbing the values from HTML 
        //John helped me with LocalStorage
        var input = $(this).siblings(".text-entry").val();
        var time = $(this).parent().attr("id");

        //put in locolStorage
        localStorage.setItem(time, input);
    });


    function hourChanger() {

        var currentHour = moment().hours();
        $(".calendar-row").each(function () {
            //John helped with split function
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

    //john helped with LocalStorage function
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



