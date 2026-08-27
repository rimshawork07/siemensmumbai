export const SITE = {
  phone: "+919833875771",
  phoneDisplay: "+91 98338 75771",
  whatsapp: "919833875771", // wa.me format
  whatsappMessage: "Hello, I would like to book a washing machine repair service.",
  notificationEmail: process.env.NOTIFICATION_EMAIL || "rimsha.work07@gmail.com",
  // TODO: replace with a real business-domain inbox (e.g. contact@siemensmumbai.in)
  // before launching ads — shown publicly on Privacy Policy, Refund Policy, About.
  publicContactEmail: "rimsha.work07@gmail.com",
  brand: "Siemens Washing Machine Repair Mumbai",
  longBrand: "Siemens Washing Machine Repair Specialists in Mumbai",
};

// Absolute site origin — used for canonical URLs, og:url and JSON-LD across routes.
export const BASE_URL = import.meta.env.VITE_BASE_URL ?? "https://siemensmumbai.in";

// Default social-share image (absolute URL required by the OpenGraph/Twitter spec).
export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/hero-siemens.png`;

// Locality dropdown for booking form (Mumbai city & suburbs only — excludes Thane, Navi Mumbai & Mira Road)
export const AREAS = [
  "Colaba",
  "Churchgate",
  "Marine Lines",
  "CSMT",
  "Fort",
  "Byculla",
  "Grant Road",
  "Tardeo",
  "Worli",
  "Prabhadevi",
  "Lower Parel",
  "Parel",
  "Dadar",
  "Mahim",
  "Matunga",
  "Sion",
  "Wadala",
  "Dharavi",
  "Bandra",
  "Bandra Kurla Complex",
  "Khar",
  "Santacruz",
  "Juhu",
  "Vile Parle",
  "Andheri",
  "Jogeshwari",
  "Goregaon",
  "Powai",
  "Bhandup",
  "Mulund",
  "Vikhroli",
  "Kanjurmarg",
  "Ghatkopar",
  "Kurla",
  "Chembur",
  "Sewri",
  "Malad",
  "Kandivali",
  "Borivali",
  "Other",
];

// Served service zones — displayed publicly
export const SERVICE_AREAS = ["South Mumbai", "Central Mumbai", "Western Mumbai", "Eastern Mumbai"];

// Grouped locality coverage for the Service Area section
export const AREA_GROUPS: Array<{ zone: string; localities: string[] }> = [
  {
    zone: "South Mumbai",
    localities: [
      "Colaba",
      "Churchgate",
      "Marine Lines",
      "CSMT",
      "Byculla",
      "Worli",
      "Parel",
      "Lower Parel",
      "Sewri",
    ],
  },
  {
    zone: "Central Mumbai",
    localities: [
      "Dadar",
      "Mahim",
      "Dharavi",
      "Matunga",
      "Sion",
      "Wadala",
      "Chembur",
      "Kurla",
      "Ghatkopar",
    ],
  },
  {
    zone: "Western Mumbai",
    localities: [
      "Bandra",
      "Khar",
      "Santacruz",
      "Vile Parle",
      "Andheri",
      "Jogeshwari",
      "Goregaon",
      "Malad",
      "Kandivali",
      "Borivali",
    ],
  },
  { zone: "Eastern Mumbai", localities: ["Powai", "Vikhroli", "Kanjurmarg", "Bhandup", "Mulund"] },
];

// Mumbai suburban railway lines — used to group /areas pages and drive
// on-page copy/schema so the site reads as covering Western, Central and
// Harbour line stations specifically (not just geographic zones above).
export type RailLine = "Western Line" | "Central Line" | "Harbour Line";

export interface AreaInfo {
  slug: string;
  name: string;
  /** Omitted for localities not directly on a suburban line (e.g. Powai). */
  line?: RailLine;
  /** A short, factual sentence about the locality used to keep each area page's copy distinct. */
  landmark: string;
}

export const AREA_PAGES: AreaInfo[] = [
  // Western Line
  {
    slug: "churchgate",
    name: "Churchgate",
    line: "Western Line",
    landmark:
      "Home to Marine Drive, the Oval Maidan and many of South Mumbai's heritage buildings and high-rise residences.",
  },
  {
    slug: "bandra",
    name: "Bandra",
    line: "Western Line",
    landmark:
      "From Bandstand and Linking Road to the high-rises near Bandra Kurla Complex, a mix of heritage bungalows and modern apartments.",
  },
  {
    slug: "mahim",
    name: "Mahim",
    line: "Western Line",
    landmark:
      "Overlooking Mahim Bay and close to Mahim Fort, a mix of older buildings and newer redevelopment projects.",
  },
  {
    slug: "santacruz",
    name: "Santacruz",
    line: "Western Line",
    landmark:
      "Close to the domestic airport terminal and Kalina, a mix of established housing societies and newer residential towers.",
  },
  {
    slug: "vile-parle",
    name: "Vile Parle",
    line: "Western Line",
    landmark:
      "Near NMIMS and the domestic airport, a dense residential belt of long-standing housing societies.",
  },
  {
    slug: "andheri",
    name: "Andheri",
    line: "Western Line",
    landmark:
      "One of Mumbai's busiest hubs — from the residential lanes of Andheri West to the offices and towers of Andheri East.",
  },
  {
    slug: "jogeshwari",
    name: "Jogeshwari",
    line: "Western Line",
    landmark: "A mix of residential complexes and industrial estates between Andheri and Goregaon.",
  },
  {
    slug: "goregaon",
    name: "Goregaon",
    line: "Western Line",
    landmark:
      "Near Film City, Aarey and the NESCO complex, with residential societies across both East and West.",
  },
  {
    slug: "malad",
    name: "Malad",
    line: "Western Line",
    landmark:
      "Home to Mindspace and Infinity Mall, with large residential clusters across Malad West and East.",
  },
  {
    slug: "kandivali",
    name: "Kandivali",
    line: "Western Line",
    landmark:
      "Including Thakur Village and Charkop, one of the Western suburbs' larger residential belts.",
  },
  {
    slug: "borivali",
    name: "Borivali",
    line: "Western Line",
    landmark:
      "Bordering Sanjay Gandhi National Park, with residential societies across Borivali West and East.",
  },

  // Central Line
  {
    slug: "byculla",
    name: "Byculla",
    line: "Central Line",
    landmark:
      "Home to the Byculla Zoo (Veermata Jijamata Udyan) and Mazgaon, blending older chawls with newer residential towers.",
  },
  {
    slug: "dadar",
    name: "Dadar",
    line: "Central Line",
    landmark:
      "Near Shivaji Park and Dadar Market, one of Mumbai's busiest residential and commercial junctions.",
  },
  {
    slug: "matunga",
    name: "Matunga",
    line: "Central Line",
    landmark: "Known for King's Circle and its tree-lined, well-established residential streets.",
  },
  {
    slug: "sion",
    name: "Sion",
    line: "Central Line",
    landmark:
      "Around Sion Circle and Antop Hill, a dense mix of residential buildings and hospitals.",
  },
  {
    slug: "kurla",
    name: "Kurla",
    line: "Central Line",
    landmark:
      "A major Central and Harbour line junction, with residential and commercial development along LBS Marg.",
  },
  {
    slug: "ghatkopar",
    name: "Ghatkopar",
    line: "Central Line",
    landmark:
      "A key Metro interchange, with high-rise residential towers replacing much of the older low-rise housing.",
  },
  {
    slug: "vikhroli",
    name: "Vikhroli",
    line: "Central Line",
    landmark:
      "Home to the Godrej township and Hiranandani Business Park, with fast-growing residential development.",
  },
  {
    slug: "kanjurmarg",
    name: "Kanjurmarg",
    line: "Central Line",
    landmark: "An IT-park hub on the Central Line with a fast-growing residential population.",
  },
  {
    slug: "bhandup",
    name: "Bhandup",
    line: "Central Line",
    landmark:
      "A mix of industrial estates and residential societies in Mumbai's northeastern suburbs.",
  },
  {
    slug: "mulund",
    name: "Mulund",
    line: "Central Line",
    landmark:
      "The last major Central Line station before Thane, known for its wide roads and established residential complexes.",
  },

  // Harbour Line
  {
    slug: "wadala",
    name: "Wadala",
    line: "Harbour Line",
    landmark:
      "A key Harbour Line and Monorail interchange, with major residential redevelopment underway.",
  },
  {
    slug: "sewri",
    name: "Sewri",
    line: "Harbour Line",
    landmark:
      "Known for Sewri Fort and its flamingo-watching point, alongside residential and dockland areas.",
  },
  {
    slug: "chembur",
    name: "Chembur",
    line: "Harbour Line",
    landmark: "Around Diamond Garden and Chembur Naka, a well-established residential suburb.",
  },

  // Not directly on a suburban line
  {
    slug: "powai",
    name: "Powai",
    landmark:
      "Around Powai Lake and Hiranandani Gardens, reachable via Vikhroli and Kanjurmarg stations on the Central Line.",
  },
];

export const AREA_SLUGS: Record<string, string> = Object.fromEntries(
  AREA_PAGES.map((a) => [a.slug, a.name]),
);

export interface BrandInfo {
  slug: string;
  name: string;
  tagline: string;
  issues: string[];
  note: string;
}

// Dedicated brand landing pages — keeps Siemens as the primary specialism
// while directly targeting "<Brand> washing machine repair Mumbai" searches.
export const BRAND_PAGES: BrandInfo[] = [
  {
    slug: "samsung-washing-machine-repair-mumbai",
    name: "Samsung",
    tagline: "Eco Bubble and digital-inverter Samsung front-load and top-load machines",
    issues: [
      "Drum not spinning or spinning unevenly",
      "Water inlet and fill faults (often shown as a 4E/4C code)",
      "Door-lock faults (often shown as a dE/dC code)",
      "Unbalanced-load or spin errors (often shown as UE/Ub)",
      "Drainage and drain-pump faults",
      "Digital inverter motor and PCB issues",
    ],
    note: "Samsung is a trademark of Samsung Electronics. We are an independent repair service and are not affiliated with or an authorized Samsung service centre.",
  },
  {
    slug: "lg-washing-machine-repair-mumbai",
    name: "LG",
    tagline: "Direct Drive inverter LG front-load and top-load machines",
    issues: [
      "Water inlet faults (often shown as an IE code)",
      "Drainage and outlet faults (often shown as an OE code)",
      "Unbalanced-load errors (often shown as UE)",
      "Motor-lock faults (often shown as LE)",
      "Door-lock and latch issues",
      "Direct Drive motor and control-board faults",
    ],
    note: "LG is a trademark of LG Electronics. We are an independent repair service and are not affiliated with or an authorized LG service centre.",
  },
  {
    slug: "ifb-washing-machine-repair-mumbai",
    name: "IFB",
    tagline: "Front-load and top-load IFB washing machines",
    issues: [
      "Drainage and drain-pump faults",
      "Spin cycle and motor issues",
      "Door-lock and latch faults",
      "Heating-element faults",
      "PCB and control-panel issues",
      "Noisy or vibrating drum on spin",
    ],
    note: "IFB is a trademark of IFB Industries. We are an independent repair service and are not affiliated with or an authorized IFB service centre.",
  },
  {
    slug: "bosch-washing-machine-repair-mumbai",
    name: "Bosch",
    tagline: "Front-load and top-load Bosch washing machines",
    issues: [
      "Drainage faults (often shown as an E18/F18 code)",
      "Door-lock faults (often shown as F16/F34)",
      "Water-inlet timeouts (often shown as F17/F29)",
      "Motor and drive faults (often shown as F21/F43)",
      "Aquastop leak-sensor faults (often shown as F23)",
      "Electronic control-board faults",
    ],
    note: "Bosch and Siemens are both manufactured by BSH Hausgeräte and share a similar error-code system — see our Siemens error code guide for common codes. We are an independent repair service and are not affiliated with or an authorized Bosch service centre.",
  },
];

export const TIME_SLOTS = ["9 AM – 12 PM", "12 PM – 3 PM", "3 PM – 6 PM", "6 PM – 9 PM"];

export const BRANDS = [
  "Siemens",
  "Bosch",
  "LG",
  "Samsung",
  "IFB",
  "Whirlpool",
  "Godrej",
  "Haier",
  "Panasonic",
  "Onida",
  "Videocon",
  "Other",
];
