// Portfolio-facing data model for the Talent Recruitment Platform.
// Intentionally simplified: only the entities and relationships that
// communicate the domain shape, with internal sharing / sourcing /
// invitation collections and company-specific aggregations omitted.
// The full internal schema lives elsewhere — this is the public version.

export const groups = {
  user:      { label: "User & Profile",       color: "blue"   },
  jobs:      { label: "Jobs & Applications",  color: "green"  },
  candidate: { label: "Assessment",           color: "purple" },
  reference: { label: "Reference",            color: "yellow" },
};

// Helpers
const pk = { name: "_id", type: "ObjectId", pk: true };
const fk = (name) => ({ name, type: "ObjectId", fk: true });
const fkArr = (name) => ({ name, type: "ObjectId[]", fk: true });
const f = (name, type) => ({ name, type });

export const entities = [
  { id: "User", group: "user", fields: [
    pk,
    { name: "email", type: "string", unique: true },
    f("fullName", "string"),
    f("role", "string"),
    f("status", "string"),
  ]},

  { id: "Candidate", group: "user", fields: [
    pk,
    fk("user"),
    f("username", "string"),
    fkArr("skills"),
    f("status", "string"),
  ]},

  { id: "Company", group: "reference", fields: [
    pk,
    f("name", "string"),
    f("industry", "string"),
    f("location", "string"),
  ]},

  { id: "Job", group: "jobs", fields: [
    pk,
    fk("company"),
    f("title", "string"),
    f("description", "string"),
    f("status", "string"),
  ]},

  { id: "Application", group: "jobs", fields: [
    pk,
    fk("job"),
    fk("candidate"),
    f("status", "string"),
    f("appliedAt", "Date"),
  ]},

  { id: "Skills", group: "reference", fields: [
    pk,
    f("name", "string"),
    f("category", "string"),
  ]},

  { id: "Interview", group: "candidate", fields: [
    pk,
    fk("candidate"),
    f("scheduledAt", "Date"),
    f("status", "string"),
    f("feedback", "string"),
  ]},
];

// Edge convention: source._id is referenced by target.via.
//   type "1:N" — single FK on target
//   type "N:M" — array of FKs on target
export const relations = [
  { source: "User",      target: "Candidate",   via: "user",      type: "1:N" },
  { source: "Company",   target: "Job",         via: "company",   type: "1:N" },
  { source: "Candidate", target: "Application", via: "candidate", type: "1:N" },
  { source: "Job",       target: "Application", via: "job",       type: "1:N" },
  { source: "Candidate", target: "Interview",   via: "candidate", type: "1:N" },
  { source: "Skills",    target: "Candidate",   via: "skills",    type: "N:M" },
];
