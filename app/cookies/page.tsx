import type { Metadata } from "next"
import { LegalPage, List, P, Table, type LegalDoc, type LegalSection } from "@/components/legal-page"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Informace o cookies — Project Two",
  description: "Jaké cookies a podobné technologie používá web projectwo.com.",
}

const { operator, email } = site

const sectionsCs: LegalSection[] = [
  {
    id: "co-jsou-cookies",
    title: "Co jsou cookies",
    content: (
      <P>
        Cookies jsou malé soubory, které si web může uložit do vašeho zařízení. Podobně fungují i jiné technologie, například
        lokální úložiště prohlížeče. Slouží třeba k zapamatování nastavení, měření návštěvnosti nebo k reklamě.
      </P>
    ),
  },
  {
    id: "co-pouzivame",
    title: "Co web používá",
    content: (
      <>
        <P>
          Web <strong>{site.domain}</strong> nepoužívá žádné analytické, reklamní ani sledovací cookies. Používáme pouze
          následující technologie:
        </P>
        <Table
          head={["Technologie", "Poskytovatel", "Účel", "Doba uložení", "Kategorie"]}
          rows={[
            [
              <code key="c">p1-locale</code>,
              "Project Two",
              "Zapamatuje si jazyk (CZ/EN), pokud jej sami přepnete. Ukládá se do lokálního úložiště prohlížeče.",
              "Do smazání v prohlížeči",
              "Nezbytná / funkční",
            ],
            [
              "Cloudflare Web Analytics",
              "Cloudflare, Inc.",
              "Anonymní statistika návštěvnosti. Neukládá do vašeho zařízení žádné cookies ani jiné údaje a nesleduje vás napříč weby.",
              "Nic se neukládá",
              "Statistika bez cookies",
            ],
            [
              <code key="c">cf_clearance</code>,
              "Cloudflare, Inc.",
              "Bezpečnostní cookie, která se nastaví jen výjimečně, pokud Cloudflare vyhodnotí provoz jako podezřelý a ověřuje, že nejste robot.",
              "Obvykle 30 minut",
              "Nezbytná",
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: "souhlas",
    title: "Proč nezobrazujeme cookie lištu",
    content: (
      <>
        <P>
          Technologie, které jsou nezbytné pro fungování webu nebo pro službu, o kterou jste výslovně požádali (například
          zapamatování zvoleného jazyka), lze podle § 89 odst. 3 zákona č. 127/2005 Sb., o elektronických komunikacích,
          používat bez předchozího souhlasu. Statistika návštěvnosti do vašeho zařízení nic neukládá.
        </P>
        <P>
          Pokud bychom v budoucnu chtěli používat analytické nebo marketingové cookies, spustíme je až po vašem souhlasu.
          Odmítnutí bude stejně snadné jako přijetí a souhlas půjde kdykoli změnit.
        </P>
      </>
    ),
  },
  {
    id: "sprava",
    title: "Jak cookies spravovat",
    content: (
      <>
        <P>
          Cookies a data webů můžete kdykoli smazat nebo zablokovat v nastavení svého prohlížeče. Návody najdete u
          jednotlivých prohlížečů:
        </P>
        <List
          items={[
            <a key="g" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">
              Google Chrome
            </a>,
            <a key="f" href="https://support.mozilla.org/cs/kb/vymazani-cookies-dat-stranek-firefox" target="_blank" rel="noopener">
              Mozilla Firefox
            </a>,
            <a key="s" href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener">
              Safari
            </a>,
            <a key="e" href="https://support.microsoft.com/cs-cz/microsoft-edge" target="_blank" rel="noopener">
              Microsoft Edge
            </a>,
          ]}
        />
      </>
    ),
  },
  {
    id: "provozovatel",
    title: "Provozovatel a kontakt",
    content: (
      <>
        <P>
          {operator.name}, IČO {operator.ico}, {operator.address}. E-mail:{" "}
          <a href={`mailto:${email}`}>{email}</a>.
        </P>
        <P>
          Více o zpracování osobních údajů najdete v{" "}
          <a href={site.legal.privacyPath}>Zásadách ochrany osobních údajů</a>. Účinné od {site.legal.effectiveDate}.
        </P>
      </>
    ),
  },
]

const sectionsEn: LegalSection[] = [
  {
    id: "co-jsou-cookies",
    title: "What cookies are",
    content: (
      <P>
        Cookies are small files a website can store on your device. Other technologies, such as the browser's local
        storage, work in a similar way. They are used, for example, to remember settings, measure traffic or for
        advertising.
      </P>
    ),
  },
  {
    id: "co-pouzivame",
    title: "What the website uses",
    content: (
      <>
        <P>
          The website <strong>{site.domain}</strong> does not use any analytics, advertising or tracking cookies. We only
          use the following technologies:
        </P>
        <Table
          head={["Technology", "Provider", "Purpose", "Storage period", "Category"]}
          rows={[
            [
              <code key="c">p1-locale</code>,
              "Project Two",
              "Remembers the language (CZ/EN) if you switch it yourself. Stored in the browser's local storage.",
              "Until you clear it in your browser",
              "Necessary / functional",
            ],
            [
              "Cloudflare Web Analytics",
              "Cloudflare, Inc.",
              "Anonymous visitor statistics. Stores no cookies or other data on your device and does not track you across websites.",
              "Nothing is stored",
              "Cookieless statistics",
            ],
            [
              <code key="c">cf_clearance</code>,
              "Cloudflare, Inc.",
              "Security cookie set only rarely, when Cloudflare considers traffic suspicious and checks that you are not a bot.",
              "Usually 30 minutes",
              "Necessary",
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: "souhlas",
    title: "Why there is no cookie banner",
    content: (
      <>
        <P>
          Technologies that are necessary for the website to work or for a service you explicitly requested (such as
          remembering your chosen language) may be used without prior consent under Section 89(3) of Czech Act No.
          127/2005 Coll., on Electronic Communications. Our visitor statistics store nothing on your device.
        </P>
        <P>
          If we ever decide to use analytics or marketing cookies, we will only enable them after you consent. Refusing
          will be as easy as accepting, and you will be able to change your choice at any time.
        </P>
      </>
    ),
  },
  {
    id: "sprava",
    title: "How to manage cookies",
    content: (
      <>
        <P>You can delete or block cookies and site data at any time in your browser settings. Guides for each browser:</P>
        <List
          items={[
            <a key="g" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">
              Google Chrome
            </a>,
            <a key="f" href="https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener">
              Mozilla Firefox
            </a>,
            <a key="s" href="https://support.apple.com/guide/safari/sfri11471/mac" target="_blank" rel="noopener">
              Safari
            </a>,
            <a key="e" href="https://support.microsoft.com/microsoft-edge" target="_blank" rel="noopener">
              Microsoft Edge
            </a>,
          ]}
        />
      </>
    ),
  },
  {
    id: "provozovatel",
    title: "Operator and contact",
    content: (
      <>
        <P>
          {operator.name}, Company ID (IČO) {operator.ico}, {operator.address}, Czech Republic. E-mail:{" "}
          <a href={`mailto:${email}`}>{email}</a>.
        </P>
        <P>
          More about how we process personal data is in our <a href={site.legal.privacyPath}>Privacy policy</a>. Effective
          from {site.legal.effectiveDate}.
        </P>
      </>
    ),
  },
]

const docs: Record<"cs" | "en", LegalDoc> = {
  cs: {
    title: "Informace o cookies",
    intro: "Co web ukládá do vašeho prohlížeče a proč. Krátce: skoro nic.",
    summary: [
      "Web nepoužívá analytické, reklamní ani sledovací cookies.",
      "Pamatujeme si jen zvolený jazyk, pokud ho sami přepnete.",
      "Návštěvnost měříme anonymně a bez cookies.",
      "Proto po vás nechceme souhlas přes cookie lištu.",
    ],
    sections: sectionsCs,
  },
  en: {
    title: "Cookie information",
    intro: "What the website stores in your browser and why. In short: almost nothing.",
    summary: [
      "The website does not use analytics, advertising or tracking cookies.",
      "We only remember your chosen language if you switch it yourself.",
      "Visitor statistics are anonymous and cookieless.",
      "That's why we don't ask for consent through a cookie banner.",
    ],
    sections: sectionsEn,
  },
}

export default function CookiesPage() {
  return <LegalPage docs={docs} />
}
