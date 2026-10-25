const PROJECTS = [
  { id: "gold-phase-2", name: "Gold Residences – Phase 2", status: "ongoing", category: "High-Rise", place: "Ninoy Aquino Avenue, Parañaque City", developer: "SM Development Corporation", amount: "₱1,065,000,000.00", scope: "Civil, structural, and masonry works", poc: 99.71, image: "images/deck/gold-residences.jpg", blurb: "Phase 2 residential towers along Ninoy Aquino Avenue." },
  { id: "gold-tower-e", name: "Gold Phase 2 – Tower E", status: "ongoing", category: "High-Rise", place: "Ninoy Aquino Avenue, Parañaque City", developer: "SM Development Corporation", amount: "₱448,000,000.00", scope: "Tower E. Tower D architectural works were awarded in September 2025.", poc: 77.66, image: "images/projects/gold-tower-e.jpg", blurb: "Tower E of Gold Residences Phase 2." },
  { id: "bloom", name: "Bloom Residences", status: "ongoing", category: "High-Rise", place: "Dr. A. Santos Avenue, Brgy. San Antonio, Sucat, Parañaque", developer: "SM Development Corporation", amount: "₱860,000,000.00", scope: "Take-over works", poc: 41.91, takeover: true, image: "images/projects/bloom-hi.jpg", blurb: "Take-over of Bloom Residences in Sucat." },
  { id: "charm", name: "Charm Residences", status: "ongoing", category: "High-Rise", place: "Felix Avenue, Cainta, Rizal", developer: "SM Development Corporation", amount: "₱543,949,990.00", scope: "Take-over works", poc: 94.51, takeover: true, image: "images/projects/charm.jpg", blurb: "Take-over of Charm Residences in Cainta." },
  { id: "central-park", name: "9 Central Park", status: "ongoing", category: "High-Rise", place: "Northwin Global City, Brgy. Patubig, Marilao, Bulacan", developer: "Megaworld – NGC", amount: "₱950,000,000.00", poc: 79.8, image: "images/projects/central-park-hi.jpg", blurb: "Residential development inside Northwin Global City." },
  { id: "westwind", name: "Westwind Residences", status: "ongoing", category: "High-Rise", place: "Lancaster New City, Advincula Avenue, General Trias, Cavite", developer: "Property Company of Friends, Inc.", amount: "₱950,000,000.00", scope: "4-storey condominium", poc: 99.81, image: "images/deck/westwind-hi.jpg", blurb: "Four-storey condominium cluster at Lancaster New City." },
  { id: "westwind-2", name: "Westwind Residences – Building 2, Cluster A", status: "ongoing", category: "High-Rise", place: "Lancaster New City, Advincula Avenue, General Trias, Cavite", developer: "Property Company of Friends, Inc.", amount: "₱171,266,614.36", scope: "4-storey condominium", poc: 15.7, image: "images/projects/westwind-2.jpg", blurb: "Second building in Cluster A of Westwind Residences." },
  { id: "stpeter-muntinlupa", name: "St. Peter – Muntinlupa", status: "ongoing", category: "Institutional", place: "Brgy. Bayanan, Muntinlupa", developer: "New Frontier Memorial Chapel Development Corp.", amount: "₱390,000,000.00", scope: "4-storey chapel with 2-level basement parking", poc: 77.8, image: "images/deck/stpeter-muntinlupa.jpeg", blurb: "Chapel building with basement parking in Muntinlupa." },
  { id: "stpeter-caloocan", name: "St. Peter – Caloocan", status: "ongoing", category: "Institutional", place: "Barangay 22, Caloocan City", developer: "New Frontier Memorial Chapel Development Corp.", amount: "₱917,000,000.00", scope: "9-storey memorial chapels with embalming facilities", poc: null, pocLabel: "Newly awarded", image: "images/deck/stpeter-caloocan-hi.jpg", blurb: "Newly awarded memorial chapel complex in Caloocan." },
  { id: "sunnyhomes", name: "Sunnyhomes Subdivision", status: "ongoing", category: "Housing", place: "Brgy. Banay-Banay, Padre Garcia, Batangas", developer: "Summerhills Home Development Corp.", amount: "₱117,129,600.00", scope: "Low-cost housing", poc: 67.22, image: "images/projects/sunnyhomes.jpg", blurb: "Low-cost housing in Padre Garcia, Batangas." },
  { id: "pasig-hall", name: "The Modern Pasig City Hall", status: "ongoing", category: "Institutional", place: "Caruncho Avenue, Brgy. San Nicolas, Pasig City", developer: "PCHCC", amount: "₱930,000,000.00", scope: "Concreting and rebars", poc: 44.53, image: "images/deck/pasig-cityhall.jpeg", blurb: "Structural concrete and rebar works for the new city hall." },
  { id: "iland", name: "Iland Tower 3 Residences", status: "ongoing", category: "High-Rise", place: "8362 Arcadio Santos Avenue, Parañaque City", developer: "ISOC Holdings", amount: "₱200,000,000.00", poc: 18.33, image: "images/projects/iland.jpg", blurb: "Tower 3 residences on Arcadio Santos Avenue." },
  { id: "garden-city", name: "Garden City", status: "ongoing", category: "High-Rise", place: "Las Piñas–Talaba Diversion Road, Brgy. Zapote 3, Bacoor City, Cavite", developer: "Golden Bay Prime Landholdings", amount: "₱1,095,657,032.35", poc: 5.22, image: "images/deck/garden-city-hi.jpg", blurb: "Residential development in Bacoor, just getting underway." },

  { id: "studio-a", name: "Studio A Residences", status: "completed", category: "High-Rise", place: "Xavier Ville Ave. cor. Esteban Abada, Loyola Heights, Quezon City", developer: "Filinvest Land Incorporated", amount: "₱328,500,000.00", scope: "34 storeys", image: "images/projects/studio-a.jpg", blurb: "Completed residential tower in Loyola Heights." },
  { id: "century-peak", name: "Century Peak Tower", status: "completed", category: "High-Rise", place: "Malate, Manila", developer: "Century Peak Hotel Management", amount: "₱145,000,000.00", scope: "45 storeys", image: "images/projects/century-peak.jpg", blurb: "Completed tower in Malate." },
  { id: "vinia", name: "Vinia Residences", status: "completed", category: "High-Rise", place: "EDSA, Brgy. Filam, Quezon City", developer: "Filinvest Alabang Incorporated", amount: "₱680,000,000.00", scope: "25 storeys", image: "images/projects/vinia.jpg", blurb: "Completed residential tower along EDSA." },
  { id: "royal-palm", name: "Royal Palm Village", status: "completed", category: "Housing", place: "Las Piñas City", developer: "Prime Gate Property Inc.", amount: "₱420,000,000.00", blurb: "Completed residential village in Las Piñas." },
  { id: "vista-recto", name: "Vista Recto", status: "completed", category: "High-Rise", place: "CM Recto Avenue, Quiapo, Manila", developer: "Vista Land & Lifescapes Inc.", amount: "₱427,000,000.00", scope: "36 storeys", image: "images/projects/vista-recto.jpg", blurb: "Completed tower in Quiapo." },
  { id: "tower-878", name: "878 Tower", status: "completed", category: "High-Rise", place: "España, Sampaloc, Manila", developer: "Vista Land & Lifescapes Inc.", amount: "₱161,500,000.00", scope: "39 storeys", image: "images/projects/tower-878.jpg", blurb: "Completed tower on España." },
  { id: "laureano", name: "Laureano di Trevi", status: "completed", category: "High-Rise", place: "Pasong Tamo, Makati City", developer: "Vista Land & Lifescapes Inc.", amount: "₱353,000,000.00", scope: "24-storey Towers 1 and 3; 29-storey Tower 2", image: "images/projects/laureano.jpg", blurb: "Three completed towers in Makati." },
  { id: "torre-lorenzo", name: "Two Torre Lorenzo", status: "completed", category: "High-Rise", place: "Taft Avenue, Manila", developer: "Lapanday Properties", amount: "₱320,000,000.00", scope: "33 storeys", image: "images/projects/torre-lorenzo.jpg", blurb: "Completed tower on Taft Avenue." },
  { id: "corporate-145", name: "Corporate 145", status: "completed", category: "Commercial", place: "MOA Complex, Pasay City", developer: "Columbia Properties", amount: "₱215,000,000.00", scope: "14 storeys", image: "images/projects/corporate-145.jpg", blurb: "Completed office building at the MOA Complex." },
  { id: "kl-mosaic", name: "KL Mosaic Tower", status: "completed", category: "High-Rise", place: "Makati City", developer: "Vista Land & Lifescapes Inc.", amount: "₱305,000,000.00", scope: "32 storeys", image: "images/projects/kl-mosaic.jpg", blurb: "Completed tower in Makati." },
  { id: "sea-2", name: "Sea 2 Residences", status: "completed", category: "High-Rise", place: "Lot 2, Brgy. Zone 10, Central Business Park 1A, Pasay City", developer: "SM Development Corporation", amount: "₱1,183,000,000.00", image: "images/projects/sea-2-hi.jpg", blurb: "Completed SMDC residences in Pasay." },
  { id: "ridgewood", name: "Ridgewood Towers", status: "completed", category: "High-Rise", place: "Pasong Tamo, Makati City", developer: "C5 Mansion Development", amount: "₱239,000,000.00", scope: "18-storey Tower 2 and 25-storey Tower 3", image: "images/projects/ridgewood.jpg", blurb: "Two completed towers in Makati." },
  { id: "lush", name: "Lush Residences", status: "completed", category: "High-Rise", place: "Bagtikan Street, Makati City", developer: "SM Development Corporation", amount: "₱577,000,000.00", scope: "22 storeys", image: "images/projects/lush.jpg", blurb: "Completed SMDC tower in Makati." },
  { id: "untv", name: "UNTV Broadcast Center", status: "completed", category: "Commercial", place: "EDSA, Quezon City", amount: "₱340,000,000.00", scope: "18 storeys, with three discs on top", image: "images/projects/untv.jpg", blurb: "Broadcast center along EDSA." },
  { id: "green-2", name: "Green 2 Residences", status: "completed", category: "High-Rise", place: "Dasmariñas, Cavite", developer: "SM Development Corporation", amount: "₱708,878,000.00", scope: "Tower 1 ₱708,878,000.00 · Tower 2 ₱390,000,000.00", image: "images/projects/green-2.jpg", blurb: "Two completed SMDC towers in Dasmariñas." },
  { id: "red", name: "Red Residences", status: "completed", category: "High-Rise", place: "Chino Roces Avenue, Makati City", developer: "SM Development Corporation", amount: "₱880,000,000.00", scope: "Contract package", image: "images/projects/red.jpg", blurb: "Completed SMDC residences in Makati." },

  { id: "bayer", name: "Bayer Phils.", status: "completed", category: "Pharmaceutical", place: "Canlubang, Laguna", image: "images/projects/bayer.jpg", blurb: "Pharmaceutical plant in Canlubang." },
  { id: "elin", name: "Elin Pharma Mfg. Plant", status: "completed", category: "Pharmaceutical", place: "Laguna Technopark, Sta. Rosa, Laguna", image: "images/projects/elin.jpg", blurb: "Manufacturing plant inside Laguna Technopark." },
  { id: "bio", name: "Philippine Bio-Industries", status: "completed", category: "Pharmaceutical", place: "Carmelray Industrial Park 1, Canlubang, Laguna", image: "images/projects/bio.jpg", blurb: "Bio-industries facility at Carmelray." },
  { id: "zuellig-cebu", name: "Zuellig Centre", status: "completed", category: "Pharmaceutical", place: "Mandaue, Cebu City", image: "images/projects/zuellig-cebu.jpg", blurb: "Distribution centre in Mandaue." },
  { id: "zuellig-laguna", name: "Zuellig Centre", status: "completed", category: "Pharmaceutical", place: "Cabuyao, Laguna", image: "images/projects/zuellig-laguna.jpg", blurb: "Distribution centre in Cabuyao." },
  { id: "ek-south", name: "EK South Project", status: "completed", category: "Manufacturing", place: "Carmelray Industrial Park 1, Laguna", image: "images/deck/manufacturing-ek.jpeg", scope: "Food processing facility on 2.3 hectares, 22,000 sq.m. floor area, with warehouse, offices, laboratories, and an engineering building", blurb: "Food processing plant at Carmelray." },

  { id: "adzu", name: "Ateneo de Zamboanga University High School", status: "completed", category: "School", place: "Lunzuran Road, Tumaga, Zamboanga City", image: "images/deck/school-zamboanga.jpeg", blurb: "High school building for Ateneo de Zamboanga." },
  { id: "hv-dela-costa", name: "Ateneo de Manila – H.V. Dela Costa Building", status: "completed", category: "School", place: "Katipunan, Quezon City", image: "images/projects/hv-dela-costa.jpg", blurb: "Academic building on Katipunan Avenue." },
  { id: "grade-four", name: "Ateneo Grade Four Building Expansion", status: "completed", category: "School", place: "Katipunan Avenue, Quezon City", image: "images/projects/grade-four.jpg", blurb: "Grade school expansion on Katipunan." },
  { id: "ateneo-salcedo", name: "Ateneo – Salcedo", status: "completed", category: "School", place: "Salcedo, Makati", image: "images/projects/ateneo-salcedo.jpg", blurb: "Ateneo building in Salcedo." },
  { id: "ateneo-rockwell", name: "Ateneo – Rockwell", status: "completed", category: "School", place: "Rockwell Center, Makati", image: "images/projects/ateneo-rockwell.jpg", blurb: "Ateneo building at Rockwell Center." },

  { id: "makro-10", name: "Makro Store 10", status: "completed", category: "Commercial", place: "Cagayan de Oro City", blurb: "Makro store in Cagayan de Oro." },
  { id: "makro-11", name: "Makro Store 11", status: "completed", category: "Commercial", place: "Jaro District, Iloilo City", image: "images/projects/makro-11.jpg", blurb: "Makro store in Jaro, Iloilo." },
  { id: "garden-orchid", name: "Garden Orchid Hotel", status: "completed", category: "Commercial", place: "Governor Camins Road, Zamboanga City", scope: "10 storeys", image: "images/deck/commercial-2.jpeg", blurb: "Ten-storey hotel in Zamboanga City." },
  { id: "jjaccis", name: "JJACCIS Commercial Building", status: "completed", category: "Commercial", image: "images/projects/jjaccis.jpg", blurb: "Commercial building from the completed-projects record." },
  { id: "tionsan-trinidad", name: "TiongSan", status: "completed", category: "Commercial", place: "La Trinidad, Benguet", image: "images/projects/tionsan-trinidad.jpg", blurb: "Commercial building in La Trinidad." },
  { id: "tionsan-baguio", name: "TiongSan", status: "completed", category: "Commercial", place: "Baguio City", image: "images/projects/tionsan-baguio.jpg", blurb: "Commercial building in Baguio City." },
  { id: "centro", name: "Centro Building", status: "completed", category: "Commercial", place: "Sta. Cruz, Laguna", image: "images/projects/centro.jpg", blurb: "Commercial building in Sta. Cruz." },
  { id: "mercury-oplaza", name: "Mercury O-Plaza", status: "completed", category: "Commercial", place: "Congressional Avenue corner Mindanao Avenue, Quezon City", image: "images/projects/mercury-oplaza.jpg", blurb: "Plaza development in Quezon City." },
  { id: "sta-rosa-market", name: "Sta. Rosa Market Place", status: "completed", category: "Commercial", place: "Sta. Rosa, Laguna", image: "images/projects/sta-rosa-market.jpg", blurb: "Public market in Sta. Rosa." },
  { id: "oplaza-cainta", name: "O-Plaza", status: "completed", category: "Commercial", place: "Cainta, Rizal", image: "images/projects/oplaza-cainta.jpg", blurb: "Commercial plaza in Cainta." },
  { id: "is-pavillion", name: "IS Pavillion", status: "completed", category: "Commercial", place: "Meycauayan, Bulacan", image: "images/projects/is-pavillion.jpg", blurb: "Commercial pavilion in Meycauayan." },
  { id: "moldex", name: "Moldex Building", status: "completed", category: "Commercial", place: "West Avenue, Quezon City", image: "images/projects/moldex.jpg", blurb: "Commercial building on West Avenue." },

  { id: "tuazon", name: "D. Tuazon Residence", status: "completed", category: "Landmark", place: "D. Tuazon Street, Quezon City", scope: "Around 1960, before the company was formally organized", blurb: "One of the earliest houses associated with the founder." },
  { id: "lirag", name: "Lirag Textile Mill", status: "completed", category: "Manufacturing", place: "Montalban, Rizal", scope: "1966", image: "images/deck/first-vehicle.jpg", blurb: "Early industrial building. The first service vehicle crossed the Montalban River to reach this site." },
  { id: "mercury-hq", name: "Mercury Drug Head Office and Distribution Center", status: "completed", category: "Pharmaceutical", place: "Libis, Quezon City", scope: "1981", blurb: "The company’s landmark project of 1981." }
];

const LEADERS = [
  { name: "Engr. John Paul Pe", role: "President & CEO", ceo: true, summary: "Leads the company and oversees all divisions. QAQC and Motorpool report directly to the President.", photo: "images/team/john-paul.png", group: "Direct departments", departments: [{ name: "QAQC", place: "Head Office" }, { name: "Motorpool", place: "Head Office" }] },
  { name: "Engr. Paulo Lorenzo Pe", role: "Chief Operations Officer / Board of Directors", summary: "Heads operations and the core head-office functions that support every project.", photo: "images/team/paulo.png", group: "Head-office departments", departments: [{ name: "Estimating", place: "Head Office" }, { name: "Procurement", place: "Head Office" }, { name: "Facilities & Admin", place: "Head Office" }, { name: "CAMD", place: "Head Office" }, { name: "Legal", place: "Head Office" }, { name: "IT", place: "Head Office" }, { name: "Human Capital", place: "Head Office" }] },
  { name: "Mr. Noel Gayos", role: "Overall Project Consultant", summary: "Advises on project delivery and oversees safety, site employees and site workers.", photo: "images/team/noel.png", group: "Project teams", departments: [{ name: "Project Site Employees", place: "Technical / Non-technical" }, { name: "Safety & Health", place: "Project site" }, { name: "Project Site Workers", place: "Project site" }] },
  { name: "Arch. Belinda Pe-Correa", role: "SCMD Head / Corporate Secretary / Board of Directors", summary: "Heads SCMD and serves as Corporate Secretary, with the sub-contractors department reporting through her.", photo: "images/team/belinda.png", group: "Departments", departments: [{ name: "Sub-contractors", place: "Head Office" }] },
  { name: "Ms. Angelina Pe-Dizon", role: "Corporate Treasurer / Board of Directors", summary: "Serves as Corporate Treasurer and oversees finance, audit, administration and inventory.", photo: "images/team/angelina.png", group: "Head-office departments", departments: [{ name: "Accounting", place: "Head Office" }, { name: "Audit", place: "Head Office" }, { name: "Administration", place: "Head Office" }, { name: "Inventory & Warehouse", place: "Head Office" }] },
  { name: "Ms. Cynthia Pe", role: "Board of Directors", summary: "Member of the Board of Directors.", photo: "images/team/cynthia.png", group: "Departments", departments: [] }
];

const VIDEOS = [
  { id: "lRWIdAVJXkc", title: "Gala — A Night to Remember" },
  { id: "FbkxUe66Liw", title: "Workforce Appreciation Month, May 2025" },
  { id: "OfLrph5KtCo", title: "Christmas Party 2023 highlights" }
];

const ICONS = {
  people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="3"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  record: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16l3.5-4 3 2.5L20 8"/></svg>',
  plant: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V6l8-3 8 3v14"/><path d="M4 10h16M12 7v13"/></svg>',
  takeover: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/></svg>',
  aaa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.2-2.8 7.2-7 8.5C7.8 19.2 5 16.2 5 12V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>'
};

const PIN = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/></svg>';
const MAIL = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>';
const CHECK = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#f7c92f"/><path d="M8 12.2l2.4 2.4L16.2 9" fill="none" stroke="#0d1f4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const WHY = [
  {
    title: "People first",
    body: "ABC invests in the knowledge, skills, attributes, and experience its people need to build the project in front of them.",
    stat: "People",
    caption: "knowledge, skills, and experience on the job",
    icon: "people"
  },
  {
    title: "A 60-year track record",
    body: "The record is the proof. Completed work is worth Php 25 billion, from industrial buildings to high-rise condominiums.",
    stat: "Php 25B",
    caption: "in completed work over 60 years",
    count: 25,
    prefix: "Php ",
    suffix: "B",
    icon: "record"
  },
  {
    title: "Own precast plants",
    body: "Archiwall produces interior wall panels and Archicast produces exterior precast. Both cut build time and cost with ready-to-finish concrete wall systems.",
    stat: "2",
    caption: "in-house precast plants: Archiwall and Archicast",
    count: 2,
    icon: "plant"
  },
  {
    title: "Takeover specialist",
    body: "ABC can take over unfinished projects and bring them to completion. Five current jobs are takeovers, a sign that clients trust the company to finish.",
    stat: "5",
    caption: "current jobs are takeovers",
    count: 5,
    icon: "takeover"
  },
  {
    title: "AAA, end to end",
    body: "A Category AAA contractor equipped to provide construction solutions, with its own equipment fleet, aluminum formworks, and subsidiary plants.",
    stat: "AAA",
    caption: "end to end, with fleet, formworks, and plants",
    icon: "aaa"
  }
];

const PARTNERS = [
  {
    name: "White Equipment and Trading Inc.",
    badge: "Group company",
    place: "North Avenue, Bagong Pag-asa, Quezon City.",
    description: "Positioned to serve the construction, infrastructure, industrial, and commercial sectors across the region, with efficient and dependable equipment solutions.",
    label: "Sectors served",
    chips: ["Construction", "Infrastructure", "Industrial", "Commercial"],
    points: ["Efficient, cost-effective, and dependable solutions", "Helps clients achieve their project goals"],
    logo: "images/partners/white-logo.png",
    logoAlt: "White Equipment and Trading Inc. logo",
    photos: [
      { src: "images/partners/white-jcb.jpg", alt: "JCB excavator at an Archipelago Builders groundbreaking", caption: "JCB excavator at an ABC groundbreaking" },
      { src: "images/partners/white-crane.jpg", alt: "Tower crane being assembled on site", caption: "Tower crane on site" },
      { src: "images/partners/white-truck.jpg", alt: "Heavy-haul trailer truck carrying precast panels", caption: "Heavy-haul trailer truck" }
    ]
  },
  {
    name: "Resilient Services Contracting Inc.",
    badge: "Group company",
    place: "North Avenue, Bagong Pag-asa, Quezon City.",
    description: "End-to-end contracting of competent talent for construction and other industries, delivered with a human-centered and customer-oriented approach.",
    label: "How they work",
    chips: ["Compliant", "End-to-end", "Human-centered", "Customer-oriented"],
    points: ["Provides highly competent talent to construction and other industries", "Develops and provides highly qualified manpower"],
    logo: "images/partners/resilient-logo.png",
    logoAlt: "Resilient Services Contracting Inc. logo",
    photos: [
      { src: "images/partners/resilient-crew.jpg", alt: "Resilient Services crew in company uniform on site", caption: "Crew in company uniform" },
      { src: "images/partners/resilient-scaffold.jpg", alt: "Resilient Services crew handling scaffolding on site", caption: "Handling scaffolding on site" }
    ]
  },
  {
    name: "National University",
    badge: "University partner",
    place: "551 F. Jhocson St., Sampaloc, Manila",
    email: "info@national-u.edu.ph",
    description: "Home of the NU Bulldogs. The men's volleyball team won the UAAP Season 86 championship and carries the banner of three-peat defending UAAP champions.",
    label: "Highlights",
    chips: ["Since 1900", "Men's volleyball", "UAAP Season 86 champions"],
    points: ["NU Bulldogs men's volleyball, champions of UAAP Season 86", "Three-peat defending UAAP champions"],
    logo: "images/partners/nu-logo.png",
    logoAlt: "National University logo",
    photos: [
      { src: "images/deck/partner-nu.jpg", alt: "NU Bulldogs celebrating the UAAP Season 86 championship on court", caption: "Bulldogs celebrating the championship on court" },
      { src: "images/partners/nu-team.jpg", alt: "NU men's volleyball team with the three-peat defending UAAP champions banner", caption: "Men's volleyball team, three-peat defending UAAP champions" }
    ]
  },
  {
    name: "University of Santo Tomas",
    badge: "University partner",
    place: "España Blvd., Sampaloc, Manila",
    email: "inquiries@ust.edu.ph",
    description: "Archipelago Builders and Archicast sponsor the UST men's and women's basketball teams. The company is led by UST civil engineering alumnus Engr. John Paul Pe.",
    label: "Sponsorship",
    chips: ["Since 1611", "Men's basketball", "Women's basketball"],
    points: [
      "Memorandum of agreement signed with the UST Institute of Physical Education and Athletics at the Quadricentennial Pavilion",
      "Engr. John Paul Pe is a UST alumnus, and his son Paulo previously played for UST basketball"
    ],
    logo: "images/partners/ust-logo.png",
    logoAlt: "University of Santo Tomas seal",
    photos: [
      { src: "images/deck/partner-ust.jpg", alt: "Sponsorship signing at the UST Quadricentennial Pavilion", caption: "Sponsorship signing at the UST Quadricentennial Pavilion" }
    ]
  }
];

const CATEGORIES = ["All", ...new Set(PROJECTS.filter((project) => project.image).map((project) => project.category))];

(() => {
  document.documentElement.classList.add("js");
  const canHover = window.matchMedia("(hover: hover)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let viaKeyboard = false;
  document.addEventListener("keydown", () => { viaKeyboard = true; });
  document.addEventListener("pointerdown", () => { viaKeyboard = false; });

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const scrollProgress = document.querySelector("#scroll-progress");
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    const top = document.querySelector("#to-top");
    if (top) top.classList.toggle("is-on", window.scrollY > 700);
    if (scrollProgress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  document.querySelector("#to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...nav.querySelectorAll("a[href^='#']")];
  const spy = () => {
    const mark = window.scrollY + 120;
    let current = sections[0]?.id;
    sections.forEach((section) => {
      if (section.offsetTop <= mark) current = section.id;
    });
    navLinks.forEach((link) => {
      const on = link.getAttribute("href") === `#${current}`;
      if (on) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();

  document.querySelectorAll(".timeline button").forEach((button) => {
    button.addEventListener("click", () => {
      const era = button.dataset.era;
      document.querySelectorAll(".timeline button").forEach((btn) => {
        const on = btn === button;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
      document.querySelectorAll(".era").forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.era === era);
      });
    });
  });

  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", () => {
      const willOpen = !card.classList.contains("is-open");
      document.querySelectorAll(".service-card").forEach((other) => {
        other.classList.remove("is-open");
        other.setAttribute("aria-expanded", "false");
      });
      card.classList.toggle("is-open", willOpen);
      card.setAttribute("aria-expanded", willOpen ? "true" : "false");
      const map = { Commercial: "Commercial", Industrial: "Manufacturing", Institutional: "Institutional", "High-Rise": "High-Rise" };
      const category = map[card.dataset.service];
      if (willOpen && category) {
        state.category = category;
        state.status = "all";
        chips.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("is-active", chip.textContent === category));
        document.querySelectorAll(".seg button").forEach((btn) => {
          const on = btn.dataset.status === "all";
          btn.classList.toggle("is-active", on);
          btn.setAttribute("aria-selected", on ? "true" : "false");
        });
        renderProjects();
      }
    });
  });

  initWhy();
  initPartners();

  document.querySelectorAll(".cap-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".cap-tabs button").forEach((btn) => {
        const on = btn === button;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
      document.querySelectorAll(".cap-panel").forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.cap === button.dataset.cap);
      });
    });
  });

  const orgChart = document.querySelector("#org-chart");
  const orgPanel = document.querySelector("#org-panel");
  let openLeader = -1;
  const leaderCard = (leader, index) => `
    <button class="org-card${leader.ceo ? " is-ceo" : ""}" type="button" data-leader="${index}" aria-expanded="false">
      <img src="${leader.photo}" alt="" />
      <strong>${leader.name}</strong>
      <span>${leader.role}</span>
      <em class="org-pill">View details</em>
    </button>`;
  if (orgChart && orgPanel) {
    const [ceo, ...reports] = LEADERS;
    orgChart.innerHTML = `
      <div class="org-board">
        ${leaderCard(ceo, 0)}
        <div class="org-stem" aria-hidden="true"></div>
        <div class="org-row">
          ${reports.map((leader, index) => leaderCard(leader, index + 1)).join("")}
        </div>
      </div>`;
    const showLeader = (index) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      orgChart.querySelectorAll(".org-card").forEach((card, cardIndex) => {
        const on = cardIndex === index;
        card.classList.toggle("is-open", on);
        card.setAttribute("aria-expanded", on ? "true" : "false");
        const pill = card.querySelector(".org-pill");
        if (pill) pill.textContent = on ? "Hide details" : "View details";
      });
      if (index < 0) {
        orgPanel.hidden = true;
        orgPanel.innerHTML = "";
        openLeader = -1;
        return;
      }
      const leader = LEADERS[index];
      const count = leader.departments.length;
      const cards = count
        ? `<h4>${leader.group} (${count})</h4><div class="dept-grid">${leader.departments.map((dept) => `<article class="dept-card"><strong>${dept.name}</strong><span>${dept.place}</span></article>`).join("")}</div>`
        : `<p class="org-empty">No departments report to this position.</p>`;
      orgPanel.hidden = false;
      orgPanel.innerHTML = `
        <div class="org-panel-head">
          <img src="${leader.photo}" alt="" />
          <div>
            <h3>${leader.name}</h3>
            <p>${leader.role}</p>
          </div>
          <button type="button" class="org-close" aria-label="Close details">×</button>
        </div>
        <p class="org-summary">${leader.summary}</p>
        ${cards}`;
      openLeader = index;
      orgPanel.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
    };
    orgChart.addEventListener("click", (event) => {
      const card = event.target.closest(".org-card");
      if (!card) return;
      const index = Number(card.dataset.leader);
      showLeader(index === openLeader ? -1 : index);
    });
    orgPanel.addEventListener("click", (event) => {
      if (event.target.closest(".org-close")) showLeader(-1);
    });
  }

  const state = { query: "", status: "all", category: "All", sort: "featured" };
  const grid = document.querySelector("#project-grid");
  const empty = document.querySelector("#project-empty");
  const count = document.querySelector("#project-count");
  const chips = document.querySelector("#category-filters");

  CATEGORIES.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip" + (category === "All" ? " is-active" : "");
    button.textContent = category;
    button.addEventListener("click", () => {
      state.category = category;
      chips.querySelectorAll(".chip").forEach((chip) => chip.classList.toggle("is-active", chip === button));
      renderProjects();
    });
    chips.appendChild(button);
  });

  document.querySelector("#project-search")?.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderProjects();
  });

  document.querySelectorAll(".seg button").forEach((button) => {
    button.addEventListener("click", () => {
      state.status = button.dataset.status;
      document.querySelectorAll(".seg button").forEach((btn) => {
        const on = btn === button;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
      renderProjects();
    });
  });

  document.querySelector("#project-sort")?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProjects();
  });

  const amountValue = (project) => {
    const match = String(project.amount || "").match(/[\d,]+\.\d+|[\d,]+/);
    return match ? Number(match[0].replace(/,/g, "")) : 0;
  };

  const filtered = () => {
    const list = PROJECTS.filter((project) => {
      if (!project.image) return false;
      if (state.status !== "all" && project.status !== state.status) return false;
      if (state.category !== "All" && project.category !== state.category) return false;
      if (!state.query) return true;
      const hay = [project.name, project.place, project.developer, project.category, project.scope, project.blurb].join(" ").toLowerCase();
      return hay.includes(state.query);
    });
    if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (state.sort === "progress") list.sort((a, b) => (b.poc || 0) - (a.poc || 0));
    if (state.sort === "amount") list.sort((a, b) => amountValue(b) - amountValue(a));
    return list;
  };

  const cardHtml = (project) => {
    const visual = project.image
      ? `<img src="${project.image}" alt="" />`
      : "";
    const progress = project.status === "ongoing"
      ? `<div class="meter" style="--w:${project.poc || 0}%"><span></span></div><p>${project.pocLabel || `${project.poc}% complete`}</p>`
      : `<p>${project.status === "completed" ? "Completed" : ""}</p>`;
    return `
      <article class="project-card">
        <button class="project-open" type="button" data-id="${project.id}">
          <div class="card-visual">
            ${visual}
            <span class="tag">${project.category}</span>
            ${project.takeover ? '<span class="badge takeover">Take-over</span>' : ""}
          </div>
          <div class="card-body">
            <h3>${project.name}</h3>
            <p>${project.place || project.developer || ""}</p>
            ${progress}
          </div>
        </button>
      </article>`;
  };

  const dots = document.querySelector("#project-dots");
  const carousel = grid?.closest(".project-carousel");
  let projectIndex = 0;
  let gliding = false;
  let glideTimer = 0;
  let hoverTimer = 0;
  let edgeTimer = 0;
  let autoTimer = 0;
  let resumeTimer = 0;
  let pointerInside = false;
  let projectsInView = true;

  const projectCards = () => (grid ? [...grid.querySelectorAll(".project-card")] : []);

  const paintDots = () => {
    if (!dots) return;
    const cards = projectCards();
    dots.innerHTML = cards.map((_, index) => `
      <button type="button" role="tab" data-index="${index}" aria-label="Show project ${index + 1}" aria-selected="${index === projectIndex ? "true" : "false"}" class="${index === projectIndex ? "is-on" : ""}"></button>
    `).join("");
  };

  const centerOn = (index, behavior = "smooth") => {
    const cards = projectCards();
    if (!grid || !cards.length) return;
    projectIndex = (index + cards.length) % cards.length;
    const card = cards[projectIndex];
    cards.forEach((item, itemIndex) => item.classList.toggle("is-center", itemIndex === projectIndex));
    paintDots();
    const motion = reduceMotion || behavior === "auto" ? "auto" : "smooth";
    const gridRect = grid.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const delta = (cardRect.left + cardRect.width / 2) - (gridRect.left + gridRect.width / 2);
    gliding = true;
    if (Math.abs(delta) > 1) grid.scrollBy({ left: delta, behavior: motion });
    clearTimeout(glideTimer);
    glideTimer = window.setTimeout(() => { gliding = false; }, motion === "smooth" ? 680 : 80);
  };

  const scheduleAuto = () => {
    clearTimeout(autoTimer);
    if (reduceMotion || pointerInside || !projectsInView) return;
    autoTimer = window.setTimeout(() => {
      if (pointerInside || !projectsInView) return;
      const total = projectCards().length;
      if (total < 2) return;
      centerOn(projectIndex + 1);
      scheduleAuto();
    }, 3200);
  };

  const holdAuto = () => {
    clearTimeout(autoTimer);
    clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(() => {
      if (pointerInside) return;
      scheduleAuto();
    }, 3200);
  };

  const renderProjects = () => {
    const list = filtered();
    grid.innerHTML = list.map(cardHtml).join("");
    empty.hidden = list.length > 0;
    count.textContent = `${list.length} project${list.length === 1 ? "" : "s"}`;
    requestAnimationFrame(() => {
      grid.querySelectorAll(".meter").forEach((meter) => meter.classList.add("is-ready"));
      centerOn(0, "auto");
      scheduleAuto();
    });
    grid.querySelectorAll(".project-open").forEach((button) => {
      button.addEventListener("click", () => openProject(button.dataset.id));
    });
  };

  if (grid && carousel) {
    grid.addEventListener("pointerover", (event) => {
      if (!canHover || gliding) return;
      const card = event.target.closest(".project-card");
      if (!card) return;
      clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => {
        if (gliding) return;
        const index = projectCards().indexOf(card);
        if (index >= 0 && index !== projectIndex) centerOn(index);
      }, 120);
    });

    carousel.addEventListener("pointerenter", () => {
      pointerInside = true;
      clearTimeout(autoTimer);
    });
    carousel.addEventListener("pointerleave", () => {
      pointerInside = false;
      clearTimeout(hoverTimer);
      clearTimeout(edgeTimer);
      if (!gliding) centerOn(projectIndex, "auto");
      scheduleAuto();
    });

    let edgeDir = 0;
    const armEdge = (direction) => {
      if (!canHover) return;
      edgeDir = direction;
      clearTimeout(edgeTimer);
      edgeTimer = window.setTimeout(() => {
        if (edgeDir !== direction || gliding) return;
        centerOn(projectIndex + direction);
        armEdge(direction);
      }, 700);
    };
    const stopEdge = () => {
      edgeDir = 0;
      clearTimeout(edgeTimer);
    };
    document.querySelector("#project-prev")?.addEventListener("pointerenter", () => armEdge(-1));
    document.querySelector("#project-next")?.addEventListener("pointerenter", () => armEdge(1));
    document.querySelector("#project-prev")?.addEventListener("pointerleave", stopEdge);
    document.querySelector("#project-next")?.addEventListener("pointerleave", stopEdge);
    document.querySelector("#project-prev")?.addEventListener("click", () => {
      stopEdge();
      centerOn(projectIndex - 1);
      holdAuto();
    });
    document.querySelector("#project-next")?.addEventListener("click", () => {
      stopEdge();
      centerOn(projectIndex + 1);
      holdAuto();
    });

    let scrollTimer = 0;
    grid.addEventListener("scroll", () => {
      if (canHover || gliding) return;
      clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const cards = projectCards();
        const mid = grid.scrollLeft + grid.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        cards.forEach((card, index) => {
          const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - mid);
          if (dist < bestDist) {
            bestDist = dist;
            best = index;
          }
        });
        centerOn(best);
        holdAuto();
      }, 140);
    }, { passive: true });

    dots?.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      centerOn(Number(button.dataset.index));
      holdAuto();
    });

    grid.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      centerOn(projectIndex + (event.key === "ArrowRight" ? 1 : -1));
      holdAuto();
    });

    if ("IntersectionObserver" in window) {
      const watch = new IntersectionObserver((entries) => {
        projectsInView = entries.some((entry) => entry.isIntersecting);
        if (projectsInView && !pointerInside) scheduleAuto();
        else clearTimeout(autoTimer);
      }, { threshold: 0.3 });
      watch.observe(carousel);
    }
  }

  const dash = document.querySelector("#progress-dash");
  const ongoingTop = PROJECTS.filter((project) => project.status === "ongoing" && project.poc != null)
    .sort((a, b) => b.poc - a.poc)
    .slice(0, 4);
  dash.innerHTML = ongoingTop.map((project) => `
    <button type="button" data-id="${project.id}">
      <strong>${project.name}</strong>
      <div class="meter" style="--w:${project.poc}%"><span></span></div>
      <small>${project.poc}% · ${project.developer || ""}</small>
    </button>`).join("");
  dash.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.id));
  });
  requestAnimationFrame(() => dash.querySelectorAll(".meter").forEach((meter) => meter.classList.add("is-ready")));

  const modal = document.querySelector("#project-modal");
  const openProject = (id) => {
    const project = PROJECTS.find((item) => item.id === id);
    if (!project || !modal) return;
    const hero = document.querySelector("#modal-hero");
    const body = document.querySelector("#modal-body");
    hero.innerHTML = `
      ${project.image ? `<img src="${project.image}" alt="" />` : ""}
      <button class="modal-close" type="button" data-close>Close</button>`;
    const rows = [
      ["Status", project.status === "ongoing" ? (project.pocLabel || `${project.poc}% complete`) : "Completed"],
      ["Category", project.category],
      ["Location", project.place],
      ["Developer", project.developer],
      ["Contract", project.amount],
      ["Scope", project.scope]
    ].filter((row) => row[1]);
    body.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.blurb || ""}</p>
      <dl class="facts">${rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}</dl>
      <p class="muted">Figures are taken from the 2026 company profile.</p>`;
    hero.querySelector("[data-close]").addEventListener("click", () => modal.close());
    if (typeof modal.showModal === "function") modal.showModal();
  };

  modal?.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
  modal?.addEventListener("cancel", (event) => {
    event.preventDefault();
    modal.close();
  });

  const heroIds = ["pasig-hall", "gold-phase-2", "garden-city", "charm", "lush", "stpeter-caloocan", "green-2", "westwind", "red", "central-park", "sea-2", "bloom"];
  const heroSlides = heroIds.map((id) => PROJECTS.find((project) => project.id === id)).filter((project) => project && project.image);
  const heroMedia = document.querySelector("#hero-slides");
  const heroCard = document.querySelector("#hero-card");
  const heroName = document.querySelector("#hero-card-name");
  const heroMeta = document.querySelector("#hero-card-meta");
  const heroDots = document.querySelector("#hero-dots");
  const heroSheen = document.querySelector("#hero-sheen");
  const heroProgress = document.querySelector("#hero-progress");
  const heroStage = document.querySelector("#hero-stage");
  if (heroMedia && heroSlides.length && heroCard) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const spot = heroMedia.querySelector(".hero-spot");
    const sheen = heroMedia.querySelector(".hero-sheen");
    heroMedia.querySelectorAll(".hero-slide").forEach((node) => node.remove());
    const frames = heroSlides.map((project, index) => {
      const img = document.createElement("img");
      img.className = "hero-slide" + (index === 0 ? " is-active" : "");
      img.src = project.image;
      img.alt = "";
      img.decoding = "async";
      if (index === 0) img.setAttribute("fetchpriority", "high");
      heroMedia.insertBefore(img, spot || sheen);
      return img;
    });
    heroDots.innerHTML = heroSlides.map((project, index) => `
      <button type="button" class="hero-dot${index === 0 ? " is-active" : ""}" role="tab" aria-label="${project.name}" aria-selected="${index === 0 ? "true" : "false"}"></button>`).join("");
    const dots = [...heroDots.querySelectorAll(".hero-dot")];
    let heroIndex = 0;
    let heroTimer = 0;
    const showHero = (index, sweep) => {
      heroIndex = (index + heroSlides.length) % heroSlides.length;
      const project = heroSlides[heroIndex];
      frames.forEach((frame, frameIndex) => frame.classList.toggle("is-active", frameIndex === heroIndex));
      dots.forEach((dot, dotIndex) => {
        const on = dotIndex === heroIndex;
        dot.classList.toggle("is-active", on);
        dot.setAttribute("aria-selected", on ? "true" : "false");
      });
      heroName.textContent = project.name;
      heroMeta.textContent = project.place || project.developer || project.category;
      heroCard.dataset.id = project.id;
      if (sweep && heroSheen) {
        heroSheen.classList.remove("is-on");
        void heroSheen.offsetWidth;
        heroSheen.classList.add("is-on");
        heroCard.classList.remove("is-lit");
        void heroCard.offsetWidth;
        heroCard.classList.add("is-lit");
      }
      if (heroProgress) {
        heroProgress.classList.remove("is-run");
        void heroProgress.offsetWidth;
        if (!reduceMotion) heroProgress.classList.add("is-run");
      }
    };
    const queueHero = () => {
      window.clearInterval(heroTimer);
      if (reduceMotion) return;
      heroTimer = window.setInterval(() => showHero(heroIndex + 1, true), 6800);
    };
    showHero(0, false);
    queueHero();
    document.querySelector("#hero-prev")?.addEventListener("click", () => { showHero(heroIndex - 1, true); queueHero(); });
    document.querySelector("#hero-next")?.addEventListener("click", () => { showHero(heroIndex + 1, true); queueHero(); });
    dots.forEach((dot, index) => dot.addEventListener("click", () => { showHero(index, true); queueHero(); }));
    heroCard.addEventListener("click", () => openProject(heroCard.dataset.id));
    heroStage?.addEventListener("mouseenter", () => window.clearInterval(heroTimer));
    heroStage?.addEventListener("mouseleave", queueHero);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) window.clearInterval(heroTimer);
      else queueHero();
    });
  }

  const lightbox = document.querySelector("#lightbox");
  const lbImg = document.querySelector("#lb-img");
  const lbStage = document.querySelector("#lb-stage");
  const lbTitle = document.querySelector("#lb-title");
  let scale = 1;
  let panX = 0;
  let panY = 0;

  const applyTransform = () => {
    lbImg.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
  };
  const resetZoom = () => {
    scale = 1;
    panX = 0;
    panY = 0;
    applyTransform();
  };
  const openLightbox = (src, alt) => {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lbTitle.textContent = alt || "Image";
    resetZoom();
    lightbox.showModal();
  };
  document.querySelectorAll(".zoomable").forEach((button) => {
    button.addEventListener("click", () => openLightbox(button.dataset.full, button.dataset.alt));
  });
  document.querySelector("#lb-in")?.addEventListener("click", () => { scale = Math.min(scale + 0.35, 4); applyTransform(); });
  document.querySelector("#lb-out")?.addEventListener("click", () => { scale = Math.max(scale - 0.35, 1); if (scale === 1) { panX = 0; panY = 0; } applyTransform(); });
  document.querySelector("#lb-reset")?.addEventListener("click", resetZoom);
  document.querySelector("#lb-close")?.addEventListener("click", () => lightbox.close());
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });

  let dragging = false;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;
  lbStage?.addEventListener("pointerdown", (event) => {
    if (scale <= 1) return;
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    originX = panX;
    originY = panY;
    lbStage.setPointerCapture(event.pointerId);
  });
  lbStage?.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    panX = originX + (event.clientX - startX);
    panY = originY + (event.clientY - startY);
    applyTransform();
  });
  lbStage?.addEventListener("pointerup", () => { dragging = false; });
  lbStage?.addEventListener("wheel", (event) => {
    if (!lightbox.open) return;
    event.preventDefault();
    scale = Math.min(4, Math.max(1, scale + (event.deltaY < 0 ? 0.15 : -0.15)));
    if (scale === 1) { panX = 0; panY = 0; }
    applyTransform();
  }, { passive: false });

  const copyText = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      const area = document.createElement("textarea");
      area.value = value;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch { ok = false; }
      area.remove();
      return ok;
    }
  };
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", async () => {
      const original = button.dataset.label || button.textContent;
      button.dataset.label = original;
      const ok = await copyText(button.dataset.copy);
      button.textContent = ok ? "Copied" : "Copy failed";
      window.setTimeout(() => { button.textContent = original; }, 1800);
    });
  });

  const form = document.querySelector("#contact-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const topic = form.topic.value;
    let valid = true;
    const setError = (id, text) => {
      const field = document.querySelector(`#${id}`).closest(".field");
      field.classList.toggle("is-invalid", Boolean(text));
      document.querySelector(`#${id}-error`).textContent = text;
      if (text) valid = false;
    };
    setError("name", name ? "" : "Please enter your name.");
    setError("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address.");
    setError("message", message.length >= 8 ? "" : "Tell us a little more about the project.");
    if (!valid) return;
    const subject = encodeURIComponent(`${topic} from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
    window.location.href = `mailto:abcorpinfo@archipelagobuilders.com?subject=${subject}&body=${body}`;
    document.querySelector("#form-note").hidden = false;
    form.reset();
  });

  const revealTargets = document.querySelectorAll(".stats-bar");
  const animateCounters = (root) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.querySelectorAll("[data-count]").forEach((el) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const decimals = Number(el.dataset.decimals || 0);
      const paint = (value) => {
        el.textContent = `${prefix}${decimals ? value.toFixed(decimals) : Math.round(value)}${suffix}`;
      };
      if (reduce) { paint(target); return; }
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / 1100, 1);
        paint(target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounters(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach(animateCounters);
  }

  function revealOnScroll(nodes, gap) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-in", "is-settled"));
      return;
    }
    const entrance = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const index = Number(node.dataset.index || 0);
        node.classList.add("is-in");
        window.setTimeout(() => node.classList.add("is-settled"), 520 + index * gap);
        entrance.unobserve(node);
      });
    }, { threshold: 0.18 });
    nodes.forEach((node) => entrance.observe(node));
  }

  function initWhy() {
    const list = document.querySelector("#why-cards");
    const stageIcon = document.querySelector("#why-stage-icon");
    const stat = document.querySelector("#why-stat");
    const caption = document.querySelector("#why-caption");
    const live = document.querySelector("#why-live");
    const ticksWrap = document.querySelector("#why-ticks");
    if (!list || !ticksWrap || !stat) return;

    list.innerHTML = WHY.map((item, index) => `
      <article class="why-card" data-index="${index}" style="--d:${index}">
        <h3>
          <button class="why-toggle" type="button" id="why-btn-${index}" aria-expanded="false" aria-controls="why-panel-${index}">
            <span class="why-ico" aria-hidden="true">${ICONS[item.icon]}</span>
            <span class="why-title">${item.title}</span>
            <span class="why-plus" aria-hidden="true"><span></span><span></span></span>
          </button>
        </h3>
        <div class="why-panel" id="why-panel-${index}" role="region" aria-labelledby="why-btn-${index}" aria-hidden="true">
          <div class="why-panel-inner"><p>${item.body}</p></div>
        </div>
      </article>`).join("");

    ticksWrap.innerHTML = WHY.map((item) => `<button class="why-tick" type="button" aria-label="${item.title}"></button>`).join("");

    const cards = [...list.querySelectorAll(".why-card")];
    const ticks = [...ticksWrap.querySelectorAll(".why-tick")];
    let open = -1;
    let stage = 0;
    let statTimer = 0;
    let countToken = 0;
    let hoverTimer = 0;
    let lockUntil = 0;

    const countUp = (item) => {
      const token = ++countToken;
      if (item.count == null || reduceMotion) {
        stat.textContent = item.stat;
        return;
      }
      const start = performance.now();
      const frame = (now) => {
        if (token !== countToken) return;
        const progress = Math.min(1, (now - start) / 900);
        const eased = 1 - Math.pow(1 - progress, 3);
        stat.textContent = `${item.prefix || ""}${Math.round(item.count * eased)}${item.suffix || ""}`;
        if (progress < 1) requestAnimationFrame(frame);
        else stat.textContent = item.stat;
      };
      requestAnimationFrame(frame);
    };

    const markTicks = (index) => {
      ticks.forEach((tick, tickIndex) => {
        tick.classList.toggle("is-on", index >= 0 && tickIndex <= index);
        if (tickIndex === index) tick.setAttribute("aria-current", "true");
        else tick.removeAttribute("aria-current");
      });
    };

    const showStage = (index) => {
      const item = WHY[index];
      stage = index;
      markTicks(index);
      clearTimeout(statTimer);
      const commit = () => {
        stageIcon.innerHTML = ICONS[item.icon];
        caption.textContent = item.caption;
        live.textContent = `${item.stat}. ${item.caption}`;
        countUp(item);
        requestAnimationFrame(() => {
          stat.classList.remove("is-out");
          caption.classList.remove("is-out");
        });
      };
      if (reduceMotion) {
        stat.classList.remove("is-out");
        caption.classList.remove("is-out");
        commit();
        return;
      }
      stat.classList.add("is-out");
      caption.classList.add("is-out");
      statTimer = window.setTimeout(commit, 220);
    };

    const setOpen = (index) => {
      open = index;
      list.classList.toggle("is-engaged", index >= 0);
      cards.forEach((card, cardIndex) => {
        const on = cardIndex === index;
        card.classList.toggle("is-open", on);
        card.querySelector(".why-toggle").setAttribute("aria-expanded", on ? "true" : "false");
        card.querySelector(".why-panel").setAttribute("aria-hidden", on ? "false" : "true");
      });
      if (index >= 0 && index !== stage) showStage(index);
      else if (index >= 0) live.textContent = `${WHY[index].stat}. ${WHY[index].caption}`;
    };

    cards.forEach((card, index) => {
      const button = card.querySelector(".why-toggle");
      card.addEventListener("pointerenter", () => {
        if (!canHover) return;
        clearTimeout(hoverTimer);
        hoverTimer = window.setTimeout(() => {
          setOpen(index);
          card.dataset.hoverOpen = "1";
        }, 110);
      });
      card.addEventListener("pointerleave", () => {
        clearTimeout(hoverTimer);
        delete card.dataset.hoverOpen;
      });
      button.addEventListener("click", () => {
        clearTimeout(hoverTimer);
        const fromHover = card.dataset.hoverOpen === "1";
        delete card.dataset.hoverOpen;
        if (open === index && !fromHover) setOpen(-1);
        else setOpen(index);
      });
      button.addEventListener("focus", () => {
        if (viaKeyboard) setOpen(index);
      });
    });

    ticks.forEach((tick, index) => {
      tick.addEventListener("click", () => {
        setOpen(index);
        lockUntil = performance.now() + 900;
        cards[index].scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      });
    });

    if (!canHover) {
      let ticking = false;
      const syncCenter = () => {
        if (performance.now() < lockUntil) return;
        const mid = window.innerHeight / 2;
        let best = -1;
        let bestDist = Infinity;
        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;
          const dist = Math.abs((rect.top + rect.bottom) / 2 - mid);
          if (dist < bestDist) {
            bestDist = dist;
            best = index;
          }
        });
        if (best >= 0 && best !== open) setOpen(best);
      };
      window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          syncCenter();
        });
      }, { passive: true });
    }

    stageIcon.innerHTML = ICONS[WHY[0].icon];
    stat.textContent = WHY[0].stat;
    caption.textContent = WHY[0].caption;
    markTicks(0);
    revealOnScroll(cards, 90);
  }

  function initPartners() {
    const board = document.querySelector("#partner-board");
    if (!board) return;
    board.innerHTML = PARTNERS.map((partner, index) => {
      const slides = partner.photos.map((photo, photoIndex) => `
        <div class="pg-slide${photoIndex === 0 ? " is-on" : ""}">
          <img src="${photo.src}" alt="${photo.alt}" />
        </div>`).join("");
      const thumbs = partner.photos.length > 1 ? `
        <div class="pg-thumbs">
          ${partner.photos.map((photo, photoIndex) => `
            <button type="button" class="${photoIndex === 0 ? "is-on" : ""}" aria-label="Show photo: ${photo.caption}"${photoIndex === 0 ? ' aria-current="true"' : ""}>
              <img src="${photo.src}" alt="" />
            </button>`).join("")}
        </div>
        <div class="pg-progress" aria-hidden="true"><i></i></div>` : "";
      const email = partner.email ? `<p class="partner-meta"><span class="meta-ico">${MAIL}</span><a href="mailto:${partner.email}">${partner.email}</a></p>` : "";
      return `
        <article class="partner-tile${partner.photos.length < 2 ? " is-single" : ""}" data-index="${index}" style="--d:${index}">
          <div class="partner-media">
            ${slides}
            <span class="partner-badge">${partner.badge}</span>
            <p class="pg-caption">${partner.photos[0].caption}</p>
            ${thumbs}
          </div>
          <img class="partner-logo" src="${partner.logo}" alt="${partner.logoAlt}" />
          <div class="partner-copy">
            <h3>${partner.name}</h3>
            <p class="partner-meta"><span class="meta-ico">${PIN}</span><span>${partner.place}</span></p>
            ${email}
            <p class="partner-desc">${partner.description}</p>
            <p class="partner-kicker">${partner.label}</p>
            <ul class="partner-chips">${partner.chips.map((chip) => `<li>${chip}</li>`).join("")}</ul>
            <ul class="partner-points">${partner.points.map((point) => `<li>${CHECK}<span>${point}</span></li>`).join("")}</ul>
          </div>
        </article>`;
    }).join("");

    const tiles = [...board.querySelectorAll(".partner-tile")];
    let hot = -1;

    const setHot = (index) => {
      hot = index;
      board.classList.toggle("is-engaged", index >= 0);
      tiles.forEach((tile, tileIndex) => {
        const on = tileIndex === index;
        tile.classList.toggle("is-hot", on);
        if (on) tile._play();
        else tile._stop();
      });
    };

    tiles.forEach((tile, index) => {
      const partner = PARTNERS[index];
      const single = partner.photos.length < 2;
      const slideEls = [...tile.querySelectorAll(".pg-slide")];
      const thumbEls = [...tile.querySelectorAll(".pg-thumbs button")];
      const caption = tile.querySelector(".pg-caption");
      const bar = tile.querySelector(".pg-progress i");
      let photo = 0;
      let playing = false;
      let timer = 0;
      let capTimer = 0;

      const restartBar = () => {
        if (!bar) return;
        bar.style.animation = "none";
        void bar.offsetWidth;
        bar.style.animation = "";
      };
      const restartKen = () => {
        const img = slideEls[photo]?.querySelector("img");
        if (!img || reduceMotion) return;
        img.style.animation = "none";
        void img.offsetWidth;
        img.style.animation = "";
      };
      const queue = () => {
        clearTimeout(timer);
        if (!playing || single) return;
        timer = window.setTimeout(() => show((photo + 1) % partner.photos.length), 3200);
      };
      const show = (next) => {
        photo = next;
        slideEls.forEach((slide, slideIndex) => slide.classList.toggle("is-on", slideIndex === next));
        thumbEls.forEach((thumb, thumbIndex) => {
          const on = thumbIndex === next;
          thumb.classList.toggle("is-on", on);
          if (on) thumb.setAttribute("aria-current", "true");
          else thumb.removeAttribute("aria-current");
        });
        clearTimeout(capTimer);
        if (reduceMotion) caption.textContent = partner.photos[next].caption;
        else {
          caption.classList.add("is-out");
          capTimer = window.setTimeout(() => {
            caption.textContent = partner.photos[next].caption;
            caption.classList.remove("is-out");
          }, 160);
        }
        if (playing) {
          restartBar();
          restartKen();
          queue();
        }
      };

      tile._play = () => {
        if (single || reduceMotion || playing) return;
        playing = true;
        tile.classList.add("is-playing");
        restartBar();
        restartKen();
        queue();
      };
      tile._stop = () => {
        playing = false;
        clearTimeout(timer);
        tile.classList.remove("is-playing");
      };

      thumbEls.forEach((thumb, thumbIndex) => {
        const jump = () => {
          if (canHover && !playing && !reduceMotion && !single) {
            playing = true;
            tile.classList.add("is-playing");
          }
          show(thumbIndex);
        };
        thumb.addEventListener("pointerenter", () => { if (canHover) jump(); });
        thumb.addEventListener("click", jump);
      });

      if (canHover) {
        tile.addEventListener("pointerenter", () => setHot(index));
        tile.addEventListener("pointerleave", (event) => {
          if (!tile.contains(event.relatedTarget) && hot === index) setHot(-1);
        });
      }
      tile.addEventListener("focusin", () => setHot(index));
      tile.addEventListener("focusout", (event) => {
        if (!tile.contains(event.relatedTarget) && hot === index) setHot(-1);
      });
    });

    revealOnScroll(tiles, 140);

    if (!canHover && "IntersectionObserver" in window) {
      const ratios = new Map();
      const watch = new IntersectionObserver((entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));
        let best = null;
        let bestRatio = 0.55;
        ratios.forEach((ratio, tile) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = tile;
          }
        });
        setHot(best ? Number(best.dataset.index) : -1);
      }, { threshold: [0, 0.25, 0.55, 0.75, 1] });
      tiles.forEach((tile) => watch.observe(tile));
    }
  }

  renderProjects();
})();
