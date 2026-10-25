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

const CATEGORIES = ["All", ...new Set(PROJECTS.filter((project) => project.image).map((project) => project.category))];

(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    const top = document.querySelector("#to-top");
    if (top) top.classList.toggle("is-on", window.scrollY > 700);
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

  document.querySelectorAll(".why-item").forEach((item) => {
    item.querySelector(".why-toggle")?.addEventListener("click", () => {
      const open = item.classList.toggle("is-open");
      item.querySelector(".why-toggle").setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

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

  const renderProjects = () => {
    const list = filtered();
    grid.innerHTML = list.map(cardHtml).join("");
    empty.hidden = list.length > 0;
    count.textContent = `${list.length} project${list.length === 1 ? "" : "s"}`;
    requestAnimationFrame(() => {
      grid.querySelectorAll(".meter").forEach((meter) => meter.classList.add("is-ready"));
    });
    grid.querySelectorAll(".project-open").forEach((button) => {
      button.addEventListener("click", () => openProject(button.dataset.id));
    });
    grid.scrollTo({ left: 0 });
  };

  const scrollProjects = (direction) => {
    const card = grid.querySelector(".project-card");
    const distance = card ? card.getBoundingClientRect().width + 14 : 340;
    grid.scrollBy({ left: direction * distance, behavior: "smooth" });
  };
  document.querySelector("#project-prev")?.addEventListener("click", () => scrollProjects(-1));
  document.querySelector("#project-next")?.addEventListener("click", () => scrollProjects(1));

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

  renderProjects();
})();
