let timehour = 0;
let timemin = 0;
let timesec = 0;
let timer_state = false;

//timer logic
setInterval(() => {
    if (timer_state)
        timesec++;
    if (timesec == 60) {
        timesec = 0;
        timemin++;
        if (timemin == 60) {
            timemin = 0;
            timehour++;
        }
    }
    // replace html s. f. m.
    document.getElementById("thour").innerHTML = timehour;
    document.getElementById("tmin").innerHTML = timemin;
    document.getElementById("tsec").innerHTML = timesec;
}, 1000);

//timer button
function controller(i) {
    switch (i) {
        //start count
        case 0:
            timer_state = true;
            break;
        // pause count
        case 1:
            timer_state = false;
            break;
        // cancel count reset
        case 2:
            timer_state = false;
            timemin = 0;
            timehour = 0;
            timesec = 0;
            break;
    }
}