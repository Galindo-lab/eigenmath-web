


$("run").addEventListener("click", ()=>{
    run()
});

//https://stackoverflow.com/questions/34082002/html-button-opening-link-in-new-tab
$("manual").addEventListener("click", ()=>{
    window.open('https://georgeweigt.github.io/eigenmath.pdf','_blank')
});

$("reference").addEventListener("click", ()=>{
    window.open('https://georgeweigt.github.io/help.html','_blank')
});

$("clear").addEventListener("click", ()=>{
    document.getElementById("stdout").innerHTML = "";
});

$("save").addEventListener("click", ()=>{

    if( $("file-name").value !== "" && $("stdin").value !== "" ){
        saveFile($("file-name").value, $("stdin").value);
      
    } else {
        alert("space name is empty");
    }
    
});

$("load").addEventListener("click", ()=>{
    document.getElementById('file').click();
});


// $("stdin").addEventListener('keyup',()=> {
//     run()
// });



let input = document.getElementById('file');
let textarea = document.querySelector('textarea')

// This event listener has been implemented to identify a
// Change in the input section of the html code
// It will be triggered when a file is chosen.
input.addEventListener('change', () => {
    let files = input.files;
    
    if (files.length == 0) return;
    
    const file = files[0];

    // document.getElementById("file").files[0].name
    
    let reader = new FileReader();
    
    reader.onload = (e) => {
        const file = e.target.result;
        document.getElementById("file-name").value = files[0].name;
        
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
        run()
    };
    
    reader.onerror = (e) => alert(e.target.error.name);
    
    reader.readAsText(file);
});


// LZW-compress a string
function lzw_encode(s) {
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict[phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
            dict[phrase + currChar] = code;
            code++;
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}

// Decompress an LZW-encoded string
function lzw_decode(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
           phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
    }
    return out.join("");
}
