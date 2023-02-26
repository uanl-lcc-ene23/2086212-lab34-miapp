let user = document.getElementById("user1");
let pwd = document.getElementById("pwd1");
let texto =document.getElementById("txt");
function iniciar(){
    if(user.value=="" || pwd.value==""){
        texto.innerText="Contiene campos vacios";
    }else{
        texto.innerText= "Login Correcto "+user.value;
    }
}
function registrar(){
    if(user.value=="" || pwd.value==""){
        texto.innerText="Contiene campos vacios";
    }else{
        texto.innerText= "Registro Correcto "+user.value;
    }
}