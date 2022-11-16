/*2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde 
para dar uma indicação sobre a condição de peso de um pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição 
de acordo com a tabela abaixo:

IMC em adultos Condicao:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso');
    } else {
        return ('Obesidade grave');
    }
}

//Master
(function master() {
    const peso = 85;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}) ();


//DICA PARA USAR A ISOLAR A FUNCAO PODEMOS COLOCAR ELA DENTRO DE ( )
// E AO FINAL DELA CHAMAR ELA COM ( ). DESTA FORMA ESTAMOS ISOLANDO E CHAMANDO IMEDIATAMENTE 
// É MUITO USADO EM APLICACOES WEB , SENDO ASSIM POSSO TIRAR O NOME DELA E A REVERENCIA DO PARAMETRO



