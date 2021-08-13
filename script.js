var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page//
var showCurrentTime = function(){
    //display the string on the webpage//
    var clock = document.getElementById("clock");
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // set hours
    if (hours >= noon)
    {
        meridian = "PM"
    }

    if (hours > noon)
    {
        hours = hours - 12;
    }

    //set minutes
    if (minutes < 10)
    {
        minutes = "0" + seconds;
    }

    //set seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    //put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + ':' + meridian + '!';

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function(){
    var time = new Date().getHours();
    var messagetext;
    var image= "cat4.jpg"

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJs = document.getElementById("lolcatimage");
    if (time==partytime) {
       image = 'cat1.jpg'; messagetext = "Let's Party!" 
    }
    else if (time == wakeuptime) {
        image = "cat2.jpg"; messagetext = "Wake Up!";
    }
    else if (time == lunchtime) {
        image = "cat3.jpg"; messagetext = "Let's have some Lunch!";
    }
    else if (time == naptime) {
        image = "Good_night.jpg"; messagetext = "sleep Tight!";
    }
    else if (time < noon) {
        image = "Good_morning.jpg"; messagetext = "Good Morning!";
    }
    else if (time >= evening) {
        image = "Good_evening.jpg"; messagetext = "Good Evening!";
    }
    else{
        image = "Good_afternoon.jpg"; messagetext = "Good Afternoon!"
    }

    console.log(messagetext);
    timeEventJS.innerText = messagetext;
    lolcatimage.src = image;

    showCurrentTime();
};

updateClock();

//Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock,oneSecond);


//Getting the party time button to work
var partyButton = document.getElementById("partyTimeButton")

var partyEvent = function() {
    if (partytime>0) {
        partytime= new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#OA8DAB";
    }
    else{
        partytime= -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

//Activates Wake up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function(){
    wakeuptime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function(){
    lunchtime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

//Activates Nap-time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function(){
    naptime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);