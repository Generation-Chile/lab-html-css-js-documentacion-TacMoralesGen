const ready = () => {
  // Se captura el boton de llamado a la acción
  let form = document.getElementById("cta-form");
  
  // Se le agrega a este boton una función que nos lleva al formulario de contacto
  // de manera smooth, gracias al argumento de objeto que tiene la función scrollIntoView
  form.addEventListener("click", function () {
    let formElement = document.getElementById("form");
    formElement.scrollIntoView({ behavior: "smooth" });
  });
  
  // document.getElementById tiene un costo: se llama solo una vez, y
  // luego se accede a estas variables.
  let $nombre = document.getElementById("name");
  let $email = document.getElementById("email");
  let $mensaje = document.getElementById("message");
  let $inputs = [$nombre, $email, $mensaje];
  
  function presionarBoton() {
    cleanErrors();
    // capturar los valores de los inputs
    let nombre = $nombre.value;
    let email = $email.value;
    let mensaje = $mensaje.value;
  
    // Se verifica que NINGUNO (gracias al uso de ||) los campos sea vacio.
    // Si es el caso, no se realiza el "envio" y se notifica al usuario
    if (nombre === "" || email === "" || mensaje === "") {
      // show in ui, not in alert
      showErrors();
      return;
    }
  
    // mostrar un mensaje de alerta de envio exitoso.
    alert("Gracias por enviar tu mensaje, revisa la consola por favor");
    console.table({ nombre, email, mensaje });
  
    // limpiar los inputs
    $inputs.forEach((element) => {
      element.value = "";
    })
  }

  const showError = (element) => {
    element.classList.add("error");
    element.setAttribute("placeholder", "Campo obligatorio, favor ingresar");
  } 

  const cleanError = (element) => {
    element.classList.remove("error");
    element.setAttribute("placeholder", "");
  }
  
  const showErrors = () => {
    $inputs.forEach(showError)
  }
  
  const cleanErrors = () => {
    $inputs.forEach(cleanError)
  }

  $inputs.forEach((element) => {
    element.addEventListener("input", (event) => {
      const inputToClean = event.target
      cleanError(inputToClean)
    })
  })

  const buttonForm = document.getElementById("form-button");
  buttonForm.addEventListener("click", presionarBoton)
}

//Se ejecuta todo el script SOLO cuando todo el DOM (el documento html) fue cargado
document.addEventListener("DOMContentLoaded", (event) => {
  ready()
});