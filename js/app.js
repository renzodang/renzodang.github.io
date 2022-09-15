
let articles = [];
let user = localStorage.getItem('user');
function login() {
    if (user == null) {
      alert("Ingresa con tu Usuario");
      location.href = "login.html";
    }
      else{
      document.getElementById("profile").innerHTML= user;
    }
  };


function setArtID(id) {
    localStorage.setItem("artID",id);
    window.location = "product-info.html";
};


function display(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){ 
        let product = array[i];
        
        htmlContentToAppend += `
        <div onclick="setArtID(${product.id})" class=" list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                
                    <img src= " ${product.image}" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div>
                        <h4 class="mb-1"><strong>  ${product.name} </strong> </h4> 
                        <h4 class = "mb-1"><strong>  ${product.currency}${product.cost}</strong> </h4> 
                        <p class = "mb-1"> ${product.description}</p> 
                        </div>
                        <small class="text-muted">${product.soldCount}  Artículos Vendidos</small>
            
                    </div>
                </div>
            </div>
    
        <br>
        `
        
      

}
document.getElementById("prod").innerHTML = htmlContentToAppend + "<br>";
}


function login() {
    if (user == null) {
      alert("Ingresa con tu Usuario");
      location.href = "login.html";
    }
      else{
      document.getElementById("profile").innerHTML= user;
    }
  };
  
  function FilterList(articles){
    
let Min = parseInt(document.getElementById('rangeFilterCostMin').value);
let Max = parseInt(document.getElementById('rangeFilterCostMax').value);
let FList = articles.filter(article => article.cost >= Min && article.cost <= Max);
FList.sort((a,b)=>a.cost-b.cost);
console.log (FList);
display(FList);
};
    


function SortByCostDesc(array){ 
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return -1;
        });
    };
function SortByRelev(array){
 
        result = array.sort(function(a, b) {
           
            if ( a.soldCount > b.soldCount ){ return -1; }
            if ( a.soldCount < b.soldCount ){ return 1; }
            return 0;
        });
    };

    function FindArticle (articles){
        let setting =document.getElementById("finder").value;
       let result = articles.find(article => article.name.includes(setting))
  
    if(setting === ""){
        display(articles)
    }else {
        
       display(result);
    }
};



document.addEventListener("DOMContentLoaded",()=> {
    
    getJSONData(PRODUCTS_URL+localStorage.getItem('catID')+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            articles = resultObj.data.products;     
            display(articles);
        } 
    });
    login();

    document.getElementById('rangeFilterCost').addEventListener('click',()=>{
        FilterList(articles);
       
});
document.getElementById('sortAsc').addEventListener('click',()=>{
    SortByCostAsc(articles);
    display(articles);
});
document.getElementById('sortDesc').addEventListener('click',()=>{s
    SortByCostDesc(articles);
    display(articles);
});
document.getElementById('sortByCount').addEventListener('click',()=>{
    SortByRelev(articles);
    display(articles);
});
document.getElementById('finder').addEventListener('input',()=>{
    FindArticle(articles);
    display(articles)
   
});

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCostMin").value = "";
    document.getElementById("rangeFilterCostMax").value = "";
    display(articles);
});
});






