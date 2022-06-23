var boton = document.querySelector(".formcontacto__boton");
var enviado = document.querySelector(".formcontacto__enviado");

var errorNombre = document.querySelector("#errornombre");
var errorMail = document.querySelector("#errormail");
var errorAsunto = document.querySelector("#errorasunto");
var errorMensaje = document.querySelector("#errormensaje");

boton.addEventListener("click",function(){

    var form = document.querySelector(".formcontato__form");
    var datos = capturarDatos(form);

    error = verificarDatos(datos);

    if(error){

        enviado.classList.remove("mostrarerror");
        return;
    }
    
    form.reset();

    enviado.classList.add("mostrarerror");
})

function capturarDatos(datos){

    var dato = {
        nombre: datos.nombre.value,
        mail: datos.mail.value,
        asunto: datos.asunto.value,
        mensaje: datos.mensaje.value,
    }

    return dato;
}

function verificarDatos(datos){

    errores = false;

    if(datos.nombre.length == 0){
        errores = mostrarErrores(errorNombre,"El nombre no puede estar vacio");
    }
    else{

        if(datos.nombre.length > 50){
            errores = mostrarErrores(errorNombre,"El nombre no debe tener mas de 50 caracteres");    
        }
        else{
            errorNombre.innerHTML = "";
        }
    }

    if(datos.mail.length == 0){
        errores = mostrarErrores(errorMail,"El email no puede estar vacio");
    }
    else{   
        if(!datos.mail.includes("@") || !datos.email.includes(".")){
            errores = mostrarErrores(errorMail,"El mail ingresado debe ser un mail valido");
        }
        else{
            errorMail.innerHTML = "";
        }    
    }

    if(datos.asunto.length == 0){
        errores = mostrarErrores(errorAsunto,"El asunto no puede estar vacio");
    }
    else{

        if(datos.asunto.length > 50){
            errores = mostrarErrores(errorAsunto,"El asunto no puede tener mas de 50 caracteres");    
        }
        else{
            errorAsunto.innerHTML = "";
        }
    }

    if(datos.mensaje.length == 0){
        errores = mostrarErrores(errorMensaje,"El mensaje no puede estar vacio");
    }
    else{

        if(datos.mensaje.length > 300){
            errores = mostrarErrores(errorMensaje,"El mensaje no puede tener mas de 300 caracteres");    
        }
        else{
            errorMensaje.innerHTML = "";
        }
    }

    return errores;
}


function mostrarErrores(ul,mensaje){
    ul.innerHTML = "";

    var error = document.createElement("li");
    error.textContent = mensaje;
    ul.appendChild(error);
    errores = true;

    return errores;
}