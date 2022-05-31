// set button and object
const bhmusic = document.getElementById("bhmusic");
var hmusic = document.getElementById("hmusic");
const bhtimer = document.getElementById("bhtimer");
var htimer = document.getElementById("htimer");
const bhcalendar = document.getElementById("bhcalendar");
var hcalendar = document.getElementById("hcalendar");
const bhtask = document.getElementById("bhtask");
var htask = document.getElementById("htask");
var mt = 0;

const bsetHide = document.getElementById("bsetHide");
var setHide = document.getElementById("setHide");
var checkhide = false;

// hide setting
bsetHide.addEventListener("click", function (e) {
    var setHide = document.getElementById("setHide");
    console.log(setHide);
    if (checkhide) {
        setHide.style.display = "none";
        checkhide = false;
   }
    else {
        setHide.style.display = "block";
        checkhide = true;
    }
});

//hide music
bhmusic.addEventListener("click", function (e) {
    var hmusic = document.getElementById("hmusic");
    if (bhmusic.checked == true) {
        hmusic.style.display = "block";
        mt -= 1;
    }
    else {
        hmusic.style.display = "none";
        mt += 1;
    }
    if (mt == 2) {
        var hmt = document.getElementById("mt");
        hmt.style.display = "none";
    }
    else {
        var hmt = document.getElementById("mt");
        hmt.style.display = "block";
    }
});

//hide timer
bhtimer.addEventListener("click", function (e) {
    var htimer = document.getElementById("htimer");
    if (bhtimer.checked == true) {
        htimer.style.display = "block";
        mt -= 1;
    }
    else {
        htimer.style.display = "none";
        mt += 1;
    }
    if (mt == 2) {
        var hmt = document.getElementById("mt");
        hmt.style.display = "none";
    }
    else {
        var hmt = document.getElementById("mt");
        hmt.style.display = "block";
    }
});

//hide calendar
bhcalendar.addEventListener("click", function (e) {
    var hcalendar = document.getElementById("hcalendar");
    if (bhcalendar.checked == true) {
        hcalendar.style.display = "block";
    }
    else {
        hcalendar.style.display = "none";
    }
});

//hide reading
bhreading.addEventListener("click", function (e) {
    var hreading = document.getElementById("hreading");
    if (bhreading.checked == true) {
        hreading.style.display = "block";
    }
    else {
        hreading.style.display = "none";
    }
});

//hide task
bhtask.addEventListener("click", function (e) {
    var htask = document.getElementById("htask");
    if (bhtask.checked == true) {
        htask.style.display = "block";
    }
    else {
        htask.style.display = "none";
        var addTaskContent = document.getElementById("addTaskContent");
        addTaskContent.style.display = "none";
    }
});