let prevcom=[];

function Load(array){
    for(let i = 0; i < array.length; i++){ 
        let oldcom = array[i];
    let prevcoms = "";

    prevcoms += `
    <div>
    <h4>${oldcom.user}</h4>
    <p>${oldcom.description}
    <div>
    <p>Puntaje: ${oldcom.score}<p>
  
    </div>
    </div>
    `
document.getElementById("com").innerHTML= prevcoms ;
};
};


document.addEventListener("DOMContentLoaded",()=> {


getJSONData(PRODUCT_INFO_COMMENTS_URL+localStorage.getItem('artID')+".json").then(function(resultObj){
    if (resultObj.status === "ok")
    {
        prevcom = resultObj.data;     
        Load(prevcom);
    } 
});

});

