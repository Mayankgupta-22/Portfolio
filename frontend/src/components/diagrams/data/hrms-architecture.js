// Gravity Talent Portal — system architecture.
// Manual layout: three columns flowing left → right.
//   Column 1 (x ≈ 0):      Client portals
//   Column 2 (x ≈ 380):    Express App group with 5 nested layers
//   Column 3 (x ≈ 860):    External services / APIs

const EXPRESS_X = 380;
const EXTERNALS_X = 860;
const CARD_WIDTH = 280;
const INNER_X = 30; // child x inside ExpressApp

export const nodes = [
  // ============ Client (column 1) ============
  {
    id: "client",
    type: "archCard",
    position: { x: 0, y: 300 },
    data: {
      title: "Client",
      subtitle: "Frontend portals",
      color: "gray",
      width: 240,
      items: [
        "Candidate Frontend",
        "HR Portal",
        "Business Portal",
        "Campus Portal",
      ],
    },
  },

  // ============ Express App group (column 2) ============
  {
    id: "expressApp",
    type: "archGroup",
    position: { x: EXPRESS_X, y: 0 },
    style: { width: 340, height: 1180 },
    data: {
      title: "Express App",
      subtitle: "Node 22 + Express",
      color: "green",
    },
  },

  // === Children of Express App (positions are relative to the group) ===
  {
    id: "middleware",
    type: "archCard",
    parentId: "expressApp",
    extent: "parent",
    position: { x: INNER_X, y: 60 },
    data: {
      title: "Middleware Stack",
      color: "blue",
      width: CARD_WIDTH,
      items: [
        "Body Parser",
        "CORS",
        "Compression",
        "Passport Init",
        "Security Headers",
      ],
    },
  },
  {
    id: "auth",
    type: "archCard",
    parentId: "expressApp",
    extent: "parent",
    position: { x: INNER_X, y: 240 },
    data: {
      title: "Auth Layer",
      color: "red",
      width: CARD_WIDTH,
      items: [
        "authMiddleware — JWT verify",
        "validate — Zod schemas",
        "devskillerAuth",
        "Passport JWT",
        "Passport Google OAuth",
      ],
    },
  },
  {
    id: "routers",
    type: "archCard",
    parentId: "expressApp",
    extent: "parent",
    position: { x: INNER_X, y: 420 },
    data: {
      title: "API Routers",
      subtitle: "24 mounted routers",
      color: "purple",
      width: CARD_WIDTH,
      layout: "badges",
      items: [
        "/auth",
        "/google",
        "/public-profile",
        "/candidates",
        "/candidate-invite",
        "/jobs",
        "/job-applications",
        "/jobroles",
        "/skills",
        "/file",
        "/partners",
        "/businesses",
        "/devskiller",
        "/interviewers",
        "/users",
        "/backup",
        "/campuses",
        "/company",
        "/organizations",
        "/institutions",
        "/projects",
        "/languages",
        "/dashboard",
        "/certifications",
      ],
    },
  },
  {
    id: "controllers",
    type: "archCard",
    parentId: "expressApp",
    extent: "parent",
    position: { x: INNER_X, y: 730 },
    data: {
      title: "Controllers",
      color: "orange",
      width: CARD_WIDTH,
      items: [
        "AuthController",
        "CandidateController",
        "JobApplicationController",
        "UserController",
        "FileController",
        "CandidateInviteController",
      ],
    },
  },
  {
    id: "services",
    type: "archCard",
    parentId: "expressApp",
    extent: "parent",
    position: { x: INNER_X, y: 940 },
    data: {
      title: "Services",
      color: "yellow",
      width: CARD_WIDTH,
      items: [
        "CalendarSyncService",
        "CandidateEvaluationService (Gemini)",
        "GmailService",
        "CV Parser (aiTaskRunners)",
        "Cron — databaseBackup",
      ],
    },
  },

  // ============ External services (column 3) ============
  {
    id: "mongodb",
    type: "archCard",
    position: { x: EXTERNALS_X, y: 40 },
    data: { title: "MongoDB", subtitle: "Mongoose ODM", color: "green", width: 220 },
  },
  {
    id: "s3",
    type: "archCard",
    position: { x: EXTERNALS_X, y: 170 },
    data: { title: "AWS S3", subtitle: "File storage", color: "orange", width: 220 },
  },
  {
    id: "gemini",
    type: "archCard",
    position: { x: EXTERNALS_X, y: 300 },
    data: { title: "Gemini API", subtitle: "gemini-2.5-flash", color: "blue", width: 220 },
  },
  {
    id: "google",
    type: "archCard",
    position: { x: EXTERNALS_X, y: 430 },
    data: { title: "Google APIs", subtitle: "Calendar, Gmail, OAuth", color: "blue", width: 220 },
  },
  {
    id: "devskiller",
    type: "archCard",
    position: { x: EXTERNALS_X, y: 560 },
    data: { title: "Devskiller", subtitle: "Assessments + webhooks", color: "purple", width: 220 },
  },
  {
    id: "linkedin",
    type: "archCard",
    position: { x: EXTERNALS_X, y: 690 },
    data: { title: "LinkedIn", subtitle: "OAuth + sourcing", color: "blue", width: 220 },
  },
  {
    id: "email",
    type: "archCard",
    position: { x: EXTERNALS_X, y: 820 },
    data: { title: "Email", subtitle: "Nodemailer / Resend", color: "gray", width: 220 },
  },
];

const ed = (id, source, target, opts = {}) => ({
  id,
  source,
  target,
  type: "smoothstep",
  style: { strokeWidth: 1.5, stroke: "var(--color-muted-foreground)", opacity: 0.6 },
  ...opts,
});

export const edges = [
  // Client → Express App (entering at Middleware on the left)
  ed("client-mw", "client", "middleware", { sourceHandle: "r", targetHandle: "l" }),

  // Vertical pipeline inside Express App
  ed("mw-auth",      "middleware",  "auth",        { sourceHandle: "b", targetHandle: "t" }),
  ed("auth-routers", "auth",        "routers",     { sourceHandle: "b", targetHandle: "t" }),
  ed("rout-ctrl",    "routers",     "controllers", { sourceHandle: "b", targetHandle: "t" }),
  ed("ctrl-svc",     "controllers", "services",    { sourceHandle: "b", targetHandle: "t" }),

  // Controllers / Services → external services
  ed("ctrl-mongo",    "controllers", "mongodb",    { sourceHandle: "r", targetHandle: "l" }),
  ed("svc-mongo",     "services",    "mongodb",    { sourceHandle: "r", targetHandle: "l" }),
  ed("svc-s3",        "services",    "s3",         { sourceHandle: "r", targetHandle: "l" }),
  ed("svc-gemini",    "services",    "gemini",     { sourceHandle: "r", targetHandle: "l" }),
  ed("svc-google",    "services",    "google",     { sourceHandle: "r", targetHandle: "l" }),
  ed("svc-devskill",  "services",    "devskiller", { sourceHandle: "r", targetHandle: "l" }),
  ed("svc-linkedin",  "services",    "linkedin",   { sourceHandle: "r", targetHandle: "l" }),
  ed("svc-email",     "services",    "email",      { sourceHandle: "r", targetHandle: "l" }),

  // Webhook back-edge: Devskiller calls back into the API routers
  ed("devskill-rout", "devskiller", "routers", {
    sourceHandle: "b",
    targetHandle: "t",
    label: "webhooks",
    animated: true,
    style: { strokeWidth: 1.5, stroke: "#a78bfa", opacity: 0.85, strokeDasharray: "5 3" },
    labelStyle: { fontSize: 10, fill: "var(--color-muted-foreground)" },
    labelBgStyle: { fill: "var(--color-card)", opacity: 0.9 },
  }),
];
