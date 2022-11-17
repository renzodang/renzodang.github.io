let article = [];

let user = localStorage.getItem('user');
let artID = localStorage.getItem("artID");

function setArtID(id) {
    localStorage.removeItem("artID")
    localStorage.setItem("artID",id);
    window.location = "product-info.html";
};


function display(product){
    let htmlContentToAppend = "";
        htmlContentToAppend += `
       
        <div class="list-group-item list-group-item">
        
            <div class="row">
                <div class="col-md-2">
                    <img src= " ${product.images[0]}" alt="product image" class="img-thumbnail">
                    <img src= " ${product.images[1]}" alt="product image" class="img-thumbnail">
                    <img src= " ${product.images[2]}" alt="product image" class="img-thumbnail">
                    <img src= " ${product.images[3]}" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h1><strong>  ${product.name} </strong> </h1> 
                        <h2><strong>  ${product.currency} -${product.cost}</strong> </h2> 
                        <br>
                        <h3> ${product.description}<h3>
                        <br>
                        <p class="text-muted">${product.soldCount}  Artículos Vendidos</p>
                        </div>
                        </div>
                        </div>
                      

                <div class= "bg-image">
                <style type = "text/css" media ="screen">
                main{
                    background-image: url(${product.images[3]});
                    background-size: cover;
                    
                </style>
                </div>
            </div>
           

    
        `
      
        document.getElementById("prod").innerHTML = htmlContentToAppend; 
};


function relatedprod(products){
   
    let cont = "";
    for(let product of products.relatedProducts ){ 
      
       
        cont += `
      
        <div class="d-flex flex-row">
        <div class="d-flex flex-row">
        
        <div onclick="setArtID('${product.id}')" class=" "d-flex align-content-start flex-wrap">

        <div class="card" style="width: 30rem;">
        <h3 class="card-text">${product.name}</h3>
        <img class="card-img " src="${product.image}" alt="Card image cap" width= 1px>
        <div class="card-body">
          <p class="card-text"></p>
        </div>
        
      </div>
      </div>
      </div>
    
           <br>
              
        `}
        document.getElementById("relatedprod").innerHTML = cont;
        
  }



function login() {
    if (user == null) {
      alert("Ingresa con tu Usuario");
      location.href = "login.html";}
      else{
      document.getElementById("profile").innerHTML= user
    }
  };




document.addEventListener("DOMContentLoaded",()=> {
    
    getJSONData(PRODUCTS_INFO_URL+localStorage.getItem('artID')+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            article = resultObj.data;     
            display(article);
            relatedprod(article);
           
        } 
    });

});
  

