
const palavras = [];
let listaCompleta = document.getElementById('selectNumber')

async function carregaPalavras(){ 
const consultaEstados = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`)
const resposta = await consultaEstados.json();
resposta.forEach(item => palavras.push(item.nome));
    
console.log(palavras);

for(var i = 0; i < palavras.length; i++) {
    var opt = palavras[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;

listaCompleta.append(el);

}

}

carregaPalavras();



