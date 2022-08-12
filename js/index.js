document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
   
    
    let user = localStorage.getItem('usuario')
    document.getElementById("floatingInput").innerHTML=user; 

});
if (user == null){
    alert ('Ingresa con tu Usuario');
    location.href="login.html"};

function cerrar (){
 localStorage.removeItem('usuario')  ;
 alert ('Cerrando Sesión');
 location.href="index.html" 
}
