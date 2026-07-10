const STORAGE_KEY = "brandtribalResourcesHealthCheck";
const SESSION_KEY = "brandtribalResourcesHealthCheckSession";
const SHARE_SCORE_VALUES = [100, 75, 50, 25, 40];
const SHARE_VERSION = "1";
const BHC_PAGE_PATH = "/business-health-check";

const BRAND_ICON_ASSETS = {
  "icons/Online-Digital.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69e6bd8452226fee0ee2a1bc_Online-Digital.svg",
  "icons/Brand-Assets.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69fc4c347aff253838d69317_Brand%20Assets.svg",
  "icons/Assets-and-Campaign.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69eaf42ed0ae583b8eed3a67_Assets-and-Campaign.svg",
  "icons/brand-strategy.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69e6be8574369b30ee5dffd2_brand-strategy.svg",
  "icons/Purpose-Mapping.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69f2de1b23fd0efd9da37cc7_Purpose%20Mapping.svg",
  "icons/target.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/69f71322e5fd78e49098f6c5_target.svg",
  "icons/results.svg": "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/6a33bc2ea8add156df126dde_results.svg"
};

function resolveAsset(path) {
  if (!path || path.startsWith("http")) return path;
  const cfg = window.BTAssessmentConfig || {};
  if (cfg.assets && cfg.assets[path]) return cfg.assets[path];
  if (BRAND_ICON_ASSETS[path]) return BRAND_ICON_ASSETS[path];
  const base = cfg.iconBase || "";
  return base ? `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}` : path;
}

const DIMENSION_COLORS = ["green", "purple", "blue", "yellow", "orange", "cerise"];

const LINKS = {
  audit: "https://www.brandtribal.com.au/request-an-audit",
  services: "https://www.brandtribal.com.au/services"
};

const PRACTICAL_TOOLS = {
  purposeMapping: {
    label: "Purpose Mapping Board",
    href: "https://cdn.prod.website-files.com/672d73f4c9614f13fca851f9/6761016c3a79984bb207a7e1_Pupose-Mapping-Board.pdf"
  },
  swot: {
    label: "SWOT Analysis",
    href: "https://cdn.prod.website-files.com/672d73f4c9614f13fca851f9/69b0d0965d5508949eb1d1f0_SWOT-Analysis.pdf"
  },
  goldenCircle: {
    label: "Golden Circle Worksheet",
    href: "https://cdn.prod.website-files.com/672d73f4c9614f13fca851f9/676102c1be9aa0e6d8b102ca_Golden-Circle.pdf"
  },
  audiencePersona: {
    label: "Audience Persona",
    href: "https://cdn.prod.website-files.com/672d73f4c9614f13fca851f9/6760f6532de28da9dd8e9149_Audience-Persona.pdf"
  },
  brandStory: {
    label: "Brand Story",
    href: "https://cdn.prod.website-files.com/672d73f4c9614f13fca851f9/676100f46a8a60e7eccb69a6_Craft-Your-Brand-Story.pdf"
  },
  competitorLandscape: {
    label: "Competitor Landscape",
    href: "https://cdn.prod.website-files.com/672d73f4c9614f13fca851f9/6760ff880001ff3353392bae_Competitor-Landscape.pdf"
  }
};

const RECOMMENDATION_ACTIONS = {
  website: ["goldenCircle", null, "audiencePersona"],
  brand: ["competitorLandscape", "brandStory", "audit"],
  customer: ["audit", null, null],
  readiness: ["swot", "purposeMapping", "brandStory"]
};

const ASSESSMENT = {
  topics: [
    {
      id: "website",
      shortTitle: "Website",
      iconSrc: "icons/Online-Digital.svg",
      title: "Website Effectiveness",
      description: "Evaluate how clearly your website communicates, builds trust and encourages enquiries.",
      resultFocus: "website communication and conversion",
      dimensions: ["Clarity", "Messaging", "Conversion", "User Experience", "Trust", "Content"],
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
      shortTitle: "Brand",
      iconSrc: "icons/Brand-Assets.svg",
      title: "Brand Alignment",
      description: "Assess how consistently your brand communicates its purpose, positioning and value.",
      resultFocus: "brand clarity and alignment",
      dimensions: ["Positioning", "Messaging", "Structure", "Visual Identity", "Differentiation", "Tone of Voice"],
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
      shortTitle: "Customer",
      iconSrc: "icons/Assets-and-Campaign.svg",
      title: "Customer Experience",
      description: "Review how customers interact with your business and identify opportunities to improve their journey.",
      resultFocus: "customer experience and decision-making",
      dimensions: ["Starting Point", "Expectations", "Questions", "Enquiry", "Communication", "Content"],
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
      shortTitle: "Business",
      iconSrc: "icons/brand-strategy.svg",
      title: "Business Readiness",
      description: "Understand how prepared your business is for sustainable growth and future opportunities.",
      resultFocus: "business readiness and growth clarity",
      dimensions: ["Direction", "Website Fit", "Offer Clarity", "Sales Assets", "Systems", "Strategy"],
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

const defaultProgress = { completed: {}, scores: {}, answers: {}, history: {} };

const state = {
  mode: "own",
  screen: "hub",
  topic: null,
  questionIndex: 0,
  activeTab: "website",
  resetTabBarOnNextRender: false,
  data: loadProgress()
};

function isSharedMode() {
  return state.mode === "shared";
}

let els = {};
let eventsBound = false;

function getElements() {
  return {
    stepLabel: document.getElementById("stepLabel"),
    topicLabel: document.getElementById("topicLabel"),
    screenTitle: document.getElementById("screenTitle"),
    screenCopy: document.getElementById("screenCopy"),
    body: document.getElementById("screenBody"),
    footer: document.getElementById("screenFooter"),
    footerNav: document.getElementById("footerNav"),
    footerNavActions: document.getElementById("footerNavActions"),
    previous: document.getElementById("previousBtn"),
    hub: document.getElementById("hubBtn"),
    footerUnlock: document.getElementById("footerUnlock"),
    footerUnlockCopy: document.getElementById("footerUnlockCopy"),
    footerCta: document.getElementById("footerCta"),
    footerCtaAudit: document.getElementById("footerCtaAudit"),
    comprehensiveBtn: document.getElementById("comprehensiveBtn"),
    back: document.getElementById("backBtn"),
    next: document.getElementById("nextBtn"),
    mainProgressSlot: document.getElementById("mainProgressSlot"),
    progressPrompt: document.getElementById("progressPrompt"),
    mainProgress: document.getElementById("mainProgress"),
    mainProgressText: document.getElementById("mainProgressText"),
    mainProgressBar: document.getElementById("mainProgressBar"),
    emailPanel: document.getElementById("deliveryPanel"),
    shareResultsBtn: document.getElementById("shareResultsBtn"),
    referAssessmentBtn: document.getElementById("downloadPdfBtn"),
    shareFeedback: document.getElementById("shareFeedback")
  };
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...defaultProgress,
      ...saved,
      completed: saved?.completed || {},
      scores: saved?.scores || {},
      answers: saved?.answers || {},
      history: saved?.history || {}
    };
  } catch {
    return { ...defaultProgress };
  }
}

function saveSession() {
  if (isSharedMode()) return;
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    screen: state.screen,
    topic: state.topic,
    questionIndex: state.questionIndex,
    activeTab: state.activeTab
  }));
}

function restoreSession() {
  if (isSharedMode()) return;
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY));
    if (!session?.screen) return;

    if (session.screen === "comprehensive" && allComplete()) {
      state.screen = "comprehensive";
      state.activeTab = ASSESSMENT.topics[0].id;
      state.resetTabBarOnNextRender = true;
      return;
    }

    if (session.screen === "questions" && session.topic && !state.data.completed[session.topic]) {
      state.screen = "questions";
      state.topic = session.topic;
      state.questionIndex = firstUnansweredQuestionIndex(session.topic);
      return;
    }

    state.screen = "hub";
    state.topic = null;
  } catch {
    state.screen = "hub";
  }
}

function saveProgress() {
  if (isSharedMode()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  saveSession();
}

function firstUnansweredQuestionIndex(topicId) {
  const topic = getTopic(topicId);
  const answers = state.data.answers[topicId] || {};
  for (let index = 0; index < topic.questions.length; index += 1) {
    if (answers[index] === undefined) return index;
  }
  return Math.max(topic.questions.length - 1, 0);
}

function auditUrlWithContext(topicId) {
  const topic = topicId ? getTopic(topicId) : weakestTopic();
  const params = new URLSearchParams({
    source: "brandtribal-health-check",
    area: topic.id,
    score: String(state.data.scores[topic.id] || 0),
    overall: String(overallAverage())
  });
  return `${LINKS.audit}?${params.toString()}`;
}

function recordTopicScoreHistory(topicId, score) {
  if (!state.data.history[topicId]) state.data.history[topicId] = [];
  const history = state.data.history[topicId];
  const last = history[history.length - 1];
  if (last?.score === score) return;
  history.push({ score, completedAt: new Date().toISOString() });
  if (history.length > 5) history.shift();
}

function renderRetakeComparison(topicId, score) {
  const history = (state.data.history[topicId] || []).filter((entry) => entry.score !== score);
  if (!history.length) return "";
  const previous = history[history.length - 1];
  const delta = score - previous.score;
  if (delta === 0) {
    return `<p class="retake-comparison">Your score is unchanged since your last attempt (${previous.score}%).</p>`;
  }
  const direction = delta > 0 ? "improved" : "decreased";
  return `<p class="retake-comparison">Since your last attempt, your score has ${direction} by <strong>${Math.abs(delta)} points</strong> (${previous.score}% → ${score}%).</p>`;
}

function arrowIcon() {
  return `<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 12h13M13 6l6 6-6 6"/></svg></span>`;
}

function homeIcon() {
  return `<span class="btn-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M4.5 11 12 4.5 19.5 11"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg></span>`;
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

function backHubButton(label = "Back to hub", attrs = 'type="button" data-back-hub') {
  return `<button class="button is-secondary is-resource is-icon w-button" ${attrs}><span>${label}</span>${homeIcon()}</button>`;
}

function getRecommendationAction(topicId, index) {
  const actionKey = RECOMMENDATION_ACTIONS[topicId]?.[index];
  if (!actionKey) return null;
  if (actionKey === "audit") {
    return {
      type: "audit",
      actionLabel: "Request audit",
      label: "Request an Audit",
      href: auditUrlWithContext(topicId)
    };
  }
  if (PRACTICAL_TOOLS[actionKey]) {
    return {
      type: "download",
      actionLabel: "Download file",
      ...PRACTICAL_TOOLS[actionKey]
    };
  }
  return null;
}

function renderRecommendationAction(topicId, index) {
  const action = getRecommendationAction(topicId, index);
  if (!action) return "";
  return `
    <div class="recommend-item-action-wrap">
      <p class="recommend-item-action-label">${action.actionLabel}</p>
      <a class="button is-secondary is-resource is-icon is-tiny w-button recommend-item-action" href="${action.href}" target="_blank" rel="noopener noreferrer"><span>${action.label}</span>${arrowIcon()}</a>
    </div>`;
}

function setButtonLabel(button, label, icon = false) {
  button.innerHTML = icon ? `<span>${label}</span>${arrowIcon()}` : `<span>${label}</span>`;
}

function configureStandardFooter() {
  els.footer.classList.remove("is-unlock", "is-cta");
  els.footerNav.classList.remove("is-hidden");
  els.footerUnlock.classList.add("is-hidden");
  els.footerCta?.classList.add("is-hidden");
  els.previous.classList.add("is-hidden");
  els.hub.classList.add("is-hidden");
  els.back.classList.remove("is-hidden");
}

function configureComprehensiveFooter() {
  els.footer.classList.remove("is-hidden", "is-unlock");
  els.footer.classList.add("is-cta");
  els.footerNav.classList.add("is-hidden");
  els.footerUnlock.classList.add("is-hidden");
  els.footerCta?.classList.remove("is-hidden");
  els.next.style.display = "none";
  if (els.footerCtaAudit) els.footerCtaAudit.href = auditUrlWithContext();
}

function configureQuestionFooter() {
  configureStandardFooter();
  els.back.classList.add("is-hidden");
  els.hub.classList.remove("is-hidden");
  if (state.questionIndex > 0) els.previous.classList.remove("is-hidden");
  else els.previous.classList.add("is-hidden");
}

function configureUnlockFooter() {
  els.footer.classList.remove("is-hidden");
  els.footer.classList.add("is-unlock");
  els.footerNav.classList.add("is-hidden");
  els.footerUnlock.classList.remove("is-hidden");
  els.footerUnlockCopy.innerHTML = `
    <strong>Comprehensive analysis unlocked</strong>
    <p>You've completed all four areas. View your full breakdown with scores, insights and recommended next steps.</p>`;
}

function hideFooter() {
  els.footer.classList.add("is-hidden");
  configureStandardFooter();
}

function enterComprehensiveAnalysis() {
  state.activeTab = ASSESSMENT.topics[0].id;
  state.resetTabBarOnNextRender = true;
  state.screen = "comprehensive";
  if (isCompactScrollViewport()) pendingScroll = "step";
  render();
}

function getTopic(id = state.topic) {
  return ASSESSMENT.topics.find((topic) => topic.id === id);
}

function completedCount() {
  return ASSESSMENT.topics.filter((topic) => state.data.completed[topic.id]).length;
}

function allComplete() {
  return completedCount() === ASSESSMENT.topics.length;
}

function setProgress(value) {
  const percent = Math.max(0, Math.min(100, Math.round(value)));
  els.mainProgressBar?.classList.remove("is-hidden");
  els.progressPrompt?.classList.add("is-hidden");
  els.mainProgress.style.width = percent + "%";
  els.mainProgressText.textContent = percent + "%";
}

function overallProgressPercent(questionIndex, questionTotal) {
  const complete = completedCount();
  let value = complete * 25;
  if (typeof questionIndex === "number" && questionTotal) {
    value += (questionIndex / questionTotal) * 25;
  }
  if (value === 0 && (hasAnyProgress() || typeof questionIndex === "number")) value = 10;
  return Math.min(100, Math.round(value));
}

function setHubProgress() {
  if (hasAnyProgress()) {
    setProgress(overallProgressPercent());
  } else {
    els.mainProgressBar?.classList.add("is-hidden");
    els.progressPrompt?.classList.remove("is-hidden");
  }
}

function topicAnswerCount(topicId) {
  return Object.keys(state.data.answers[topicId] || {}).length;
}

function selectedAnswerForQuestion() {
  return state.data.answers[state.topic]?.[state.questionIndex];
}

function setAnswer(value) {
  if (!state.data.answers[state.topic]) state.data.answers[state.topic] = {};
  state.data.answers[state.topic][state.questionIndex] = value;
  saveProgress();
  render();
}

function calculateScore(topicId = state.topic) {
  const topic = getTopic(topicId);
  const answers = state.data.answers[topicId] || {};
  const values = topic.questions.map((_, index) => answers[index]).filter((value) => value !== undefined && value !== null);
  if (!values.length) return 0;
  const sum = values.reduce((acc, value) => acc + value, 0);
  return Math.round(sum / values.length);
}

function getScoreBand(score) {
  if (score >= 85) return {
    title: "Strong foundations",
    badge: "Clear and confident",
    badgeHint: "Your answers suggest this area is communicating clearly and consistently.",
    copy: "Your answers suggest this area is working well. The opportunity now is to maintain <strong>consistency</strong> and look for targeted improvements that support future <strong>growth</strong>.",
    detail: "You are likely communicating <strong>clearly</strong> and giving people enough <strong>confidence</strong> to take the next step. The priority is not a full rebuild, but refining the details that help this area stay <strong>aligned</strong> as the business evolves."
  };
  if (score >= 65) return {
    title: "Good momentum",
    badge: "Room to refine",
    badgeHint: "The basics are working, but small gaps may still create friction.",
    copy: "You have <strong>solid foundations</strong> in place, but a few areas may be creating <strong>friction</strong>. Focused improvements could make your communication clearer and more effective.",
    detail: "Several elements are in place, yet small gaps in <strong>clarity</strong>, <strong>consistency</strong> or follow-through may still slow decisions. Addressing the weakest dimensions first should create noticeable improvement without major disruption."
  };
  if (score >= 45) return {
    title: "Developing",
    badge: "Direction still needed",
    badgeHint: "Some elements work, but mixed signals may leave people uncertain.",
    copy: "You are making progress, but some gaps may be affecting <strong>clarity</strong>, <strong>trust</strong> or <strong>confidence</strong>. This is a good time to prioritise what needs attention first.",
    detail: "Your responses point to <strong>mixed signals</strong> — some parts of this area are working, others may be leaving people uncertain. A focused review of the lowest-scoring dimensions will help you decide where effort will have the greatest <strong>impact</strong>."
  };
  return {
    title: "Needs attention",
    badge: "Clarity gap identified",
    badgeHint: "Answers suggest people may struggle to understand, trust, or act confidently here.",
    copy: "This area may be holding the business back. A <strong>structured</strong> review would help identify what is creating <strong>confusion</strong> and where improvement should begin.",
    detail: "Several answers suggest people may struggle to <strong>understand</strong>, <strong>trust</strong> or move forward confidently in this area. Treat this as a <strong>priority</strong>: clarify the basics first, then build <strong>consistency</strong> across the touchpoints that matter most."
  };
}

function bandKey(score) {
  if (score >= 85) return "strong";
  if (score >= 65) return "good";
  if (score >= 45) return "developing";
  return "attention";
}

const TOPIC_MEANINGS = {
  website: {
    strong: {
      copy: "Your website appears to communicate clearly and guide visitors toward action. The focus now is maintaining <strong>consistency</strong> across pages as your content evolves.",
      detail: "Visitors can likely understand what you do and feel enough <strong>confidence</strong> to enquire. Refine <strong>conversion</strong> paths and keep key messages <strong>aligned</strong> rather than rebuilding from scratch."
    },
    good: {
      copy: "Your website has <strong>solid foundations</strong>, but some pages or pathways may still create <strong>friction</strong> for visitors trying to understand or act.",
      detail: "Messaging, structure or mobile experience may be uneven. Addressing weaker dimensions — such as <strong>clarity</strong>, <strong>trust</strong> or calls to action — should improve results without a full redesign."
    },
    developing: {
      copy: "Your answers suggest visitors may not always grasp your offer quickly, or may hesitate before enquiring. <strong>Clarity</strong> and <strong>trust</strong> on the site need attention.",
      detail: "Some areas of the website are working, but <strong>gaps</strong> in messaging, navigation or proof may leave people <strong>uncertain</strong>. Prioritise the lowest-scoring dimensions to improve how the site supports <strong>conversion</strong>."
    },
    attention: {
      copy: "Your website may be slowing enquiries rather than supporting them. A <strong>structured</strong> review of messaging, structure and <strong>trust</strong> signals should come first.",
      detail: "Several answers point to <strong>confusion</strong> — visitors may struggle to understand what you offer, whether to <strong>trust</strong> you, or what to do next. Treat this as a <strong>priority</strong> before investing further in design or marketing."
    }
  },
  brand: {
    strong: {
      copy: "Your brand appears <strong>consistent</strong> and clearly defined across key touchpoints. The opportunity is to maintain that <strong>alignment</strong> as you grow.",
      detail: "People can likely explain your <strong>positioning</strong> and recognise your tone and visual identity. Keep refining <strong>messaging</strong> so every channel reinforces the same story."
    },
    good: {
      copy: "Your brand has <strong>useful foundations</strong>, but <strong>inconsistencies</strong> in messaging or presentation may still weaken recognition or trust.",
      detail: "Some touchpoints may tell a slightly different story. Tightening <strong>positioning</strong>, <strong>tone of voice</strong> or visual <strong>consistency</strong> will help the brand feel more deliberate and confident."
    },
    developing: {
      copy: "Your brand may be sending <strong>mixed signals</strong> — strong in places, unclear in others. <strong>Positioning</strong> and <strong>messaging</strong> consistency need focused attention.",
      detail: "Answers suggest people may find it hard to describe what you stand for or why you are <strong>different</strong>. A clearer <strong>messaging</strong> framework will help your website, proposals and conversations feel like the same business."
    },
    attention: {
      copy: "Your brand may lack the <strong>clarity</strong> needed to compete confidently. A <strong>structured</strong> review of <strong>positioning</strong> and messaging should be a priority.",
      detail: "Several responses suggest the brand may feel <strong>generic</strong>, inconsistent or hard to explain. Without clearer <strong>differentiation</strong>, design and marketing work will struggle to build lasting <strong>trust</strong>."
    }
  },
  customer: {
    strong: {
      copy: "Customers seem able to find a clear <strong>starting point</strong> and move through enquiry with reasonable <strong>confidence</strong>. Maintain that experience as you grow.",
      detail: "Expectations, communication and content appear mostly <strong>aligned</strong>. Look for small improvements in the lowest-scoring dimensions to keep the journey <strong>smooth</strong> and predictable."
    },
    good: {
      copy: "The customer experience mostly works, but <strong>gaps</strong> in enquiry flow, expectations or communication may still create <strong>friction</strong>.",
      detail: "Some steps in the journey are clear; others may leave people <strong>uncertain</strong> about what happens next. Strengthen the weakest touchpoints — especially around <strong>enquiry</strong> and <strong>content</strong> — before adding complexity."
    },
    developing: {
      copy: "Customers may hit <strong>friction</strong> when trying to start, learn or enquire. <strong>Clarity</strong>, <strong>trust</strong> and helpful content need attention across the journey.",
      detail: "Your responses point to <strong>mixed signals</strong> — some touchpoints help, others may increase <strong>uncertainty</strong>. Focus on what people need to know before, during and after they contact you."
    },
    attention: {
      copy: "The customer journey may be holding the business back. A <strong>structured</strong> review of how people start, enquire and get followed up should come first.",
      detail: "Several answers suggest people may struggle to <strong>understand</strong>, <strong>trust</strong> or move forward confidently. Treat improving the <strong>enquiry</strong> experience as a <strong>priority</strong> across your key touchpoints."
    }
  },
  readiness: {
    strong: {
      copy: "Your business appears <strong>clear</strong> on direction, offers and the role your website plays in growth. The focus is staying <strong>aligned</strong> as priorities evolve.",
      detail: "Goals, packaging and communication assets seem reasonably <strong>coherent</strong>. Keep connecting website, marketing and sales materials to the enquiries and work you want <strong>more</strong> of."
    },
    good: {
      copy: "You have <strong>useful foundations</strong> for growth, but offers, systems or website <strong>alignment</strong> may still need refinement.",
      detail: "Some strategic pieces are in place; others may create <strong>friction</strong> when scaling or communicating. Clarify the weakest areas — <strong>offer structure</strong>, <strong>sales assets</strong> or <strong>systems</strong> — before major investment."
    },
    developing: {
      copy: "Growth direction or offer <strong>clarity</strong> may still feel incomplete. <strong>Prioritising</strong> the right gaps will help effort go where it matters most.",
      detail: "Answers suggest <strong>mixed readiness</strong> — progress in some areas, uncertainty in others. Align your website, materials and priorities so they support the business you are building <strong>toward</strong>."
    },
    attention: {
      copy: "The business may lack the <strong>strategic clarity</strong> needed to grow confidently. A <strong>structured</strong> review of direction, offers and website <strong>fit</strong> should come first.",
      detail: "Several responses suggest decisions may be driven by <strong>guesswork</strong> rather than clear priorities. Establish <strong>direction</strong> and <strong>offer clarity</strong> before committing further to design, marketing or structural change."
    }
  }
};

function getTopicMeaning(topicId, score) {
  const band = getScoreBand(score);
  const meaning = TOPIC_MEANINGS[topicId]?.[bandKey(score)];
  return {
    ...band,
    copy: meaning?.copy ?? band.copy,
    detail: meaning?.detail ?? band.detail
  };
}

function dimensionScores(topicId) {
  const topic = getTopic(topicId);
  const answers = state.data.answers[topicId] || {};
  return topic.dimensions.map((label, index) => ({
    label,
    score: answers[index] ?? 0,
    color: DIMENSION_COLORS[index]
  }));
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

function analyzeTopicResults(topicId) {
  const topic = getTopic(topicId);
  const topicAnswers = state.data.answers[topicId] || {};
  const scored = scoreQuestionResults(topic, topicAnswers);
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

function getRankedRecommendationItems(topic, topicAnswers) {
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
    .map((item) => ({
      recommendationIndex: item.recommendationIndex,
      recommendation: topic.recommendations[item.recommendationIndex]
    }));
}

function strongestAndWeakest(topicId) {
  const { strongest, weakest } = analyzeTopicResults(topicId);
  return { strongest, weakest };
}

function overallAverage() {
  const total = ASSESSMENT.topics.reduce((sum, topic) => sum + (state.data.scores[topic.id] || 0), 0);
  return Math.round(total / ASSESSMENT.topics.length);
}

function weakestTopic() {
  return [...ASSESSMENT.topics].sort((a, b) => {
    const scoreDiff = (state.data.scores[a.id] || 0) - (state.data.scores[b.id] || 0);
    if (scoreDiff !== 0) return scoreDiff;
    return ASSESSMENT.topics.findIndex((topic) => topic.id === a.id) - ASSESSMENT.topics.findIndex((topic) => topic.id === b.id);
  })[0];
}

function renderAnalysisSummaryHandoff(activeTopicId) {
  const weakest = weakestTopic();
  if (activeTopicId === weakest.id) {
    return "You&rsquo;re viewing your lowest-scoring area — start with the recommendations below.";
  }
  return `Your lowest-scoring area is <strong>${weakest.shortTitle}</strong>. Start there, or continue exploring other topics below.`;
}

function renderAnalysisSummary(topicId) {
  const topic = getTopic(topicId);
  const score = state.data.scores[topicId] ?? calculateScore(topicId);
  const band = getTopicMeaning(topicId, score);

  return `
    <article class="analysis-summary elevated-soft">
      <div class="analysis-summary-score">
        ${renderScoreRing(score, "analysisSummaryRing", true)}
        <span class="analysis-summary-score-label">${topic.shortTitle} score</span>
      </div>
      <div class="analysis-summary-body">
        <div class="result-badge-wrap result-badge-wrap--${bandKey(score)}">
          <p class="result-badge">${band.badge}</p>
          <p class="result-badge-hint">${band.badgeHint}</p>
        </div>
        <div class="result-headline result-headline--${bandKey(score)}">
          ${resultBandIcon(bandKey(score))}
          <h3 class="result-title">${band.title}</h3>
        </div>
        <p class="analysis-summary-copy">${band.copy}</p>
        <p class="analysis-summary-handoff">${renderAnalysisSummaryHandoff(topicId)}</p>
      </div>
    </article>`;
}

function renderScoreRing(score, ringId = "scoreRing", compact = false) {
  const gradId = `scoreGradient-${ringId}`;
  const wrapClass = compact ? "score-wrap score-wrap--compact" : "score-wrap";
  return `
    <div class="${wrapClass}">
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

function hubDots(topicId) {
  const topic = ASSESSMENT.topics.find((item) => item.id === topicId);
  const total = topic ? topic.questions.length : 6;
  const answered = topicAnswerCount(topicId);
  return Array.from({ length: total }, (_, index) => `<span class="hub-dot ${index < answered ? "is-filled" : ""}" aria-hidden="true"></span>`).join("");
}

function hubTopicProgressLabel(topicId) {
  const topic = ASSESSMENT.topics.find((item) => item.id === topicId);
  const total = topic ? topic.questions.length : 6;
  const answered = topicAnswerCount(topicId);
  return `${answered} of ${total} questions answered`;
}

function hasAnyProgress() {
  if (completedCount() > 0) return true;
  return ASSESSMENT.topics.some((topic) => topicAnswerCount(topic.id) > 0);
}

function hubProgressMessage(complete) {
  if (complete === 4) return "All four areas are complete. View your comprehensive analysis or restart to begin again.";
  if (complete > 0) return "Select an outstanding topic above to continue. Complete all four areas to unlock your comprehensive analysis.";
  if (hasAnyProgress()) return "You have an assessment in progress. Select a topic above to continue.";
  return "Select a topic above to begin your assessment.";
}

function hubProgressStepState(topicId) {
  if (state.data.completed[topicId]) return "is-complete";
  if (topicAnswerCount(topicId) > 0) return "is-in-progress";
  return "is-pending";
}

function hubProgressStepIcon(topicId) {
  if (state.data.completed[topicId]) {
    return `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M5 13l4 4L19 7"/></svg>`;
  }
  if (topicAnswerCount(topicId) > 0) {
    return `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
  }
  return `<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path d="M6 12h12"/></svg>`;
}

function renderHubProgressSteps() {
  return `<div class="hub-progress-steps" aria-label="Assessment progress by topic">${ASSESSMENT.topics.map((topic) => {
    const stepState = hubProgressStepState(topic.id);
    return `
    <span class="hub-progress-step ${stepState}">
      <span class="hub-progress-step-mark">${hubProgressStepIcon(topic.id)}</span>
      <span class="hub-progress-step-label">${topic.shortTitle}</span>
    </span>`;
  }).join("")}</div>`;
}

function restartAssessment() {
  if (isSharedMode()) return exitSharedMode();
  if (!confirm("Restart your overall assessment? All progress across every area will be cleared.")) return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(SESSION_KEY);
  state.data = { ...defaultProgress };
  state.topic = null;
  state.questionIndex = 0;
  state.activeTab = "website";
  state.screen = "hub";
  els.shareFeedback?.classList.add("is-hidden");
  if (isCompactScrollViewport()) pendingScroll = "step";
  render();
}

function renderHub() {
  state.screen = "hub";
  const complete = completedCount();
  els.stepLabel.textContent = "Business Health Check";
  els.topicLabel.textContent = `${complete} of 4 areas complete`;
  els.screenTitle.textContent = complete === 4 ? "Your complete assessment" : "Choose an area to assess";
  els.screenCopy.textContent = complete === 4
    ? (isSharedMode()
      ? "These shared results are read-only. Start your own assessment anytime."
      : "All four areas are complete. View your comprehensive analysis or share your results below.")
    : "Complete all four areas to unlock your comprehensive analysis. Your progress is saved automatically.";
  setHubProgress();

  els.body.innerHTML = `
    <div class="hub-grid">
      ${ASSESSMENT.topics.map((topic) => {
        const isComplete = state.data.completed[topic.id];
        const score = state.data.scores[topic.id];
        const inProgress = !isComplete && topicAnswerCount(topic.id) > 0;
        const showStatusBadges = hasAnyProgress();
        if (isComplete) {
          return `
          <button class="hub-card is-complete" type="button" data-hub-topic="${topic.id}" aria-label="${topic.title}, completed, score ${score}%" ${isSharedMode() ? "" : ""}>
            <div class="hub-card-inner">
              <div class="hub-card-main">
                <span class="hub-card-icon priority-icon" aria-hidden="true"><img src="${resolveAsset(topic.iconSrc)}" alt="" width="48" height="48" decoding="async"></span>
                <div class="hub-card-body">
                  <span class="hub-card-badge">Complete</span>
                  <strong>${topic.title}</strong>
                  <span class="hub-card-desc">${isSharedMode() ? "Shared result — tap to review." : "Tap to review your result or retake this assessment."}</span>
                </div>
              </div>
              <div class="hub-card-score" aria-hidden="true">
                ${renderScoreRing(score, `hubRing-${topic.id}`, true)}
              </div>
            </div>
          </button>`;
        }
        return `
          <button class="hub-card ${inProgress ? "is-in-progress" : ""}" type="button" data-hub-topic="${topic.id}" aria-label="${topic.title}${inProgress ? ", in progress, " + hubTopicProgressLabel(topic.id) : ", not started"}" ${isSharedMode() ? "disabled" : ""}>
            <span class="hub-card-icon priority-icon" aria-hidden="true"><img src="${resolveAsset(topic.iconSrc)}" alt="" width="48" height="48" decoding="async"></span>
            <span class="hub-card-body">
              ${inProgress
                ? `<span class="hub-card-badge">In progress</span>`
                : showStatusBadges ? `<span class="hub-card-badge is-pending">Not started</span>` : ""}
              <strong>${topic.title}</strong>
              ${inProgress ? `
              <span class="hub-card-progress">
                <span class="hub-card-progress-label">${hubTopicProgressLabel(topic.id)}</span>
                <span class="hub-dots" aria-hidden="true">${hubDots(topic.id)}</span>
              </span>` : `<span class="hub-card-desc">${topic.description}</span>`}
              <span class="hub-card-meta">
                <span class="hub-card-action">${inProgress ? "Continue assessment" : "Start assessment"}</span>
              </span>
            </span>
          </button>`;
      }).join("")}
    </div>
    ${hasAnyProgress() ? `
    <div class="hub-footer">
      <article class="hub-progress-card has-actions">
        <small>${isSharedMode() ? "Shared results" : "Your progress"}</small>
        <strong>${complete} of 4 areas complete</strong>
        <p>${isSharedMode() ? "You are viewing someone else's completed results. Your own progress is unchanged." : hubProgressMessage(complete)}</p>
        ${renderHubProgressSteps()}
      </article>
      <div class="hub-actions">
        ${allComplete() ? `<button class="button is-icon w-button" type="button" data-view-comprehensive><span>View comprehensive analysis</span>${arrowIcon()}</button>` : ""}
        ${isSharedMode()
          ? `<button class="button is-secondary is-quaternary w-button" type="button" data-exit-shared>Back to my assessment</button>`
          : `<button class="button is-secondary is-quaternary w-button" type="button" data-restart-assessment>Restart overall assessment</button>`}
      </div>
    </div>` : ""}`;

  hideFooter();
  bindHubEvents();
  ASSESSMENT.topics.forEach((topic) => {
    if (state.data.completed[topic.id]) animateScoreRing(state.data.scores[topic.id], `hubRing-${topic.id}`);
  });
}

function bindHubEvents() {
  els.body.querySelectorAll("[data-hub-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      const topicId = button.dataset.hubTopic;
      state.topic = topicId;
      if (state.data.completed[topicId]) {
        state.screen = "topic-snapshot";
        if (isCompactScrollViewport()) pendingScroll = "step";
      } else {
        if (isSharedMode()) return;
        if (!state.data.answers[topicId]) state.data.answers[topicId] = {};
        state.questionIndex = firstUnansweredQuestionIndex(topicId);
        state.screen = "questions";
        if (isMobileScrollViewport()) pendingScroll = "question";
      }
      render();
    });
  });

  const comprehensiveBtn = els.body.querySelector("[data-view-comprehensive]");
  if (comprehensiveBtn) {
    comprehensiveBtn.addEventListener("click", enterComprehensiveAnalysis);
  }

  els.body.querySelector("[data-restart-assessment]")?.addEventListener("click", restartAssessment);
  els.body.querySelector("[data-exit-shared]")?.addEventListener("click", exitSharedMode);
}

function renderQuestions() {
  state.screen = "questions";
  const topic = getTopic();
  const total = topic.questions.length;
  const current = topic.questions[state.questionIndex];
  const segments = Array.from({ length: total }, (_, index) => `<span class="progress-segment ${index <= state.questionIndex ? "is-active" : ""}" aria-hidden="true"></span>`).join("");

  els.stepLabel.textContent = `${topic.title} · Question ${state.questionIndex + 1} of ${total}`;
  els.topicLabel.textContent = `${completedCount()} of 4 areas complete`;
  els.screenTitle.textContent = "Answer a few practical questions";
  els.screenCopy.textContent = topic.description;
  setProgress(overallProgressPercent(state.questionIndex, total));

  els.body.innerHTML = `
    <div class="question-kicker"><span class="question-kicker-topic">${topic.title}</span> · Question ${state.questionIndex + 1} of ${total}</div>
    <div class="progress question-progress" aria-label="Question ${state.questionIndex + 1} of ${total}">
      <div class="progress-track progress-segments">${segments}</div>
    </div>
    <h3 class="question-title">${current[0]}</h3>
    <p class="question-description">${current[1]}</p>
    <div class="answers">${ASSESSMENT.answers.map((answer) => `
      <button class="answer-card ${selectedAnswerForQuestion() === answer.score ? "is-selected" : ""}" type="button" data-score="${answer.score}">
        <span class="answer-dot"></span><span><strong>${answer.label}</strong></span>
      </button>`).join("")}</div>
    <div class="error is-hidden" id="answerError">Please choose an answer before continuing.</div>`;

  els.body.querySelectorAll("[data-score]").forEach((button) => button.addEventListener("click", () => setAnswer(Number(button.dataset.score))));

  configureQuestionFooter();
  els.footer.classList.remove("is-hidden");
  const isLastQuestion = state.questionIndex === total - 1;
  const hasAnswer = selectedAnswerForQuestion() !== undefined;
  setButtonLabel(els.next, isLastQuestion && hasAnswer ? "View Result" : "Next", true);
  els.next.disabled = false;
  els.next.style.display = "";
}

function renderTopicOutcome(mode) {
  state.screen = mode;
  const topic = getTopic();
  const score = state.data.scores[topic.id] ?? calculateScore(topic.id);
  const band = getTopicMeaning(topic.id, score);
  const justCompleted = mode === "topic-complete";
  const finishedAll = allComplete();

  if (justCompleted && finishedAll) {
    els.stepLabel.textContent = "All areas complete";
    els.topicLabel.textContent = "4 of 4 areas complete";
    els.screenTitle.textContent = "Your full assessment is ready";
    els.screenCopy.textContent = `You've finished ${topic.title}. Review your result below, then explore your comprehensive analysis for scores, insights and recommended next steps across all four areas.`;
  } else if (justCompleted) {
    els.stepLabel.textContent = "Area complete";
    els.topicLabel.textContent = `${completedCount()} of 4 areas complete`;
    els.screenTitle.textContent = `${topic.title} complete`;
    els.screenCopy.textContent = `Your result reflects your current ${topic.resultFocus}. Choose your next area to continue building a broader view.`;
  } else {
    els.stepLabel.textContent = topic.title;
    els.topicLabel.textContent = `${completedCount()} of 4 areas complete`;
    els.screenTitle.textContent = `Your ${topic.shortTitle.toLowerCase()} result`;
    els.screenCopy.textContent = `Your result reflects your current ${topic.resultFocus}.`;
  }
  setProgress(overallProgressPercent());

  const hubButtonLabel = finishedAll ? "Back to hub" : "Choose your next topic";

  els.body.innerHTML = `
    <div class="topic-complete-grid">
      <div class="topic-result-head">
        ${renderScoreRing(score)}
        <div class="result-badge-wrap result-badge-wrap--${bandKey(score)}">
          <p class="result-badge">${band.badge}</p>
          <p class="result-badge-hint">${band.badgeHint}</p>
        </div>
        <div class="result-headline result-headline--${bandKey(score)}">
          ${resultBandIcon(bandKey(score))}
          <h3 class="result-title">${band.title}</h3>
        </div>
        <div class="topic-result-divider" aria-hidden="true"></div>
      </div>
      <div class="topic-result-body">
        ${renderRetakeComparison(topic.id, score)}
        <p class="result-copy">${band.copy}</p>
        <p class="result-detail">${band.detail}</p>
        <div class="topic-actions">
          <button class="button is-small w-button" type="button" data-back-hub>${hubButtonLabel}</button>
          ${isSharedMode() ? "" : `<button class="button is-secondary is-quaternary is-small w-button" type="button" data-retake-topic>Retake this assessment</button>`}
        </div>
      </div>
    </div>`;

  animateScoreRing(score);
  if (finishedAll) configureUnlockFooter();
  else hideFooter();
  bindTopicOutcomeEvents();
}

function bindTopicOutcomeEvents() {
  els.body.querySelector("[data-retake-topic]")?.addEventListener("click", retakeTopic);
  els.body.querySelector("[data-back-hub]")?.addEventListener("click", () => {
    state.screen = "hub";
    state.topic = null;
    if (isCompactScrollViewport()) pendingScroll = "step";
    render();
  });
}

function retakeTopic() {
  if (isSharedMode()) return;
  const topicId = state.topic;
  if (state.data.scores[topicId]) recordTopicScoreHistory(topicId, state.data.scores[topicId]);
  delete state.data.answers[topicId];
  delete state.data.scores[topicId];
  state.data.completed[topicId] = false;
  state.questionIndex = 0;
  state.data.answers[topicId] = {};
  saveProgress();
  state.screen = "questions";
  if (isMobileScrollViewport()) pendingScroll = "question";
  render();
}

function renderResultsPanel(topicId) {
  const topic = getTopic(topicId);
  const score = state.data.scores[topicId];
  const band = getTopicMeaning(topicId, score);
  const { weakest } = analyzeTopicResults(topicId);
  const rankedRecommendations = getRankedRecommendationItems(topic, state.data.answers[topicId] || {});
  const dims = dimensionScores(topicId);

  return `
    <div class="results-panel">
      <div class="results-primary-grid">
        <section class="results-section results-section--scores">
            <h3>Your scores</h3>
            <div class="score-list">
              ${dims.map((item) => `
                <div class="score-row">
                  <span class="score-row-label"><span class="score-dot" style="background:var(--bt-dimension-${item.color})"></span>${item.label}</span>
                  <strong class="score-row-value">${item.score}/100</strong>
                  <div class="score-bar score-bar--${item.color}"><i style="width:${item.score}%"></i></div>
                </div>`).join("")}
            </div>
          </section>
          <section class="results-section results-section--meaning">
            <h3>What this means</h3>
            <p class="results-lead">${band.copy}</p>
            <p class="results-detail">${band.detail}</p>
            <p class="results-context">For <strong>${topic.title}</strong>, your overall score of <strong>${score}%</strong> reflects how clearly your business handles ${topic.resultFocus} today.</p>
            <div class="opportunity-callout"><span>✦</span><div><strong>Biggest opportunity</strong><p>${weakest.title}</p></div></div>
          </section>
        </div>
      <article class="results-card results-card--recommendations">
        <h3>We'd start here</h3>
        <div class="recommend-list">
          ${rankedRecommendations.map((item, index) => `
            <div class="recommend-item">
              <span>${index + 1}</span>
              <div class="recommend-item-body">
                <strong>${item.recommendation[0]}</strong>
                <p>${item.recommendation[1]}</p>
                ${renderRecommendationAction(topicId, item.recommendationIndex)}
              </div>
            </div>`).join("")}
        </div>
      </article>
    </div>`;
}

function renderComprehensive() {
  state.screen = "comprehensive";
  els.stepLabel.textContent = isSharedMode() ? "Shared results" : "Comprehensive analysis";
  els.topicLabel.textContent = isSharedMode() ? "Read only" : "All 4 areas complete";
  els.screenTitle.textContent = isSharedMode() ? "Shared assessment breakdown" : "Your full assessment breakdown";
  els.screenCopy.textContent = isSharedMode()
    ? "You are viewing someone else's completed results. Your own assessment progress is unchanged."
    : "Review your overall result above, then explore each area in detail below.";

  els.body.innerHTML = `
    ${isSharedMode() ? `<p class="shared-results-banner" role="status">Shared results — read only</p>` : ""}
    ${renderAnalysisSummary(state.activeTab)}
    <section class="analysis-tabs">
      <div class="analysis-tabs-shell">
        <div class="analysis-tabs-chrome">
          <div class="analysis-tabs-header">
            <small class="analysis-tabs-eyebrow">Explore each area</small>
            <p class="analysis-tabs-copy">Select a topic to view its scores, insights and recommended next steps.</p>
            <p class="tab-bar-scroll-hint is-hidden">Scroll across to see all tabs</p>
          </div>
          <div class="tab-bar" role="tablist" aria-label="Assessment topics">
            ${ASSESSMENT.topics.map((topic) => `
              <button class="tab-btn ${state.activeTab === topic.id ? "is-active" : ""}" type="button" role="tab" id="tab-${topic.id}" aria-selected="${state.activeTab === topic.id}" aria-controls="analysis-tabpanel" aria-label="${topic.title} — ${state.data.scores[topic.id]}%" data-tab="${topic.id}">
                <span class="tab-btn-label tab-btn-label--full">${topic.title}</span>
                <span class="tab-btn-label tab-btn-label--short">${topic.shortTitle}</span>
                <span class="tab-btn-pill">${state.data.scores[topic.id]}%</span>
              </button>`).join("")}
          </div>
        </div>
        <div class="analysis-tabpanel" id="analysis-tabpanel" role="tabpanel" aria-labelledby="tab-${state.activeTab}">
          ${renderResultsPanel(state.activeTab)}
        </div>
      </div>
    </section>
    <div class="analysis-back-nav">
      ${isSharedMode()
        ? `<button class="button is-secondary is-resource is-icon w-button" type="button" data-exit-shared><span>Back to my assessment</span>${homeIcon()}</button>`
        : backHubButton()}
    </div>`;

  els.body.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab;
      render();
    });
  });

  els.body.querySelector("[data-back-hub]")?.addEventListener("click", () => {
    state.screen = "hub";
    state.topic = null;
    if (isCompactScrollViewport()) pendingScroll = "step";
    render();
  });
  els.body.querySelector("[data-exit-shared]")?.addEventListener("click", exitSharedMode);

  bindTabKeyboard();
  bindTabBarScrollHint();
  if (state.resetTabBarOnNextRender) {
    resetTabBarScroll();
    state.resetTabBarOnNextRender = false;
  }

  animateScoreRing(state.data.scores[state.activeTab] ?? calculateScore(state.activeTab), "analysisSummaryRing");

  els.footer.classList.remove("is-hidden");
  configureComprehensiveFooter();
}

function bindTabKeyboard() {
  const tabs = [...els.body.querySelectorAll("[data-tab]")];
  const tablist = els.body.querySelector(".tab-bar");
  if (!tablist || !tabs.length) return;

  tablist.addEventListener("keydown", (event) => {
    const currentIndex = tabs.findIndex((tab) => tab.classList.contains("is-active"));
    if (currentIndex < 0) return;

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === currentIndex) return;

    event.preventDefault();
    state.activeTab = tabs[nextIndex].dataset.tab;
    render();
    els.body.querySelector(`[data-tab="${state.activeTab}"]`)?.focus();
  });
}

function resetTabBarScroll() {
  const tabBar = els.body.querySelector(".tab-bar");
  if (!tabBar) return;
  requestAnimationFrame(() => {
    tabBar.scrollLeft = 0;
  });
}

function updateTabBarScrollHint() {
  const tabBar = els.body.querySelector(".tab-bar");
  const hint = els.body.querySelector(".tab-bar-scroll-hint");
  if (!tabBar || !hint) return;
  const needsScroll = tabBar.scrollWidth > tabBar.clientWidth + 1;
  hint.classList.toggle("is-hidden", !needsScroll);
}

function bindTabBarScrollHint() {
  updateTabBarScrollHint();
  const tabBar = els.body.querySelector(".tab-bar");
  if (!tabBar || tabBar.dataset.scrollHintBound) return;
  tabBar.dataset.scrollHintBound = "true";
  const observer = new ResizeObserver(() => updateTabBarScrollHint());
  observer.observe(tabBar);
  window.addEventListener("resize", updateTabBarScrollHint, { passive: true });
}

function encodeSharePayload(data = state.data) {
  let packed = "";
  for (const topic of ASSESSMENT.topics) {
    const answers = data.answers[topic.id] || {};
    for (let index = 0; index < topic.questions.length; index += 1) {
      const score = answers[index];
      const scoreIndex = SHARE_SCORE_VALUES.indexOf(score);
      if (scoreIndex < 0) return null;
      packed += String(scoreIndex);
    }
  }
  if (packed.length !== ASSESSMENT.topics.length * 6) return null;
  return `${SHARE_VERSION}.${packed}`;
}

function decodeSharePayload(encoded) {
  if (!encoded || typeof encoded !== "string") return null;
  const match = encoded.match(/^1\.([0-4]{24})$/);
  if (!match) return null;
  const packed = match[1];
  const answers = {};
  const completed = {};
  const scores = {};

  ASSESSMENT.topics.forEach((topic, topicIndex) => {
    answers[topic.id] = {};
    for (let index = 0; index < topic.questions.length; index += 1) {
      const score = SHARE_SCORE_VALUES[Number(packed[topicIndex * 6 + index])];
      answers[topic.id][index] = score;
    }
    completed[topic.id] = true;
    scores[topic.id] = calculateScoreFromAnswers(topic.id, answers[topic.id]);
  });

  return { completed, scores, answers, history: {} };
}

function calculateScoreFromAnswers(topicId, answers) {
  const topic = getTopic(topicId);
  const values = topic.questions.map((_, index) => answers[index]).filter((value) => value !== undefined && value !== null);
  if (!values.length) return 0;
  return Math.round(values.reduce((acc, value) => acc + value, 0) / values.length);
}

function assessmentPageUrl() {
  const url = new URL(window.location.href);
  url.hash = "";
  return url;
}

function referAssessmentUrl() {
  const url = assessmentPageUrl();
  url.search = "";
  url.hash = "";
  if (/business-health-check/i.test(url.pathname)) return url.toString();
  if (url.protocol.startsWith("http") && !/localhost|127\.0\.0\.1/i.test(url.hostname)) {
    return new URL(BHC_PAGE_PATH, url.origin).toString();
  }
  return url.toString();
}

function sharedResultsUrl(encoded) {
  const url = assessmentPageUrl();
  url.search = "";
  url.searchParams.set("view", "shared");
  url.searchParams.set("r", encoded);
  return url.toString();
}

function parseSharedResultsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("view") !== "shared") return null;
  return decodeSharePayload(params.get("r") || "");
}

function hydrateSharedResults(sharedData) {
  state.mode = "shared";
  state.data = sharedData;
  state.topic = null;
  state.questionIndex = 0;
  state.activeTab = weakestTopic()?.id || ASSESSMENT.topics[0].id;
  state.resetTabBarOnNextRender = true;
  state.screen = "comprehensive";
}

function exitSharedMode() {
  state.mode = "own";
  state.data = loadProgress();
  state.topic = null;
  state.questionIndex = 0;
  state.activeTab = ASSESSMENT.topics[0].id;
  state.screen = "hub";
  const url = assessmentPageUrl();
  url.search = "";
  window.history.replaceState({}, "", url.toString());
  if (isCompactScrollViewport()) pendingScroll = "step";
  render();
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  window.prompt("Copy this link:", text);
}

async function shareOrCopy({ title, text, url }) {
  if (typeof navigator.share === "function") {
    try {
      await navigator.share({ title, text, url });
      return "shared";
    } catch (error) {
      if (error?.name === "AbortError") return "cancelled";
    }
  }
  await copyTextToClipboard(url);
  return "copied";
}

function showShareFeedback(message) {
  if (!els.shareFeedback) return;
  els.shareFeedback.textContent = message;
  els.shareFeedback.classList.remove("is-hidden");
}

async function shareOwnResults() {
  if (isSharedMode() || !allComplete()) throw new Error("Results not ready");
  const encoded = encodeSharePayload();
  if (!encoded) throw new Error("Could not encode results");
  const url = sharedResultsUrl(encoded);
  const result = await shareOrCopy({
    title: "My Business Health Check results",
    text: "Here are my Brandtribal Business Health Check results.",
    url
  });
  if (result === "shared") showShareFeedback("Results shared.");
  else if (result === "copied") showShareFeedback("Share link copied to clipboard.");
}

async function referBusinessHealthCheck() {
  const url = referAssessmentUrl();
  const result = await shareOrCopy({
    title: "Brandtribal Business Health Check",
    text: "Try the Brandtribal Business Health Check — a free five-minute business assessment.",
    url
  });
  if (result === "shared") showShareFeedback("Business Health Check shared.");
  else if (result === "copied") showShareFeedback("Referral link copied to clipboard.");
}

function updateAuxiliaryPanels() {
  const showDelivery = !isSharedMode()
    && allComplete()
    && (state.screen === "hub" || state.screen === "comprehensive");
  els.emailPanel?.classList.toggle("is-hidden", !showDelivery);
  if (!showDelivery) els.shareFeedback?.classList.add("is-hidden");
}

function showError(id) {
  document.getElementById(id)?.classList.remove("is-hidden");
}

let pendingScroll = null;

function isMobileScrollViewport() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function isCompactScrollViewport() {
  return window.matchMedia("(max-width: 991px)").matches;
}

function getStickyHeaderFallback() {
  return isMobileScrollViewport() ? 88 : 114;
}

function getStickyHeaderOffset() {
  const selectors = [
    ".navbar-ext.w-nav",
    ".navbar.w-nav",
    "header.w-nav",
    ".w-nav",
    ".navbar5_component"
  ];
  let offset = 0;
  const seen = new Set();

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (seen.has(element)) return;
      seen.add(element);
      const style = window.getComputedStyle(element);
      if (style.position !== "fixed" && style.position !== "sticky") return;
      const rect = element.getBoundingClientRect();
      if (rect.height <= 0) return;
      // Sticky nav may sit a few px below 0 while settling; still count it when near the top.
      if (style.position === "fixed" || rect.top <= 12) {
        offset = Math.max(offset, rect.bottom);
      }
    });
  });

  const buffer = 20;
  return (offset > 0 ? offset : getStickyHeaderFallback()) + buffer;
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

function getAssessmentScrollRoot() {
  return document.querySelector("#assessment .assessment-shell")
    || document.querySelector("#assessment .assessment-card")
    || document.querySelector("#assessment .assessment-header")
    || document.getElementById("assessment");
}

function scrollToQuestionView() {
  if (!isMobileScrollViewport()) return;
  const target = els.body?.querySelector(".question-kicker")
    || els.body?.querySelector(".question-title")
    || getAssessmentScrollRoot();
  scrollIntoAssessmentTarget(target);
}

function scrollToAssessmentStep() {
  if (!isCompactScrollViewport()) return;
  const target = getAssessmentScrollRoot()
    || document.querySelector("#assessment .step-meta")
    || document.querySelector("#assessment div:has(> #stepLabel)");
  scrollIntoAssessmentTarget(target);
}

function isProgressStatusEyebrow(text) {
  const t = (text || "").trim();
  if (!t) return false;
  if (/\b(?:\d+ of 4 areas complete|All 4 areas complete)\b/i.test(t)) return true;
  if (/^Area complete$/i.test(t)) return true;
  if (/^All areas complete$/i.test(t)) return true;
  if (/^Step \d+ of 5\b/i.test(t)) return true;
  return false;
}

function isTopicTitleEyebrow(text) {
  const t = (text || "").trim();
  if (!t) return false;
  if (t === "Business Health Check") return true;
  return ASSESSMENT.topics.some(
    (topic) => t === topic.title || t.startsWith(`${topic.title} ·`)
  );
}

function isScriptEyebrowLabel(text, role) {
  const t = (text || "").trim();
  if (!t || isProgressStatusEyebrow(t)) return false;
  if (role === "step" && /^Comprehensive analysis$/i.test(t)) return true;
  if (role === "step" || role === "topic") return isTopicTitleEyebrow(t);
  return false;
}

function applyStepMetaLabelStyles() {
  const stepText = els.stepLabel?.textContent?.trim() || "";
  const topicText = els.topicLabel?.textContent?.trim() || "";
  els.stepLabel?.classList.toggle("is-script-eyebrow", isScriptEyebrowLabel(stepText, "step"));
  els.topicLabel?.classList.toggle("is-script-eyebrow", isScriptEyebrowLabel(topicText, "topic"));
}

function applyPendingScroll() {
  if (pendingScroll === "question" && state.screen === "questions") {
    if (!isMobileScrollViewport()) {
      pendingScroll = null;
      return;
    }
    pendingScroll = null;
    scrollToQuestionView();
  } else if (pendingScroll === "step") {
    if (!isCompactScrollViewport()) {
      pendingScroll = null;
      return;
    }
    const stepScreens = ["hub", "topic-complete", "topic-snapshot", "comprehensive"];
    if (stepScreens.includes(state.screen)) {
      pendingScroll = null;
      scrollToAssessmentStep();
    }
  } else {
    pendingScroll = null;
  }
}

function hideError(id) {
  document.getElementById(id)?.classList.add("is-hidden");
}

function render() {
  const lockScroll = !isMobileScrollViewport();
  const savedScrollY = lockScroll ? window.scrollY : null;

  if (state.screen === "hub") renderHub();
  if (state.screen === "questions") renderQuestions();
  if (state.screen === "topic-complete" || state.screen === "topic-snapshot") renderTopicOutcome(state.screen);
  if (state.screen === "comprehensive") renderComprehensive();
  else if (state.screen !== "comprehensive") els.next.style.display = "";

  els.mainProgressSlot?.classList.toggle("is-hidden", state.screen === "comprehensive");
  updateAuxiliaryPanels();
  saveSession();

  if (lockScroll && savedScrollY !== null) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollY, left: 0, behavior: "auto" });
    });
  }

  applyStepMetaLabelStyles();
  applyPendingScroll();
}

function finishTopic() {
  const topic = getTopic();
  const score = calculateScore();
  if (state.data.scores[topic.id]) recordTopicScoreHistory(topic.id, state.data.scores[topic.id]);
  state.data.completed[topic.id] = true;
  state.data.scores[topic.id] = score;
  recordTopicScoreHistory(topic.id, score);
  saveProgress();
  state.screen = "topic-complete";
  render();
}

function ensureShellClasses() {
  const body = document.getElementById("screenBody");
  const footer = document.getElementById("screenFooter");
  const card = body?.parentElement;
  if (!card || !footer || footer.parentElement !== card) return;
  card.classList.add("assessment-card");
  const shell = card.parentElement;
  if (shell && shell.id !== "assessment") shell.classList.add("assessment-shell");
  if (card.id === "assessment") card.classList.add("assessment-shell");
}

function bindEvents() {
  if (eventsBound) return;
  eventsBound = true;

  els.comprehensiveBtn?.addEventListener("click", enterComprehensiveAnalysis);

  els.next?.addEventListener("click", () => {
    if (state.screen === "questions") {
      if (selectedAnswerForQuestion() === undefined) return showError("answerError");
      const topic = getTopic();
      if (state.questionIndex < topic.questions.length - 1) {
        state.questionIndex += 1;
        if (isMobileScrollViewport()) pendingScroll = "question";
        return render();
      }
      if (isCompactScrollViewport()) pendingScroll = "step";
      return finishTopic();
    }
  });

  els.previous?.addEventListener("click", () => {
    if (state.screen !== "questions" || state.questionIndex === 0) return;
    state.questionIndex -= 1;
    if (isMobileScrollViewport()) pendingScroll = "question";
    render();
  });

  els.hub?.addEventListener("click", () => {
    if (state.screen !== "questions") return;
    state.screen = "hub";
    state.topic = null;
    if (isCompactScrollViewport()) pendingScroll = "step";
    render();
  });

  els.back?.addEventListener("click", () => {
    if (state.screen === "comprehensive") {
      state.screen = "hub";
      state.topic = null;
      if (isCompactScrollViewport()) pendingScroll = "step";
      render();
    }
  });

  els.shareResultsBtn?.addEventListener("click", async () => {
    try {
      els.shareResultsBtn.disabled = true;
      els.shareFeedback?.classList.add("is-hidden");
      await shareOwnResults();
    } catch {
      showShareFeedback("Could not share your results. Please try again.");
    } finally {
      els.shareResultsBtn.disabled = false;
    }
  });

  els.referAssessmentBtn?.addEventListener("click", async () => {
    try {
      els.referAssessmentBtn.disabled = true;
      els.shareFeedback?.classList.add("is-hidden");
      await referBusinessHealthCheck();
    } catch {
      showShareFeedback("Could not create a referral link. Please try again.");
    } finally {
      els.referAssessmentBtn.disabled = false;
    }
  });
}

function ensureWebflowPanelChrome() {
  [["shareResultsBtn", "shareResultsBtn", "Share Results"], ["downloadPdfBtn", "referAssessmentBtn", "Refer the Business Health Check"]].forEach(([id, key, label]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === "A") {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.id = id;
      btn.className = el.className;
      btn.textContent = label;
      el.replaceWith(btn);
      els[key] = btn;
    } else {
      el.textContent = label;
      els[key] = el;
    }
  });

  els.shareFeedback?.classList.add("is-hidden");

  const patternSrc = "https://cdn.prod.website-files.com/652a4aa287d36e6c66430b76/698d35243b901212c7b8001a_pattern-white-circles.png";
  const bkgImg = els.emailPanel?.querySelector('[aria-hidden="true"] img');
  if (bkgImg && !bkgImg.getAttribute("src")) {
    bkgImg.src = patternSrc;
    bkgImg.classList.add("delivery-panel-bkg");
    bkgImg.loading = "lazy";
    bkgImg.decoding = "async";
    bkgImg.alt = "";
  }

  els.emailPanel?.querySelectorAll(".w-form-done, .w-form-fail, #emailForm").forEach((node) => {
    node.setAttribute("hidden", "");
    node.style.display = "none";
  });
}

function initAssessment() {
  ensureShellClasses();
  els = getElements();
  if (!els.body || !els.next) return;
  document.getElementById("assessmentLoadHint")?.classList.add("is-hidden");
  ensureWebflowPanelChrome();
  bindEvents();

  const sharedData = parseSharedResultsFromUrl();
  if (sharedData) {
    hydrateSharedResults(sharedData);
  } else {
    restoreSession();
  }
  render();
}

window.BTAssessmentInit = initAssessment;

const cfg = window.BTAssessmentConfig || {};
const root = document.getElementById("assessment");
const lazy = cfg.lazy === true || (cfg.lazy !== false && root && root.dataset.lazyLoad === "true");
if (!lazy) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAssessment);
  } else {
    initAssessment();
  }
}
