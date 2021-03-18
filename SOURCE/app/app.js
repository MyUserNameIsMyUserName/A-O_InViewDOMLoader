//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝


function bodyFunction() {
    console.log("bodyFunction();")
    var helper = document.body.innerHTML;
    document.body.innerHTML =  '<div id="app"></div>'+helper;
}

function appFunction() {
    console.log("appFunction();")
    document.getElementById('app').innerHTML = '<h1>Welcome and have fun!</h1>';
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
}

// Usage.
var appItems = [
    {
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

window.addEventListener('ssosl_ready', (e) => {

    console.log('EventListener got:[> ssosl_ready <]');

    try {
        addSSOSLOBJ(appItems);
    } catch (error) {
        console.error(error);
    }

    try {
        initSSOSL();
    } catch (error) {
        console.error(error);
    }
    
    try {
        window.removeEventListener('ssosl_ready',this);
    } catch (error) {
        console.error(error);
    }
});

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
