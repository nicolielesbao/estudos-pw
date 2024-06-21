const visor = document.getElementById('visor');
let mostrar = "";

function numeros(num) {
    mostrar = num;
    visor.innerText += mostrar;
}

function operar(oper) {
    mostrar = oper;
    visor.innerText += mostrar;
}

function limpar() {
    visor.innerHTML = "";
}

function apagar() {
    let removUltimo = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = removUltimo.slice(0,-1);
}

function calcular() {
    let result = document.getElementById('visor').innerHTML;
    if (result) {
        document.getElementById('visor').innerHTML = eval(result);
    }
}