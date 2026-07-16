export const SITE = {
  phone: "+919833875771",
  phoneDisplay: "+91 98338 75771",
  whatsapp: "919833875771", // wa.me format
  whatsappMessage: "Hello, I would like to book a washing machine repair service.",
  email: "support@siemensmumbai.in",
  brand: "Siemens Washing Machine Repair Mumbai",
  longBrand: "Independent Siemens Washing Machine Repair Specialists in Mumbai",
};

// Locality dropdown for booking form (Mumbai city & suburbs only — excludes Thane, Navi Mumbai & Mira Road)
export const AREAS = [
  "Colaba","Churchgate","Marine Lines","CSMT","Fort","Byculla","Grant Road","Tardeo",
  "Worli","Prabhadevi","Lower Parel","Parel",
  "Dadar","Mahim","Matunga","Sion","Wadala","Dharavi",
  "Bandra","Bandra Kurla Complex","Khar","Santacruz","Juhu","Vile Parle",
  "Andheri","Jogeshwari","Goregaon","Malad","Kandivali","Borivali","Dahisar",
  "Powai","Bhandup","Mulund","Vikhroli","Ghatkopar","Kurla","Chembur",
  "Other",
];

// Served service zones — displayed publicly
export const SERVICE_AREAS = [
  "South Mumbai","Central Mumbai","Western Mumbai","Eastern Mumbai",
];

// Grouped locality coverage for the Service Area section
export const AREA_GROUPS: Array<{ zone: string; localities: string[] }> = [
  { zone: "South Mumbai", localities: ["Colaba","Churchgate","Marine Lines","CSMT","Byculla","Worli","Parel","Lower Parel"] },
  { zone: "Central Mumbai", localities: ["Dadar","Mahim","Dharavi","Matunga","Sion","Wadala","Chembur","Kurla","Ghatkopar"] },
  { zone: "Western Mumbai", localities: ["Bandra","Khar","Santacruz","Vile Parle","Andheri","Jogeshwari","Goregaon","Malad","Kandivali","Borivali","Dahisar"] },
  { zone: "Eastern Mumbai", localities: ["Powai","Bhandup","Mulund"] },
];

export const AREA_SLUGS: Record<string, string> = {
  bandra: "Bandra",
  mahim: "Mahim",
  andheri: "Andheri",
  dadar: "Dadar",
  borivali: "Borivali",
  powai: "Powai",
  mulund: "Mulund",
};

export const TIME_SLOTS = [
  "9 AM – 12 PM",
  "12 PM – 3 PM",
  "3 PM – 6 PM",
  "6 PM – 9 PM",
];

export const BRANDS = [
  "Siemens","Bosch","LG","Samsung","IFB","Whirlpool","Godrej","Haier","Panasonic","Onida","Videocon","Other",
];
