(function validateForm() {
	var boton =	document.getElementById("enviar-f");
	
	boton.addEventListener("click", function(el){
		el.preventDefault();
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var asunto = document.getElementById("asunto").value;
	var area = document.getElementById("text-area").value;


	if(!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre))){
 		alert("Ingrese Nombre");
 	}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(email)) ) {
 		alert("Ingrese correctamente su Email");
 	}else if(asunto == "") {
 		alert("Ingrese correctamente su Dirección");
 	}else if(asunto == ""){
		alert("Escribe tu Asunto");
	}else if(area.length > 100 || area == "") {	
		alert("Ingrese su mensaje. Máximo 100 caracteres");
	}else{
		document.getElementById("nombre").value ="";
		document.getElementById("email").value = "";
		document.getElementById("asunto").value = "";
		document.getElementById("text-area").value ="";	
		alert("Enviado");		
	}
	})
})()


function botones(){
	var inscribete = document.getElementById("inscri");
	var texto = document.querySelector(".texto-header h1");	
	texto.innerHTML = "Girl Power";	
}


(function cambiar(){
	var boton = document.getElementById("el-h");
	var img = Array.from(document.getElementsByClassName("love"))
	boton.addEventListener("click", function(el){
		el.preventDefault();

		img.forEach(function(e){
			e.classList.add("cambio");
		})
	})

})()	


