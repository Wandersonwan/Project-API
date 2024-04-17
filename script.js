const formulario = document.querySelector("form");

const nome = document.querySelector(".name");
const email = document.querySelector(".email");
const senha = document.querySelector(".password");
const tel = document.querySelector(".tel");

function casdastrar(){

    fetch("http://localhost:8080/cadastrar",
    {
        headers: {
            'Accept': 'application/jason',
            'Content-Type': 'application/json'
        }, 
        method:"POST",
        body: JSON.stringify({
            name: nome.value,
            email: email.value,
            senha: senha.value,
            tel: tel.value
        })
    })
    .then(function(res){console.log(res)})
    .catch(function(res){console.log(res)})

};

function limpar(){
    nome.value = "";
    email.value = "";
    senha.value = "";
    tel.value = "";
}

formulario.addEventListener('submit', function (event){
    event.preventDefault();

    casdastrar();
    limpar();

});





