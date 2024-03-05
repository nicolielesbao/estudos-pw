//Página de login bonitinha, esta é a parte do javascript.
//Usuário: aluno Senha: undererere123
//Usuário: professor Senha: admin789
    function logar() {
        var usuario = document.querySelector('#usuario').value;
        var senha = document.querySelector('#senha').value;
        var incorreto = document.querySelector('#incorreto');

        usuario = usuario.toUpperCase();
        senha = senha.toUpperCase();
        
        while (usuario != "ALUNO" && senha != "undererere123" || usuario != "PROFESSOR" && senha != "admin789") {
            return incorreto.innerHTML = 'Usuário ou senha incorretos'
        }

    }