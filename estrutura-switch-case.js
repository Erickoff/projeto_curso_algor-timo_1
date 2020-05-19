
function acaoBotao() {
    var valor1, valor2, resultado, operacao
    alert("Esse programa calcula valores com base na sua escolha.")
 valor1 = prompt("Escreva o primeiro valor: ")
 operacao = prompt("Escreva o tipo de operação: +, -, *, /:")
 valor2 = prompt("Escreva o segundo valor: ")
 
 switch (operacao) {
    case "+":
       resultado = parseInt(valor1) + parseInt(valor2)
       break;
    case "-":
       resultado = parseInt(valor1) - parseInt(valor2)
       break;
    case "*":
       resultado = parseInt(valor1) * parseInt(valor2)
       break; 
    case "/":
       resultado = parseInt(valor1) / parseInt(valor2)
       break; 
 }
 
 document.getElementById("paragrafo").innerText = resultado
 }