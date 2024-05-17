//Aqui entra o JavaScript, para que a calculadora funcione, faremos o uso do DOM.
//Vamos usar o impute e os botões, então:

const pVisor = document.querySelector('#visor');
const btn1 = document.querySelector('#btn1'); //C - Limpar visor
const btn2 = document.querySelector('#btn2'); //< - Apagar dígito
const btn3 = document.querySelector('#btn3'); // / - Dividir
const btn4 = document.querySelector('#btn4'); // X - Multiplicar
const btn5 = document.querySelector('#btn5'); // 7
const btn6 = document.querySelector('#btn6'); // 8
const btn7 = document.querySelector('#btn7'); // 9
const btn8 = document.querySelector('#btn8'); // - - Subtrai
const btn9 = document.querySelector('#btn9'); // 4
const btn10 = document.querySelector('#btn10'); // 5 
const btn11 = document.querySelector('#btn11'); // 6
const btn12 = document.querySelector('#btn12'); // + - Soma
const btn13 = document.querySelector('#btn13'); // 1
const btn14 = document.querySelector('#btn14'); // 2
const btn15 = document.querySelector('#btn15'); // 3
const btn16 = document.querySelector('#btn16'); // = - resultado
const btn17 = document.querySelector('#btn17'); // 0
const btn18 = document.querySelector('#btn18'); // , - casa decimal

btn5.addEventListener('click', ()=> {
    console.log("Funcionei");
    p.innerText = "7";
})