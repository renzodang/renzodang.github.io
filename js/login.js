function login (){
    let user = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;

if (user !== "" && password!== "") {
    localStorage.setItem('user',user);
    location.href="index.html";
}else  {
    alert('Ingresar Correo y Contraseña');
}


}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("Ingreso").addEventListener('click',()=>{
        login();
    });
});