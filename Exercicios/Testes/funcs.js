function helloWorld(nome){
    return alert("Olá " + nome + " é um prazer lhe conhecer!");
}

class Operacoes{
    static somar(n1, n2){
      var n1 = document.getElementById("n1").value;
      var n2 = document.getElementById("n2").value;
      
      if(n1.includes(",") || n2.includes(",")){
        n1 = n1.replace(",", ".");
        n2 = n2.replace(",", ".");
      } 
    
      var n1 = parseFloat(n1);
      var n2 = parseFloat(n2);
      var n3 = n1+n2;
      
      if (isNaN(n1) || isNaN(n2)){
        return alert("Preencha todos os campos");
      } else {
          return document.getElementById("resultado").textContent = `Resultado: ${n1} + ${n2} é ${n3}`;
      }
  }
  
  static multi(n1, n2){

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    
    if(n1.includes(",") || n2.includes(",")){
      n1 = n1.replace(",", ".");
      n2 = n2.replace(",", ".");
    } 
  
    var n1 = parseFloat(n1);
    var n2 = parseFloat(n2);
    var n3 = n1*n2;
    
    if (isNaN(n1) || isNaN(n2)){
      return alert("Preencha todos os campos");
    } else {
        return document.getElementById("resultado").textContent = `Resultado: ${n1} * ${n2} é ${n3}`;
    }

    
  }

  static divd(n1, n2){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    
    if(n1.includes(",") || n2.includes(",")){
      n1 = n1.replace(",", ".");
      n2 = n2.replace(",", ".");
    } 
  
    var n1 = parseFloat(n1);
    var n2 = parseFloat(n2);
    var n3 = n1/n2;
    var resultado = n3.toFixed(2);

    if (isNaN(n1) || isNaN(n2)){
      return alert("Preencha todos os campos");
    } else if (n1 == 0 || n2 == 0){
      return alert("Não é possível efetuar divisão por 0");
    } else {
        return document.getElementById("resultado").textContent = `Resultado: ${n1} / ${n2} é ${resultado}`;
    }
  }

  static sub(n1, n2){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
      
    if(n1.includes(",") || n2.includes(",")){
      n1 = n1.replace(",", ".");
      n2 = n2.replace(",", ".");
    } 
    
    var n1 = parseFloat(n1);
    var n2 = parseFloat(n2);
    var n3 = n1-n2;
      
    if (isNaN(n1) || isNaN(n2)){
      return alert("Preencha todos os campos");
    } else {
      return document.getElementById("resultado").textContent = `Resultado: ${n1} - ${n2} é ${n3}`;
    }
  }
}


