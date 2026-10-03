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
  VBRI: { name: "the Prototyper", tag: "makes the random weird project alone at 2am (exactly where they want to be).", accent: "#7a5fa8",
    sections: [
      { title: "the short version", body: "you think by making things. instead of debating whether an idea is good, you build a rough version and find out. you trust your own taste more than a committee's, and you handle risk well because a failed prototype costs you a weekend, not a career. most of your best work happens alone, in long uninterrupted stretches, and you would rather show something than explain it." },
      { title: "at your best", body: "you close the gap between an idea and a real thing faster than almost anyone. that speed gives you real information early, and your willingness to look unpolished means you get to try ideas other people talk themselves out of. people are often surprised by how much you have already made." },
      { title: "watch out for", body: "working alone and shipping early means feedback arrives late, or never. it's easy to mistake momentum for validation, and the cost shows up as a pile of projects that got to 80 percent and stalled once the fun part ended. the fix is small: show one person the rough version before you've decided it's finished, and pick one project to carry through the boring last stretch." },
      { title: "your best match", body: "DBCS, the Foreman. they check your work, finish what you start, and handle the people side so you can stay heads-down. they are builders too, so they respect the work instead of slowing it down." }
    ] },
  VBRS: { name: "the Ringleader", tag: "pulls a crowd into the idea and gets going.", accent: "#c2603f",
    sections: [
      { title: "the short version", body: "you see where something could go, and you can make other people see it too. you start building almost immediately and pull people in as you go, so projects around you have energy early. you're comfortable with risk, partly because you've learned that momentum itself makes things more likely to work. being around people is how you think: ideas get sharper when you say them out loud." },
      { title: "at your best", body: "you make it easy for others to commit to something that doesn't exist yet. you notice who is hesitating, give people a role quickly, and keep spirits up when things get hard. a lot of projects only happen because someone like you decided to start." },
      { title: "watch out for", body: "excitement can paper over missing details. people join because of how you make them feel, and if the plan underneath is thin they will find out later, usually at the worst moment. you may also move on to the next idea before the people who joined the last one are ready. be explicit about what is decided and what is still a guess, and check in once the early energy fades." },
      { title: "your best match", body: "DPCS, the Anchor. they turn your excitement into a structure, keep track of deadlines and commitments, and notice when someone on the team is quietly struggling." }
    ] },
  VBCI: { name: "the Tinkerer", tag: "an imaginative builder with careful execution. never puts all their eggs in one basket.", accent: "#5b8fa8",
    sections: [
      { title: "the short version", body: "you like making things, and you like making them carefully. rather than committing everything to an idea, you run it as a small experiment on the side: limited time, limited money, easy to walk away from. you would rather learn privately that something doesn't work than fail in front of people, which makes you resourceful and hard to rattle." },
      { title: "at your best", body: "you find unusual solutions and stress-test them cheaply. you can tell the difference between an idea that is exciting and one that is actually viable, because you've tried it. you also recover from setbacks well, since you never put everything on one bet." },
      { title: "watch out for", body: "keeping things small is safe, but it can quietly become a way to avoid commitment. some ideas only work once you give them real time and attention, and a side project never gets that. you may also keep tinkering after an idea has proven itself, because finishing means exposing it. set a date or a number that, once reached, means this becomes the main thing." },
      { title: "your best match", body: "DPRS, the Dealmaker. they push the experiment out into the world, find the people and customers who care about it, and are comfortable with the exposure that makes you hesitate." }
    ] },
  VBCS: { name: "the Workshop Host", tag: "builds things with people, one careful step at a time.", accent: "#6f9a5b",
    sections: [
      { title: "the short version", body: "you like building with people, and you care how it gets built. you steer groups toward ideas that are ambitious enough to matter and safe enough to try, and you tend to bring everyone's input into the work instead of deciding alone. you're patient, and you would rather take a step everyone can stand behind than a leap that splits the room." },
      { title: "at your best", body: "people do their best work around you. you make it easy to contribute, you notice quieter voices, and you keep wild ideas workable by testing them in small steps. teams you lead tend to be loyal and feel real ownership of what they made." },
      { title: "watch out for", body: "looking for agreement can slow you down, and sometimes a team needs someone to make the call and take the criticism for it. you may also water down a good idea to keep everyone comfortable. when you notice the group stalling, it's okay to decide, explain why, and ask for objections afterward." },
      { title: "your best match", body: "VPRI, the Dreamer. they are willing to make the unpopular call when the group can't agree, and you keep them connected to the people who have to live with it." }
    ] },
  VPRI: { name: "the Dreamer", tag: "has a plan nobody else believes in yet.", accent: "#a8457a",
    sections: [
      { title: "the short version", body: "you hold a large picture of how things could be, you plan the route to it, and you're willing to take a real risk without waiting for permission. you would rather be early and alone than on time and surrounded by people who haven't seen it yet. most of your thinking happens in private, and when you do speak, it's usually already worked out." },
      { title: "at your best", body: "conviction with follow-through. plenty of people have big ideas. you can hold one for years, break it into steps, and keep going when nobody around you sees it yet. that patience is rare, and it's how long-shot projects actually get built." },
      { title: "watch out for", body: "being sure can make you hard to advise, and working alone means no one is checking your assumptions. the vision can also become something you defend instead of test. find one person you trust who will disagree with you, and treat their objection as information rather than a lack of belief." },
      { title: "your best match", body: "DPCI, the Manager. they check your conviction against the evidence and tell you the truth quietly, which is the kind of disagreement you can actually hear." }
    ] },
  VPRS: { name: "the Evangelist", tag: "paints the picture, then makes the room want in.", accent: "#d08a2e",
    sections: [
      { title: "the short version", body: "you plan big, bet big, and talk people into the future you see. you think best out loud with other people, and you're good at turning a rough vision into something others want to be part of. unlike a pure dreamer, you usually have a roadmap to back it up." },
      { title: "at your best", body: "persuasive and organized, which is an uncommon pairing. you can get buy-in from investors, teammates, and customers, and then actually show them the path. people trust you because you believe in it and have thought about how it gets done." },
      { title: "watch out for", body: "the story can run ahead of the evidence. when you're good at persuading, you can end up persuading yourself, and people may hesitate to challenge you in a room you're leading. leave deliberate space for someone to poke holes, and treat the holes as free information." },
      { title: "your best match", body: "DBCI, the Mechanic. they build what you promise and make sure it holds up when someone checks, and they're happy to let you be the voice." }
    ] },
  VPCI: { name: "the Cartographer", tag: "draws the whole map before taking a step. probably budgeted for coffee spills too.", accent: "#3f7f8c",
    sections: [
      { title: "the short version", body: "you think long term, plan carefully, and weigh the risks on your own before saying much. when you finally move, you have a clear path in front of you and a good sense of what could go wrong. you're comfortable with ambitious ideas. you just want to understand the terrain before you commit to them." },
      { title: "at your best", body: "foresight. you spot problems early, design around them, and tend to be reliable with deadlines and commitments. people around you feel safer because you've usually already thought of the thing that worries them." },
      { title: "watch out for", body: "planning can start to feel like progress. no map covers everything, and some of what you need to know only shows up once you start moving. when a hurdle appears that you didn't predict, it's information, not a failure of preparation. set a point where you stop planning and start, even if the map is incomplete." },
      { title: "your best match", body: "DBRI, the Experimenter. they walk the map you drew and report back on what the terrain is really like, which keeps your plans honest." }
    ] },
  VPCS: { name: "the Compass", tag: "keeps the group pointed somewhere good.", accent: "#4a6fb0",
    sections: [
      { title: "the short version", body: "you want a future worth working toward and a plan that keeps everyone safe on the way there. people turn to you when they need direction, because you can hold the big picture while paying attention to how people are doing. you take calculated risks, and you prefer to make decisions with the people they affect." },
      { title: "at your best", body: "steady and thoughtful. you balance ambition with care for the people involved, and you're good at helping a group agree on where it's going without flattening anyone's input. teams you're part of tend to trust that decisions are made for good reasons." },
      { title: "watch out for", body: "being the calm, reliable one can mean your own bold ideas get shelved to keep things steady. you may also take on the emotional weight of a group's decisions. notice which of your ideas you've stopped bringing up, and try raising one." },
      { title: "your best match", body: "DPRI, the Sharp. they make the bold, calculated moves you tend to hold back, and they don't need the group's comfort to act." }
    ] },

  DBRI: { name: "the Experimenter", tag: "runs the test, reads the result, goes again.", accent: "#b5483e",
    sections: [
      { title: "the short version", body: "you build quickly, let the data tell you whether it worked, and take real risks because you trust your measuring. you work mostly by yourself, and you form views from evidence rather than opinion, including your own. you're less attached to being right than to finding out." },
      { title: "at your best", body: "very fast learning loops. you're comfortable being wrong in public because you'll know exactly why, and you update without ego. that makes you good at finding things that actually work." },
      { title: "watch out for", body: "not everything worth doing shows up in a metric, and some results arrive late. you can end up optimizing what's measurable and neglecting what isn't, including relationships and long-term bets. working alone also means you can miss context other people would give you in one sentence." },
      { title: "your best match", body: "VPCS, the Compass. they supply the direction and the why, so your tests add up to something larger than a series of good experiments." }
    ] },
  DBRS: { name: "the Operator", tag: "gets the team moving and checks the dashboard.", accent: "#8a6d3b",
    sections: [
      { title: "the short version", body: "you like clear numbers, fast action, and a team that's in the room with you. you would rather try something than discuss it, and you make decisions by looking at what is actually happening. you're willing to take risks as long as you can see the results quickly and adjust." },
      { title: "at your best", body: "decisive and grounded. you turn goals into action, keep track of what's working, and create momentum a team can feel. people usually know where they stand with you." },
      { title: "watch out for", body: "speed can outrun people. a team can be hitting its numbers while quietly burning out, and a dashboard won't always show it. slow down occasionally to ask how people are actually doing, and let some decisions take longer than you'd like." },
      { title: "your best match", body: "VBCS, the Workshop Host. they slow the pace just enough for people to keep up and contribute, which keeps the team with you for the long run." }
    ] },
  DBCI: { name: "the Mechanic", tag: "quietly fixes what's actually broken.", accent: "#5f6b7a",
    sections: [
      { title: "the short version", body: "you dig into how things work, build the fix, and check it twice. you would rather deliver something solid than something flashy, and you're comfortable working quietly for a long time on a hard problem. you make decisions from evidence and prefer careful, well-tested changes with as little drama as possible." },
      { title: "at your best", body: "reliable, precise, and hard to rattle. your work holds up, which means other people can build on it without worrying. you tend to find the real cause of a problem instead of patching the symptom." },
      { title: "watch out for", body: "you might not mention what you've done, and quiet work can go unnoticed or undervalued. people can't rely on what they can't see. say what you fixed and why it mattered, and tell someone when you're stuck instead of waiting until you've solved it." },
      { title: "your best match", body: "VPRS, the Evangelist. they tell the story of your work so it gets the attention it deserves, and they're happy to be the voice." }
    ] },
  DBCS: { name: "the Foreman", tag: "keeps the crew safe and the work on track.", accent: "#4f8a6a",
    sections: [
      { title: "the short version", body: "you like building things with a team, using evidence, and avoiding mistakes that could have been avoided. people trust you with the important parts because you check them. you make careful decisions and share the work fairly." },
      { title: "at your best", body: "dependable and fair. you make the whole group's work better, you notice problems before they spread, and people feel safe taking on difficult work around you." },
      { title: "watch out for", body: "caution can turn into saying no too often. you may default to what's proven and miss ideas that look unreasonable until they work. save some room for the unproven idea, and ask yourself what the real cost of trying it would be." },
      { title: "your best match", body: "VBRS, the Ringleader. they bring the energy and the appetite for unproven ideas that you tend to pass on, and you make sure those ideas get built safely." }
    ] },
  DPRI: { name: "the Sharp", tag: "does the math, then makes the unpopular move.", accent: "#9b3d52",
    sections: [
      { title: "the short version", body: "you plan with data and then commit hard when the numbers say go, even if nobody else sees it yet. you decide on your own, usually after a lot of private analysis, and you're comfortable making a move that looks wrong to everyone else. you don't need agreement to act, just a reason." },
      { title: "at your best", body: "clear-eyed and brave. you take risks that are actually calculated, and you can hold a position under pressure because you know why you took it. that's how you spot opportunities other people dismiss." },
      { title: "watch out for", body: "you can be right and still need to bring people with you. deciding alone means people may not understand or support a good decision, and then it fails for reasons that have nothing to do with the analysis. explain your reasoning early, even when it feels unnecessary." },
      { title: "your best match", body: "VBCS, the Workshop Host. they bring the team along, so your good calls actually stick." }
    ] },
  DPRS: { name: "the Dealmaker", tag: "reads the room and the spreadsheet.", accent: "#b0903a",
    sections: [
      { title: "the short version", body: "you plan thoroughly, you're not afraid to move big, and you work well with people while you do it. you read both the numbers and the person across the table, and negotiating comes naturally because you understand what each side needs. you're comfortable with risk once you've done the homework." },
      { title: "at your best", body: "strategic and personable. you see the numbers and the people behind them, and you can build agreements that both sides honor. people tend to leave a conversation with you feeling heard." },
      { title: "watch out for", body: "winning every round isn't the point. skilled negotiators can leave relationships worse off, and not every interaction is a deal. leave something on the table sometimes, and notice when you're keeping score." },
      { title: "your best match", body: "DPCS, the Anchor. they keep things fair and long-lasting while you chase the next win, and they remind you that relationships outlast deals." }
    ] },
  DPCI: { name: "the Manager", tag: "knows exactly where everything stands.", accent: "#4a5a8a",
    sections: [
      { title: "the short version", body: "you plan with care, check the evidence twice, and prefer to think things through on your own. very little surprises you because you've usually already considered it. you're comfortable with responsibility, and you prefer to make decisions with complete information." },
      { title: "at your best", body: "thorough, accurate, and calm under pressure. you catch what others miss and keep complicated things running without drama. people rely on you when the details matter." },
      { title: "watch out for", body: "perfect information doesn't exist, and waiting for it can look like indecision to everyone else. you may also carry too much alone. make the call at ninety percent, and say out loud what you're unsure of so others can help." },
      { title: "your best match", body: "VPRI, the Dreamer. they supply the conviction to act before everything is certain, and you cover the details they tend to skip." }
    ] },
  DPCS: { name: "the Anchor", tag: "the reason the whole thing doesn't drift away.", accent: "#2e6f6b",
    sections: [
      { title: "the short version", body: "you like clear plans, solid evidence, and a team you can count on. you make things steady, and people feel it. you take your time with decisions, prefer to make them with others, and are careful about risks that affect people who depend on you." },
      { title: "at your best", body: "grounded and generous. you make good decisions that last, and you notice who needs support. groups with you in them tend to stay together through hard stretches." },
      { title: "watch out for", body: "stability is great until it becomes the only goal. you may hold back changes that would actually help, or take on other people's stress without saying so. try one new thing a year, on purpose, and let yourself be the one who needs support sometimes." },
      { title: "your best match", body: "VBRI, the Prototyper. they ship the strange new thing and you make it solid enough to last, and they remind you that not everything needs a plan first." }
    ] }
};