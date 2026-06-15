export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  salary?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
};

export const DEFAULT_JOBS: Job[] = [
  {
    id: "1",
    title: "Solar Pump Design Engineer",
    department: "R&D / Engineering",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹6,00,000 - ₹9,00,000 P.A.",
    description: "We are looking for a Solar Pump Design Engineer to join our R&D team and lead the design, development, and testing of our next-generation solar brushless DC (BLDC) and permanent magnet synchronous motor (PMSM) submersible pumps.",
    requirements: [
      "Bachelor's or Master's degree in Electrical/Mechanical Engineering.",
      "Proven experience in motor design software (ANSYS, SolidWorks, AutoCAD).",
      "In-depth knowledge of solar controllers, MPPT algorithms, and RMS telemetry integration.",
      "Strong understanding of pump hydraulics and performance testing standards."
    ],
    responsibilities: [
      "Design and model mechanical and electromagnetic components for BLDC/PMSM motors.",
      "Collaborate with the fabrication team to build and type-test prototypes in our in-house testing facility.",
      "Optimize existing pump hydraulics to increase overall water flow efficiency.",
      "Troubleshoot field failures and implement engineering changes to improve reliability."
    ],
    postedDate: "2026-06-01"
  },
  {
    id: "2",
    title: "Regional Sales Manager — Solar Pumps",
    department: "Sales & Marketing",
    location: "Jaipur, Rajasthan",
    type: "Full-time",
    experience: "5-8 years",
    salary: "Competitive + Performance Incentives",
    description: "Expand Paarth Solar Pumps' presence in Rajasthan. You will manage our dealer network, drive retail solar pump sales, and interface with state nodal agencies for PM-KUSUM implementation.",
    requirements: [
      "Any graduate (MBA in Marketing preferred).",
      "At least 4 years of experience selling solar water pumps or agricultural equipment in rural markets.",
      "Strong relationships with regional agricultural distributors and dealers.",
      "Willingness to travel extensively across designated rural territories."
    ],
    responsibilities: [
      "Appoint and manage retail dealers to meet sales targets.",
      "Conduct solar pump demonstration camps (Kisan Melas) and brand promotion activities in rural areas.",
      "Coordinate with installation partners and ensure high customer satisfaction.",
      "Prepare sales forecasts and track competitor activities in the region."
    ],
    postedDate: "2026-06-05"
  },
  {
    id: "3",
    title: "Onsite Service Technician",
    department: "Customer Support & Service",
    location: "Indore, Madhya Pradesh",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹2,50,000 - ₹3,50,000 P.A.",
    description: "Provide high-quality technical assistance, troubleshooting, and repair services for solar and conventional pumps directly on farmers' fields.",
    requirements: [
      "ITI / Diploma in Electrical or Mechanical Engineering.",
      "Hands-on experience in winding, installing, or repairing submersible pumps.",
      "Basic understanding of controller wiring and electrical testing instruments.",
      "Possession of a valid two-wheeler license is mandatory."
    ],
    responsibilities: [
      "Travel to farmer fields to resolve service requests and perform routine maintenance.",
      "Diagnose motor winding issues, controller faults, and sensor errors on-site.",
      "Report service completion status and replacement parts requirement to the regional head.",
      "Train farmers on simple operations and controller safety features."
    ],
    postedDate: "2026-06-10"
  }
];

export const DEPARTMENTS = [
  "R&D / Engineering",
  "Sales & Marketing",
  "Customer Support & Service",
  "Production & Quality Control",
  "Administration & HR"
] as const;

export const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"] as const;
