
ENTER_KEY_CODE = 13


function removeStdinLastLine() {
    let stdin = $("stdin")
    let value = stdin.value
    let lines = value.split('\n')
    lines.splice(lines.length - 1)
    stdin.value = lines.join('\n')
}

function syntaxError() {
    let error = '<span style="color:red;font-family:courier">';
    return $("stdout").innerHTML.includes(error)
}

function clearInput() {
    $("input").value = ""    
}

function isCommnad() {
    return $("input").value.charAt(0) === ':'
}

function executeCommand(){

    let parts = $("input").value.split(' ')
    let expr =  parts[0]
    
    switch (expr) {
    case ":alert":
        alert(parts[1]);
        break;

    case ":save":
        alert("save done")
        window.localStorage.setItem(parts[1], $("buffer").value);
        break;

    case ":load":
        $("buffer").value = window.localStorage.getItem(parts[1]);
        break;
        
    default:
        alert("Comando error");
    }
}

$("input").addEventListener("keyup", (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
        event.preventDefault();

        if(syntaxError()){ removeStdinLastLine() }

        if( isCommnad() ) {
            executeCommand();
        } else {
            $("stdin").value += "\n" + $("input").value;
            run();
        }

        clearInput();
        
    }
});


$("input").addEventListener("focus", (event) => {
    $("buffer").style.display = "none";
});

$("input").addEventListener("blur", (event) => {
    $("buffer").style.display = "block";
});

$("buffer").addEventListener("change", () => {
    $("stdin").value = "trace=1\n" + $("buffer").value;
});

$("execute").addEventListener("click", () => {

    if ( $("input").value != "" ) {
        $("stdin").value = "trace=1\n" + $("buffer").value + "\n" + $("input").value;
        clearInput();
    } 
    
    run();
});
