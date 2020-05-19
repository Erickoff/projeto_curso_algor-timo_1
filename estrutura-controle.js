/*escreval("digite o nome do Aluno:")
leia(nome)
escreval("digite a nota 1 do Aluno:")
leia(nota01)
escreval("digite a nota 2 do Aluno:")
leia(nota02)
media := (nota01 + nota02) / 2

se media >= 5 entao
escreval(nome," Aprovado")
senao
escreval(nome," Reprovado")
fimse*/

var nome, nota01, nota02;
nome= prompt("Digite o  nome do Aluno:") 
nota01= prompt("Digite a 1º nota do Aluno:")
nota02= prompt("Digite a 2º nota do Aluno:")

media= (parseInt(nota01) + parseInt(nota02))/2

if(media >=50)
    alert(nome + "Aprovado!")
else
    alert(nome + "Reprovado!")

