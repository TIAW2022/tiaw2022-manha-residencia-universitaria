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

    // incluir um novo contato
    let titulo = document.getElementById('tituloAnuncio').value;
    let endereco = document.getElementById('endereco').value;
    let nQuartos = document.getElementById('quartos').value;
    let valor = document.getElementById('valor').value;
    let descricao = document.getElementById('descricao').value;

    let novoAnuncio = {
        titulo: titulo,
        endereco: endereco,
        nQuartos: nQuartos,
        valor: valor,
        descricao: descricao
    };

    objDados.anuncio.push(novoAnuncio);


    // salvar os dados no localStorage novamente

    salvaDados(objDados);

    //atualiza os dados da tela
    //imprimeDados();
}
document.getElementById('BtnContinuar').addEventListener('click',incluirAnuncio)