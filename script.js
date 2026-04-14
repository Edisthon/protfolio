const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-experience": "Experience",
    "nav-contact": "Contact",
    "hero-name": "Himbaza Nshuti Edisthon",
    "hero-title": "Software Engineering Student @AUCA | A2SV Trainee | iOS & Backend Developer",
    "download-cv": "Download CV",
    "about-title": "About Me",
    "about-text": "Software Engineering student at AUCA and trainee at A2SV (Africa to Silicon Valley). I enjoy building real-world software solutions across mobile, backend, and database systems. I have experience with Java Spring Boot, Android development, SwiftUI, and FHIR-based healthcare interoperability systems.",
    "skills-title": "Skills",
    "skills-tech-title": "Technical Skills",
    "skills-prof-title": "Professional Skills",
    "skill-ps": "Problem Solving",
    "skill-ads": "Algorithms & Data Structures",
    "skill-tp": "Technical Presentations",
    "skill-tc": "Team Collaboration",
    "skill-dst": "System Design Thinking",
    "projects-title": "Projects",
    "project-natal-desc": "Android healthcare tracking system supporting ANC-PNC workflows using FHIR standards. Implements Patient, Observation, Encounter, Appointment, and CarePlan resources with offline data sync and provider alerts.",
    "project-localcart-desc": "SwiftUI marketplace application connecting local sellers and buyers. Includes authentication, product listing, search, cart management, and Firebase backend integration.",
    "experience-title": "Experience",
    "exp-a2sv-title": "A2SV Trainee",
    "exp-a2sv-desc": "Algorithms, Data Structures, and Problem Solving in Python",
    "exp-auca-title": "Java Programming Course Assistant",
    "exp-auca-desc": "Adventist University of Central Africa (AUCA)",
    "contact-title": "Get In Touch",
    "contact-text": "Always open to internships, collaborations, or opportunities."
  },
  fr: {
    "nav-home": "Accueil",
    "nav-about": "À Propos",
    "nav-skills": "Compétences",
    "nav-projects": "Projets",
    "nav-experience": "Expérience",
    "nav-contact": "Contact",
    "hero-name": "Himbaza Nshuti Edisthon",
    "hero-title": "Étudiant en Génie Logiciel @AUCA | Stagiaire A2SV | Développeur iOS & Backend",
    "download-cv": "Télécharger le CV",
    "about-title": "À Propos de Moi",
    "about-text": "Étudiant en génie logiciel à l'AUCA et stagiaire à A2SV (Africa to Silicon Valley). J'aime concevoir des solutions logicielles concrètes pour les systèmes mobiles, backend et de bases de données. J'ai de l'expérience avec Java Spring Boot, le développement Android, SwiftUI et les systèmes d'interopérabilité de santé basés sur FHIR.",
    "skills-title": "Compétences",
    "skills-tech-title": "Compétences Techniques",
    "skills-prof-title": "Compétences Professionnelles",
    "skill-ps": "Résolution de Problèmes",
    "skill-ads": "Algorithmes et Structures de Données",
    "skill-tp": "Présentations Techniques",
    "skill-tc": "Collaboration d'Équipe",
    "skill-dst": "Pensée de Conception de Système",
    "projects-title": "Projets",
    "project-natal-desc": "Système de suivi de santé Android prenant en charge les flux de travail ANC-PNC selon les normes FHIR. Implémente les ressources Patient, Observation, Rencontre, Rendez-vous et CarePlan avec synchronisation des données hors ligne et alertes pour les prestataires.",
    "project-localcart-desc": "Application de marché SwiftUI connectant vendeurs et acheteurs locaux. Comprend l'authentification, la liste des produits, la recherche, la gestion du panier et l'intégration du backend Firebase.",
    "experience-title": "Expérience",
    "exp-a2sv-title": "Stagiaire A2SV",
    "exp-a2sv-desc": "Algorithmes, Structures de Données et Résolution de Problèmes en Python",
    "exp-auca-title": "Assistant de Cours de Programmation Java",
    "exp-auca-desc": "Université Adventiste d'Afrique Centrale (AUCA)",
    "contact-title": "Contactez-moi",
    "contact-text": "Toujours ouvert aux stages, collaborations ou opportunités."
  }
};

function setLanguage(lang) {
  // Update UI buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update text content based on data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem('preferred-lang', lang);
}

// Language button event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

// Theme Switch Logic
const themeSwitch = document.querySelector('.theme-switch');
themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});

// Navigation Scroll Spy
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Initialize Settings on Load
document.addEventListener('DOMContentLoaded', () => {
  // Load Theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('dark', savedTheme === 'dark');

  // Load Language
  const savedLang = localStorage.getItem('preferred-lang') || 'en';
  setLanguage(savedLang);
});
