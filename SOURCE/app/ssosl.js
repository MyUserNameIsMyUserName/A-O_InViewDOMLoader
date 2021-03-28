var testItems = {};
var wnd = window;

function addSSOSLOBJ( newItems = null){
    console.log('FunctionCall >> [ function addSSOSLOBJ(newItems) ]');
    if (newItems !== null){
        testItems = newItems;
    };
};

function initSSOSL(){
    console.log('FunctionCall >> [ function initSSOSL() ]');
    
    try {
        handler();
        wnd.addEventListener("scroll", handler);
    } catch (error) {
        console.error(error);
    }
};

// requestAnimationFrame
var raf =
    wnd.requestAnimationFrame ||
    wnd.webkitRequestAnimationFrame ||
    wnd.mozRequestAnimationFrame ||
    function (callback) {
        wnd.setTimeout(callback, 1000 / 60);
    };

//TESTING USER VIEW
const isInUserView = (el) => {
    console.log('FunctionCall >> [ function isInUserView(el) ] || [ Elem: '+el+' ]');
    const scroll = wnd.scrollY || wnd.pageYOffset;
    var elem = document.querySelector(el);
    if (typeof elem !== "undefined") {
        const boundsTop = ( elem ? elem.getBoundingClientRect().top : 0 ) + scroll;

        const viewport = {
            top: scroll,
            bottom: scroll + wnd.innerHeight,
        };

        const bounds = {
            top: boundsTop,
            bottom: boundsTop + el.clientHeight,
        };

        return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
            || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
    } else {
        return false;
    }
};

//HANDLING CALLBACKS AND MARKING DONE
const handler = () => raf(() => {
    console.log('yea...scrolling')
    var notYetDone = 0;
    if (typeof testItems !== "undefined") {
        if (testItems.length > 0){
            testItems.forEach( (element) => {
                if (!element.done) {
                    if (isInUserView(element.className)) {
                        console.log('Is '+element.className+' visible? YES')
                        element.call();
                        element.done = true;
                    } else {
                        console.log('Is '+element.className+' visible? NO')
                        notYetDone++;
                    }
                }
            });
        }
    }

    if (notYetDone === 0) {
        console.log('Done! Detaching scroll event listener...')
        wnd.removeEventListener("scroll", handler);
    };
});

//Self addig on dom load
document.onreadystatechange = function () {
    switch (document.readyState) {
        case "loading":
            // The document is still loading.;
            break;
        case "interactive":
            // DOMContentLoaded event.
            wnd.dispatchEvent(new Event('ssosl_ready'))
            break;
        case "complete":
            // The document is finished loading.
            break;
    };
    //console.log(document.readyState)
};


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