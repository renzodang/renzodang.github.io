let user = localStorage.getItem('user');

function login() {
  if (user == null) {
    alert("Ingresa con tu Usuario");
    location.href = "login.html";}
    else{
    document.getElementById("profile").innerHTML= user
  }
}
function cerrar() {
  alert("Cerraste Sesión");
  localStorage.clear();
  location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  login();
  document.getElementById("autos").addEventListener("click", function () {
    localStorage.setItem("catID", 101);
    window.location = "products.html";
  });
  document.getElementById("juguetes").addEventListener("click", function () {
    localStorage.setItem("catID", 102);
    window.location = "products.html";
  });
  document.getElementById("muebles").addEventListener("click", function () {
    localStorage.setItem("catID", 103);
    window.location = "products.html";
  });
  document.getElementById("close").addEventListener("click", function () {
    cerrar();
  });

});
