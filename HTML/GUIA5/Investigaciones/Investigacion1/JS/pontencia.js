var base = document.getElementById("base");
var potencia = document.getElementById("potencia");
var out = document.getElementById("out");
var btn = document.getElementById("btn");

class Potencia{
    constructor(){
        this.potencia = "";
        this.base = "";
    }
    potenciaM(potencia1){
        this.potencia = potencia1;
    }
    baseM(base1){
        this.base = base1;
    }
    calcPotencia(){
        return Math.pow(this.base,this.potencia);
    }

}

btn.addEventListener("click",function(){
    var obj = new Potencia();
    obj.potenciaM(potencia.value);
    obj.baseM(base.value);
    out.innerHTML=obj.calcPotencia();

});