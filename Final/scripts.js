function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const duvida = document.getElementById('duvida').value;
    let valid = true;

    // Reseta as mensagens
    document.getElementById('mensagem-sucesso').style.display = 'none';
    document.getElementById('mensagem-erro').style.display = 'none';

    // Validações simples
    if (nome === '') {
        document.getElementById('erro-nome').innerText = 'Por favor, preencha o nome.';
        valid = false;
    } else {
        document.getElementById('erro-nome').innerText = '';
    }

    if (email === '') {
        document.getElementById('erro-email').innerText = 'Por favor, preencha o email.';
        valid = false;
    } else {
        document.getElementById('erro-email').innerText = '';
    }

    if (duvida === '') {
        document.getElementById('erro-duvida').innerText = 'Por favor, preencha a dúvida.';
        valid = false;
    } else {
        document.getElementById('erro-duvida').innerText = '';
    }

    // Se todos os campos forem válidos
    if (valid) {
        document.getElementById('mensagem-sucesso').style.display = 'block';
        return false; // Impede o envio real do formulário
    } else {
        document.getElementById('mensagem-erro').style.display = 'block';
        return false; // Impede o envio real do formulário
    }
}

    function validarNewsletter() {
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Reseta a mensagem de sucesso
        document.getElementById('mensagem-sucesso').style.display = 'none';

    // Valida o email
    if (email === "") {
        document.querySelector('.email-error').innerText = 'Erro: Por favor, preencha o e-mail.';
        return false; // Impede o envio do formulário
    } else if (!emailPattern.test(email)) {
        document.querySelector('.email-error').innerText = 'Erro: Por favor, insira um e-mail válido.';
        return false; // Impede o envio do formulário
    } else {
        document.querySelector('.email-error').innerText = ''; // Limpa mensagem de erro
        document.getElementById('mensagem-sucesso').style.display = 'block'; // Exibe mensagem de sucesso
        return false; // Impede o envio real do formulário (para testes)
    }
    }

     

    // Função para abrir o modal com os detalhes do produto
    function abrirModal(id, titulo, imagem, descricao) {
        document.getElementById('modal-img').src = imagem;
        document.getElementById('modal-titulo').innerText = titulo;
        document.getElementById('modal-descricao').innerText = descricao;

        // Adiciona ao carrinho ao clicar no botão
        document.getElementById('adicionar-carrinho').onclick = function() {
            adicionarAoCarrinho(id, titulo);
        };

        document.getElementById('modal').style.display = 'flex';
    }

    // Função para fechar o modal
    function adicionarAoCarrinho(id, titulo) {
        const quantidadeInput = document.getElementById(`quantidade-${id}`);
        
        if (!quantidadeInput) {
            alert("Campo de quantidade não encontrado!");
            return;
        }
    
        const quantidade = parseInt(quantidadeInput.value);
    
        if (isNaN(quantidade) || quantidade <= 0) {
            alert("Por favor, insira uma quantidade válida.");
            return;
        }
    
        const produtoExistente = carrinho.find(produto => produto.id === id);
        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
        } else {
            carrinho.push({ id, titulo, quantidade });
        }
    
        alert(`${titulo} foi adicionado ao carrinho com sucesso!`);
        
        atualizarBadgeCarrinho();
        fecharModal();
    }
    
    function atualizarBadgeCarrinho() {
        const badge = document.getElementById('badge');
    
        if (!badge) {
            console.error("Badge não encontrado!");
            return;
        }
    
        const totalItens = carrinho.reduce((total, produto) => total + produto.quantidade, 0);
        badge.textContent = totalItens;
        
        console.log(`Badge atualizado para: ${totalItens}`);
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        atualizarBadgeCarrinho();
    });

    //botão abaixo

    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');
    
        hamburger.addEventListener('click', function() {
            menu.classList.toggle('open');
            hamburger.classList.toggle('open');
        });
    });