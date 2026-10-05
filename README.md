# Project Two — web

Moderní prezentační web týmu Project Two (Next.js 16, Tailwind CSS 4, Framer Motion, Lenis).

## Spuštění

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Kde co upravit

- `lib/dictionary.ts` – všechny texty v CZ a EN (služby, projekty, ceník, FAQ…)
- `lib/site.ts` – e-mail, telefon, lokalita, sociální sítě
- `components/work.tsx` – generované náhledy projektů → nahraďte skutečnými screenshoty
- `components/contact.tsx` – formulář zatím odesílá přes `mailto:`; pro serverové odesílání nahraďte `handleSubmit` voláním API (Resend, Formspree…)
- `app/globals.css` – barvy (akcent `--ember`)

## Nasazení (GitHub Pages + projectwo.com)

Web se při každém pushi automaticky sestaví a nasadí přes GitHub Actions (`.github/workflows/deploy.yml`).

Jednorázové nastavení:

1. GitHub → repozitář → **Settings → Pages** → *Build and deployment* → Source: **GitHub Actions**.
2. Ve stejné sekci do *Custom domain* napsat `projectwo.com` a uložit (soubor `public/CNAME` už je připravený). Po ověření zapnout **Enforce HTTPS**.
3. U registrátora domény nastavit DNS:
   - `A` záznamy pro `projectwo.com` (@): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` pro `www`: `ggbosky.github.io`

## Kontaktní formulář

Odesílá se přes [FormSubmit](https://formsubmit.co) na adresu z `lib/site.ts` (`projectwo@seznam.cz`).
Po prvním odeslání z webu přijde na tuto adresu potvrzovací e-mail od FormSubmit — je potřeba ho jednou potvrdit, pak už poptávky chodí rovnou.
