function digitalClock() {

    const clockDisplay = document.getElementById("timeDisplay");
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    clockDisplay.textContent = `${hours}:${minutes}:${seconds}` + " hrs"


    const dateDisplay = document.getElementById("dateDisplay");
    const dateToday = new Date();
    let day = dateToday.getDay();
    let month = dateToday.getMonth();
    let date = dateToday.getDate();
    let year = dateToday.getFullYear();

    if (date === 1 || date === 21 || date === 31) {
        date = date + "st";
    }
    else if (date === 2 || date === 22) {
        date = date + "nd";
    }
    else if (date === 3 || date === 23) {
        date = date + "rd";
    }
    else {
        date = date + "th";
    }


    dateDisplay.textContent = `${matchDay(day)}, ${matchMonth(month)} ${date} ${year} `;

}

function matchMonth(month) {

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[month];
}

function matchDay(day) {

    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayNames[day];
}



setInterval(digitalClock, 100);
digitalClock();



