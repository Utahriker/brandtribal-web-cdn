(function () {
  const TOPIC_IMAGES = {
    website: "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/652b8d1f79cbf4ed070239f0_Online-Digital-2xR.avif",
    brand: "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/652b8d1f79cbf4ed070239ec_Visual-Communications-2xR.avif",
    customer: "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/652b8d1f79cbf4ed070239f4_Social-Branding-Services-2xR.avif",
    readiness: "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/656078be033e32f5a3544371_Brand-Strategy-Visual.avif"
  };

  const ASSESSMENT = {
    topics: [
      {
        id: "website",
        iconSrc: "icons/Online-Digital.svg",
        imageSrc: TOPIC_IMAGES.website,
        title: "Website Effectiveness",
        description: "Evaluate how clearly your website communicates, builds trust and encourages enquiries.",
        resultFocus: "website communication and conversion",
        questions: [
          ["Can visitors quickly understand what your business does?", "Think about whether someone landing on your website for the first time can understand your services, audience and value within a few seconds."],
          ["Is your homepage message clear and focused?", "Consider whether your headline, supporting copy and primary action work together without creating confusion."],
          ["Does your website guide people toward the right next step?", "Look at whether calls to action, navigation and page structure help visitors move forward confidently."],
          ["Is your website easy to use on mobile?", "Consider readability, spacing, button size, loading experience and whether key information remains easy to access."],
          ["Does your website build trust before asking for action?", "Think about proof, examples, testimonials, process clarity, contact details and other confidence-building signals."],
          ["Can you update important content without friction?", "Consider whether your current website structure allows practical content updates as your business changes."]
        ],
        recommendationIndexes: [0, 0, 2, 2, 1, 2],
        recommendations: [
          ["Clarify your homepage message", "Make it easier for visitors to understand what you do, who you help and why it matters."],
          ["Strengthen trust signals", "Add proof, process clarity and practical examples that reduce uncertainty before enquiry."],
          ["Improve the path to action", "Review navigation, calls to action and page flow so people can move forward with less friction."]
        ]
      },
      {
        id: "brand",
        iconSrc: "icons/Brand-Assets.svg",
        imageSrc: TOPIC_IMAGES.brand,
        title: "Brand Alignment",
        description: "Assess how consistently your brand communicates its purpose, positioning and value.",
        resultFocus: "brand clarity and alignment",
        questions: [
          ["Can people clearly explain what your brand stands for?", "Consider whether your purpose, value and position are easy to understand internally and externally."],
          ["Is your messaging consistent across key touchpoints?", "Look at your website, proposals, social content, conversations and marketing material."],
          ["Do your services or offers feel clearly structured?", "Consider whether customers can quickly understand what you provide and how your offers fit together."],
          ["Does your visual identity still reflect the quality of the business?", "Think about logo use, colours, typography, imagery and overall presentation."],
          ["Is your brand meaningfully different from alternatives?", "Review whether your positioning gives people a clear reason to choose you."],
          ["Does your tone of voice feel consistent and recognisable?", "Consider whether your written communication sounds like the same business across channels."]
        ],
        recommendationIndexes: [0, 1, 0, 2, 0, 1],
        recommendations: [
          ["Refine your positioning", "Define who you serve, what you offer and why that value matters in clear language."],
          ["Build a messaging framework", "Create shared language that keeps your website, proposals and conversations aligned."],
          ["Review visual consistency", "Identify where colours, typography, imagery and layout may be weakening recognition or trust."]
        ]
      },
      {
        id: "customer",
        iconSrc: "icons/Assets-and-Campaign.svg",
        imageSrc: TOPIC_IMAGES.customer,
        title: "Customer Experience",
        description: "Review how customers interact with your business and identify opportunities to improve their journey.",
        resultFocus: "customer experience and decision-making",
        questions: [
          ["Is it easy for customers to know where to start?", "Consider whether first steps are obvious across your website, emails and enquiry pathways."],
          ["Do customers understand what happens after they enquire?", "Think about whether expectations, response times and next steps are clearly explained."],
          ["Are common questions answered before people contact you?", "Review whether your website and resources reduce uncertainty around process, timing, scope and cost."],
          ["Is your enquiry process simple and low-friction?", "Consider whether forms, contact details and booking pathways are easy to complete."],
          ["Does your communication feel helpful and consistent?", "Think about the experience people receive from first contact through to follow-up."],
          ["Are customer pain points reflected in your content?", "Review whether your content speaks to real questions, challenges and desired outcomes."]
        ],
        recommendationIndexes: [2, 0, 1, 2, 0, 1],
        recommendations: [
          ["Map the enquiry journey", "Identify what people need to know before, during and after they contact you."],
          ["Answer common questions earlier", "Use FAQs and helpful content to reduce uncertainty before enquiry."],
          ["Simplify the next step", "Make the first action clear, low-friction and easy to complete."]
        ]
      },
      {
        id: "readiness",
        iconSrc: "icons/brand-strategy.svg",
        imageSrc: TOPIC_IMAGES.readiness,
        title: "Business Readiness",
        description: "Understand how prepared your business is for sustainable growth and future opportunities.",
        resultFocus: "business readiness and growth clarity",
        questions: [
          ["Is your business clear on its next stage of growth?", "Consider whether priorities, goals and opportunities are clearly defined."],
          ["Does your website support current business goals?", "Think about whether your website helps generate the right enquiries and supports the work you want more of."],
          ["Are your services packaged or explained clearly enough?", "Review whether customers can understand your offers without needing a long explanation."],
          ["Do you have the right materials to support sales and communication?", "Consider proposals, capability statements, presentations, landing pages and other practical assets."],
          ["Can your current systems scale without creating confusion?", "Think about content management, workflows, brand assets and repeatable communication."],
          ["Are decisions guided by strategy rather than guesswork?", "Review whether brand, website and marketing decisions are connected to clear priorities."]
        ],
        recommendationIndexes: [0, 1, 0, 2, 2, 0],
        recommendations: [
          ["Prioritise the highest-value gaps", "Separate urgent fixes from strategic improvements so effort goes where it matters most."],
          ["Align website and business goals", "Make sure structure, content and calls to action support the enquiries you actually want."],
          ["Create practical communication assets", "Build reusable materials that support sales, proposals and everyday customer communication."]
        ]
      }
    ],
    answers: [
      { label: "Yes, definitely", score: 100 },
      { label: "Mostly", score: 75 },
      { label: "Somewhat", score: 50 },
      { label: "Not yet", score: 25 },
      { label: "I'm not sure", score: 40 }
    ]
  };

  const PRIORITY_ICONS = [
    { src: "icons/Purpose-Mapping.svg", label: "Purpose Mapping" },
    { src: "icons/target.svg", label: "Strategic Target" },
    { src: "icons/results.svg", label: "Results" }
  ];

  const STEP_OPTION_ICONS = [
    "icons/audit-full.svg",
    "icons/Services.svg",
    "icons/where-you-at.svg"
  ];

  const LINKS = {
    audit: "https://www.brandtribal.com.au/request-an-audit",
    services: "https://www.brandtribal.com.au/services",
    fullHealthCheck: "https://www.brandtribal.com.au/business-health-check"
  };

  const state = { screen: "selector", topic: null, questionIndex: 0, answers: {} };
  let els = {};
  let eventsBound = false;

  const BRAND_ICON_ASSETS = {
    "icons/Online-Digital.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69e6bd8452226fee0ee2a1bc_Online-Digital.svg",
    "icons/Brand-Assets.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69fc4c347aff253838d69317_Brand%20Assets.svg",
    "icons/Assets-and-Campaign.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69eaf42ed0ae583b8eed3a67_Assets-and-Campaign.svg",
    "icons/brand-strategy.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69e6be8574369b30ee5dffd2_brand-strategy.svg",
    "icons/Purpose-Mapping.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69f2de1b23fd0efd9da37cc7_Purpose%20Mapping.svg",
    "icons/target.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69f71322e5fd78e49098f6c5_target.svg",
    "icons/results.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/6a33bc2ea8add156df126dde_results.svg",
    "icons/audit-full.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69f15ccb6278d1320832c908_audit-full.svg",
    "icons/Services.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69e6c04cefb483b6c9d92118_Services.svg",
    "icons/where-you-at.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/6a33bc0dce855a223f762f05_where-you-at.svg"
  };

  function resolveAsset(path) {
    if (!path || path.startsWith("http")) return path;
    const cfg = window.BTAssessmentConfig || {};
    if (cfg.assets && cfg.assets[path]) return cfg.assets[path];
    if (BRAND_ICON_ASSETS[path]) return BRAND_ICON_ASSETS[path];
    const base = cfg.iconBase || "";
    return base ? `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}` : path;
  }

  function getElements() {
    return {
      stepLabel: document.getElementById("stepLabel"),
      topicLabel: document.getElementById("topicLabel"),
      screenTitle: document.getElementById("screenTitle"),
      screenCopy: document.getElementById("screenCopy"),
      body: document.getElementById("screenBody"),
      back: document.getElementById("backBtn"),
      next: document.getElementById("nextBtn"),
      progressPrompt: document.getElementById("progressPrompt"),
      mainProgressBar: document.getElementById("mainProgressBar"),
      mainProgress: document.getElementById("mainProgress"),
      mainProgressText: document.getElementById("mainProgressText"),
      finalCta: document.getElementById("finalCta")
    };
  }

  function arrowIcon() { return `<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h13M13 6l6 6-6 6"/></svg></span>`; }
  function setButtonLabel(button, label, icon = false) { button.innerHTML = icon ? `<span>${label}</span>${arrowIcon()}` : `<span>${label}</span>`; }
  function fullHealthCheckUrl() {
    const { hostname, port, protocol } = window.location;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      const devPort = port === "5500" ? "5501" : port;
      const host = `${protocol}//${hostname}${devPort ? `:${devPort}` : ""}`;
      return `${host}/assessment-resources/`;
    }
    return LINKS.fullHealthCheck;
  }
  function bandKey(score) {
    if (score >= 85) return "strong";
    if (score >= 65) return "good";
    if (score >= 45) return "developing";
    return "attention";
  }
  function renderScoreRing(score, ringId = "scoreRing") {
    const gradId = `scoreGradient-${ringId}`;
    return `
    <div class="score-wrap">
      <svg class="score-ring" viewBox="0 0 120 120" aria-hidden="true">
        <defs><linearGradient id="${gradId}" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#d91e63"/><stop offset="100%" stop-color="#5d2e8c"/></linearGradient></defs>
        <circle class="ring-bg" cx="60" cy="60" r="52"></circle>
        <circle class="ring-fill" id="${ringId}" cx="60" cy="60" r="52" stroke="url(#${gradId})"></circle>
      </svg>
      <div class="score-core">
        <div><div class="score-number">${score}<span>%</span></div><div class="score-label">out of 100</div></div>
      </div>
    </div>`;
  }
  function animateScoreRing(score, ringId = "scoreRing") {
    requestAnimationFrame(() => {
      const circle = document.getElementById(ringId);
      if (!circle) return;
      const circumference = 2 * Math.PI * 52;
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference - (score / 100) * circumference;
    });
  }
  function renderResultStatusHead(score, band) {
    const key = bandKey(score);
    return `
    <div class="topic-result-head">
      ${renderScoreRing(score)}
      <div class="result-badge-wrap result-badge-wrap--${key}">
        <p class="result-badge">${band.badge}</p>
        <p class="result-badge-hint">${band.badgeHint}</p>
      </div>
      <div class="result-headline result-headline--${key}">
        ${resultBandIcon(key)}
        <h3 class="result-title">${band.title}</h3>
      </div>
      <div class="topic-result-divider" aria-hidden="true"></div>
    </div>`;
  }
  function resultBandIcon(key) {
    const icons = {
      strong: `<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M8 12.5 10.5 15 16 9"/></svg>`,
      good: `<svg viewBox="0 0 24 24" focusable="false"><path d="M4 17h16"/><path d="M7 14l4-4 3 3 5-6"/><path d="M17 7h3v3"/></svg>`,
      developing: `<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 15.5h.01"/></svg>`,
      attention: `<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4 20 19H4L12 4z"/><path d="M12 10v4M12 16h.01"/></svg>`
    };
    return `<span class="result-headline-icon result-headline-icon--${key}" aria-hidden="true">${icons[key] ?? icons.developing}</span>`;
  }
  function stepOptionIcon(src) {
    return `<span class="step-option-icon" aria-hidden="true"><img src="${resolveAsset(src)}" alt="" width="48" height="48" decoding="async"></span>`;
  }
  function getTopic() { return ASSESSMENT.topics.find((topic) => topic.id === state.topic); }
  function setProgress(value) { const percent = Math.max(0, Math.min(100, Math.round(value))); els.mainProgressBar?.classList.remove("is-hidden"); els.progressPrompt?.classList.add("is-hidden"); els.mainProgress.style.width = percent + "%"; els.mainProgressText.textContent = percent + "%"; }
  function setSelectorProgress() {
    if (state.topic) {
      setProgress(10);
    } else {
      els.mainProgressBar?.classList.add("is-hidden");
      els.progressPrompt?.classList.remove("is-hidden");
    }
  }
  function selectedAnswerForQuestion() { return state.answers[state.topic]?.[state.questionIndex]; }
  function setAnswer(value) { if (!state.answers[state.topic]) state.answers[state.topic] = {}; state.answers[state.topic][state.questionIndex] = value; if (state.screen === "questions" && isMobileScrollViewport()) pendingScroll = "answer-footer"; render(); }
  function calculateScore() {
    const topic = getTopic();
    const answers = state.answers[state.topic] || {};
    const values = topic.questions.map((_, index) => answers[index]).filter((value) => value !== undefined && value !== null);
    if (!values.length) return 0;
    const sum = values.reduce((acc, value) => acc + value, 0);
    return Math.round(sum / values.length);
  }
  function getScoreBand(score) {
    if (score >= 85) return { title: "Strong foundations", badge: "Clear and confident", badgeHint: "Your answers suggest this area is communicating clearly and consistently.", copy: "Your answers suggest this area is working well. The opportunity now is to maintain consistency and look for targeted improvements that support future growth." };
    if (score >= 65) return { title: "Good momentum", badge: "Room to refine", badgeHint: "The basics are working, but small gaps may still create friction.", copy: "You have solid foundations in place, but a few areas may be creating friction. Focused improvements could make your communication clearer and more effective." };
    if (score >= 45) return { title: "Developing", badge: "Direction still needed", badgeHint: "Some elements work, but mixed signals may leave people uncertain.", copy: "You are making progress, but some gaps may be affecting clarity, trust or confidence. This is a good time to prioritise what needs attention first." };
    return { title: "Needs attention", badge: "Clarity gap identified", badgeHint: "Answers suggest people may struggle to understand, trust, or act confidently here.", copy: "This area may be holding the business back. A structured review would help identify what is creating confusion and where improvement should begin." };
  }
  function scoreQuestionResults(topic, topicAnswers) {
    return topic.questions.map((question, index) => ({
      index,
      title: question[0],
      score: topicAnswers[index] ?? null,
      recommendationIndex: topic.recommendationIndexes[index]
    })).filter((item) => item.score !== null && item.score !== undefined);
  }
  function compareByScoreThenIndex(a, b, direction) {
    if (a.score !== b.score) return direction === "desc" ? b.score - a.score : a.score - b.score;
    return a.index - b.index;
  }
  function pickQuestion(candidates, direction, excludeIndex = null) {
    const pool = excludeIndex === null
      ? candidates
      : candidates.filter((item) => item.index !== excludeIndex);
    if (!pool.length) return null;
    return [...pool].sort((a, b) => compareByScoreThenIndex(a, b, direction))[0];
  }
  function analyzeTopicResults() {
    const topic = getTopic();
    const scored = scoreQuestionResults(topic, state.answers[state.topic] || {});
    if (!scored.length) {
      return {
        strongest: null,
        weakest: null,
        allEqual: false,
        recommended: topic.recommendations[0],
        insightCopy: {
          strongest: "This appears to be one of the clearer areas based on your answers.",
          opportunity: "This may be the best place to focus first for practical improvement."
        }
      };
    }
    const allEqual = scored.every((item) => item.score === scored[0].score);
    const strongest = pickQuestion(scored, "desc");
    const weakest = pickQuestion(scored, "asc", strongest.index);
    const recommended = topic.recommendations[weakest.recommendationIndex];
    const insightCopy = allEqual
      ? {
          strongest: "Your answers were similar across questions — this is a useful starting signal to build from.",
          opportunity: "Because scores were consistent, this is a practical place to begin focused improvement."
        }
      : {
          strongest: "This appears to be one of the clearer areas based on your answers.",
          opportunity: "This may be the best place to focus first for practical improvement."
        };
    return { strongest, weakest, allEqual, recommended, insightCopy };
  }
  function getRankedRecommendations(topic) {
    const topicAnswers = state.answers[state.topic] || {};
    const grouped = new Map();
    topic.questions.forEach((_, index) => {
      const score = topicAnswers[index];
      if (score === undefined || score === null) return;
      const recommendationIndex = topic.recommendationIndexes[index];
      const existing = grouped.get(recommendationIndex);
      if (!existing || score < existing.score || (score === existing.score && index < existing.questionIndex)) {
        grouped.set(recommendationIndex, { recommendationIndex, score, questionIndex: index });
      }
    });
    return [...grouped.values()]
      .sort((a, b) => a.score - b.score || a.questionIndex - b.questionIndex || a.recommendationIndex - b.recommendationIndex)
      .map((item) => topic.recommendations[item.recommendationIndex]);
  }
  const BRAND_EYEBROW = "Business Health Check";
  function setStepMeta(secondaryLine) {
    els.stepLabel.textContent = BRAND_EYEBROW;
    els.topicLabel.textContent = secondaryLine;
  }
  function renderSelector() {
    state.screen = "selector"; els.finalCta.classList.add("is-hidden"); setStepMeta("Step 1 of 5"); els.screenTitle.textContent = "Where would you like to start?"; els.screenCopy.textContent = "Choose the area you would like to assess. In just a few minutes you’ll receive practical insights and recommended next steps based on your responses."; setSelectorProgress();
    els.body.innerHTML = `<div class="option-grid">${ASSESSMENT.topics.map((topic) => `<button class="option-card ${state.topic === topic.id ? "is-selected" : ""}" type="button" data-topic="${topic.id}"><span class="priority-icon" aria-hidden="true"><img src="${resolveAsset(topic.iconSrc)}" alt="" width="48" height="48" decoding="async"></span><span><strong>${topic.title}</strong><span>${topic.description}</span></span></button>`).join("")}</div><div class="error is-hidden" id="selectorError">Please choose an assessment area before continuing.</div>`;
    els.body.querySelectorAll("[data-topic]").forEach((button) => button.addEventListener("click", () => { state.topic = button.dataset.topic; if (!state.answers[state.topic]) state.answers[state.topic] = {}; if (isCompactScrollViewport()) pendingScroll = "selector-footer"; render(); }));
    els.back.classList.add("is-hidden"); setButtonLabel(els.next, "Start Assessment", true); els.next.disabled = false;
  }
  function renderQuestion() {
    state.screen = "questions"; const topic = getTopic(); const total = topic.questions.length; const current = topic.questions[state.questionIndex]; const stepProgress = 10 + (state.questionIndex / total) * 35;
    const questionSegments = Array.from({ length: total }, (_, index) => `<span class="progress-segment ${index <= state.questionIndex ? "is-active" : ""}" aria-hidden="true"></span>`).join("");
    els.finalCta.classList.add("is-hidden"); setStepMeta(`Step 2 of 5 · Question ${state.questionIndex + 1} of ${total}`); els.screenTitle.textContent = "Answer a few practical questions"; els.screenCopy.textContent = topic.description; setProgress(stepProgress);
    els.body.innerHTML = `<div class="question-kicker"><span class="question-kicker-topic">${topic.title}</span> · Question ${state.questionIndex + 1} of ${total}</div><div class="progress question-progress" aria-label="Question ${state.questionIndex + 1} of ${total}"><div class="progress-track progress-segments">${questionSegments}</div></div><h3 class="question-title">${current[0]}</h3><p class="question-description">${current[1]}</p><div class="answers">${ASSESSMENT.answers.map((answer) => `<button class="answer-card ${selectedAnswerForQuestion() === answer.score ? "is-selected" : ""}" type="button" data-score="${answer.score}"><span class="answer-dot"></span><span><strong>${answer.label}</strong></span></button>`).join("")}</div><div class="error is-hidden" id="answerError">Please choose an answer before continuing.</div>`;
    els.body.querySelectorAll("[data-score]").forEach((button) => button.addEventListener("click", () => setAnswer(Number(button.dataset.score))));
    els.back.classList.remove("is-hidden");
    const isLastQuestion = state.questionIndex === total - 1;
    const hasAnswer = selectedAnswerForQuestion() !== undefined;
    setButtonLabel(els.next, isLastQuestion && hasAnswer ? "View Result" : "Next", true);
    els.next.disabled = false;
  }
  function renderResult() {
    state.screen = "result"; const topic = getTopic(); const score = calculateScore(); const band = getScoreBand(score); const { strongest, weakest, recommended, insightCopy } = analyzeTopicResults();
    els.finalCta.classList.add("is-hidden"); setStepMeta(`Step 3 of 5 · ${topic.title}`); els.screenTitle.textContent = "Your assessment snapshot"; els.screenCopy.textContent = `Your result reflects your current ${topic.resultFocus}.`; setProgress(65);
    els.body.innerHTML = `
    <div class="topic-complete-grid">
      ${renderResultStatusHead(score, band)}
      <div class="topic-result-body">
        <p class="result-copy">${band.copy}</p>
        <p class="result-handoff-note"><strong>One area covered.</strong> The full health check assesses all four — website, brand, customer experience and business readiness. You&rsquo;ll find the link on <strong>Step 5 of 5</strong>.</p>
        <div class="insight-grid">
          <div class="insight-card"><small>Strongest signal</small><strong>${strongest.title}</strong><p>${insightCopy.strongest}</p></div>
          <div class="insight-card"><small>Largest opportunity</small><strong>${weakest.title}</strong><p>${insightCopy.opportunity}</p></div>
          <div class="insight-card"><small>Recommended focus</small><strong>${recommended[0]}</strong><p>${recommended[1]}</p></div>
        </div>
      </div>
    </div>`;
    animateScoreRing(score);
    els.back.classList.remove("is-hidden"); setButtonLabel(els.next, "View Recommendations", true); els.next.disabled = false;
  }
  function renderRecommendations() {
    state.screen = "recommendations"; const topic = getTopic(); const rankedRecommendations = getRankedRecommendations(topic); els.finalCta.classList.add("is-hidden"); setStepMeta(`Step 4 of 5 · ${topic.title}`); els.screenTitle.textContent = "Your recommended next steps"; els.screenCopy.textContent = "Based on your result, these are the areas that may create the greatest improvement."; setProgress(82);
    els.body.innerHTML = `
    <div class="priority-layout">
      <div class="priority-list">${rankedRecommendations.map((item, index) => `<article class="priority-card"><span class="priority-icon" aria-hidden="true"><img src="${resolveAsset(PRIORITY_ICONS[index].src)}" alt="" width="48" height="48" decoding="async"></span><div><small>Priority ${index + 1}</small><strong>${item[0]}</strong><p>${item[1]}</p></div></article>`).join("")}</div>
      <div class="priority-visual" aria-hidden="true"><div class="priority-visual-media"><img src="${topic.imageSrc}" alt="" width="480" height="480" decoding="async"></div></div>
    </div>`;
    els.back.classList.remove("is-hidden"); setButtonLabel(els.next, "See Next Steps", true); els.next.disabled = false;
  }
  function renderCta() {
    state.screen = "cta"; const topic = getTopic(); setStepMeta(`Step 5 of 5 · ${topic.title}`); els.screenTitle.textContent = "Turn this into a clear action plan"; els.screenCopy.textContent = "Your assessment is a useful starting point. A focused review can help confirm priorities and identify the most practical next step."; setProgress(100);
    els.body.innerHTML = `
    <div class="insight-grid step-options step-options--three">
      <div class="insight-card step-option-card">
        <div class="step-option-main">
          ${stepOptionIcon(STEP_OPTION_ICONS[0])}
          <div><small>Option one</small><strong>Request an audit</strong><p>Get a practical review of your brand, website or customer experience.</p></div>
        </div>
        <a class="button is-secondary is-resource is-icon is-small w-button insight-card-action" href="${LINKS.audit}"><span>Request an Audit</span>${arrowIcon()}</a>
      </div>
      <div class="insight-card step-option-card">
        <div class="step-option-main">
          ${stepOptionIcon(STEP_OPTION_ICONS[1])}
          <div><small>Option two</small><strong>Explore services</strong><p>See how strategy, websites and design support clearer communication.</p></div>
        </div>
        <a class="button is-secondary is-resource is-icon is-small w-button insight-card-action" href="${LINKS.services}"><span>Explore Services</span>${arrowIcon()}</a>
      </div>
      <div class="insight-card step-option-card step-option-card--full-check">
        <div class="step-option-main">
          ${stepOptionIcon(STEP_OPTION_ICONS[2])}
          <div><small>Option three</small><strong>Complete the full health check</strong><p>Assess all four areas and unlock a comprehensive breakdown with scores, insights and next steps.</p></div>
        </div>
        <a class="button is-secondary is-resource is-icon is-small w-button insight-card-action" href="${fullHealthCheckUrl()}"><span>Start full check</span>${arrowIcon()}</a>
      </div>
    </div>`;
    els.finalCta.classList.remove("is-hidden"); els.back.classList.remove("is-hidden"); setButtonLabel(els.next, "Restart Assessment"); els.next.disabled = false;
  }
  function applyStepMetaLabelStyles() {
    els.stepLabel?.classList.add("is-script-eyebrow");
    els.topicLabel?.classList.remove("is-script-eyebrow");
  }
  function render() {
    if (state.screen === "selector") renderSelector();
    if (state.screen === "questions") renderQuestion();
    if (state.screen === "result") renderResult();
    if (state.screen === "recommendations") renderRecommendations();
    if (state.screen === "cta") renderCta();
    applyStepMetaLabelStyles();
    if (pendingScroll === "question" && state.screen === "questions") {
      pendingScroll = null;
      scrollToQuestionView();
    } else if (pendingScroll === "answer-footer" && state.screen === "questions") {
      pendingScroll = null;
      scrollToQuestionFooter();
    } else if (pendingScroll === "selector-footer" && state.screen === "selector") {
      pendingScroll = null;
      scrollToAssessmentFooter();
    } else if (pendingScroll === "step" && (state.screen === "result" || state.screen === "recommendations" || state.screen === "cta" || state.screen === "selector")) {
      pendingScroll = null;
      scrollToAssessmentStep();
    }
  }
  function showError(id) { const error = document.getElementById(id); if (error) error.classList.remove("is-hidden"); }

  let pendingScroll = null;
  function isMobileScrollViewport() { return window.matchMedia("(max-width: 767px)").matches; }
  function isCompactScrollViewport() { return window.matchMedia("(max-width: 991px)").matches; }
  function getStickyHeaderOffset() {
    const selectors = [".w-nav", '[class*="navbar"]', "header.w-nav", ".navbar5_component"];
    let offset = 0;
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        const style = window.getComputedStyle(element);
        if (style.position !== "fixed" && style.position !== "sticky") return;
        const rect = element.getBoundingClientRect();
        if (rect.height <= 0) return;
        if (style.position === "fixed" || rect.top <= 0) {
          offset = Math.max(offset, rect.bottom);
        }
      });
    });
    return offset > 0 ? offset + 16 : 80;
  }
  function scrollIntoAssessmentTarget(target, options = { behavior: "smooth", block: "start" }) {
    if (!target) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (isCompactScrollViewport()) {
          const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getStickyHeaderOffset());
          window.scrollTo({ top, left: 0, behavior: options.behavior || "smooth" });
          return;
        }
        target.scrollIntoView(options);
      });
    });
  }
  function scrollToQuestionView() {
    if (!isMobileScrollViewport()) return;
    const target = els.body?.querySelector(".question-kicker") || els.body?.querySelector(".question-title");
    scrollIntoAssessmentTarget(target);
  }
  function scrollToQuestionFooter() {
    if (!isMobileScrollViewport()) return;
    scrollToAssessmentFooter();
  }
  function scrollToAssessmentFooter() {
    if (!isCompactScrollViewport()) return;
    const target = document.getElementById("screenFooter")
      || document.querySelector("#assessment .assessment-footer")
      || document.getElementById("nextBtn");
    scrollIntoAssessmentTarget(target, { behavior: "smooth", block: "end" });
  }
  function scrollToAssessmentStep() {
    if (!isCompactScrollViewport()) return;
    const target = document.querySelector("#assessment .step-meta")
      || document.querySelector("#assessment div:has(> #stepLabel)")
      || document.querySelector("#assessment .assessment-shell.assessment-card")
      || document.querySelector("#assessment .assessment-shell")
      || document.querySelector("#assessment div:has(> #screenBody):has(> #screenFooter):not(.assessment-shell *)")
      || document.querySelector("#assessment .assessment-header")
      || document.querySelector("#assessment div:has(> #screenTitle)")
      || document.getElementById("assessment");
    scrollIntoAssessmentTarget(target);
  }

  function bindEvents() {
    if (eventsBound) return;
    eventsBound = true;
    els.next.addEventListener("click", (event) => {
      event.preventDefault();
      if (state.screen === "selector") { if (!state.topic) return showError("selectorError"); state.questionIndex = 0; state.screen = "questions"; pendingScroll = "question"; return render(); }
      if (state.screen === "questions") { const topic = getTopic(); if (selectedAnswerForQuestion() === undefined) return showError("answerError"); if (state.questionIndex < topic.questions.length - 1) { state.questionIndex += 1; pendingScroll = "question"; return render(); } state.screen = "result"; pendingScroll = "step"; return render(); }
      if (state.screen === "result") { state.screen = "recommendations"; pendingScroll = "step"; return render(); }
      if (state.screen === "recommendations") { state.screen = "cta"; pendingScroll = "step"; return render(); }
      if (state.screen === "cta") { state.screen = "selector"; state.topic = null; state.questionIndex = 0; state.answers = {}; if (isCompactScrollViewport()) pendingScroll = "step"; return render(); }
    });
    els.back.addEventListener("click", (event) => {
      event.preventDefault();
      if (state.screen === "questions") { if (state.questionIndex > 0) { state.questionIndex -= 1; pendingScroll = "question"; } else state.screen = "selector"; return render(); }
      if (state.screen === "result") { state.screen = "questions"; state.questionIndex = getTopic().questions.length - 1; pendingScroll = "question"; return render(); }
      if (state.screen === "recommendations") { state.screen = "result"; pendingScroll = "step"; return render(); }
      if (state.screen === "cta") { state.screen = "recommendations"; pendingScroll = "step"; return render(); }
    });
  }

  function ensureShellClasses() {
    const body = document.getElementById("screenBody");
    const footer = document.getElementById("screenFooter");
    const card = body?.parentElement;
    if (!card || !footer || footer.parentElement !== card) return;
    card.classList.add("assessment-card", "assessment-shell");
  }

  window.BTAssessmentInit = function () {
    ensureShellClasses();
    els = getElements();
    if (!els.body || !els.next || !els.back) return;
    document.getElementById("assessmentLoadHint")?.classList.add("is-hidden");
    els.mainProgressBar?.classList.add("is-hidden");
    els.finalCta?.classList.add("is-hidden");
    bindEvents();
    render();
  };

  const cfg = window.BTAssessmentConfig || {};
  const root = document.getElementById("assessment");
  const lazy =
    cfg.lazy === true ||
    (cfg.lazy !== false && root && root.dataset.lazyLoad === "true");
  if (!lazy) {
    ensureShellClasses();
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", window.BTAssessmentInit);
    } else {
      window.BTAssessmentInit();
    }
  }
})();
