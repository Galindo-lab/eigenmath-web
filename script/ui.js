// aquí van todos los scripts para controlar la interfaz

// oculta el buffer principal al seleccionar el minibuffer para hacer mas
// accesible el minibuffer.
$("input").addEventListener("focus", (event) => {
    $("buffer").style.display = "none";
});

// al perder el focus, el buffer principal se vuleve a hacer visible 
$("input").addEventListener("blur", (event) => {
    $("buffer").style.display = "block";
});

// al seleccioar el buffer principal limpia el minibuffer
$("buffer").addEventListener("focus", (event) => {
    $("input").value = "";
});
