let article = [];

let user = localStorage.getItem('user');
let artID = localStorage.getItem("artID");





function display(product){
    let htmlContentToAppend = "";
        htmlContentToAppend += `
       
        <div class="list-group-item list-group-item-action">
        
            <div class="row">
                <div class="col-3">
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
                        
                    
                      
                        <div id= "prevcom"
                        </div>
                        <div class = "mb-6">
                        <h4> Comentar: </h4>
                        <input type="textarea" id="com" class="d-flex w-100 justify-content-between">
                          </div>
                
                    </div>
               

                <div class= "bg-image">
                <style type = "text/css" media ="screen">
                main{
                    background-image: url(${product.images[3]});
                    background-size: cover;
                    border: solid lightblue 10px;
                </style>
                </div>
            </div>
        `
      
        document.getElementById("prod").innerHTML = htmlContentToAppend;
       
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
        } 
    });

});
  

