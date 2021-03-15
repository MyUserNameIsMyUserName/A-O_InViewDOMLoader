const isInUserView = el => {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    }

    const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
        || (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
}

function footerFunction() {
    console.log('FooterFunction();')
}

function aboutFunction() {
    console.log('aboutFunction();')
}

function heroFunction() {
    console.log('heroFunction();')
}

function newConsultationFunction() {
    console.log('newConsultationFunction();')
}

function testimonialsFunction() {
    console.log('testimonialsFunction()')
}
// Usage.

var testItems = [
    {
        'className': '.desktop-footer',
        'done': false,
        call() { footerFunction() }
    },
    {
        'className': '.about-us',
        'done': false,
        call() { aboutFunction() }
    },
    {
        'className': '.lp-header-overlay',
        'done': false,
        call() { heroFunction() }
    },
    {
        'className': '.new_consultation ',
        'done': false,
        call() { newConsultationFunction() }
    },
    {
        'className': '.testimonials ',
        'done': false,
        call() { testimonialsFunction() }
    }
]

const handler = () => raf(() => {
    //console.log('yea...scrolling');
    var notYetDone = 0
    testItems.forEach(element => {
        if (!element.done) {
            if (isInUserView(document.querySelector(element.className))) {
                //console.log('Is '+element.className+' visible? YES');
                element.call()
                element.done = true
            } else {
                //console.log('Is '+element.className+' visible? NO')
                notYetDone++
            };
        }
    })
    if (notYetDone == 0) {
        //console.log('Done! Detaching scroll event listener...')
        window.removeEventListener('scroll', handler)
    };
})


// requestAnimationFrame
var raf =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }

////END SCROLLER

// Alternative to load event
document.onreadystatechange = function () {
    switch (document.readyState) {
        case "loading":
            // The document is still loading.
            break
        case "interactive":
            // DOMContentLoaded event.
            handler()
            window.addEventListener('scroll', handler)
            break
        case "complete":
            // The document is finished loading.
            break
    }
    console.log(document.readyState)
}