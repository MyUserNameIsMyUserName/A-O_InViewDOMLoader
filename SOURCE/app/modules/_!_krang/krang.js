//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: krang.js                                                         ║
//║ ↔ Location: <: public_root :>/ krang.js                                       ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝


let Krang = {
  conf: {
    docs: "https://myusernameismyusername.github.io/A-O_InViewDOMLoader/",
    true_origin: "http://localhost:8080",
    loader_el_id: "app_loader_root",
    styles_el_id: "app_styles_root",
    scripts_el_id: "app_scripts_root",
    appr_file_from: ["js", "css", "jpg", "webp", "svg", "json"],
  },

  data: {},

  func: {
    // Script JS loader -> adding it to dom so browser takes the handle of it.
    loadScript(url, onloadFunction) {
      if (url != null) {
        var newScript = document.createElement("script");
        newScript.onerror = loadError;
        if (onloadFunction) {
          newScript.onload = function(){loadScript; return true;};
          newScript.onerror = function(){console.warn("[- KRANG ERROR -> Krang.func.loadScript( url = null) <- URL can not be null )"); console.trace(); return false;};
        }
        pageScripts.appendChild(newScript);
        newScript.src = url;
      } else {
        console.warn("[- KRANG ERROR -> Krang.func.loadScript( url = null) <- URL can not be null )");

      }
    },
    // Style loader -> adding it to dom so browser takes the handle of it.
    loadStyle(url) {
      if (url != null) {
        var newStyle = document.createElement("link");
        newStyle.setAttribute("rel", "stylesheet");
        newStyle.setAttribute("type", "text/css");
        newStyle.setAttribute("href", url);
        pageStyles.appendChild(newStyle);
        return true;
      } else {
        console.warn("[- KRANG ERROR -> Krang.func.loadStype( url = null) <- URL can not be null )" );
        return false;
      }
    },
  },

  LOAD(url = null) {
    if (url != null) {
    } else {
      console.warn(
        "[- KRANG ERROR -> Krang.LOAD( url = null) <- URL can not be null )"
      );
    }
  },

  INIT() {
    console.info("[-i- KRANG INIT() -i-]");
  },
};



const true_origin = "http://localhost:8080";

// Some variables setup
var ao_loader = document.getElementById("loader");
var pageScripts = document.getElementById("app_scripts_container");
var pageStyles = document.getElementById("app_styles_container");

function loadError(oError) {
  throw new URIError(
    "The script " + oError.target.src + " didn't load correctly."
  );
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
