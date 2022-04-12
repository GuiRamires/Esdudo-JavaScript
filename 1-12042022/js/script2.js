/* 
Script para o cálculo da operações 
Matematica:
       - Soma;
       - Subtração;
       - Multiplicação;
       - Divisão;
       - Resto;
Será necessário mais 2 veriáveis para 
receber os numeros dos úsuarios
*/

var numero1;
var numero2;

// Para obtter o numero digitado pelo o usuário usaremos 
// o comando prompt(que um impt para dados)
numero1 = prompt("Digite um número","0");
numero2 = prompt("Digite um número");

// Converter para inteiro com parseInt

var soma = parsenInt(numero1) + parsenInt(numero2);
var subtrair = numero1 - numero2;
var mutiplicar = numero1 * numero2;
var dividir = numero1 / numero2;
var resto =  numero1 % numero2;

alert("Resultados das operações é:\n\n"+
        "soma: "+soma +
        "\nSubtração: "+subtrair+
        "\nMutiplicação: "+mutiplicar+
        "\nDivisão: " +dividir+
        "\nResto: "+resto);