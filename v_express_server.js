
const open = require("open");
const express = require("express");
const app = express();
const port = 3000;
let v_dom_printer = require('./src/modules/v_dom_printer');
let is_dev = require('./src/modules/is_dev');

 app.get("/", (req, res) => {
   res.send("<.ROOT.> -> HOMEPAGE FOUND! <br> page_slug: " +req.params.page_slug+" ; <br> req.baseUrl : "+req.baseUrl+" ; <br> is_dev: "+is_dev()+" ; <br> "+ v_dom_printer.init()+" ; <br> "+ v_dom_printer.print()+" ; <br> "+ v_dom_printer.findTemplate() );
 });

app.get("/:page_slug", (req, res) => {
  res.send("<_!_> - Page.SEARCH_BY_SLUG ( <-PAGE_SLUG-> )  <br>[ i ] - page_slug: " +req.params.page_slug+" ; <br>[ u ] - req.baseUrl : "+req.baseUrl+" ; <br>[ d ] - is_dev: "+is_dev());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

open(`http://localhost:${port}`);
