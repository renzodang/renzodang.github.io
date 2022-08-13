
let direccion = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let categoriesArray = [];



function showCategoriesList(array){
    let htmlContentToAppend = "";


    for(let i = 0; i < array.products.length; i++){ 
        let auto = array.products[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src= "` + auto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4><strong> `+ auto.name +`</strong> </h4> 
                        <p>`+ auto.description +`</p> 
                        </div>
                        <small class="text-muted">` + auto.soldCount + ` Artículos Vendidos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
      
}
document.getElementById("prod").innerHTML = htmlContentToAppend; 
}

document.addEventListener("DOMContentLoaded",()=>{
    getJSONData(direccion).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        } 
    });
});



