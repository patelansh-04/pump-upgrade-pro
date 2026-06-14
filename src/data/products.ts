import subDc from "@/assets/product-submersible-dc.jpg";
import subAc from "@/assets/product-submersible-ac.jpg";
import surface from "@/assets/product-surface.jpg";
import controller from "@/assets/product-controller.jpg";
import agri from "@/assets/product-agriculture.jpg";
import domestic from "@/assets/product-domestic.jpg";
import industrial from "@/assets/product-industrial.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Solar" | "Legacy";
  image: string;
  valueProp: string;
  hpRange: string;
  hpAvailable: number[];
  shortDesc: string;
  description: { farmer: string; engineer: string };
  specs: { label: string; value: string }[];
  features: { title: string; desc: string }[];
  safety?: { title: string; desc: string }[];
  related: string[];
};

export const PRODUCTS: Product[] = [
  //solar-submersible-dc
  {
    slug: "solar-submersible-dc",
    name: "Solar Submersible Pumpset (DC/PMSM)",
    category: "Solar",
    image: subDc,
    valueProp: "+25% performance over MNRE benchmark, in full SS304.",
    hpRange: "1–15 HP",
    hpAvailable: [1, 2, 3, 5, 7.5, 10, 15],
    shortDesc: "BLDC/PMSM submersible engineered for deep-borewell agriculture.",
    description: {
      farmer:
        "A solar-powered pump that sits inside your borewell. It draws water directly from the sun — no diesel, no grid bills. Built fully in stainless steel so it lasts in hard water and high heat.",
      engineer:
        "Permanent-magnet synchronous motor (PMSM) drives a multi-stage radial impeller stack. Investment-cast SS304 wet end with high-efficiency MPPT controller delivers >25% above MNRE specified discharge across the operating head curve.",
    },
    specs: [
      { label: "Motor Type", value: "BLDC / PMSM, Sine-wave drive" },
      { label: "Capacity (HP)", value: "1, 2, 3, 5, 7.5, 10, 15" },
      { label: "Performance vs MNRE", value: "+25% (verified)" },
      { label: "Construction Material", value: "Full SS304 (wet end + sleeve)" },
      { label: "Operating Voltage Range", value: "60 – 750 V DC" },
      { label: "Discharge (LPH)", value: "Up to 96,000 LPH" },
      { label: "Total Head (m)", value: "10 – 200 m" },
      { label: "Warranty", value: "5 years (MNRE standard)" },
    ],
    features: [
      { title: "Full SS304 build", desc: "Investment cast — survives saline and abrasive water." },
      { title: "Sine-wave PMSM drive", desc: "Smooth torque, no commutator wear." },
      { title: "99% MPPT", desc: "Squeezes maximum watt-hours from the PV array." },
      { title: "Dry-run protection", desc: "Cuts off before damage; auto restart on water recovery." },
      { title: "Reverse rotation lock", desc: "Prevents impeller damage on power-down." },
      { title: "Wide voltage window", desc: "Operates 60–750 V — minimal panel string constraints." },
    ],
    related: ["solar-controller", "solar-submersible-ac", "solar-surface"],
  },
  // solar-submersible-ac
  {
    slug: "solar-submersible-ac",
    name: "Solar Submersible Pumpset (AC)",
    category: "Solar",
    image: subAc,
    valueProp: "+15% over MNRE benchmark with rugged investment-cast SS304.",
    hpRange: "1–15 HP",
    hpAvailable: [1, 2, 3, 5, 7.5, 10, 15],
    shortDesc: "Three-phase AC submersible matched with VFD controller for solar input.",
    description: {
      farmer:
        "Pulls water from your borewell using a standard induction motor that runs on power from the sun. A simple, well-known motor design with the reliability of a solar drive.",
      engineer:
        "3-phase squirrel-cage induction motor coupled with a high-frequency VFD/MPPT controller. Investment cast SS304 wet end. Voltage-tolerant winding rated for variable solar input.",
    },
    specs: [
      { label: "Motor Type", value: "3-Phase AC Induction" },
      { label: "Capacity (HP)", value: "1, 2, 3, 5, 7.5, 10, 15" },
      { label: "Performance vs MNRE", value: "+15% (verified)" },
      { label: "Construction Material", value: "Investment Cast SS304" },
      { label: "AC Input", value: "Variable, via solar VFD controller" },
      { label: "Discharge (LPH)", value: "Up to 85,000 LPH" },
      { label: "Total Head (m)", value: "10 – 180 m" },
      { label: "Warranty", value: "5 years (MNRE standard)" },
    ],
    features: [
      { title: "Proven AC induction", desc: "Service-friendly, familiar to local technicians." },
      { title: "Wide VFD window", desc: "Adapts to varying solar irradiance through the day." },
      { title: "IP68 motor sealing", desc: "Continuous submerged operation." },
      { title: "SS304 wet end", desc: "Corrosion resistant in salty/borewell water." },
      { title: "Soft start", desc: "No mechanical shock; extends bearing life." },
      { title: "Overload + dry-run cut off", desc: "Built into the controller." },
    ],
    related: ["solar-controller", "solar-submersible-dc", "solar-surface"],
  },
  // solar-surface
  {
    slug: "solar-surface",
    name: "Solar Surface Pumpset",
    category: "Solar",
    image: surface,
    valueProp: "IEC 62253 approved, aluminium body with SS304 impeller.",
    hpRange: "1–15 HP",
    hpAvailable: [1, 2, 3, 5, 7.5, 10, 15],
    shortDesc: "Surface-mounted centrifugal pump for canals, tanks and open wells.",
    description: {
      farmer:
        "Sits on the ground next to a pond, canal or tank and lifts water through a suction pipe. Easy to install, easy to service — and it runs on the sun.",
      engineer:
        "Single-stage centrifugal pump with closed SS304 impeller, aluminium die-cast motor body. IEC 62253 type-tested. Designed for low-to-medium head, high-flow surface applications.",
    },
    specs: [
      { label: "Motor Type", value: "Solar BLDC / AC Surface" },
      { label: "Capacity (HP)", value: "1, 2, 3, 5, 7.5, 10, 15" },
      { label: "Standard", value: "IEC 62253 type approved" },
      { label: "Motor Body", value: "Aluminium die-cast" },
      { label: "Impeller", value: "SS304, closed type" },
      { label: "Max Flow", value: "120,000 LPH" },
      { label: "Max Head", value: "45 m" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      { title: "Self-priming option", desc: "For sites with seasonal water-level drop." },
      { title: "Lightweight", desc: "Easy to relocate between fields." },
      { title: "Field-serviceable", desc: "Bearings and seals replaceable on site." },
      { title: "Bronze seal seat", desc: "Long mechanical seal life." },
      { title: "Thermal cut-off", desc: "Protects winding on dry run." },
      { title: "IEC type tested", desc: "Independent third-party verified." },
    ],
    related: ["solar-controller", "solar-submersible-dc", "industrial-range"],
  },
  // solar-controller
  {
    slug: "solar-controller",
    name: "Solar Pump Controller",
    category: "Solar",
    image: controller,
    valueProp: "99% MPPT efficiency, eight on-board safety protections.",
    hpRange: "1–15 HP",
    hpAvailable: [1, 2, 3, 5, 7.5, 10, 15],
    shortDesc: "Brain of the system — MPPT + VFD + protections in one box.",
    description: {
      farmer:
        "This is the box that takes sunlight from your solar panels and turns it into the right power for your pump. It also stops the pump from getting damaged when things go wrong.",
      engineer:
        "MPPT solar VFD with hardware-implemented 8-protection scheme. IGBT power stage, IP65 enclosure, 99% peak MPPT efficiency, RS485 + GPRS option for the RMS dashboard.",
    },
    specs: [
      { label: "Capacity (HP)", value: "1, 2, 3, 5, 7.5, 10, 15" },
      { label: "MPPT Efficiency", value: "99% (peak)" },
      { label: "Input Voltage Range", value: "60 – 750 V DC" },
      { label: "Output Type", value: "3-Phase AC for AC pumps, DC drive for BLDC" },
      { label: "Display", value: "LCD with real-time PV/water/run-hour stats" },
      { label: "Protection Count", value: "8 (see safety section)" },
      { label: "Communication", value: "RS485 + optional GPRS/GSM for RMS" },
      { label: "Dimensions", value: "Compact IP65 wall-mount" },
    ],
    features: [
      { title: "True 99% MPPT", desc: "More water per watt than the MNRE benchmark." },
      { title: "IP65 enclosure", desc: "Dust-tight, jet-water resistant — field grade." },
      { title: "Soft start & stop", desc: "No mechanical shock to the pump." },
      { title: "Wide DC window", desc: "60–750 V allows flexible PV string design." },
      { title: "RS485 + GPRS ready", desc: "Plug into Paarth RMS for remote monitoring." },
      { title: "Field firmware update", desc: "Issue patches over RS485 without unit replacement." },
    ],
    safety: [
      { title: "Dry Run", desc: "Auto-stop when bore water level drops below intake." },
      { title: "AC / DC Surge", desc: "MOV + TVS protection against lightning transients." },
      { title: "Reverse Polarity", desc: "PV input wired in reverse won't damage the unit." },
      { title: "Short Circuit", desc: "Output shorting trips the IGBT stage in microseconds." },
      { title: "Over Current", desc: "Current-sense de-rates output to safe band." },
      { title: "Over Temperature", desc: "Thermal sensor folds back power above 75 °C." },
      { title: "Over Voltage", desc: "Clamps PV input spike to safe operating range." },
      { title: "Phase Unbalance", desc: "Detects motor phase faults and isolates output." },
    ],
    related: ["solar-submersible-dc", "solar-submersible-ac", "solar-surface"],
  },
  // agriculture-range
  {
    slug: "agriculture-range",
    name: "Agriculture Range (Legacy)",
    category: "Legacy",
    image: agri,
    valueProp: "V4, V6, V8 submersibles — the workhorses since 1991.",
    hpRange: "0.5–25 HP",
    hpAvailable: [0.5, 1, 1.5, 2, 3, 5, 7.5, 10, 12.5, 15, 20, 25],
    shortDesc: "Oil-filled and water-filled grid-powered borewell pumps for farms.",
    description: {
      farmer:
        "Our original agricultural pump line. Runs on grid power or generator. Built for everyday irrigation in V4, V6 and V8 borewell sizes.",
      engineer:
        "Multi-stage radial-flow borewell submersibles. Oil-filled variants for high-temperature wells; water-filled variants for deep-set installations. Stainless and cast-iron wet-end options.",
    },
    specs: [
      { label: "Type", value: "V4 Oil / V4 Water / V6 K&Q / V8 Water filled" },
      { label: "Sizes", value: "0.5 – 25 HP across the four variants" },
      { label: "Efficiency", value: ">60% (V4 oil-filled latest revision)" },
      { label: "Application", value: "Agriculture, deep borewell, livestock" },
      { label: "Materials", value: "SS / Cast Iron / Noryl impeller options" },
      { label: "Warranty", value: "2 years standard, extendable" },
    ],
    features: [
      { title: "Four borewell sizes", desc: "Fits 4\", 6\" and 8\" casings." },
      { title: "Single & three-phase", desc: "Matches what's available on your line." },
      { title: "Robust thrust bearing", desc: "Handles vertical load across long sets." },
      { title: "Replaceable wear rings", desc: "Restorable efficiency at service intervals." },
      { title: "Choice of impeller", desc: "SS, brass or Noryl by water condition." },
      { title: "200+ engineer support", desc: "Service across India." },
    ],
    related: ["domestic-range", "industrial-range", "solar-submersible-ac"],
  },
  // domestic-range
  {
    slug: "domestic-range",
    name: "Domestic Range",
    category: "Legacy",
    image: domestic,
    valueProp: "Reliable home water pumps — monosets, suction, shallow-well.",
    hpRange: "0.5–2 HP",
    hpAvailable: [0.5, 1, 1.5, 2],
    shortDesc: "Self-priming, monoset and shallow-well pumps for homes and small buildings.",
    description: {
      farmer:
        "Pumps to lift water from your overhead tank, sump or shallow well at home. Quiet, compact and built to run for years.",
      engineer:
        "Single-phase, capacitor-start centrifugal pumps. Vertical and horizontal monoset variants; self-priming suction variants; shallow-well jet types up to 9 m suction.",
    },
    specs: [
      { label: "Type", value: "Self-priming / Magic suction / Monoset (V/H) / Shallow well" },
      { label: "Flow Rate", value: "Up to 4,200 LPH" },
      { label: "Max Head", value: "Up to 45 m" },
      { label: "Power", value: "0.5 – 2 HP" },
      { label: "Application", value: "Domestic, low-rise residential" },
      { label: "Body Material", value: "Cast iron / aluminium" },
      { label: "Warranty", value: "1 year" },
    ],
    features: [
      { title: "Self-prime to 8 m", desc: "Handles air-bound suction lines." },
      { title: "Compact footprint", desc: "Fits under sinks and on roof tanks." },
      { title: "Low noise operation", desc: "Resin-bonded stator damps vibration." },
      { title: "Thermal cut-off", desc: "Protects motor on overheat." },
      { title: "Stainless impeller option", desc: "For chlorinated municipal water." },
      { title: "Easy seal replacement", desc: "Service in 15 minutes." },
    ],
    related: ["agriculture-range", "industrial-range", "solar-surface"],
  },
  {
    slug: "industrial-range",
    name: "Industrial Range",
    category: "Legacy",
    image: industrial,
    valueProp: "Induction motors, inline pumps and panels for plant use.",
    hpRange: "1–50 HP",
    hpAvailable: [1, 2, 3, 5, 7.5, 10, 15, 20, 25, 30, 40, 50],
    shortDesc: "Three-phase induction motors, vertical/horizontal inline pumps, control panels.",
    description: {
      farmer:
        "Heavier pumps and motors for factories, water-supply schemes and large buildings — sized and built for continuous duty.",
      engineer:
        "IE2/IE3 squirrel-cage motors, vertical and horizontal multi-stage inline pumps with mechanical seals, IP54 control panels with motor protection relays.",
    },
    specs: [
      { label: "Type", value: "Single/3-Phase Induction Motor / Vertical & Horizontal Inline / Panel" },
      { label: "Power Range", value: "1 – 50 HP" },
      { label: "Phase", value: "1Φ and 3Φ" },
      { label: "Application", value: "Industrial, HVAC, water-supply schemes" },
      { label: "Frame", value: "IEC standard frames" },
      { label: "Efficiency Class", value: "IE2 / IE3" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      { title: "IE2 / IE3 efficiency", desc: "Lower lifetime running cost." },
      { title: "Continuous-duty S1", desc: "Built for 24×7 plant use." },
      { title: "Mechanical seal", desc: "No packing-gland leakage." },
      { title: "Panel + pump bundles", desc: "Single supplier, single warranty." },
      { title: "IP54 enclosure", desc: "Dust and splash protected." },
      { title: "Class F insulation", desc: "Handles elevated ambient temperatures." },
    ],
    related: ["agriculture-range", "domestic-range", "solar-controller"],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
