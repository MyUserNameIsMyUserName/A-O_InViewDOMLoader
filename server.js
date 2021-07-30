console.log("Starting the best thing these is.... :D");

const open = require("open");
const express = require("express");
const app = express();
const port = 3000;
let v_dom_printer = require('./src/universal_modules/v_dom_printer/v_dom_printer');
let is_dev = require('./src/universal_modules/is_dev/is_dev');

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'dist')))

app.get("/", (req, res) => {
  res.send("Hello World! <br> page_slug: " +req.params.page_slug+" ; <br> req.baseUrl : "+req.baseUrl+" ; <br> is_dev: "+is_dev()+" ; <br> "+ v_dom_printer.init()+" ; <br> "+ v_dom_printer.print()+" ; <br> "+ v_dom_printer.findTemplate() );
});

app.get("/:page_slug", (req, res) => {
  res.send("FIND SLUG OF A PAGE!  <br> page_slug: " +req.params.page_slug+" ; <br> req.baseUrl : "+req.baseUrl+" ; <br> is_dev: "+is_dev());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

open(`http://localhost:${port}`);
