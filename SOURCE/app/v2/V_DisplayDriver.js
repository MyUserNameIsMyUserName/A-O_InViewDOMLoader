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
    page: {},
    styles: []
  },
  set page(page = null) {
    this.pageInputValidate(page);
    this.data.page = page;
    this.loadPage();
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
                var result = V_DomP(element);
                element.render = result.section;
                if (typeof result.do === 'function') {
                  element.do = result.do;
                }
                if (typeof result.onshow === 'function') {
                  element.onshow = result.onshow;
                }
                element.timeOfRender = Date.now();
                helpElem.innerHTML = element.render;
                aoDisplay.maybeLoadStyle(element.type);

                if (typeof element.do === 'function') {
                  element.do();
                }
                if (typeof element.onshow === 'function') {
                  element.onshow();
                }


              } else {
                helpElem.innerHTML = element.render;

              };

              if (typeof element.onshow === "function") {
                console.log("onshow >> : " + element.elemID);
                element.onshow();
              }

              helpElem.style.minHeight = helpElem.clientHeight + "px";
              element.done = true;
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
    this.preload();
    var meta = this.data.page.meta;
    var sections = this.data.page.sections;
    console.log(meta);
    this.doc.title = meta.title;
    var desc = document.createElement("meta");
    desc.setAttribute("content", meta.description);
    desc.setAttribute("name", "description");
    this.doc.head.appendChild(desc);
    var keyW = document.createElement("meta");
    keyW.setAttribute("content", meta.keywords);
    keyW.setAttribute("name", "keywords");
    this.doc.head.appendChild(keyW);
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
  /*set setOnshow(item = null) {
    console.log("<< SETONSHOW >>");
    if (item !== null) {
      this.data.page.sections.forEach(section => {
        console.log(section);
        if (item.uid === section.elemID) {
          console.log("GOOD << >> SETONSHOW");
          section.onshow = item.callback;
        };

      })
    } else {
      console.warn('ERROR:>> CALLBACK IS NOT A FUNCTION')
    }
  },*/
  itemHeight(uid = null) {

    if (uid !== null) {
      console.log(document.getElementById(uid).clientHeight)
      document.getElementById(uid).style.minHeight = document.getElementById(uid).clientHeight + "px";
      return true;
    }
    return false;
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

        var result = V_DomP(section);
        section.render = result.section;
        if (typeof result.do === 'function') {
          section.do = result.do;
        }
        if (typeof result.onshow === 'function') {
          section.onshow = result.onshow;
        }
        section.render = result.section;

        this.maybeLoadStyle(section.type);

        document.getElementById(uid).innerHTML = section.render;

        if (typeof section.do === 'function') {
          section.do();
        }
        if (typeof section.onshow === 'function') {
          section.onshow();
        }
        //console.log("V_DomD >> : " + uid);

        //section.onshow = V_DomD();

        aoDisplay.itemHeight(uid);
        section.done = true;

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
  set styles(style = null) {
    if (style !== null) {
      try {
        this.data.styles.push(style);
      } catch (e) {
        console.log("ERROR:>> " + e.message);
        return false;
      }
      console.log("ADDED STYLE TO ARRAY")
      document.head.innerHTML += style.style;
      return true;
    } else {
      console.warn("ERROR:>> style EMPTY");
    }
  },
  maybeLoadStyle(type) {
    var stylesNumber = this.data.styles.length;
    var shouldLoadStyle = true;
    if (stylesNumber > 0) {
      this.data.styles.forEach((style) => {
        if (style.name === type) {
          shouldLoadStyle = false;
        }
      })
    };

    if ((stylesNumber == 0) || (shouldLoadStyle)) {
      this.styles = { name: type, style: V_DomS(type) };
      console.log("STYLE LOADED :=: " + type);
      return true;
    }

    console.log("NO STYLE LOADED");
    return false;
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