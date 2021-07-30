//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

// Usage.
var appItems = [
  {
    className: "body",
    done: false,
    call() {
      console.log("bodyFunction();");
      var helper = document.body.innerHTML;
      document.body.innerHTML = '<div id="app"></div>' + helper;
    },
  },
  {
    className: "#app",
    done: false,
    call() {
      console.log("appFunction();");
      document.getElementById("app").innerHTML = "<h1>DOCUMENTATION!</h1>";
    },
  },
  {
    className: "html",
    done: false,
    call() {
      console.log("htmlFunction();");
      document.head.innerHTML += '<link rel="preload" as="image" href="/assets/img/logo.png">';
      document.head.innerHTML += '<link rel="preload" as="image" href="/assets/img/logo.webp">';
    },
  },
  {
    className: "h1",
    done: false,
    call() {
      console.log("titleFunction();");
      document.getElementById("app").innerHTML +=  `<picture width="360" height="360" >
                                                        <source type="image/webp" srcset="/assets/img/logo.webp">
                                                        <source type="image/png" srcset="/assets/img/logo.png">
                                                        <img src="/assets/img/logo.png" alt="app_logo">
                                                    </picture>`;
    },
  },
  {
    className: "img",
    done: false,
    call() {
      console.log("imgFunction();");
    },
  },
];



//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
