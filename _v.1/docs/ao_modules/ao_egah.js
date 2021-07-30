function console_prnt_to_container(a="null",b,c="log"){const d=document.createElement("p"),e=document.createTextNode(b);d.appendChild(e),d.classList.add(c);const f=document.getElementById(a);f&&(f.appendChild(d),console.clear())}window.onerror=function(a,b,c,d,e){var f=a.toLowerCase();if(-1<f.indexOf("script error"))console.error("Script Error: See Browser Console for Detail");else{var g=["Message: "+a,"URL: "+b,"Line: "+c,"Column: "+d,"Error object: "+JSON.stringify(e)].join(" - ");console_prnt_to_container("egahErrorListDisplay",g,"error")}return console.clear(),!1};function info_console(a){console_prnt_to_container("egahErrorListDisplay",a,"info")}function log_console(a){console_prnt_to_container("egahErrorListDisplay",a)}function warn_console(a){console_prnt_to_container("egahErrorListDisplay",a,"warn")}function error_console(a){console_prnt_to_container("egahErrorListDisplay",a,"error")}window.console.info=info_console,window.console.log=log_console,window.console.warn=warn_console,window.console.error=error_console,console.info=info_console,console.log=log_console,console.warn=warn_console,console.error=error_console,function(){try{var a=console;Object.defineProperty(window,"console",{get:function(){if(a._commandLineAPI)throw"Sorry, for security reasons, the script console is deactivated on netflix.com";return a},set:function(b){a=b}})}catch(a){}}(),document.body.innerHTML+=`<div id="ao_egah_root">
        <div class="page_section">
        <div class="half">
            <img class="logo_H300" src="/assets/img/logo.png" />
            <h1>BUGZ_APP [ A-O_EGAH.js testing space ]</h1>
            <p>Click the following to see the result:</p>
        </div>
        <div class="half">
            <select name="type" id="print_type">
            <option value="info">info</option>
            <option value="log">log</option>
            <option value="warn">warn</option>
            <option value="error">error</option>
            </select>
            <button onclick="iWillErrorOut();">Start Erroring</button>
        </div>
        </div>

        <div class="page_section errorLists">
        <div class="error_list_container demoErrList disabled_elemenet">
            <div class="title">
            <h4>Errors from console.</h4>
            </div>
            <div class="contentList" id="consoleErrorListDisplay"></div>
            <div class="footer">
            <p>
                Number of errors so far:
                <span id="demo_err_numb_display_id"></span>
            </p>
            </div>
        </div>

        <div class="error_list_container egah_error_list">
            <div class="title">
            <h4>Errors EGAH managed to catch.</h4>
            </div>
            <div class="contentList" id="egahErrorListDisplay"></div>
            <div class="footer">
            <p>
                Number of errors so far:
                <span id="demo_err_numb_display_id"></span>
            </p>
            </div>
        </div>

        <div class="error_list_container egah_live_feed soon_to_come_elem">
            <div class="title">
            <h4>Errors live feed from our EGAH socket.io.</h4>
            </div>
            <div class="contentList"></div>
            <div class="footer">
            <p>
                Number of errors so far:
                <span id="demo_err_numb_display_id"></span>
            </p>
            </div>
        </div>
        </div>
    </div>`;