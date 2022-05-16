let PomS = sec;
let PomM = document.querySelectorAll("input")[1];
let PomB = document.querySelectorAll("input")[3];
let fg = Array();
let fb = Array();
var btnStart=document.getElementById("btnStart");
var btnPause=document.getElementById("btnPause");
var btnCancel=document.getElementById("btnCancel");
var is_cal=false;
var timer;
btnStart.onclick=count;
btnPause.onclick=pause;
btnCancel.onclick=Cancel;

var box2=document.getElementsByTagName("div")[0];
function count(){
is_cal=true;   
}

function pause(){
is_cal=false;
}

function Cancel(){
is_cal=false;
min.value=25;
sec.value=0;

PomB.value=5;
}

timer=setInterval(function(){
if(is_cal){
    if(PomS.value>=1 && PomM.value>=0){
        PomS.value--
        document.getElementById("psec").innerHTML = PomS.value;
    }

    else if(PomM.value>0){
        PomS.value=59;
        PomM.value--
        document.getElementById("pmin").innerHTML = PomM.value;
        document.getElementById("psec").innerHTML = PomS.value;
    }

    else if (PomM.value <= 0 & PomS.value <= 0) {
        if(PomS.value>=1 && PomB.value>=0){
        PomS.value--
        document.getElementById("psec").innerHTML = PomS.value;
        }
        else if(PomB.value>0){
        PomS.value=59;
        PomB.value--
        document.getElementById("pmin").innerHTML = PomB.value;
        document.getElementById("psec").innerHTML = PomS.value;
        }
        else{
        PomM.value=fg.slice(-1);
        PomM.value=PomM.value;
        PomB.value=fb.slice(-1);
        PomB.value=PomB.value;
        }
    }
}
else{
    document.getElementById("pmin").innerHTML = PomM.value;
    document.getElementById("psec").innerHTML = PomS.value;
    PomM.value=PomM.value;
    fg.push(PomM.value)
    fb.push(PomB.value)
}
},1000);
