/*  passou:= falso
escreval("digite o nome do Aluno:")
leia(nome)
escreval("digite a nota 1 do Aluno:")
leia(nota01)
escreval("digite a nota 2 do Aluno:")
leia(nota02)
media := (nota01 + nota02) / 2

se media >= 50 entao
   passou:= verdadeiro
fimse

se (passou) && (media >=50 || media <=70) entao
   escreval(nome," Aprovado")
senao
     escreval(nome," Reprovado")
fimse */

var nome, nota01, nota02, passou;
passou = false;
nome= prompt("Digite o  nome do Aluno:") 
nota01= prompt("Digite a 1º nota do Aluno:")
nota02= prompt("Digite a 2º nota do Aluno:")

media= (parseInt(nota01) + parseInt(nota02))/2

if(media >=50)
    passou= true
if(passou && (media >=70 || media <=90)) 
alert ("Aprovado!" + nome)
else
alert("Reprovado!" + nome)


