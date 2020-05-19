

var nome, nota01, nota02;
nome= prompt("Digite o  nome do Aluno:") 
nota01= prompt("Digite a 1º nota do Aluno:")
nota02= prompt("Digite a 2º nota do Aluno:")

media= (parseInt(nota01) + parseInt(nota02))/2

if(media >=50)
    alert(nome + "Aprovado!")
else
    alert(nome + "Reprovado!")

