// aquí van los scrips de inicio

window.onload = () => {
    // autocompletado completado
    $("input").setAttribute("list",window.localStorage.getItem("list"));
    // recargar el contenido del buffer principal
    $("buffer").value = window.localStorage.getItem("buffer");
};
