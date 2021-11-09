function syntaxError() {
    let error = '<span style="color:red;font-family:courier">';
    return $("stdout").innerHTML.includes(error)
}

function removeStdinLastLine() {
    let stdin = $("stdin")
    let value = stdin.value
    let lines = value.split('\n')
    lines.splice(lines.length - 1)
    stdin.value = lines.join('\n')
}


function clearInput() {
    $("input").value = "";
}

function isCommnad() {
    return $("input").value.charAt(0) === ':';
}



$("input").addEventListener("keyup", (event) => {
    let ENTER_KEY_CODE = 13
    
    if (event.keyCode === ENTER_KEY_CODE) {
        event.preventDefault();

        if(syntaxError()){
            removeStdinLastLine()
        }

        if( isCommnad() ) {
            executeCommand($("input").value);
        } else {
            $("stdin").value += "\n" + $("input").value;
            run();
        }

        clearInput();
        
    }
});




$("buffer").addEventListener("change", () => {
    window.localStorage.setItem("buffer",$("buffer").value);
    $("stdin").value = "trace=1\n" + $("buffer").value;
});



$("execute").addEventListener("click", () => {

    let minibuffuer = $("input")
    let stdin = $("stdin")


    if(minibuffuer.value === "") {
        $("stdin").value = "trace=1\n" + $("buffer").value;
        run();        
    } else if(minibuffuer.value != "") {
        if(syntaxError()){
            removeStdinLastLine()
        }

        if( isCommnad() ) {
            executeCommand();
        } else {
            if(stdin.value != "trace=1"){
                $("stdin").value += "\n" + $("input").value;
            } else {
                $("stdin").value = "trace=1\n" + $("buffer").value+"\n" + $("input").value;
            }
            
                
            
            run();
        }

        clearInput();
    }
    
});
