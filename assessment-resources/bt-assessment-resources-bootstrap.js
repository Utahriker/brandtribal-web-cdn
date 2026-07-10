(function () {
  var root = document.getElementById("assessment");
  if (!root || root.dataset.btBootstrapped === "true") return;
  root.dataset.btBootstrapped = "true";

  var cfg = window.BTAssessmentConfig || {};
  var started = false;
  var loading = false;

  function loadStyle(url) {
    return new Promise(function (resolve, reject) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      link.onload = function () { resolve(); };
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  function loadScript(url) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = url;
      script.defer = true;
      script.onload = function () { resolve(); };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  function startAssessment() {
    if (started || loading) return;
    loading = true;
    root.classList.add("is-loading");
    var hint = document.getElementById("assessmentLoadHint");
    if (hint) hint.classList.remove("is-hidden");

    var version = cfg.version ? "?v=" + cfg.version : "";
    var cssUrl = cfg.cssUrl || root.dataset.cssUrl;
    var bridgeUrl = cfg.bridgeCssUrl || root.dataset.bridgeCssUrl;
    var jsUrl = cfg.jsUrl || root.dataset.jsUrl;
    var loads = [];

    if (cssUrl) loads.push(loadStyle(cssUrl + version));
    if (bridgeUrl) loads.push(loadStyle(bridgeUrl + version));

    Promise.all(loads)
      .then(function () { return jsUrl ? loadScript(jsUrl + version) : Promise.resolve(); })
      .then(function () {
        started = true;
        loading = false;
        root.classList.remove("is-loading");
        if (typeof window.BTAssessmentInit === "function") {
          window.BTAssessmentInit();
          return;
        }
        if (hint) {
          hint.textContent = "Assessment script not loaded. Refresh the page and try again.";
          hint.classList.remove("is-hidden");
        }
      })
      .catch(function () {
        loading = false;
        root.classList.remove("is-loading");
        if (hint) {
          hint.textContent = "Could not load assessment. Refresh and try again.";
          hint.classList.remove("is-hidden");
        }
      });
  }

  root.addEventListener(
    "click",
    function (event) {
      if (started) return;
      if (!root.contains(event.target)) return;
      event.stopImmediatePropagation();
      startAssessment();
    },
    true
  );
})();
