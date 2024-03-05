//Página de login bonitinha, esta é a parte do javascript.
//Usuário: aluno Senha: undererere123
//Usuário: professor Senha: admin789
    function logar() {
        var caixaLogin = document.querySelector('.container');
        var usuario = document.querySelector('#usuario').value;
        var senha = document.querySelector('#senha').value;
        var incorreto = document.querySelector('#incorreto');
                
        if (usuario === "aluno") {
            if (senha != "undererere123") {
                return incorreto.innerHTML = "Usuário ou senha incorretos";
            }
            else {
                return caixaLogin.style.display = 'none';
            }
        }
        else if (usuario === "professor") {
            if (senha != "admin789") {
                return incorreto.innerHTML = "Usuário ou senha incorretos";
            } 
        }
        else {
            return incorreto.innerHTML = "Usuário ou senha incorretos";
        }

    }