
window.onload = () => {
    $("input").setAttribute("list",window.localStorage.getItem("list"));
    $("buffer").value = window.localStorage.getItem("buffer");
};

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

    case ":disable":
        $("input").setAttribute("list", "");
        window.localStorage.setItem("list","");
        break;

    case ":enable":
        $("input").setAttribute("list", "functions"); 
        window.localStorage.setItem("list","functions");
        break;
        
    default:
        alert("Comando error");
    }
}

$("input").addEventListener("keyup", (event) => {
    let ENTER_KEY_CODE = 13
    
    if (event.keyCode === ENTER_KEY_CODE) {
        event.preventDefault();

        if(syntaxError()){
            removeStdinLastLine()
        }

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
    window.localStorage.setItem("buffer",$("buffer").value);
    $("stdin").value = "trace=1\n" + $("buffer").value;
});

$("execute").addEventListener("click", () => {

    if ( $("input").value != "" ) {
        $("stdin").value = "trace=1\n" + $("buffer").value + "\n" + $("input").value;
        clearInput();
    } 
    
    run();
});
