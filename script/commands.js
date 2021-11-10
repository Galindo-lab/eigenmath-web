


function executeCommand(string_input){
    console.log(string_input)
    let parts = string_input.split(' ')
    let expr = parts[0]
    
    switch (expr) {
    case ":alert":              // crear una alert con algun mensaje
        alert(parts[1]);
        break;

    case ":save":               // guardar buffer
        alert("save done")
        window.localStorage.setItem(parts[1], $("buffer").value);
        break;

    case ":load":               // cargar un buffer 
        $("buffer").value = window.localStorage.getItem(parts[1]);
        break;

    case ":disable":            // desactivar autocompletado
        $("input").setAttribute("list", "");
        window.localStorage.setItem("list","");
        break;

    case ":enable":             // activar autocompletado
        $("input").setAttribute("list", "functions"); 
        window.localStorage.setItem("list","functions");
        break;
        
    default:
        alert("Comando error");
    }
}
