

var jogador = null;
var vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-atual');
var quadrados = document.getElementById('quadrado');
var vitoriaXExibir = document.getElementById('vitoriasX-total');
var vitoriaOExibir = document.getElementById('vitoriasO-total');
var empateExibir = document.getElementById('empates-total');
var vitoriasX = 0;
var vitoriasO = 0;
var empate = 0

mudarJogador('X');

const quad1 = document.getElementById('1'); const quad2 = document.getElementById('2'); const quad3 = document.getElementById('3');
const quad4 = document.getElementById('4'); const quad5 = document.getElementById('5'); const quad6 = document.getElementById('6');
const quad7 = document.getElementById('7'); const quad8 = document.getElementById('8'); const quad9 = document.getElementById('9');

quad1.addEventListener('click', escolherQuadrado); quad2.addEventListener('click', escolherQuadrado); quad3.addEventListener('click', escolherQuadrado);
quad4.addEventListener('click', escolherQuadrado); quad5.addEventListener('click', escolherQuadrado); quad6.addEventListener('click', escolherQuadrado);
quad7.addEventListener('click', escolherQuadrado); quad8.addEventListener('click', escolherQuadrado); quad9.addEventListener('click', escolherQuadrado);


const BTNresetar = document.getElementById('reset-game');
BTNresetar.addEventListener('click', reset);


function escolherQuadrado(){
    
    if(vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(this.id);

    checarJogada(quadrado)

    quadrado.innerHTML = jogador;
    quadrado.style.color = 'black';

    if(jogador === 'X'){
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVitoria()
    
    /*
    if(checarEmpate()){
        console.log('Empate!')
        return;
    }
    */
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = valor;
}

/*
function checarEmpate(){
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');

    if(quadrado1.innerHTML !== '-' && quadrado2.innerHTML !== '-' && quadrado3.innerHTML !== '-' && quadrado4.innerHTML !== '-' && quadrado5.innerHTML !== '-' && quadrado6.innerHTML !== '-' && quadrado7.innerHTML !== '-' && quadrado8.innerHTML !== '-' && quadrado9.innerHTML !== '-') {
        alert("Deu Empate!!")
        empate++;
        empateExibir.innerHTML = empate;
        return true;
    }
}
*/

function checarJogada(quadrado){
    if(quadrado.innerHTML !== '-'){
        alert("Jogue em uma casa vazia!");
        return;
    }
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.backgroundColor = 'green';
    quadrado2.style.backgroundColor = 'green';
    quadrado3.style.backgroundColor = 'green';
}

function checarVitoria(){
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');

    if(checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checarSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checarSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(checarSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(checarSequencia(quadrado3, quadrado5, quadrado7)){
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

    if(checarSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checarSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(checarSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    
}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;

    if (vencedorSelecionado.innerHTML === 'X'){
        vitoriasX++;
        vitoriaXExibir.innerHTML = vitoriasX;
    } else if (vencedorSelecionado.innerHTML === 'O') {
        vitoriasO++;
        vitoriaOExibir.innerHTML = vitoriasO;
    } else {
        return; 
    }
}

function checarSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        igual = true;
    }

    return igual;
}


function reset() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    
    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.backgroundColor = 'white';
        quadrado.style.color = 'white';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}

