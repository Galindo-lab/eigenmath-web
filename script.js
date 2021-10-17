
let button_run = document.getElementById("run");
let button_clear = document.getElementById("clear");
let button_save = document.getElementById("save");
let button_load = document.getElementById("load");
// let file_name = document.getElementById("file-name");
let button_manual = document.getElementById("manual");

let stdin = document.getElementById("stdin");
let stdout_ = document.getElementById("stdout");

let file_name = document.getElementById("file-name");


button_run.addEventListener("click", ()=>{
    run()
});

button_manual.addEventListener("click", ()=>{
    window.open('https://georgeweigt.github.io/eigenmath.pdf','_blank')
});

button_clear.addEventListener("click", ()=>{
    document.getElementById("stdout").innerHTML = "";
});

button_save.addEventListener("click", ()=>{

    if( file_name.value !== ""){
        var text = stdin.value;
        text = text.replace(/\n/g, "\r\n");
        var blob = new Blob([text], { type: "text/plain"});
        var anchor = document.createElement("a");
        anchor.download = document.getElementById("file-name").value;
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target ="_blank";
        anchor.style.display = "none"; 
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    } else {
        alert("space name is empty");
    }
    
    
});

button_load.addEventListener("click", ()=>{
    document.getElementById('file').click();
});




// |let input = document.querySelector('input');
let input = document.getElementById('file');

let textarea = document.querySelector('textarea')

// This event listener has been implemented to identify a
// Change in the input section of the html code
// It will be triggered when a file is chosen.
input.addEventListener('change', () => {
    let files = input.files;
    
    if (files.length == 0) return;
    
    /* If any further modifications have to be made on the
       Extracted text. The text can be accessed using the 
       file variable. But since this is const, it is a read 
       only variable, hence immutable. To make any changes, 
       changing const to var, here and In the reader.onload 
       function would be advisible */
    const file = files[0];
    
    let reader = new FileReader();
    
    reader.onload = (e) => {
        const file = e.target.result;
        
        // This is a regular expression to identify carriage 
        // Returns and line breaks
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
        
    };
    
    reader.onerror = (e) => alert(e.target.error.name);
    
    reader.readAsText(file);
});
