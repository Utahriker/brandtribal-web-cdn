(function () {
  var root = document.getElementById("assessment");
  if (!root || root.dataset.btBootstrapped === "true") return;
  root.dataset.btBootstrapped = "true";

  var started = false;

  function startAssessment() {
    if (started) return;
    started = true;
    root.classList.remove("is-loading");
    var hint = document.getElementById("assessmentLoadHint");
    if (hint) hint.classList.add("is-hidden");

    if (typeof window.BTAssessmentInit === "function") {
      window.BTAssessmentInit();
      return;
    }

    if (hint) {
      hint.textContent = "Assessment script not loaded. Refresh the page and try again.";
      hint.classList.remove("is-hidden");
    }
  }

  root.addEventListener(
    "click",
    function (event) {
      if (started) return;
      if (!root.contains(event.target)) return;
      if (event.target.closest("#finalCta a")) return;
      event.stopImmediatePropagation();
      startAssessment();
    },
    true
  );
})();
