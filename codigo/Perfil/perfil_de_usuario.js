const reader = new FileReader();

function carregarDados(){
    nomeLogadoArray = document.querySelectorAll(".nomeLogado");
    emailLogadoArray = document.querySelectorAll(".emailLogado");
    celularLogado = document.querySelector(".celularLogado");

    userLogado = JSON.parse(localStorage.getItem("userLogado"));

    for(let i = 0; i < nomeLogadoArray.length; i++){
        nomeLogadoArray[i].innerHTML = userLogado.nome;
    }

    for(let i = 0; i < emailLogadoArray.length; i++){
        emailLogadoArray[i].innerHTML = userLogado.user;
    }

    celularLogado.innerHTML = userLogado.celular;

    for(let i = 4; i < Object.keys(userLogado).length; i++){        
        let key = Object.keys(userLogado)[i];
        
        document.querySelector(`#${key} > span`).innerHTML = userLogado[key];
    }
}

function abrirModal(parameter){
    modal = document.getElementById('modal');
    label = document.getElementById('modalLabel');
    
    modal.style.display='block';
    label.innerHTML = parameter;
}

function salvarModal(){
    userLogado = JSON.parse(localStorage.getItem("userLogado"));
    input = document.getElementById("modalInput");
    label = document.getElementById('modalLabel');

    if(input.value != ""){
        listaUser = JSON.parse(localStorage.getItem("listaUser"))
        info = document.querySelector("#" + label.innerHTML + " > span");
        info.innerHTML = input.value;

        for(let i = 0; i < listaUser.length; i++){
            if(listaUser[i].userCad == userLogado.user){
                userLogado[label.innerHTML] = input.value;
                listaUser[i][label.innerHTML] = input.value;
            }
        }

        localStorage.setItem("userLogado", JSON.stringify(userLogado));
        localStorage.setItem("listaUser", JSON.stringify(listaUser));

        alert("Salvo Com Sucesso!");
    }
}

document.getElementById("trocarImagemPerfilInput").addEventListener("change", function(){
    reader.addEventListener("load", function(){
        document.getElementById("perfilImagem").src = reader.result;
    });

    reader.readAsDataURL(this.files[0])
});