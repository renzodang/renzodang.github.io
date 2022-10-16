let articles = [];


function display(articles){

 

  
    let cont = "";
    for(article of articles){
    cont +=`
  
  <tr>
    <th scope="row"><img src="${article.image}" class ="w-25 p-3" width="10px"> <span>${article.name}</span></th>
    <td id="cost">USD ${article.unitCost}</td>
    <td><input id="valueCount" type="number" value="1" onclick="subtotal(this.value)"></td>
    <td id="subtotal">USD </td>
  </tr>
 `

};
document.getElementById("cart").innerHTML = cont;

};


function subtotal(number){
 fetch(CART_INFO_URL+"25801.json")
 .then(response =>response.json())
 .then(data =>{
  for(let article of data.articles){
    let a = article.unitCost*number;
    a = article.currency + "" + a
    document.getElementById("subtotal").innerHTML= a ;
  }
 })};

document.addEventListener("DOMContentLoaded",()=> {
getJSONData(CART_INFO_URL+"25801.json").then(function(resultObj){
    if (resultObj.status === "ok")
    {
        articles = resultObj.data.articles;     
       display(articles);
    } 
});

});
