const V_DomPrinter={info:{name:"V_DomPrinter",author:"_.V._"},templates:[{name:"hero_main",view(a){return`<div class="section_side">
										<h1>${a.title}</h1>
										<h2>${a.subtitle}</h2>
										<button onclick="${a.button.do}">${a.button.text}</button>
									</div>
									<div class="section_side">
										<img src="${a.image.url}" width="${a.image.width}" height="${a.image.height}" alt="${a.image.alt}"/>
									</div>`},paint(){return`<style>
									.hero_main {
										background: #101525;
										color: white;
									}
								</style>`}},{name:"newsletter_main",view(a){return`<div class="section_side">
									<h3>${a.title}</h3>
									<p>${a.text}</p>
								</div>
								<div class="section_side">
									<input type="text"/>
									<button />SignUp</button>
								</div>`},paint(){return`<style>
									.newsletter_main {
										background: #152510;
										color: white;
									}
								</style>`}},{name:"about_default",view(a){return`<div class="section_full">
									<h3>${a.title}</h3>
									<h5>${a.subtitle}</h5>
									<p>${a.text}</p>
								</div>`},paint(){return`<style>
									.about_default {
										background: #251510;
										color: white;
									}
								</style>`}}],returnTemplate(a=null){var b=!1;return null===a?(console.warn("ERROR TYPE EMPTY"),b=!1):this.templates.forEach(c=>{a.type==c.name&&(console.log("FOUND SECTION TEMPLATE"),b=c.view(a.data))}),b},getStyle(a=null){var b=!1;return null===a?(console.warn("ERROR TYPE EMPTY"),b=!1):this.templates.forEach(c=>{a==c.name&&(console.log("FOUND SECTION STYLE"),b=c.paint())}),b}};let vDom=V_DomPrinter;function returnTemplate(a){return vDom.returnTemplate(a)}function getStyle(a){return vDom.getStyle(a)}let V_DomP=returnTemplate,V_DomS=getStyle;