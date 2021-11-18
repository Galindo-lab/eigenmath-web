
function switchTheme() {
    let body = document.body;
    
    if( localStorage.getItem("theme") == 'dark' ){
        localStorage.setItem("theme", 'light')
    } else {
        localStorage.setItem("theme", 'dark')
    }

    body.classList.value =  localStorage.getItem("theme");
}


/** 
 * reducir y expandir el minibuffer cuando la pantalla es mas pequeña.
 * de 1023px.
 */

function toggleBuffer() {
    let buffer_display = $("buffer").style.display;
    if(window.screen.availWidth <= 1023) {
        if(buffer_display == "none") {
            $("buffer").style.display = "block";
        } else {
            $("buffer").style.display = "none";
        }
    }
}


// ---------------------------------------------------------


$("input").addEventListener("focus", () => {
    toggleBuffer()
});

$("input").addEventListener("blur", () => {
    toggleBuffer()
});

$("buffer").addEventListener("focus", (event) => {
    $("input").defaultValue;
});
