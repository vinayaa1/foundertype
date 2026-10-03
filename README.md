# how do you actually work

a 12-question, 16-type personality quiz. plain html, css, and javascript, so it runs on github pages with no build step.

## folders

- `index.html` page shell
- `css/style.css` all styling and colors (tokens at the top)
- `js/config.js` site title, intro text, asset paths
- `js/data/axes.js` the four traits and their letters
- `js/data/questions.js` the 12 questions
- `js/data/types.js` the 16 types and their descriptions
- `js/scoring.js` scoring logic
- `js/ui.js` rendering
- `js/app.js` ties it together
- `js/validate.js` warns in the console if the data is off
- `assets/` your images

## adding images

- `assets/logo.png` and `assets/hero.png` show on the start screen
- `assets/types/<code>.png` is the result image for each type, lowercase code, e.g. `vbri.png`
- to use a different file or format for one type, set `image: "assets/types/my-file.webp"` on that type
- missing images simply hide, nothing breaks

## editing a type

open `js/data/types.js`. each type has a `name`, a `tag`, and a list of `sections`. add, remove, or reorder sections freely:

    { title: "good matches", body: "short text here" }
    { title: "how you work", body: ["paragraph one", "paragraph two"] }
    { title: "tends to say", items: ["line one", "line two"] }
    { title: "your desk", body: "text", image: "assets/types/vbri-desk.png" }

optional per-type `accent: "#6aa6d1"` tints the code and meters.

## deploying

push this folder to a repo, then settings > pages > deploy from branch, root. open the browser console once after changes: if the data has a mistake (missing type, uneven questions) it will say so.
