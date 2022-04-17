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
}
