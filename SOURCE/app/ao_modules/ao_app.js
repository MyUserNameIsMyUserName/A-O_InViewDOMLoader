//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

// Application Location checker...if appropriate; 

let Application_Driver = {
  config: {
    devMode: {
      status: false,
      return() {
        return this.status;
      },
      make(val = false) {
        this.status = val;
      },
    },
    location: {
      local: "http://localhost:7744",
      tunnel_url: "https://c4457c1e7189.ngrok.io",
      git_docs_url: "https://myusernameismyusername.github.io/A-O_InViewDOMLoader/",
      current_origin: null,
    },
    elems: {
      ao_loader: "",
      pageScripts: "",
      pageStyles: "",
    },
  },
  // APP functions...
  func: {
    // Trow and URI error
    loadError(oError) {
      throw new URIError(
        "The script " + oError.target.src + " didn't load correctly."
      );
    },

    loadScript(url, onloadFunction) {
      var newScript = document.createElement("script");
      newScript.onerror = this.loadError;
      if (onloadFunction) {
        newScript.onload = onloadFunction;
      }
      Application_Driver.config.elems.pageScripts.appendChild(newScript);
      newScript.src = url;
    },

    loadPage(name = null, onloadFunction) {
      Application_Driver.func.startLoading();
      loadScript("/pages/" + name + ".js", onloadFunction);
    },

    loadStyle(url) {
      var shouldAddNew = true;
      var styles = document.querySelectorAll("link");
      styles.forEach((styleElem) => {
        console.log(styleElem.getAttribute("href"));
        if (url == styleElem.getAttribute("href")) {
          console.log("Skipping new style : " + url + " ; Already present!");
          shouldAddNew = false;
        }
      });

      if (shouldAddNew) {
        console.log("Adding new style :" + url);
        var newStyle = document.createElement("link");
        newStyle.setAttribute("rel", "stylesheet");
        newStyle.setAttribute("type", "text/css");
        newStyle.setAttribute("href", url);
        Application_Driver.config.elems.pageStyles.appendChild(newStyle);
      }
    },

    finishLoading() {
      console.info("finishLoading()");
      let result = setTimeout(() => {
        document.body.classList.add("loaded");
        clearTimeout(this);
      }, 2500);
    },

    startLoading() {
      console.info("startLoading()");
      if (document.getElementById("app")) {
        document.getElementById("app").remove();
      }
      document.body.classList.remove("loaded");
    },

    originCheck() {
      console.info("ORIGIN IS: " + window.location.origin);

      switch (window.location.origin) {
        case Application_Driver.config.location.local:
          console.info(
            "Application_Driver.config.location.local << CONFIRMED ORIGIN TO :: " +
              Application_Driver.config.location.local
          );
          Application_Driver.config.location.current_origin =
            Application_Driver.config.location.local;
          break;

        case Application_Driver.config.location.git_docs_url:
          console.info(
            "Application_Driver.config.location.git_docs_url << CONFIRMED ORIGIN TO :: " +
              Application_Driver.config.location.git_docs_url
          );
          Application_Driver.config.location.current_origin =
            Application_Driver.config.location.git_docs_url;
          break;

        case Application_Driver.config.location.tunnel_url:
          console.info(
            "Application_Driver.config.location.tunnel_url << CONFIRMED ORIGIN TO :: " +
              Application_Driver.config.location.tunnel_url
          );
          Application_Driver.config.location.current_origin =
            Application_Driver.config.location.tunnel_url;
          break;

        default:
          console.warn("Origin not cool. Mkey? ");
          window.location.replace(true_origin);
          return false;
          break;

          return true;
      }
    },

    loadReq() {
      //this.loadScript("/modules/ao_router_v2/appRoutes.virgil.js");
      this.loadScript("/modules/ao_router_v2/virgil_router.js", function () { Virgil.init(); });
      /*this.loadScript("/modules/ao_router/ao_router.js", function () {
        findCurrentRoute();
        //Application_Driver.func.finishLoading();
      });*/

      this.loadStyle("/assets/css/modal.css");
      this.loadStyle("/assets/css/demo.css");

      this.loadScript("/ao_modules/ao_ssosl.js");
      this.loadScript("/ao_modules/ao_modal.js", function () {
        /* testModalFunc(); */
      });
    },
  },

  // On Window Load trigger basically
  onload() {
    console.log("[ ApplicationLocations.onload() ]");
    this.func.originCheck();
    this.func.loadReq();
  },

  init() {
    // Just log to confirm location!
    console.log("[ ApplicationLocations.init() ]");
    // Some variables setup
    this.config.elems.ao_loader = document.getElementById("loader");
    this.config.elems.pageScripts = document.getElementById(
      "app_scripts_container"
    );
    this.config.elems.pageStyles = document.getElementById(
      "app_styles_container"
    );
    // Adding even listener for an onload...to trigger onload even in app.
    window.onload = this.onload();

    window.addEventListener("onpageload", (e) => {
      console.log("EventListener got:[> onpageload <]");
      Application_Driver.func.finishLoading();
    });
  },

  devMode(type = null) {
    if (type != null) {
      if (type == "base" || type == "deep") {
        this.config.devMode = type;
      } else {
        this.config.devMode = true;
      }
    } else {
      this.config.devMode = true;
      return true;
    }
    return false;
  },
};

let app = Application_Driver;
let loadPage = app.func.loadPage;
let loadScript = app.func.loadScript;
let loadStyle = app.func.loadStyle;

app.init();


//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
