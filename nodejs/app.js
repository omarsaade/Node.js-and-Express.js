// with express

const express = require("express");
//he hallet meshklet el operating system taba3na w kif nle2i
// he hye btle2i la hala w bt7et slash aw backslash hasab iza
// ken linux aw windows aw...
const path = require("path");

const app = express();
//mihsen ta7mil malaf css aw javascript aw sura
//el server byeje ydawer jawa el static 3al path
app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  //mnesta5dem shi esmo send file mishen neb3at file html
  // hye bte5od mene el path taba3 el file w men baada bteb3at el file
  //heda lal browser
  //__dirname : btjeble masar el folder men el awal, saret el ossa dynamic
  res.sendFile(path.join(__dirname, "views", "index.html"));
  // process.platform === "aix...."  he n7alet bel sater 5
  // men 5ilel este5dem path
});

app.listen(3000, () => console.log("server listen on port 3000"));

// C:\Users\10User\Documents\Node.js-and-Express.js\nodejs
