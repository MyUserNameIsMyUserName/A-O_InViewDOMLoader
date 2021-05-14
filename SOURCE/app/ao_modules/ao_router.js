var currentLocation = window.location.pathname.replace("A-O_documentation_maker/", "");

//DEMO ROUTES

var routes = [
    {
        route: "/",
        routeAliases: ["/index", "/index.html"],
        page() {
            loadScript("/pages/home.js");
        }
    },
    {
        route: "/documentation",
        routeAliases: ["/docs", "/app_docs"],
        page() {
            loadScript("/pages/docs.js");
        }
    },
    {
        route: "/contact",
        page() {
            loadScript("/pages/contact.js");
        }
    }
];

function show404page() {
    loadScript("/pages/error_404.js");
}

function findCurrentRoute() {
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
