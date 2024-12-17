//logout
const logoutBtn = document.querySelector('#logout');

// Evento de clique no botão de logout
logoutBtn.addEventListener('click', (e) => {
    // Impede o comportamento padrão do link, caso precise de redirecionamento manual
    e.preventDefault();

    // Remove os dados do usuário logado do localStorage e sessionStorage
    localStorage.removeItem('logged-user');  // Limpa o usuário logado no localStorage
    sessionStorage.removeItem('loggedUser'); // Limpa a sessão

    // Redireciona para a página de login
    location.href = 'login.html';
});

//ASIDE: abrir menu de navegação do profile
document.querySelector('.btn-sidebar').addEventListener('click', ()=>{
    document.querySelector('.sidebar').style.display = 'block';
    document.querySelector('.btn-sidebar').style.display = 'none';
});

//fechar o aside
document.querySelector('.close-sidebar').addEventListener('click', ()=>{
    document.querySelector('.sidebar').style.display = 'none';
    document.querySelector('.btn-sidebar').style.display = 'block';
})

//ASIDE: foto de perfil e nome do user logado
const imgPerfil = document.querySelector('.perfil-img');

// Recupera o email do usuário logado do sessionStorage
const loggedUserEmail = sessionStorage.getItem('loggedUser');

// Recupera os dados de todos os usuários no localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Procura o usuário logado
const loggedUser = users.find((user) => user.email === loggedUserEmail);

if (loggedUser) {
  // Atualiza a imagem da `<aside>` dinamicamente
  imgPerfil.innerHTML = `<img src="${loggedUser.foto}" alt="Foto de Perfil">`;
  //atualiza o nome
  document.querySelector('#userName').innerHTML = `<h2>${loggedUser.nome}</h2>`;
  document.querySelector('#userDesc').innerHTML = `<p>${loggedUser.descricao}</p>`
} else {
  // Define uma imagem padrão caso nenhuma foto esteja disponível
  imgPerfil.innerHTML = `<img src="img/user.png" alt="Foto de Perfil Padrão">`;
}

//sections
const editarPerfil = document.querySelector('#btn-edit-profile'); console.log(editarPerfil);
const btnCart = document.querySelector('#btn-cart'); console.log(btnCart);
const produtos = document.querySelector('#btn-newProdut'); console.log(produtos);

editarPerfil.addEventListener('click', () => {
  document.querySelector('#propaganda').style.display = 'none';  
  document.querySelector('#produtos').style.display = 'none';   
  document.querySelector('#carrinhoDeCompras').style.display = 'none';

  document.querySelector('#editarDados').style.display = 'block';  

  // Preenche os campos com os valores do usuário logado
  document.querySelector('#editarDados').innerHTML = `
    <h2>Editar Perfil</h2>
    <form id="editProfileForm">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" value="${loggedUser.nome}" required>

      <label for="descricao">Descrição:</label>
      <textarea id="descricao">${loggedUser.descricao}</textarea>

      <label for="foto">Foto de Perfil (URL):</label>
      <input type="url" id="foto" value="${loggedUser.foto}" required>

      <button type="submit">Salvar Alterações</button>
    </form>
  `;

  // Escutando o evento de envio do formulário de edição
  document.querySelector('#editProfileForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Previne o envio tradicional do formulário

    // Obtém os valores dos campos de edição
    const nome = document.querySelector('#nome').value;
    const descricao = document.querySelector('#descricao').value;
    const foto = document.querySelector('#foto').value;

    // Atualiza os dados do usuário
    loggedUser.nome = nome;
    loggedUser.descricao = descricao;
    loggedUser.foto = foto;

    // Atualiza no localStorage com os novos dados
    const updatedUsers = users.map(user => user.email === loggedUserEmail ? loggedUser : user);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Exibe um alerta ou faz outra ação após salvar os dados
    alert('Perfil atualizado com sucesso!');
    location.href = 'profile.html';  // Redireciona para o perfil do usuário
  });
});

btnCart.addEventListener('click', () => {
  document.querySelector('#propaganda').style.display = 'none';  
  document.querySelector('#produtos').style.display = 'none';   
  document.querySelector('#editarDados').style.display = 'none';
    
  document.querySelector('#carrinhoDeCompras').style.display = 'block';  // Exibe a seção do carrinho

  // Verificando se o usuário logado é o mesmo que o armazenado no sessionStorage
  const loggedUserEmail = sessionStorage.getItem('loggedUser');  // Recupera o e-mail do usuário logado no sessionStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];  // Recupera os usuários armazenados no localStorage

  const loggedUser = users.find(user => user.email === loggedUserEmail);  // Encontra o usuário logado
  
  if (loggedUser) {
    const comprasUser = loggedUser.cart;
    console.log(localStorage.getItem('loggedUser', cart.nome))

    document.querySelector('#lista-carrinho').innerHTML = `
      <li>
        <h3>${comprasUser.nome}</h3>
        <p>Preço: R$<span id="preco">${comprasUser.preco}</span></p>
        <p>quantidade<span id="qtd">${comprasUser.qtd}</span></p>
      </li>
    `;

  }
});
