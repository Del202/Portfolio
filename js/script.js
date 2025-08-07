function projeto(idProjeto, BotaoClicado) {
   const projeto = document.querySelectorAll('.projeto');
   projeto.forEach(div => div.style.display = 'none');

   const botao = document.querySelectorAll('.buttonProjeto');
   botao.forEach(btn => btn.classList.remove('active'));

   document.getElementById(idProjeto).style.display = 'block';
   BotaoClicado.classList.add('active');
}