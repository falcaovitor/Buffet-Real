
function validate(event){
let nome = document.querySelector(".container .form form .form-group input[name=nome]");
let idade = document.querySelector(".container .form form .form-group input[name=idade]");
let email = document.querySelector(".container .form form .form-group input[name=email]");
let celular = document.querySelector(".container .form form .form-group input[name=celular]");
let pessoas = document.querySelector(".container .form form .form-group input[name=pessoas]");
let data = document.querySelector(".container .form form .form-group input[name=data]");
let select = document.querySelector(".container .form form .form-group #eventos");



    if(nome.value == ""){
        alert("Por favor verifique o campo nome");
        event.preventDefault();
        nome.focus();
    }
    else if(idade.value == ""){
        alert("Por favor verifique o campo Idade");
        event.preventDefault();
        idade.focus();
    }
    else if(email.value == ""){
        alert("Por favor verifique o campo E-mail");
        event.preventDefault();
        email.focus()
    }
    else if(celular.value == ""){
        alert("Por favor verifique o campo celular")
        event.preventDefault();
        celular.focus();
    }
    else if(pessoas.value == ""){
        alert("Por favor verifique o campo pessoas")
        event.preventDefault();
        pessoas.focus()
    }
    else if(data.value == ""){
        alert("Por favor verifique o campo data");
        event.preventDefault();
        data.focus()
    }
    else if(select.value == ""){
        alert("Por favor escolha um tipo de evento");
        event.preventDefault();
        select.focus();
    }
}