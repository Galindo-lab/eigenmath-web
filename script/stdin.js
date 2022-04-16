class stdin {
  static textArea = document.getElementById("stdin");

  // insertar carater en stdin
  static insert(textToInsert) {
    stdin.insertAtCursor(stdin.textArea, textToInsert);
  }

  // insertar caracter en una seccion de un input o textarea
  // https://kubyshkin.name/posts/insert-text-into-textarea-at-cursor-position/
  static insertAtCursor(input, textToInsert) {
    input.focus();
    document.execCommand("insertText", false, textToInsert);
  }

    // guarda el contenido del buffer en el localstorage, para que no se borre al salir de la aplicacion
  static save() {
    window.localStorage.setItem("stdin", stdin.textArea.value);
  }

    // recarga el contenido del buffer
    static reload() {
        stdin.textArea.value = window.localStorage.getItem("stdin");
    }
}
