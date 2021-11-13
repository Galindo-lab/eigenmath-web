/** 
 * reducir y expandir el minibuffer cuando la pantalla es mas pequeña.
 * de 1023px.
 */

function toggleBuffer() {
    let buffer_display = $("buffer").style.display;

    if( buffer_display == "block" && window.screen.availWidth <= 1023 ) {
        $("buffer").style.display = "block";
    } else {
        $("buffer").style.display = "none";
    }
}


// ---------------------------------------------------------


$("input").addEventListener("focus", toggleBuffer);

$("input").addEventListener("blur", toggleBuffer);

$("buffer").addEventListener("focus", (event) => {
    $("input").defaultValue;
});
