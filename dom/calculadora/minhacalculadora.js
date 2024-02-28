//para multiplicar
function mult() {
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');
    let res = document.querySelector('#res');
    n1 = Number(n1.value);
    n2 = Number(n2.value);
    return res.innerHTML = n1 * n2;
}
//para dividir
function divid() {
    let n3 = document.querySelector('#n3');
    let n4 = document.querySelector('#n4');
    let res2 = document.querySelector('#res2');
    n3 = Number(n3.value);
    n4 = Number(n4.value);
    return res2.innerHTML = n3 / n4;
}
//para somar
function soma() {
    let n5 = document.querySelector('#n5');
    let n6 = document.querySelector('#n6');
    let res3 = document.querySelector('#res3');
    n5 = Number(n5.value);
    n6 = Number(n6.value);
    return res3.innerHTML = n5 + n6;
}
//para subtrair
function subt() {
    let n7 = document.querySelector('#n7');
    let n8 = document.querySelector('#n8');
    let res4 = document.querySelector('#res4');
    n7 = Number(n7.value);
    n8 = Number(n8.value);
    return res4.innerHTML = n7 - n8;
}