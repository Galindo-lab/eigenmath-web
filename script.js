


$("run").addEventListener("click", ()=>{
    run()
});

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


$("stdin").addEventListener('keyup',()=> {
    run()
});



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
        
    };
    
    reader.onerror = (e) => alert(e.target.error.name);
    
    reader.readAsText(file);
});
