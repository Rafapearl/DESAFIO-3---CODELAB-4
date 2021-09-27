/*DESAFIO 3
Caixa eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a
valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas
disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo
de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes
na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100,
uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100,
uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/


var valordesejado = +prompt("Digite o valor que deseja sacar: ")

var nota100 = valordesejado / 100
valordesejado100 = valordesejado - (nota100*100)

var decimal100 = Math.trunc(nota100);

console.log(`você sacou ${(decimal100)} notas de R$ 100,00`)

var nota50 = valordesejado/ 50
valordesejado = valordesejado - (nota50*50)
var decimal50 = Math.trunc(nota50);
sem100 = nota100 - decimal50


nota50 = nota100 - decimal100

console.log (nota100)

console.log(decimal50)






