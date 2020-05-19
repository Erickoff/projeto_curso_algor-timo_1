function acaoBotao() {
   var valor1, valor2, resultado, operacao
   alert("Esse programa calcula valores com base na sua escolha.")
valor1 = prompt("Escreva o primeiro valor: ")
operacao = prompt("Escreva o tipo de operação: +, -, *, /:")
valor2 = prompt("Escreva o segundo valor: ")

if(operacao == "+"){
    resultado = parseInt(valor1) + parseInt(valor2)
}else if(operacao == "-"){
    resultado = parseInt(valor1) - parseInt(valor2)
}else if(operacao == "*"){
   resultado = parseInt(valor1) * parseInt(valor2)
}else if(operacao == "/"){
   resultado = parseInt(valor1) / parseInt(valor2)
}

document.getElementById("paragrafo").innerText = resultado
}


