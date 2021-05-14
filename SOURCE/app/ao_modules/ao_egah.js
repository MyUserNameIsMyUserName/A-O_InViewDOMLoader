function console_prnt_to_container(elemId = "null", msg, msgtype = "log") {
  const newLogItem = document.createElement("p");

  // and give it some content
  const newContent = document.createTextNode(msg);

  // add the text node to the newly created div
  newLogItem.appendChild(newContent);
  newLogItem.classList.add(msgtype);
    
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById(elemId);
  if (currentDiv){
    currentDiv.appendChild(newLogItem);

    console.clear();
  }
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1) {
    console.error("Script Error: See Browser Console for Detail");
  } else {
    var message = [
      "Message: " + msg,
      "URL: " + url,
      "Line: " + lineNo,
      "Column: " + columnNo,
      "Error object: " + JSON.stringify(error),
    ].join(" - ");
    console_prnt_to_container("egahErrorListDisplay", message, "error");
  }
  console.clear();
  return false;
};

function info_console(msg) {
  //send msg via AJAX
  console_prnt_to_container("egahErrorListDisplay", msg, "info");
}
function log_console(msg) {
  //send msg via AJAX
  console_prnt_to_container("egahErrorListDisplay", msg);
}
function warn_console(msg) {
  //send msg via AJAX
  console_prnt_to_container("egahErrorListDisplay", msg, "warn");
}
function error_console(msg) {
  //send msg via AJAX
  console_prnt_to_container("egahErrorListDisplay", msg, "error");
}

window.console.info = info_console;
window.console.log = log_console;
window.console.warn = warn_console;
window.console.error = error_console;

console.info = info_console;
console.log = log_console;
console.warn = warn_console;
console.error = error_console;



(function () {
  try {
    var $_console$$ = console;
    Object.defineProperty(window, "console", {
      get: function () {
        if ($_console$$._commandLineAPI)
          throw "Sorry, for security reasons, the script console is deactivated on netflix.com";
        return $_console$$;
      },
      set: function ($val$$) {
        $_console$$ = $val$$;
      },
    });
  } catch ($ignore$$) {}
})();



document.body.innerHTML += `<div id="ao_egah_root">
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