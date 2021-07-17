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
										<img src="${section.image.url}" width="${section.image.width}" height="${section.image.height}"/>
									</div>`
      },
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
      }
    }
  ],
  returnTemplate(section = null) {
    var result = false;
    if (section !== null) {
      this.templates.forEach(item => {
        if (section.type == item.name) {
          console.log("FOUND TEMPLATE");
          result = item.view(section.data);
        }
      })
    } else {
      console.warn("ERROR TYPE EMPTY");
      result = false;
    }
    return result;
  }
}

let vDom = V_DomPrinter;

function returnTemplate(section) {
  return vDom.returnTemplate(section);
}

let V_DomP = returnTemplate;