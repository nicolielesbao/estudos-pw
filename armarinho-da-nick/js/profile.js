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

//Main
// Seleção dos botões do aside
const btnEditProfile = document.querySelector('#btn-edit-profile');
const btnOrders = document.querySelector('#btn-orders');
const btnWishlist = document.querySelector('#btn-wishlist');
const btnNewProduct = document.querySelector('#btn-newProdut');
const btnSettings = document.querySelector('#btn-settings');

// Área principal onde será renderizado o conteúdo dinâmico
const mainContent = document.querySelector('main section#hero div');

// Função para limpar o conteúdo
function clearMainContent() {
    mainContent.innerHTML = '';
}

// Função para carregar o formulário de edição de perfil
btnEditProfile.addEventListener('click', () => {
    clearMainContent();
    mainContent.innerHTML = `
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
    // Evento de salvamento do perfil
    document.querySelector('#editProfileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        loggedUser.nome = document.querySelector('#nome').value;
        loggedUser.descricao = document.querySelector('#descricao').value;
        loggedUser.foto = document.querySelector('#foto').value;

        // Atualiza no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Atualiza a interface do usuário
        alert('Perfil atualizado com sucesso!');
        location.reload(); // Recarrega a página para aplicar mudanças
    });
});

// Função para carregar os pedidos do usuário
btnOrders.addEventListener('click', () => {
    clearMainContent();
    const orders = loggedUser.orders || []; // Supomos que os pedidos estão associados ao usuário
    if (orders.length > 0) {
        mainContent.innerHTML = '<h2>Meus Pedidos</h2><ul>';
        orders.forEach((order) => {
            mainContent.innerHTML += `<li>
                Pedido #${order.id} - ${order.date}<br>
                <strong>Status:</strong> ${order.status}
            </li>`;
        });
        mainContent.innerHTML += '</ul>';
    } else {
        mainContent.innerHTML = '<h2>Meus Pedidos</h2><p>Você ainda não realizou nenhum pedido.</p>';
    }
});

// Função para carregar os produtos favoritos
btnWishlist.addEventListener('click', () => {
    clearMainContent();
    const wishlist = loggedUser.wishlist || []; // Supomos que há uma wishlist associada ao usuário
    if (wishlist.length > 0) {
        mainContent.innerHTML = '<h2>Favoritos</h2><ul>';
        wishlist.forEach((item) => {
            mainContent.innerHTML += `<li>${item.nome} - R$${item.preco.toFixed(2)}</li>`;
        });
        mainContent.innerHTML += '</ul>';
    } else {
        mainContent.innerHTML = '<h2>Favoritos</h2><p>Você ainda não adicionou nenhum item aos favoritos.</p>';
    }
});

// Função para cadastrar novos produtos
btnNewProduct.addEventListener('click', () => {
    clearMainContent();
    mainContent.innerHTML = `
      <h2>Cadastrar Produto</h2>
      <form id="productForm">
        <label for="nomeProduto">Nome do Produto:</label>
        <input type="text" id="nomeProduto" required>
        
        <label for="precoProduto">Preço:</label>
        <input type="number" id="precoProduto" required>
        
        <label for="descProduto">Descrição:</label>
        <textarea id="descProduto"></textarea>
        
        <label for="fotoProduto">Foto do Produto (URL):</label>
        <input type="url" id="fotoProduto" required>

        <button type="submit">Cadastrar</button>
      </form>

      <a href="loja.html">Ver produtos da loja aqui!</>
    `;

    // Evento de cadastro de produto
    document.querySelector('#productForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const novoProduto = {
            nome: document.querySelector('#nomeProduto').value,
            preco: parseFloat(document.querySelector('#precoProduto').value),
            descricao: document.querySelector('#descProduto').value,
            foto: document.querySelector('#fotoProduto').value,
        };

        // Adiciona o produto ao usuário logado
        loggedUser.produtos = loggedUser.produtos || [];
        loggedUser.produtos.push(novoProduto);

        // Atualiza no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert('Produto cadastrado com sucesso!');
    });
});

// Função para carregar as configurações
btnSettings.addEventListener('click', () => {
    clearMainContent();
    mainContent.innerHTML = `
      <h2>Configurações</h2>
      <p>Configure suas preferências de notificações, senha, e outras opções.</p>
    `;
});
