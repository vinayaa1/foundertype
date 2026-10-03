/* all dom work lives here. it only renders what it is given. */
window.Quiz = window.Quiz || {};

Quiz.ui = (function () {
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  // set an image src; the image hides itself if the file doesn't exist
  function setImage(img, src) {
    if (!img) return;
    if (!img.dataset.bound) {
      img.addEventListener("error", () => { img.style.display = "none"; });
      img.addEventListener("load", () => { img.style.display = ""; });
      img.dataset.bound = "1";
    }
    if (!src) { img.style.display = "none"; return; }
    img.src = src;
  }

  function show(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("on"));
    $(id).classList.add("on");
    window.scrollTo({ top: 0 });
  }

  function renderStart(cfg, axes, hasLast) {
    $("title").innerHTML = "";
    cfg.siteTitle.split("\n").forEach((line, i) => {
      if (i) $("title").appendChild(document.createElement("br"));
      $("title").appendChild(document.createTextNode(line));
    });
    $("intro").textContent = cfg.intro;
    document.title = cfg.siteTitle.replace(/\n/g, " ");
    setImage($("logo"), cfg.logo);
    setImage($("hero"), cfg.hero);

    const box = $("axes-preview");
    box.innerHTML = "";
    axes.forEach(ax => box.appendChild(el("span", "", ax.names.join(" / "))));
    $("last").hidden = !hasLast;
  }

  function renderQuestion(q, index, total, picked, onChoose) {
    $("qtext").textContent = q.text;
    $("count").textContent = (index + 1) + "/" + total;
    $("fill").style.width = (index / total * 100) + "%";
    $("back").disabled = index === 0;

    const box = $("opts");
    box.innerHTML = "";
    ["a", "b"].forEach(k => {
      const b = el("button", "opt" + (picked === k ? " picked" : ""), q[k]);
      b.onclick = () => onChoose(k);
      box.appendChild(b);
    });
  }

  function fillProgress() { $("fill").style.width = "100%"; }

  // one card per section. body can be a string or array, items makes a list.
  function renderSections(sections) {
    const box = $("sections");
    box.innerHTML = "";
    (sections || []).forEach(s => {
      const card = el("div", "card");
      card.appendChild(el("h2", "", s.title || ""));
      const paras = Array.isArray(s.body) ? s.body : (s.body ? [s.body] : []);
      paras.forEach(p => card.appendChild(el("p", "", p)));
      if (s.items && s.items.length) {
        const ul = el("ul");
        s.items.forEach(i => ul.appendChild(el("li", "", i)));
        card.appendChild(ul);
      }
      if (s.image) {
        const img = el("img");
        img.alt = "";
        setImage(img, s.image);
        card.appendChild(img);
      }
      box.appendChild(card);
    });
  }

  function renderMeters(code, tally, axes, side) {
    const box = $("meters");
    box.innerHTML = "";
    $("meters-card").hidden = !tally;
    if (!tally) return;
    axes.forEach((ax, i) => {
      const s = side(code, axes, i);
      const n = tally[i][s];
      const row = el("div", "meter");

      const top = el("div", "lbl");
      top.appendChild(el("b", "", ax.names[s]));
      top.appendChild(el("span", "", n + " of 3"));

      const track = el("div", "track");
      const fill = el("div", "fill");
      fill.style.width = (n / 3 * 100) + "%";
      fill.style[s === 0 ? "left" : "right"] = "0";
      track.appendChild(fill);

      const ends = el("div", "lbl ends");
      ends.appendChild(el("span", "", ax.names[0]));
      ends.appendChild(el("span", "", ax.names[1]));

      row.append(top, track, ends);
      box.appendChild(row);
    });
  }

  function renderResult(code, type, imageSrc, tally, axes, side) {
    $("code").textContent = code.split("").join(" ");
    $("name").textContent = type.name;
    $("tag").textContent = type.tag || "";
    $("result").style.setProperty("--accent", type.accent || "");
    setImage($("typeimg"), imageSrc);
    renderSections(type.sections);
    renderMeters(code, tally, axes, side);
    $("toast").textContent = "";
    show("result");
  }

  function renderGrid(types, onPick) {
    const g = $("grid");
    g.innerHTML = "";
    Object.keys(types).forEach(code => {
      const a = el("a");
      a.href = "#" + code;
      a.appendChild(el("small", "", code));
      a.appendChild(document.createTextNode(types[code].name));
      a.onclick = (e) => { e.preventDefault(); onPick(code); };
      g.appendChild(a);
    });
  }

  function toast(msg) {
    $("toast").textContent = msg;
    setTimeout(() => { $("toast").textContent = ""; }, 2500);
  }

  return { $, show, renderStart, renderQuestion, fillProgress, renderResult, renderGrid, toast };
})();
