const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json/101";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/"
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const PRODUCTS_INFO_URL = "https://japceibal.github.io/emercado-api/products/";


let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}




document.addEventListener("DOMContentLoaded",()=> {
    
  getJSONData(PRODUCTS_URL+localStorage.getItem('catID')+".json").then(function(resultObj){
      if (resultObj.status === "ok")
      {
          articles = resultObj.data.products;     
          display(articles);
      } 
  });