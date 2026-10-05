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
