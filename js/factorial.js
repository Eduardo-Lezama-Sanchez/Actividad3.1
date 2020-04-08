function mostrar(){

var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
document.getElementsByClassName('etiqueta')[0].innerHTML='El factorial de '+(numero)+' es = '+(resultado);
};

function hacerclic(){
document.getElementsByClassName('invoca')[0].onclick=mostrar;
}
window.onload=hacerclic;
