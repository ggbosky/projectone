import type { Metadata } from "next"
import { LegalPage, List, P, Table, type LegalSection } from "@/components/legal-page"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů — Project Two",
  description: "Jak Project Two zpracovává osobní údaje z poptávkového formuláře a při návštěvě webu projectwo.com.",
}

const { operator, email } = site

const sections: LegalSection[] = [
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

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Zásady ochrany osobních údajů"
      intro="Jak nakládáme s údaji, které nám svěříte při poptávce nebo při návštěvě webu. Srozumitelně a bez kliček."
      summary={[
        "Údaje z formuláře používáme jen k vyřízení vaší poptávky a navazující komunikaci.",
        "Neprodáváme je a nepoužíváme je k reklamě.",
        "Web nepoužívá analytické ani reklamní cookies.",
        "O přístup k údajům nebo jejich výmaz nás můžete kdykoli požádat e-mailem.",
      ]}
      sections={sections}
    />
  )
}
