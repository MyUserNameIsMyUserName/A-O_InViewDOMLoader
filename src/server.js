console.log("Starting the best thing these is.... :D");
const open = require("open");
const express = require("express");
const app = express();
const port = 3000;
const v_dom_printer = require('./universal_modules/v_dom_printer/v_dom_printer');
const is_dev = require('./universal_modules/is_dev/is_dev');

app.use(express.static('dist'))

app.get("/:page_slug", (req, res) => {
  res.send("Hello World! \n page_slug: " +req.params.page_slug+" ; req.baseUrl : "+req.baseUrl+" ; is_dev: "+is_dev());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

open(`http://localhost:${port}`);
