console.log("Hello World!");
//https://receitaws.com.br/v1/cnpj/{cnpj}/

//https://thatcopy.pw/catapi/rest/






const base_URL = 'https://thatcopy.pw/catapi/rest/';


const getCats = async() => {
    try {
        const dados = await fetch(base_URL);
        const formatoUtilizado = await dados.json();
        
        return formatoUtilizado.webpurl;
    } catch (e) {
        console.log(e.name);
        console.log(e.message);
    }
    
}

const loadImg = async() => {
    const gatosIMG = document.getElementById('gatos');
    gatosIMG.src = await getCats();
}


loadImg();
const gatoBTN = document.getElementById('mudarGato');
gatoBTN.addEventListener('click', loadImg);



