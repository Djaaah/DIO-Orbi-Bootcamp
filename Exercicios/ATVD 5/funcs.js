
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));



/*

function somarTodos(array){
    if (!array || !array.length) return;

    return array.reduce(function(somaTotal, itemAtual){
        return somaTotal + itemAtual;
    });

}

console.log(somarTodos([10,20,30], 60))

const valor1 = {
    value: 3,
}

const valor2 = {
    value: 2,
}

function mapComThis(array, argumento){
    return array.map(function(item){
        return item * this.value;
    }, argumento)
}

console.log(mapComThis([1,2,3,4,5,6,7,8,9,0], valor1))


const array = [3,4,6,7];

console.log(array.map((item) => item * 2));

function filtrarPares(array){
    if (!array || !array.length) return;

    const pares = array.filter((item) => item % 2 === 0);

    return pares;
}

function somarTodos(array){
    if (!array || !array.length) return;
}

console.log(filtrarPares([1,2,3,4,5,6,7,8,9,0]));
*/
