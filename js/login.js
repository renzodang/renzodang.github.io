function login (){
   let user = {}
    user.name = document.getElementById("floatingInput").value;
    user.pass = document.getElementById("floatingPassword").value;
    user.perm = document.getElementById("record").checked ;

  if (user.name === "" || user.pass === ""){
   alert ('Para continuar debe ingresar nombre y contraseña');
} else if (user.perm === false){
    localStorage.setItem('user',(user.name))
    location.href = "index.html";
} else if(user.perm === true){
    localStorage.setItem('pass',(user.pass))
    location.href = "index.html";     
};
};

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("Ingreso").addEventListener('click',()=>{
        login(); 
     });
    });

