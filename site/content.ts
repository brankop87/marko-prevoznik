export const locales = ["sr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sr";

export type SiteContent = {
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
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  process: {
    title: string;
    stepLabel: string;
    steps: Array<{
      n: string;
      title: string;
      desc: string;
    }>;
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
};

const sharedCompany = {
  name: "Marko Prevoznik",
  phoneRaw: "066006299",
  phoneDisplay: "066 006 299",
  phoneTel: "+38166006299",
};

const siteContent: Record<Locale, SiteContent> = {
  sr: {
    company: {
      ...sharedCompany,
      logoAlt: "Marko Prevoznik logo",
      serviceLine: "Slep sluzba 0-24",
      area: "Cerovac, Smederevska Palanka i okolina (sire po dogovoru)",
      areaShort: "Cerovac / Smederevska Palanka • sire po dogovoru",
      estimateNote: "Cene zavise od vrste vozila i relacije - pozovite za brzu procenu.",
    },
    seo: {
      title: "Marko Prevoznik | Slep sluzba 0-24 | Cerovac, Smederevska Palanka",
      description:
        "Slep sluzba i prevoz vozila 0-24. Cerovac, Smederevska Palanka i okolina (sire po dogovoru). Pozovi 066006299.",
    },
    navigation: {
      call: "Pozovi",
      viber: "Viber",
      whatsapp: "WhatsApp",
      switchLabel: "EN",
    },
    hero: {
      availability: "Dostupno 0-24 • sire po dogovoru",
      title: "Slep sluzba i prevoz vozila ",
      titleAccent: "0-24",
      areaLine: "Cerovac • Smederevska Palanka • okolina (sire po dogovoru)",
      description:
        "Prevoz pokvarenih automobila, prikolica i manjih vozila. Brz dogovor, siguran utovar i pouzdan transport do servisa ili zeljene lokacije.",
      callNow: "Pozovi odmah",
      sendLocationViber: "Posalji lokaciju (Viber)",
      sendLocationWhatsApp: "Posalji lokaciju (WhatsApp)",
      badges: ["Brz dolazak", "Siguran prevoz", "Korektan dogovor"],
      cardTitle: "Kontakt 0-24",
      cardPrimaryCta: "Pozovi",
    },
    services: {
      title: "Sta radimo",
      subtitle: "Jasno, brzo i bez komplikacija.",
      items: [
        {
          title: "Slep pokvarenih vozila",
          desc: "Kada auto ne pali, ima kvar ili ne moze da se krece.",
        },
        {
          title: "Prevoz prikolica i manjih vozila",
          desc: "Siguran transport do zeljene destinacije.",
        },
        {
          title: "Prevoz do servisa / tehnickog",
          desc: "Preuzimanje i isporuka po dogovoru.",
        },
        {
          title: "Sire relacije po dogovoru",
          desc: "Cerovac, Palanka i sire - pozovite da proverimo dostupnost.",
        },
      ],
    },
    process: {
      title: "Kako ide dogovor",
      stepLabel: "Korak",
      steps: [
        {
          n: "1",
          title: "Pozovete ili posaljete lokaciju",
          desc: "Viber/WhatsApp ili direktan poziv.",
        },
        {
          n: "2",
          title: "Dogovorimo cenu i vreme dolaska",
          desc: "Brza procena prema vozilu i relaciji.",
        },
        {
          n: "3",
          title: "Dolazimo i vozimo sigurno do destinacije",
          desc: "Utovar i transport bez stresa.",
        },
      ],
    },
    coverage: {
      title: "Gde radimo",
      description:
        "Cerovac i Smederevska Palanka, kao i okolina. Sire relacije po dogovoru - pozovite da proverimo dostupnost.",
      contactTitle: "Kontakt 0-24",
    },
    footer: {
      rights: "Marko Prevoznik - Slep sluzba 0-24 • Cerovac / Smederevska Palanka",
    },
    mobileBar: {
      call: "Pozovi",
      viber: "Viber",
      whatsappShort: "WA",
    },
  },
  en: {
    company: {
      ...sharedCompany,
      logoAlt: "Marko Prevoznik logo",
      serviceLine: "Tow truck service 24/7",
      area: "Cerovac, Smederevska Palanka and surrounding area (longer routes by arrangement)",
      areaShort: "Cerovac / Smederevska Palanka • longer routes by arrangement",
      estimateNote: "Pricing depends on the vehicle type and distance - call for a quick estimate.",
    },
    seo: {
      title: "Marko Prevoznik | 24/7 Tow Truck Service | Cerovac, Smederevska Palanka",
      description:
        "24/7 tow truck service and vehicle transport. Cerovac, Smederevska Palanka and surrounding area, with longer routes by arrangement. Call 066006299.",
    },
    navigation: {
      call: "Call",
      viber: "Viber",
      whatsapp: "WhatsApp",
      switchLabel: "SR",
    },
    hero: {
      availability: "Available 24/7 • longer routes by arrangement",
      title: "Tow truck service and vehicle transport ",
      titleAccent: "24/7",
      areaLine: "Cerovac • Smederevska Palanka • surrounding area (longer routes by arrangement)",
      description:
        "Transport for broken-down cars, trailers, and smaller vehicles. Fast coordination, safe loading, and reliable transport to a repair shop or your chosen destination.",
      callNow: "Call now",
      sendLocationViber: "Send location (Viber)",
      sendLocationWhatsApp: "Send location (WhatsApp)",
      badges: ["Fast arrival", "Safe transport", "Fair agreement"],
      cardTitle: "24/7 contact",
      cardPrimaryCta: "Call",
    },
    services: {
      title: "What we do",
      subtitle: "Simple, fast, and without complications.",
      items: [
        {
          title: "Towing broken-down vehicles",
          desc: "When your car will not start, has a fault, or cannot move.",
        },
        {
          title: "Transport of trailers and smaller vehicles",
          desc: "Safe transport to your chosen destination.",
        },
        {
          title: "Transport to a repair shop / inspection",
          desc: "Pickup and delivery by arrangement.",
        },
        {
          title: "Longer routes by arrangement",
          desc: "Cerovac, Palanka, and beyond - call to check availability.",
        },
      ],
    },
    process: {
      title: "How it works",
      stepLabel: "Step",
      steps: [
        {
          n: "1",
          title: "You call or send your location",
          desc: "Via Viber, WhatsApp, or a direct phone call.",
        },
        {
          n: "2",
          title: "We agree on the price and arrival time",
          desc: "A quick estimate based on the vehicle and route.",
        },
        {
          n: "3",
          title: "We arrive and transport safely to the destination",
          desc: "Loading and transport without stress.",
        },
      ],
    },
    coverage: {
      title: "Where we operate",
      description:
        "Cerovac and Smederevska Palanka, including the surrounding area. Longer routes are available by arrangement - call to check availability.",
      contactTitle: "24/7 contact",
    },
    footer: {
      rights: "Marko Prevoznik - 24/7 tow truck service • Cerovac / Smederevska Palanka",
    },
    mobileBar: {
      call: "Call",
      viber: "Viber",
      whatsappShort: "WA",
    },
  },
};

export function getSiteContent(locale: Locale): SiteContent {
  return siteContent[locale] ?? siteContent[defaultLocale];
}

export function viberLink(phoneTel: string) {
  return `viber://chat?number=${phoneTel.replace("+", "")}`;
}

export function whatsappLink(phoneTel: string) {
  return `https://wa.me/${phoneTel.replace("+", "")}`;
}
