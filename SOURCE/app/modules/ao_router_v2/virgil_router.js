// AppPathways => Application Routes... Available Roads for user to take.
//
const appPathways = {
  navigationMode: "Default",
  pathways: [
    {
      path: "",
      pathAliases: [
        "/",
        "/index",
        "/index.html",
        "/home",
        "/landing",
        "/root_front",
        "/root",
      ],
      page: "/pages/home",
      pageInfo: {
        page_title: "Homepage Tech Sample - <[-V-]> Slavko V.",
        page_descr:
          "Many aspects of this is developed from the groundup through and as a hobby, practice and learning.",
        page_keywords: "Slavko V., Vuletic, Vuletic Slavko, Slavko Vuletic",
        logo_base_img: "/assets/img/logo.png",
        logo_alt_img:
          "https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png",
        page_slogan: "YEAAA VERY NICE",
      },
    },
    {
      path: "/about",
      pathAliases: [
        "/info",
        "/about_me",
        "/about-me",
        "/personal-info",
        "/personal_info",
        "/person_info",
        "/person-info",
        "/I",
        "/me",
        "/who-is-this",
      ],
      page: "/pages/about",
      pageInfo: {
        page_title: "About Me Page Sample - <[-V-]> Slavko V.",
        page_descr:
          "Many aspects of this is developed from the groundup through and as a hobby, practice and learning.",
        page_keywords:
          "Tech Enthusiast, Developer, Designer, Gamer, Web pathways",
        logo_base_img: "/assets/img/logo.png",
        logo_alt_img:
          "https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png",
        page_slogan:
          "NjaNjaNjaaaNjaa NJa nja nja..... https://www.youtube.com/watch?v=j8zRlLHheb0 ",
      },
    },
    {
      path: "/blog",
      pathAliases: [
        "/blog_posts",
        "/blog-posts",
        "/user-blog",
        "/user_blog",
        "/user-posts",
        "/user_posts",
      ],
      page: "/pages/blog",
      pageInfo: {
        page_title: "Blog Posts ROOT - <[-V-]> Slavko V.",
        page_descr:
          "Blog Posts ROOTBlog Posts ROOTBlog Posts ROOTBlog Posts ROOTBlog Posts ROOTBlog Posts ROOTBlog Posts ROOT.",
        page_keywords: "Slavko V., Vuletic, Custom Web Tech, Modern Demo ",
        logo_base_img: "/assets/img/logo.png",
        logo_alt_img:
          "https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png",
        page_slogan:
          "The more you read, the more you wanna try, the more you try the better you become...circle of theory and practice.",
      },
    },
    {
      path: "/contact",
      pathAliases: [
        "/contact_me",
        "/contact-me",
        "/send_msg",
        "/message_me",
        "/message-me",
        "/message",
        "/make_contact",
        "/make-contact",
        "/send_war_pigeon",
        "/send-war-pigeon",
        "/run_boy_run",
        "/run-boy-run",
      ],
      page: "/pages/contact",
      pageInfo: {
        page_title: "Contact Me Page - <[-V-]> Slavko V.",
        page_descr:
          "Send a war pigeon...will be more like message in th bottle currently haha.",
        page_keywords:
          "Contact Page, Contact, Contact Me, Send Message, Send Email",
        logo_base_img: "/assets/img/logo.png",
        logo_alt_img:
          "https://raw.githubusercontent.com/MyUserNameIsMyUserName/A-O_documentation_maker/fukinMASTER/SOURCE/static/assets/img/logo.png",
        page_slogan: "Few words don't cost that much...",
      },
    },
  ],
};

// Virgil Object - Application Routing Tool

let Virgil = {
  config: {
    devMode: false, // Default >> FALSE ... TRUE && DEEP  << available modes.
    origins: ["localhost:7744", "github.com", "youtube.com"],
  },
  data: {
    acceptedOrigin: null,
    currentLocation: null,
    history: [],
  },
  paths: {},
  func: {
    // Check if dev mode is turned on using param "development"
    checkDeveloperMode(url = null) {
      if (url != null) {
        Virgil.config.devMode = new URLSearchParams(url.search).get(
          "development"
        );
        if (Virgil.config.devMode) {
          if (Virgil.config.devMode != "deep") {
            Virgil.config.devMode = true;
          }
          console.info(
            "|_!+!_ DEV MODE ON >> " + Virgil.config.devMode + "  >>"
          );
        }
        return Virgil.config.devMode;
      } else {
        console.warn(
          "|_! CALL TO >> function checkDeveloperMode(url = null) || url can not be empty !_|"
        );
        return false;
      }
    },
    checkValidOrigin() {},
    // Should assign current URL into Virgil.data.currentLocaiton or return false if not possible.
    findCurrentPath() {
      Virgil.data.currentLocation = window.location.pathname
        ? window.location.pathname
        : false;
      if (Virgil.data.currentLocation) {
        return Virgil.data.currentLocation;
      } else {
        return false;
      }
    },
    // Go to page...
    leadToPage(pageUrl = Virgil.data.currentLocation) {
        
      let pathways = appPathways.pathways;
      // <pageFound> is only a helper for detection of page being found.
      var pageFound = false;
      // Looping through all the paths
      for (let i = 0; i < pathways.length; i++) {
        // Checking paths
        if (pageUrl === pathways[i].path) {
          pathways[i].page();
          pageFound = true;
        }
        // Checking pathAliases
        if (pathways[i].pathAliases !== undefined) {
          for (let j = 0; j < pathways[i].pathAliases.length; j++) {
            if (pageUrl === pathways[i].pathAliases[j]) {
              pathways[i].page();
              pageFound = true;
            }
          }
        }
      }
      // If page not found show 404 and return false...
      if (!pageFound) {
        this.show404ErrorPage();
        return false;
      }
      // If page found return it.
      return pageFound;
    },
    findAndNavigate() {
      this.leadToPage(this.findCurrentPath());
    },
    // SOME SOME ERROR PAGE USING NUMBER
    showErrorPage(errorNumber = null) {
      if (errorNumber != null) {
        switch (errorNumber) {
          case 400:
            this.show400ErrorPage();
            break;

          case 404:
            this.show404ErrorPage();
            break;

          default:
            this.showUnknownErrorPage();
            break;
        }
      } else {
        console.warn(
          "|_! CALL TO >> function showErrorPage(errorNumb) :: errorNumber can not be empty !_|"
        );
      }
    },
    // POSSIBLE ERRORS TO PRINT //
    // 400 Error
    show400ErrorPage() {
      console.warn("|_! NAVIGATING TO >> function show400ErrorPage() !_|");
      //loadPage("system_error");
    },
    // 404 Error
    show404ErrorPage() {
      console.warn("|_! NAVIGATING TO >> function show404ErrorPage() !_|");
      //loadPage("system_error");
    },
    // SYS Unknown Error
    showUnknownErrorPage() {
      console.warn("|_! NAVIGATING TO >> function showUnknownErrorPage() !_|");
      //loadPage("system_error");
    },
  },
  newPaths(paths = null) {
    if (paths != null) {
      this.paths = paths;
      console.log(paths);
      return paths;
    } else {
      console.warn(
        "|_! CALL TO >> function newPaths(paths) >> paths can not be empty !_|"
      );
    }
  },
  // Check DEV MODE
  checkDeveloperMode(url = null) {
    console.info(
      "|_ START >> function VIRGIL.checkDeveloperMode(url = " + url + ") _|"
    );
    if (url == null) {
      url = window.location;
    }
    return this.func.checkDeveloperMode(url);
  },
  // INITIATE VIRGIL ROUTING
  init(appPathways) {
    console.info("|_ START >> function VIRGIL.init() _|");
    this.checkDeveloperMode();
    this.newPaths(appPathways);
    this.func.leadToPage(this.func.findCurrentPath());
    console.info("|_ END >> function VIRGIL.init() _|");
  },
};

function openCurrentRoute() {
  console.log("PUBLIC FUNCTION openCurrentRoute()");
  Virgil.func.findAndNavigate();
}
// console.log('PUBLIC CALL TO VIRGIL.INIT()')
// Virgil.init();
