var boton = document.getElementById("btn");
boton.addEventListener("click",ciclo, true);

var Helado_total = 500;
var Bola_de_helado = 50;  
var Clientes = prompt("cuantos clientes hay");
Clientes = parseInt(Clientes-1);

function servir_helado () {
Helado_total  = Helado_total - Bola_de_helado;
}

i = 0;
function ciclo() {
    while (Clientes >= 0 ) {
        if (Helado_total >= 0) {
            servir_helado ()
            Clientes = Clientes -1;
            i = i+1;
            console.log("ciclo" + i)
            console.log("numero de clientes " + Clientes)
            console.log("helado total " + Helado_total)
        } 
        else {
            Helado_total = 500;
        }
        } 
}

