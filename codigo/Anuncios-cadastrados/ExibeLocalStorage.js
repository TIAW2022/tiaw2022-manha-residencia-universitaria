function leDados (){
    let strDados = localStorage.getItem('anuncios');
    let objDados1 =JSON.parse(strDados);

    
    return(objDados1);
}
function imprimeDados(){
    let tela = document.getElementById('tela');
    let strHtml ='';
    let objDados1 = leDados();

    for( i=0; i< objDados1.length ; i++){
        strHtml += `<div class="card" style="width: 200vh;" >
        <img src="${objDados1[i].imagem}" style="width: 400px;" class="card-img-top " alt="...">
      
        <div id="tela" class="card-body" >
          <h5 class="card-title">${objDados1[i].titulo}</h5>
          <p class="card-text">${objDados1[i].descricao}</p>
          <h6>Endereço: <span>  ${objDados1[i].endereco}</span> </h6>
          <i class="card-anuncio">R$ ${objDados1[i].valor} </i>
          <br>
          <a href="https://api.whatsapp.com/send/?phone=%2B55${objDados1[i].zap}&text&type=phone_number&app_absent=0"
           class="btn btn-primary" style = "background-color:#26D367">Entar em contato</a><br>
        </div>
      </div>`
    }

    tela.innerHTML = strHtml;
    
}
document.getElementById('carregaAnuncios').addEventListener('click',imprimeDados)
window.onload(imprimeDados());
