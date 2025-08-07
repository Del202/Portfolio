let display = document.getElementById('display');
let valor1 = '';
let valor2 = '';
let operador = '';

function inserirNumero(numero) {
   display.value += numero;
}

function mais() {
   valor1 = display.value;
   operador = '+';
   display.value = '';
}

function menos() {
   valor1 = display.value;
   operador = '-';
   display.value = '';
}

function multiplicacao() {
   valor1 = display.value;
   operador = '*';
   display.value = '';
}

function divisao() {
   valor1 = display.value;
   operador = '/';
   display.value = '';
}

function resultado() {
   let valor2 = display.value;
   switch (operador) {
      case '+':
         display.value = parseFloat(valor1) + parseFloat(valor2);
         break;
      case '*':
         display.value = parseFloat(valor1) * parseFloat(valor2);
         break;
      case '-':
         display.value = parseFloat(valor1) - parseFloat(valor2);
         break;
      case '/':
         if (parseFloat(valor2) !== 0) {
            display.value = parseFloat(valor1) / parseFloat(valor2);
         } else {
            display.value = 'Erro: Divisão por zero';
         }
         break;

      default: 
      display.value = 'Erro: Operador inválido';
      break;

   }
}

function limpar() {
   display.value = '';
   valor1 = '';
   valor2 = '';
   operador = '';
}

