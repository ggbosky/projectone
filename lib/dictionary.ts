export type Locale = "cs" | "en"

const cs = {
  meta: {
    title: "Project Two — Moderní prémiové weby",
    description:
      "Project Two navrhuje a vyvíjí moderní, rychlé a prémiové weby, e-shopy a digitální produkty, které vydělávají.",
  },
  nav: {
    items: [
      { label: "Služby", href: "#sluzby" },
      { label: "Práce", href: "#prace" },
      { label: "Proces", href: "#proces" },
      { label: "Ceník", href: "#cenik" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Začít spolupráci",
    menu: "Otevřít menu",
  },
  hero: {
    line1: "Weby, které",
    line2: "prodávají",
    line2Accent: "za vás.",
    sub: "Jsme Project Two — malý tým, který stojí za každým projektem osobně. Tvoříme moderní, rychlé a prémiové weby, které posunou vaši značku o level výš.",
    primary: "Nezávazná konzultace",
    secondary: "Naše práce",
    stats: [
      { value: "Zdarma", label: "úvodní konzultace" },
      { value: "2–3 týdny", label: "a váš web je online" },
      { value: "Mobile first", label: "perfektní na telefonu" },
    ],
  },
  services: {
    title: "Vše pro web, který dává smysl",
    sub: "Od strategie a designu až po vývoj, spuštění a dlouhodobou péči. Jeden tým, žádné kompromisy.",
    design: {
      title: "Webdesign & UI/UX",
      text: "Unikátní design na míru vaší značce. Žádné šablony — každý pixel má svůj důvod.",
    },
    dev: {
      title: "Funkce na míru",
      text: "Rezervace, poptávkové formuláře, jednoduchý e-shop nebo napojení na nástroje, které už používáte.",
    },
    speed: {
      title: "Bleskový výkon",
      text: "Ladíme web do poslední milisekundy. Rychlý web = lepší SEO i konverze.",
      label: "výkon",
    },
    responsive: {
      title: "Na mobilu i počítači",
      text: "Web vypadá a funguje skvěle na telefonu, tabletu i velké obrazovce.",
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
      text: "Hosting, zálohy, aktualizace a drobné úpravy. O web se postaráme i po spuštění.",
      status: "Vše běží",
    },
  },
  work: {
    title: "Naše práce",
    sub: "Weby, které jsme nedávno spustili.",
    items: [
      {
        name: "ALDA — Aleš Javorský",
        type: "Web · Portfolio videostřihače",
        image: "/work/aldastrih.jpg",
        url: "https://aldastrih.cz/",
      },
      {
        name: "Karel Drexler",
        type: "Web · Portfolio grafika a tvůrce",
        image: "/work/drexler.jpg",
        url: "https://www.drexler.digital/",
      },
    ],
  },
  reviews: {
    title: "Co říkají klienti",
    items: [
      {
        quote: "To je naprostý masterpiece Karle 🤩",
        name: "Aleš Javorský",
        role: "Video editor · aldastrih.cz",
        photo: "/reviews/ales-javorsky.jpg",
      },
    ],
  },
  process: {
    title: "Jasný postup, žádná překvapení",
    sub: "Víte, co se děje v každé fázi. Průběžně ukazujeme výsledky a ladíme je s vámi.",
    steps: [
      {
        title: "Úvodní hovor",
        text: "Probereme, co potřebujete, pro koho web je a co má přinést. Nezávazně a zdarma.",
      },
      {
        title: "Návrh a nabídka",
        text: "Připravíme strukturu webu, vizuální směr a konkrétní nabídku bez skrytých položek.",
      },
      {
        title: "Tvorba webu",
        text: "Web postavíme, průběžně vám ho ukazujeme a zapracujeme vaše připomínky.",
      },
      {
        title: "Spuštění a podpora",
        text: "Web spustíme na vaší doméně, nastavíme měření a zůstáváme k dispozici i potom.",
      },
    ],
  },
  pricing: {
    title: "Balíčky",
    sub: "Každý projekt naceníme individuálně podle rozsahu. Konkrétní nabídku dostanete po úvodním hovoru — zdarma a nezávazně.",
    tabs: { web: "Web", care: "Péče" },
    popular: "Nejoblíbenější",
    web: [
      {
        name: "Start",
        description: "Pro živnostníky, nové značky a jednoduché prezentace",
        features: ["Jednostránkový web", "Design na míru", "Optimalizace pro mobily", "Kontaktní formulář", "Základní SEO", "Spuštění na vaší doméně"],
        cta: "Chci Start",
      },
      {
        name: "Business",
        description: "Pro firmy, které chtějí růst online",
        features: [
          "Web s více podstránkami",
          "Návrh designu ke schválení",
          "Snadná správa obsahu",
          "Animace a interakce",
          "SEO a napojení na Google Analytics",
          "Vícejazyčnost na přání",
        ],
        cta: "Chci Business",
        highlighted: true,
      },
      {
        name: "Premium",
        description: "Rozsáhlejší weby a projekty na míru",
        features: [
          "Rezervace, e-shop nebo klientská sekce",
          "Online platby",
          "Napojení na vaše nástroje",
          "Rozsah podle vašich potřeb",
          "Prioritní podpora",
        ],
        cta: "Domluvit se",
      },
    ],
    care: [
      {
        name: "Basic",
        description: "Bezstarostný provoz webu",
        features: ["Hosting a SSL certifikát", "Pravidelné zálohy", "Bezpečnostní aktualizace", "Hlídání dostupnosti"],
        cta: "Vybrat Basic",
      },
      {
        name: "Standard",
        description: "Web, který je stále aktuální",
        features: ["Vše z Basic", "Drobné úpravy obsahu každý měsíc", "Kontrola rychlosti", "Podpora e-mailem"],
        cta: "Vybrat Standard",
        highlighted: true,
      },
      {
        name: "Plus",
        description: "Web, který s vámi roste",
        features: ["Vše ze Standard", "Nové sekce a podstránky", "Průběžné SEO", "Přednostní řešení požadavků"],
        cta: "Vybrat Plus",
      },
    ],
  },
  faq: {
    title: "Časté dotazy",
    items: [
      {
        q: "Jak dlouho trvá vytvoření webu?",
        a: "Většina webů je hotová a online na vaší doméně do 2–3 týdnů. Záleží hlavně na rozsahu a požadavcích — větší projekty jako e-shopy trvají déle. Odhad dostanete hned s nabídkou.",
      },
      {
        q: "Kolik web stojí?",
        a: "Každý projekt naceňujeme individuálně podle rozsahu a funkcí. Po úvodním hovoru vám pošleme konkrétní nabídku, ve které uvidíte, za co platíte.",
      },
      {
        q: "Budu si moct web sám upravovat?",
        a: "Ano. Web připravíme tak, abyste si texty, obrázky i nové stránky mohli snadno upravit sami. Při předání vám vše ukážeme.",
      },
      {
        q: "Používáte šablony?",
        a: "Občas ano — záleží na klientovi, jeho představách a požadavcích. Někdy dává smysl postavit web úplně od nuly, jindy je rychlejší a levnější vyjít z kvalitního základu a upravit ho na míru.",
      },
      {
        q: "Co když už web mám?",
        a: "Rádi se na něj podíváme a navrhneme redesign nebo postupné vylepšení. Často stačí upravit klíčové stránky a rychlost, aby web začal přinášet výsledky.",
      },
    ],
  },
  contact: {
    title: "Pojďme vytvořit něco",
    titleAccent: "výjimečného.",
    sub: "Napište nám pár vět o projektu. Ozveme se co nejdřív a domluvíme si nezávazný hovor.",
    name: "Jméno",
    email: "E-mail",
    company: "Firma (nepovinné)",
    type: "O co máte zájem?",
    types: ["Nový web", "Redesign", "E-shop", "Web aplikace", "Péče o web"],
    budget: "Orientační rozpočet",
    budgets: ["do 10 tis.", "10–25 tis.", "25–50 tis.", "50 tis. +"],
    message: "Řekněte nám o projektu",
    send: "Odeslat poptávku",
    sentTitle: "Díky, máme to!",
    sentText: "Vaše poptávka dorazila. Ozveme se co nejdřív. Kdybyste nám chtěli něco doplnit, napište na",
    sending: "Odesílám…",
    error: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám napište přímo na",
    again: "Poslat další",
    direct: "Nebo nám napište přímo",
    subject: "Poptávka z webu",
  },
  footer: {
    tagline: "Moderní, prémiové weby pro značky, které chtějí růst.",
    navTitle: "Navigace",
    contactTitle: "Kontakt",
    backTop: "Nahoru",
  },
}

export type Dictionary = typeof cs

const en: Dictionary = {
  meta: {
    title: "Project Two — Modern premium websites",
    description:
      "Project Two designs and builds modern, fast and premium websites, e-commerce and digital products that actually sell.",
  },
  nav: {
    items: [
      { label: "Services", href: "#sluzby" },
      { label: "Work", href: "#prace" },
      { label: "Process", href: "#proces" },
      { label: "Pricing", href: "#cenik" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Work with us",
    menu: "Open menu",
  },
  hero: {
    line1: "Websites that",
    line2: "sell",
    line2Accent: "for you.",
    sub: "We are Project Two — a small team that personally stands behind every project. We create modern, fast and premium websites that take your brand to the next level.",
    primary: "Free consultation",
    secondary: "Our work",
    stats: [
      { value: "Free", label: "initial consultation" },
      { value: "2–3 weeks", label: "and your site is live" },
      { value: "Mobile first", label: "flawless on phones" },
    ],
  },
  services: {
    title: "Everything a great website needs",
    sub: "From strategy and design to development, launch and long-term care. One team, zero compromises.",
    design: {
      title: "Web design & UI/UX",
      text: "Unique design tailored to your brand. No templates — every pixel has a purpose.",
    },
    dev: {
      title: "Custom features",
      text: "Bookings, enquiry forms, a simple shop or connections to the tools you already use.",
    },
    speed: {
      title: "Blazing performance",
      text: "Optimised to the last millisecond. A fast site means better SEO and conversions.",
      label: "performance",
    },
    responsive: {
      title: "On phone and desktop",
      text: "Your site looks and works great on phones, tablets and large screens.",
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
      text: "Hosting, backups, updates and small changes. We look after your site after launch too.",
      status: "All systems go",
    },
  },
  work: {
    title: "Our work",
    sub: "Websites we launched recently.",
    items: [
      {
        name: "ALDA — Aleš Javorský",
        type: "Web · Video editor portfolio",
        image: "/work/aldastrih.jpg",
        url: "https://aldastrih.cz/",
      },
      {
        name: "Karel Drexler",
        type: "Web · Designer & creator portfolio",
        image: "/work/drexler.jpg",
        url: "https://www.drexler.digital/",
      },
    ],
  },
  reviews: {
    title: "What clients say",
    items: [
      {
        quote: "To je naprostý masterpiece Karle 🤩",
        name: "Aleš Javorský",
        role: "Video editor · aldastrih.cz",
        photo: "/reviews/ales-javorsky.jpg",
      },
    ],
  },
  process: {
    title: "A clear path, no surprises",
    sub: "You always know what is happening. We share progress continuously and refine it together with you.",
    steps: [
      {
        title: "Intro call",
        text: "We talk through what you need, who the site is for and what it should achieve. Free and no strings attached.",
      },
      {
        title: "Proposal & quote",
        text: "We prepare the site structure, visual direction and a clear quote with no hidden items.",
      },
      {
        title: "Building the site",
        text: "We build the site, show you progress along the way and work in your feedback.",
      },
      {
        title: "Launch & support",
        text: "We launch on your domain, set up analytics and stay available afterwards.",
      },
    ],
  },
  pricing: {
    title: "Packages",
    sub: "We price every project individually based on scope. You'll get a concrete quote after the intro call — free and with no obligation.",
    tabs: { web: "Website", care: "Care" },
    popular: "Most popular",
    web: [
      {
        name: "Start",
        description: "For freelancers, new brands and simple presentations",
        features: ["One-page website", "Custom design", "Optimised for mobile", "Contact form", "Basic SEO", "Launch on your domain"],
        cta: "Choose Start",
      },
      {
        name: "Business",
        description: "For companies ready to grow online",
        features: [
          "Multi-page website",
          "Design proposal for approval",
          "Easy content editing",
          "Animations & interactions",
          "SEO & Google Analytics",
          "Multi-language on request",
        ],
        cta: "Choose Business",
        highlighted: true,
      },
      {
        name: "Premium",
        description: "Larger websites and bespoke projects",
        features: [
          "Bookings, a shop or a client area",
          "Online payments",
          "Connections to your tools",
          "Scope tailored to you",
          "Priority support",
        ],
        cta: "Let's talk",
      },
    ],
    care: [
      {
        name: "Basic",
        description: "Worry-free website operation",
        features: ["Hosting & SSL certificate", "Regular backups", "Security updates", "Uptime monitoring"],
        cta: "Choose Basic",
      },
      {
        name: "Standard",
        description: "A website that stays up to date",
        features: ["Everything in Basic", "Small content changes every month", "Speed checks", "E-mail support"],
        cta: "Choose Standard",
        highlighted: true,
      },
      {
        name: "Plus",
        description: "A website that grows with you",
        features: ["Everything in Standard", "New sections and pages", "Ongoing SEO", "Priority handling"],
        cta: "Choose Plus",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How long does it take to build a website?",
        a: "Most websites are finished and live on your domain within 2–3 weeks. It mainly depends on scope and requirements — larger projects like e-shops take longer. You'll get an estimate together with the quote.",
      },
      {
        q: "How much does a website cost?",
        a: "We price every project individually based on scope and features. After the intro call we'll send you a concrete quote so you can see exactly what you're paying for.",
      },
      {
        q: "Will I be able to edit the website myself?",
        a: "Yes. We set the site up so you can easily change copy and images or add new pages yourself. We'll walk you through everything at handover.",
      },
      {
        q: "Do you use templates?",
        a: "Sometimes — it depends on the client, their vision and requirements. Sometimes it makes sense to build from scratch, other times it's faster and cheaper to start from a quality base and tailor it.",
      },
      {
        q: "What if I already have a website?",
        a: "We'll happily take a look and propose a redesign or gradual improvements. Often, reworking key pages and speed is enough to start seeing results.",
      },
    ],
  },
  contact: {
    title: "Let's build something",
    titleAccent: "exceptional.",
    sub: "Tell us a few sentences about your project. We'll get back to you soon to arrange a free, no-obligation call.",
    name: "Name",
    email: "E-mail",
    company: "Company (optional)",
    type: "What are you interested in?",
    types: ["New website", "Redesign", "E-shop", "Web app", "Website care"],
    budget: "Estimated budget",
    budgets: ["< 10k CZK", "10–25k CZK", "25–50k CZK", "50k CZK +"],
    message: "Tell us about your project",
    send: "Send enquiry",
    sentTitle: "Thanks, got it!",
    sentText: "Your enquiry has arrived. We'll get back to you soon. If you want to add anything, write to",
    sending: "Sending…",
    error: "The message couldn't be sent. Please try again or write to us directly at",
    again: "Send another",
    direct: "Or e-mail us directly",
    subject: "Website enquiry",
  },
  footer: {
    tagline: "Modern, premium websites for brands that want to grow.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    backTop: "Back to top",
  },
}

export const dictionaries: Record<Locale, Dictionary> = { cs, en }
