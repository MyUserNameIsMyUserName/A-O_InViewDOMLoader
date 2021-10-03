const V_DomPrinter = {
  info: {
    name: "V_DomPrinter",
    author: "_.V._"
  },
  sections: [
    {
      name: "hero_main",
      type: "section",
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
      type: "section",
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
      type: "section",
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
    }
  ],
  loadSection (section = null) {
    var result = false;
    if (section !== null) {
      this.sections.forEach(item => {
        if (section.type == item.name) {
          console.log("FOUND SECTION TEMPLATE");
          result = item.view(section.data);
        }
      })
    } else {
      console.warn("[ ERROR : . :  EMPTY <.section.> args for loadSection() ]");
      result = false;
    }
    return result;
  },

  loadStyle (type = null) {
    var result = false;
    if (type !== null) {
      this.sections.forEach(item => {
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
  }
}


module.exports = V_DomPrinter;
