var nombres = document.getElementById("Nombres");
var Apellidos = document.getElementById("Apellidos");
var email = document.getElementById("email");
var contra = document.getElementById("password");
var contraC = document.getElementById("passwordC");
var nacimiento = document.getElementById("FN");
var out = document.getElementById("out");
var btn = document.getElementById("btn");
var id;
var letra;
var letra2;
var fecha = new Date()
var ano = fecha.getFullYear();
class Miembro{
    constructor(){
        this.nombres = "";
        this.Apellidos = "";
        this.email = "";
        this.contra = "";
        this.contraC = "";    
        this.nacimiento = "";
    }
    setNombres(nombre){
        if(this.validarTexto(nombre)){
            this.nombres = nombre;
        }else{
            alert("Error al ingresar el Nombre.");
        }
    }
    setApellidos(apellido){
        if(this.validarTexto(apellido)){
            this.Apellidos = apellido;
        }else{
            alert("Error al ingresar el apellidos.");
        }
    }
    setEmail(email){
        if(this.validarEmail(email)){
            this.email = email;
        }else{
            alert("Error al ingresar el email.");
        }
    }
    setContra(contra, contraC){
        if(this.validarContra(contra, contraC)){
            this.contra = contra;
            this.contraC = contraC; 
        }else{
            alert("Error al ingresar la Contraseña");
        }
    }
    setNacimiento(Fecha){
        if(this.validarFecha(Fecha)){
            this.nacimientom = Fecha;
            
        }else{
            alert("Error al ingresar la fecha");
        }
    }
    validarTexto(texto){
        if(texto.trim() == ""){
            return false;
        }
        return true;
    }
    validarEmail(email) {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)){
            return true;
        } else {
            return false;
        }
    }
    validarContra(contra, contraC){
        if(contra.length >= 8){
            if(contraC == contra){
                return true;
            }
            return false;
        }
        return false;
    }
    validarFecha(fecha){
    var pattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    
        if (fecha == null || fecha == "" || !pattern.test(fecha)) {
            return false;
        }
            return true
    }
    usuario(){
        for(var o = 0; o < this.Apellidos.length;o++){
            if(this.Apellidos[o] == " "){
                letra = this.Apellidos[0];
                letra2 = this.Apellidos[o + 1]
                o= this.Apellidos.length +1;
            }else{
                letra = this.Apellidos[0];
                letra2 = this.Apellidos[0]
            }
        }
        id = letra.toUpperCase() + letra2.toUpperCase() + ano + id;
    }
}

btn.addEventListener("click",function(){
    var obj = new Miembro();
    obj.setNombres(nombres.value);
    obj.setApellidos(Apellidos.value);
    obj.setEmail(email.value)
    obj.setContra(contra.value, contraC.value);
    obj.setNacimiento(nacimiento.value);
    id = Math.round(Math.random()*(9999-1000)+parseInt(1000));
    obj.usuario();
    out.innerHTML = "Usuario: " +id;
});
