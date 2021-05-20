var actElem = document.getElementById("router_activity");

function printActivityItem(msg = null, type = "") {
  if (msg != null) {
    actElem.innerHTML += "<p class="+type+">" + msg + "</p>";
  } else {
    actElem.innerHTML +=
      '<p class="printError">ERROR: printActivityItem(msg) >> MSG can not be empty value</p>';
  }
}

window.onload = function () {
  printActivityItem("TESTING PAGE -> VIRGIL.INIT() CALL TO START IT", "info");
  Virgil.init();
};
