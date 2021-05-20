var routes = [
    {
        route: "/",
        routeAliases: ["/index", "/index.html", "/home", "/landing", "/root_front"],
        page() {
            loadPage("home", function() { wnd.dispatchEvent(new Event("ssosl_ready")) } );
        }
    },
    {
        route: "/about",
        routeAliases: ["/about_us", "/about-us"],
        page() {
            loadPage("about", function() { wnd.dispatchEvent(new Event("ssosl_ready")) } );
        }
    },
    {
        route: "/contact",
        routeAliases: ["/contact_me", "/contact-me", "/send_msg", "/message_me", "/message-me", "/message", "/make_contact", "/make-contact", "/send_war_pigeon", "/send-war-pigeon", "/run_boy_run", "/run-boy-run" ],
        page() {
            loadPage("contact", function() { wnd.dispatchEvent(new Event("ssosl_ready")) } );
        }
    }
];





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
