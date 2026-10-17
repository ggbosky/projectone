import type { Metadata } from "next"
import { LegalPage, List, P, Table, type LegalDoc, type LegalSection } from "@/components/legal-page"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů — Project Two",
  description: "Jak Project Two zpracovává osobní údaje z poptávkového formuláře a při návštěvě webu projectwo.com.",
}

const { operator, email } = site

const sectionsCs: LegalSection[] = [
  {
    id: "spravce",
    title: "Kdo zpracovává vaše údaje",
    content: (
      <>
        <P>
          Správcem osobních údajů je <strong>{operator.name}</strong>, IČO {operator.ico}, se sídlem {operator.address},
          podnikající pod značkou <strong>Project Two</strong>. {operator.registry}.
        </P>
        <P>
          S jakýmkoli dotazem k ochraně osobních údajů nám napište na <a href={`mailto:${email}`}>{email}</a>.
        </P>
      </>
    ),
  },
  {
    id: "udaje",
    title: "Jaké údaje zpracováváme",
    content: (
      <>
        <P>
          <strong>Údaje z poptávkového formuláře:</strong> jméno, e-mailová adresa, případně název firmy, zvolená služba,
          orientační rozpočet a obsah vaší zprávy. Další údaje zpracováváme jen tehdy, když nám je sami sdělíte nebo jsou
          nezbytné pro následnou spolupráci.
        </P>
        <P>
          <strong>Technické údaje při návštěvě webu:</strong> při načtení stránky zpracovává poskytovatel hostingu
          technické údaje, jako je IP adresa, typ prohlížeče a čas požadavku. Slouží k doručení webu, jeho zabezpečení a
          k anonymní statistice návštěvnosti, ze které vás nelze identifikovat.
        </P>
      </>
    ),
  },
  {
    id: "ucely",
    title: "Proč údaje zpracováváme",
    content: (
      <>
        <P>Údaje používáme pouze k těmto účelům:</P>
        <Table
          head={["Účel", "Údaje", "Právní základ"]}
          rows={[
            [
              "Vyřízení poptávky, příprava nabídky a navazující komunikace",
              "Údaje z formuláře",
              "Jednání o smlouvě na vaši žádost (čl. 6 odst. 1 písm. b GDPR); u kontaktů za firmu oprávněný zájem odpovědět na poptávku (písm. f)",
            ],
            ["Plnění uzavřené smlouvy", "Kontaktní a fakturační údaje", "Plnění smlouvy (čl. 6 odst. 1 písm. b GDPR)"],
            ["Účetní a daňové povinnosti", "Údaje na dokladech", "Plnění právní povinnosti (čl. 6 odst. 1 písm. c GDPR)"],
            [
              "Provoz a bezpečnost webu, anonymní statistika návštěvnosti",
              "Technické údaje",
              "Oprávněný zájem (čl. 6 odst. 1 písm. f GDPR)",
            ],
            ["Ochrana našich právních nároků", "Nezbytné údaje", "Oprávněný zájem (čl. 6 odst. 1 písm. f GDPR)"],
          ]}
        />
        <P>Vaše údaje neprodáváme a nepoužíváme je k reklamě ani k zasílání obchodních sdělení.</P>
      </>
    ),
  },
  {
    id: "doba",
    title: "Jak dlouho údaje uchováváme",
    content: (
      <List
        items={[
          <>
            <strong>Poptávky, které nevedou ke spolupráci:</strong> nejdéle 12 měsíců od posledního kontaktu, poté je
            smažeme.
          </>,
          <>
            <strong>Údaje související se smlouvou:</strong> po dobu spolupráce a poté po dobu promlčecích lhůt pro případné
            nároky.
          </>,
          <>
            <strong>Účetní a daňové doklady:</strong> po dobu stanovenou právními předpisy.
          </>,
          <>
            <strong>Technické záznamy:</strong> po dobu nezbytnou pro provoz a zabezpečení webu podle nastavení
            poskytovatele hostingu.
          </>,
        ]}
      />
    ),
  },
  {
    id: "prijemci",
    title: "Kdo má k údajům přístup",
    content: (
      <>
        <P>
          K údajům mají přístup pouze osoby, které se podílejí na vyřízení vaší poptávky. Pro provoz webu a doručování
          zpráv využíváme tyto poskytovatele, kteří údaje zpracovávají jen v nezbytném rozsahu:
        </P>
        <Table
          head={["Poskytovatel", "K čemu slouží", "Kde"]}
          rows={[
            [
              "Cloudflare, Inc.",
              "Hosting webu, DNS, zabezpečení a anonymní statistika návštěvnosti",
              "USA – předání na základě rámce EU–USA pro ochranu osobních údajů (Data Privacy Framework)",
            ],
            ["FormSubmit (formsubmit.co)", "Doručení zprávy z formuláře do naší e-mailové schránky", "Mimo EU"],
            ["Seznam.cz, a.s.", "E-mailová schránka, do které poptávky přicházejí", "Česká republika"],
          ]}
        />
      </>
    ),
  },
  {
    id: "prava",
    title: "Vaše práva",
    content: (
      <>
        <P>Za podmínek stanovených GDPR máte právo:</P>
        <List
          items={[
            "na přístup ke svým osobním údajům,",
            "na opravu nepřesných údajů,",
            "na výmaz údajů,",
            "na omezení zpracování,",
            "na přenositelnost údajů,",
            "vznést námitku proti zpracování založenému na oprávněném zájmu,",
            "odvolat souhlas, pokud je zpracování na souhlasu založeno.",
          ]}
        />
        <P>
          Své žádosti posílejte na <a href={`mailto:${email}`}>{email}</a>. Vyřídíme je bez zbytečného odkladu, nejpozději
          do jednoho měsíce. Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů (
          <a href="https://uoou.gov.cz" target="_blank" rel="noopener">
            uoou.gov.cz
          </a>
          ).
        </P>
      </>
    ),
  },
  {
    id: "bezpecnost",
    title: "Bezpečnost",
    content: (
      <P>
        Web běží výhradně přes zabezpečené připojení HTTPS a formulář je chráněn proti spamu. Přístup k údajům omezujeme
        na oprávněné osoby a přijímáme přiměřená technická a organizační opatření. Neprovádíme automatizované
        rozhodování ani profilování.
      </P>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <P>
        Web nepoužívá analytické ani reklamní cookies. Podrobnosti najdete v dokumentu{" "}
        <a href={site.legal.cookiesPath}>Informace o cookies</a>.
      </P>
    ),
  },
  {
    id: "zmeny",
    title: "Změny zásad",
    content: (
      <P>
        Tyto zásady můžeme aktualizovat při změně našich služeb, technologií nebo právních požadavků. Aktuální verze je
        vždy zveřejněna na této stránce. Účinné od {site.legal.effectiveDate}.
      </P>
    ),
  },
]

const sectionsEn: LegalSection[] = [
  {
    id: "spravce",
    title: "Who processes your data",
    content: (
      <>
        <P>
          The data controller is <strong>{operator.name}</strong>, Company ID (IČO) {operator.ico}, registered office{" "}
          {operator.address}, Czech Republic, trading under the name <strong>Project Two</strong>. Registered in the Czech
          Trade Register.
        </P>
        <P>
          For any questions about personal data, write to <a href={`mailto:${email}`}>{email}</a>.
        </P>
      </>
    ),
  },
  {
    id: "udaje",
    title: "What data we process",
    content: (
      <>
        <P>
          <strong>Enquiry form data:</strong> your name, e-mail address, company name (optional), selected service,
          estimated budget and the content of your message. We only process further data if you share it with us or if
          it is necessary for our cooperation.
        </P>
        <P>
          <strong>Technical data when you visit the website:</strong> when a page loads, our hosting provider processes
          technical data such as your IP address, browser type and time of the request. It is used to deliver and secure
          the website and for anonymous visitor statistics that cannot identify you.
        </P>
      </>
    ),
  },
  {
    id: "ucely",
    title: "Why we process data",
    content: (
      <>
        <P>We use the data only for the following purposes:</P>
        <Table
          head={["Purpose", "Data", "Legal basis"]}
          rows={[
            [
              "Handling your enquiry, preparing a quote and follow-up communication",
              "Form data",
              "Steps taken at your request prior to a contract (Art. 6(1)(b) GDPR); for company contacts, our legitimate interest in replying (Art. 6(1)(f))",
            ],
            ["Performing a concluded contract", "Contact and billing details", "Performance of a contract (Art. 6(1)(b) GDPR)"],
            ["Accounting and tax obligations", "Data on invoices", "Legal obligation (Art. 6(1)(c) GDPR)"],
            [
              "Operating and securing the website, anonymous visitor statistics",
              "Technical data",
              "Legitimate interest (Art. 6(1)(f) GDPR)",
            ],
            ["Protecting our legal claims", "Necessary data", "Legitimate interest (Art. 6(1)(f) GDPR)"],
          ]}
        />
        <P>We do not sell your data and do not use it for advertising or marketing messages.</P>
      </>
    ),
  },
  {
    id: "doba",
    title: "How long we keep data",
    content: (
      <List
        items={[
          <>
            <strong>Enquiries that do not lead to cooperation:</strong> no longer than 12 months from the last contact,
            then we delete them.
          </>,
          <>
            <strong>Contract-related data:</strong> for the duration of our cooperation and then for the statutory
            limitation periods.
          </>,
          <>
            <strong>Accounting and tax documents:</strong> for the period required by law.
          </>,
          <>
            <strong>Technical logs:</strong> as long as necessary to operate and secure the website, according to the
            hosting provider's settings.
          </>,
        ]}
      />
    ),
  },
  {
    id: "prijemci",
    title: "Who has access to the data",
    content: (
      <>
        <P>
          Only the people handling your enquiry have access to your data. To run the website and deliver messages we use
          the following providers, who process data only to the extent necessary:
        </P>
        <Table
          head={["Provider", "Purpose", "Location"]}
          rows={[
            [
              "Cloudflare, Inc.",
              "Website hosting, DNS, security and anonymous visitor statistics",
              "USA – transfer based on the EU–US Data Privacy Framework",
            ],
            ["FormSubmit (formsubmit.co)", "Delivering form messages to our mailbox", "Outside the EU"],
            ["Seznam.cz, a.s.", "The mailbox where enquiries arrive", "Czech Republic"],
          ]}
        />
      </>
    ),
  },
  {
    id: "prava",
    title: "Your rights",
    content: (
      <>
        <P>Under the GDPR you have the right:</P>
        <List
          items={[
            "to access your personal data,",
            "to have inaccurate data corrected,",
            "to have your data erased,",
            "to restrict processing,",
            "to data portability,",
            "to object to processing based on legitimate interest,",
            "to withdraw consent where processing is based on consent.",
          ]}
        />
        <P>
          Send your requests to <a href={`mailto:${email}`}>{email}</a>. We will handle them without undue delay and
          within one month at the latest. You may also lodge a complaint with the Czech Office for Personal Data
          Protection (
          <a href="https://uoou.gov.cz" target="_blank" rel="noopener">
            uoou.gov.cz
          </a>
          ).
        </P>
      </>
    ),
  },
  {
    id: "bezpecnost",
    title: "Security",
    content: (
      <P>
        The website runs exclusively over a secure HTTPS connection and the form is protected against spam. Access to
        data is limited to authorised people and we take appropriate technical and organisational measures. We do not
        carry out automated decision-making or profiling.
      </P>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <P>
        The website does not use analytics or advertising cookies. See <a href={site.legal.cookiesPath}>Cookie information</a>{" "}
        for details.
      </P>
    ),
  },
  {
    id: "zmeny",
    title: "Changes",
    content: (
      <P>
        We may update this policy when our services, technologies or legal requirements change. The current version is
        always published on this page. Effective from {site.legal.effectiveDate}.
      </P>
    ),
  },
]

const docs: Record<"cs" | "en", LegalDoc> = {
  cs: {
    title: "Zásady ochrany osobních údajů",
    intro: "Jak nakládáme s údaji, které nám svěříte při poptávce nebo při návštěvě webu. Srozumitelně a bez kliček.",
    summary: [
      "Údaje z formuláře používáme jen k vyřízení vaší poptávky a navazující komunikaci.",
      "Neprodáváme je a nepoužíváme je k reklamě.",
      "Web nepoužívá analytické ani reklamní cookies.",
      "O přístup k údajům nebo jejich výmaz nás můžete kdykoli požádat e-mailem.",
    ],
    sections: sectionsCs,
  },
  en: {
    title: "Privacy policy",
    intro: "How we handle the data you share with us in an enquiry or when visiting the website. Clear and straightforward.",
    summary: [
      "We use form data only to handle your enquiry and follow-up communication.",
      "We do not sell it or use it for advertising.",
      "The website does not use analytics or advertising cookies.",
      "You can ask us by e-mail at any time to access or delete your data.",
    ],
    sections: sectionsEn,
  },
}

export default function PrivacyPage() {
  return <LegalPage docs={docs} />
}
