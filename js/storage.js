/* remembers the last result. wrapped in try/catch because storage can be blocked. */
window.Quiz = window.Quiz || {};

Quiz.storage = {
  key: "quiz-last-result",
  save(code) { try { localStorage.setItem(this.key, code); } catch (e) {} },
  load() { try { return localStorage.getItem(this.key); } catch (e) { return null; } },
  clear() { try { localStorage.removeItem(this.key); } catch (e) {} }
};
