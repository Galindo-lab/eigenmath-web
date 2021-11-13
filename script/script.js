/** 
 * Determinar si el código evaluado es invalido.
 * HACK: A fecha de hoy eigenmath.js no tiene una función para determinar
 *       si el código evaluado es valido, esta es la solución debería ser
 *       reemplazada por algo más propio en cuanto una solución oficial este
 *       disponible.
 */

function syntaxError() {
    let error = '<span style="color:red;font-family:courier">';
    return $("stdout").innerHTML.includes(error)
}

/**
 * Eliminar el ultimo carácter de el textarea stdin.
 * NOTE: El codigo que evalua eigenmath.js tiene que estar en este textarea
 *       sí no el codigo no se evaluará.
 */

function removeStdinLastLine() {
    let stdin = $("stdin")
    let value = stdin.value
    let lines = value.split('\n')
    lines.splice(lines.length - 1)
    stdin.value = lines.join('\n')
}

/**
 * Eliminar el contenido del minibuffuer.
 * TODO: renombrar "input" a "minibuffuer"
 */

function clearInput() {
    $("input").value = "";
}

/**
 * Comprobar si el contenido del minibuffer es un comando.
 */

function isCommnad() {
    return $("input").value.charAt(0) === '/';
}

/**
 * Ejecutar un comando.
 * NOTE: En este contexto se refiera a las acciones que puede ejecutar js
 *       *No* a comandos de eigenmath. Revisar commands.js para más información
 */

function executeCommand(string_input) {
    function removeFirstChar(s) {
        return s.substring(1);
    }
    
    let parts = string_input.split(' ');
    let expr = removeFirstChar(parts[0]);
    
    if(!command[expr]) {
        command["default"]();
    } else {
        command[expr](parts);
    }
}

/**
 * Evaluar el contenido del buffer.
 * NOTE: El codigo que evalua eigenmath.js tiene que estar en este textarea
 *       sí no el codigo no se evaluará.
 */

function evalBuffer() {
    $("stdin").value = [
        "trace=1",
        $("buffer").value,
    ].join("\n");

    run();
}

/**
 * Evaluar el contenido del minibuffer y limpiar el minibuffer.
 */

function evalMinibuffer() {
    if (isCommnad()) {
        executeCommand($("input").value);
    } else {
        if (syntaxError()) {
            removeStdinLastLine()
        } else {
            $("stdin").value += "\n" + $("input").value;
            run();
        }
    }
    clearInput();
}


// ---------------------------------------------------------


$("input").addEventListener("keyup", (event) => {
    let ENTER_KEY_CODE = 13;
    if (event.keyCode === ENTER_KEY_CODE) {
        event.preventDefault();
        evalMinibuffer();
    }
});

$("execute").addEventListener("click", () => {
    let minibuffuer = $("input");
    let buffer = $("buffer");

    if (minibuffuer.value != "") {
        evalMinibuffer();
    } else {
        evalBuffer();
    }
});

$("buffer").addEventListener("change", () => {
    window.localStorage.setItem("buffer", $("buffer").value);
    $("stdin").value = "trace=1\n" + $("buffer").value;
});
