
/** 
 * Restaurar las configuraciones
 *   
 * - localstorage
 *   +   list: mostar autocompletado en el minibuffer
 *   + buffer: contenido del buffer 
 *   +  theme: color del tema (dark, light)
 */

window.onload = () => {
    $("input").setAttribute("list",window.localStorage.getItem("list"));
    $("buffer").value = window.localStorage.getItem("buffer");

    let body = document.body

    if( localStorage.getItem("theme") ) {
        body.classList.value = localStorage.getItem("theme")
    } else {
        localStorage.setItem('theme', 'light');
        body.classList.value =  'light' 
    }
    
};

function emit_graph()
{
	var h, w;

	h = DRAW_TOP_PAD + DRAW_HEIGHT + DRAW_BOTTOM_PAD;
	w = DRAW_LEFT_PAD + DRAW_WIDTH + DRAW_RIGHT_PAD;

	h = "height='" + h + "'";
	w = "width='" + w + "'";

	outbuf = "<svg class='emited_graph' viewbox='50 0 600 350'" + h + w + ">"

	emit_axes();
	emit_box();
	emit_labels();
	emit_points();

	outbuf += "</svg><br>";

	stdout.innerHTML += outbuf;
}
