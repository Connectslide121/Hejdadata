// Multi-language support
const translations = {
  sv: {
    hero: {
      title: "Ta kontroll över din personliga information",
      subtitle:
        "Begär enkelt borttagning av dina uppgifter från svenska katalogtjänster enligt GDPR. Helt gratis, ingen registrering, inga mellansteg.",
    },
    privacy: {
      title: "Din integritet först:",
      message:
        "All information hanteras endast i din webbläsare. Inget sparas eller skickas till våra servrar.",
    },
    howto: {
      title: "Så fungerar det",
      step1: {
        title: "Fyll i dina uppgifter",
        desc: "Ange namn och e-post. Personnummer är valfritt men kan påskynda processen.",
      },
      step2: {
        title: "Skicka förfrågningar",
        desc: "Klicka för att öppna varje e-postmeddelande i din e-postklient och skicka det själv.",
      },
    },
    form: {
      title: "Dina uppgifter",
      description:
        "Fyll i dina uppgifter för att skapa personliga GDPR-förfrågningar",
      name: 'Fullständigt namn <span class="required-asterisk">*</span>',
      email: 'E-postadress <span class="required-asterisk">*</span>',
      pin: "Personnummer (valfritt)",
      pinHelp: "Kan underlätta identifiering men är inte obligatoriskt",
    },
    providers: {
      title: "Välj katalogtjänster",
      description: "Välj vilka tjänster du vill begära borttagning från",
      selectAll: "Välj alla",
    },
    actions: {
      start: "Kom igång",
      next: "Nästa steg",
      back: "Tillbaka",
      generate: "Generera förfrågningar",
      startOver: "Börja om",
      cancel: "Avbryt",
      save: "Spara och fortsätt",
      edit: "Redigera",
    },
    userInfo: {
      savedAs: "Sparade uppgifter:",
    },
    emails: {
      title: "Dina GDPR-förfrågningar",
      instruction:
        "För vissa tjänster kan du ta bort dina uppgifter direkt med BankID. För andra öppnar du e-postmeddelandet, granskar innehållet och skickar det från din e-postklient.",
      sendTo: "Skicka till",
    },
    footer: {
      rights: "© 2025 Hejda Data. Alla rättigheter förbehållna.",
      disclaimer:
        "Denna tjänst tillhandahålls som den är. Vi garanterar inte svar eller borttagning från valda tjänster.",
    },
  },
  en: {
    hero: {
      title: "Take Control of Your Personal Information",
      subtitle:
        "Easily request removal of your data from Swedish directory services according to GDPR. Completely free, no registration, no intermediaries.",
    },
    privacy: {
      title: "Your Privacy First:",
      message:
        "All information is handled only in your browser. Nothing is saved or sent to our servers.",
    },
    howto: {
      title: "How It Works",
      step1: {
        title: "Enter Your Details",
        desc: "Provide your name and email. Personal identity number is optional but may speed up the process.",
      },
      step2: {
        title: "Send Requests",
        desc: "Click to open each email in your email client and send it yourself.",
      },
    },
    form: {
      title: "Your Information",
      description: "Fill in your details to create personalized GDPR requests",
      name: 'Full Name <span class="required-asterisk">*</span>',
      email: 'Email Address <span class="required-asterisk">*</span>',
      pin: "Personal Identity Number (optional)",
      pinHelp: "May help with identification but is not required",
    },
    providers: {
      title: "Select Directory Services",
      description: "Choose which services you want to request removal from",
      selectAll: "Select All",
    },
    actions: {
      start: "Get Started",
      next: "Next Step",
      back: "Back",
      generate: "Generate Requests",
      startOver: "Start Over",
      cancel: "Cancel",
      save: "Save and Continue",
      edit: "Edit",
    },
    userInfo: {
      savedAs: "Saved information:",
    },
    emails: {
      title: "Your GDPR Requests",
      instruction:
        "For some services you can remove your data directly with BankID. For others, click to open the email, review the content and send it from your email client.",
      sendTo: "Send to",
    },
    footer: {
      rights: "© 2025 Hejda Data. All rights reserved.",
      disclaimer:
        "This service is provided as-is. We do not guarantee responses or removal from selected services.",
    },
  },
};

// Swedish directory providers
const providers = [
  {
    id: "mrkoll",
    name: "MrKoll",
    email: "support@mrkoll.se",
    logo: "assets/MrKoll.png",
    removalMethod: "bankid",
    directLink: "https://mrkoll.se/om/andra-uppgifter",
    desc: {
      sv: "Personinformation och bakgrundskontroller",
      en: "Personal information and background checks",
    },
  },
  {
    id: "ratsit",
    name: "Ratsit",
    email: "kundservice@ratsit.se",
    removalMethod: "bankid",
    directLink: "https://www.ratsit.se/redigera/dolj",
    desc: {
      sv: "Omfattande personuppgifter och ekonomisk information",
      en: "Comprehensive personal data and financial information",
    },
  },
  {
    id: "hitta",
    name: "Hitta",
    email: "kundservice@hitta.se",
    removalMethod: "bankid",
    directLink: "https://www.hitta.se/kontakta-oss/ta-bort-kontaktsida",
    desc: {
      sv: "Person- och företagssökning, karttjänster",
      en: "Person and business search, map services",
    },
  },
  {
    id: "eniro",
    name: "Eniro",
    email: "uppdatera.eniro@eniro.com",
    removalMethod: "bankid",
    directLink: "https://uppdatera.eniro.se/person",
    desc: {
      sv: "Katalogtjänst med person- och företagsinformation",
      en: "Directory service with personal and business information",
    },
  },
  {
    id: "merinfo",
    name: "Merinfo",
    email: "support@merinfo.se",
    desc: {
      sv: "Personinformation och företagsuppgifter",
      en: "Personal and business information",
    },
  },
  {
    id: "upplysning",
    name: "Upplysning",
    email: "kundservice@upplysning.se",
    logo: "assets/upplysning.png",
    removalMethod: "webform",
    directLink: "https://www.upplysning.se/kontakta-oss",
    desc: {
      sv: "Telefonkatalog och adressuppgifter",
      en: "Phone directory and address information",
    },
  },
  {
    id: "birthday",
    name: "Birthday",
    email: "info@birthday.se",
    logo: "assets/birthday.png",
    desc: {
      sv: "Födelsedagspåminnelser och personinformation",
      en: "Birthday reminders and personal information",
    },
  },
  {
    id: "biluppgifter",
    name: "Biluppgifter",
    email: "info@biluppgifter.se",
    desc: {
      sv: "Fordonsinformation och registeruppgifter",
      en: "Vehicle information and registry data",
    },
  },
  {
    id: "lexbase",
    name: "Lexbase",
    email: "info@lexbase.se",
    removalMethod: "webform",
    directLink: "https://www.lexbase.se/kontakta-oss",
    desc: {
      sv: "Juridisk information och företagsdata",
      en: "Legal information and company data",
    },
  },
  {
    id: "krimfup",
    name: "Krimfup",
    email: "support@krimfup.se",
    logo: "assets/krimfup.png",
    desc: {
      sv: "Personuppgifter och brottsregister",
      en: "Personal data and criminal records",
    },
  },
];

// Email templates
const emailTemplates = {
  sv: {
    subject: "GDPR-begäran om borttagning/begränsning av personuppgifter",
    body: (name, email, pin) => `Hej,

Jag vill härmed, med stöd av dataskyddsförordningen (GDPR), begära att ni tar bort eller begränsar behandlingen av mina personuppgifter från era register och tjänster.

Mina uppgifter:
Namn: ${name}
E-post: ${email}${pin ? `\nPersonnummer: ${pin}` : ""}

Enligt artikel 17 i GDPR har jag rätt att få mina personuppgifter raderade ("rätten att bli bortglömd"). Alternativt begär jag enligt artikel 18 att behandlingen av mina personuppgifter begränsas.

Jag begär även att ni bekräftar när mina uppgifter har tagits bort eller begränsats.

Jag förväntar mig svar inom en månad enligt GDPR:s tidsramar.

Med vänliga hälsningar,
${name}`,
  },
  en: {
    subject: "GDPR Request for Deletion/Restriction of Personal Data",
    body: (name, email, pin) => `Hello,

I hereby request, in accordance with the General Data Protection Regulation (GDPR), that you delete or restrict the processing of my personal data from your registers and services.

My information:
Name: ${name}
Email: ${email}${pin ? `\nPersonal Identity Number: ${pin}` : ""}

According to Article 17 of the GDPR, I have the right to have my personal data erased ("right to be forgotten"). Alternatively, I request under Article 18 that the processing of my personal data be restricted.

I also request that you confirm when my data has been deleted or restricted.

I expect a response within one month as per GDPR timelines.

Best regards,
${name}`,
  },
};

// State
let currentLang = "sv";
let userData = {
  name: "",
  email: "",
  pin: "",
}; // Store user data in memory

// DOM Elements
const langSwitch = document.getElementById("langSwitch");
const startBtn = document.getElementById("startBtn");
const userForm = document.getElementById("userForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPIN = document.getElementById("userPIN");
const providersList = document.getElementById("providersList");
const userInfoModal = document.getElementById("userInfoModal");
const cancelModal = document.getElementById("cancelModal");
const saveUserInfo = document.getElementById("saveUserInfo");
const editUserInfo = document.getElementById("editUserInfo");
const userInfoDisplay = document.getElementById("userInfoDisplay");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");

// Landing page elements
const landingPage = document.getElementById("landing");
const mainContent = document.getElementById("mainContent");

// Pending action for modal
let pendingAction = null;

// Initialize
function init() {
  renderProviders();
  renderCarousel();
  setupEventListeners();
  updateLanguage();
}

// Render providers (not displayed, just used for email generation)
function renderProviders() {
  // Render all providers in the main view
  providersList.innerHTML = providers
    .map((provider) => {
      const domain = provider.email.split("@")[1];
      const initial = provider.name.charAt(0).toUpperCase();
      const logoSrc = provider.logo || `https://logo.clearbit.com/${domain}`;

      // Determine button based on removal method
      let actionButton = "";
      if (provider.removalMethod === "bankid") {
        actionButton = `
          <a href="${provider.directLink}" target="_blank" rel="noopener noreferrer" class="provider-action-btn bankid-btn">
            <i data-lucide="shield-check"></i>
            ${currentLang === "sv" ? "Ta bort med BankID" : "Remove with BankID"}
          </a>
        `;
      } else if (provider.removalMethod === "webform") {
        actionButton = `
          <a href="${provider.directLink}" target="_blank" rel="noopener noreferrer" class="provider-action-btn webform-btn">
            <i data-lucide="external-link"></i>
            ${currentLang === "sv" ? "Öppna formulär" : "Open Form"}
          </a>
        `;
      } else {
        actionButton = `
          <button class="provider-action-btn email-btn" data-provider-id="${provider.id}">
            <i data-lucide="mail"></i>
            ${currentLang === "sv" ? "Skicka e-post" : "Send Email"}
          </button>
        `;
      }

      return `
        <div class="provider-item">
          <div class="provider-logo-wrapper">
            <img src="${logoSrc}" 
                 alt="${provider.name}" 
                 class="provider-logo"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="provider-logo-fallback" style="display:none;">${initial}</div>
          </div>
          <div class="provider-info">
            <div class="provider-name">${provider.name}</div>
            <div class="provider-desc">${provider.desc[currentLang]}</div>
          </div>
          ${actionButton}
        </div>
      `;
    })
    .join("");

  // Initialize Lucide icons for dynamically added content
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Add event listeners to email buttons
  document.querySelectorAll(".email-btn").forEach((btn) => {
    btn.addEventListener("click", handleEmailButtonClick);
  });
}

// Render carousel on landing page
function renderCarousel() {
  const carouselTrack = document.getElementById("carouselTrack");
  if (!carouselTrack) return;

  // Duplicate providers array twice for seamless loop
  const duplicatedProviders = [...providers, ...providers];

  carouselTrack.innerHTML = duplicatedProviders
    .map((provider) => {
      const domain = provider.email.split("@")[1];
      const initial = provider.name.charAt(0).toUpperCase();
      const logoSrc = provider.logo || `https://logo.clearbit.com/${domain}`;

      return `
      <div class="carousel-logo" title="${provider.name}">
        <img src="${logoSrc}" 
             alt="${provider.name}" 
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="carousel-logo-fallback" style="display:none;">${initial}</div>
      </div>
    `;
    })
    .join("");
}

// Setup event listeners
function setupEventListeners() {
  langSwitch.addEventListener("click", toggleLanguage);

  // Landing page - scroll to main content
  startBtn.addEventListener("click", () => {
    mainContent.scrollIntoView({ behavior: "smooth" });
  });

  // Modal controls
  cancelModal.addEventListener("click", closeModal);
  saveUserInfo.addEventListener("click", saveUserData);
  editUserInfo.addEventListener("click", openModalForEdit);

  // Form validation
  userForm.addEventListener("input", validateForm);

  // Close modal when clicking outside
  userInfoModal.addEventListener("click", (e) => {
    if (e.target === userInfoModal) {
      closeModal();
    }
  });
}

// Handle email button click
function handleEmailButtonClick(e) {
  const providerId = e.currentTarget.getAttribute("data-provider-id");
  
  // Check if user data exists
  if (userData.name && userData.email) {
    // User data exists, generate and open email directly
    openEmailForProvider(providerId);
  } else {
    // No user data, show modal
    pendingAction = { type: "email", providerId };
    openModal();
  }
}

// Open modal
function openModal() {
  userInfoModal.style.display = "flex";
  // Re-initialize icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Close modal
function closeModal() {
  userInfoModal.style.display = "none";
  pendingAction = null;
}

// Open modal for editing
function openModalForEdit() {
  // Populate form with existing data
  userName.value = userData.name;
  userEmail.value = userData.email;
  userPIN.value = userData.pin;
  
  pendingAction = { type: "edit" };
  openModal();
  validateForm();
}

// Validate form
function validateForm() {
  const isValid =
    userName.value.trim() &&
    userEmail.value.trim() &&
    userEmail.checkValidity();
  saveUserInfo.disabled = !isValid;
}

// Save user data
function saveUserData() {
  userData.name = userName.value.trim();
  userData.email = userEmail.value.trim();
  userData.pin = userPIN.value.trim();

  // Update display
  updateUserInfoDisplay();

  // If there's a pending action, execute it
  if (pendingAction && pendingAction.type === "email") {
    openEmailForProvider(pendingAction.providerId);
  }

  closeModal();
}

// Update user info display
function updateUserInfoDisplay() {
  if (userData.name && userData.email) {
    displayName.textContent = userData.name;
    displayEmail.textContent = userData.email;
    userInfoDisplay.style.display = "flex";
    
    // Re-initialize icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  } else {
    userInfoDisplay.style.display = "none";
  }
}

// Open email for specific provider
function openEmailForProvider(providerId) {
  const provider = providers.find((p) => p.id === providerId);
  if (!provider) return;

  const template = emailTemplates[currentLang];
  const subject = encodeURIComponent(template.subject);
  const body = encodeURIComponent(
    template.body(userData.name, userData.email, userData.pin)
  );
  const mailtoLink = `mailto:${provider.email}?subject=${subject}&body=${body}`;

  // Open mailto link
  window.location.href = mailtoLink;
}

// Toggle language
function toggleLanguage() {
  currentLang = currentLang === "sv" ? "en" : "sv";
  updateLanguage();
  
  // Re-render providers with new language
  renderProviders();
}

// Update language
function updateLanguage() {
  document.documentElement.lang = currentLang;
  langSwitch.innerHTML =
    currentLang === "sv"
      ? '<i data-lucide="globe"></i> English'
      : '<i data-lucide="globe"></i> Svenska';

  // Update all translatable elements
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const keys = key.split(".");
    let value = translations[currentLang];

    for (const k of keys) {
      value = value[k];
    }

    if (value) {
      element.innerHTML = value;
    }
  });

  // Update placeholders
  userName.placeholder =
    currentLang === "sv" ? "Ex: Anna Andersson" : "Ex: Anna Andersson";
  userEmail.placeholder =
    currentLang === "sv" ? "Ex: anna@exempel.se" : "Ex: anna@example.com";
  userPIN.placeholder = "Ex: YYYYMMDD-XXXX";

  // Re-initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Start the app
init();
