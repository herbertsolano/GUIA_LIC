document.querySelector(".addParam").addEventListener("click", addParam);
document.querySelector(".showResults").addEventListener("click", showResults);
var parametros = [];
var valores = [];
function addParam() {
    let html = document.querySelector(".puesto").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="Nombre">  <input type="number" class="valor" placeholder="valor"></div>';
    document.querySelector(".puesto").innerHTML = html + newHTML;
}
function showResults() {
    for (var i = document.querySelectorAll('.parametro').length - 1; i >= 0; i--) {
        parametros.push(document.querySelectorAll('.parametro')[i].value);
        valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
    }
    var data = [{
        x: parametros,
        y: valores,
        type: "bar"
    }];
    Plotly.newPlot("grafico", data);
}