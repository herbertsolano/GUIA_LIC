if (window.addEventListener) {
    window.addEventListener("load", keyHit, false);
}
else if (window.attachEvent) {
    window.attachEvent("load", keyHit);
} 

document.onkeydown = keyHit;
var thisPic = 0;
function keyHit(evt) {
    var myPix = new Array(
        "img/s1.jpg",        "img/s2.jpg",        "img/s3.jpg",        "img/s4.jpg",    
        "img/s5.jpg",        "img/s6.jpg",        "img/s7.jpg",        "img/s8.jpg",
        "img/s9.jpg",        "img/s10.jpg"
    );
    var ant = document.getElementById("btnA");
    var sig= document.getElementById("btnS");
    if (ant.addEventListener ) {
        ant.addEventListener("click", function () {
            chgSlide(-1);
            return false;
        }, false);
    }
    if (sig.addEventListener ) {
        sig.addEventListener("click", function () {
            chgSlide(1);
            return false;
        }, false);
    }
    var imgCt = myPix.length - 1;
    var ltArrow = 37;
    var rtArrow = 39;
    var thisKey = (evt) ? evt.which : window.event.keyCode;
    if ((thisKey == ltArrow)) {
        chgSlide(1);
    }
    else if ((thisKey == rtArrow)) {
        chgSlide(-1);
    }
    return false;
    function chgSlide(direction) {
        thisPic = thisPic + direction;
        if (thisPic > imgCt) {
            thisPic = 0;
        }
        if (thisPic < 0) {
            thisPic = imgCt;
        }
        document.getElementById("myPicture").src = myPix[thisPic];
    }
}