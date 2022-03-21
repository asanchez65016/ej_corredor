function validar_nom(){
    var campo_nombre=document.getElementById("nombre");

    if (campo_nombre.value.length<4){
        alert("El nombre debe tener al menos cuatro letras");
        campo_nombre.style.backgroundColor="#FCE94F";
    } else {
        campo_nombre.style.backgroundColor="white";
    }
}

function ValidateEmail(mail) {

    var campo_email=document.getElementById("email");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    campo_email.style.backgroundColor="white";
    return (true);
  }
    alert("El email es inválido");
    campo_email.style.backgroundColor="#FCE94F";
    return (false)
}

function SiCorre(){

    if(document.getElementById("distancia")!=null){

    }else{
        var objeto_num=document.createElement("input");
        objeto_num.type="number";
        objeto_num.id="distancia";
        objeto_num.placeholder="Introduce la distancia";
        document.getElementById("corredor").appendChild(objeto_num);  
    }
}
function noHaCorrido(){

        if (document.getElementById("distancia")!=null)
        {
        document.getElementById("corredor").removeChild(document.getElementById("distancia"));
        }
}
function visualizar(){
    var nombre=document.getElementById("nombre").value;
    var email=document.getElementById("email").value;
    var saludo="Te llamas "+nombre+" tienes email: "+email;

    var buttons=document.getElementsByName("exp");
    var exp=buttons[0].checked;
    if (exp)
    {
        var distancia=document.getElementById("distancia").value;
        saludo=saludo+" y has corrido distancia de "+distancia+" km";
    }

    alert(saludo);
}


