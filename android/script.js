
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

$("input").addEventListener("keyup", (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
        event.preventDefault();

        if(syntaxError()){ removeStdinLastLine() }
        
        $("stdin").value += "\n" + $("input").value;
        clearInput();
        run();
    }
});


$("input").addEventListener("focus", (event) => {
    $("buffer").style.display = "none";
});

$("input").addEventListener("blur", (event) => {
    $("buffer").style.display = "block";
});

// $("buffer").addEventListener("focus", (event) => {
//     $("buffer").style.height = "300px";
// });

// $("buffer").addEventListener("blur", (event) => {
//     $("buffer").style.height = "100%";
// });



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
