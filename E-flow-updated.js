const app = {
  currentLang: localStorage.getItem("eflow-lang") || "km",
  currentTheme: localStorage.getItem("eflow-theme") || "light",
  currentView: "dashboard",

  data: {
    users: [],
    cases: [],
    applications: [],
    documentsIn: [],
    documentsOut: [],
    meetings: [],
    requestForms: []
  },

  translations: {
    km: {
      brandTitle: "ប្រព័ន្ធគ្រប់គ្រងឯកសារ",
      brandSub: "SERC e-Flow Management System",
      navDashboard: "ផ្ទាំងប្រតិបត្តិការ",
      navUsers: "ការគ្រប់គ្រងអ្នកប្រើប្រាស់",
      navCases: "ការគ្រប់គ្រងករណី",
      navApplications: "ការគ្រប់គ្រងពាក្យស្នើសុំ",
      navDocumentIn: "ឯកសារ-ចូល",
      navDocumentOut: "ឯកសារ-ចេញ",
      navReview: "ដំណើរការត្រួតពិនិត្យ",
      navMeeting: "ការប្រជុំ",
      navStatistics: "ស្ថិតិ",
      navSettings: "ការកំណត់",
      logout: "ចាកចេញ",
      searchPlaceholder: "ស្វែងរក...",
      kpiUsers: "អ្នកប្រើប្រាស់សរុប",
      kpiCases: "ករណីសរុប",
      kpiApplications: "ពាក្យស្នើសុំ",
      kpiPending: "រង់ចាំពិនិត្យ",
      dashboardOverview: "សង្ខេបទូទៅប្រព័ន្ធ",
      dashboardDesc: "ទិន្នន័យសំខាន់ៗសម្រាប់ការតាមដានប្រតិបត្តិការ",
      loadDemoData: "បញ្ចូលទិន្នន័យគំរូ",
      approvedCount: "បានអនុម័ត",
      inProgressCount: "កំពុងដំណើរការ",
      meetingCount: "ការប្រជុំ",
      quickAddUser: "បន្ថែមអ្នកប្រើប្រាស់ថ្មី",
      quickAddUserSub: "Create new internal, company, or public account",
      quickAddApplication: "បង្កើតពាក្យស្នើសុំ",
      quickAddApplicationSub: "Add a new license, certificate, or update request",
      recentActivity: "សកម្មភាពថ្មីៗ",
      userManagement: "ការគ្រប់គ្រងអ្នកប្រើប្រាស់",
      userManagementSub: "បង្កើត កែប្រែ លុប និងស្វែងរកអ្នកប្រើប្រាស់",
      addUser: "បន្ថែមអ្នកប្រើប្រាស់",
      caseManagement: "ការគ្រប់គ្រងករណី",
      caseManagementSub: "បង្កើតលេខករណី ស្ថានភាព និងការតាមដាន",
      addCase: "បន្ថែមករណី",
      applicationManagement: "ការគ្រប់គ្រងពាក្យស្នើសុំ",
      applicationManagementSub: "គ្រប់គ្រងអាជ្ញាបណ្ណ វិញ្ញាបនបត្រ និងសំណើកែប្រែ",
      addApplication: "បន្ថែមពាក្យស្នើសុំ",
      documentInTitle: "ឯកសារ-ចូល",
      documentInSub: "បញ្ចូលឯកសារ កត់ត្រា និងរក្សាទុក metadata",
      uploadDocument: "បញ្ចូលឯកសារ",
      saveDocument: "រក្សាទុកឯកសារ",
      documentOutTitle: "ឯកសារ-ចេញ",
      documentOutSub: "កត់ត្រាឯកសារដែលបានផ្ញើ និងស្ថានភាព",
      addOutgoing: "បន្ថែមឯកសារ-ចេញ",
      reviewTitle: "ដំណើរការត្រួតពិនិត្យ",
      reviewSub: "Pending → In Review → Approved / Returned / Rejected",
      reviewAction: "សកម្មភាពពិនិត្យ",
      meetingTitle: "ការប្រជុំ",
      saveMeeting: "រក្សាទុកការប្រជុំ",
      statisticsTitle: "ស្ថិតិ និងរបាយការណ៍",
      statisticsSub: "សង្ខេបទិន្នន័យពីគ្រប់មុខងារ",
      settingsTitle: "ការកំណត់",
      settingsSub: "ប្តូរភាសា រូបរាង និងគ្រប់គ្រងទិន្នន័យ",
      languageSetting: "ការកំណត់ភាសា",
      dataManagement: "ការគ្រប់គ្រងទិន្នន័យ",
      reloadDemo: "បញ្ចូលទិន្នន័យគំរូឡើងវិញ",
      clearData: "លុបទិន្នន័យទាំងអស់",
      thName: "ឈ្មោះ",
      thEmail: "អ៊ីមែល",
      thType: "ប្រភេទ",
      thStatus: "ស្ថានភាព",
      thAction: "សកម្មភាព",
      thTitle: "ចំណងជើង",
      thService: "សេវា",
      thCompany: "ក្រុមហ៊ុន",
      thPayment: "ការទូទាត់",
      thFiles: "ឯកសារ",
      thRecipient: "អ្នកទទួល",
      thDate: "កាលបរិច្ឆេទ",
      thRoom: "បន្ទប់",
      phaseLabel: "ដំណាក់កាល",
      phaseDesc: "ប្រព័ន្ធជំនាន់ថ្មី មានទាំង KH / EN និងរក្សាទុកទិន្នន័យក្នុង browser",
      allTypes: "ប្រភេទទាំងអស់",
      searchUsers: "ស្វែងរកអ្នកប្រើប្រាស់...",
      statActiveUsers: "អ្នកប្រើប្រាស់សកម្ម",
      statApprovedApps: "ពាក្យបានអនុម័ត",
      statPendingCases: "ករណីកំពុងដំណើរការ",
      statDocuments: "ឯកសារសរុប",
      delete: "លុប",
      review: "ពិនិត្យ",
      approve: "អនុម័ត",
      return: "ត្រឡប់",
      reject: "បដិសេធ",
      active: "សកម្ម",
      inactive: "អសកម្ម",
      pending: "រង់ចាំ",
      inReview: "កំពុងពិនិត្យ",
      approved: "បានអនុម័ត",
      returned: "ត្រឡប់",
      rejected: "បដិសេធ",
      scheduled: "បានកំណត់",
      sent: "បានផ្ញើ",
      draft: "ព្រាង",
      paid: "បានបង់",
      unpaid: "មិនទាន់បង់",
      darkModeOn: "បើកមុខងារ Dark Mode",
      darkModeOff: "បិទមុខងារ Dark Mode",
      confirmLogout: "តើអ្នកចង់ចាកចេញមែនទេ?",
      confirmDeleteAll: "តើអ្នកចង់លុបទិន្នន័យទាំងអស់មែនទេ?",
      demoLoaded: "បានបញ្ចូលទិន្នន័យគំរូរួចរាល់",
      fillRequired: "សូមបំពេញព័ត៌មានចាំបាច់ឲ្យគ្រប់",
      noLoginPage: "រកមិនឃើញ login.html ទេ",
      mobileMenu: "ម៉ឺនុយ",
      navRequestForm: "ការស្នើរសុំ",
      requestFormTitle: "ការស្នើរសុំ",
      requestFormSub: "ទម្រង់ស្នើរសុំសម្រាប់អ្នកប្រើប្រាស់",
      addRequestForm: "បន្ថែមទម្រង់",
      requestCard1: "ស្នើរសុំថ្មី",
      requestCard1Sub: "បង្កើតពាក្យស្នើរសុំថ្មី",
      requestCard2: "បំពេញឯកសារ",
      requestCard2Sub: "បញ្ចូលព័ត៌មានសម្រាប់សំណើ",
      requestCard3: "តាមដានស្ថានភាព",
      requestCard3Sub: "មើលស្ថានភាពនៃការស្នើរសុំ",
    },
    en: {
      brandTitle: "Document Management System",
      brandSub: "SERC e-Flow Management System",
      navDashboard: "Dashboard",
      navUsers: "User Management",
      navCases: "Case Management",
      navApplications: "Application Management",
      navDocumentIn: "Incoming Documents",
      navDocumentOut: "Outgoing Documents",
      navReview: "Review Process",
      navMeeting: "Meetings",
      navStatistics: "Statistics",
      navSettings: "Settings",
      logout: "Logout",
      searchPlaceholder: "Search...",
      kpiUsers: "Total Users",
      kpiCases: "Total Cases",
      kpiApplications: "Applications",
      kpiPending: "Pending Review",
      dashboardOverview: "System Overview",
      dashboardDesc: "Key operational data summary",
      loadDemoData: "Load Demo Data",
      approvedCount: "Approved",
      inProgressCount: "In Progress",
      meetingCount: "Meetings",
      quickAddUser: "Add New User",
      quickAddUserSub: "Create new internal, company, or public account",
      quickAddApplication: "Create Application",
      quickAddApplicationSub: "Add a new license, certificate, or update request",
      recentActivity: "Recent Activity",
      userManagement: "User Management",
      userManagementSub: "Create, edit, delete and search users",
      addUser: "Add User",
      caseManagement: "Case Management",
      caseManagementSub: "Create case IDs, status and tracking",
      addCase: "Add Case",
      applicationManagement: "Application Management",
      applicationManagementSub: "Manage licenses, certificates and change requests",
      addApplication: "Add Application",
      documentInTitle: "Incoming Documents",
      documentInSub: "Upload documents, record and keep metadata",
      uploadDocument: "Upload Document",
      saveDocument: "Save Document",
      documentOutTitle: "Outgoing Documents",
      documentOutSub: "Track sent documents and statuses",
      addOutgoing: "Add Outgoing",
      reviewTitle: "Review Process",
      reviewSub: "Pending → In Review → Approved / Returned / Rejected",
      reviewAction: "Review Actions",
      meetingTitle: "Meetings",
      saveMeeting: "Save Meeting",
      statisticsTitle: "Statistics & Reports",
      statisticsSub: "Summary data from all modules",
      settingsTitle: "Settings",
      settingsSub: "Change language, appearance and manage data",
      languageSetting: "Language Settings",
      dataManagement: "Data Management",
      reloadDemo: "Reload Demo Data",
      clearData: "Clear All Data",
      thName: "Name",
      thEmail: "Email",
      thType: "Type",
      thStatus: "Status",
      thAction: "Action",
      thTitle: "Title",
      thService: "Service",
      thCompany: "Company",
      thPayment: "Payment",
      thFiles: "Files",
      thRecipient: "Recipient",
      thDate: "Date",
      thRoom: "Room",
      phaseLabel: "Phase",
      phaseDesc: "Next-generation system with KH / EN and browser data storage",
      allTypes: "All Types",
      searchUsers: "Search users...",
      statActiveUsers: "Active Users",
      statApprovedApps: "Approved Applications",
      statPendingCases: "Pending Cases",
      statDocuments: "Total Documents",
      delete: "Delete",
      review: "Review",
      approve: "Approve",
      return: "Return",
      reject: "Reject",
      active: "Active",
      inactive: "Inactive",
      pending: "Pending",
      inReview: "In Review",
      approved: "Approved",
      returned: "Returned",
      rejected: "Rejected",
      scheduled: "Scheduled",
      sent: "Sent",
      draft: "Draft",
      paid: "Paid",
      unpaid: "Unpaid",
      darkModeOn: "Enable Dark Mode",
      darkModeOff: "Disable Dark Mode",
      confirmLogout: "Do you want to logout?",
      confirmDeleteAll: "Do you want to delete all data?",
      demoLoaded: "Demo data loaded successfully",
      fillRequired: "Please complete required fields",
      noLoginPage: "login.html not found",
      mobileMenu: "Menu",
      navRequestForm: "Request Form",
      requestFormTitle: "Request Form",
      requestFormSub: "Request forms for users",
      addRequestForm: "Add Form",
      requestCard1: "New Request",
      requestCard1Sub: "Create a new request",
      requestCard2: "Fill Form",
      requestCard2Sub: "Enter request information",
      requestCard3: "Track Status",
      requestCard3Sub: "View request status",
    }
  },

  init() {
    this.loadData();
    this.cacheElements();
    this.bindEvents();
    this.renderMobileMenu();
    this.applyLanguage(this.currentLang, false);
    this.applyTheme(this.currentTheme, false);

    if (
      this.data.users.length === 0 &&
      this.data.cases.length === 0 &&
      this.data.applications.length === 0 &&
      this.data.documentsIn.length === 0 &&
      this.data.documentsOut.length === 0 &&
      this.data.meetings.length === 0
    ) {
      this.seedDemoData(false);
    } else {
      this.renderAll();
    }

    this.switchView("dashboard");
  },

  cacheElements() {
    this.pageTitle = document.getElementById("pageTitle");
    this.pageSubtitle = document.getElementById("pageSubtitle");
    this.views = document.querySelectorAll(".view");
    this.navItems = document.querySelectorAll(".nav-item");
    this.mobileSidebar = document.getElementById("mobileSidebar");
    this.mobileNavGrid = document.getElementById("mobileNavGrid");
    this.mobileMenuBtn = document.getElementById("mobileMenuBtn");
  },

  bindEvents() {
    this.navItems.forEach(btn => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.view;
        this.switchView(view);
        this.closeMobileMenu();
      });
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.applyLanguage(btn.dataset.lang);
      });
    });

    document.getElementById("themeToggle")?.addEventListener("click", () => {
      const next = this.currentTheme === "light" ? "dark" : "light";
      this.applyTheme(next);
    });

    document.getElementById("topLogoutBtn")?.addEventListener("click", () => {
      this.logout();
    });

    document.getElementById("sidebarLogoutBtn")?.addEventListener("click", () => {
      this.logout();
    });

    this.mobileMenuBtn?.addEventListener("click", () => {
      this.toggleMobileMenu();
    });

    document.getElementById("documentInForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addDocumentIn();
    });

    document.getElementById("meetingForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addMeeting();
    });

    document.getElementById("userSearch")?.addEventListener("input", () => {
      this.renderUsers();
    });

    document.getElementById("userTypeFilter")?.addEventListener("change", () => {
      this.renderUsers();
    });

    document.getElementById("globalSearch")?.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      this.globalSearch(q);
    });

    document.addEventListener("click", (e) => {
      if (!this.mobileSidebar || !this.mobileMenuBtn) return;
      if (window.innerWidth >= 1024) return;

      const clickedInsideSidebar = this.mobileSidebar.contains(e.target);
      const clickedMenuBtn = this.mobileMenuBtn.contains(e.target);

      if (!clickedInsideSidebar && !clickedMenuBtn && !this.mobileSidebar.classList.contains("hidden")) {
        this.closeMobileMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        this.closeMobileMenu();
      }
    });
  },

  saveData() {
    localStorage.setItem("eflow-data", JSON.stringify(this.data));
  },

  loadData() {
    const saved = localStorage.getItem("eflow-data");
    if (saved) {
      try {
        this.data = JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse data:", e);
      }
    }
  },

  t(key) {
    return this.translations[this.currentLang]?.[key] || key;
  },

  applyLanguage(lang, rerender = true) {
    this.currentLang = lang;
    localStorage.setItem("eflow-lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (this.translations[lang]?.[key]) {
        el.textContent = this.translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (this.translations[lang]?.[key]) {
        el.placeholder = this.translations[lang][key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add("bg-[var(--gov-blue)]", "text-white");
        btn.classList.remove("bg-white", "text-slate-700");
      } else {
        btn.classList.remove("bg-[var(--gov-blue)]", "text-white");
        btn.classList.add("bg-white", "text-slate-700");
      }
    });

    this.updatePageHeader();
    this.renderMobileMenu();

    if (rerender) {
      this.renderAll();
    }
  },

  applyTheme(theme, save = true) {
    this.currentTheme = theme;
    if (save) {
      localStorage.setItem("eflow-theme", theme);
    }

    const body = document.body;
    const icon = document.querySelector("#themeToggle i");

    if (theme === "dark") {
      body.classList.add("dark-theme");
      body.style.background = "#0f172a";
      body.style.color = "#e2e8f0";
      if (icon) icon.className = "fa-regular fa-sun";
    } else {
      body.classList.remove("dark-theme");
      body.style.background = "";
      body.style.color = "";
      if (icon) icon.className = "fa-regular fa-moon";
    }
  },

  updatePageHeader() {
    const titles = {
      dashboard: {
        km: ["Dashboard", "Track and manage all workflows"],
        en: ["Dashboard", "Track and manage all workflows"]
      },

      "request-form": {
        km: ["ការស្នើរសុំ", "គ្រប់គ្រងទម្រង់ស្នើរសុំ"],
        en: ["Request Form", "Manage request forms"]
      },

      "user-mgmt": {
        km: ["ការគ្រប់គ្រងអ្នកប្រើប្រាស់", "គ្រប់គ្រងព័ត៌មានអ្នកប្រើប្រាស់"],
        en: ["User Management", "Manage user records"]
      },
      "case-mgmt": {
        km: ["ការគ្រប់គ្រងករណី", "គ្រប់គ្រងករណីទាំងអស់"],
        en: ["Case Management", "Manage all cases"]
      },
      "application-mgmt": {
        km: ["ការគ្រប់គ្រងពាក្យស្នើសុំ", "គ្រប់គ្រងពាក្យស្នើសុំទាំងអស់"],
        en: ["Application Management", "Manage all applications"]
      },
      "document-in": {
        km: ["ឯកសារ-ចូល", "កត់ត្រាឯកសារចូល"],
        en: ["Incoming Documents", "Track incoming documents"]
      },
      "document-out": {
        km: ["ឯកសារ-ចេញ", "កត់ត្រាឯកសារចេញ"],
        en: ["Outgoing Documents", "Track outgoing documents"]
      },
      "review-process": {
        km: ["ដំណើរការត្រួតពិនិត្យ", "ពិនិត្យ និងអនុម័ត"],
        en: ["Review Process", "Review and approve records"]
      },
      "meeting-mgmt": {
        km: ["ការប្រជុំ", "រៀបចំកាលវិភាគប្រជុំ"],
        en: ["Meetings", "Schedule and manage meetings"]
      },
      statistics: {
        km: ["ស្ថិតិ", "មើលទិន្នន័យសង្ខេប"],
        en: ["Statistics", "View summary data"]
      },
      settings: {
        km: ["ការកំណត់", "ប្តូរភាសា និងគ្រប់គ្រងទិន្នន័យ"],
        en: ["Settings", "Change language and manage data"]
      }
    };

    const current = titles[this.currentView] || titles.dashboard;
    if (this.pageTitle) this.pageTitle.textContent = current[this.currentLang][0];
    if (this.pageSubtitle) this.pageSubtitle.textContent = current[this.currentLang][1];
  },

  switchView(viewId) {
    this.currentView = viewId;

    this.views.forEach(section => section.classList.add("hidden"));
    document.getElementById(viewId)?.classList.remove("hidden");

    this.navItems.forEach(item => item.classList.remove("active"));
    document.querySelector(`.nav-item[data-view="${viewId}"]`)?.classList.add("active");

    this.highlightMobileNav(viewId);
    this.updatePageHeader();
  },

  renderMobileMenu() {
    if (!this.mobileNavGrid) return;

    const items = [
      { view: "dashboard", icon: "fa-gauge-high", label: this.t("navDashboard") },
      { view: "request-form", icon: "fa-file-lines", label: this.t("navRequestForm") },
      { view: "user-mgmt", icon: "fa-users", label: this.t("navUsers") },
      { view: "case-mgmt", icon: "fa-folder-tree", label: this.t("navCases") },
      { view: "application-mgmt", icon: "fa-file-signature", label: this.t("navApplications") },
      { view: "document-in", icon: "fa-file-arrow-up", label: this.t("navDocumentIn") },
      { view: "document-out", icon: "fa-file-arrow-down", label: this.t("navDocumentOut") },
      { view: "review-process", icon: "fa-list-check", label: this.t("navReview") },
      { view: "meeting-mgmt", icon: "fa-calendar-days", label: this.t("navMeeting") },
      { view: "statistics", icon: "fa-chart-column", label: this.t("navStatistics") },
      { view: "settings", icon: "fa-gear", label: this.t("navSettings") }
    ];

    this.mobileNavGrid.innerHTML = items.map(item => `
      <button
        class="mobile-nav-btn rounded-2xl bg-white/10 hover:bg-white/20 p-3 text-left transition border border-white/10"
        data-view="${item.view}">
        <div class="flex items-center gap-2">
          <i class="fa-solid ${item.icon}"></i>
          <span class="text-sm">${item.label}</span>
        </div>
      </button>
    `).join("") + `
      <button
        id="mobileLogoutBtn"
        class="rounded-2xl bg-red-500/20 hover:bg-red-500/30 p-3 text-left transition border border-white/10 col-span-2">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span class="text-sm">${this.t("logout")}</span>
        </div>
      </button>
    `;

    this.mobileNavGrid.querySelectorAll(".mobile-nav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.switchView(btn.dataset.view);
        this.closeMobileMenu();
      });
    });

    document.getElementById("mobileLogoutBtn")?.addEventListener("click", () => {
      this.logout();
    });

    this.highlightMobileNav(this.currentView);
  },

  highlightMobileNav(viewId) {
    document.querySelectorAll(".mobile-nav-btn").forEach(btn => {
      if (btn.dataset.view === viewId) {
        btn.classList.add("bg-white/20");
      } else {
        btn.classList.remove("bg-white/20");
      }
    });
  },

  toggleMobileMenu() {
    if (!this.mobileSidebar) return;
    this.mobileSidebar.classList.toggle("hidden");
  },

  closeMobileMenu() {
    if (!this.mobileSidebar) return;
    this.mobileSidebar.classList.add("hidden");
  },

  logout() {
    if (!confirm(this.t("confirmLogout"))) return;
    localStorage.removeItem("authUser");

    if (window.location.href.includes("index.html")) return;

    try {
      window.location.href = "index.html";
    } catch (e) {
      alert(this.t("noLoginPage"));
    }
  },

  resetAllData() {
    if (!confirm(this.t("confirmDeleteAll"))) return;

    localStorage.removeItem("eflow-data");
    this.data = {
      users: [],
      cases: [],
      applications: [],
      documentsIn: [],
      documentsOut: [],
      meetings: []
    };

    this.seedDemoData(true);
  },

  seedDemoData(showAlert = true) {
    this.data.users = [
      { id: 1, name: "Mean", email: "mean@serc.gov.kh", type: "SERC User", status: "Active" },
      { id: 2, name: "Hoy mean", email: "hoy.mean@company.com", type: "Company User", status: "Active" },
      { id: 3, name: "Serey both", email: "sereyboth@public.com", type: "Public User", status: "Inactive" },
      { id: 4, name: "Admin SERC", email: "admin@serc.gov.kh", type: "SERC User", status: "Active" }
    ];

    this.data.requestForms = [
      { id: "REQ-001", title: "General Request Form", name: "Mean", status: "Pending" },
      { id: "REQ-002", title: "Company Request Form", name: "Hoy mean", status: "Approved" },
      { id: "REQ-003", title: "Public Service Form", name: "Sery both", status: "In Review" }
    ];

    this.data.cases = [
      { id: "CASE-001", title: "License Review Case", type: "License", status: "In Progress" },
      { id: "CASE-002", title: "Certificate Verification", type: "Certificate", status: "Approved" },
      { id: "CASE-003", title: "Registration Update", type: "Registration", status: "Pending" }
    ];

    this.data.applications = [
      { id: "APP-001", service: "License Renewal", company: "ABC Co., Ltd", status: "Pending", payment: "Unpaid" },
      { id: "APP-002", service: "Certificate Request", company: "XYZ Group", status: "Approved", payment: "Paid" },
      { id: "APP-003", service: "Change Request", company: "Blue Tech", status: "In Review", payment: "Paid" },
      { id: "APP-004", service: "Registration", company: "Angkor Digital", status: "Returned", payment: "Unpaid" }
    ];

    this.data.documentsIn = [
      { id: 1, title: "Request Letter", company: "ABC Co., Ltd", type: "Incoming", files: 2, note: "Urgent" },
      { id: 2, title: "Supporting Document", company: "XYZ Group", type: "Reference", files: 1, note: "For review" }
    ];

    this.data.documentsOut = [
      { id: "OUT-001", title: "Approval Notice", recipient: "ABC Co., Ltd", status: "Sent" },
      { id: "OUT-002", title: "Correction Request", recipient: "Blue Tech", status: "Draft" }
    ];

    this.data.meetings = [
      { id: 1, title: "Board Meeting", date: "2026-03-25", room: "Room A", status: "Scheduled" },
      { id: 2, title: "Review Committee", date: "2026-03-26", room: "Room B", status: "Scheduled" }
    ];

    this.saveData();
    this.renderAll();

    if (showAlert) {
      alert(this.t("demoLoaded"));
    }
  },

  renderAll() {
    this.renderUsers();
    this.renderCases();
    this.renderApplications();
    this.renderDocumentIn();
    this.renderDocumentOut();
    this.renderReviewTable();
    this.renderMeetings();
    this.renderRequestForms();
    this.renderDashboard();
    this.renderStatistics();
    this.renderRecentActivities();
  },

  renderDashboard() {
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    const pendingApps = this.data.applications.filter(a => a.status === "Pending" || a.status === "In Review").length;
    const approvedApps = this.data.applications.filter(a => a.status === "Approved").length;
    const inProgressCases = this.data.cases.filter(c => c.status === "In Progress").length;

    setText("kpiUsers", this.data.users.length);
    setText("kpiCases", this.data.cases.length);
    setText("kpiApplications", this.data.applications.length);
    setText("kpiPending", pendingApps);
    setText("approvedCount", approvedApps);
    setText("inProgressCount", inProgressCases);
    setText("meetingCount", this.data.meetings.length);
    setText("activityCounter", this.getActivities().length);
  },

  renderRequestForms() {
    const table = document.getElementById("requestFormTable");
    if (!table) return;

    table.innerHTML = this.data.requestForms.map(item => `
    <tr class="border-b border-slate-100">
      <td class="px-4 py-3">${item.id}</td>
      <td class="px-4 py-3">${item.title}</td>
      <td class="px-4 py-3">${item.name}</td>
      <td class="px-4 py-3">${item.status}</td>
      <td class="px-4 py-3">
        <button onclick="app.deleteRequestForm('${item.id}')"
          class="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
          ${this.t("delete")}
        </button>
      </td>
    </tr>
  `).join("");
  },

  renderStatistics() {
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    setText("statActiveUsers", this.data.users.filter(u => u.status === "Active").length);
    setText("statApprovedApps", this.data.applications.filter(a => a.status === "Approved").length);
    setText("statPendingCases", this.data.cases.filter(c => c.status !== "Approved").length);
    setText("statDocuments", this.data.documentsIn.length + this.data.documentsOut.length);
  },

  getActivities() {
    const appActivities = this.data.applications.slice(0, 4).map(a => ({
      text: `${a.id} • ${a.company} • ${a.status}`
    }));

    const meetingActivities = this.data.meetings.slice(0, 2).map(m => ({
      text: `${m.title} • ${m.date}`
    }));

    return [...appActivities, ...meetingActivities];
  },

  renderRecentActivities() {
    const list = document.getElementById("recentActivityList");
    if (!list) return;

    const activities = this.getActivities();
    list.innerHTML = activities.map(item => `
      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
        ${item.text}
      </div>
    `).join("");
  },

  renderUsers() {
    const table = document.getElementById("usersTable");
    if (!table) return;

    const query = (document.getElementById("userSearch")?.value || "").toLowerCase();
    const typeFilter = document.getElementById("userTypeFilter")?.value || "all";

    const rows = this.data.users.filter(user => {
      const matchQuery =
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.type.toLowerCase().includes(query);

      const matchType = typeFilter === "all" || user.type === typeFilter;
      return matchQuery && matchType;
    });

    table.innerHTML = rows.map(user => `
      <tr class="border-b border-slate-100">
        <td class="px-4 py-3">${user.name}</td>
        <td class="px-4 py-3">${user.email}</td>
        <td class="px-4 py-3">${user.type}</td>
        <td class="px-4 py-3">${user.status}</td>
        <td class="px-4 py-3">
          <button onclick="app.deleteUser(${user.id})"
            class="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
            ${this.t("delete")}
          </button>
        </td>
      </tr>
    `).join("");
  },

  renderCases() {
    const table = document.getElementById("casesTable");
    if (!table) return;

    table.innerHTML = this.data.cases.map(item => `
      <tr class="border-b border-slate-100">
        <td class="px-4 py-3">${item.id}</td>
        <td class="px-4 py-3">${item.title}</td>
        <td class="px-4 py-3">${item.type}</td>
        <td class="px-4 py-3">${item.status}</td>
        <td class="px-4 py-3">
          <button onclick="app.deleteCase('${item.id}')"
            class="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
            ${this.t("delete")}
          </button>
        </td>
      </tr>
    `).join("");
  },

  renderApplications() {
    const table = document.getElementById("applicationsTable");
    if (!table) return;

    table.innerHTML = this.data.applications.map(item => `
      <tr class="border-b border-slate-100">
        <td class="px-4 py-3">${item.id}</td>
        <td class="px-4 py-3">${item.service}</td>
        <td class="px-4 py-3">${item.company}</td>
        <td class="px-4 py-3">${item.status}</td>
        <td class="px-4 py-3">${item.payment}</td>
        <td class="px-4 py-3">
          <button onclick="app.deleteApplication('${item.id}')"
            class="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
            ${this.t("delete")}
          </button>
        </td>
      </tr>
    `).join("");
  },

  renderDocumentIn() {
    const table = document.getElementById("documentInTable");
    if (!table) return;

    table.innerHTML = this.data.documentsIn.map((item, index) => `
      <tr class="border-b border-slate-100">
        <td class="px-4 py-3">${index + 1}</td>
        <td class="px-4 py-3">${item.title}</td>
        <td class="px-4 py-3">${item.company}</td>
        <td class="px-4 py-3">${item.type}</td>
        <td class="px-4 py-3">${item.files}</td>
        <td class="px-4 py-3">
          <button onclick="app.deleteDocumentIn(${item.id})"
            class="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
            ${this.t("delete")}
          </button>
        </td>
      </tr>
    `).join("");
  },

  renderDocumentOut() {
    const table = document.getElementById("documentsOutTable");
    if (!table) return;

    table.innerHTML = this.data.documentsOut.map(item => `
      <tr class="border-b border-slate-100">
        <td class="px-4 py-3">${item.id}</td>
        <td class="px-4 py-3">${item.title}</td>
        <td class="px-4 py-3">${item.recipient}</td>
        <td class="px-4 py-3">${item.status}</td>
        <td class="px-4 py-3">
          <button onclick="app.deleteDocumentOut('${item.id}')"
            class="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
            ${this.t("delete")}
          </button>
        </td>
      </tr>
    `).join("");
  },

  renderReviewTable() {
    const table = document.getElementById("reviewTable");
    if (!table) return;

    table.innerHTML = this.data.applications.map(item => `
      <tr class="border-b border-slate-100">
        <td class="px-4 py-3">${item.id}</td>
        <td class="px-4 py-3">${item.company}</td>
        <td class="px-4 py-3">${item.status}</td>
        <td class="px-4 py-3">
          <div class="flex flex-wrap gap-2">
            <button onclick="app.updateApplicationStatus('${item.id}','In Review')"
              class="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100">
              ${this.t("review")}
            </button>
            <button onclick="app.updateApplicationStatus('${item.id}','Approved')"
              class="px-3 py-1 rounded-lg bg-green-50 text-green-700 border border-green-200 hover:bg-green-100">
              ${this.t("approve")}
            </button>
            <button onclick="app.updateApplicationStatus('${item.id}','Returned')"
              class="px-3 py-1 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100">
              ${this.t("return")}
            </button>
            <button onclick="app.updateApplicationStatus('${item.id}','Rejected')"
              class="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
              ${this.t("reject")}
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  },

  renderMeetings() {
    const table = document.getElementById("meetingsTable");
    if (!table) return;

    table.innerHTML = this.data.meetings.map(item => `
      <tr class="border-b border-slate-100">
        <td class="px-4 py-3">${item.title}</td>
        <td class="px-4 py-3">${item.date}</td>
        <td class="px-4 py-3">${item.room || "Room A"}</td>
        <td class="px-4 py-3">${item.status}</td>
        <td class="px-4 py-3">
          <button onclick="app.deleteMeeting(${item.id})"
            class="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100">
            ${this.t("delete")}
          </button>
        </td>
      </tr>
    `).join("");
  },

  addDocumentIn() {
    const title = document.getElementById("docTitle")?.value.trim();
    const company = document.getElementById("submittedBy")?.value.trim();
    const type = document.getElementById("docCategory")?.value || "Incoming";
    const files = document.getElementById("docFiles")?.files.length || 0;
    const note = document.getElementById("docNote")?.value.trim() || "";

    if (!title || !company) {
      alert(this.t("fillRequired"));
      return;
    }

    this.data.documentsIn.unshift({
      id: Date.now(),
      title,
      company,
      type,
      files,
      note
    });

    this.saveData();
    this.renderAll();
    document.getElementById("documentInForm")?.reset();
    this.switchView("document-in");
  },

  addMeeting() {
    const title = document.getElementById("meetingTitleInput")?.value.trim();
    const date = document.getElementById("meetingDate")?.value;
    const room = document.getElementById("meetingRoom")?.value || "Room A";

    if (!title || !date) {
      alert(this.t("fillRequired"));
      return;
    }

    this.data.meetings.unshift({
      id: Date.now(),
      title,
      date,
      room,
      status: "Scheduled"
    });

    this.saveData();
    this.renderAll();
    document.getElementById("meetingForm")?.reset();
    this.switchView("meeting-mgmt");
  },

  openModal(type) {
    if (type === "user") {
      const name = prompt(this.currentLang === "km" ? "ឈ្មោះអ្នកប្រើប្រាស់" : "User name");
      if (!name) return;
      const email = prompt(this.currentLang === "km" ? "អ៊ីមែល" : "Email");
      if (!email) return;
      const userType = prompt("Type: SERC User / Company User / Public User", "SERC User") || "SERC User";

      this.data.users.unshift({
        id: Date.now(),
        name,
        email,
        type: userType,
        status: "Active"
      });

      this.saveData();
      this.renderAll();
      this.switchView("user-mgmt");
      return;
    }

    if (type === "request-form") {
      const title = prompt(this.currentLang === "km" ? "ចំណងជើងទម្រង់" : "Form title");
      if (!title) return;

      const name = prompt(this.currentLang === "km" ? "ឈ្មោះ" : "Name");
      if (!name) return;

      this.data.requestForms.unshift({
        id: `REQ-${Date.now()}`,
        title,
        name,
        status: "Pending"
      });

      this.saveData();
      this.renderAll();
      this.switchView("request-form");
      return;
    }

    if (type === "case") {
      const title = prompt(this.currentLang === "km" ? "ចំណងជើងករណី" : "Case title");
      if (!title) return;
      const typeName = prompt("Type", "License") || "License";

      this.data.cases.unshift({
        id: `CASE-${Date.now()}`,
        title,
        type: typeName,
        status: "Pending"
      });

      this.saveData();
      this.renderAll();
      this.switchView("case-mgmt");
      return;
    }

    if (type === "application") {
      const service = prompt(this.currentLang === "km" ? "សេវា" : "Service");
      if (!service) return;
      const company = prompt(this.currentLang === "km" ? "ក្រុមហ៊ុន" : "Company");
      if (!company) return;

      this.data.applications.unshift({
        id: `APP-${Date.now()}`,
        service,
        company,
        status: "Pending",
        payment: "Unpaid"
      });

      this.saveData();
      this.renderAll();
      this.switchView("application-mgmt");
      return;
    }

    if (type === "outgoing") {
      const title = prompt(this.currentLang === "km" ? "ចំណងជើងឯកសារ" : "Document title");
      if (!title) return;
      const recipient = prompt(this.currentLang === "km" ? "អ្នកទទួល" : "Recipient");
      if (!recipient) return;

      this.data.documentsOut.unshift({
        id: `OUT-${Date.now()}`,
        title,
        recipient,
        status: "Draft"
      });

      this.saveData();
      this.renderAll();
      this.switchView("document-out");
    }
  },

  closeModal() { },

  updateApplicationStatus(id, status) {
    const item = this.data.applications.find(a => a.id === id);
    if (!item) return;

    item.status = status;
    this.saveData();
    this.renderAll();
    this.switchView("review-process");
  },

  deleteUser(id) {
    this.data.users = this.data.users.filter(item => item.id !== id);
    this.saveData();
    this.renderAll();
  },

  deleteRequestForm(id) {
    this.data.requestForms = this.data.requestForms.filter(item => item.id !== id);
    this.saveData();
    this.renderAll();
  },

  deleteCase(id) {
    this.data.cases = this.data.cases.filter(item => item.id !== id);
    this.saveData();
    this.renderAll();
  },

  deleteApplication(id) {
    this.data.applications = this.data.applications.filter(item => item.id !== id);
    this.saveData();
    this.renderAll();
  },

  deleteDocumentIn(id) {
    this.data.documentsIn = this.data.documentsIn.filter(item => item.id !== id);
    this.saveData();
    this.renderAll();
  },

  deleteDocumentOut(id) {
    this.data.documentsOut = this.data.documentsOut.filter(item => item.id !== id);
    this.saveData();
    this.renderAll();
  },

  deleteMeeting(id) {
    this.data.meetings = this.data.meetings.filter(item => item.id !== id);
    this.saveData();
    this.renderAll();
  },

  globalSearch(query) {
    if (!query) return;

    const sections = [
      {
        view: "user-mgmt",
        found: this.data.users.some(u =>
          u.name.toLowerCase().includes(query) ||
          u.email.toLowerCase().includes(query)
        )
      },
      {
        view: "case-mgmt",
        found: this.data.cases.some(c =>
          c.id.toLowerCase().includes(query) ||
          c.title.toLowerCase().includes(query)
        )
      },
      {
        view: "application-mgmt",
        found: this.data.applications.some(a =>
          a.id.toLowerCase().includes(query) ||
          a.company.toLowerCase().includes(query) ||
          a.service.toLowerCase().includes(query)
        )
      },
      {
        view: "document-in",
        found: this.data.documentsIn.some(d =>
          d.title.toLowerCase().includes(query) ||
          d.company.toLowerCase().includes(query)
        )
      },
      {
        view: "document-out",
        found: this.data.documentsOut.some(d =>
          d.title.toLowerCase().includes(query) ||
          d.recipient.toLowerCase().includes(query)
        )
      },
      {
        view: "meeting-mgmt",
        found: this.data.meetings.some(m =>
          m.title.toLowerCase().includes(query)
        )
      }
    ];

    const match = sections.find(s => s.found);
    if (match) {
      this.switchView(match.view);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  app.init();
});