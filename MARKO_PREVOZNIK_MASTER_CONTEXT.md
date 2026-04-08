# MARKO PREVOZNIK - MASTER CONTEXT
> Daj mi ovaj fajl na pocetku svake sesije i nastavljamo tacno gde smo stali.
> Azuriraj **TRENUTNI STATUS**, **SLEDECI KORAK** i **PROMENE U FAJLOVIMA** posle svake vece izmene.

---

## PROJEKAT

- **Naziv:** Marko Prevoznik
- **Tip:** one-page landing sajt
- **Namena:** slep sluzba / prevoz vozila
- **Lokacija usluge:** Cerovac, Smederevska Palanka i okolina
- **Status:** live na Vercelu
- **Primarni cilj:** hitan kontakt i poziv korisnika
- **Sekundarni cilj:** Viber / WhatsApp slanje lokacije
- **Jezik koda:** TypeScript
- **Jezik sajta:** srpski + engleski

---

## TECH STACK

| Sloj | Tehnologija | Status | Zasto |
|------|-------------|--------|-------|
| Framework | Next.js 16 (App Router) | aktivno | brz deployment i jednostavna struktura |
| UI | React 19 | aktivno | standard za Next |
| Jezik | TypeScript | aktivno | manje bagova |
| Stilizacija | Tailwind CSS 4 | aktivno | brz rad i mali projekat |
| Slike | next/image | aktivno | optimizacija logo asseta |
| Hosting | Vercel | aktivno | najlaksi deploy |
| Repo | GitHub | aktivno | version control |
| Paket menadzer | npm | aktivno | standardno |

### Pravilo
- Ne uvoditi nove biblioteke bez razloga.
- Prvo resavati kroz postojeci stack.
- Sajt je mali i treba da ostane lagan, brz i jasan.

---

## STRUKTURA PROJEKTA

```text
app/
  globals.css
  layout.tsx                  <- metadata + html lang preko locale cookie
  page.tsx                    <- srpska verzija na "/"
  en/
    page.tsx                  <- engleska verzija na "/en"

components/
  HomePage.tsx                <- zajednicki UI za oba jezika

public/
  logo-set.png                <- glavni logo

site/
  content.ts                  <- CENTRALNI DATA LAYER za sr i en

proxy.ts                      <- geo i accept-language preusmeravanje

MARKO_PREVOZNIK_MASTER_CONTEXT.md
README.md
```

---

## FLOW STRANICE

Sajt ide ovim redom:

1. Sticky header sa kontaktima
2. Hero + glavni CTA
3. Kartica sa kontaktom 0-24
4. Sekcija "Sta radimo"
5. Sekcija "Kako ide dogovor"
6. Sekcija "Gde radimo"
7. Footer
8. Mobile fixed CTA bar

### Gde se ovo kontrolise
- `components/HomePage.tsx`

Ako treba dodati ili pomeriti sekciju:
- menja se `components/HomePage.tsx`

---

## VEZE IZMEDJU FAJLOVA

### `site/content.ts`
**Uloga:**
- najbitniji fajl projekta
- cuva sve tekstove i osnovne poslovne podatke za `sr` i `en`
- drzi helper funkcije za Viber i WhatsApp linkove

**Bitno:**
- ako menjas tekst, broj telefona, zonu rada, CTA ili SEO, prvo proveri ovaj fajl
- obe jezicke verzije zavise od njega

### `components/HomePage.tsx`
**Uloga:**
- zajednicki layout i UI za oba jezika
- povlaci content preko `getSiteContent(locale)`
- renderuje header, hero, services, process, coverage, footer i mobile CTA

### `app/page.tsx`
**Uloga:**
- renderuje srpsku verziju na `/`

### `app/en/page.tsx`
**Uloga:**
- renderuje englesku verziju na `/en`

### `app/layout.tsx`
**Uloga:**
- cita `MARKO_LOCALE` cookie
- postavlja `<html lang="sr">` ili `<html lang="en">`
- generise metadata prema aktivnom jeziku

### `proxy.ts`
**Uloga:**
- proverava `x-vercel-ip-country`
- fallback na `accept-language`
- strane posetioce sa `/` salje na `/en`
- lokalne posetioce ostavlja na `/`

**Bitno:**
- matcher je samo za `/` i `/en`
- nema agresivnih redirectova po drugim putanjama

---

## POSLOVNI PODACI

Osnovni kontakt:
- Naziv: `Marko Prevoznik`
- Telefon raw: `066006299`
- Telefon display: `066 006 299`
- Telefon tel: `+38166006299`

Osnovna usluga:
- slep sluzba 0-24
- prevoz pokvarenih automobila
- prevoz prikolica i manjih vozila
- prevoz do servisa / tehnickog
- sire relacije po dogovoru

Zona rada:
- Cerovac
- Smederevska Palanka
- okolina
- sire po dogovoru

---

## DATA SHAPE

## `Locale`
```ts
"sr" | "en"
```

## `getSiteContent(locale)`
```ts
getSiteContent(locale: Locale): SiteContent
```

## `SiteContent`
```ts
{
  company: {
    name: string;
    logoAlt: string;
    serviceLine: string;
    phoneRaw: string;
    phoneDisplay: string;
    phoneTel: string;
    area: string;
    areaShort: string;
    estimateNote: string;
  };
  seo: {
    title: string;
    description: string;
  };
  navigation: {
    call: string;
    viber: string;
    whatsapp: string;
    switchLabel: string;
  };
  hero: {
    availability: string;
    title: string;
    titleAccent: string;
    areaLine: string;
    description: string;
    callNow: string;
    sendLocationViber: string;
    sendLocationWhatsApp: string;
    badges: string[];
    cardTitle: string;
    cardPrimaryCta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  process: {
    title: string;
    stepLabel: string;
    steps: { n: string; title: string; desc: string }[];
  };
  coverage: {
    title: string;
    description: string;
    contactTitle: string;
  };
  footer: {
    rights: string;
  };
  mobileBar: {
    call: string;
    viber: string;
    whatsappShort: string;
  };
}
```

---

## RUTE

Aktivne rute:
- `/` -> srpska verzija
- `/en` -> engleska verzija

Napomena:
- ovo je i dalje one-page sajt
- nema dodatnih podstranica
- engleski je posebna landing ruta

---

## I18N / GEO LOGIKA

Sta je uradjeno:
- dodat engleski content bez uvodjenja i18n biblioteka
- dodat rucni SR/EN switch
- dodat geo redirect za posetioce van lokalnog regiona
- isti UI koristi oba jezika

Kako radi:
1. Poseta na `/` iz `RS`, `BA`, `ME`, `HR`, `MK` -> ostaje srpski.
2. Poseta na `/` van tog regiona -> redirect na `/en`.
3. Ako geo header nije dostupan -> koristi se `accept-language`.
4. Cookie `MARKO_LOCALE` odrzava aktivni jezik za `html lang` i metadata.

Zasto ovako:
- najmanji rizik za mali sajt
- nema runtime prevoda
- nema loma dizajna
- lako odrzavanje jer je sve u jednom content layer-u

---

## DESIGN / UX PRAVILA

- Fokus sajta je na brzom kontaktu, ne na dugom citanju.
- CTA mora stalno da bude jasan i vidljiv.
- Broj telefona ne menjati na vise mesta rucno; menjati samo u `site/content.ts`.
- Mobilni bottom bar je bitan i ne treba ga uklanjati bez razloga.
- Ovaj sajt mora da ostane brz, jednostavan i lak za hitnu upotrebu.

---

## ASSETI

Glavni asset:
- `/public/logo-set.png`

Napomena:
- trenutno nema mnogo asseta
- branding i vizuelni identitet su lagani i minimalisticki

---

## GIT / DEPLOY FLOW

### Lokalni rad
```powershell
npm run dev
```

### Provera pre pusha
```powershell
npm run lint
npm run build
```

### Git flow
```powershell
git add .
git commit -m "opis izmene"
git push
```

### Deploy flow
```text
VS Code -> Git commit/push -> GitHub -> Vercel auto deploy
```

### Repo
- `https://github.com/brankop87/marko-prevoznik`

### Live
- `https://marko-prevoznik.vercel.app/`

---

## DEBUG PRAVILA

### Ako je editor crven
Proveriti:
1. da li je import iz `@/site/content` ispravan
2. da li `HomePage` dobija validan `locale`
3. da li neko novo polje postoji u oba jezika

### Ako build pukne
Prvo proveriti:
1. `site/content.ts`
2. `app/layout.tsx`
3. `proxy.ts`
4. da li `app/en/page.tsx` postoji

### Ako engleski ne radi
Proveriti:
1. da li postoji ruta `/en`
2. da li postoji `proxy.ts`
3. da li Vercel salje `x-vercel-ip-country`
4. da li `site/content.ts` ima `en` varijantu
5. da li switch vodi na `/` i `/en`

### Ako broj telefona nije svuda ispravan
Proveriti:
1. `company.phoneRaw`
2. `company.phoneDisplay`
3. `company.phoneTel`
u `site/content.ts`

### Ako se promena ne vidi live
Uradi:
```powershell
git add .
git commit -m "update"
git push
```
onda sacekati Vercel redeploy

---

## PROMENE U FAJLOVIMA

Poslednja velika izmena:
- uvedena dvojezicna struktura sajta
- dodat centralni content layer
- dodat `/en`
- dodat geo redirect
- dodat master context fajl

Izmenjeno / dodato:
- `app/layout.tsx`
- `app/page.tsx`
- `app/en/page.tsx`
- `components/HomePage.tsx`
- `site/content.ts`
- `proxy.ts`
- `MARKO_PREVOZNIK_MASTER_CONTEXT.md`

---

## TRENUTNI STATUS

Zavrseno:
- live landing za slep sluzbu
- centralizovan broj telefona i CTA logika
- srpska verzija
- engleska verzija
- automatski prebacaj stranih posetilaca na engleski
- rucni SR/EN switch
- master context fajl za buduci rad

Projekat je trenutno:
- funkcionalan
- lagan
- spreman za dalji polish
- mnogo laksi za odrzavanje nego pre

---

## SLEDECI KORAK

Prioritet:
1. proveriti live ponašanje `/` i `/en`
2. eventualno dodati mapu ili tacniju coverage sekciju
3. ubaciti jasniji proof ili razlog poverenja
4. srediti project-specific `README.md`
5. po potrebi pushovati izmene live

---

## PRAVILO ZA BUDUCI RAD

Kad god se radi dalje na ovom projektu:
- prvo otvoriti ovaj fajl
- zatim proveriti `site/content.ts`
- zatim proveriti `components/HomePage.tsx`
- zatim proveriti `proxy.ts`
- tek onda menjati copy ili layout

**Ne raditi nasumicne izmene u vise fajlova ako isti podatak vec postoji u `site/content.ts`.**

Ovaj fajl je glavni operativni kontekst za ceo Marko Prevoznik projekat.
