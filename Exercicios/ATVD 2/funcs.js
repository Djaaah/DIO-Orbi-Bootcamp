console.log("Hello World!");


const meuArray = [5,69,5,4,99];
const meuNumero = 5;


function receberArrayeNumero(array, numero){
   try {
    if (!array && !numero) throw new ReferenceError("Envie os Parametros corretos!");

    if (typeof array !== 'object') throw new TypeError("O Array precisa ser do tipo Object!");
 
    if (typeof numero !== 'number') throw new TypeError("O Numero precisa ser do tipo number!");
 
    if(array.length != numero) throw new RangeError("O Tamanho é inválido!");

    return array;
   } catch(e){
    if (e instanceof RangeError){
        console.log("É um erro do Tipo: RangeError");
        console.log(e.name);
        console.log(e.stack);
    } else if (e instanceof ReferenceError){
        console.log("É um erro do Tipo: ReferenceError");
        console.log(e.name);
        console.log(e.stack);
    } else if (e instanceof TypeError){
        console.log("É um erro do Tipo: TypeError");
        console.log(e.name);
        console.log(e.stack);
    } else {
        console.log("Erro inesperado!" + e);
    }

   }
}

console.log(receberArrayeNumero(meuArray, meuNumero));