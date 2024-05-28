// *Usuários cadastrados:
//   Email: aluno@gmail.com, senha = undererere123
//   Email: professor@gmail.com, senha = admin789

const form_login = document.querySelector('#form-login');
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const msg_Retorno = document.querySelector('#message');

document.querySelector('#btn-login').addEventListener('click', ()=>{
    if (inputEmail.value === '') {
        msg_Retorno.innerHTML = "Informe o Email";
    }
    else if (inputSenha.value === '') {
        msg_Retorno.innerHTML = "Informe a senha";
    }
    if (inputEmail.value === "aluno@gmail.com") {
        if (inputSenha.value != "undererere123") {
            msg_Retorno.innerHTML = "Usuario ou senha incorretos";
        }
        else{
            form_login.innerHTML = "Aluno logado com sucesso";
        }
    }
    else if (inputEmail.value === "professor@gmail.com") {
        if (inputSenha.value != "admin789") {
            msg_Retorno.innerHTML = "Usuario ou senha incorretos";
        }
        else{
            form_login.innerHTML = "Professor logado com sucesso";
        }

    }
})