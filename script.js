
// https://stackoverflow.com/questions/21479107/saving-html5-textarea-contents-to-file

function getText() {
    return document.getElementById("stdin").value;
}

function getName(){
    return document.getElementById("file-name").value;
}

function download(){
    var text = getText();
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = getName(); //"my-filename.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

document.getElementById('myFile').addEventListener('change', function() {
    var fr = new FileReader();
    fr.onload=function(){
        document.getElementById('stdin').textContent=fr.result;
    }
        
    fr.readAsText(this.files[0]);
})
