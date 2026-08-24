const IDEAS_STORAGE_KEY = "loopIdeas.v1";
const HACKATHONS_STORAGE_KEY = "loopHackathons.v1";
const ACCESS_STORAGE_KEY = "loopAccess.v1";
const ACCESS_SCHEMA_VERSION_KEY = "loopAccessSchema.v2";
const LANGUAGE_STORAGE_KEY = "loopLanguage.v1";
const SESSION_STORAGE_KEY = "loopSession.v1";

const statusOrder = ["Nova", "Em análise", "Em piloto", "Implementada", "Arquivada"];
const statusClass = {
  "Nova": "",
  "Em análise": "review",
  "Em piloto": "pilot",
  "Implementada": "done",
  "Arquivada": "archived"
};

const translations = {
  pt: {
    nav: { home: "Inicial", explore: "Ideias", hackathons: "Hackathons", manage: "Gestão" },
    views: { home: "Inicial", explore: "Explorar ideias", hackathons: "Hackathons", manage: "Gestão de ideias" },
    actions: {
      submitIdea: "Submeter ideia",
      newHackathon: "Nova hackathon",
      createHackathon: "Criar hackathon",
      clear: "Limpar",
      add: "Adicionar",
      grantAccess: "Dar acesso",
      signIn: "Entrar",
      signOut: "Sair",
      copyInvite: "Copiar convite",
      remove: "Remover",
      save: "Guardar",
      viewDetail: "Ver detalhe"
    },
    common: {
      innovationBox: "Caixa de inovação",
      futureBox: "Future Box",
      heroTitle: "Uma ideia pequena pode mudar um processo inteiro.",
      heroNote: "Submissão curta, visibilidade imediata e acompanhamento claro até à decisão.",
      ideas: "ideias",
      pilot: "em piloto",
      support: "apoios",
      participants: "participantes",
      noIdeasFilter: "Sem ideias para estes filtros.",
      noHackathons: "Ainda não existem hackathons criadas.",
      noAccess: "Ainda não existem acessos atribuídos.",
      noDetail: "Seleciona uma ideia para rever detalhes, comentários e estado.",
      since: "desde",
      definedDates: "Datas por definir",
      start: "Início",
      end: "Fim"
    },
    home: {
      summary: "Resumo geral",
      pulse: "O pulso de inovação da Loop Future.",
      registeredIdeas: "ideias registadas",
      createdHackathons: "hackathons criadas",
      activeAccess: "acessos ativos",
      topIdea: "Ideia em destaque",
      noIdeas: "Ainda sem ideias",
      topIdeaHelp: "As ideias mais apoiadas aparecem aqui.",
      activeHackathon: "Hackathon ativa",
      noHackathons: "Ainda sem hackathons",
      hackathonHelp: "Quando criares uma hackathon, o resumo aparece aqui.",
      quickActions: "Ações rápidas"
    },
    filters: { search: "Pesquisar", searchPlaceholder: "Título, área ou benefício", status: "Estado", sort: "Ordenar" },
    hackathons: { program: "Programas de inovação", created: "Hackathons criadas", open: "Aberta", rulesDefined: "Regulamento definido", invitesSent: "Convites enviados", invitesPending: "Convites pendentes" },
    access: { permissions: "Permissões", title: "Gestão de acessos", email: "Email", role: "Perfil" },
    auth: {
      eyebrow: "Future Box",
      title: "Entrar na plataforma",
      setupTitle: "Criar primeiro administrador",
      copy: "Acede com o email convidado e a password temporária enviada pela equipa de gestão.",
      setupCopy: "Define o primeiro acesso de administração para começar a usar a plataforma.",
      password: "Password",
      passwordPlaceholder: "Password temporária",
      setupPasswordPlaceholder: "Define uma password",
      error: "Email ou password inválidos.",
      setupError: "Insere um email válido e uma password com pelo menos 8 caracteres.",
      userPrefix: "Sessão",
      accessHelp: "Ao dar acesso, é gerada uma password temporária e um convite para enviar ao utilizador."
    },
    ideaForm: {
      eyebrow: "Rascunho rápido",
      title: "Partilha o essencial.",
      ideaTitle: "Título da ideia",
      ideaTitlePlaceholder: "Ex.: Automatizar validação de relatórios",
      area: "Área",
      type: "Tipo",
      problem: "Problema atual",
      problemPlaceholder: "O que está a criar desperdício, atrito ou oportunidade perdida?",
      solution: "Melhoria proposta",
      solutionPlaceholder: "Como imaginarias a solução?",
      benefit: "Benefício esperado",
      typeOther: "Indicar tipo",
      typeOtherPlaceholder: "Indica o tipo",
      benefitOther: "Indicar benefício",
      benefitOtherPlaceholder: "Indica o benefício",
      author: "Autor",
      authorPlaceholder: "Nome ou equipa"
    },
    hackathonForm: {
      eyebrow: "Nova hackathon",
      title: "Criar desafio colaborativo.",
      name: "Nome",
      namePlaceholder: "Ex.: Hackathon Eficiência Operacional",
      goal: "Objetivo",
      goalPlaceholder: "Que problema ou oportunidade esta hackathon pretende resolver?",
      startDate: "Data de início",
      endDate: "Data de fim",
      rules: "Regras / regulamento",
      rulesPlaceholder: "Critérios de participação, calendário, avaliação, entregáveis e regras principais.",
      image: "Logo / foto",
      addImage: "Adicionar imagem",
      participants: "Participantes",
      participantPlaceholder: "email@loopfuture.com"
    },
    detail: { area: "Área", type: "Tipo", benefit: "Benefício", votes: "Apoios", impact: "Impacto", effort: "Esforço", problem: "Problema atual", solution: "Melhoria proposta", comments: "Comentários", newComment: "Novo comentário", commentPlaceholder: "Nota de avaliação" },
    status: { "Nova": "Nova", "Em análise": "Em análise", "Em piloto": "Em piloto", "Implementada": "Implementada", "Arquivada": "Arquivada" },
    options: {
      all: "Todos", recent: "Recentes", votes: "Mais apoiadas", impact: "Impacto", select: "Selecionar",
      areas: { "Operações": "Operações", "Comercial": "Comercial", "Cliente": "Cliente", "Tecnologia": "Tecnologia", "Pessoas": "Pessoas", "Financeiro": "Financeiro" },
      types: { "Melhoria de processo": "Melhoria de processo", "Nova oportunidade": "Nova oportunidade", "Automação": "Automação", "Inovação": "Inovação", "Experiência do cliente": "Experiência do cliente", "Bem-estar interno": "Bem-estar interno", "Outro": "Outro" },
      benefits: { "Poupa tempo": "Poupa tempo", "Reduz erros": "Reduz erros", "Melhora cliente": "Melhora cliente", "Aumenta receita": "Aumenta receita", "Melhora equipa": "Melhora equipa", "Outro": "Outro" },
      roles: { "Administrador": "Administrador", "Gestor de ideias": "Gestor de ideias", "Dinamizador hackathons": "Dinamizador hackathons", "Leitor": "Leitor" }
    },
    messages: {
      ideaSubmitted: "Ideia submetida.",
      supportRegistered: "Apoio registado.",
      ideaUpdated: "Ideia atualizada.",
      exportCreated: "Exportação criada.",
      teamsCopied: "Mensagem Teams copiada.",
      invalidEmail: "Insere um email válido.",
      duplicateParticipant: "Esse participante já foi adicionado.",
      addParticipant: "Adiciona pelo menos um participante.",
      hackathonCreated: "Hackathon criada e convites enviados.",
      endAfterStart: "A data de fim deve ser posterior à data de início.",
      accessRemoved: "Acesso removido.",
      accessUpdated: "Perfil atualizado.",
      accessGranted: "Acesso atribuído."
      ,
      inviteCopied: "Convite copiado.",
      adminCreated: "Administrador criado.",
      signedIn: "Sessão iniciada.",
      signedOut: "Sessão terminada."
    }
  },
  en: {
    nav: { home: "Home", explore: "Ideas", hackathons: "Hackathons", manage: "Management" },
    views: { home: "Home", explore: "Explore ideas", hackathons: "Hackathons", manage: "Idea management" },
    actions: { submitIdea: "Submit idea", newHackathon: "New hackathon", createHackathon: "Create hackathon", clear: "Clear", add: "Add", grantAccess: "Grant access", signIn: "Sign in", signOut: "Sign out", copyInvite: "Copy invite", remove: "Remove", save: "Save", viewDetail: "View detail" },
    common: { innovationBox: "Innovation box", futureBox: "Future Box", heroTitle: "A small idea can change an entire process.", heroNote: "Short submission, immediate visibility, and clear follow-up through to decision.", ideas: "ideas", pilot: "in pilot", support: "supports", participants: "participants", noIdeasFilter: "No ideas match these filters.", noHackathons: "No hackathons created yet.", noAccess: "No access has been assigned yet.", noDetail: "Select an idea to review details, comments, and status.", since: "since", definedDates: "Dates to be defined", start: "Start", end: "End" },
    home: { summary: "General summary", pulse: "The innovation pulse of Loop Future.", registeredIdeas: "registered ideas", createdHackathons: "created hackathons", activeAccess: "active accesses", topIdea: "Featured idea", noIdeas: "No ideas yet", topIdeaHelp: "The most supported ideas appear here.", activeHackathon: "Active hackathon", noHackathons: "No hackathons yet", hackathonHelp: "When you create a hackathon, the summary appears here.", quickActions: "Quick actions" },
    filters: { search: "Search", searchPlaceholder: "Title, area, or benefit", status: "Status", sort: "Sort" },
    hackathons: { program: "Innovation programs", created: "Created hackathons", open: "Open", rulesDefined: "Rules defined", invitesSent: "Invites sent", invitesPending: "Invites pending" },
    access: { permissions: "Permissions", title: "Access management", email: "Email", role: "Role" },
    auth: { eyebrow: "Future Box", title: "Sign in to the platform", setupTitle: "Create first administrator", copy: "Use the invited email and temporary password sent by the management team.", setupCopy: "Set the first administrator access to start using the platform.", password: "Password", passwordPlaceholder: "Temporary password", setupPasswordPlaceholder: "Set a password", error: "Invalid email or password.", setupError: "Enter a valid email and a password with at least 8 characters.", userPrefix: "Session", accessHelp: "Granting access generates a temporary password and an invitation to send to the user." },
    ideaForm: { eyebrow: "Quick draft", title: "Share the essentials.", ideaTitle: "Idea title", ideaTitlePlaceholder: "E.g. Automate report validation", area: "Area", type: "Type", problem: "Current problem", problemPlaceholder: "What is creating waste, friction, or a missed opportunity?", solution: "Proposed improvement", solutionPlaceholder: "How would you imagine the solution?", benefit: "Expected benefit", typeOther: "Specify type", typeOtherPlaceholder: "Enter the type", benefitOther: "Specify benefit", benefitOtherPlaceholder: "Enter the benefit", author: "Author", authorPlaceholder: "Name or team" },
    hackathonForm: { eyebrow: "New hackathon", title: "Create a collaborative challenge.", name: "Name", namePlaceholder: "E.g. Operational Efficiency Hackathon", goal: "Objective", goalPlaceholder: "What problem or opportunity should this hackathon address?", startDate: "Start date", endDate: "End date", rules: "Rules / regulation", rulesPlaceholder: "Participation criteria, timeline, evaluation, deliverables, and main rules.", image: "Logo / photo", addImage: "Add image", participants: "Participants", participantPlaceholder: "email@loopfuture.com" },
    detail: { area: "Area", type: "Type", benefit: "Benefit", votes: "Supports", impact: "Impact", effort: "Effort", problem: "Current problem", solution: "Proposed improvement", comments: "Comments", newComment: "New comment", commentPlaceholder: "Evaluation note" },
    status: { "Nova": "New", "Em análise": "Under review", "Em piloto": "In pilot", "Implementada": "Implemented", "Arquivada": "Archived" },
    options: {
      all: "All", recent: "Recent", votes: "Most supported", impact: "Impact", select: "Select",
      areas: { "Operações": "Operations", "Comercial": "Commercial", "Cliente": "Customer", "Tecnologia": "Technology", "Pessoas": "People", "Financeiro": "Finance" },
      types: { "Melhoria de processo": "Process improvement", "Nova oportunidade": "New opportunity", "Automação": "Automation", "Inovação": "Innovation", "Experiência do cliente": "Customer experience", "Bem-estar interno": "Internal wellbeing", "Outro": "Other" },
      benefits: { "Poupa tempo": "Saves time", "Reduz erros": "Reduces errors", "Melhora cliente": "Improves customer", "Aumenta receita": "Increases revenue", "Melhora equipa": "Improves team", "Outro": "Other" },
      roles: { "Administrador": "Administrator", "Gestor de ideias": "Idea manager", "Dinamizador hackathons": "Hackathon facilitator", "Leitor": "Reader" }
    },
    messages: { ideaSubmitted: "Idea submitted.", supportRegistered: "Support registered.", ideaUpdated: "Idea updated.", exportCreated: "Export created.", teamsCopied: "Teams message copied.", invalidEmail: "Enter a valid email.", duplicateParticipant: "That participant has already been added.", addParticipant: "Add at least one participant.", hackathonCreated: "Hackathon created and invites sent.", endAfterStart: "End date must be after start date.", accessRemoved: "Access removed.", accessUpdated: "Role updated.", accessGranted: "Access granted.", inviteCopied: "Invite copied.", adminCreated: "Administrator created.", signedIn: "Signed in.", signedOut: "Signed out." }
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "pt";

const seedIdeas = [
  {
    id: crypto.randomUUID(),
    title: "Checklist automática antes de enviar propostas",
    area: "Comercial",
    type: "Automação",
    problem: "As propostas passam por revisões manuais repetidas e pequenos erros chegam ao cliente.",
    solution: "Criar uma validação simples com campos obrigatórios, margens, anexos e aprovação antes do envio.",
    benefit: "Reduz erros",
    author: "Equipa Comercial",
    anonymous: false,
    status: "Em análise",
    votes: 9,
    impact: 4,
    effort: 2,
    comments: [{ author: "Inovação", text: "Boa candidata a piloto com um template único." }],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Biblioteca interna de aprendizagens de projeto",
    area: "Operações",
    type: "Melhoria de processo",
    problem: "Aprendizagens importantes ficam dispersas em chats e documentos.",
    solution: "Criar registos curtos no fecho de cada projeto com decisões, riscos e recomendações reutilizáveis.",
    benefit: "Poupa tempo",
    author: "Anónimo",
    anonymous: true,
    status: "Em piloto",
    votes: 14,
    impact: 5,
    effort: 3,
    comments: [{ author: "PMO", text: "Piloto em dois projetos durante este mês." }],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 82).toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Pulso mensal de bem-estar da equipa",
    area: "Pessoas",
    type: "Bem-estar interno",
    problem: "Nem sempre percebemos cedo onde existe sobrecarga ou bloqueios.",
    solution: "Enviar um pulso mensal de três perguntas e acompanhar tendências por equipa.",
    benefit: "Melhora equipa",
    author: "People Team",
    anonymous: false,
    status: "Implementada",
    votes: 18,
    impact: 4,
    effort: 1,
    comments: [{ author: "People", text: "Primeira leitura partilhada na reunião mensal." }],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 168).toISOString()
  }
];

const seedHackathons = [
  {
    id: crypto.randomUUID(),
    name: "Sprint de automação interna",
    goal: "Encontrar automatizações simples que reduzam trabalho repetitivo nas equipas.",
    rules: "Equipas de 2 a 4 pessoas. Cada proposta deve incluir problema, protótipo e impacto estimado.",
    startDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString().slice(0, 10),
    endDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14).toISOString().slice(0, 10),
    participants: ["ana@loopfuture.com", "miguel@loopfuture.com", "sofia@loopfuture.com"],
    image: "",
    invitesSentAt: new Date(Date.now() - 1000 * 60 * 60 * 51).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 52).toISOString()
  }
];

const seedAccessList = [];

let ideas = loadCollection(IDEAS_STORAGE_KEY, seedIdeas);
let hackathons = loadCollection(HACKATHONS_STORAGE_KEY, seedHackathons);
if (localStorage.getItem(ACCESS_SCHEMA_VERSION_KEY) !== "2") {
  localStorage.removeItem(ACCESS_STORAGE_KEY);
  localStorage.setItem(ACCESS_SCHEMA_VERSION_KEY, "2");
}
let accessList = loadCollection(ACCESS_STORAGE_KEY, seedAccessList);
accessList = migrateAccessList(accessList);
saveAccessList();
let selectedIdeaId = ideas[0]?.id || null;
let pendingParticipants = [];
let pendingHackathonImage = "";
let currentUserEmail = sessionStorage.getItem(SESSION_STORAGE_KEY) || "";

const els = {
  authScreen: document.getElementById("authScreen"),
  appShell: document.querySelector(".app-shell"),
  loginForm: document.getElementById("loginForm"),
  loginEmail: document.getElementById("loginEmail"),
  loginPassword: document.getElementById("loginPassword"),
  loginError: document.getElementById("loginError"),
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  viewTitle: document.getElementById("viewTitle"),
  ideaModal: document.getElementById("ideaModal"),
  hackathonModal: document.getElementById("hackathonModal"),
  openIdeaModalButton: document.getElementById("openIdeaModalButton"),
  openHackathonModalButton: document.getElementById("openHackathonModalButton"),
  openHackathonModalButtonInline: document.getElementById("openHackathonModalButtonInline"),
  form: document.getElementById("ideaForm"),
  clearFormButton: document.getElementById("clearFormButton"),
  ideaType: document.getElementById("ideaType"),
  ideaTypeOtherField: document.getElementById("ideaTypeOtherField"),
  ideaTypeOther: document.getElementById("ideaTypeOther"),
  ideaBenefit: document.getElementById("ideaBenefit"),
  ideaBenefitOtherField: document.getElementById("ideaBenefitOtherField"),
  ideaBenefitOther: document.getElementById("ideaBenefitOther"),
  authorInput: document.getElementById("ideaAuthor"),
  hackathonForm: document.getElementById("hackathonForm"),
  clearHackathonButton: document.getElementById("clearHackathonButton"),
  participantEmail: document.getElementById("participantEmail"),
  addParticipantButton: document.getElementById("addParticipantButton"),
  participantList: document.getElementById("participantList"),
  hackathonImage: document.getElementById("hackathonImage"),
  hackathonImageLabel: document.getElementById("hackathonImageLabel"),
  hackathonImagePreview: document.getElementById("hackathonImagePreview"),
  accessEmail: document.getElementById("accessEmail"),
  accessRole: document.getElementById("accessRole"),
  grantAccessButton: document.getElementById("grantAccessButton"),
  accessList: document.getElementById("accessList"),
  ideasGrid: document.getElementById("ideasGrid"),
  hackathonsGrid: document.getElementById("hackathonsGrid"),
  searchInput: document.getElementById("searchInput"),
  statusFilter: document.getElementById("statusFilter"),
  sortSelect: document.getElementById("sortSelect"),
  pipeline: document.getElementById("pipeline"),
  detailPanel: document.getElementById("detailPanel"),
  totalIdeas: document.getElementById("totalIdeas"),
  pilotIdeas: document.getElementById("pilotIdeas"),
  topVotes: document.getElementById("topVotes"),
  implementedCount: document.getElementById("implementedCount"),
  exportButton: document.getElementById("exportButton"),
  teamsButton: document.getElementById("teamsButton"),
  userBadge: document.getElementById("userBadge"),
  logoutButton: document.getElementById("logoutButton"),
  langPtButton: document.getElementById("langPtButton"),
  langEnButton: document.getElementById("langEnButton"),
  toast: document.getElementById("toast")
};

function loadCollection(key, fallback) {
  const stored = localStorage.getItem(key);
  if (!stored) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function generateTemporaryPassword() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  const bytes = new Uint8Array(10);
  crypto.getRandomValues(bytes);
  const token = Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
  return `Loop-${token}!`;
}

function migrateAccessList(list) {
  return list
    .map((access) => ({
    ...access,
    password: access.password || generateTemporaryPassword(),
    inviteStatus: access.inviteStatus || "Convite enviado",
    inviteSentAt: access.inviteSentAt || access.createdAt || new Date().toISOString()
  }));
}

function saveIdeas() {
  localStorage.setItem(IDEAS_STORAGE_KEY, JSON.stringify(ideas));
}

function saveHackathons() {
  localStorage.setItem(HACKATHONS_STORAGE_KEY, JSON.stringify(hackathons));
}

function saveAccessList() {
  localStorage.setItem(ACCESS_STORAGE_KEY, JSON.stringify(accessList));
}

function t(path) {
  return path.split(".").reduce((value, key) => value?.[key], translations[currentLanguage]) ?? path;
}

function labelForStatus(status) {
  return t(`status.${status}`);
}

function optionLabel(group, value) {
  return translations[currentLanguage].options[group]?.[value] || value;
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setPlaceholder(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = text;
}

function setFieldLabel(inputId, text) {
  const field = document.getElementById(inputId)?.closest(".field");
  const label = field?.querySelector("span");
  if (label) label.textContent = text;
}

function setSelectLabels(selectId, labels) {
  const select = document.getElementById(selectId);
  if (!select) return;
  Array.from(select.options).forEach((option, index) => {
    if (!option.dataset.valueSet) {
      option.value = option.hasAttribute("value") ? option.getAttribute("value") : option.textContent;
      option.dataset.valueSet = "true";
    }
    if (labels[index]) option.textContent = labels[index];
  });
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  document.documentElement.lang = language;
  applyLanguage();
  updateAuthState();
  renderAll();
}

function applyLanguage() {
  els.langPtButton.classList.toggle("active", currentLanguage === "pt");
  els.langEnButton.classList.toggle("active", currentLanguage === "en");

  const icons = { home: "⌂", explore: "□", hackathons: "◇", manage: "✓" };
  els.navItems.forEach((item) => {
    const view = item.dataset.view;
    item.innerHTML = `<span aria-hidden="true">${icons[view]}</span>${t(`nav.${view}`)}`;
  });

  const currentView = document.body.dataset.view || "home";
  els.viewTitle.textContent = t(`views.${currentView}`);

  setText(".topbar .eyebrow", t("common.innovationBox"));
  els.openIdeaModalButton.textContent = t("actions.submitIdea");
  els.openHackathonModalButton.textContent = t("actions.newHackathon");
  els.logoutButton.textContent = t("actions.signOut");
  els.teamsButton.title = currentLanguage === "pt" ? "Preparar mensagem Teams" : "Prepare Teams message";
  els.exportButton.title = currentLanguage === "pt" ? "Exportar dados" : "Export data";
  els.teamsButton.setAttribute("aria-label", els.teamsButton.title);
  els.exportButton.setAttribute("aria-label", els.exportButton.title);

  setText(".hero-copy .eyebrow", t("common.futureBox"));
  setText(".hero-copy h3", t("common.heroTitle"));
  setText(".hero-note", t("common.heroNote"));
  document.querySelectorAll(".hero-stats span")[0].textContent = t("common.ideas");
  document.querySelectorAll(".hero-stats span")[1].textContent = t("common.pilot");
  document.querySelectorAll(".hero-stats span")[2].textContent = t("common.support");

  setText(".sidebar-panel .metric-label", currentLanguage === "pt" ? "Ideias implementadas" : "Implemented ideas");
  setText(".sidebar-panel span", currentLanguage === "pt" ? "desde o lançamento" : "since launch");

  setText(".home-card-main .eyebrow", t("home.summary"));
  setText(".home-card-main h3", t("home.pulse"));
  document.querySelectorAll(".home-metrics span")[0].textContent = t("home.registeredIdeas");
  document.querySelectorAll(".home-metrics span")[1].textContent = t("home.createdHackathons");
  document.querySelectorAll(".home-metrics span")[2].textContent = t("home.activeAccess");
  setText(".home-card-featured .eyebrow", t("home.topIdea"));
  setText(".home-card-hackathon .eyebrow", t("home.activeHackathon"));
  setText(".home-card-actions .eyebrow", t("home.quickActions"));
  document.getElementById("homeSubmitIdeaButton").textContent = t("actions.submitIdea");
  document.getElementById("homeCreateHackathonButton").textContent = t("actions.createHackathon");

  setText("#exploreView .search-field span", t("filters.search"));
  setPlaceholder("#searchInput", t("filters.searchPlaceholder"));
  setText("#exploreView .compact-field:nth-of-type(2) span", t("filters.status"));
  setText("#exploreView .compact-field:nth-of-type(3) span", t("filters.sort"));
  setSelectLabels("statusFilter", [t("options.all"), ...statusOrder.map(labelForStatus)]);
  setSelectLabels("sortSelect", [t("options.recent"), t("options.votes"), t("options.impact")]);

  setText("#hackathonsView .eyebrow", t("hackathons.program"));
  setText("#hackathonsView h3", t("hackathons.created"));
  els.openHackathonModalButtonInline.textContent = t("actions.createHackathon");

  setText(".access-panel .eyebrow", t("access.permissions"));
  setText(".access-panel h3", t("access.title"));
  setText("#accessHelp", t("auth.accessHelp"));
  setFieldLabel("accessEmail", t("access.email"));
  setFieldLabel("accessRole", t("access.role"));
  els.grantAccessButton.textContent = t("actions.grantAccess");
  setSelectLabels("accessRole", Object.keys(translations.pt.options.roles).map((role) => optionLabel("roles", role)));

  const setupMode = accessList.length === 0;
  setText("#authScreen .eyebrow", t("auth.eyebrow"));
  setText("#authTitle", setupMode ? t("auth.setupTitle") : t("auth.title"));
  setText(".auth-copy", setupMode ? t("auth.setupCopy") : t("auth.copy"));
  setFieldLabel("loginEmail", t("access.email"));
  setFieldLabel("loginPassword", t("auth.password"));
  setPlaceholder("#loginEmail", "nome@loopfuture.com");
  setPlaceholder("#loginPassword", setupMode ? t("auth.setupPasswordPlaceholder") : t("auth.passwordPlaceholder"));
  setText("#loginError", setupMode ? t("auth.setupError") : t("auth.error"));
  setText("#loginForm .primary-button", setupMode ? t("actions.grantAccess") : t("actions.signIn"));

  setText("#ideaModal .eyebrow", t("ideaForm.eyebrow"));
  setText("#ideaModalTitle", t("ideaForm.title"));
  setFieldLabel("ideaTitle", t("ideaForm.ideaTitle"));
  setPlaceholder("#ideaTitle", t("ideaForm.ideaTitlePlaceholder"));
  setFieldLabel("ideaArea", t("ideaForm.area"));
  setFieldLabel("ideaType", t("ideaForm.type"));
  setFieldLabel("ideaProblem", t("ideaForm.problem"));
  setPlaceholder("#ideaProblem", t("ideaForm.problemPlaceholder"));
  setFieldLabel("ideaSolution", t("ideaForm.solution"));
  setPlaceholder("#ideaSolution", t("ideaForm.solutionPlaceholder"));
  setFieldLabel("ideaBenefit", t("ideaForm.benefit"));
  setFieldLabel("ideaTypeOther", t("ideaForm.typeOther"));
  setPlaceholder("#ideaTypeOther", t("ideaForm.typeOtherPlaceholder"));
  setFieldLabel("ideaBenefitOther", t("ideaForm.benefitOther"));
  setPlaceholder("#ideaBenefitOther", t("ideaForm.benefitOtherPlaceholder"));
  setFieldLabel("ideaAuthor", t("ideaForm.author"));
  setPlaceholder("#ideaAuthor", t("ideaForm.authorPlaceholder"));
  document.querySelector("#ideaForm .primary-button").textContent = t("actions.submitIdea");
  document.querySelector("#clearFormButton").textContent = t("actions.clear");
  setSelectLabels("ideaArea", [t("options.select"), ...Object.keys(translations.pt.options.areas).map((value) => optionLabel("areas", value))]);
  setSelectLabels("ideaType", [t("options.select"), ...Object.keys(translations.pt.options.types).map((value) => optionLabel("types", value))]);
  setSelectLabels("ideaBenefit", [t("options.select"), ...Object.keys(translations.pt.options.benefits).map((value) => optionLabel("benefits", value))]);

  setText("#hackathonModal .eyebrow", t("hackathonForm.eyebrow"));
  setText("#hackathonModalTitle", t("hackathonForm.title"));
  setFieldLabel("hackathonName", t("hackathonForm.name"));
  setPlaceholder("#hackathonName", t("hackathonForm.namePlaceholder"));
  setFieldLabel("hackathonGoal", t("hackathonForm.goal"));
  setPlaceholder("#hackathonGoal", t("hackathonForm.goalPlaceholder"));
  setFieldLabel("hackathonStartDate", t("hackathonForm.startDate"));
  setFieldLabel("hackathonEndDate", t("hackathonForm.endDate"));
  setFieldLabel("hackathonRules", t("hackathonForm.rules"));
  setPlaceholder("#hackathonRules", t("hackathonForm.rulesPlaceholder"));
  setText("#hackathonImageLabel", pendingHackathonImage ? document.getElementById("hackathonImageLabel").textContent : t("hackathonForm.addImage"));
  document.querySelector("#hackathonImage").closest(".field").querySelector("span").textContent = t("hackathonForm.image");
  document.querySelector("#participantEmail").closest(".field").querySelector("span").textContent = t("hackathonForm.participants");
  setPlaceholder("#participantEmail", t("hackathonForm.participantPlaceholder"));
  els.addParticipantButton.textContent = t("actions.add");
  document.querySelector("#hackathonForm .primary-button").textContent = t("actions.createHackathon");
  document.querySelector("#clearHackathonButton").textContent = t("actions.clear");
}

function setView(view) {
  els.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  els.views.forEach((viewEl) => viewEl.classList.toggle("active", viewEl.id === `${view}View`));
  els.viewTitle.textContent = t(`views.${view}`);
  document.body.dataset.view = view;
  els.openIdeaModalButton.classList.toggle("hidden", view !== "explore");
  els.openHackathonModalButton.classList.add("hidden");
  els.exportButton.classList.toggle("hidden", view !== "manage");
  applyLanguage();
  renderAll();
}

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function getFilteredIdeas() {
  const query = els.searchInput.value.trim().toLowerCase();
  const status = els.statusFilter.value;
  const sorted = [...ideas].filter((idea) => {
    const matchesStatus = status === "all" || idea.status === status;
    const haystack = `${idea.title} ${idea.area} ${idea.type} ${idea.benefit} ${idea.problem} ${idea.solution}`.toLowerCase();
    return matchesStatus && (!query || haystack.includes(query));
  });

  if (els.sortSelect.value === "votes") sorted.sort((a, b) => b.votes - a.votes);
  if (els.sortSelect.value === "impact") sorted.sort((a, b) => b.impact - a.impact);
  if (els.sortSelect.value === "recent") sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return sorted;
}

function renderStats() {
  els.totalIdeas.textContent = ideas.length;
  els.pilotIdeas.textContent = ideas.filter((idea) => idea.status === "Em piloto").length;
  els.implementedCount.textContent = ideas.filter((idea) => idea.status === "Implementada").length;
  els.topVotes.textContent = ideas.reduce((max, idea) => Math.max(max, idea.votes), 0);
}

function renderIdeas() {
  const template = document.getElementById("ideaCardTemplate");
  els.ideasGrid.innerHTML = "";

  const filtered = getFilteredIdeas();
  if (!filtered.length) {
    els.ideasGrid.innerHTML = `<p class="empty-state">${t("common.noIdeasFilter")}</p>`;
    return;
  }

  filtered.forEach((idea) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.ideaId = idea.id;
    const status = card.querySelector(".status-pill");
    status.textContent = labelForStatus(idea.status);
    status.className = `status-pill ${statusClass[idea.status]}`;
    const voteButton = card.querySelector(".vote-button");
    voteButton.dataset.action = "vote";
    voteButton.querySelector("span").textContent = idea.votes;
    voteButton.addEventListener("click", () => voteIdea(idea.id));
    card.querySelector("h3").textContent = idea.title;
    card.querySelector(".idea-summary").textContent = idea.solution;
    card.querySelector(".card-meta").innerHTML = `
      <span class="meta-chip">${escapeHtml(optionLabel("areas", idea.area))}</span>
      <span class="meta-chip">${escapeHtml(optionLabel("benefits", idea.benefit))}</span>
      <span class="meta-chip">${t("detail.impact")} ${idea.impact}/5</span>
    `;
    const detailButton = card.querySelector(".text-button");
    detailButton.textContent = t("actions.viewDetail");
    detailButton.dataset.action = "detail";
    detailButton.addEventListener("click", () => {
      selectedIdeaId = idea.id;
      setView("manage");
    });
    els.ideasGrid.appendChild(card);
  });
}

function renderHackathons() {
  const template = document.getElementById("hackathonCardTemplate");
  els.hackathonsGrid.innerHTML = "";

  if (!hackathons.length) {
    els.hackathonsGrid.innerHTML = `<p class="empty-state">${t("common.noHackathons")}</p>`;
    return;
  }

  [...hackathons]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .forEach((hackathon) => {
      const card = template.content.firstElementChild.cloneNode(true);
      const media = card.querySelector(".hackathon-media");
      if (hackathon.image) {
        media.style.backgroundImage = `url("${hackathon.image}")`;
        media.textContent = "";
      } else {
        media.textContent = hackathon.name.slice(0, 2).toUpperCase();
      }
      card.querySelector(".status-pill").textContent = t("hackathons.open");
      card.querySelector(".participant-count").textContent = `${hackathon.participants.length} ${t("common.participants")}`;
      card.querySelector("h3").textContent = hackathon.name;
      card.querySelector(".idea-summary").textContent = hackathon.goal;
      const invitesSent = Boolean(hackathon.invitesSentAt || hackathon.participants.length);
      const dateText = formatDateRange(hackathon.startDate, hackathon.endDate);
      card.querySelector(".card-meta").innerHTML = `
        <span class="meta-chip">${formatDate(hackathon.createdAt)}</span>
        <span class="meta-chip">${dateText ? escapeHtml(dateText) : t("common.definedDates")}</span>
        <span class="meta-chip">${t("hackathons.rulesDefined")}</span>
        <span class="meta-chip">${invitesSent ? t("hackathons.invitesSent") : t("hackathons.invitesPending")}</span>
      `;
      els.hackathonsGrid.appendChild(card);
    });
}

function renderAccessList() {
  els.accessList.innerHTML = "";

  if (!accessList.length) {
    els.accessList.innerHTML = `<p class="empty-state">${t("common.noAccess")}</p>`;
    return;
  }

  accessList
    .slice()
    .sort((a, b) => a.email.localeCompare(b.email))
    .forEach((access) => {
      const row = document.createElement("div");
      row.className = "access-row";
      row.innerHTML = `
        <div>
          <strong>${escapeHtml(access.email)}</strong>
          <span>${escapeHtml(optionLabel("roles", access.role))} · ${escapeHtml(access.inviteStatus || "Convite enviado")} · ${t("common.since")} ${formatDate(access.createdAt)}</span>
          <div class="access-secret">
            <code>${escapeHtml(access.password)}</code>
          </div>
        </div>
        <div class="access-actions">
          <button class="secondary-button" data-action="copy" type="button">${t("actions.copyInvite")}</button>
          <button class="secondary-button" data-action="remove" type="button">${t("actions.remove")}</button>
        </div>
      `;
      row.querySelector("[data-action='copy']").addEventListener("click", () => copyInvite(access));
      row.querySelector("[data-action='remove']").addEventListener("click", () => {
        accessList = accessList.filter((item) => item.id !== access.id);
        saveAccessList();
        renderAccessList();
        showToast(t("messages.accessRemoved"));
      });
      els.accessList.appendChild(row);
    });
}

function renderPipeline() {
  els.pipeline.innerHTML = "";

  statusOrder.forEach((status) => {
    const laneIdeas = ideas
      .filter((idea) => idea.status === status)
      .sort((a, b) => b.votes - a.votes);

    if (!laneIdeas.length) return;

    const lane = document.createElement("section");
    lane.className = "pipeline-lane";
    lane.innerHTML = `
      <div class="pipeline-lane-title">
        ${escapeHtml(labelForStatus(status))}
        <span>${laneIdeas.length}</span>
      </div>
    `;

    laneIdeas.forEach((idea) => {
      const button = document.createElement("button");
      button.className = `pipeline-button ${selectedIdeaId === idea.id ? "active" : ""}`;
      button.type = "button";
      button.innerHTML = `
        <strong>${escapeHtml(idea.title)}</strong>
        <span>${idea.votes} ${t("common.support")} · ${t("detail.impact")} ${idea.impact}/5 · ${escapeHtml(optionLabel("areas", idea.area))}</span>
      `;
      button.addEventListener("click", () => {
        selectedIdeaId = idea.id;
        renderPipeline();
        renderDetail();
      });
      lane.appendChild(button);
    });

    els.pipeline.appendChild(lane);
  });
}

function renderDetail() {
  const idea = ideas.find((item) => item.id === selectedIdeaId);
  if (!idea) {
    els.detailPanel.innerHTML = `<p class="empty-state">${t("common.noDetail")}</p>`;
    return;
  }

  const comments = idea.comments.length
    ? idea.comments.map((comment) => `<div class="comment"><small>${escapeHtml(comment.author)}</small>${escapeHtml(comment.text)}</div>`).join("")
    : `<p class="empty-state">${currentLanguage === "pt" ? "Sem comentários." : "No comments."}</p>`;

  els.detailPanel.innerHTML = `
    <span class="status-pill ${statusClass[idea.status]}">${escapeHtml(labelForStatus(idea.status))}</span>
    <h3>${escapeHtml(idea.title)}</h3>
    <p class="empty-state">${escapeHtml(idea.author)} · ${formatDate(idea.createdAt)}</p>

    <div class="detail-grid">
      <div class="detail-item"><strong>${t("detail.area")}</strong>${escapeHtml(optionLabel("areas", idea.area))}</div>
      <div class="detail-item"><strong>${t("detail.type")}</strong>${escapeHtml(optionLabel("types", idea.type))}</div>
      <div class="detail-item"><strong>${t("detail.benefit")}</strong>${escapeHtml(optionLabel("benefits", idea.benefit))}</div>
      <div class="detail-item"><strong>${t("detail.votes")}</strong>${idea.votes}</div>
      <div class="detail-item"><strong>${t("detail.impact")}</strong>${idea.impact}/5</div>
      <div class="detail-item"><strong>${t("detail.effort")}</strong>${idea.effort}/5</div>
    </div>

    <div class="detail-item"><strong>${t("detail.problem")}</strong>${escapeHtml(idea.problem)}</div>
    <br>
    <div class="detail-item"><strong>${t("detail.solution")}</strong>${escapeHtml(idea.solution)}</div>

    <h4>${t("detail.comments")}</h4>
    <div class="comment-list">${comments}</div>

    <div class="review-actions">
      <label class="compact-field">
        <span>${t("filters.status")}</span>
        <select id="detailStatus">
          ${statusOrder.map((status) => `<option value="${status}" ${status === idea.status ? "selected" : ""}>${labelForStatus(status)}</option>`).join("")}
        </select>
      </label>
      <label class="compact-field">
        <span>${t("detail.newComment")}</span>
        <input id="detailComment" placeholder="${t("detail.commentPlaceholder")}">
      </label>
      <button class="primary-button" id="saveDetailButton" type="button">${t("actions.save")}</button>
    </div>
  `;

  document.getElementById("saveDetailButton").addEventListener("click", () => {
    const nextStatus = document.getElementById("detailStatus").value;
    const comment = document.getElementById("detailComment").value.trim();
    idea.status = nextStatus;
    if (comment) idea.comments.push({ author: "Gestão", text: comment });
    saveIdeas();
    showToast(t("messages.ideaUpdated"));
    renderAll();
  });
}

function voteIdea(id) {
  const idea = ideas.find((item) => item.id === id);
  if (!idea) return;
  idea.votes += 1;
  saveIdeas();
  showToast(t("messages.supportRegistered"));
  renderAll();
}

function getCustomOrSelected(formData, selectName, otherName) {
  const selected = formData.get(selectName);
  const custom = formData.get(otherName)?.trim();
  return selected === "Outro" && custom ? custom : selected;
}

function toggleOtherFields() {
  const typeIsOther = els.ideaType.value === "Outro";
  els.ideaTypeOtherField.classList.toggle("hidden", !typeIsOther);
  els.ideaTypeOther.required = typeIsOther;
  if (!typeIsOther) els.ideaTypeOther.value = "";

  const benefitIsOther = els.ideaBenefit.value === "Outro";
  els.ideaBenefitOtherField.classList.toggle("hidden", !benefitIsOther);
  els.ideaBenefitOther.required = benefitIsOther;
  if (!benefitIsOther) els.ideaBenefitOther.value = "";
}

function createIdea(formData) {
  return {
    id: crypto.randomUUID(),
    title: formData.get("title").trim(),
    area: formData.get("area"),
    type: getCustomOrSelected(formData, "type", "typeOther"),
    problem: formData.get("problem").trim(),
    solution: formData.get("solution").trim(),
    benefit: getCustomOrSelected(formData, "benefit", "benefitOther"),
    author: formData.get("author").trim() || "Colaborador Loop",
    anonymous: false,
    status: "Nova",
    votes: 0,
    impact: 3,
    effort: 2,
    comments: [],
    createdAt: new Date().toISOString()
  };
}

function createHackathon(formData) {
  return {
    id: crypto.randomUUID(),
    name: formData.get("name").trim(),
    goal: formData.get("goal").trim(),
    rules: formData.get("rules").trim(),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    participants: [...pendingParticipants],
    image: pendingHackathonImage,
    invitesSentAt: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };
}

function renderHome() {
  const homeIdeasCount = document.getElementById("homeIdeasCount");
  const homeHackathonsCount = document.getElementById("homeHackathonsCount");
  const homeAccessCount = document.getElementById("homeAccessCount");
  const homeTopIdeaTitle = document.getElementById("homeTopIdeaTitle");
  const homeTopIdeaMeta = document.getElementById("homeTopIdeaMeta");
  const homeHackathonTitle = document.getElementById("homeHackathonTitle");
  const homeHackathonMeta = document.getElementById("homeHackathonMeta");

  homeIdeasCount.textContent = ideas.length;
  homeHackathonsCount.textContent = hackathons.length;
  homeAccessCount.textContent = accessList.length;

  const topIdea = [...ideas].sort((a, b) => b.votes - a.votes)[0];
  if (topIdea) {
    homeTopIdeaTitle.textContent = topIdea.title;
    homeTopIdeaMeta.textContent = `${topIdea.votes} ${t("common.support")} · ${labelForStatus(topIdea.status)} · ${optionLabel("areas", topIdea.area)}`;
  } else {
    homeTopIdeaTitle.textContent = t("home.noIdeas");
    homeTopIdeaMeta.textContent = t("home.topIdeaHelp");
  }

  const latestHackathon = [...hackathons].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  if (latestHackathon) {
    homeHackathonTitle.textContent = latestHackathon.name;
    homeHackathonMeta.textContent = `${latestHackathon.participants.length} ${t("common.participants")} · ${latestHackathon.startDate ? formatDate(latestHackathon.startDate) : t("common.definedDates").toLowerCase()}`;
  } else {
    homeHackathonTitle.textContent = t("home.noHackathons");
    homeHackathonMeta.textContent = t("home.hackathonHelp");
  }
}

function grantAccess() {
  const email = els.accessEmail.value.trim().toLowerCase();
  const role = els.accessRole.value;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast(t("messages.invalidEmail"));
    return;
  }

  const existing = accessList.find((item) => item.email === email);
  if (existing) {
    existing.role = role;
    existing.password = generateTemporaryPassword();
    existing.inviteStatus = "Convite reenviado";
    existing.inviteSentAt = new Date().toISOString();
    showToast(t("messages.accessUpdated"));
  } else {
    accessList.push({
      id: crypto.randomUUID(),
      email,
      role,
      password: generateTemporaryPassword(),
      inviteStatus: "Convite enviado",
      inviteSentAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    });
    showToast(t("messages.accessGranted"));
  }

  els.accessEmail.value = "";
  saveAccessList();
  renderAccessList();
}

function buildInviteMessage(access) {
  const subject = currentLanguage === "pt" ? "Convite Future Box" : "Future Box invitation";
  const intro = currentLanguage === "pt"
    ? "Foste convidado/a para aceder à plataforma de ideias da Loop Future."
    : "You have been invited to access Loop Future's idea platform.";
  return `${subject}\n\n${intro}\n\nEmail: ${access.email}\nPassword temporária: ${access.password}\nLink: ${window.location.origin}${window.location.pathname}`;
}

async function copyInvite(access) {
  const message = buildInviteMessage(access);
  try {
    await navigator.clipboard.writeText(message);
    showToast(t("messages.inviteCopied"));
  } catch {
    showToast(message);
  }
}

function getCurrentUser() {
  return accessList.find((access) => access.email === currentUserEmail);
}

function updateAuthState() {
  const user = getCurrentUser();
  const isAuthenticated = Boolean(user);
  document.body.classList.toggle("auth-locked", !isAuthenticated);
  if (isAuthenticated) {
    els.userBadge.textContent = `${t("auth.userPrefix")}: ${user.email}`;
    els.loginError.classList.add("hidden");
  } else {
    els.userBadge.textContent = "";
  }
}

function login(event) {
  event.preventDefault();
  const email = els.loginEmail.value.trim().toLowerCase();
  const password = els.loginPassword.value;

  if (accessList.length === 0) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 8) {
      els.loginError.classList.remove("hidden");
      return;
    }

    const user = {
      id: crypto.randomUUID(),
      email,
      role: "Administrador",
      password,
      inviteStatus: "Ativo",
      inviteSentAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    };
    accessList.push(user);
    saveAccessList();
    currentUserEmail = user.email;
    sessionStorage.setItem(SESSION_STORAGE_KEY, currentUserEmail);
    els.loginForm.reset();
    applyLanguage();
    updateAuthState();
    showToast(t("messages.adminCreated"));
    setView("home");
    return;
  }

  const user = accessList.find((access) => access.email === email && access.password === password);

  if (!user) {
    els.loginError.classList.remove("hidden");
    return;
  }

  currentUserEmail = user.email;
  sessionStorage.setItem(SESSION_STORAGE_KEY, currentUserEmail);
  els.loginForm.reset();
  updateAuthState();
  showToast(t("messages.signedIn"));
  setView("home");
}

function logout() {
  currentUserEmail = "";
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
  updateAuthState();
  showToast(t("messages.signedOut"));
}

function addParticipant() {
  const email = els.participantEmail.value.trim().toLowerCase();
  if (!email) return;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast(t("messages.invalidEmail"));
    return;
  }
  if (pendingParticipants.includes(email)) {
    showToast(t("messages.duplicateParticipant"));
    return;
  }
  pendingParticipants.push(email);
  els.participantEmail.value = "";
  renderParticipants();
}

function renderParticipants() {
  els.participantList.innerHTML = "";
  pendingParticipants.forEach((email) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "participant-chip";
    chip.textContent = `${email} ×`;
    chip.addEventListener("click", () => {
      pendingParticipants = pendingParticipants.filter((item) => item !== email);
      renderParticipants();
    });
    els.participantList.appendChild(chip);
  });
}

function resetHackathonForm() {
  els.hackathonForm.reset();
  pendingParticipants = [];
  pendingHackathonImage = "";
  els.hackathonImageLabel.textContent = "Adicionar imagem";
  els.hackathonImagePreview.classList.add("hidden");
  els.hackathonImagePreview.style.backgroundImage = "";
  renderParticipants();
}

function renderAll() {
  renderStats();
  renderHome();
  renderIdeas();
  renderHackathons();
  renderAccessList();
  renderPipeline();
  renderDetail();
}

function exportIdeas() {
  const payload = { ideas, hackathons, accessList };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "loop-ideas-export.json";
  link.click();
  URL.revokeObjectURL(url);
  showToast(t("messages.exportCreated"));
}

async function prepareTeamsMessage() {
  const latest = [...ideas].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  const message = latest
    ? `Nova ideia submetida: ${latest.title}\nÁrea: ${latest.area}\nBenefício: ${latest.benefit}\nEstado: ${latest.status}`
    : "Loop Ideas está pronta para receber novas ideias.";

  try {
    await navigator.clipboard.writeText(message);
    showToast(t("messages.teamsCopied"));
  } catch {
    showToast("Mensagem Teams: " + message);
  }
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => els.toast.classList.remove("visible"), 2400);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  const locale = currentLanguage === "pt" ? "pt-PT" : "en-GB";
  return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function formatDateRange(startDate, endDate) {
  if (!startDate && !endDate) return "";
  if (startDate && !endDate) return `${t("common.start")} ${formatDate(startDate)}`;
  if (!startDate && endDate) return `${t("common.end")} ${formatDate(endDate)}`;
  return `${formatDate(startDate)} → ${formatDate(endDate)}`;
}

els.navItems.forEach((item) => item.addEventListener("click", () => setView(item.dataset.view)));
els.langPtButton.addEventListener("click", () => setLanguage("pt"));
els.langEnButton.addEventListener("click", () => setLanguage("en"));
els.loginForm.addEventListener("submit", login);
els.logoutButton.addEventListener("click", logout);
els.openIdeaModalButton.addEventListener("click", () => openModal("ideaModal"));
els.openHackathonModalButton.addEventListener("click", () => openModal("hackathonModal"));
els.openHackathonModalButtonInline.addEventListener("click", () => openModal("hackathonModal"));
document.getElementById("homeSubmitIdeaButton").addEventListener("click", () => openModal("ideaModal"));
document.getElementById("homeCreateHackathonButton").addEventListener("click", () => openModal("hackathonModal"));
document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.dataset.closeModal));
});
document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) closeModal(backdrop.id);
  });
});

els.searchInput.addEventListener("input", renderIdeas);
els.statusFilter.addEventListener("change", renderIdeas);
els.sortSelect.addEventListener("change", renderIdeas);
els.exportButton.addEventListener("click", exportIdeas);
els.teamsButton.addEventListener("click", prepareTeamsMessage);
els.addParticipantButton.addEventListener("click", addParticipant);
els.grantAccessButton.addEventListener("click", grantAccess);
els.accessEmail.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    grantAccess();
  }
});
els.participantEmail.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addParticipant();
  }
});

els.hackathonImage.addEventListener("change", () => {
  const file = els.hackathonImage.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pendingHackathonImage = reader.result;
    els.hackathonImageLabel.textContent = file.name;
    els.hackathonImagePreview.classList.remove("hidden");
    els.hackathonImagePreview.style.backgroundImage = `url("${pendingHackathonImage}")`;
  });
  reader.readAsDataURL(file);
});

els.ideaType.addEventListener("change", toggleOtherFields);
els.ideaBenefit.addEventListener("change", toggleOtherFields);

els.clearFormButton.addEventListener("click", () => {
  els.form.reset();
  toggleOtherFields();
});
els.clearHackathonButton.addEventListener("click", resetHackathonForm);

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const idea = createIdea(new FormData(els.form));
  ideas.unshift(idea);
  selectedIdeaId = idea.id;
  saveIdeas();
  els.form.reset();
  toggleOtherFields();
  closeModal("ideaModal");
  showToast(t("messages.ideaSubmitted"));
  setView("explore");
});

els.hackathonForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(els.hackathonForm);
  if (formData.get("endDate") < formData.get("startDate")) {
    showToast(t("messages.endAfterStart"));
    return;
  }
  if (!pendingParticipants.length) {
    showToast(t("messages.addParticipant"));
    return;
  }
  const hackathon = createHackathon(formData);
  hackathons.unshift(hackathon);
  saveHackathons();
  resetHackathonForm();
  closeModal("hackathonModal");
  showToast(t("messages.hackathonCreated"));
  setView("hackathons");
});

renderParticipants();
toggleOtherFields();
updateAuthState();
setView("home");
