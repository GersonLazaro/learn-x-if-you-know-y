/**
 * Aprende X si sabes Y
 * @author Gerson Lázaro <http://www.gersonlazaro.com>
 * @licence MIT
 */
var config;
var langs = new Array();
var instructions = new Array();

var selectX;
var selectY;

/**
 * Inicializa los menus de selección usados en el sitio
 */
function init () {
  selectX = document.getElementById("selectX");
  selectY = document.getElementById("selectY");
}

/**
 * Carga el archivo de configuración en el sitio
 */
function loadConfig () {
  var request = new window.XMLHttpRequest();
  request.open('GET', 'config.json', true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      config = JSON.parse(request.responseText);
      activateSite();
    } else {
      // TODO: Manejar error devuelto por el servidor
    }
  };

  request.onerror = function() {
    // TODO: Manejar error en la peticion
  };
  request.send();
}

/**
 * Agrega una opción al menú de selección
 * @param {*} letter - Letra del menú de selección (X o Y)
 * @param {*} value - Valor a añadir al menú
 */
function addSelectOption (letter, value) {
  var select = document.getElementById("select" + letter);
  var option = document.createElement("option");
  option.text = value;
  option.id = value;
  select.add(option);
}

/**
 * Carga los lenguajes en el sitio y lo dej activo
 */
function activateSite () {
  langs = config.languages;
  instructions = config.instructions;
  for(var i = 0; i < langs.length; i++) {
    addSelectOption('X', langs[i]);
    addSelectOption('Y', langs[i]);
  }
}

/**
 * Verifica si una instrucción está disponible en los lenguajes actualmente establecidos
 * @param {*} languagesAvailable - Lista de lenguajes en los cuales está disponible la instrucción
 */
function instructionFoundInLanguages (languagesAvailable) {
  var found = 0;
  for(var i = 0; i < languagesAvailable.length; i++) {
    if (languagesAvailable[i] === langs[selectX.selectedIndex - 1]) found++;
    if (languagesAvailable[i] === langs[selectY.selectedIndex - 1]) found++;
  }
  if(found == 2) return true;
  return false;
}

/**
 * Obtiene un ejemplo de código para insertarlo en la página
 * @param {*} filename - Nombre del ejemplo
 * @param {*} lang - Lenguaje del ejemplo
 * @param {*} node - Objeto DOM en el cual se insertará el elemento
 */
function getExample (filename, lang, node) {
  var title = document.createElement("h5");
  var pre = document.createElement("pre");
  var code = document.createElement("code");
  title.textContent = lang;
  pre.appendChild(code);
  node.appendChild(title);
  node.appendChild(pre);
  var request = new window.XMLHttpRequest();
  request.open('GET', "langs/" + lang + "/" + filename, true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Configuración leída exitosamente
      // Syntax highlighting with better support for more languages
      // Refer to Highlight.js docs for language aliases
      let langAlias = lang.toLowerCase();
      langAlias = langAlias.replaceAll(' ', '');
      langAlias = langAlias.replaceAll('+', 'p'); // for C++
      pre.innerHTML = hljs.highlight(
        request.responseText, {language: langAlias}
      ).value;
    } else {
      // TODO: Manejar error devuelto por el servidor
    }
  };
  request.send();
}

/**
 * Genera una comparación entre dos lenguajes
 */
function generateComparison () {
  document.getElementById("comparison").remove();
  var comparison = document.createElement("div");
  comparison.id = "comparison";
  document.getElementById("container").appendChild(comparison);
  for(var i = 0; i < instructions.length; i++) {
    if(instructionFoundInLanguages(instructions[i].languages)) {
      var instruction = document.createElement("div");
      var title = document.createElement("h3");
      title.textContent = instructions[i].name;
      var description = document.createElement("p");
      description.textContent = instructions[i].description;
      instruction.appendChild(title);
      instruction.appendChild(description);
      var canvas = document.createElement("div");
      canvas.className = "row";
      var left = document.createElement("div");
      left.className = "col-md-6 code";
      var right = document.createElement("div");
      right.className = "col-md-6 code";
      var hr = document.createElement("hr");
      instruction.appendChild(canvas);
      instruction.appendChild(hr);
      canvas.appendChild(left);
      canvas.appendChild(right);
      getExample(instructions[i].filename, langs[selectX.selectedIndex - 1], left);
      getExample(instructions[i].filename, langs[selectY.selectedIndex - 1], right);
      comparison.appendChild(instruction);
    }
  }
}

/**
 * Cambia el texto de X y Y por los lenguajes elegidos
 * @param {*} letter - Letra del lenguaje a cambiar
 */
function changeText (letter) {
  var index = document.getElementById("select" + letter).selectedIndex - 1;
  var text = document.getElementById("text" + letter);
  if (index < 0) {
    text.textContent = letter;
  } else {
    text.textContent = langs[index];
  }
}

/**
 * Revisa si los dos lenguajes son validos. Si lo son, activa el botón
 */
function validateButton () {
  var btn = document.getElementById("learnButton");
  if(selectX.selectedIndex > 0 && selectY.selectedIndex > 0) btn.disabled = false;
  else btn.disabled = true;
}


// Inicialización y configuración
init();
loadConfig();
document.getElementById("learnButton").addEventListener("click", generateComparison);
document.getElementById("selectX").addEventListener("change", function () {changeText('X');validateButton();});
document.getElementById("selectY").addEventListener("change", function () {changeText('Y');validateButton();});
