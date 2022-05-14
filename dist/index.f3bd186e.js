let timef = 0;
let times = 0;
let timem = 0;
let zt_ks = false;
let fg = Array();
//timer
setInterval(()=>{
    if (zt_ks) timem++;
    if (timem == 60) {
        timem = 0;
        timef++;
        if (timef == 60) {
            timef = 0;
            times++;
        }
    }
    document.getElementById("s").innerHTML = times;
    document.getElementById("f").innerHTML = timef;
    document.getElementById("m").innerHTML = timem;
}, 1000);
//timer
function bulle(i) {
    switch(i){
        case 0:
            zt_ks = false;
            break;
        case 1:
            zt_ks = true;
            break;
        case 2:
            zt_ks = false;
            timef = 0;
            times = 0;
            timem = 0;
            break;
    }
}

//# sourceMappingURL=index.f3bd186e.js.map
