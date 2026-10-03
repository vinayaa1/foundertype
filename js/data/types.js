/* all 16 types. the key is the four-letter code (V/D, B/P, R/C, I/S).

   each type supports:
     name      display name
     tag       one-line italic tagline under the name
     sections  any number of cards on the result page. each card has a title and either
                 body:  a string, or an array of strings (one paragraph each)
                 items: an array of strings (shown as a bullet list)
                 image: optional path to a picture shown inside the card
     image     (optional) custom result image. default is assets/types/<code>.png
     accent    (optional) a hex color that tints this type's code and meters, e.g. "#6aa6d1"

   to add a new section, copy any { title, body } line and edit it. */
window.Quiz = window.Quiz || {};

Quiz.types = {
  VBRI: { name: "the Prototyper", tag: "makes the random weird project alone at 2am (exactly where they want to be).",
    sections: [
      { title: "the short version", body: "you have an idea, you build a rough version of it immediately, and you ship before it feels ready. you trust your own judgment and mostly want to be left alone to make it." },
      { title: "at your best", body: "fast, original, and not scared of looking silly. you turn vague ideas into something real without worrying over pedantics." },
      { title: "watch out for", body: "you often overlook genuine feedback, and have 1000000 half-finished projects lying around." },
      { title: "your best match", body: "DBCS, the foreman. they check your work, finish what you start, and will do the social interaction for you." }
    ] },
  VBRS: { name: "the Ringleader", tag: "pulls a crowd into the idea and gets going.",
    sections: [
      { title: "the short version", body: "you see where things could go, start building, and bring everyone along for the ride. you ride that hype train, and keep the momentum going." },
      { title: "at your best", body: "contagious energy. people join your projects because you make them feel like something is happening (power of FOMO)." },
      { title: "watch out for", body: "enthusiasm can cover for gaps in the plan. it's important to still be thorough, so check that the team actually knows what they're doing." },
      { title: "your best match", body: "DPCS, the anchor. they turn your excitement into a plan and keep track of important deadlines and tasks." }
    ] },
  VBCI: { name: "the Tinkerer", tag: "an imaginative builder with careful execution. never puts all their eggs in one basket.",
    sections: [
      { title: "the short version", body: "you build to explore, but you do it carefully. you try an idea in a corner of your life before you commit the rest of it." },
      { title: "at your best", body: "inventive without being reckless. you find strange solutions and test them before they cost much." },
      { title: "watch out for", body: "testing can turn into endless tinkering. pick a point where the experiment becomes the real thing." },
      { title: "your best match", body: "DPRS, the dealmaker. they push the experiment out the door and find the people who care about it." }
    ] },
  VBCS: { name: "the Workshop Host", tag: "builds things with people, one careful step at a time.",
    sections: [
      { title: "the short version", body: "you like making things in good company. you steer the group toward ideas that are exciting but safe enough to try." },
      { title: "at your best", body: "you make it easy for others to contribute, and you keep the wild ideas grounded." },
      { title: "watch out for", body: "you might wait for consensus when someone just needs to make the call." },
      { title: "your best match", body: "VPRI, the Dreamer. they make the call when the group can't agree, and your team keeps them grounded." }
    ] },
  VPRI: { name: "the Dreamer", tag: "has a plan nobody else believes in yet.",
    sections: [
      { title: "the short version", body: "you carry a big picture, plan the route to it, and take the leap without needing permission. you'd rather be early and alone than on time and crowded." },
      { title: "at your best", body: "conviction and follow-through. you can hold a vision for a long time and still work out the steps." },
      { title: "watch out for", body: "being sure can make you hard to advise. ask one person who disagrees with you." },
      { title: "your best match", body: "DPCI, the Manager. they check your conviction against the evidence and tell you the truth quietly." }
    ] },
  VPRS: { name: "the Evangelist", tag: "paints the picture, then makes the room want in.",
    sections: [
      { title: "the short version", body: "you plan big, bet big, and talk people into the future you see. you work best when you can say it out loud to someone." },
      { title: "at your best", body: "persuasive and organized. you get buy-in and you have a roadmap to back it up." },
      { title: "watch out for", body: "the story can run ahead of the evidence. leave room for someone to poke holes." },
      { title: "your best match", body: "DBCI, the mechanic. they build what you promise and make sure it holds up when someone checks." }
    ] },
  VPCI: { name: "the Cartographer", tag: "draws the whole map before taking a step. probably budgeted for coffee spills too.",
    sections: [
      { title: "the short version", body: "you think long term, plan carefully, and weigh the risks on your own. when you finally move, you have a clear path in front of you." },
      { title: "at your best", body: "20/20 foresight. you spot problems early and design around them, making you very good with deadlines." },
      { title: "watch out for", body: "you aren't a psychic. at some point you have to walk into unexpected hurdles, but these things happen and it isn't necessarily a failure on your part." },
      { title: "your best match", body: "DBRI, the Experimenter. they walk the map you drew and report back on what the terrain is really like." }
    ] },
  VPCS: { name: "the Compass", tag: "keeps the group pointed somewhere good.",
    sections: [
      { title: "the short version", body: "you want a future worth working toward and a plan that keeps everyone safe on the way there. people look to you for direction." },
      { title: "at your best", body: "steady and thoughtful. you balance ambition with care for the people involved." },
      { title: "watch out for", body: "being the calm one can mean you hold back your own bold ideas." },
      { title: "your best match", body: "DPRI, the sharp. they make the bold, calculated moves you tend to hold back." }
    ] },

  DBRI: { name: "the Experimenter", tag: "runs the test, reads the result, goes again.",
    sections: [
      { title: "the short version", body: "you build quickly, let the data tell you whether it worked, and take real risks because you trust your measuring. mostly you do this by yourself." },
      { title: "at your best", body: "quick learning loops. you're comfortable being wrong in public because you'll know why." },
      { title: "watch out for", body: "not everything worth doing shows up in a metric. sometimes the number is late." },
      { title: "your best match", body: "VPCS, the compass. they supply the direction and the why, so your tests add up to something." }
    ] },
  DBRS: { name: "the Operator", tag: "gets the team moving and checks the dashboard.",
    sections: [
      { title: "the short version", body: "you like clear numbers, fast action, and a team that's in the room with you. you'd rather try it than discuss it." },
      { title: "at your best", body: "decisive and grounded. you turn goals into action and keep track of what's working." },
      { title: "watch out for", body: "speed can outrun people. check in on how the team is actually doing." },
      { title: "your best match", body: "VBCS, the workshop host. they slow the pace just enough for people to keep up and contribute." }
    ] },
  DBCI: { name: "the Mechanic", tag: "quietly fixes what's actually broken.",
    sections: [
      { title: "the short version", body: "you dig into how things work, build the fix, and double check it. you'd rather deliver something solid than something flashy." },
      { title: "at your best", body: "reliable, precise, and hard to rattle. your work holds up." },
      { title: "watch out for", body: "you might not mention what you've done. let people see it." },
      { title: "your best match", body: "VPRS, the Evangelist. they tell the story of your work so it gets the attention it deserves." }
    ] },
  DBCS: { name: "the Foreman", tag: "keeps the crew safe and the work on track.",
    sections: [
      { title: "the short version", body: "you like building things with a team, using evidence, and avoiding avoidable mistakes. people trust you with the important parts." },
      { title: "at your best", body: "dependable and fair. you make the whole group's work better." },
      { title: "watch out for", body: "caution can turn into saying no too often. save some room for the unproven idea." },
      { title: "your best match", body: "VBRS, the Ringleader. they bring the energy and the appetite for the unproven ideas you tend to pass on." }
    ] },
  DPRI: { name: "the Sharp", tag: "does the math, then makes the unpopular move.",
    sections: [
      { title: "the short version", body: "you plan with data and then commit hard when the numbers say go, even if nobody else sees it yet. you decide on your own." },
      { title: "at your best", body: "clear-eyed and brave. you take risks that are actually calculated." },
      { title: "watch out for", body: "you can be right and still need to bring people with you." },
      { title: "your best match", body: "VBCS, the Workshop Host. they bring the team along so your good calls actually stick." }
    ] },
  DPRS: { name: "the Dealmaker", tag: "reads the room and the spreadsheet.",
    sections: [
      { title: "the short version", body: "you plan thoroughly, you're not afraid to move big, and you work well with people while you do it. negotiating comes naturally." },
      { title: "at your best", body: "strategic and personable. you see both the numbers and the people behind them." },
      { title: "watch out for", body: "winning every round isn't the point. leave something on the table sometimes." },
      { title: "your best match", body: "DPCS, the Anchor. they keep things fair and long-lasting while you chase the next win." }
    ] },
  DPCI: { name: "the Manager", tag: "knows exactly where everything stands.",
    sections: [
      { title: "the short version", body: "you plan with care, check the evidence twice, and prefer to think it through on your own. very little surprises you." },
      { title: "at your best", body: "thorough, accurate, and calm under pressure. you catch what others miss." },
      { title: "watch out for", body: "perfect information doesn't exist. make the call at ninety percent." },
      { title: "your best match", body: "VPRI, the Dreamer. they supply the conviction to act at ninety percent while you cover the details." }
    ] },
  DPCS: { name: "the Anchor", tag: "the reason the whole thing doesn't drift away.",
    sections: [
      { title: "the short version", body: "you like clear plans, solid evidence, and a team you can count on. you make things steady, and people feel it." },
      { title: "at your best", body: "grounded and generous. you make good decisions that last." },
      { title: "watch out for", body: "stability is great until it becomes the only goal. try one new thing a year." },
      { title: "your best match", body: "VBRI, the prototype. they ship the strange new thing and you make it solid enough to last." }
    ] }
};