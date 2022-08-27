
let articles = [];


function filterlist(array){
let products = array.products
let Min = parseInt(document.getElementById('rangeFilterCostMin').value);
let Max = parseInt(document.getElementById('rangeFilterCostMax').value);

let FList = products.filter(product => product.cost >= Min && product.cost <= Max);
console.log(FList);

FList.sort((a,b)=>a.products.cost-b.products.cost);

display(FList);
}


function display(array){
    let htmlContentToAppend = "";
    for(let i = 0; i < array.products.length; i++){ 
        let product = array.products[i]
       

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src= "` + product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4><strong> `+ product.name +`</strong> </h4> 
                        <h4><strong> $`+ product.cost +`</strong> </h4> 
                        <p>`+ product.description +`</p> 
                        </div>
                        <small class="text-muted">` + product.soldCount + ` Artículos Vendidos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
      
}

document.getElementById("prod").innerHTML = htmlContentToAppend; 
}






document.addEventListener("DOMContentLoaded",()=> {
    let category = localStorage.getItem('catID');
    
    getJSONData(PRODUCTS_URL+category+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            articles = resultObj.data;     
            display(articles);
        } 
    });
    document.getElementById('rangeFilterCost').addEventListener('click',()=>{
        filterlist()
    });
});
