/* Animated Battery Charging */
function chargebattery() {
    var a = document.getElementById("div1");
    a.innerHTML = "&#xf244;";
    setTimeout(function () {
        a.innerHTML = "&#xf243;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
      }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
      }, 3000);
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
      }, 4000);
  }
  chargebattery();
  setInterval(chargebattery, 5000);
 
 
 
 
/* Slideshow / Carousel */
let slideIndex = 0;
showSlides();
 
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
 
 
 
 
 
/* Promise to fetch data */
 
// Function to simulate fetching data from an API with a delay
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data has been fetched!<br>");
    }, 2000); // Simulating a delay of 2 seconds
  });
}
 
// Async function representing a sequence of events
async function fetchDataSequence() {
 
  let outputHTML = document.getElementById('myPromiseOutput');
 
  outputHTML.innerHTML = "Start fetching data...<br>" ;
  console.log("Start fetching data...");
 
  try {
    // Step 1: Fetching data
    const data = await fetchData();
    outputHTML.innerHTML += data;
    console.log(data);
 
    // Step 2: Processing data
    outputHTML.innerHTML += "Processing the fetched data...<br>";
    console.log("Processing the fetched data...");
 
    // Step 3: Displaying the processed data
    outputHTML.innerHTML += "Data processing complete!<br>";
    console.log("Data processing complete!");
  } catch (error) {
    outputHTML.innerHTML += "Error fetching or processing data:" + error + "<br>";
    console.error("Error fetching or processing data:", error);
  }
 
  outputHTML.innerHTML += "End of the sequence. <br>";
  console.log("End of the sequence.");
}
 
// Trigger the sequence
fetchDataSequence();


/* Timeouts and Intervals by Date/Time */
const myLocaleInterval = setInterval(greet);
 
 
/* greet at 5s automatically  */
function greet() {
    let myTimeDiv = document.getElementById('myTimeDiv');
    const date = new Date();  
    myTimeDiv.innerHTML = date.toLocaleTimeString();
}
 
/* Stop Button */
//Add what to do when clicked
document.getElementById("stop").addEventListener("click", stopTheClock);
 
function stopTheClock(){
  clearInterval(myLocaleInterval);
}
 
// To stop the interval after a certain time (e.g., 10 seconds), you can use setTimeout
//This excludes HTML and runs automatically
/*setTimeout(function () {
    clearInterval(intervalId,2000); // Stop the interval
    //console.log("Interval stopped after 10 seconds.");
}, 10000);*/

//setTimeout (function() {
 //   clearInterval(intervalId, 2000);
  //  console.log ("HalloHallo:");
//}, 10000)



//const myLocaleInterval = setInterval(greet, 5000);


//display the time on my app
var today = new Date();
var time =  today.getHours() + ":" + today.getMinutes();
