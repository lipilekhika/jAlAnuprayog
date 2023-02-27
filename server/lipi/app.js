const express = require("express");
const app = express();
var lipi1 = require("./lipi.js");
var lipi = lipi1.lipi;

const shrinkRay = require("shrink-ray-current");

app.use(shrinkRay());
app.use(async (req, res, next) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Max-Age": "86400",
    "content-type": "text/plain;charset=UTF-8",
    "X-Robots-Tag": "noindex",
    "X-Frame-Options": "deny",
    "X-sraShTA": "bhagavatprasAdAt",
  });
  res.removeHeader("X-Powered-By");
  res.status(200);
  next();
});
app.use(
  express.json({
    limit: "100mb",
  }),
  express.urlencoded({
    extended: false,
    limit: "2mb",
  })
);

if (true) {
  //redirects
  let rdr = {
    "favicon.ico":
      "https://cdn.jsdelivr.net/gh/lipilekhika/dist@latest/img/main.ico",
    test: "https://app-lipilekhika.pages.dev/oth/api",
  };
  for (let x in rdr)
    app.get("/" + x, async (req, res) => res.status(302).redirect(rdr[x]));
}
if (true) {
  //convert
  var convert = async (arg, bd) => {
    // arg -> url arguments
    // bd -> request body, POST or URL arguments
    let u = [],
      html = false;
    if ("textType" in bd) if (bd["textType"] == "html") html = true;
    if ("text" in bd && "to" in bd && "from" in bd)
      u = [bd.from, bd.to, bd.text];
    else if (arg.length == 2 && "text" in bd) u = [arg[0], arg[1], bd.text];
    else if (arg.length == 3) u = [arg[0], arg[1], arg[2]];
    if (u.length != 3)
      return [
        "ERROR in request format\nRefer to Lipi Lekhika API Documentaion",
        404,
      ];
    else {
      u[0] = lipi.k.normalize(u[0]);
      u[1] = lipi.k.normalize(u[1]);
      if (lipi.k.in(lipi.k.langs, u[0]) && lipi.k.in(lipi.k.langs, u[1])) {
        await lipi.k.load_lang(u[0], null, false, false);
        await lipi.k.load_lang(u[1], null, false, false);
        try {
          return [lipi.parivartak(u[2], u[0], u[1], html, false), 200];
        } catch (err) {
          return ["ERROR", 400];
        }
      } else return ["Unsupported Language or Wrong Language Code", 404];
    }
  };
  app.get("*", async (req, res) => {
    let url = decodeURI(req.path).split("/").slice(1),
      bd = req.query;
    let v = await convert(url, bd);
    res.status(v[1]).end(v[0]);
  });
  app.post("*", async (req, res) => {
    let url = decodeURI(req.path).split("/").slice(1),
      bd = req.body;
    let v = await convert(url, bd);
    res.status(v[1]).end(v[0]);
  });
}
module.exports = app;
app.listen(process.env.PORT || 3030);
