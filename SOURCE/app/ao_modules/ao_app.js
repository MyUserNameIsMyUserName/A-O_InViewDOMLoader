//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

const true_origin = "http://localhost:8888";

// Some variables setup
var ao_loader = document.getElementById("loader");
var pageScripts = document.getElementById("app_scripts_container");
var pageStyles = document.getElementById("app_styles_container");

function loadError(oError) {
  throw new URIError(
    "The script " + oError.target.src + " didn't load correctly."
  );
}

function loadScript(url, onloadFunction) {
  var newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  pageScripts.appendChild(newScript);
  newScript.src = url;
}

function loadStyle(url) {
  var newStyle = document.createElement("link");
  newStyle.setAttribute("rel", "stylesheet");
  newStyle.setAttribute("type", "text/css");
  newStyle.setAttribute("href", url);
  pageStyles.appendChild(newStyle);
}

function finishLoading() {
  document.body.classList.add("loaded");
}

function startLoading() {
  document.body.classList.remove("loaded");
}

window.onload = function () {
  if (true_origin !== window.location.origin) {
    console.log("Origin not cool. Mkey? ");
    window.location.replace(true_origin);
  }

  loadScript("/assets/scripts/ao_modal.js", function () {
    /* testModalFunc(); */
  });
  loadScript("/assets/scripts/ao_router.js", function () {
    findCurrentRoute();
  });

  loadStyle("/assets/styles/app.css");
  loadStyle("/assets/styles/modal.css");
};

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
