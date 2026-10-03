/* wires data, scoring, and ui together. */
(function () {
  const { config, axes, questions, types, scoring, ui, router, storage } = Quiz;
  const $ = ui.$;

  let current = 0;
  let answers = new Array(questions.length).fill(null);

  function typeImage(code) {
    const t = types[code];
    return (t && t.image) || config.typeImageDir + code.toLowerCase() + config.typeImageExt;
  }

  function showResult(code, tally) {
    const t = types[code];
    if (!t) return showStart();
    ui.renderResult(code, t, typeImage(code), tally, axes, scoring.side);
  }

  function showStart() {
    const last = config.saveLastResult ? storage.load() : null;
    ui.renderStart(config, axes, !!(last && types[last]));
    ui.show("start");
  }

  function startQuiz() {
    current = 0;
    answers.fill(null);
    ui.show("quiz");
    draw();
  }

  function draw() {
    ui.renderQuestion(questions[current], current, questions.length, answers[current], choose);
  }

  function choose(k) {
    answers[current] = k;
    if (current < questions.length - 1) { current++; draw(); return; }
    ui.fillProgress();
    const tally = scoring.tally(questions, answers, axes);
    const code = scoring.code(tally, axes);
    router.set(code);
    if (config.saveLastResult) storage.save(code);
    showResult(code, tally);
  }

  $("go").onclick = startQuiz;
  $("back").onclick = () => { if (current > 0) { current--; draw(); } };
  $("retake").onclick = () => { router.set(""); showStart(); };
  $("last").onclick = () => { const c = storage.load(); router.set(c); showResult(c, null); };
  $("copy").onclick = async () => {
    try { await navigator.clipboard.writeText(location.href); ui.toast("link copied"); }
    catch (e) { ui.toast("copy it from the address bar"); }
  };

  ui.renderGrid(types, (code) => { router.set(code); showResult(code, null); });
  if (config.validateOnLoad) Quiz.validate();

  // open a shared link like /#VBRI straight to that result
  const hash = router.get();
  if (types[hash]) showResult(hash, null); else showStart();
})();
