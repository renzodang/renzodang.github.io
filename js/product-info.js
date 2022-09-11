let article = [];
let prevcom = [];
let user = localStorage.getItem('user');
let artID = localStorage.getItem("artID",id);
let com = document.getElementById("com").value;



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
                        <h4><strong>  ${product.name} </strong> </h4> 
                        <h4><strong>  ${product.currency}${product.cost}</strong> </h4> 
                        <p> ${product.description}</p> 
                        </div>
                        <small class="text-muted">${product.soldCount}  Artículos Vendidos</small>
                        <div>
                        <br>
                        <h4> Comentar:
                        <input type="textarea" id="com">
                        <div >
                        </div>
                        </div>
                
                    </div>
                </div>
            </div>
        `
      
        document.getElementById("prod").innerHTML = htmlContentToAppend;
}


function Comment(prevcom){
    let prevcoms = "";
    prevcoms += `
    <div>
    <h4>${}</h4>      `

};



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
    getJSONData(PRODUCT_INFO_COMMENTS_URL+localStorage.getItem('artID')+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            prevcom= resultObj.data;     
            Comment(prevcom);
});
  

