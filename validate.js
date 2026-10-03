/* checks the data files for mistakes and logs problems to the console.
   turn off with validateOnLoad: false in config.js */
window.Quiz = window.Quiz || {};

Quiz.validate = function () {
  const problems = [];
  const { axes, questions, types } = Quiz;

  // 3 questions per axis
  axes.forEach((ax, i) => {
    const n = questions.filter(q => q.axis === i).length;
    if (n !== 3) problems.push("axis " + i + " (" + ax.names.join("/") + ") has " + n + " questions, expected 3");
  });

  questions.forEach((q, i) => {
    if (!axes[q.axis]) problems.push("question " + (i + 1) + " points to a missing axis");
    if (q.first !== "a" && q.first !== "b") problems.push("question " + (i + 1) + ": first must be 'a' or 'b'");
  });

  // every possible code needs a type
  let codes = [""];
  axes.forEach(ax => { codes = codes.flatMap(c => ax.pair.map(l => c + l)); });
  codes.forEach(c => {
    const t = types[c];
    if (!t) { problems.push("missing type " + c); return; }
    if (!t.name) problems.push(c + " has no name");
    if (!Array.isArray(t.sections) || !t.sections.length) problems.push(c + " has no sections");
  });
  Object.keys(types).forEach(k => { if (!codes.includes(k)) problems.push("type " + k + " does not match any code"); });

  if (problems.length) console.warn("quiz data problems:\n- " + problems.join("\n- "));
  return problems;
};
