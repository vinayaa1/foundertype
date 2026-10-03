/* 12 questions, 3 per axis (axis = index in axes.js).
   "first" says which answer scores the axis' first letter:
   first: "a" means answer a leans toward the first letter.
   flip it on some questions so the same side isn't always "a". */
window.Quiz = window.Quiz || {};

Quiz.questions = [
  { axis: 0, text: "you're handed a blank page and a free week. you start with...",
    a: "a wild idea of what it could become", b: "research on what's already working", first: "a" },
  { axis: 2, text: "a big opportunity shows up with a short deadline. you...",
    a: "say yes and figure out the rest on the way", b: "ask for time to weigh the downsides", first: "a" },
  { axis: 1, text: "a new project kicks off. your first move is to...",
    a: "make something rough so there's something real to look at", b: "map out the steps before touching anything", first: "a" },
  { axis: 3, text: "you're stuck on a hard problem. you would rather...",
    a: "go off alone and think it through", b: "grab someone and talk it out", first: "a" },

  { axis: 0, text: "when you're deciding between two options, what wins?",
    a: "the numbers, even if the other one feels better", b: "the one that feels like it points somewhere bigger", first: "b" },
  { axis: 1, text: "your ideal workspace right now is...",
    a: "a calendar, a checklist, and a clear order of things", b: "a messy desk with half-finished experiments", first: "b" },
  { axis: 2, text: "the safe path and the long shot are both open. you pick...",
    a: "the path where you know what could go wrong", b: "the long shot, because the upside is worth it", first: "b" },
  { axis: 3, text: "the best kind of work day is one where you...",
    a: "barely talk to anyone and get a lot done", b: "bounce between people and ideas all day", first: "a" },

  { axis: 0, text: "people usually come to you for...",
    a: "a fresh angle nobody else saw", b: "the facts and the evidence behind it", first: "a" },
  { axis: 1, text: "halfway through, the plan stops working. you...",
    a: "tear it up and build something that does work", b: "switch to the backup plan you kept ready", first: "a" },
  { axis: 2, text: "you've got savings and a risky idea. you...",
    a: "put a chunk in and see what happens", b: "test it small first and scale only if it holds up", first: "a" },
  { axis: 3, text: "when something goes well, you most want to...",
    a: "enjoy it quietly and move to the next thing", b: "celebrate with the people who helped", first: "a" }
];
