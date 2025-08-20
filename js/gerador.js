let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numeros = '0123456789'
let simbolos = '#!$@&'

let todos = caracteres + numeros + simbolos;

function gerarSenha(tamanho = 12) {
    let display = document.getElementById('senhaGerada');
    let mensagem = document.querySelector('.inserirSenha');
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        let randomIndex = Math.floor(Math.random() * todos.length);
        senha += todos[randomIndex]
    }

    display.value = senha
    mensagem.textContent = ''
    mensagem.style.color = 'rgb(0, 255, 21)';
}

function copiarSenha() {
    let display = document.getElementById('senhaGerada');
    let senha = display.value.trim();
    const mensagem = document.querySelector('.inserirSenha');

    if (senha === '') {
        mensagem.textContent = 'Por favor, gere uma senha antes de copiar.';
        mensagem.style.color = 'red';
        return;
    }  if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(senha).then(() => {
            mensagem.textContent = 'Senha copiada com sucesso!';
            mensagem.style.color = 'green';
        }).catch(() => {
            fallbackCopy(display, mensagem);
        });
    } else {
        fallbackCopy(display, mensagem);
    }
}

function fallbackCopy(input, mensagem) {
    input.select();
    input.setSelectionRange(0, 99999);
    try {
        document.execCommand('copy');
        mensagem.textContent = 'Senha copiada com sucesso!';
        mensagem.style.color = 'green';
    } catch (err) {
        mensagem.textContent = 'Erro ao copiar a senha.';
        mensagem.style.color = 'red';
    }
}