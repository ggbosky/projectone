export type Locale = "cs" | "en"

const cs = {
  meta: {
    title: "Project One — Moderní prémiové weby",
    description:
      "Project One navrhuje a vyvíjí moderní, rychlé a prémiové weby, e-shopy a digitální produkty, které vydělávají.",
  },
  nav: {
    items: [
      { label: "Služby", href: "#sluzby" },
      { label: "Práce", href: "#prace" },
      { label: "Proces", href: "#proces" },
      { label: "Ceník", href: "#cenik" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Začít projekt",
    menu: "Otevřít menu",
  },
  hero: {
    badge: "Přijímáme nové projekty",
    line1: "Weby, které",
    line2: "prodávají",
    line2Accent: "za vás.",
    sub: "Jsme Project One — malý tým designérů a vývojářů. Stavíme moderní, rychlé a prémiové weby, které posunou vaši značku o level výš.",
    primary: "Nezávazná konzultace",
    secondary: "Naše práce",
    stats: [
      { value: "100", label: "Lighthouse skóre" },
      { value: "< 1 s", label: "načtení stránky" },
      { value: "4–8", label: "týdnů do spuštění" },
    ],
  },
  stack: {
    title: "Technologie, na kterých stavíme",
  },
  services: {
    eyebrow: "Služby",
    title: "Vše pro web, který dává smysl",
    sub: "Od strategie a designu až po vývoj, spuštění a dlouhodobou péči. Jeden tým, žádné kompromisy.",
    design: {
      title: "Webdesign & UI/UX",
      text: "Unikátní design na míru vaší značce. Žádné šablony — každý pixel má svůj důvod.",
    },
    dev: {
      title: "Vývoj na míru",
      text: "Next.js, React a headless CMS. Čistý kód, který se snadno rozšiřuje.",
    },
    speed: {
      title: "Bleskový výkon",
      text: "Optimalizujeme do posledního milisekundu. Rychlý web = lepší SEO i konverze.",
      label: "výkon",
    },
    shop: {
      title: "E-shopy",
      text: "Shopify i řešení na míru s pohodlnou správou a platbami.",
    },
    seo: {
      title: "SEO & analytika",
      text: "Technické SEO, měření a data, podle kterých web roste.",
    },
    motion: {
      title: "Animace & interakce",
      text: "Jemný motion design, který působí prémiově a vede pozornost.",
    },
    care: {
      title: "Péče & podpora",
      text: "Hosting, zálohy, aktualizace a monitoring. Váš web je v dobrých rukou 24/7.",
      status: "Vše běží",
    },
  },
  work: {
    eyebrow: "Práce",
    title: "Vybrané projekty",
    sub: "Ukázka toho, na čem pracujeme. Každý projekt začíná pochopením byznysu, ne výběrem barev.",
    view: "Zobrazit projekt",
    items: [
      { name: "Atelier Nord", type: "Web · Branding", year: "2026", result: "+180 % poptávek" },
      { name: "Kavárna Lumen", type: "E-shop · Shopify", year: "2026", result: "2× vyšší konverze" },
      { name: "Vertex Finance", type: "Web aplikace", year: "2025", result: "0,8 s načtení" },
      { name: "Studio Forma", type: "Portfolio · Motion", year: "2025", result: "Awwwards nominace" },
    ],
  },
  process: {
    eyebrow: "Proces",
    title: "Jasný postup, žádná překvapení",
    sub: "Víte, co se děje v každé fázi. Průběžně ukazujeme výsledky a ladíme je s vámi.",
    steps: [
      {
        title: "Konzultace",
        text: "Poznáme váš byznys, cíle a zákazníky. Navrhneme strategii a rozsah.",
        time: "1 týden",
      },
      {
        title: "Design",
        text: "Wireframy, vizuální styl a interaktivní prototyp ve Figmě ke schválení.",
        time: "1–3 týdny",
      },
      {
        title: "Vývoj",
        text: "Pixel-perfect kód, animace, CMS a napojení na vaše nástroje.",
        time: "2–4 týdny",
      },
      {
        title: "Spuštění & péče",
        text: "Testování, spuštění, zaškolení a dlouhodobá podpora a rozvoj.",
        time: "průběžně",
      },
    ],
  },
  pricing: {
    eyebrow: "Ceník",
    title: "Transparentní balíčky",
    sub: "Orientační ceny bez DPH. Přesnou nabídku připravíme po krátké konzultaci zdarma.",
    tabs: { web: "Web", care: "Péče" },
    from: "od",
    perMonth: "/ měsíc",
    popular: "Nejoblíbenější",
    custom: "Individuálně",
    currency: "Kč",
    web: [
      {
        name: "Start",
        description: "Pro nové značky a jednoduché prezentace",
        price: 24900,
        features: ["One-page nebo až 5 podstránek", "Design na míru", "Responzivní pro mobily", "Základní SEO", "Kontaktní formulář"],
        cta: "Chci Start",
      },
      {
        name: "Business",
        description: "Pro firmy, které chtějí růst online",
        price: 59900,
        features: [
          "Až 15 podstránek",
          "UI/UX design + prototyp",
          "CMS pro snadnou správu",
          "Animace & interakce",
          "Pokročilé SEO a analytika",
          "Vícejazyčnost",
        ],
        cta: "Chci Business",
        highlighted: true,
      },
      {
        name: "Premium",
        description: "E-shopy, aplikace a projekty na míru",
        price: null,
        features: [
          "Neomezený rozsah",
          "E-shop nebo web aplikace",
          "Integrace (ERP, CRM, platby)",
          "Brand & motion design",
          "Dedikovaný projektový manažer",
          "Prioritní podpora",
        ],
        cta: "Domluvit se",
      },
    ],
    care: [
      {
        name: "Basic",
        description: "Bezstarostný provoz webu",
        price: 990,
        features: ["Hosting & SSL", "Denní zálohy", "Bezpečnostní aktualizace", "Monitoring dostupnosti"],
        cta: "Vybrat Basic",
      },
      {
        name: "Growth",
        description: "Web, který se neustále zlepšuje",
        price: 4900,
        features: [
          "Vše z Basic",
          "4 hodiny úprav měsíčně",
          "Měsíční report a analytika",
          "Optimalizace rychlosti",
          "Prioritní e-mail podpora",
        ],
        cta: "Vybrat Growth",
        highlighted: true,
      },
      {
        name: "Partner",
        description: "Váš externí webový tým",
        price: 14900,
        features: [
          "Vše z Growth",
          "12 hodin vývoje měsíčně",
          "A/B testy a CRO",
          "Konzultace strategie",
          "Reakce do 4 hodin",
        ],
        cta: "Vybrat Partner",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Časté dotazy",
    items: [
      {
        q: "Jak dlouho trvá vytvoření webu?",
        a: "Běžný firemní web spouštíme za 4–8 týdnů. Jednodušší prezentace zvládneme i rychleji, větší e-shopy a aplikace trvají déle — přesný harmonogram dostanete hned v nabídce.",
      },
      {
        q: "Budu si moct web sám upravovat?",
        a: "Ano. Napojíme web na přehledný CMS, ve kterém snadno změníte texty, obrázky i přidáte nové stránky. Součástí předání je i krátké zaškolení.",
      },
      {
        q: "Používáte šablony?",
        a: "Ne. Každý web navrhujeme od nuly na míru vaší značce a cílům. Díky tomu je rychlejší, unikátní a lépe konvertuje.",
      },
      {
        q: "Co když už web mám?",
        a: "Rádi uděláme audit a navrhneme redesign nebo postupné vylepšení. Často stačí upravit klíčové stránky a výkon, aby web začal přinášet výsledky.",
      },
      {
        q: "Jak probíhá platba?",
        a: "Standardně 40 % záloha před začátkem, 30 % po schválení designu a 30 % při spuštění. U péče se platí měsíčně, bez dlouhých závazků.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Pojďme vytvořit něco",
    titleAccent: "výjimečného.",
    sub: "Napište nám pár vět o projektu. Ozveme se do 24 hodin s dalším postupem a návrhem termínu konzultace zdarma.",
    name: "Jméno",
    email: "E-mail",
    company: "Firma (nepovinné)",
    type: "O co máte zájem?",
    types: ["Nový web", "Redesign", "E-shop", "Web aplikace", "Péče o web"],
    budget: "Orientační rozpočet",
    budgets: ["do 30 tis.", "30–80 tis.", "80–150 tis.", "150 tis. +"],
    message: "Řekněte nám o projektu",
    send: "Odeslat poptávku",
    sentTitle: "Díky, máme to!",
    sentText: "Otevřeli jsme vašeho e-mailového klienta s připravenou zprávou. Pokud se neotevřel, napište nám přímo na",
    again: "Poslat další",
    direct: "Nebo nám napište přímo",
    response: "Odpovídáme do 24 hodin",
    subject: "Poptávka z webu",
  },
  footer: {
    tagline: "Moderní, prémiové weby pro značky, které chtějí růst.",
    available: "Volné kapacity",
    rights: "Všechna práva vyhrazena.",
    navTitle: "Navigace",
    contactTitle: "Kontakt",
    socialTitle: "Sociální sítě",
    backTop: "Nahoru",
  },
}

export type Dictionary = typeof cs

const en: Dictionary = {
  meta: {
    title: "Project One — Modern premium websites",
    description:
      "Project One designs and builds modern, fast and premium websites, e-commerce and digital products that actually sell.",
  },
  nav: {
    items: [
      { label: "Services", href: "#sluzby" },
      { label: "Work", href: "#prace" },
      { label: "Process", href: "#proces" },
      { label: "Pricing", href: "#cenik" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Start a project",
    menu: "Open menu",
  },
  hero: {
    badge: "Now booking new projects",
    line1: "Websites that",
    line2: "sell",
    line2Accent: "for you.",
    sub: "We are Project One — a small team of designers and developers. We build modern, fast and premium websites that take your brand to the next level.",
    primary: "Free consultation",
    secondary: "Our work",
    stats: [
      { value: "100", label: "Lighthouse score" },
      { value: "< 1 s", label: "page load" },
      { value: "4–8", label: "weeks to launch" },
    ],
  },
  stack: {
    title: "The technology we build with",
  },
  services: {
    eyebrow: "Services",
    title: "Everything a great website needs",
    sub: "From strategy and design to development, launch and long-term care. One team, zero compromises.",
    design: {
      title: "Web design & UI/UX",
      text: "Unique design tailored to your brand. No templates — every pixel has a purpose.",
    },
    dev: {
      title: "Custom development",
      text: "Next.js, React and headless CMS. Clean code that scales with you.",
    },
    speed: {
      title: "Blazing performance",
      text: "Optimised to the last millisecond. A fast site means better SEO and conversions.",
      label: "performance",
    },
    shop: {
      title: "E-commerce",
      text: "Shopify or fully custom stores with easy management and payments.",
    },
    seo: {
      title: "SEO & analytics",
      text: "Technical SEO, tracking and the data that makes your site grow.",
    },
    motion: {
      title: "Motion & interaction",
      text: "Subtle motion design that feels premium and guides attention.",
    },
    care: {
      title: "Care & support",
      text: "Hosting, backups, updates and monitoring. Your site is in good hands 24/7.",
      status: "All systems go",
    },
  },
  work: {
    eyebrow: "Work",
    title: "Selected projects",
    sub: "A glimpse of what we work on. Every project starts with understanding the business, not picking colours.",
    view: "View project",
    items: [
      { name: "Atelier Nord", type: "Web · Branding", year: "2026", result: "+180% leads" },
      { name: "Kavárna Lumen", type: "E-shop · Shopify", year: "2026", result: "2× conversion rate" },
      { name: "Vertex Finance", type: "Web app", year: "2025", result: "0.8 s load time" },
      { name: "Studio Forma", type: "Portfolio · Motion", year: "2025", result: "Awwwards nominee" },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "A clear path, no surprises",
    sub: "You always know what is happening. We share progress continuously and refine it together with you.",
    steps: [
      {
        title: "Discovery",
        text: "We get to know your business, goals and customers, then define strategy and scope.",
        time: "1 week",
      },
      {
        title: "Design",
        text: "Wireframes, visual direction and an interactive Figma prototype for approval.",
        time: "1–3 weeks",
      },
      {
        title: "Development",
        text: "Pixel-perfect code, animations, CMS and integrations with your tools.",
        time: "2–4 weeks",
      },
      {
        title: "Launch & care",
        text: "Testing, launch, onboarding and long-term support and growth.",
        time: "ongoing",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Transparent packages",
    sub: "Indicative prices excl. VAT. We'll prepare an exact quote after a short free consultation.",
    tabs: { web: "Website", care: "Care" },
    from: "from",
    perMonth: "/ month",
    popular: "Most popular",
    custom: "Custom",
    currency: "CZK",
    web: [
      {
        name: "Start",
        description: "For new brands and simple presentations",
        price: 24900,
        features: ["One-page or up to 5 pages", "Custom design", "Fully responsive", "Basic SEO", "Contact form"],
        cta: "Choose Start",
      },
      {
        name: "Business",
        description: "For companies ready to grow online",
        price: 59900,
        features: [
          "Up to 15 pages",
          "UI/UX design + prototype",
          "CMS for easy editing",
          "Animations & interactions",
          "Advanced SEO & analytics",
          "Multi-language",
        ],
        cta: "Choose Business",
        highlighted: true,
      },
      {
        name: "Premium",
        description: "E-commerce, apps and bespoke projects",
        price: null,
        features: [
          "Unlimited scope",
          "E-shop or web application",
          "Integrations (ERP, CRM, payments)",
          "Brand & motion design",
          "Dedicated project manager",
          "Priority support",
        ],
        cta: "Let's talk",
      },
    ],
    care: [
      {
        name: "Basic",
        description: "Worry-free website operation",
        price: 990,
        features: ["Hosting & SSL", "Daily backups", "Security updates", "Uptime monitoring"],
        cta: "Choose Basic",
      },
      {
        name: "Growth",
        description: "A website that keeps improving",
        price: 4900,
        features: [
          "Everything in Basic",
          "4 hours of changes monthly",
          "Monthly report & analytics",
          "Speed optimisation",
          "Priority e-mail support",
        ],
        cta: "Choose Growth",
        highlighted: true,
      },
      {
        name: "Partner",
        description: "Your external web team",
        price: 14900,
        features: [
          "Everything in Growth",
          "12 hours of development monthly",
          "A/B testing & CRO",
          "Strategy consulting",
          "4-hour response time",
        ],
        cta: "Choose Partner",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "How long does it take to build a website?",
        a: "A typical company website launches in 4–8 weeks. Simple presentations can be faster; larger stores and apps take longer — you'll get an exact timeline with our quote.",
      },
      {
        q: "Will I be able to edit the website myself?",
        a: "Yes. We connect your site to a clean CMS where you can easily change copy and images or add new pages. A short training session is part of the handover.",
      },
      {
        q: "Do you use templates?",
        a: "No. Every website is designed from scratch for your brand and goals. That makes it faster, unique and better at converting.",
      },
      {
        q: "What if I already have a website?",
        a: "We'll happily run an audit and propose a redesign or gradual improvements. Often, reworking key pages and performance is enough to start seeing results.",
      },
      {
        q: "How does payment work?",
        a: "Usually a 40% deposit before we start, 30% after design approval and 30% at launch. Care plans are billed monthly with no long commitments.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something",
    titleAccent: "exceptional.",
    sub: "Tell us a few sentences about your project. We'll get back to you within 24 hours with next steps and a slot for a free consultation.",
    name: "Name",
    email: "E-mail",
    company: "Company (optional)",
    type: "What are you interested in?",
    types: ["New website", "Redesign", "E-shop", "Web app", "Website care"],
    budget: "Estimated budget",
    budgets: ["< 30k CZK", "30–80k CZK", "80–150k CZK", "150k CZK +"],
    message: "Tell us about your project",
    send: "Send enquiry",
    sentTitle: "Thanks, got it!",
    sentText: "We opened your e-mail client with a prepared message. If it didn't open, write to us directly at",
    again: "Send another",
    direct: "Or e-mail us directly",
    response: "We reply within 24 hours",
    subject: "Website enquiry",
  },
  footer: {
    tagline: "Modern, premium websites for brands that want to grow.",
    available: "Available for projects",
    rights: "All rights reserved.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social",
    backTop: "Back to top",
  },
}

export const dictionaries: Record<Locale, Dictionary> = { cs, en }
