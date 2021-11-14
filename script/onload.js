
/** 
 * Restaurar las configuraciones
 *   
 * - localstorage
 *   +   list: mostar autocompletado en el minibuffer
 *   + buffer: contenido del buffer 
 */

window.onload = () => {
    $("input").setAttribute("list",window.localStorage.getItem("list"));
    $("buffer").value = window.localStorage.getItem("buffer");
};
