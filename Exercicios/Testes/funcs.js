
const btnSomar = document.getElementById("somar");
const btnMulti = document.getElementById("multi");
const btnDiv = document.getElementById("div");
const btnSub = document.getElementById("sub");

btnSomar.addEventListener("click", somar);
btnMulti.addEventListener("click", multi);
btnDiv.addEventListener("click", divd);
btnSub.addEventListener("click", sub);



function somar(){
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;

  if(n1.includes(",") || n2.includes(",")){
    n1 = n1.replace(",", ".");
    n2 = n2.replace(",", ".");
  } 

  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  let n3 = n1+n2;
  
  if (isNaN(n1) || isNaN(n2)){
    return alert("Preencha todos os campos");
  } else {
      return document.getElementById("resultado").textContent = `Resultado: ${n1} + ${n2} é ${n3}`;
  }
}

function multi(){
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;

  if(n1.includes(",") || n2.includes(",")){
    n1.replace(",", ".");
    n2.replace(",", ".");
  } 

  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  var n3 = n1*n2;
  
  
  if (isNaN(n1) || isNaN(n2)){
    return alert("Preencha todos os campos");
  } else {
      return document.getElementById("resultado").textContent = `Resultado: ${n1} * ${n2} é ${n3}`;
  }
}

function divd(){
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;

  if(n1.includes(",") || n2.includes(",")){
    n1 = n1.replace(",", ".");
    n2 = n2.replace(",", ".");
  } 

  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
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

function sub(){
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;

  if(n1.includes(",") || n2.includes(",")){
    n1 = n1.replace(",", ".");
    n2 = n2.replace(",", ".");
  } 
  
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  var n3 = n1-n2;
  let resultado = n3.toFixed(2);
    
  if (isNaN(n1) || isNaN(n2)){
    return alert("Preencha todos os campos");
  } else {
    return document.getElementById("resultado").textContent = `Resultado: ${n1} - ${n2} é ${resultado}`;
  }
}




