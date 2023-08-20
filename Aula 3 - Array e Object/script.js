// o que são vetores ou arrays

//como declarar um array
/*let array = ['string', 1, true];
console.log(array);*/

// pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
//console.log(array)

//itera um array
//array.forEach(function(item, index){console.log(item, index)}) 

// add item no final do array
/*array.push('novo item')
console.log(array)*/

// remove item no final do array
/*array.pop();
console.log(array)*/

//remove item no ínicio do array
/*array.shift()
console.log(array)*/

// adiciona um novo item no inicio do array
/*array.unshift('novo item no inicio')
console.log(array)*/


//retorna o indice de um valor
//console.log(array.indexOf(true))

//remove ou substitui um item pelo indice
/*array.splice(0, 3)
console.log(array)*/

//retorna uma parte de um array existente
/*let novoArray = array.slice(0, 3);
console.log(novoArray)*/

let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}}
console.log(object.objectInterno)

var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

var {string, boolean, objectInterno} = object
console.log(string, boolean, objectInterno)