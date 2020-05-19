
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


