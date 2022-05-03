console.log("Hello World!");
//https://receitaws.com.br/v1/cnpj/{cnpj}/

//https://thatcopy.pw/catapi/rest/


class contaBancaria {
    constructor (agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    set saldo (valor) {
        this._saldo = valor;
    }

    get saldo (){
        return this._saldo;
    }

    depositar (valor) {
        this.saldo = valor + this._saldo;
    }

    sacar (valor) {
        if(valor > this._saldo){
            return console.log("Saldo Insuficiente");
        } else {
            this._saldo = this._saldo - valor;
            return console.log(`Saque de R$ ${valor} realizado com sucesso!\nSaldo Atual: ${this._saldo}`);
        }
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar (valor) {
        if(valor > 500){
            console.log('Não é possível sacar acima de R$ 500 no seu tipo de conta!');
        } else 
        if (valor > this._saldo) {
            console.log('Você não possui saldo suficiente');
        } else {
            this._saldo = this._saldo - valor;
            console.log(`Saque de R$ ${valor} efetuado com sucesso!`)
        }


        
    }
}





let conta1 = new contaUniversitaria(6, 3909);

conta1.saldo = 500;
console.log(conta1.saldo);
conta1.sacar(500);






























/*
function hello(){
    alert("Hello");
}


let nomeCompletoReceb = localStorage.getItem("nomeCompletoRecebido");
let emailAtual = "";
let numeroContaAtual = "";
let saldoAtual = "";
let tipoContaAtual = "";

/*
Assim deu certo, só aprimorar para todos e concluir

if(window.location.pathname.match("conta.html")){

    atualizarDados();
}








function atualizarDados(){
    document.getElementById("nomeAtual").textContent = `Olá ${nomeCompletoReceb} é um prazer tê-lo(a) aqui!`;
    document.getElementById("emailAtual").textContent = `Email cadastrado: ${emailAtual}`;
    document.getElementById("numeroContaAtual").textContent = `Numero da conta: ${numeroContaAtual}`;
    document.getElementById("saldoAtual").textContent = `Saldo Atual: ${saldoAtual}`;
    document.getElementById("tipoContaAtual").textContent = `Tipo de Conta: ${tipoContaAtual}`;

}

function carregarOutraPagina(){
    if (window.location.pathname.match("index.html")){
        localStorage.setItem("nomeCompletoRecebido", document.getElementById("nomeCompleto").value);
       
        window.location.href = "conta.html";
        
    } else {
        window.location.href = "index.html";
    }
    
}

const btnConfirmar = document.getElementById("confirmarDados");
btnConfirmar.addEventListener("click", carregarOutraPagina);


*/


/*
class contaBancaria {
    constructor(nomeCompleto, numeroConta, tipoConta, email, saldo){
        this.nomeCompleto = nomeCompleto;
        this.numeroConta = numeroConta;
        this.tipoConta = tipoConta;
        this.email = email;
        this.saldo = saldo;
    }

    get nomeCompleto(){
        return this.nomeCompleto;
    }

    get email(){
        return this.email;
    }

    get numeroConta(){
        return this.numeroConta;
    }

    get tipoConta(){
        return this.tipoConta;
    }

    get saldo(){
        return this.saldo;
    }

    static retornarTudo(){
        return console.log(tipoConta(), email(), saldo(), nomeCompleto(), numeroConta());
    }

}

const conta1 = new contaBancaria(nomeCompleto, numeroConta, tipoConta, email, saldo);
*/







