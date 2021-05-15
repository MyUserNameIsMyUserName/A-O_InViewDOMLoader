var currentLocation = window.location.pathname.replace("A-O_documentation_maker/", "");

//DEMO ROUTES

var routes = [
    {
        route: "/",
        routeAliases: ["/index", "/index.html", "/home", "/landing", "/root_front"],
        page() {
            //loadScript("/ao_modules/conf.home.js", function() { wnd.dispatchEvent(new Event("ssosl_ready")) } );
            loadPage("home", function() { 
                wnd.dispatchEvent(new Event("ssosl_ready")) 
            } );
        }
    },
    {
        route: "/about",
        routeAliases: ["/about_us", "/about-us"],
        page() {
            loadPage("about", function() { 
                wnd.dispatchEvent(new Event("ssosl_ready")) 
            } );
        }
    },
    {
        route: "/contact",
        routeAliases: ["/contact_me", "/contact-me", "/send_msg", "/message_me", "/message-me", "/message", "/make_contact", "/make-contact", "/send_war_pigeon", "/send-war-pigeon", "/run_boy_run", "/run-boy-run" ],
        page() {
            loadPage("contact", function() { 
                wnd.dispatchEvent(new Event("ssosl_ready")) 
            } );
        }
    }
];

function show404page() {
    console.warn("|_! CALL TO >> function show404page() !_|");
    //loadScript("/ao_modules/conf.sys_error_page.js", function() { wnd.dispatchEvent(new Event("ssosl_ready")) } );
    loadPage("syserr", function () {
        wnd.dispatchEvent(new Event("ssosl_ready"));
    });
}

function findCurrentRoute() {

    const development = new URLSearchParams(window.location.search).get("development");

    if (development) {
        console.info("|_!+!_ DEV MODE ON >> " + development + "  >>");
      
        loadScript("/ao_modules/ao_egah.js", function() { wnd.dispatchEvent(new Event("ssosl_ready")) } );
    }

    var pageFound = false;

    for (let i = 0; i < routes.length; i++) {
        if (currentLocation === routes[i].route) {
            routes[i].page();
            pageFound = true;
        }

        if (routes[i].routeAliases !== undefined) {
            for (let j = 0; j < routes[i].routeAliases.length; j++) {
                if (currentLocation === routes[i].routeAliases[j]) {
                    routes[i].page();
                    pageFound = true;
                }
            }
        }

    }

    if (!pageFound) {
        show404page();
    }

    return pageFound;

}
