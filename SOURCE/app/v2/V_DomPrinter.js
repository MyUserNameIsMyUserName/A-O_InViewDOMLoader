const V_DomPrinter = {
  info: {
    name: "V_DomPrinter",
    author: "_.V._"
  },
  templates: [{
      name: "hero_main",
      view(section) {
        return `<div class="section_side">
										<h1>${section.title}</h1>
										<h2>${section.subtitle}</h2>
										<button onclick="${section.button.do}">${section.button.text}</button>
									</div>
									<div class="section_side">
										<img src="${section.image.url}" width="${section.image.width}" height="${section.image.height}" alt="${section.image.alt}"/>
									</div>`
      },
      paint() {
        return `<style>
									.hero_main {
										background: #101525;
										color: white;
									}
								</style>`;
      }
    },
    {
      name: "newsletter_main",
      view(section) {
        return `<div class="section_side">
									<h3>${section.title}</h3>
									<p>${section.text}</p>
								</div>
								<div class="section_side">
									<input type="text"/>
									<button />SignUp</button>
								</div>`
      },
      paint() {
        return `<style>
									.newsletter_main {
										background: #152510;
										color: white;
									}
								</style>`;
      }
    },
    {
      name: "about_default",
      view(section) {
        return `<div class="section_full">
									<h3>${section.title}</h3>
									<h5>${section.subtitle}</h5>
									<p>${section.text}</p>
								</div>`
      },
      paint() {
        return `<style>
									.about_default {
										background: #251510;
										color: white;
									}
								</style>`;
      }
    },
    {
      name: "glide_slider_elem",
      view(section) {
        return `
								<div id="intro" class="slider glide glide--ltr glide--carousel glide--swipeable">
									<div class="slider__track glide__track" data-glide-el="track">
										<ul class="slider__slides glide__slides">
											<li class="slider__frame glide__slide 1">1_:_${section.title}</li>
											<li class="slider__frame glide__slide 2">2_::_${section.title}</li>
											<li class="slider__frame glide__slide 3">3_:::_${section.title}</li>
											<li class="slider__frame glide__slide 4">4_::::_${section.title}</li>
											<li class="slider__frame glide__slide 10">0_:_${section.title}</li>
										</ul>
									</div>
									<div data-glide-el="controls">
										<button class="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev" data-glide-dir="<">
										<i class="fas fa-arrow-left"></i>
										</button>
										<button class="slider__arrow slider__arrow--next glide__arrow glide__arrow--next" data-glide-dir=">">
										<i class="fas fa-arrow-right"></i>
										</button>
									</div>
									<div class="slider__bullets glide__bullets" data-glide-el="controls[nav]">
										<button class="slider__bullet glide__bullet" data-glide-dir="=0"></button>
										<button class="slider__bullet glide__bullet" data-glide-dir="=1"></button>
										<button class="slider__bullet glide__bullet" data-glide-dir="=2"></button>
										<button class="slider__bullet glide__bullet glide__bullet--active" data-glide-dir="=3"></button>
										<button class="slider__bullet glide__bullet" data-glide-dir="=4"></button>
									</div>
								</div>`
      },
      paint() {
        return `<style>
							.glide {
								position: relative;
								width: 100%;
								box-sizing: border-box; }
								.glide * {
									box-sizing: inherit; }
								.glide__track {
									overflow: hidden; }
								.glide__slides {
									position: relative;
									width: 100%;
									list-style: none;
									backface-visibility: hidden;
									transform-style: preserve-3d;
									touch-action: pan-Y;
									overflow: hidden;
									padding: 0;
									white-space: nowrap;
									display: flex;
									flex-wrap: nowrap;
									will-change: transform; }
									.glide__slides--dragging {
										user-select: none; }
								.glide__slide {
									width: 100%;
									height: 100%;
									flex-shrink: 0;
									white-space: initial;
									user-select: none;
									-webkit-touch-callout: none;
									-webkit-tap-highlight-color: transparent; }
									.glide__slide a {
										user-select: none;
										-webkit-user-drag: none;
										-moz-user-select: none;
										-ms-user-select: none; }
								.glide__arrows {
									-webkit-touch-callout: none;
									user-select: none; }
								.glide__bullets {
									-webkit-touch-callout: none;
									user-select: none; }
								.glide--rtl {
									direction: rtl; }
									
									.glide {
										cursor: -webkit-grab;
									}
									
									.slider__arrow--prev {
										left: 1.5rem;
									}
									
									.fas {
										right: 5px;
										position: absolute;
										top: 6px;
									}
									
									.slider__arrow--next {
										right: 1.5rem;
									}
									
									.slider__arrow {
										position: absolute;
										top: 50%;
										z-index: 1;
										width: 24px;
										height: 24px;
										margin-top: -9px;
										border-radius: 50%;
										background-color: #aeb0b3;
										-webkit-transition: all 0.2s ease-in-out;
										transition: all 0.2s ease-in-out;
										-webkit-box-shadow: 0 0.5rem 4rem 0 rgba(0, 0, 0, 0.5);
										box-shadow: 0 0.5rem 4rem 0 rgba(0, 0, 0, 0.5);
									}
									
									.slider__arrow--prev {
										left: 1.5rem;
									}
									
									.slider__frame[class*=active] {
										-webkit-box-shadow: none;
										box-shadow: none;
										background: linear-gradient(-45deg, #ed145b, #7b31f4);
										transition: background 0.1s ease-in;
									}
									
									.slider__frame {
										border-radius: 0.16667em;
										text-align: center;
										height: 200px;
										line-height: 150px;
										-webkit-box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.5);
										box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.5);
										color: #fff;
										background: 0 0;
										font-size: 1em;
										font-weight: 900;
									}
									
									img {
										width: 100%;
										height: 100%;
									}
									
									.slider__bullet:focus, .slider__bullet:hover {
										border: 2px solid #fff;
										background-color: rgba(255, 255, 255, 0.5);
									}
									
									.slider__bullets {
										position: absolute;
										z-index: 2;
										bottom: 1.5rem;
										left: 50%;
										display: -webkit-inline-box;
										display: -ms-inline-flexbox;
										display: inline-flex;
										list-style: none;
										-webkit-transform: translateX(-50%);
										transform: translateX(-50%);
										bottom: -25px;
									}
									
									.slider__bullet {
										background-color: rgba(255, 255, 255, 0.5);
										width: 9px;
										height: 9px;
										padding: 0;
										border-radius: 50%;
										border: 2px solid transparent;
										-webkit-transition: all 0.3s ease-in-out;
										transition: all 0.3s ease-in-out;
										cursor: pointer;
										line-height: 0;
										-webkit-box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
										box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);
										margin: 0 0.5em;
									}
									
									.slider__bullet[class*=active] {
										background-color: #fff;
									}
								</style>`;
      },
      do(uid) {
        const glideURL = "https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.4.1/glide.min.js";
        let checker = document.querySelectorAll('script');
        var needToLoad = true;
        if (checker.length > 0) {
          checker.forEach(chkScript => {
            if (chkScript.getAttribute('src') === glideURL) {
              needToLoad = false;
            }
          })
        }

        if (needToLoad) {
          let script = document.createElement('script');
          script.src = glideURL;
          document.head.append(script);
          script.onload = () => {

            window.glide = new Glide('.glide', {
              type: 'carousel',
              focusAt: 'center',
              perView: 5,
              animationDuration: 300,
              autoplay: 3000,
              hoverpause: true,
              peek: {
                before: 50,
                after: 50
              },
              breakpoints: {
                1200: {
                  perView: 3
                },
                800: {
                  perView: 1
                },
                480: {
                  perView: 1
                }
              }
            });


            window.glide.mount();

          };
        };


      },
      onshow() {
        console.log(window);
        if (window.glide) {
          window.glide.mount();
        }
      }
    }
  ],
  returnTemplate(section = null) {
    var result = false;
    if (section !== null) {
      this.templates.forEach(item => {
        if (section.type == item.name) {
          console.log("FOUND SECTION TEMPLATE");
          result = {
            section: item.view(section.data),
            do: item.do,
            onshow: item.onshow
          }
        }
      })
    } else {
      console.warn("ERROR TYPE EMPTY");
      result = false;
    }
    return result;
  },

  getStyle(type = null) {
    var result = false;
    if (type !== null) {
      this.templates.forEach(item => {
        if (type == item.name) {
          console.log("FOUND SECTION STYLE");
          result = item.paint();
        }
      })
    } else {
      console.warn("ERROR TYPE EMPTY");
      result = false;
    }
    return result;
  },

}

let vDom = V_DomPrinter;

function returnTemplate(section) {
  return vDom.returnTemplate(section);
}


function getStyle(type) {
  return vDom.getStyle(type);
}


let V_DomP = returnTemplate;
let V_DomS = getStyle;