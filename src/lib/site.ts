export const SITE = {
  phone: "+917710074028",
  phoneDisplay: "+91 77100 74028",
  whatsapp: "917710074028", // wa.me format
  whatsappMessage: "Hello, I would like to book a washing machine repair service.",
  email: "support@siemensmumbai.in",
  brand: "Siemens Washing Machine Repair Mumbai",
  longBrand: "Independent Siemens Washing Machine Repair Specialists in Mumbai",
};

// Locality dropdown for booking form (Mumbai areas we serve — excludes Navi Mumbai & Mira Road)
export const AREAS = [
  "Bandra","Khar","Santacruz","Juhu","Andheri","Vile Parle","Goregaon","Malad",
  "Kandivali","Borivali","Dahisar","Powai","Bhandup","Mulund","Vikhroli",
  "Ghatkopar","Kurla","Chembur","Wadala","Dadar","Mahim","Matunga","Sion",
  "Prabhadevi","Worli","Lower Parel","Byculla","Colaba","Fort","CSMT","Marine Lines",
  "Grant Road","Tardeo","Bandra Kurla Complex","Thane","Other",
];

// Served service areas — displayed publicly
export const SERVICE_AREAS = [
  "South Mumbai","Central Mumbai","Western Mumbai","Powai","Bhandup","Mulund","Thane",
];

export const AREA_SLUGS: Record<string, string> = {
  bandra: "Bandra",
  mahim: "Mahim",
  andheri: "Andheri",
  dadar: "Dadar",
  borivali: "Borivali",
  powai: "Powai",
  thane: "Thane",
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
