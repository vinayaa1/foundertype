window.Quiz = window.Quiz || {};

Quiz.router = {
  get() { return location.hash.replace("#", "").toUpperCase(); },
  // history.replaceState throws in sandboxed iframes, so fail quietly
  set(code) {
    try { history.replaceState(null, "", code ? "#" + code : location.pathname + location.search); } catch (e) {}
  }
};
