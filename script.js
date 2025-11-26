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
      edit: "Redigera",
      save: "Spara",
      cancel: "Avbryt",
    },
    emails: {
      title: "Dina GDPR-förfrågningar",
      instruction:
        "För vissa tjänster kan du ta bort dina uppgifter direkt med BankID. För andra öppnar du e-postmeddelandet, granskar innehållet och skickar det från din e-postklient.",
      sendTo: "Skicka till",
    },
    seo: {
      title: "Varför ska du ta bort dina uppgifter?",
      p1: "I Sverige är offentlighetsprincipen stark, vilket innebär att myndighetsdata ofta är tillgänglig för allmänheten. Detta utnyttjas av privata företag som Ratsit, MrKoll, Hitta.se och Eniro för att skapa sökbara databaser över hela befolkningen. För många kan detta kännas som ett intrång i privatlivet.",
      p2: "Genom att använda <strong>Hejda Data</strong> kan du enkelt utöva din rätt enligt GDPR (Dataskyddsförordningen) att bli bortglömd eller begränsa hur dina uppgifter visas. Att manuellt kontakta varje tjänst är tidskrävande och krångligt. Vi har samlat direktlänkar till BankID-borttagning och skapat färdiga e-postmallar med korrekta juridiska hänvisningar för att maximera chansen att dina uppgifter tas bort snabbt och effektivt.",
      p3: "Skydda din integritet, minska risken för ID-kapning och ta kontroll över ditt digitala fotavtryck idag. Tjänsten är helt gratis och vi sparar ingen information om dig.",
    },
    footer: {
      rights: "© 2025 Hejda Data. Alla rättigheter förbehållna.",
      disclaimer:
        "Denna tjänst tillhandahålls som den är. Vi garanterar inte svar eller borttagning från valda tjänster.",
      howItWorks: "Så fungerar det",
      faq: "Vanliga frågor",
      privacyPolicy: "Integritetspolicy",
      about: "Om oss",
      backToHome: "Tillbaka till startsidan",
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
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
    },
    emails: {
      title: "Your GDPR Requests",
      instruction:
        "For some services you can remove your data directly with BankID. For others, click to open the email, review the content and send it from your email client.",
      sendTo: "Send to",
    },
    seo: {
      title: "Why should you remove your data?",
      p1: "In Sweden, the principle of public access is strong, which means that government data is often available to the public. This is exploited by private companies like Ratsit, MrKoll, Hitta.se, and Eniro to create searchable databases of the entire population. For many, this can feel like an invasion of privacy.",
      p2: "By using <strong>Hejda Data</strong>, you can easily exercise your right under GDPR (General Data Protection Regulation) to be forgotten or restrict how your data is displayed. Contacting each service manually is time-consuming and complicated. We have collected direct links for BankID removal and created ready-made email templates with correct legal references to maximize the chance that your data is removed quickly and effectively.",
      p3: "Protect your privacy, reduce the risk of ID theft, and take control of your digital footprint today. The service is completely free and we save no information about you.",
    },
    footer: {
      rights: "© 2025 Hejda Data. All rights reserved.",
      disclaimer:
        "This service is provided as-is. We do not guarantee responses or removal from selected services.",
      howItWorks: "How it works",
      faq: "FAQ",
      privacyPolicy: "Privacy Policy",
      about: "About Us",
      backToHome: "Back to Home",
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
let currentLang = localStorage.getItem("language") || "sv";
let userData = null; // Store user data in memory: { name, email, pin }
let pendingAction = null; // Store pending action when modal is needed

// DOM Elements
const langSwitch = document.getElementById("langSwitch");
const scrollIndicator = document.getElementById("scrollIndicator");
const userForm = document.getElementById("userForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPIN = document.getElementById("userPIN");
const emailLinks = document.getElementById("emailLinks");

// Main container and modal
const landingPage = document.getElementById("landing");
const mainContainer = document.getElementById("mainContainer");
const userModal = document.getElementById("userModal");
const cancelModal = document.getElementById("cancelModal");
const saveUserInfo = document.getElementById("saveUserInfo");
const userInfoDisplay = document.getElementById("userInfoDisplay");
const editUserInfo = document.getElementById("editUserInfo");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const displayPIN = document.getElementById("displayPIN");

// Info Modal Elements
const infoModal = document.getElementById("infoModal");
const infoModalBody = document.getElementById("infoModalBody");

// Initialize
function init() {
  renderCarousel();
  setupEventListeners();
  updateLanguage();
  generateProviderLinks();
}

// Setup event listeners
function setupEventListeners() {
  if (langSwitch) {
    langSwitch.addEventListener("click", toggleLanguage);
  }

  // Landing page - scroll to main content via bouncing indicator
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      mainContainer.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Modal handling
  if (cancelModal) cancelModal.addEventListener("click", closeModal);
  if (saveUserInfo) saveUserInfo.addEventListener("click", handleSaveUserInfo);
  if (editUserInfo) editUserInfo.addEventListener("click", openModalForEdit);

  // Close modal on outside click
  if (userModal) {
    userModal.addEventListener("click", (e) => {
      if (e.target === userModal) {
        closeModal();
      }
    });
  }

  // Close info modal on outside click
  if (infoModal) {
    infoModal.addEventListener("click", (e) => {
      if (e.target === infoModal) {
        closeInfoModal();
      }
    });
  }

  // Form validation
  if (userForm) {
    userForm.addEventListener("input", validateForm);
  }

  // Scroll handling for header
  window.addEventListener("scroll", handleScroll);
  // Initial check
  handleScroll();
}

// Scroll handling function
function handleScroll() {
  const header = document.querySelector(".landing-header");
  const mainContainer = document.getElementById("mainContainer");

  if (header && mainContainer) {
    // Change style when the main container reaches the header
    const triggerPoint = mainContainer.offsetTop - header.offsetHeight;

    if (window.scrollY > triggerPoint) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
}

// Info Modal Functions
window.openInfoModal = function (pageId) {
  const contentSource = document.getElementById(`content-${pageId}`);
  if (contentSource && infoModalBody) {
    infoModalBody.innerHTML = contentSource.innerHTML;
    infoModal.classList.add("show");
    document.body.style.overflow = "hidden";

    // Update language visibility in the new content
    updateLanguage();

    // Re-initialize icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
};

window.closeInfoModal = function () {
  if (infoModal) {
    infoModal.classList.remove("show");
    document.body.style.overflow = "";
  }
};

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

// Modal functions
function openModal(action = null) {
  pendingAction = action;
  userModal.classList.add("show");
  document.body.style.overflow = "hidden";

  // Re-initialize icons in modal
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function closeModal() {
  userModal.classList.remove("show");
  document.body.style.overflow = "";
  pendingAction = null;
}

function openModalForEdit() {
  // Populate form with existing data
  if (userData) {
    userName.value = userData.name;
    userEmail.value = userData.email;
    userPIN.value = userData.pin || "";
    validateForm();
  }
  openModal();
}

function handleSaveUserInfo() {
  const name = userName.value.trim();
  const email = userEmail.value.trim();
  const pin = userPIN.value.trim();

  // Save user data
  userData = { name, email, pin };

  // Update display
  updateUserInfoDisplay();

  // Close modal
  closeModal();

  // If there was a pending action, execute it
  if (pendingAction) {
    executePendingAction();
  } else {
    // Regenerate all links with new user data
    generateProviderLinks();
  }
}

function updateUserInfoDisplay() {
  if (userData) {
    displayName.textContent = userData.name;
    displayEmail.textContent = userData.email;
    if (userData.pin) {
      displayPIN.textContent =
        currentLang === "sv"
          ? `Personnummer: ${userData.pin}`
          : `Personal ID: ${userData.pin}`;
      displayPIN.style.display = "block";
    } else {
      displayPIN.style.display = "none";
    }
    userInfoDisplay.style.display = "flex";

    // Re-initialize icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  } else {
    userInfoDisplay.style.display = "none";
  }
}

function executePendingAction() {
  if (pendingAction && pendingAction.type === "email") {
    // Generate email with user data
    const template = emailTemplates[currentLang];
    const subject = encodeURIComponent(template.subject);
    const body = encodeURIComponent(
      template.body(userData.name, userData.email, userData.pin)
    );
    const mailtoLink = `mailto:${pendingAction.provider.email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  }

  pendingAction = null;
}

// Validate form
function validateForm() {
  const isValid =
    userName.value.trim() &&
    userEmail.value.trim() &&
    userEmail.checkValidity();
  saveUserInfo.disabled = !isValid;
}

// Generate provider links
function generateProviderLinks() {
  if (!emailLinks) return;
  const template = emailTemplates[currentLang];

  emailLinks.innerHTML = providers
    .map((provider) => {
      const domain = provider.email.split("@")[1];
      const initial = provider.name.charAt(0).toUpperCase();
      const logoSrc = provider.logo || `https://logo.clearbit.com/${domain}`;

      // Check if provider uses direct link or email
      if (provider.removalMethod === "bankid") {
        return `
            <div class="email-link-item">
                <div class="provider-logo-wrapper">
                    <img src="${logoSrc}" 
                         alt="${provider.name}" 
                         class="provider-logo"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="provider-logo-fallback" style="display:none;">${initial}</div>
                </div>
                <div class="email-link-info">
                    <div class="email-link-name">${provider.name}</div>
                    <div class="email-link-desc">${
                      provider.desc[currentLang]
                    }</div>
                </div>
                <a href="${
                  provider.directLink
                }" target="_blank" rel="noopener noreferrer" class="email-link-btn bankid-btn">
                    <i data-lucide="shield-check"></i>
                    ${
                      currentLang === "sv"
                        ? "Ta bort med BankID"
                        : "Remove with BankID"
                    }
                </a>
            </div>
        `;
      } else if (provider.removalMethod === "webform") {
        return `
            <div class="email-link-item">
                <div class="provider-logo-wrapper">
                    <img src="${logoSrc}" 
                         alt="${provider.name}" 
                         class="provider-logo"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="provider-logo-fallback" style="display:none;">${initial}</div>
                </div>
                <div class="email-link-info">
                    <div class="email-link-name">${provider.name}</div>
                    <div class="email-link-desc">${
                      provider.desc[currentLang]
                    }</div>
                </div>
                <a href="${
                  provider.directLink
                }" target="_blank" rel="noopener noreferrer" class="email-link-btn webform-btn">
                    <i data-lucide="external-link"></i>
                    ${currentLang === "sv" ? "Öppna formulär" : "Open Form"}
                </a>
            </div>
        `;
      } else {
        // Email action - needs user data
        return `
            <div class="email-link-item">
                <div class="provider-logo-wrapper">
                    <img src="${logoSrc}" 
                         alt="${provider.name}" 
                         class="provider-logo"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="provider-logo-fallback" style="display:none;">${initial}</div>
                </div>
                <div class="email-link-info">
                    <div class="email-link-name">${provider.name}</div>
                    <div class="email-link-desc">${
                      provider.desc[currentLang]
                    }</div>
                </div>
                <button class="email-link-btn" data-provider-id="${
                  provider.id
                }">
                    <i data-lucide="mail"></i>
                    ${currentLang === "sv" ? "Skicka e-post" : "Send Email"}
                </button>
            </div>
        `;
      }
    })
    .join("");

  // Attach click handlers to email buttons
  document.querySelectorAll("[data-provider-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const providerId = e.currentTarget.getAttribute("data-provider-id");
      const provider = providers.find((p) => p.id === providerId);
      handleEmailAction(provider);
    });
  });

  // Initialize Lucide icons for dynamically added content
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Handle email action
function handleEmailAction(provider) {
  if (!userData) {
    // Show modal to collect user data
    pendingAction = { type: "email", provider };
    openModal(pendingAction);
  } else {
    // User data exists, generate email directly
    const template = emailTemplates[currentLang];
    const subject = encodeURIComponent(template.subject);
    const body = encodeURIComponent(
      template.body(userData.name, userData.email, userData.pin)
    );
    const mailtoLink = `mailto:${provider.email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  }
}

// Toggle language
function toggleLanguage() {
  currentLang = currentLang === "sv" ? "en" : "sv";
  localStorage.setItem("language", currentLang);
  updateLanguage();

  // Regenerate provider links with new language
  generateProviderLinks();

  // Update user info display if exists
  updateUserInfoDisplay();
}

// Update language
function updateLanguage() {
  document.documentElement.lang = currentLang;
  if (langSwitch) {
    langSwitch.innerHTML =
      currentLang === "sv"
        ? '<i data-lucide="globe"></i> English'
        : '<i data-lucide="globe"></i> Svenska';
  }

  // Update all translatable elements
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const keys = key.split(".");
    let value = translations[currentLang];

    for (const k of keys) {
      value = value && value[k];
    }

    if (value) {
      element.innerHTML = value;
    }
  });

  // Toggle content blocks for static pages
  document.querySelectorAll(".lang-sv").forEach((el) => {
    el.style.display = currentLang === "sv" ? "block" : "none";
  });
  document.querySelectorAll(".lang-en").forEach((el) => {
    el.style.display = currentLang === "en" ? "block" : "none";
  });

  // Update placeholders
  if (userName) {
    userName.placeholder =
      currentLang === "sv" ? "Ex: Anna Andersson" : "Ex: Anna Andersson";
  }
  if (userEmail) {
    userEmail.placeholder =
      currentLang === "sv" ? "Ex: anna@exempel.se" : "Ex: anna@example.com";
  }
  if (userPIN) {
    userPIN.placeholder = "Ex: YYYYMMDD-XXXX";
  }

  // Re-initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Start the app
init();
