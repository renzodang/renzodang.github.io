let prevcom=[];
newcom =[]

function stars(score){
    let stars ="";
    
    for(let i = 1 ;i <=5;i++){
        if(i<=score){
            stars +='<span class="fa fa-star checked">'
        }else
        stars +='<span class="far fa-star checked">'

    }
    return stars
}

function Showcom(array){
    let content = "";
    for(let i = 0; i < array.length; i++){ 
        let oldcom = array[i];
  

    content += `
    <div class="list-group-item list-group-item-action">
   
    <h4><strong>${oldcom.user}</strong></h4>
    <p>${oldcom.description}</p>
    <h6> ${oldcom.dateTime}<h6>
    <div>
    <p>Puntaje: ${stars(oldcom.score)}<p>

  
    </div>
    </div>
    
    `
    document.getElementById("comment").innerHTML= content;
};
    
};

function NComment(){
let usercom = {};
let dateTime= new Date();
  usercom.user= localStorage.getItem("user")
  usercom.description = document.getElementById("newcom").value
  usercom.dateTime = dateTime;
  usercom.score= document.getElementById("puntaje").value
  
 prevcom.push(usercom);
 Showcom(prevcom);


    
}


document.addEventListener("DOMContentLoaded",()=> {


getJSONData(PRODUCT_INFO_COMMENTS_URL+artID+".json").then(function(resultObj){
    if (resultObj.status === "ok")
    {
        prevcom = resultObj.data;     
        Showcom(prevcom);
    } 
    
});
document.getElementById('send').addEventListener('click',()=>{
 NComment()
 document.getElementById("newcom").value = ""


})
});

