
function init() {
    var btnagregar = document.getElementById("add");
    var btneliminar = document.getElementById("remove");
    var hElement = document.getElementById("head");
    var clsName;
    if (btnagregar.addEventListener) {
        btnagregar.addEventListener("click", function () {
            clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
            CSSClass.add(hElement, clsName);
        }, false);
    }
    else if (btnagregar.attachEvent) {
        btnagregar.attachEvent("onclick", function () {
            clsName = document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
            CSSClass.add(hElement, clsName);
        });
    }
    if (btneliminar.addEventListener) {
        btneliminar.addEventListener("click", function () {
            clsName =
                document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
            CSSClass.remove(hElement, clsName);
        }, false);
    }
    else if (btneliminar.attachEvent) {
        btneliminar.attachEvent("onclick", function () {
            clsName =
                document.frmclass.classes.options[document.frmclass.classes.selectedIndex].value;
            CSSClass.remove(hElement, clsName);
        });
    }
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", init);
}


var CSSClass = {}; 
CSSClass.is = function (e, c) {
    if (typeof e == "string") e = document.getElementById(e);
    var classes = e.className;
    if (!classes) return false; 
    if (classes == c) return true;
    return e.className.search("\\b" + c + "\\b") != -1;
};
CSSClass.add = function (e, c) {
    if (typeof e == "string") e = document.getElementById(e); 
        if (CSSClass.is(e, c)) return; 
    if (e.className) c = " " + c
    e.className += c;
};
CSSClass.remove = function (e, c) {
    if (typeof e == "string") e = document.getElementById(e);
    e.className = e.className.replace(new RegExp("\\b" + c + "\\b\\s*", "g"), "");
}