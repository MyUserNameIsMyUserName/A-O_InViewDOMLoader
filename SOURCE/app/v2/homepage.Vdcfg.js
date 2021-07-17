//╔═══════════════════════════════════════════════════════════════════════════════╗
//║ ♠ File Name: app.js                                                           ║
//║ ↔ Location: <: public_root :>/ app.js                                         ║
//║ Σ Description:                                                                ║
//║     → In case this lives more than few days, better have something prepared   ║
//╟       than few days, better have something prepared have as   ╔═══════════════╣
//║       than few days, better have something prepared.          ║ √ 23.01.2021. ║
//╚═══════════════════════════════════════════════════════════════╩═══════════════╝

const page_home = {
  meta: {
    title: "homepage",
    description: "Some demo page description",
    keywords: "Some Random Words, Other Keyword, More And More",
    pre: {
      connect: ["https://www.google.com"],
      scripts: ["glideJS", "bootstrapJS"],
      styles: ["glideJS", "bootstrapJS"]
    }
  },
  type: "boxed",
  style: {
    background: "darkgreen",
    color: "#d0d0d0"
  },
  sections: [{
      type: "hero_main",
      data: {
        title: "Hello and welcome!",
        subtitle: "11111111111Space holder for subtitle....",
        button: {
          text: "Join Today!",
          do: "testCallbackFunction()"
        },
        image: {
          width: 300,
          height: 400,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "color",
          url: "#152030"
        }
      }
    },
    {
      type: "hero_main",
      data: {
        title: "SECOND SECTION TITLE",
        subtitle: "22222222Space holder for subtitle....",
        button: {
          text: "Join Today!",
          do: "testCallbackFunction('Join today button alerting!')"
        },
        image: {
          width: 150,
          height: 200,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "color",
          url: "#302010"
        }
      }
    },
    {
      type: "hero_main",
      data: {
        title: "3333 SECTION 3333 TITLE",
        subtitle: "3333333S3pace3 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do: "testCallbackFunction('3333333333Join today button alerting!')"
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "newsletter_main",
      data: {
        title: "4444444 SECTION 3333 TITLE",
        subtitle: "44444S3pace3 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join 3333333 alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "hero_main",
      data: {
        title: "55555555555 SECTION 3333 TITLE",
        subtitle: "555555555555pace3 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join 3333333 alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "hero_main",
      data: {
        title: "6666666666 SECTION 3333 TITLE",
        subtitle: "666666666 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join 3333333 alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "newsletter_main",
      data: {
        title: "77777777777 SECTION 3333 TITLE",
        subtitle: "7777777777 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join 3333333 alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "newsletter_main",
      data: {
        title: "888888 SECTION 3333 TITLE",
        subtitle: "88888 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join 3333333 alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "newsletter_main",
      data: {
        title: "9999999 SECTION 3333 TITLE",
        subtitle: "99999999 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join 3333333 alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "newsletter_main",
      data: {
        title: "10 SECTION 3333 TITLE",
        subtitle: "10 hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join 10 alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "about_default",
      data: {
        title: "YYYYYYYYY SECTION 3333 TITLE",
        subtitle: "YYYYYYYYYYY hold3e3r3 33for subtit3e..3..",
        button: {
          text: "YYYYYY Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join YYYYY alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    },
    {
      type: "about_default",
      data: {
        title: "ZZZZZZZZZZZZZ SECTION 3333 TITLE",
        subtitle: "ZZZZZZZZZZ hold3e3r3 33for subtit3e..3..",
        button: {
          text: "Joi3n Today3!",
          style: {
            background: "orange",
            color: "red",
            size: "L"
          },
          do() {
            alert('Join ZZZZZZZZZZZ alerting!');
          }
        },
        image: {
          width: 50,
          height: 50,
          url: "/assets/img/logo.png"
        },
        background: {
          type: "image",
          url: "/assets/img/logo.png"
        }
      }
    }
  ]
}

window.onload = () => {
  aoDisplay.page = page_home;
  aoDisplay.loadPage();
}

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
//▌   ! END OF FILE !            ▐▀▀▀         ▐▀▀▀             ! END OF FILE !    ▐
//▌▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄      ▐▀▀▀  ▐▀▀▀▀▌ ▐▀▀▀         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▐
//▌ ♠ File Name: app.js   ▐      ▐▄▄▄  ▐▄▄▄▄▌ ▐            ▌  ☺ Author: Slavko V. ▐
//▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀