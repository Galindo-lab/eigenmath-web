// aquí van todos los scripts para controlar la interfaz

function toggleBuffer() {
    let buffer_display = $("buffer").style.display;
    switch(buffer_display) {
    case "none":
        // oculta el buffer principal al seleccionar el minibuffer para hacer mas accesible el minibuffer.
        $("buffer").style.display = "block";
        break;
        // al perder el focus, el buffer principal se vuleve a hacer visible 
    case "block":
        $("buffer").style.display = "none";
        break;

    default:
        $("buffer").style.display = "none";
        break;
    }
}



$("input").addEventListener("focus", (event) => {
    if(window.screen.availWidth <= 1023){
        toggleBuffer();
    }
    // $("buffer").style.display = "none";
});

$("input").addEventListener("blur", (event) => {
    if(window.screen.availWidth <= 1023){
        toggleBuffer();
    }
    // $("buffer").style.display = "block";
});

// al seleccioar el buffer principal limpia el minibuffer
$("buffer").addEventListener("focus", (event) => {
    $("input").defaultValue;
});
