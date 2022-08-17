let user = JSON.parse(getItem.localStorage("item"));

function logear() {
  if (user == null) {
    alert("Ingresa con tu Usuario");
    location.href = "login.html";
  }
}
function cerrar() {
  alert("Cerraste Sesión");
  localStorage.clear;
  location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  logear();
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
  document.getElementById("init").addEventListener("click", function () {
    window.location = "login.html";
  });

  document.getElementById("floatingInput").innerHTML = user;
});
