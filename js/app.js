/*
 * Archivo principal de JS
 */
//scroll
 window.addEventListener('scroll', function () {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 200,
  headerEl = document.getElementById('js-header');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
});
//modal
 (function modal(){
    var boxs = Array.from(document.getElementsByClassName("csjs"));
    var modal = document.getElementById("portafolio-modal");
    var modalBody, cerrar, img;
    boxs.forEach(function(box){
        box.addEventListener("click", function(){
            modal.innerHTML = "";
            modalBody = document.createElement("div");
            modalBody.classList.add("modal-body");
            modalBody.innerHTML = box.innerHTML;            
            modal.appendChild(modalBody);
            modal.classList.remove("equis");
            cerrar = document.createElement("div");
            cerrar.classList.add("cerrar");
            img = document.createElement("img");
            img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
            cerrar.appendChild(img);
            modal.appendChild(cerrar);
            cerrar.addEventListener("click",function(){
                modal.classList.add("equis");
            });
        });     
    });
})();

//validaciones//
function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("input-email").value;
	var mensaje = document.getElementById("mensaje-container").value;	
 

    var validaNombre =document.getElementsByClassName("input-box")[0];
    var validaApellido =document.getElementsByClassName("input-box")[1];
    var validaCorreo =document.getElementsByClassName("input-box")[2];
    var validaMensaje =document.getElementsByClassName("input-box")[3];
   
   
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
 	   var spancitoN = document.createElement("span");
       var mensajeN = document.createTextNode("Este campo no debe estar vacio");
       spancitoN.appendChild(mensajeN);
       validaNombre.appendChild(spancitoN);
 	 return false;
 	
 	}else if(spancitoN!=null) {
            validaNombre.removeChild(spancitoN);
        }else if( nombre == "" || nombre.length == 0 || nombre.charAt(0) != nombre.charAt(0).toUpperCase()) {
       var spancitoNma = document.createElement("span");
       var mensajeNma = document.createTextNode("Debe contener mayuscula inicial");
       spancitoNma.appendChild(mensajeNma);
       validaNombre.appendChild(spancitoNma);
       return true;
    } 
     if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
 	   var spancitoA = document.createElement("span");
       var mensajeA = document.createTextNode("Este campo no debe estar vacio");
       spancitoA.appendChild(mensajeA);
       validaApellido.appendChild(spancitoA);
 	 return false;
 	
 	}else if( apellido == "" || apellido.length == 0 || apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
       var spancitoAma = document.createElement("span");
       var mensajeAma = document.createTextNode("Debe contener mayuscula inicial");
       spancitoAma.appendChild(mensajeAma);
       validaApellido.appendChild(spancitoAma);
       return true;
    }
    if((/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo))) {
       var spancitoC = document.createElement("span");
       var mensajeC = document.createTextNode("Este campo no debe estar vacio");
       spancitoC.appendChild(mensajeC);
       validaCorreo.appendChild(spancitoC);
       return false;
    }
   	if( mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje) ) {
 	   var spancitoN = document.createElement("span");
       var mensajeN = document.createTextNode("Este campo no debe estar vacio");
       spancitoN.appendChild(mensajeN);
       validaNombre.appendChild(spancitoN);
 	 return false;
 	
 	}


}

