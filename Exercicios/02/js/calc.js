//Aqui entra o JavaScript, para que a calculadora funcione, faremos o uso do DOM.
//Vamos usar o impute e os botões, então:

const pVisor = document.querySelector('#visor');
const btn = document.querySelectorAll('button');

for(let i = 0; i <= btn.length; i++){
    btn[i].addEventListener('click', ()=>{
        let numero = pVisor.innerHTML = btn[i].value;
        pVisor.innerHTML = numero;
    })
}