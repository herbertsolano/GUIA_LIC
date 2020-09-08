var modal = document.getElementById("modal");
var container = document.getElementById("container");
var formDimensiones = document.getElementById("dimensiones");
var tabla = document.getElementById("tabla");
var table = document.getElementById("table");
var actualizar = document.getElementById("actualizar");
var matriz = [];
var state = true;
var x=0,y=0;
var xS=null,yS=null;
var cellS = null;
function validarDimensiones(){
    var reg = /^\d{1,}$/;
    if(!reg.test(this.value)){
        this.style.border = "2px solid red";
        state = false;
    } else {
        this.style.border = "2px solid #5C2561";
        state = true;
    }
}

function formDim(event){
    event.preventDefault();
    if(!state){
        alert("No se han validado los campos");
    } else {
        modal.style.display = "none";
        x=this.x.value;
        y=this.y.value;
        for(var i=0;i<x;i++){
            let vec = [];
            for(var j=0;j<y;j++){
                vec.push(Math.floor(Math.random() * (100 - 1)));
            }
            matriz.push(vec);
        }
        generarTabla();
        actualizar.x.max = x-1;
        actualizar.y.max = y-1;
    }
}

function generarTabla(){
    table.innerHTML="";
    var percent = "";
    for(var i=0;i<x;i++){
        percent+=(100/x)+"% ";
    }
    for(var i=0;i<matriz.length;i++){
        let vec = matriz[i];
        let row = document.createElement("div");
        row.classList = "row";
        row.style.gridTemplateColumns=percent;
        for(var j=0;j<vec.length;j++){
            let cell = document.createElement("div");
            cell.classList = "cell";
            cell.innerHTML = vec[j];
            if(i==xS && j==yS){
                cell.className += " change";
                cellS = cell;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
        setTimeout(transition,2500);
    }
}

function transition(){
    cellS.classList="cell";
}
function formActualizar(){
    event.preventDefault();
    if(!state){
        alert("No se han validado los campos");
    } else {
        xS=this.x.value;
        yS=this.y.value;
        matriz[xS][yS]=this.data.value;
        generarTabla();
    }
}

function validarTexto(){
    var reg = /^[a-zA-Z0-9]{1,}$/;
    if(!reg.test(this.value)){
        this.style.border = "2px solid red";
        state = false;
    } else {
        this.style.border = "2px solid #5C2561";
        state = true;
    }
}


formDimensiones.addEventListener("submit",formDim);
formDimensiones.x.addEventListener("keyup",validarDimensiones);
formDimensiones.y.addEventListener("keyup",validarDimensiones);
actualizar.addEventListener("submit",formActualizar);
actualizar.x.addEventListener("keyup",validarDimensiones);
actualizar.y.addEventListener("keyup",validarDimensiones);
actualizar.data.addEventListener("keyup",validarTexto);