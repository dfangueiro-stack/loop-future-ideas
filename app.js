const IDEAS_STORAGE_KEY = "loopIdeas.v1";
const HACKATHONS_STORAGE_KEY = "loopHackathons.v1";
const ACCESS_STORAGE_KEY = "loopAccess.v1";
const ACCESS_SCHEMA_VERSION_KEY = "loopAccessSchema.v2";
const LANGUAGE_STORAGE_KEY = "loopLanguage.v1";
const SESSION_STORAGE_KEY = "loopSession.v1";

const statusOrder = ["Pendente aprovação", "Nova", "Em análise", "Em piloto", "Implementada", "Arquivada"];
const statusClass = {
  "Pendente aprovação": "pending",
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
      approve: "Aprovar",
      delete: "Eliminar",
      edit: "Editar",
      copyLink: "Copiar link",
      applyHackathon: "Concorrer",
      submitApplication: "Enviar candidatura",
      createChallenge: "Criar desafio",
      remove: "Remover",
      save: "Guardar",
      close: "Fechar",
      viewDetail: "Ver detalhe"
    },
    common: {
      innovationBox: "Caixa de inovação",
      futureBox: "Future Box",
      heroTitle: "Uma ideia pequena pode mudar um processo inteiro.",
      heroNote: "Submissão curta, visibilidade imediata e acompanhamento claro até à decisão.",
      ideas: "ideias",
      pilot: "em piloto",
      pending: "pendentes",
      participants: "participantes",
      noIdeasFilter: "Sem ideias para estes filtros.",
      noHackathons: "Ainda não existem hackathons criadas.",
      noAccess: "Ainda não existem acessos atribuídos.",
      noDetail: "Seleciona uma ideia para rever detalhes, comentários e estado.",
      noComments: "Sem comentários.",
      since: "desde",
      definedDates: "Datas por definir",
      start: "Início",
      end: "Fim",
      employeeFallback: "Colaborador Loop",
      teamsLabel: "Mensagem Teams",
      teamsFallback: "Future Box está pronta para receber novas ideias.",
      teamsIdeaSubmitted: "Nova ideia submetida",
      temporaryPassword: "Password temporária",
      imageLoaded: "Imagem carregada",
      noJury: "Sem júri definido."
    },
    home: {
      summary: "Resumo geral",
      pulse: "O pulso de inovação da Loop Future.",
      registeredIdeas: "ideias registadas",
      createdHackathons: "hackathons criadas",
      activeAccess: "acessos ativos",
      topIdea: "Ideia em destaque",
      noIdeas: "Ainda sem ideias",
      topIdeaHelp: "As ideias aprovadas mais recentes aparecem aqui.",
      activeHackathon: "Hackathon ativa",
      noHackathons: "Ainda sem hackathons",
      hackathonHelp: "Quando criares uma hackathon, o resumo aparece aqui.",
      quickActions: "Ações rápidas"
    },
    filters: { search: "Pesquisar", searchPlaceholder: "Título, área ou benefício", status: "Estado", sort: "Ordenar" },
    hackathons: { program: "Programas de inovação", created: "Hackathons criadas", open: "Aberta", pending: "Pendente aprovação", challenge: "Desafio", rulesDefined: "Regulamento definido", invitesSent: "Convites enviados", invitesPending: "Convites pendentes", jury: "Júri", rules: "Regras", challengePrompt: "Desafio", shareLink: "Link de partilha", submissions: "Ideias recebidas", noSubmissions: "Ainda não existem candidaturas.", evaluation: "Avaliação do júri", firstChoice: "1.ª escolha", secondChoice: "2.ª escolha", thirdChoice: "3.ª escolha", score: "Pontuação" },
    access: { permissions: "Permissões", title: "Gestão de acessos", email: "Email", role: "Perfil", active: "Ativo", inviteSent: "Convite enviado", inviteResent: "Convite reenviado" },
    auth: {
      eyebrow: "Future Box",
      title: "Entrar na plataforma",
      setupTitle: "Criar primeiro administrador",
      copy: "Acede com o email convidado e a password temporária enviada pela equipa de gestão.",
      setupCopy: "Define o primeiro acesso de administração para começar a usar a plataforma.",
      password: "Password",
      passwordPlaceholder: "Password temporária",
      setupPasswordPlaceholder: "Define uma password",
      emailPlaceholder: "email@exemplo.com",
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
      areaOther: "Indicar área",
      areaOtherPlaceholder: "Indica a área",
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
      participantPlaceholder: "email@exemplo.com",
      jury: "Júri",
      juryName: "Nome",
      juryPhone: "Telefone",
      juryEmail: "Email"
    },
    challengeForm: { eyebrow: "Novo desafio", title: "Criar desafio para colaboradores.", challenge: "Desafio", challengePlaceholder: "Que questão queres lançar aos colaboradores?", startDate: "Data de início", endDate: "Data de fim" },
    applicationForm: { eyebrow: "Candidatura", title: "Concorrer à hackathon.", ideaTitle: "Nome da ideia", ideaTitlePlaceholder: "Ex.: Solução para acelerar onboarding", proposal: "Proposta", proposalPlaceholder: "Descreve a proposta, impacto esperado e como seria testada.", author: "Equipa / autor" },
    detail: { area: "Área", type: "Tipo", benefit: "Benefício", impact: "Impacto", effort: "Esforço", problem: "Problema atual", solution: "Melhoria proposta", comments: "Comentários", newComment: "Novo comentário", commentPlaceholder: "Nota de avaliação" },
    status: { "Pendente aprovação": "Pendente aprovação", "Nova": "Nova", "Em análise": "Em análise", "Em piloto": "Em piloto", "Implementada": "Implementada", "Arquivada": "Arquivada" },
    options: {
      all: "Todos", recent: "Recentes", impact: "Impacto", select: "Selecionar",
      areas: { "Operações": "Operações", "Comercial": "Comercial", "Cliente": "Cliente", "Tecnologia": "Tecnologia", "Pessoas": "Pessoas", "Financeiro": "Financeiro", "Outro": "Outro" },
      types: { "Melhoria de processo": "Melhoria de processo", "Nova oportunidade": "Nova oportunidade", "Automação": "Automação", "Inovação": "Inovação", "Experiência do cliente": "Experiência do cliente", "Bem-estar interno": "Bem-estar interno", "Outro": "Outro" },
      benefits: { "Poupa tempo": "Poupa tempo", "Reduz erros": "Reduz erros", "Melhora cliente": "Melhora cliente", "Aumenta receita": "Aumenta receita", "Melhora equipa": "Melhora equipa", "Outro": "Outro" },
      roles: { "Administrador": "Administrador", "Gestor de ideias": "Gestor de ideias", "Dinamizador hackathons": "Dinamizador hackathons", "Leitor": "Leitor" }
    },
    messages: {
      ideaSubmitted: "Ideia submetida.",
      ideaPending: "Ideia submetida para aprovação.",
      itemApproved: "Aprovado e publicado.",
      itemDeleted: "Eliminado.",
      ideaUpdated: "Ideia atualizada.",
      hackathonUpdated: "Hackathon atualizada.",
      challengeUpdated: "Desafio atualizado.",
      exportCreated: "Exportação criada.",
      teamsCopied: "Mensagem Teams copiada.",
      invalidEmail: "Insere um email válido.",
      duplicateParticipant: "Esse participante já foi adicionado.",
      addParticipant: "Adiciona pelo menos um participante.",
      hackathonCreated: "Hackathon criada para aprovação e convites preparados.",
      challengeCreated: "Desafio criado para aprovação.",
      linkCopied: "Link copiado.",
      applicationSubmitted: "Candidatura recebida.",
      applicationUpdated: "Avaliação guardada.",
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
    actions: { submitIdea: "Submit idea", newHackathon: "New hackathon", createHackathon: "Create hackathon", clear: "Clear", add: "Add", grantAccess: "Grant access", signIn: "Sign in", signOut: "Sign out", copyInvite: "Copy invite", approve: "Approve", delete: "Delete", edit: "Edit", copyLink: "Copy link", applyHackathon: "Apply", submitApplication: "Submit application", createChallenge: "Create challenge", remove: "Remove", save: "Save", close: "Close", viewDetail: "View detail" },
    common: { innovationBox: "Innovation box", futureBox: "Future Box", heroTitle: "A small idea can change an entire process.", heroNote: "Short submission, immediate visibility, and clear follow-up through to decision.", ideas: "ideas", pilot: "in pilot", pending: "pending", participants: "participants", noIdeasFilter: "No ideas match these filters.", noHackathons: "No hackathons created yet.", noAccess: "No access has been assigned yet.", noDetail: "Select an idea to review details, comments, and status.", noComments: "No comments.", since: "since", definedDates: "Dates to be defined", start: "Start", end: "End", employeeFallback: "Loop employee", teamsLabel: "Teams message", teamsFallback: "Future Box is ready to receive new ideas.", teamsIdeaSubmitted: "New idea submitted", temporaryPassword: "Temporary password", imageLoaded: "Image loaded", noJury: "No jury defined." },
    home: { summary: "General summary", pulse: "The innovation pulse of Loop Future.", registeredIdeas: "registered ideas", createdHackathons: "created hackathons", activeAccess: "active accesses", topIdea: "Featured idea", noIdeas: "No ideas yet", topIdeaHelp: "The latest approved ideas appear here.", activeHackathon: "Active hackathon", noHackathons: "No hackathons yet", hackathonHelp: "When you create a hackathon, the summary appears here.", quickActions: "Quick actions" },
    filters: { search: "Search", searchPlaceholder: "Title, area, or benefit", status: "Status", sort: "Sort" },
    hackathons: { program: "Innovation programs", created: "Created hackathons", open: "Open", pending: "Pending approval", challenge: "Challenge", rulesDefined: "Rules defined", invitesSent: "Invites sent", invitesPending: "Invites pending", jury: "Jury", rules: "Rules", challengePrompt: "Challenge", shareLink: "Share link", submissions: "Received ideas", noSubmissions: "No applications yet.", evaluation: "Jury evaluation", firstChoice: "1st choice", secondChoice: "2nd choice", thirdChoice: "3rd choice", score: "Score" },
    access: { permissions: "Permissions", title: "Access management", email: "Email", role: "Role", active: "Active", inviteSent: "Invite sent", inviteResent: "Invite resent" },
    auth: { eyebrow: "Future Box", title: "Sign in to the platform", setupTitle: "Create first administrator", copy: "Use the invited email and temporary password sent by the management team.", setupCopy: "Set the first administrator access to start using the platform.", password: "Password", passwordPlaceholder: "Temporary password", setupPasswordPlaceholder: "Set a password", emailPlaceholder: "email@example.com", error: "Invalid email or password.", setupError: "Enter a valid email and a password with at least 8 characters.", userPrefix: "Session", accessHelp: "Granting access generates a temporary password and an invitation to send to the user." },
    ideaForm: { eyebrow: "Quick draft", title: "Share the essentials.", ideaTitle: "Idea title", ideaTitlePlaceholder: "E.g. Automate report validation", area: "Area", areaOther: "Specify area", areaOtherPlaceholder: "Enter the area", type: "Type", problem: "Current problem", problemPlaceholder: "What is creating waste, friction, or a missed opportunity?", solution: "Proposed improvement", solutionPlaceholder: "How would you imagine the solution?", benefit: "Expected benefit", typeOther: "Specify type", typeOtherPlaceholder: "Enter the type", benefitOther: "Specify benefit", benefitOtherPlaceholder: "Enter the benefit", author: "Author", authorPlaceholder: "Name or team" },
    hackathonForm: { eyebrow: "New hackathon", title: "Create a collaborative challenge.", name: "Name", namePlaceholder: "E.g. Operational Efficiency Hackathon", goal: "Objective", goalPlaceholder: "What problem or opportunity should this hackathon address?", startDate: "Start date", endDate: "End date", rules: "Rules / regulation", rulesPlaceholder: "Participation criteria, timeline, evaluation, deliverables, and main rules.", image: "Logo / photo", addImage: "Add image", participants: "Participants", participantPlaceholder: "email@example.com", jury: "Jury", juryName: "Name", juryPhone: "Phone", juryEmail: "Email" },
    challengeForm: { eyebrow: "New challenge", title: "Create employee challenge.", challenge: "Challenge", challengePlaceholder: "What question do you want to launch to employees?", startDate: "Start date", endDate: "End date" },
    applicationForm: { eyebrow: "Application", title: "Apply to the hackathon.", ideaTitle: "Idea name", ideaTitlePlaceholder: "E.g. Solution to speed up onboarding", proposal: "Proposal", proposalPlaceholder: "Describe the proposal, expected impact, and how it would be tested.", author: "Team / author" },
    detail: { area: "Area", type: "Type", benefit: "Benefit", impact: "Impact", effort: "Effort", problem: "Current problem", solution: "Proposed improvement", comments: "Comments", newComment: "New comment", commentPlaceholder: "Evaluation note" },
    status: { "Pendente aprovação": "Pending approval", "Nova": "New", "Em análise": "Under review", "Em piloto": "In pilot", "Implementada": "Implemented", "Arquivada": "Archived" },
    options: {
      all: "All", recent: "Recent", impact: "Impact", select: "Select",
      areas: { "Operações": "Operations", "Comercial": "Commercial", "Cliente": "Customer", "Tecnologia": "Technology", "Pessoas": "People", "Financeiro": "Finance", "Outro": "Other" },
      types: { "Melhoria de processo": "Process improvement", "Nova oportunidade": "New opportunity", "Automação": "Automation", "Inovação": "Innovation", "Experiência do cliente": "Customer experience", "Bem-estar interno": "Internal wellbeing", "Outro": "Other" },
      benefits: { "Poupa tempo": "Saves time", "Reduz erros": "Reduces errors", "Melhora cliente": "Improves customer", "Aumenta receita": "Increases revenue", "Melhora equipa": "Improves team", "Outro": "Other" },
      roles: { "Administrador": "Administrator", "Gestor de ideias": "Idea manager", "Dinamizador hackathons": "Hackathon facilitator", "Leitor": "Reader" }
    },
    messages: { ideaSubmitted: "Idea submitted.", ideaPending: "Idea submitted for approval.", itemApproved: "Approved and published.", itemDeleted: "Deleted.", ideaUpdated: "Idea updated.", hackathonUpdated: "Hackathon updated.", challengeUpdated: "Challenge updated.", exportCreated: "Export created.", teamsCopied: "Teams message copied.", invalidEmail: "Enter a valid email.", duplicateParticipant: "That participant has already been added.", addParticipant: "Add at least one participant.", hackathonCreated: "Hackathon created for approval and invites prepared.", challengeCreated: "Challenge created for approval.", linkCopied: "Link copied.", applicationSubmitted: "Application received.", applicationUpdated: "Evaluation saved.", endAfterStart: "End date must be after start date.", accessRemoved: "Access removed.", accessUpdated: "Role updated.", accessGranted: "Access granted.", inviteCopied: "Invite copied.", adminCreated: "Administrator created.", signedIn: "Signed in.", signedOut: "Signed out." }
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
ideas = migrateIdeas(ideas);
hackathons = migrateHackathons(hackathons);
saveIdeas();
saveHackathons();
if (localStorage.getItem(ACCESS_SCHEMA_VERSION_KEY) !== "2") {
  localStorage.removeItem(ACCESS_STORAGE_KEY);
  localStorage.setItem(ACCESS_SCHEMA_VERSION_KEY, "2");
}
let accessList = loadCollection(ACCESS_STORAGE_KEY, seedAccessList);
accessList = migrateAccessList(accessList);
saveAccessList();
let selectedIdeaId = ideas[0]?.id || null;
let selectedHackathonId = hackathons[0]?.id || null;
let pendingParticipants = [];
let pendingHackathonImage = "";
let pendingJury = [];
let editingIdeaId = null;
let editingHackathonId = null;
let activeSubmissionHackathonId = null;
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
  challengeModal: document.getElementById("challengeModal"),
  hackathonSubmissionModal: document.getElementById("hackathonSubmissionModal"),
  openIdeaModalButton: document.getElementById("openIdeaModalButton"),
  openHackathonModalButton: document.getElementById("openHackathonModalButton"),
  openHackathonModalButtonInline: document.getElementById("openHackathonModalButtonInline"),
  openChallengeModalButton: document.getElementById("openChallengeModalButton"),
  form: document.getElementById("ideaForm"),
  clearFormButton: document.getElementById("clearFormButton"),
  ideaArea: document.getElementById("ideaArea"),
  ideaAreaOtherField: document.getElementById("ideaAreaOtherField"),
  ideaAreaOther: document.getElementById("ideaAreaOther"),
  ideaType: document.getElementById("ideaType"),
  ideaTypeOtherField: document.getElementById("ideaTypeOtherField"),
  ideaTypeOther: document.getElementById("ideaTypeOther"),
  ideaBenefit: document.getElementById("ideaBenefit"),
  ideaBenefitOtherField: document.getElementById("ideaBenefitOtherField"),
  ideaBenefitOther: document.getElementById("ideaBenefitOther"),
  authorInput: document.getElementById("ideaAuthor"),
  hackathonForm: document.getElementById("hackathonForm"),
  clearHackathonButton: document.getElementById("clearHackathonButton"),
  challengeForm: document.getElementById("challengeForm"),
  clearChallengeButton: document.getElementById("clearChallengeButton"),
  challengeText: document.getElementById("challengeText"),
  hackathonSubmissionForm: document.getElementById("hackathonSubmissionForm"),
  clearHackathonSubmissionButton: document.getElementById("clearHackathonSubmissionButton"),
  participantEmail: document.getElementById("participantEmail"),
  addParticipantButton: document.getElementById("addParticipantButton"),
  participantList: document.getElementById("participantList"),
  juryName: document.getElementById("juryName"),
  juryPhone: document.getElementById("juryPhone"),
  juryEmail: document.getElementById("juryEmail"),
  addJuryButton: document.getElementById("addJuryButton"),
  juryList: document.getElementById("juryList"),
  hackathonImage: document.getElementById("hackathonImage"),
  hackathonImageLabel: document.getElementById("hackathonImageLabel"),
  hackathonImagePreview: document.getElementById("hackathonImagePreview"),
  accessEmail: document.getElementById("accessEmail"),
  accessRole: document.getElementById("accessRole"),
  grantAccessButton: document.getElementById("grantAccessButton"),
  accessList: document.getElementById("accessList"),
  ideasGrid: document.getElementById("ideasGrid"),
  ideaDetailPanel: document.getElementById("ideaDetailPanel"),
  hackathonsGrid: document.getElementById("hackathonsGrid"),
  hackathonDetailPanel: document.getElementById("hackathonDetailPanel"),
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

function migrateIdeas(list) {
  return list.map((idea) => ({
    ...idea,
    status: idea.status || "Nova",
    authorEmail: idea.authorEmail || "",
    published: idea.published ?? idea.status !== "Pendente aprovação"
  }));
}

function migrateHackathons(list) {
  return list.map((hackathon) => ({
    ...hackathon,
    type: hackathon.type || "hackathon",
    status: hackathon.status || "Nova",
    creatorEmail: hackathon.creatorEmail || "",
    published: hackathon.published ?? hackathon.status !== "Pendente aprovação",
    jury: Array.isArray(hackathon.jury) ? hackathon.jury : [],
    submissions: Array.isArray(hackathon.submissions) ? hackathon.submissions : []
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

function labelForInviteStatus(status) {
  const labels = {
    "Ativo": t("access.active"),
    "Convite enviado": t("access.inviteSent"),
    "Convite reenviado": t("access.inviteResent")
  };
  return labels[status] || status;
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
  document.title = "Future Box | Loop Future";
  els.langPtButton.classList.toggle("active", currentLanguage === "pt");
  els.langEnButton.classList.toggle("active", currentLanguage === "en");

  const icons = { home: "⌂", explore: "□", hackathons: "◇", manage: "✓" };
  els.navItems.forEach((item) => {
    const view = item.dataset.view;
    item.classList.toggle("hidden", view === "manage" && !isAdmin());
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
  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.setAttribute("aria-label", t("actions.close"));
  });

  setText(".hero-copy .eyebrow", t("common.futureBox"));
  setText(".hero-copy h3", t("common.heroTitle"));
  setText(".hero-note", t("common.heroNote"));
  document.querySelectorAll(".hero-stats span")[0].textContent = t("common.ideas");
  document.querySelectorAll(".hero-stats span")[1].textContent = t("common.pilot");
  document.querySelectorAll(".hero-stats span")[2].textContent = t("common.pending");

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
  setSelectLabels("sortSelect", [t("options.recent"), t("options.impact")]);

  setText("#hackathonsView .eyebrow", t("hackathons.program"));
  setText("#hackathonsView h3", t("hackathons.created"));
  els.openHackathonModalButtonInline.textContent = t("actions.createHackathon");
  els.openChallengeModalButton.textContent = t("actions.createChallenge");

  setText(".access-panel .eyebrow", t("access.permissions"));
  setText(".access-panel h3", t("access.title"));
  setText("#accessHelp", t("auth.accessHelp"));
  setFieldLabel("accessEmail", t("access.email"));
  setPlaceholder("#accessEmail", t("auth.emailPlaceholder"));
  setFieldLabel("accessRole", t("access.role"));
  els.grantAccessButton.textContent = t("actions.grantAccess");
  setSelectLabels("accessRole", Object.keys(translations.pt.options.roles).map((role) => optionLabel("roles", role)));

  const setupMode = accessList.length === 0;
  setText("#authScreen .eyebrow", t("auth.eyebrow"));
  setText("#authTitle", setupMode ? t("auth.setupTitle") : t("auth.title"));
  setText(".auth-copy", setupMode ? t("auth.setupCopy") : t("auth.copy"));
  setFieldLabel("loginEmail", t("access.email"));
  setFieldLabel("loginPassword", t("auth.password"));
  setPlaceholder("#loginEmail", t("auth.emailPlaceholder"));
  setPlaceholder("#loginPassword", setupMode ? t("auth.setupPasswordPlaceholder") : t("auth.passwordPlaceholder"));
  setText("#loginError", setupMode ? t("auth.setupError") : t("auth.error"));
  setText("#loginForm .primary-button", setupMode ? t("actions.grantAccess") : t("actions.signIn"));

  setText("#ideaModal .eyebrow", t("ideaForm.eyebrow"));
  setText("#ideaModalTitle", editingIdeaId ? t("actions.edit") : t("ideaForm.title"));
  setFieldLabel("ideaTitle", t("ideaForm.ideaTitle"));
  setPlaceholder("#ideaTitle", t("ideaForm.ideaTitlePlaceholder"));
  setFieldLabel("ideaArea", t("ideaForm.area"));
  setFieldLabel("ideaAreaOther", t("ideaForm.areaOther"));
  setPlaceholder("#ideaAreaOther", t("ideaForm.areaOtherPlaceholder"));
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
  document.querySelector("#ideaForm .primary-button").textContent = editingIdeaId ? t("actions.save") : t("actions.submitIdea");
  document.querySelector("#clearFormButton").textContent = t("actions.clear");
  setSelectLabels("ideaArea", [t("options.select"), ...Object.keys(translations.pt.options.areas).map((value) => optionLabel("areas", value))]);
  setSelectLabels("ideaType", [t("options.select"), ...Object.keys(translations.pt.options.types).map((value) => optionLabel("types", value))]);
  setSelectLabels("ideaBenefit", [t("options.select"), ...Object.keys(translations.pt.options.benefits).map((value) => optionLabel("benefits", value))]);

  setText("#hackathonModal .eyebrow", t("hackathonForm.eyebrow"));
  setText("#hackathonModalTitle", editingHackathonId ? t("actions.edit") : t("hackathonForm.title"));
  setFieldLabel("hackathonName", t("hackathonForm.name"));
  setPlaceholder("#hackathonName", t("hackathonForm.namePlaceholder"));
  setFieldLabel("hackathonGoal", t("hackathonForm.goal"));
  setPlaceholder("#hackathonGoal", t("hackathonForm.goalPlaceholder"));
  setFieldLabel("hackathonStartDate", t("hackathonForm.startDate"));
  setFieldLabel("hackathonEndDate", t("hackathonForm.endDate"));
  setFieldLabel("hackathonRules", t("hackathonForm.rules"));
  setPlaceholder("#hackathonRules", t("hackathonForm.rulesPlaceholder"));
  setText("#hackathonImageLabel", pendingHackathonImage ? t("common.imageLoaded") : t("hackathonForm.addImage"));
  document.querySelector("#hackathonImage").closest(".field").querySelector("span").textContent = t("hackathonForm.image");
  document.querySelector("#participantEmail").closest(".field").querySelector("span").textContent = t("hackathonForm.participants");
  setPlaceholder("#participantEmail", t("hackathonForm.participantPlaceholder"));
  document.querySelector("#juryName").closest(".field").querySelector("span").textContent = t("hackathonForm.jury");
  setPlaceholder("#juryName", t("hackathonForm.juryName"));
  setPlaceholder("#juryPhone", t("hackathonForm.juryPhone"));
  setPlaceholder("#juryEmail", t("auth.emailPlaceholder"));
  els.addParticipantButton.textContent = t("actions.add");
  els.addJuryButton.textContent = t("actions.add");
  document.querySelector("#hackathonForm .primary-button").textContent = editingHackathonId ? t("actions.save") : t("actions.createHackathon");
  document.querySelector("#clearHackathonButton").textContent = t("actions.clear");

  setText("#challengeModal .eyebrow", t("challengeForm.eyebrow"));
  setText("#challengeModalTitle", t("challengeForm.title"));
  setFieldLabel("challengeText", t("challengeForm.challenge"));
  setPlaceholder("#challengeText", t("challengeForm.challengePlaceholder"));
  setFieldLabel("challengeStartDate", t("challengeForm.startDate"));
  setFieldLabel("challengeEndDate", t("challengeForm.endDate"));
  document.querySelector("#challengeForm .primary-button").textContent = t("actions.createChallenge");
  document.querySelector("#clearChallengeButton").textContent = t("actions.clear");

  setText("#hackathonSubmissionModal .eyebrow", t("applicationForm.eyebrow"));
  setText("#hackathonSubmissionTitle", t("applicationForm.title"));
  setFieldLabel("hackathonSubmissionTitleInput", t("applicationForm.ideaTitle"));
  setPlaceholder("#hackathonSubmissionTitleInput", t("applicationForm.ideaTitlePlaceholder"));
  setFieldLabel("hackathonSubmissionProposal", t("applicationForm.proposal"));
  setPlaceholder("#hackathonSubmissionProposal", t("applicationForm.proposalPlaceholder"));
  setFieldLabel("hackathonSubmissionAuthor", t("applicationForm.author"));
  document.querySelector("#hackathonSubmissionForm .primary-button").textContent = t("actions.submitApplication");
  document.querySelector("#clearHackathonSubmissionButton").textContent = t("actions.clear");
}

function setView(view) {
  if (view === "manage" && !isAdmin()) view = "home";
  els.navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  els.views.forEach((viewEl) => viewEl.classList.toggle("active", viewEl.id === `${view}View`));
  els.viewTitle.textContent = t(`views.${view}`);
  document.body.dataset.view = view;
  els.openIdeaModalButton.classList.toggle("hidden", view !== "explore");
  els.openHackathonModalButton.classList.add("hidden");
  els.exportButton.classList.toggle("hidden", view !== "manage" || !isAdmin());
  if (view !== "explore") els.ideaDetailPanel.classList.add("hidden");
  if (view !== "hackathons") els.hackathonDetailPanel.classList.add("hidden");
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
    return canViewIdea(idea) && matchesStatus && (!query || haystack.includes(query));
  });

  if (els.sortSelect.value === "impact") sorted.sort((a, b) => b.impact - a.impact);
  if (els.sortSelect.value === "recent") sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return sorted;
}

function renderStats() {
  const visibleIdeas = ideas.filter(canViewIdea);
  const visibleItems = [...ideas.filter(canViewIdea), ...hackathons.filter(canViewHackathon)];
  els.totalIdeas.textContent = visibleIdeas.length;
  els.pilotIdeas.textContent = visibleIdeas.filter((idea) => idea.status === "Em piloto").length;
  els.implementedCount.textContent = visibleIdeas.filter((idea) => idea.status === "Implementada").length;
  els.topVotes.textContent = visibleItems.filter((item) => item.status === "Pendente aprovação").length;
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
      renderIdeaDetailPanel();
    });
    if (canManageIdea(idea)) {
      const editButton = document.createElement("button");
      editButton.className = "text-button";
      editButton.type = "button";
      editButton.textContent = t("actions.edit");
      editButton.addEventListener("click", () => openIdeaEditor(idea.id));
      card.appendChild(editButton);
    }
    els.ideasGrid.appendChild(card);
  });
}

function renderHackathons() {
  const template = document.getElementById("hackathonCardTemplate");
  els.hackathonsGrid.innerHTML = "";
  const visibleItems = hackathons
    .filter(canViewHackathon)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!visibleItems.length) {
    els.hackathonsGrid.innerHTML = `<p class="empty-state">${t("common.noHackathons")}</p>`;
    return;
  }

  visibleItems
    .forEach((hackathon) => {
      const card = template.content.firstElementChild.cloneNode(true);
      const media = card.querySelector(".hackathon-media");
      if (hackathon.image) {
        media.style.backgroundImage = `url("${hackathon.image}")`;
        media.textContent = "";
      } else {
        media.textContent = (hackathon.type === "challenge" ? "D" : hackathon.name.slice(0, 2)).toUpperCase();
      }
      card.querySelector(".status-pill").textContent = hackathon.status === "Pendente aprovação" ? t("hackathons.pending") : t("hackathons.open");
      card.querySelector(".status-pill").className = `status-pill ${statusClass[hackathon.status] || ""}`;
      card.querySelector(".participant-count").textContent = `${hackathon.participants.length} ${t("common.participants")}`;
      card.querySelector("h3").textContent = hackathon.name;
      card.querySelector(".idea-summary").textContent = hackathon.goal;
      const invitesSent = Boolean(hackathon.invitesSentAt);
      const dateText = formatDateRange(hackathon.startDate, hackathon.endDate);
      card.querySelector(".card-meta").innerHTML = `
        <span class="meta-chip">${hackathon.type === "challenge" ? t("hackathons.challenge") : "Hackathon"}</span>
        <span class="meta-chip">${formatDate(hackathon.createdAt)}</span>
        <span class="meta-chip">${dateText ? escapeHtml(dateText) : t("common.definedDates")}</span>
        <span class="meta-chip">${hackathon.jury?.length || 0} ${t("hackathons.jury")}</span>
        <span class="meta-chip">${invitesSent ? t("hackathons.invitesSent") : t("hackathons.invitesPending")}</span>
      `;
      const detailButton = card.querySelector(".text-button");
      detailButton.textContent = t("actions.viewDetail");
      detailButton.addEventListener("click", () => {
        selectedHackathonId = hackathon.id;
        renderHackathonDetailPanel();
      });
      if (canManageHackathon(hackathon)) {
        const editButton = document.createElement("button");
        editButton.className = "text-button";
        editButton.type = "button";
        editButton.textContent = t("actions.edit");
        editButton.addEventListener("click", () => openHackathonEditor(hackathon.id));
        card.appendChild(editButton);
      }
      els.hackathonsGrid.appendChild(card);
    });
}

function renderHackathonDetailPanel() {
  const item = hackathons.find((hackathon) => hackathon.id === selectedHackathonId);
  if (!item || !canViewHackathon(item)) {
    els.hackathonDetailPanel.innerHTML = `<p class="empty-state">${t("common.noHackathons")}</p>`;
    els.hackathonDetailPanel.classList.remove("hidden");
    return;
  }

  const canApprove = isAdmin() && item.status === "Pendente aprovação";
  const canDelete = canManageHackathon(item);
  const canEdit = canManageHackathon(item);
  const canApply = isPublicItem(item) && item.type === "hackathon";
  const canEvaluate = canEvaluateHackathon(item);
  const jury = item.jury?.length
    ? item.jury.map((member) => `<div class="comment"><small>${escapeHtml(member.name)} · ${escapeHtml(member.phone)}</small>${escapeHtml(member.email)}</div>`).join("")
    : `<p class="empty-state">${t("common.noJury")}</p>`;
  const link = buildHackathonLink(item.id);
  const submissions = canEvaluate ? renderHackathonSubmissions(item, canEvaluate) : "";

  els.hackathonDetailPanel.innerHTML = `
    <div class="detail-head">
      <div>
        <span class="status-pill ${statusClass[item.status]}">${escapeHtml(labelForStatus(item.status))}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="empty-state">${item.type === "challenge" ? t("hackathons.challenge") : "Hackathon"} · ${formatDateRange(item.startDate, item.endDate) || t("common.definedDates")}</p>
      </div>
      <div class="detail-actions">
        ${canApprove ? `<button class="primary-button" data-action="approve-hackathon" type="button">${t("actions.approve")}</button>` : ""}
        ${canApply ? `<button class="primary-button" data-action="apply-hackathon" type="button">${t("actions.applyHackathon")}</button>` : ""}
        <button class="secondary-button" data-action="copy-hackathon-link" type="button">${t("actions.copyLink")}</button>
        ${canEdit ? `<button class="secondary-button" data-action="edit-hackathon" type="button">${t("actions.edit")}</button>` : ""}
        ${canDelete ? `<button class="danger-button" data-action="delete-hackathon" type="button">${t("actions.delete")}</button>` : ""}
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-item"><strong>${item.type === "challenge" ? t("hackathons.challengePrompt") : t("hackathonForm.goal")}</strong>${escapeHtml(item.goal)}</div>
      <div class="detail-item"><strong>${t("common.participants")}</strong>${item.participants.length}</div>
      <div class="detail-item"><strong>${t("hackathons.jury")}</strong>${item.jury?.length || 0}</div>
    </div>

    <div class="detail-item"><strong>${t("hackathons.rules")}</strong>${escapeHtml(item.rules)}</div>
    <div class="detail-item"><strong>${t("hackathons.shareLink")}</strong><code>${escapeHtml(link)}</code></div>
    <h4>${t("hackathons.jury")}</h4>
    <div class="comment-list">${jury}</div>
    ${submissions}
  `;

  els.hackathonDetailPanel.querySelector("[data-action='approve-hackathon']")?.addEventListener("click", () => approveHackathon(item.id));
  els.hackathonDetailPanel.querySelector("[data-action='apply-hackathon']")?.addEventListener("click", () => openHackathonSubmission(item.id));
  els.hackathonDetailPanel.querySelector("[data-action='copy-hackathon-link']")?.addEventListener("click", () => copyHackathonLink(item.id));
  els.hackathonDetailPanel.querySelector("[data-action='edit-hackathon']")?.addEventListener("click", () => openHackathonEditor(item.id));
  els.hackathonDetailPanel.querySelector("[data-action='delete-hackathon']")?.addEventListener("click", () => deleteHackathon(item.id));
  els.hackathonDetailPanel.querySelectorAll("[data-submission-rank]").forEach((select) => {
    select.addEventListener("change", () => updateSubmissionRank(item.id, select.dataset.submissionRank, select.value));
  });
  els.hackathonDetailPanel.classList.remove("hidden");
  els.hackathonDetailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderHackathonSubmissions(item, canEvaluate) {
  const submissions = item.submissions || [];
  const rows = submissions.length
    ? submissions
      .slice()
      .sort((a, b) => getSubmissionScore(b) - getSubmissionScore(a) || new Date(a.createdAt) - new Date(b.createdAt))
      .map((submission) => {
        const currentRank = submission.votes?.[currentUserEmail] || "";
        return `
          <article class="submission-card">
            <div>
              <strong>${escapeHtml(submission.title)}</strong>
              <span>${escapeHtml(submission.author)} · ${formatDate(submission.createdAt)} · ${t("hackathons.score")} ${getSubmissionScore(submission)}</span>
            </div>
            <p>${escapeHtml(submission.proposal)}</p>
            ${canEvaluate ? `
              <label class="compact-field">
                <span>${t("hackathons.evaluation")}</span>
                <select data-submission-rank="${submission.id}">
                  <option value="">-</option>
                  <option value="1" ${currentRank === "1" ? "selected" : ""}>${t("hackathons.firstChoice")}</option>
                  <option value="2" ${currentRank === "2" ? "selected" : ""}>${t("hackathons.secondChoice")}</option>
                  <option value="3" ${currentRank === "3" ? "selected" : ""}>${t("hackathons.thirdChoice")}</option>
                </select>
              </label>
            ` : ""}
          </article>
        `;
      }).join("")
    : `<p class="empty-state">${t("hackathons.noSubmissions")}</p>`;

  return `
    <section class="submission-panel">
      <h4>${t("hackathons.submissions")}</h4>
      <div class="submission-list">${rows}</div>
    </section>
  `;
}

function getSubmissionScore(submission) {
  const points = { "1": 3, "2": 2, "3": 1 };
  return Object.values(submission.votes || {}).reduce((total, rank) => total + (points[rank] || 0), 0);
}

function buildHackathonLink(id) {
  return `${window.location.origin}${window.location.pathname}?hackathon=${encodeURIComponent(id)}`;
}

async function copyHackathonLink(id) {
  try {
    await navigator.clipboard.writeText(buildHackathonLink(id));
    showToast(t("messages.linkCopied"));
  } catch {
    showToast(buildHackathonLink(id));
  }
}

function openHackathonCreator() {
  editingHackathonId = null;
  resetHackathonForm();
  applyLanguage();
  openModal("hackathonModal");
}

function openHackathonEditor(id) {
  const item = hackathons.find((hackathon) => hackathon.id === id);
  if (!item || !canManageHackathon(item)) return;

  editingHackathonId = id;
  if (item.type === "challenge") {
    els.challengeForm.reset();
    els.challengeForm.elements.challenge.value = item.goal;
    els.challengeForm.elements.startDate.value = item.startDate;
    els.challengeForm.elements.endDate.value = item.endDate;
    applyLanguage();
    openModal("challengeModal");
    return;
  }

  els.hackathonForm.reset();
  pendingParticipants = [...item.participants];
  pendingJury = [...(item.jury || [])];
  pendingHackathonImage = item.image || "";
  els.hackathonForm.elements.name.value = item.name;
  els.hackathonForm.elements.goal.value = item.goal;
  els.hackathonForm.elements.startDate.value = item.startDate;
  els.hackathonForm.elements.endDate.value = item.endDate;
  els.hackathonForm.elements.rules.value = item.rules;
  els.hackathonImageLabel.textContent = pendingHackathonImage ? t("common.imageLoaded") : t("hackathonForm.addImage");
  els.hackathonImagePreview.classList.toggle("hidden", !pendingHackathonImage);
  els.hackathonImagePreview.style.backgroundImage = pendingHackathonImage ? `url("${pendingHackathonImage}")` : "";
  renderParticipants();
  renderJury();
  applyLanguage();
  openModal("hackathonModal");
}

function saveHackathonFromForm(formData) {
  if (!editingHackathonId) {
    const hackathon = createHackathon(formData);
    hackathons.unshift(hackathon);
    selectedHackathonId = hackathon.id;
    showToast(t("messages.hackathonCreated"));
  } else {
    const item = hackathons.find((hackathon) => hackathon.id === editingHackathonId);
    if (!item || !canManageHackathon(item)) return;
    item.name = formData.get("name").trim();
    item.goal = formData.get("goal").trim();
    item.rules = formData.get("rules").trim();
    item.startDate = formData.get("startDate");
    item.endDate = formData.get("endDate");
    item.participants = [...pendingParticipants];
    item.jury = [...pendingJury];
    item.image = pendingHackathonImage;
    if (!isAdmin()) {
      item.status = "Pendente aprovação";
      item.published = false;
      item.invitesSentAt = "";
    }
    selectedHackathonId = item.id;
    showToast(t("messages.hackathonUpdated"));
  }
  saveHackathons();
}

function saveChallengeFromForm(formData) {
  const challenge = formData.get("challenge").trim();
  if (!editingHackathonId) {
    const item = createChallenge(formData);
    hackathons.unshift(item);
    selectedHackathonId = item.id;
    showToast(t("messages.challengeCreated"));
  } else {
    const item = hackathons.find((hackathon) => hackathon.id === editingHackathonId);
    if (!item || !canManageHackathon(item)) return;
    item.name = challenge.slice(0, 80);
    item.goal = challenge;
    item.rules = challenge;
    item.startDate = formData.get("startDate");
    item.endDate = formData.get("endDate");
    if (!isAdmin()) {
      item.status = "Pendente aprovação";
      item.published = false;
    }
    selectedHackathonId = item.id;
    showToast(t("messages.challengeUpdated"));
  }
  saveHackathons();
}

function openHackathonSubmission(id) {
  const item = hackathons.find((hackathon) => hackathon.id === id);
  if (!item || !isPublicItem(item)) return;
  activeSubmissionHackathonId = id;
  els.hackathonSubmissionForm.reset();
  openModal("hackathonSubmissionModal");
}

function saveHackathonSubmission(formData) {
  const item = hackathons.find((hackathon) => hackathon.id === activeSubmissionHackathonId);
  if (!item || !isPublicItem(item)) return;
  item.submissions = item.submissions || [];
  item.submissions.unshift({
    id: crypto.randomUUID(),
    title: formData.get("title").trim(),
    proposal: formData.get("proposal").trim(),
    author: formData.get("author").trim(),
    authorEmail: currentUserEmail,
    votes: {},
    createdAt: new Date().toISOString()
  });
  saveHackathons();
  showToast(t("messages.applicationSubmitted"));
}

function updateSubmissionRank(hackathonId, submissionId, rank) {
  const item = hackathons.find((hackathon) => hackathon.id === hackathonId);
  if (!item || !canEvaluateHackathon(item)) return;
  item.submissions = item.submissions || [];
  item.submissions.forEach((submission) => {
    submission.votes = submission.votes || {};
    if (submission.votes[currentUserEmail] === rank || submission.id === submissionId) {
      delete submission.votes[currentUserEmail];
    }
  });
  if (rank) {
    const submission = item.submissions.find((candidate) => candidate.id === submissionId);
    if (submission) submission.votes[currentUserEmail] = rank;
  }
  saveHackathons();
  showToast(t("messages.applicationUpdated"));
  renderHackathonDetailPanel();
}

function approveHackathon(id) {
  const item = hackathons.find((hackathon) => hackathon.id === id);
  if (!item || !isAdmin()) return;
  item.status = "Nova";
  item.published = true;
  if (item.participants.length && !item.invitesSentAt) item.invitesSentAt = new Date().toISOString();
  saveHackathons();
  showToast(t("messages.itemApproved"));
  renderAll();
  selectedHackathonId = id;
  renderHackathonDetailPanel();
}

function deleteHackathon(id) {
  const item = hackathons.find((hackathon) => hackathon.id === id);
  if (!item || !canManageHackathon(item)) return;
  hackathons = hackathons.filter((hackathon) => hackathon.id !== id);
  if (selectedHackathonId === id) selectedHackathonId = hackathons[0]?.id || null;
  els.hackathonDetailPanel.classList.add("hidden");
  saveHackathons();
  showToast(t("messages.itemDeleted"));
  renderAll();
}

function renderAccessList() {
  els.accessList.innerHTML = "";
  if (!isAdmin()) {
    els.accessList.innerHTML = `<p class="empty-state">${t("common.noAccess")}</p>`;
    return;
  }

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
          <span>${escapeHtml(optionLabel("roles", access.role))} · ${escapeHtml(labelForInviteStatus(access.inviteStatus || "Convite enviado"))} · ${t("common.since")} ${formatDate(access.createdAt)}</span>
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
  const reviewableIdeas = ideas.filter(canViewIdea);

  statusOrder.forEach((status) => {
    const laneIdeas = reviewableIdeas
      .filter((idea) => idea.status === status)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

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
        <span>${t("detail.impact")} ${idea.impact}/5 · ${escapeHtml(optionLabel("areas", idea.area))}</span>
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
  renderIdeaDetail(els.detailPanel, selectedIdeaId, "manage");
}

function renderIdeaDetailPanel() {
  renderIdeaDetail(els.ideaDetailPanel, selectedIdeaId, "explore");
  els.ideaDetailPanel.classList.remove("hidden");
  els.ideaDetailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderIdeaDetail(container, ideaId, context) {
  const idea = ideas.find((item) => item.id === ideaId);
  if (!idea) {
    container.innerHTML = `<p class="empty-state">${t("common.noDetail")}</p>`;
    return;
  }

  if (!canViewIdea(idea)) {
    container.innerHTML = `<p class="empty-state">${t("common.noDetail")}</p>`;
    return;
  }

  const comments = idea.comments.length
    ? idea.comments.map((comment) => `<div class="comment"><small>${escapeHtml(comment.author)}</small>${escapeHtml(comment.text)}</div>`).join("")
    : `<p class="empty-state">${t("common.noComments")}</p>`;
  const canDelete = canManageIdea(idea);
  const canApprove = isAdmin() && idea.status === "Pendente aprovação";
  const managementActions = `
    <div class="detail-actions">
      ${canApprove ? `<button class="primary-button" data-action="approve-idea" type="button">${t("actions.approve")}</button>` : ""}
      ${canDelete ? `<button class="secondary-button" data-action="edit-idea" type="button">${t("actions.edit")}</button>` : ""}
      ${canDelete ? `<button class="danger-button" data-action="delete-idea" type="button">${t("actions.delete")}</button>` : ""}
    </div>
  `;
  const reviewActions = isAdmin() ? `
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
  ` : "";

  container.innerHTML = `
    <div class="detail-head">
      <div>
        <span class="status-pill ${statusClass[idea.status]}">${escapeHtml(labelForStatus(idea.status))}</span>
        <h3>${escapeHtml(idea.title)}</h3>
        <p class="empty-state">${escapeHtml(idea.author)} · ${formatDate(idea.createdAt)}</p>
      </div>
      ${managementActions}
    </div>

    <div class="detail-grid">
      <div class="detail-item"><strong>${t("detail.area")}</strong>${escapeHtml(optionLabel("areas", idea.area))}</div>
      <div class="detail-item"><strong>${t("detail.type")}</strong>${escapeHtml(optionLabel("types", idea.type))}</div>
      <div class="detail-item"><strong>${t("detail.benefit")}</strong>${escapeHtml(optionLabel("benefits", idea.benefit))}</div>
      <div class="detail-item"><strong>${t("detail.impact")}</strong>${idea.impact}/5</div>
      <div class="detail-item"><strong>${t("detail.effort")}</strong>${idea.effort}/5</div>
    </div>

    <div class="detail-item"><strong>${t("detail.problem")}</strong>${escapeHtml(idea.problem)}</div>
    <br>
    <div class="detail-item"><strong>${t("detail.solution")}</strong>${escapeHtml(idea.solution)}</div>

    <h4>${t("detail.comments")}</h4>
    <div class="comment-list">${comments}</div>

    ${reviewActions}
  `;

  container.querySelector("[data-action='approve-idea']")?.addEventListener("click", () => approveIdea(idea.id));
  container.querySelector("[data-action='edit-idea']")?.addEventListener("click", () => openIdeaEditor(idea.id));
  container.querySelector("[data-action='delete-idea']")?.addEventListener("click", () => deleteIdea(idea.id));
  container.querySelector("#saveDetailButton")?.addEventListener("click", () => {
    const nextStatus = container.querySelector("#detailStatus").value;
    const comment = container.querySelector("#detailComment").value.trim();
    idea.status = nextStatus;
    idea.published = nextStatus !== "Pendente aprovação";
    if (comment) idea.comments.push({ author: t("nav.manage"), text: comment });
    saveIdeas();
    showToast(t("messages.ideaUpdated"));
    renderAll();
  });
}

function openIdeaCreator() {
  editingIdeaId = null;
  els.form.reset();
  toggleOtherFields();
  applyLanguage();
  openModal("ideaModal");
}

function openIdeaEditor(id) {
  const idea = ideas.find((item) => item.id === id);
  if (!idea || !canManageIdea(idea)) return;
  editingIdeaId = id;
  els.form.reset();
  els.form.elements.title.value = idea.title;
  setSelectOrOther(els.ideaArea, els.ideaAreaOther, idea.area, translations.pt.options.areas);
  setSelectOrOther(els.ideaType, els.ideaTypeOther, idea.type, translations.pt.options.types);
  els.form.elements.problem.value = idea.problem;
  els.form.elements.solution.value = idea.solution;
  setSelectOrOther(els.ideaBenefit, els.ideaBenefitOther, idea.benefit, translations.pt.options.benefits);
  els.form.elements.author.value = idea.author;
  toggleOtherFields();
  applyLanguage();
  openModal("ideaModal");
}

function setSelectOrOther(select, otherInput, value, options) {
  if (Object.prototype.hasOwnProperty.call(options, value)) {
    select.value = value;
    otherInput.value = "";
    return;
  }
  select.value = "Outro";
  otherInput.value = value;
}

function saveIdeaFromForm(formData) {
  if (!editingIdeaId) {
    const idea = createIdea(formData);
    ideas.unshift(idea);
    selectedIdeaId = idea.id;
    showToast(t("messages.ideaPending"));
  } else {
    const idea = ideas.find((item) => item.id === editingIdeaId);
    if (!idea || !canManageIdea(idea)) return;
    idea.title = formData.get("title").trim();
    idea.area = getCustomOrSelected(formData, "area", "areaOther");
    idea.type = getCustomOrSelected(formData, "type", "typeOther");
    idea.problem = formData.get("problem").trim();
    idea.solution = formData.get("solution").trim();
    idea.benefit = getCustomOrSelected(formData, "benefit", "benefitOther");
    idea.author = formData.get("author").trim() || t("common.employeeFallback");
    if (!isAdmin()) {
      idea.status = "Pendente aprovação";
      idea.published = false;
    }
    selectedIdeaId = idea.id;
    showToast(t("messages.ideaUpdated"));
  }
  saveIdeas();
}

function approveIdea(id) {
  const idea = ideas.find((item) => item.id === id);
  if (!idea || !isAdmin()) return;
  idea.status = "Nova";
  idea.published = true;
  saveIdeas();
  showToast(t("messages.itemApproved"));
  renderAll();
}

function deleteIdea(id) {
  const idea = ideas.find((item) => item.id === id);
  if (!idea || !canManageIdea(idea)) return;
  ideas = ideas.filter((item) => item.id !== id);
  if (selectedIdeaId === id) selectedIdeaId = ideas[0]?.id || null;
  els.ideaDetailPanel.classList.add("hidden");
  saveIdeas();
  showToast(t("messages.itemDeleted"));
  renderAll();
}

function getCustomOrSelected(formData, selectName, otherName) {
  const selected = formData.get(selectName);
  const custom = formData.get(otherName)?.trim();
  return selected === "Outro" && custom ? custom : selected;
}

function toggleOtherFields() {
  const areaIsOther = els.ideaArea.value === "Outro";
  els.ideaAreaOtherField.classList.toggle("hidden", !areaIsOther);
  els.ideaAreaOther.required = areaIsOther;
  if (!areaIsOther) els.ideaAreaOther.value = "";

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
    area: getCustomOrSelected(formData, "area", "areaOther"),
    type: getCustomOrSelected(formData, "type", "typeOther"),
    problem: formData.get("problem").trim(),
    solution: formData.get("solution").trim(),
    benefit: getCustomOrSelected(formData, "benefit", "benefitOther"),
    author: formData.get("author").trim() || t("common.employeeFallback"),
    authorEmail: currentUserEmail,
    anonymous: false,
    status: "Pendente aprovação",
    published: false,
    impact: 3,
    effort: 2,
    comments: [],
    createdAt: new Date().toISOString()
  };
}

function createHackathon(formData) {
  return {
    id: crypto.randomUUID(),
    type: "hackathon",
    name: formData.get("name").trim(),
    goal: formData.get("goal").trim(),
    rules: formData.get("rules").trim(),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    participants: [...pendingParticipants],
    jury: [...pendingJury],
    submissions: [],
    image: pendingHackathonImage,
    creatorEmail: currentUserEmail,
    status: "Pendente aprovação",
    published: false,
    invitesSentAt: "",
    createdAt: new Date().toISOString()
  };
}

function createChallenge(formData) {
  const challenge = formData.get("challenge").trim();
  return {
    id: crypto.randomUUID(),
    type: "challenge",
    name: challenge.slice(0, 80),
    goal: challenge,
    rules: challenge,
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    participants: [],
    jury: [],
    submissions: [],
    image: "",
    creatorEmail: currentUserEmail,
    status: "Pendente aprovação",
    published: false,
    invitesSentAt: "",
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
  const visibleIdeas = ideas.filter(canViewIdea);
  const visibleHackathons = hackathons.filter(canViewHackathon);

  homeIdeasCount.textContent = visibleIdeas.length;
  homeHackathonsCount.textContent = visibleHackathons.length;
  homeAccessCount.textContent = isAdmin() ? accessList.length : Number(Boolean(getCurrentUser()));

  const topIdea = [...visibleIdeas].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  if (topIdea) {
    homeTopIdeaTitle.textContent = topIdea.title;
    homeTopIdeaMeta.textContent = `${labelForStatus(topIdea.status)} · ${optionLabel("areas", topIdea.area)}`;
  } else {
    homeTopIdeaTitle.textContent = t("home.noIdeas");
    homeTopIdeaMeta.textContent = t("home.topIdeaHelp");
  }

  const latestHackathon = [...visibleHackathons].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  if (latestHackathon) {
    homeHackathonTitle.textContent = latestHackathon.name;
    homeHackathonMeta.textContent = `${latestHackathon.participants.length} ${t("common.participants")} · ${latestHackathon.startDate ? formatDate(latestHackathon.startDate) : t("common.definedDates").toLowerCase()}`;
  } else {
    homeHackathonTitle.textContent = t("home.noHackathons");
    homeHackathonMeta.textContent = t("home.hackathonHelp");
  }
}

function grantAccess() {
  if (!isAdmin()) return;
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
  return `${subject}\n\n${intro}\n\nEmail: ${access.email}\n${t("common.temporaryPassword")}: ${access.password}\nLink: ${window.location.origin}${window.location.pathname}`;
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

function isAdmin() {
  return getCurrentUser()?.role === "Administrador";
}

function isCreator(email) {
  return Boolean(email && currentUserEmail && email === currentUserEmail);
}

function canManageIdea(idea) {
  return isAdmin() || isCreator(idea.authorEmail);
}

function canManageHackathon(item) {
  return isAdmin() || isCreator(item.creatorEmail);
}

function canViewIdea(idea) {
  return isAdmin() || isPublicItem(idea) || isCreator(idea.authorEmail);
}

function canViewHackathon(item) {
  return isAdmin() || isPublicItem(item) || isCreator(item.creatorEmail);
}

function isJuryForHackathon(item) {
  return Boolean(currentUserEmail && item?.jury?.some((member) => member.email === currentUserEmail));
}

function canEvaluateHackathon(item) {
  return isAdmin() || isJuryForHackathon(item);
}

function isPublicItem(item) {
  return item.published && item.status !== "Pendente aprovação";
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
    processDeepLink();
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
  processDeepLink();
}

function logout() {
  currentUserEmail = "";
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
  updateAuthState();
  showToast(t("messages.signedOut"));
}

function processDeepLink() {
  if (!getCurrentUser()) return;
  const params = new URLSearchParams(window.location.search);
  const hackathonId = params.get("hackathon");
  if (!hackathonId) return;
  const item = hackathons.find((hackathon) => hackathon.id === hackathonId);
  if (!item) return;
  selectedHackathonId = item.id;
  setView("hackathons");
  renderHackathonDetailPanel();
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

function addJuryMember() {
  const name = els.juryName.value.trim();
  const phone = els.juryPhone.value.trim();
  const email = els.juryEmail.value.trim().toLowerCase();
  if (!name && !phone && !email) return;
  if (!name || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast(t("messages.invalidEmail"));
    return;
  }
  if (pendingJury.some((member) => member.email === email)) {
    showToast(t("messages.duplicateParticipant"));
    return;
  }
  pendingJury.push({ name, phone, email });
  els.juryName.value = "";
  els.juryPhone.value = "";
  els.juryEmail.value = "";
  renderJury();
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

function renderJury() {
  els.juryList.innerHTML = "";
  pendingJury.forEach((member) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "participant-chip";
    chip.textContent = `${member.name} · ${member.email} ×`;
    chip.addEventListener("click", () => {
      pendingJury = pendingJury.filter((item) => item.email !== member.email);
      renderJury();
    });
    els.juryList.appendChild(chip);
  });
}

function resetHackathonForm() {
  els.hackathonForm.reset();
  pendingParticipants = [];
  pendingHackathonImage = "";
  pendingJury = [];
  els.hackathonImageLabel.textContent = t("hackathonForm.addImage");
  els.hackathonImagePreview.classList.add("hidden");
  els.hackathonImagePreview.style.backgroundImage = "";
  renderParticipants();
  renderJury();
}

function resetChallengeForm() {
  els.challengeForm.reset();
}

function renderAll() {
  renderStats();
  renderHome();
  renderIdeas();
  renderHackathons();
  renderAccessList();
  renderPipeline();
  renderDetail();
  if (!els.ideaDetailPanel.classList.contains("hidden")) renderIdeaDetail(els.ideaDetailPanel, selectedIdeaId, "explore");
  if (!els.hackathonDetailPanel.classList.contains("hidden")) renderHackathonDetailPanel();
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
    ? `${t("common.teamsIdeaSubmitted")}: ${latest.title}\n${t("detail.area")}: ${optionLabel("areas", latest.area)}\n${t("detail.benefit")}: ${optionLabel("benefits", latest.benefit)}\n${t("filters.status")}: ${labelForStatus(latest.status)}`
    : t("common.teamsFallback");

  try {
    await navigator.clipboard.writeText(message);
    showToast(t("messages.teamsCopied"));
  } catch {
    showToast(`${t("common.teamsLabel")}: ${message}`);
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
els.openIdeaModalButton.addEventListener("click", openIdeaCreator);
els.openHackathonModalButton.addEventListener("click", openHackathonCreator);
els.openHackathonModalButtonInline.addEventListener("click", openHackathonCreator);
els.openChallengeModalButton.addEventListener("click", () => {
  editingHackathonId = null;
  resetChallengeForm();
  applyLanguage();
  openModal("challengeModal");
});
document.getElementById("homeSubmitIdeaButton").addEventListener("click", openIdeaCreator);
document.getElementById("homeCreateHackathonButton").addEventListener("click", openHackathonCreator);
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
els.addJuryButton.addEventListener("click", addJuryMember);
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
els.juryEmail.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addJuryMember();
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

els.ideaArea.addEventListener("change", toggleOtherFields);
els.ideaType.addEventListener("change", toggleOtherFields);
els.ideaBenefit.addEventListener("change", toggleOtherFields);

els.clearFormButton.addEventListener("click", () => {
  els.form.reset();
  toggleOtherFields();
});
els.clearHackathonButton.addEventListener("click", resetHackathonForm);
els.clearChallengeButton.addEventListener("click", resetChallengeForm);
els.clearHackathonSubmissionButton.addEventListener("click", () => els.hackathonSubmissionForm.reset());

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  saveIdeaFromForm(new FormData(els.form));
  els.form.reset();
  editingIdeaId = null;
  toggleOtherFields();
  closeModal("ideaModal");
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
  saveHackathonFromForm(formData);
  resetHackathonForm();
  editingHackathonId = null;
  closeModal("hackathonModal");
  setView("hackathons");
});

els.challengeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(els.challengeForm);
  if (formData.get("endDate") < formData.get("startDate")) {
    showToast(t("messages.endAfterStart"));
    return;
  }
  saveChallengeFromForm(formData);
  resetChallengeForm();
  editingHackathonId = null;
  closeModal("challengeModal");
  setView("hackathons");
  renderHackathonDetailPanel();
});

els.hackathonSubmissionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveHackathonSubmission(new FormData(els.hackathonSubmissionForm));
  els.hackathonSubmissionForm.reset();
  closeModal("hackathonSubmissionModal");
  renderHackathonDetailPanel();
});

renderParticipants();
renderJury();
toggleOtherFields();
updateAuthState();
setView("home");
processDeepLink();
