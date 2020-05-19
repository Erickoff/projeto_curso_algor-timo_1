/*
 escreval("digite seu nome")
   leia(nome)
   escreval("digite sua idade")
   leia(numero)
   escreval(nome, " : ", numero, " Anos")
*/

var nome, numero

nome = prompt("Digite o seu nome:")
numero= prompt("Digite sua Idade")

document.getElementById("paragrafo").innerText = nome + " : " + numero + " Anos"