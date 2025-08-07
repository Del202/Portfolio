function adicionarTarefa() {
    const tarefa = document.getElementById('tarefaInput')
    const tarefaTexto = tarefa.value.trim();


    if (tarefaTexto === '') {
        let mensagem = document.querySelector('.inserirTarefa')
        mensagem.textContent = 'Por favor, insira uma tarefa.';
        mensagem.style.color = 'red';
        return;
    } else {
        let mensagem = document.querySelector('.inserirTarefa')
        mensagem.textContent = ''
        mensagem.style.color = 'rgb(0, 255, 21)';

        let campoTarefa = document.querySelector('.campo-listaTarefas')
        campoTarefa.classList.add('melhoria-campo')

        let novaDiv = document.createElement('div');
        novaDiv.classList.add('minha-div', 'Tarefass');

        let novoInput = document.createElement('input');
        novoInput.classList.add('meu-input');
        novoInput.disabled = true
        novoInput.value = tarefaTexto

        let novoButton = document.createElement('button');
        novoButton.classList.add('meu-button')
        novoButton.textContent = 'Excluir'
        novoButton.style.color = 'white'
        novoButton.addEventListener('click', () => {

            let Tarefass = document.querySelectorAll('.minha-div')

            if (Tarefass.length > 1) {
                novaDiv.remove();
            } else {
                novaDiv.remove()
                campoTarefa.classList.remove('melhoria-campo')
            }
        });

        novaDiv.appendChild(novoInput);
        novaDiv.appendChild(novoButton);
        campoTarefa.appendChild(novaDiv);

    }
}

