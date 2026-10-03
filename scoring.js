/* pure scoring logic, no dom. */
window.Quiz = window.Quiz || {};

Quiz.scoring = {
  // tally[axis] = [votes for first letter, votes for second letter]
  tally(questions, answers, axes) {
    const t = axes.map(() => [0, 0]);
    questions.forEach((q, i) => {
      const picked = answers[i];
      if (!picked) return;
      t[q.axis][picked === q.first ? 0 : 1]++;
    });
    return t;
  },

  // majority wins each axis. with 3 questions per axis there are no ties.
  code(tally, axes) {
    return tally.map((pair, i) => axes[i].pair[pair[0] >= pair[1] ? 0 : 1]).join("");
  },

  // which side (0 or 1) a code leans on a given axis
  side(code, axes, i) {
    return code[i] === axes[i].pair[0] ? 0 : 1;
  }
};
