var formulario = document.getElementById("formComprar");
var precio = [4.27,4.05,3.96];

var state = true;
function validar(){    
    if(this.value>=0.05 && this.value<=150){
        this.style.border = "2px solid #69806F";
        state = true;
    } else{
        this.style.border = "2px solid red";
        state = false;
    }
}

function calcular(event){
    event.preventDefault();
    if(state){
        formulario.result.value = "$"+(formulario.cant.value*precio[formulario.tipo.value]).toFixed(2);
        console.log(formulario.cant.value*precio[formulario.tipo.value]);
    } else {
        alert("Hay datos no validados");
    }
}


formulario.addEventListener("submit",calcular);
formulario.cant.addEventListener("keyup",validar);
formulario.cant.addEventListener("mouseup",validar);