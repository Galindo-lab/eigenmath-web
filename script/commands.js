
/*
 * Commandos para la interfaz.
 * NOTE: En el futuro algunos de los comandos se podran remplazar con botones
 *       en la GUI.
 */ 

var command = {
    ["alert"]: (argv) => {
        alert(argv[1]);
    },
    
    ["save"]: (argv) => {
        alert("save done")
        window.localStorage.setItem(parts[1], $("buffer").value);
    },
    
    ["load"]: (argv) => {
        $("buffer").value = window.localStorage.getItem(parts[1]);
    },
    
    ["disable"]: (argv) => {
        $("input").setAttribute("list", "");
        window.localStorage.setItem("list","");
    },

    ["enable"]: (argv) => {
        $("input").setAttribute("list", "functions"); 
        window.localStorage.setItem("list","functions");
    },

    ["theme"]: () => {
        switchTheme();
    },

    ["default"]: () => {
        alert("Comando inexistente");
    }
}
