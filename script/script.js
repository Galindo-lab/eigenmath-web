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

function evalBuffer() {
    $("stdin").value = [
        "trace=1",
        $("buffer").value,
    ].join("\n");

    run();
}

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
    let stdin = $("stdin");

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
