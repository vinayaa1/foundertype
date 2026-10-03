/* the four traits. each has two letters and two display names.
   the type code is built in this order: V/D  B/P  R/C  I/S */
window.Quiz = window.Quiz || {};

Quiz.axes = [
  { pair: ["V", "D"], names: ["visionary", "data-driven"] },
  { pair: ["B", "P"], names: ["builder", "planner"] },
  { pair: ["R", "C"], names: ["risk-taker", "calculator"] },
  { pair: ["I", "S"], names: ["independent", "social"] }
];
