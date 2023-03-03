
    var interval = setInterval(function(){
    let countDownDate = new Date("May 31, 2023 17:00:00").getTime();
    let now = new Date().getTime();

    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock").innerHTML = days + "d " + hours + "h" + minutes + "m " +
    seconds + "s ";

    if (distance < 0){
        clearInterval(interval);
        document.getElementById("clock").innerHTML = "MIDSUMER;"
    }
 }, 1000);