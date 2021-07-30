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
      document.getElementById("app").innerHTML =
        "<h1>ERROR <span class='print_error_number'>404</span> PAGE!</h1>";
    },
  },
  {
    className: "html",
    done: false,
    call() {
      console.log("htmlFunction();");
      document.head.title = "404 page not found - Slavko V. [_/^\\_] ";
      document.head.innerHTML += `<link rel="preload" as="image" href="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png">`;
    },
  },
  {
    className: "h1",
    done: false,
    call() {
      console.log("titleFunction();");
      document.getElementById(
        "app"
      ).innerHTML += `<img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png" alt="app_logo className-h1" width="360" height="360" />`;
      document.getElementById("app").innerHTML +=
        "<h3>ERROR <span class='print_error_number'>404</span> PAGE!</h1>";
      wnd.dispatchEvent(new Event("onpageload"));
    },
  },
  {
    className: "img",
    done: false,
    call() {
      console.log("imgFunction();");
      document.getElementById(
        "app"
      ).innerHTML += `<img src="https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png" alt="app_logo className-img" width="360" height="360" style='transform: rotate3d(2, -1, -1, -0.2turn);'/>`;
      document.getElementById("app").innerHTML +=
        "<h5>ERROR <span class='print_error_number'>404</span> PAGE!</h1>";
    },
  },
];

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
