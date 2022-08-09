const direccion ="https://japceibal.github.io/emercado-api/cats_products/101.json" ;



document.addEventListener('DOMContentLoaded', ()=>{

    fetch(direccion)
    .then(response => response.json())
    .then(datos=> {
        document.getElementById("Cat").innerHTML= datos.catName + "<br>";
        document.getElementById("img1").innerHTML.src = datos.products[0].image;
        document.getElementById("name1").innerHTML = datos.products[0].name;
        document.getElementById("prize1").innerHTML = datos.products[0].cost;
        document.getElementById("currency1").innerHTML= datos.products[0].currency;
        document.getElementById("description1").innerHTML = datos.products[0].description
        document.getElementById("sold1").innerHTML = datos.products[0].soldCount;
      
        });
  
});
