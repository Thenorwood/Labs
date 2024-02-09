var myNextBirthday = new Date("2024-07-18T00:00:00"); // Set to July 18th
var now = new Date();
var currentYear = now.getFullYear();
var birthDateThisYear = new Date(myNextBirthday.setFullYear(currentYear));

// If your birthday this year has already passed, calculate for next year.
if (birthDateThisYear < now) {
  myNextBirthday.setFullYear(currentYear + 1);
}

function updateCountdown() {
  var now = new Date();
  var timeLeft = myNextBirthday - now; // time left in milliseconds

  var seconds = Math.floor(timeLeft / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  var weeks = Math.floor(days / 7);
  days -= weeks * 7;
  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.getElementById("countdown").innerHTML = 
    "There are " + weeks + " weeks, " + days + " days, " + hours + " hours, " +
    minutes + " minutes, and " + seconds + " seconds until my next birthday!";
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
