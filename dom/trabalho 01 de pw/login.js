//Página de login bonitinha, esta é a parte do javascript.
//Usuário: aluno Senha: undererere123
//Usuário: professor Senha: admin789
    function logar() {
        var usuario = document.querySelector('#usuario').value;
        var senha = document.querySelector('#senha').value;
        var incorreto = document.querySelector('#incorreto');
        
        while (usuario != "aluno" || usuario != "professor") {
            incorreto.innerHTML = "Usuário ou senha incorretos";
        }

        if (usuario === "aluno") {
            while (senha != "undererere123") {
                incorreto.innerHTML = "Usuário ou senha incorretos";
            }
        }
        if (usuario === "professor") {
            while (senha != "admin789") {
                incorreto.innerHTML = "Usuário ou senha incorretos";
            } 
        }

    }