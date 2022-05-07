class file {
  static input = document.getElementById("load-file");
  static textArea = document.getElementById("stdin");

  static load(e) {
    let files = e.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();

    reader.onload = (e) => {
      const file = e.target.result;
      const lines = file.split(/\r\n|\n/);
      document.getElementById("stdin").value = lines.join("\n");
    };

    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
  }

  static save() {
      let file_name = prompt("file name");
      if (file_name != '' && file_name ) {
          file.saveFile(file_name, file.textArea.value);
      }
  }

  static saveFile(fileName, content) {
    try {
      if (typeof content == "undefined") {
        throw "content is undefined";
      }
      if (typeof fileName == "undefined") {
        throw "fileName is undefined";
      }

      content.replace(/\n/g, "\r\n");
      let blob = new Blob([content], { type: "text/plain" });
      let anchor = document.createElement("a");
      anchor.download = fileName;
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target = "_blank";
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      return null;
    } catch (err) {
      return err;
    }
  }
}
