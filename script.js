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
      name: "Fullständigt namn *",
      email: "E-postadress *",
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
    },
    emails: {
      title: "Dina GDPR-förfrågningar",
      instruction:
        "Klicka på varje länk nedan för att öppna e-postmeddelandet. Granska innehållet och skicka det från din e-postklient.",
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
      name: "Full Name *",
      email: "Email Address *",
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
    },
    emails: {
      title: "Your GDPR Requests",
      instruction:
        "Click on each link below to open the email. Review the content and send it from your email client.",
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
    desc: {
      sv: "Personinformation och bakgrundskontroller",
      en: "Personal information and background checks",
    },
  },
  {
    id: "ratsit",
    name: "Ratsit",
    email: "kundservice@ratsit.se",
    desc: {
      sv: "Omfattande personuppgifter och ekonomisk information",
      en: "Comprehensive personal data and financial information",
    },
  },
  {
    id: "hitta",
    name: "Hitta",
    email: "kundservice@hitta.se",
    desc: {
      sv: "Person- och företagssökning, karttjänster",
      en: "Person and business search, map services",
    },
  },
  {
    id: "eniro",
    name: "Eniro",
    email: "uppdatera.eniro@eniro.com",
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
let currentStep = 0; // 0 = landing, 1-3 = wizard steps

// DOM Elements
const langSwitch = document.getElementById("langSwitch");
const startBtn = document.getElementById("startBtn");
const userForm = document.getElementById("userForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPIN = document.getElementById("userPIN");
const emailLinks = document.getElementById("emailLinks");

// Wizard navigation
const wizardTrack = document.querySelector(".wizard-track");
const landingPage = document.getElementById("landing");
const backToLanding = document.getElementById("backToLanding");
const nextToEmails = document.getElementById("nextToEmails");
const backToDetails = document.getElementById("backToDetails");
const startOver = document.getElementById("startOver");

// Initialize
function init() {
  renderProviders();
  renderCarousel();
  setupEventListeners();
  updateLanguage();
}

// Render providers (not displayed, just used for email generation)
function renderProviders() {
  // Providers are now handled internally, no UI needed
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

  // Landing page
  startBtn.addEventListener("click", () => navigateToStep(1));

  // Step 1 navigation
  backToLanding.addEventListener("click", () => navigateToStep(0));
  nextToEmails.addEventListener("click", generateEmails);

  // Step 2 navigation
  backToDetails.addEventListener("click", () => navigateToStep(1));
  startOver.addEventListener("click", resetWizard);

  // Form validation
  userForm.addEventListener("input", validateStep1);
}

// Navigate between steps
function navigateToStep(step) {
  currentStep = step;

  if (step === 0) {
    // Show landing page
    landingPage.style.display = "flex";
    wizardTrack.style.transform = "translateX(0)";
  } else {
    // Hide landing page and show wizard
    landingPage.style.display = "none";
    const offset = (step - 1) * -100;
    wizardTrack.style.transform = `translateX(${offset}vw)`;
  }

  // Re-initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Validate Step 1
function validateStep1() {
  const isValid =
    userName.value.trim() &&
    userEmail.value.trim() &&
    userEmail.checkValidity();
  nextToEmails.disabled = !isValid;
}

// Reset wizard
function resetWizard() {
  userName.value = "";
  userEmail.value = "";
  userPIN.value = "";

  emailLinks.innerHTML = "";

  navigateToStep(0);
}

// Generate emails
function generateEmails() {
  const name = userName.value.trim();
  const email = userEmail.value.trim();
  const pin = userPIN.value.trim();

  // Use all providers automatically
  const selectedProviders = providers;

  const template = emailTemplates[currentLang];

  emailLinks.innerHTML = selectedProviders
    .map((provider) => {
      const subject = encodeURIComponent(template.subject);
      const body = encodeURIComponent(template.body(name, email, pin));
      const mailtoLink = `mailto:${provider.email}?subject=${subject}&body=${body}`;

      const domain = provider.email.split("@")[1];
      const initial = provider.name.charAt(0).toUpperCase();
      const logoSrc = provider.logo || `https://logo.clearbit.com/${domain}`;
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
                <a href="${mailtoLink}" class="email-link-btn">
                    <i data-lucide="mail"></i>
                    ${currentLang === "sv" ? "Skicka e-post" : "Send Email"}
                </a>
            </div>
        `;
    })
    .join("");

  // Navigate to step 2
  navigateToStep(2);

  // Initialize Lucide icons for dynamically added content
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Toggle language
function toggleLanguage() {
  currentLang = currentLang === "sv" ? "en" : "sv";
  updateLanguage();

  // Re-render email links if they exist and we're on step 2
  if (emailLinks.innerHTML && currentStep === 2) {
    const name = userName.value.trim();
    const email = userEmail.value.trim();
    const pin = userPIN.value.trim();
    
    // Only regenerate if we have the data
    if (name && email) {
      const selectedProviders = providers;
      const template = emailTemplates[currentLang];

      emailLinks.innerHTML = selectedProviders
        .map((provider) => {
          const subject = encodeURIComponent(template.subject);
          const body = encodeURIComponent(template.body(name, email, pin));
          const mailtoLink = `mailto:${provider.email}?subject=${subject}&body=${body}`;

          const domain = provider.email.split('@')[1];
          const initial = provider.name.charAt(0).toUpperCase();
          const logoSrc = provider.logo || `https://logo.clearbit.com/${domain}`;
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
                    <div class="email-link-desc">${provider.desc[currentLang]}</div>
                </div>
                <a href="${mailtoLink}" class="email-link-btn">
                    <i data-lucide="mail"></i>
                    ${currentLang === "sv" ? "Skicka e-post" : "Send Email"}
                </a>
            </div>
        `;
        })
        .join("");

      // Re-initialize Lucide icons for dynamically added content
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    }
  }
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
      element.textContent = value;
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
