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


    let carrinho = [];
    let quantidadeNoCarrinho = 0;

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
    function fecharModal() {
        document.getElementById('modal').style.display = 'none';
    }

    // Função para adicionar o produto ao carrinho
    function adicionarAoCarrinho(id, titulo) {
        const quantidade = parseInt(document.getElementById('quantidade').value);

        // Verifica se o produto já está no carrinho
        const produtoExistente = carrinho.find(produto => produto.id === id);

        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
        } else {
            carrinho.push({ id, titulo, quantidade });
        }

        atualizarBadge(quantidade);

        alert(`${titulo} foi adicionado ao carrinho com sucesso!`);
        fecharModal();
    }

    // Função para atualizar a badge com a quantidade total de itens no carrinho
    function atualizarBadge(quantidadeAdicionada) {
        quantidadeNoCarrinho += quantidadeAdicionada; // Incrementa a quantidade total
        document.getElementById('badge').textContent = quantidadeNoCarrinho; // Atualiza a badge
    };
