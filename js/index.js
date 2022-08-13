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
    document.getElementById("close").addEventListener("click", function() {
      cerrar();
        });
        document.getElementById("init").addEventListener("click", function() {
            window.location = "login.html";

            });
       
   
    
    let user = localStorage.getItem('user')
    document.getElementById("floatingInput").innerHTML=user; 

});
function logear (){
if (user == null){
    alert ('Ingresa con tu Usuario');
    location.href="login.html"};
}
function cerrar (){
 localStorage.removeItem('usuario')  ;
 alert ('Cerrando Sesión');
 location.href="index.html" 
}
