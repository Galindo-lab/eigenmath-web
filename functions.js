// una forma bastante "hacky" de hacer las cosas, pero funciona lo
// suficientemente bien
function saveFile(fileName, content)
{
    try {
        if(typeof content == 'undefined')  { throw "content is undefined"  }
        if(typeof fileName == 'undefined') { throw "fileName is undefined" }

        content.replace(/\n/g, "\r\n")
        let blob = new Blob([content], {type:"text/plain"});
        let anchor = document.createElement("a");
        anchor.download = fileName;
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target ="_blank";
        anchor.style.display = "none"; 
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);

        return null
    } catch(err) {
        return err
    }
}
