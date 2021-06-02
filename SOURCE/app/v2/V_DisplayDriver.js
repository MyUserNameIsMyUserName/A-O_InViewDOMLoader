// requestAnimationFrame
var raf =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };


// AO_DD <=> AO_DisplayDriver => aoDisplay |:|
const AO_DD = {
  doc: "",
  config: {
    mode: "hiding",
    debug: true
  },
  data: {
    page: {}
  },
  set page(page = null) {
    this.pageInputValidate(page);
    this.data.page = page;
    console.log(this);
    this.initPrint();
  },
  addSSOSLOBJ(newItems = null) {
    this.page = newItems;
  },
  pageInputValidate(page) {
    if (page === null) {
      console.warn("Error: Empty Input Value.");
    } else {
      console.warn("Success: New Page Valid.");
      return true;
    }
  },
  listenForEvents() {
    //Self addig on dom load
    document.onreadystatechange = function() {
      switch (document.readyState) {
        case "loading":
          // The document is still loading.;
          break;
        case "interactive":
          // DOMContentLoaded event.
          window.dispatchEvent(new Event('ssosl_ready'))
          break;
        case "complete":
          // The document is finished loading.
          break;
      };
      //console.log(document.readyState)
    };

    window.addEventListener('ssosl_ready', (e) => {
      console.log('EventListener got:[> ssosl_ready <]');

      if (typeof current_page_vdd !== "undefined") {
        try {
          aoDisplay.addSSOSLOBJ(current_page_vdd);
        } catch (error) {
          console.error(error);
        }
      }

      try {
        aoDisplay.init();
      } catch (error) {
        console.error(error);
      }

      try {
        window.removeEventListener('ssosl_ready', this);
      } catch (error) {
        console.error(error);
      }
    });
  },
  looper() {
    //console.log('yea...scrolling')
    //this.init();
    var notYetDone = 0;
    var testItems = aoDisplay.data.page.sections;
    //console.log(testItems)
    if (typeof testItems !== "undefined") {
      if (testItems.length > 0) {
        testItems.forEach((element) => {
          var helpElem = document.getElementById(element.elemID);
          if (aoDisplay.isInUserView('#' + element.elemID)) {
            if (!element.done) {
              //console.log('Is ' + element.elemID + ' visible? YES')
              //element.call();
              if ((typeof element.render === 'undefined') || (element.lastUpdate > element.timeOfRender)) {
                element.render = V_DomP(element);
                element.timeOfRender = Date.now();
                helpElem.innerHTML = element.render;
                helpElem.style.minHeight = helpElem.clientHeight + "px";
                element.done = true;
              } else {
                helpElem.innerHTML = element.render;
                element.done = true;
              }
            }
          } else {
            element.done = false;
            helpElem.innerHTML = "";
            //console.log('Is ' + element.elemID + ' visible? NO')
            notYetDone++;
          }
        });
      }
    }

    if (notYetDone === 0) {
      console.log('Done! Detaching scroll event listener...')
      this.wnd.removeEventListener("scroll", this.handler);
    };
  },
  // requestAnimationFrame
  handler() {
    //console.log(this.raf);
    raf(aoDisplay.looper);
  },
  loadPage() {
    this.canPrintPage();
    var meta = this.data.page.meta;
    var sections = this.data.page.sections;
    console.log(meta);
    this.doc.title = meta.title;
  },
  isInUserView(el) {
    //console.log('FunctionCall >> [ function isInUserView(el) ] || [ Elem: ' + el + ' ]');
    const scroll = this.wnd.scrollY || this.wnd.pageYOffset;
    var elem = document.querySelector(el);
    if (typeof elem !== "undefined") {
      const boundsTop = (elem ? elem.getBoundingClientRect().top : 0) + scroll;

      const viewport = {
        top: scroll,
        bottom: scroll + this.wnd.innerHeight,
      };

      const bounds = {
        top: boundsTop,
        bottom: boundsTop + elem.clientHeight,
      };


      return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
    } else {
      return false;
    }
  },
  preload() {
    console.log('FunctionCall >> [ function preload() ]');
  },
  canPrintPage() {
    if ((this.wnd) && (this.doc)) {
      return true;
    } else {
      this.init();
    }
  },
  initPrint() {
    var stopPrint = false;
    this.data.page.sections.forEach(section => {
      console.log(performance.now());

      var helpVal = (performance.now() * (1000000000));
      var helpVal2 = helpVal - Math.trunc(helpVal);
      helpVal2 = ((Math.trunc(helpVal2 * (100000)) == 0) ? Math.trunc(helpVal) : (Math.trunc(helpVal2 * (100000))))

      var uid = 'UID_' + helpVal2;
      var foundUniqueID = false;

      while (!foundUniqueID) {
        var elemTest = document.getElementById(uid);
        if (elemTest) {
          helpVal2++;
          uid = 'UID_' + helpVal2;
        } else {
          foundUniqueID = true;
        }
      }

      this.doc.body.innerHTML += `<div id="${uid}" class="page_section ${section.type}"></div>`;

      section.elemID = uid;
      section.lastUpdate = Date.now();
      section.timeOfRender = 0;

      if (stopPrint === false) {

        section.render = V_DomP(section);
        document.getElementById(uid).innerHTML = section.render;

        console.log(document.getElementById(uid).clientHeight)

        document.getElementById(uid).style.minHeight = document.getElementById(uid).clientHeight + "px";
        section.timeOfRender = Date.now();
        console.log(section.render);
        console.log("EEEE #" + uid)
        if (!aoDisplay.isInUserView("#" + uid)) {
          stopPrint = true;
          console.log("stopPrint = TRUE")
        }
      }
    })
  },
  init(page = null) {
    console.log('FunctionCall >> [ function initSSOSL() ]');
    try {
      this.wnd = window;
      this.doc = document;

      // requestAnimationFrame
      //this.raf = this.wnd.requestAnimationFrame || this.wnd.webkitRequestAnimationFrame || this.wnd.mozRequestAnimationFrame || function(callback) { this.wnd.setTimeout(callback, 1000 / 60); };

      //this.handler();
      this.listenForEvents();
      this.wnd.addEventListener("load", aoDisplay.handler);
      this.wnd.addEventListener("scroll", aoDisplay.handler);
    } catch (error) {
      console.error(error);
    }
  }
}

let aoDisplay = AO_DD;

aoDisplay.init();