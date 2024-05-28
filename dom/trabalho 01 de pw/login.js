//Página de login bonitinha, esta é a parte do javascript.
//Usuário: aluno Senha: undererere123
//Usuário: professor Senha: admin789

    function logar() {
        var caixaLogin = document.querySelector('.container');
        var usuario = document.querySelector('#usuario').value; console.log(usuario);
        var senha = document.querySelector('#senha').value;
        var incorreto = document.querySelector('#incorreto');
        var mensagem = document.querySelector('.mensagem');
        var mostrar = document.querySelector('.esconder');

        if (usuario === '') {
            return incorreto.innerHTML = 'Informe o usuário'
        }

        if (senha === '') {
            return incorreto.innerHTML = 'Informe a senha'
        }

        if (usuario === "aluno") {
            if (senha != "undererere123") {
                return incorreto.innerHTML = "Usuário ou senha incorretos";
            }
            else {
                mostrar.style.display = 'block'
                mensagem.innerHTML = usuario + ' logado com sucesso!';
                return caixaLogin.style.display = 'none';
            }
        }
        else if (usuario === "professor") {
            if (senha != "admin789") {
                return incorreto.innerHTML = "Usuário ou senha incorretos";
            }
            else {
                mensagem.innerHTML = usuario + ' logado com sucesso!';
                mensagem.style.display = 'block'
                return caixaLogin.style.display = 'none';
            } 
        }
        else {
            return incorreto.innerHTML = "Usuário ou senha incorretos";
        }

    }
