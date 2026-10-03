/* site-wide settings and asset paths.
   every path is relative to index.html. a missing image just hides itself. */
window.Quiz = window.Quiz || {};

Quiz.config = {
  siteTitle: "how do you\nactually work",
  intro: "twelve quick questions, four traits, sixteen types. no right answers, just go with your gut.",

  // start screen art
  logo: "assets/logo.png",
  hero: "assets/hero.png",

  // result art: assets/types/vbri.png, assets/types/dpcs.png, ...
  // a type can override this with its own "image" field in js/data/types.js
  typeImageDir: "assets/types/",
  typeImageExt: ".png",

  // remember the last result in this browser
  saveLastResult: true,

  // logs data problems (missing types, uneven questions) to the browser console
  validateOnLoad: true
};
