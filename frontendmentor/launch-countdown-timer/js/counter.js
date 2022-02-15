

var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day-c").innerHTML = days;
    document.getElementById("hour-c").innerHTML = hours;
    document.getElementById("min-c").innerHTML = minutes;
    document.getElementById("sec-c").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("day-c").innerHTML = "00";
        document.getElementById("hour-c").innerHTML = "00";
        document.getElementById("min-c").innerHTML = "00";
        document.getElementById("sec-c").innerHTML = "00";
    }
}, 1000);