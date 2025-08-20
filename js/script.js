function projeto(idProjeto, BotaoClicado) {

   const Projetos = document.querySelectorAll('.projeto');
   const botoes = document.querySelectorAll('.buttonProjeto');

   if (BotaoClicado.classList.contains('active')) {
      BotaoClicado.classList.remove('active');
      document.getElementById(idProjeto).style.display = 'none'
      return;
   }

   Projetos.forEach(div => div.style.display = 'none')
   botoes.forEach(btn => btn.classList.remove('active'))

   document.getElementById(idProjeto).style.display = 'block'
   BotaoClicado.classList.add('active');
}