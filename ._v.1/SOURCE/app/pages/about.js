//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

var app = {
  //	elem: document.getElementById('app'),

}

function bodyFunction() {
  //const t0 = performance.now();
  //console.log("bodyFunction() :@: " + performance.now());

  var el = document.createElement("div");
  el.setAttribute("id", "app");
  document.body.appendChild(el);

  //const t1 = performance.now();
  //console.log("EO_bodyFunction() :@: " + performance.now());
  //console.log(`Call to bodyFunction took ${t1 - t0} milliseconds.`);
}

function appFunction() {
  //const t0 = performance.now();
  //console.log("appFunction() :@: " + performance.now());


  var h = document.createElement("H1");
  var t = document.createTextNode("Welcome and have fun!");
  h.appendChild(t);
  document.getElementById('app').appendChild(h);
  document.getElementById('app').appendChild(h);
  document.getElementById('app').appendChild(h);

  //const t1 = performance.now();
  //console.log("EO_appFunction() :@: " + performance.now());
  //console.log(`Call to appFunction took ${t1 - t0} milliseconds.`);
}

function htmlFunction() {
  console.log("htmlFunction();")
}

function titleFunction() {
  console.log("titleFunction();");
  document.getElementById('app').innerHTML += '<img src="/assets/img/logo.png"></img>';
}

function imgFunction() {
  console.log("imgFunction();")
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.getElementById('app').appendChild(btn);
}

// Usage.
var appItems = [{
    "className": "body",
    "done": false,
    call() {
      bodyFunction();
    }
  },
  {
    "className": "#app",
    "done": false,
    call() {
      appFunction();
    }
  },
  {
    "className": "html",
    "done": false,
    call() {
      htmlFunction();
    }
  },
  {
    "className": "h1",
    "done": false,
    call() {
      titleFunction();
    }
  },
  {
    "className": "img",
    "done": false,
    call() {
      imgFunction();
    }
  }
];

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
