function leDados (){
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if(strDados){
        objDados = JSON.parse(strDados); // transforma string em objeto
    }
    else{
        objDados = { anuncio: [
            {titulo:"Casa Germinada",endereco:"Belo Horizonte",nQuartos:"2",valor:"300",descricao:"Moro sozinho e estou alugando os quartos para estudantes"},
            {titulo:"Casa próximo a PUC SG",endereco:"Belo Horizonte",nQuartos:"3",valor:"300",descricao:"Alugo 3 quartos para estudantes da PUC São Gabriel. Próximo à ponto de ônibus."},
            {titulo:"Casa Germinada",endereco:"Belo Horizonte",nQuartos:"2",valor:"300",descricao:"Moro sozinho e estou alugando os quartos para estudantes"}

        ]}
    }
    return(objDados);
}

function salvaDados(dados){
    localStorage.setItem('db', JSON.stringify(dados))
}
function incluirAnuncio(){
    // ler os dados do localStorage
    let objDados = leDados();

    // incluir um novo anuncio
    let strTitulo = document.getElementById('tituloAnuncio').value;
    let strEndereco = document.getElementById('endereco').value;
    let strnQuartos = document.getElementById('quartos').value;
    let strValor = document.getElementById('valor').value;
    let strDescricao = document.getElementById('descricao').value;

    let novoAnuncio = {
        titulo: strTitulo,
        endereco: strEndereco,
        nQuartos: strnQuartos,
        valor: strValor,
        descricao: strDescricao
    };

    objDados.anuncio.push(novoAnuncio);


    // salvar os dados no localStorage novamente

    salvaDados(objDados);

    //atualiza os dados da tela
    imprimeDados();
}




function imprimeDados(){
    let tela = document.getElementById('tela');
    let strHtml ='';
    let objDados = leDados();

    for( i=0; i< objDados.anuncio.length ; i++){
        strHtml += `<div class="card" style="width: 200vh;" >
        <img src="/codigo/Home/img/casa1.jpg" style="width: 200px" class="card-img-top" alt="...">
      
        <div id="tela" class="card-body" >
          <h5 class="card-title">${objDados.anuncio[i].titulo}</h5>
          <p class="card-text">${objDados.anuncio[i].descricao}</p>
          <h6>${objDados.anuncio[i].nQuartos} Quartos <span> - ${objDados.anuncio[i].endereco}</span> </h6>
          <i class="card-anuncio">R$ ${objDados.anuncio[i].valor} </i>
          <br>
          <a href="#" class="btn btn-primary">Fiquei Interessado!</a><br>
        </div>
      </div>`
    }

    tela.innerHTML = strHtml;
    
}

// Configura o Botão

document.getElementById('carregaAnuncios').addEventListener('click',imprimeDados)
window.onload(imprimeDados())
document.getElementById('BtnContinuar').addEventListener('click',incluirAnuncio)



