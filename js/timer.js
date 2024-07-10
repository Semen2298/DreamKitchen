document.addEventListener("DOMContentLoaded", function() {
    const countdownKey = 'countdownEndDate';
    let endDate;

    if (localStorage.getItem(countdownKey)) {
        endDate = new Date(localStorage.getItem(countdownKey)).getTime();
    } else {
        endDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
        localStorage.setItem(countdownKey, new Date(endDate));
    }

    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = endDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
        }
    }, 1000);
});
