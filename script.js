//show current day and time

var dynamicTime = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(dynamicTime, 1000);



