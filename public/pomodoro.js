let PomS = sec;
let PomM = document.querySelectorAll("input")[0];
let PomB = document.querySelectorAll("input")[2];
let fg = Array();
let fb = Array();
var btnStart = document.getElementById("btnStart");
var btnPause = document.getElementById("btnPause");
var btnCancel = document.getElementById("btnCancel");
var round = 0;
var roundControll = true;
var is_cal = false;
var ccanel = false;
var ppasue = false;
var timer;
btnStart.onclick = count;
btnPause.onclick = pause;
btnCancel.onclick = Cancel;

//var box2 = document.getElementsByTagName("div")[0];
// Count Ture
function count() {
    is_cal = true;
    ccanel = false;
    ppasue = false
}

// Pauese all False
function pause() {
    is_cal = false;
    ccanel = false;
    ppasue = true
}
// Cancel Ture and initial value
function Cancel() {
    is_cal = false
    ccanel = true;
    ppasue = false;
    min.value = 25;
    sec.value = 0;
    PomB.value = 5;

}
// timer showing and  Logic
timer = setInterval(function () {
    // Count state
    if (is_cal) {
        // start round
        if (round == 0) {
            round = 1;
            document.getElementById("round").innerHTML = round;
        }
        // sec --
        if (PomS.value >= 1 && PomM.value >= 0) {
            PomS.value--;
            document.getElementById("psec").innerHTML = PomS.value;
        }
        // work min --
        else if (PomM.value > 0) {
            PomS.value = 59;
            PomM.value--;
            document.getElementById("pmin").innerHTML = PomM.value;
            document.getElementById("psec").innerHTML = PomS.value;
            document.getElementById("timerWork").style.color = "#ff1100";
            document.getElementById("timerBreak").style.color = "#000";
        }
        // break min--
        else if (PomM.value <= 0 & PomS.value <= 0) {
            if (PomS.value >= 1 && PomB.value >= 0) {
                PomB.value--;
                document.getElementById("psec").innerHTML = PomS.value;
            }
            else if (PomB.value > 0) {
                PomS.value = 59;
                PomB.value--;
                document.getElementById("pmin").innerHTML = PomB.value;
                document.getElementById("psec").innerHTML = PomS.value;
                document.getElementById("timerWork").style.color = "#000";
                document.getElementById("timerBreak").style.color = "#ff1100";
            }

            // Long break
            else if (round > 0) {
                if (round % 4 == 0 & roundControll) {
                    alert('Long break now')
                    PomM.value = 0;
                    PomB.value = 30;
                    roundControll = false;
                }
                // add round++ and replace the number that user input
                else {
                    PomM.value = fg.slice(-1);
                    PomM.value = PomM.value;
                    PomB.value = fb.slice(-1);
                    PomB.value = PomB.value;
                    round++;
                    document.getElementById("round").innerHTML = round;
                    roundControll = true;
                }
            }
        }
    }
    //Cancel statement reset.
    else if (ccanel) {
        document.getElementById("pmin").innerHTML = PomM.value;
        document.getElementById("psec").innerHTML = PomS.value;
        PomM.value = PomM.value;
        fg.push(PomM.value)
        fb.push(PomB.value)
        document.getElementById("timerWork").style.color = "#000";
        document.getElementById("timerBreak").style.color = "#000";
        round = 0;
        document.getElementById("round").innerHTML = round;
    }
    //Pause statement not change anyting
    else if (ppasue) {

    }
    //default set and set by user
    else {
        document.getElementById("pmin").innerHTML = PomM.value;
        document.getElementById("psec").innerHTML = PomS.value;
        PomM.value = PomM.value;
        fg.push(PomM.value)
        fb.push(PomB.value)
        document.getElementById("round").innerHTML = round;
    }
}, 1000);
