
const admins = new Map();

admins.set('Jailton', 'Admin');
admins.set('Lohayne', 'Admin');
admins.set('Fabiana', 'Funcionário');
admins.set('Nelson', 'Funcionário');

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function getAdmins(){
    
    let adminsRetornados = [];
    
    for([key, value] of admins){
        if(value === 'Admin'){
            adminsRetornados.push(key);
        }
    }
    return document.getElementById("resultado").textContent = `Resultado: ${adminsRetornados}`;
}

function getAll(){
    let todos = [];

    for([key, value] of admins){
        todos.push(key);
    }

    return document.getElementById("resultado").textContent = `Resultado: ${todos}`;
}

function getUnicos(){
    const mySet = new Set(meuArray);
    meuArrayNovo = [];

    return document.getElementById("resultado").textContent = `Resultado: ${[...mySet.values()]}`;
}
