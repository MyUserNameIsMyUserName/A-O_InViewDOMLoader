const appPathways = {
  navigationMode: "Default",
  pathways: [
    {
      path: "",
      alt_path: ["/", "/index", "/index.html", "/home", "/landing", "/root_front", "/root"],
      page: "/pages/home",
      pageInfo: {
        page_title: "Homepage Tech Sample - <[-V-]> Slavko V.",
        page_descr: "Many aspects of this is developed from the groundup through and as a hobby, practice and learning.",
        page_keywords: "Slavko V., Vuletic, Vuletic Slavko, Slavko Vuletic, Tech Enthusiast, Developer, Designer, Gamer, Web pathwayr, Custom Web Tech, Modern Demo ",
        logo_base_img: "/assets/img/logo.png",
        logo_alt_img: "https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png",
        page_slogan: "YEAAA VERY NICE"
      }
    },
    {
      path: "/about",
      alt_path: ["/info", "/about_me", "/about-me", "/personal-info", "/personal_info", "/person_info", "/person-info", "/I", "/me", "/who-is-this"],
      page: "/pages/about",
      pageInfo: {
        page_title: "About Me Page Sample - <[-V-]> Slavko V.",
        page_descr: "Many aspects of this is developed from the groundup through and as a hobby, practice and learning.",
        page_keywords: "Slavko V., Vuletic, Vuletic Slavko, Slavko Vuletic, Tech Enthusiast, Developer, Designer, Gamer, Web pathwayr, Custom Web Tech, Modern Demo ",
        logo_base_img: "/assets/img/logo.png",
        logo_alt_img: "https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png",
        page_slogan: "NjaNjaNjaaaNjaa NJa nja nja..... https://www.youtube.com/watch?v=j8zRlLHheb0 "
      }
    },
    {
      path: "/sample",
      alt_path: ["/demo", "/demo_page", "/demo-page", "/sample_page", "/sample-page", "/example", "/example_page", "/example-page" ],
      page: "/pages/about",
      pageInfo: {
        page_title: "SAMPLE/EXAMPLE Page - <[-V-]> Slavko V.",
        page_descr: "SAMPLE/EXAMPLE PageSAMPLE/EXAMPLE PageSAMPLE/EXAMPLE PageSAMPLE/EXAMPLE PageSAMPLE/EXAMPLE PageSAMPLE/EXAMPLE Page",
        page_keywords: "Sample Page, Sample File, Example, Example File, Example Page, Demo, Demo Page, Demo File ",
        logo_base_img: "/assets/img/logo.png",
        logo_alt_img: "https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png",
        page_slogan: "NjaNjaNjaaaNjaa NJa nja nja..... https://www.youtube.com/watch?v=j8zRlLHheb0 "
      }
    },
    {
      path: "/contact",
      alt_path: ["/contact_me", "/contact-me", "/send_msg", "/message_me", "/message-me", "/message", "/make_contact", "/make-contact", "/send_war_pigeon", "/send-war-pigeon", "/run_boy_run", "/run-boy-run" ],
      page: "/pages/contact",
      pageInfo: {
        page_title: "Contact Me Page - <[-V-]> Slavko V.",
        page_descr: "Send a war pigeon...will be more like message in th bottle currently haha.",
        page_keywords: "Slavko V., Vuletic, Vuletic Slavko, Slavko Vuletic, Contact Page, Contact, Contact Me, Send Message, Send Email",
        logo_base_img: "/assets/img/logo.png",
        logo_alt_img: "https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png",
        page_slogan: "Few words don't cost that much..."
      }
    }
  ]
};




let Virgil = {
    config : {

    },
    data: {
        history: []
    },
    paths: {},
    func: {
        
    },
    newPaths(paths){
        this.paths = paths;
        console.log(paths);
    },
    init() {
        this.newPaths(appPathways);
    }
}





Virgil.init();








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
