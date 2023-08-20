// tipos primitivos

/*//boolean
var VouF = false;
console.log(typeof(VouF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Felipe'
console.log(typeof(nome)); */

/*var variavel = 'Felipe';
variavel = 'Martins';
console.log(variavel);

let variavel2 = 'Felipe'
variavel2 = 'Martins'
console.log(variavel2)*/

/*const constante = 'Felipe'
console.log(constante)*/

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal () {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno)
}
escopoLocal();


//atribuição
var atribuicao = 'Felipe'

//comparação
var comparacao = '0' == 0;
console.log(comparacao)

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

var adicao = 1 + 1;
console.log(adicao)

var subtracao = 1 - 1
console.log(subtracao)

var multiplicacao = 2 * 1
console.log(multiplicacao)

var divisaoReal = 6 / 2
console.log(divisaoReal)

var restoDivisao = 5 % 2
console.log(restoDivisao)

var potenciacao = 2 ** 10
console.log(potenciacao)

