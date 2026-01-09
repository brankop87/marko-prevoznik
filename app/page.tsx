import Image from "next/image";

const PHONE_RAW = "066006299";
const PHONE_TEL = "+38166006299";

function viberLink() {
  // Viber deep link (works best on mobile with Viber installed)
  return `viber://chat?number=${PHONE_TEL.replace("+", "")}`;
}

function whatsappLink(phoneE164: string) {
  return `https://wa.me/${phoneE164.replace("+", "")}`;
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-set.png"
              alt="Marko Prevoznik logo"
              width={44}
              height={44}
              className="rounded-md border border-white/10 bg-black/30 object-cover"
              priority
            />
            <div className="leading-tight">
              <div className="text-base font-semibold">Marko Prevoznik</div>
              <div className="text-xs text-white/70">Šlep služba 0-24</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Pozovi: {PHONE_RAW}
            </a>
            <a
              href={viberLink()}
              className="rounded-xl border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/5"
            >
              Viber
            </a>
            <a
              href={whatsappLink(PHONE_TEL)}
              className="rounded-xl border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/5"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
              Dostupno 0-24 • Šire po dogovoru
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Šlep služba i prevoz vozila{" "}
              <span className="text-[rgb(var(--accent))]">0-24</span>
            </h1>

            <p className="mt-3 text-white/80">
              Cerovac / Smederevska Palanka / okolina (šire po dogovoru)
            </p>

            <p className="mt-5 text-base text-white/80">
              Prevoz pokvarenih automobila, prikolica i manjih vozila. Brz dogovor,
              siguran utovar i pouzdan transport do servisa ili željene lokacije.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-2xl bg-[rgb(var(--accent))] px-6 py-4 text-center text-base font-bold text-black hover:opacity-90"
              >
                Pozovi odmah: {PHONE_RAW}
              </a>
              <div className="flex gap-3">
                <a
                  href={viberLink()}
                  className="flex-1 rounded-2xl border border-white/15 px-5 py-4 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  Pošalji lokaciju (Viber)
                </a>
                <a
                  href={whatsappLink(PHONE_TEL)}
                  className="flex-1 rounded-2xl border border-white/15 px-5 py-4 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  Pošalji lokaciju (WhatsApp)
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">✅ Brz dolazak</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">✅ Siguran prevoz</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">✅ Korektan dogovor</span>
            </div>
          </div>

          {/* Visual card */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white/90">Kontakt 0-24</div>
              <div className="mt-2 text-2xl font-extrabold text-[rgb(var(--accent))]">{PHONE_RAW}</div>
              <div className="mt-2 text-sm text-white/75">
                Cerovac / Smederevska Palanka (šire po dogovoru)
              </div>
              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="rounded-2xl bg-[rgb(var(--accent))] px-5 py-4 text-center text-base font-bold text-black hover:opacity-90"
                >
                  Pozovi
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={viberLink()}
                    className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                  >
                    Viber
                  </a>
                  <a
                    href={whatsappLink(PHONE_TEL)}
                    className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/60">
                Cene zavise od vrste vozila i relacije - pozovite za brzu procenu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-extrabold">Šta radimo</h2>
        <p className="mt-2 text-white/70">Jasno, brzo i bez komplikacija.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { title: "Šlep pokvarenih vozila", desc: "Kada auto ne pali, ima kvar ili ne može da se kreće." },
            { title: "Prevoz prikolica i manjih vozila", desc: "Siguran transport do željene destinacije." },
            { title: "Prevoz do servisa / tehničkog", desc: "Preuzimanje i isporuka po dogovoru." },
            { title: "Šire relacije po dogovoru", desc: "Cerovac, Palanka i šire — pozovite da proverimo dostupnost." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 rounded-2xl bg-[rgb(var(--accent))]/20 ring-1 ring-white/10" />
                <div>
                  <div className="text-base font-bold">{c.title}</div>
                  <div className="mt-1 text-sm text-white/75">{c.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 pb-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
          <h2 className="text-2xl font-extrabold">Kako ide dogovor</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { n: "1", t: "Pozovete ili pošaljete lokaciju", d: "Viber/WhatsApp ili direktan poziv." },
              { n: "2", t: "Dogovorimo cenu i vreme dolaska", d: "Brza procena prema vozilu i relaciji." },
              { n: "3", t: "Dolazimo i vozimo sigurno do destinacije", d: "Utovar i transport bez stresa." },
            ].map((s) => (
              <div key={s.n} className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-sm text-white/70">Korak {s.n}</div>
                <div className="mt-1 text-base font-bold">{s.t}</div>
                <div className="mt-2 text-sm text-white/75">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold">Gde radimo</h2>
        <p className="mt-2 text-white/75">
          Cerovac i Smederevska Palanka, kao i okolina. Šire relacije po dogovoru, pozovite da proverimo dostupnost.
        </p>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-base font-bold">Kontakt 0-24</div>
              <div className="mt-1 text-sm text-white/75">
                Cene zavise od vrste vozila i relacije - pozovite za brzu procenu.
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-2xl bg-[rgb(var(--accent))] px-6 py-3 text-center text-sm font-bold text-black hover:opacity-90"
              >
                Pozovi: {PHONE_RAW}
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={viberLink()}
                  className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  Viber
                </a>
                <a
                  href={whatsappLink(PHONE_TEL)}
                  className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile bar */}
      <div className="fixed bottom-3 left-0 right-0 z-50 sm:hidden">
        <div className="mx-auto flex max-w-md gap-2 px-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex-1 rounded-2xl bg-[rgb(var(--accent))] px-4 py-3 text-center text-sm font-extrabold text-black"
          >
            Pozovi
          </a>
          <a
            href={viberLink()}
            className="flex-1 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-center text-sm font-bold text-white"
          >
            Viber
          </a>
          <a
            href={whatsappLink(PHONE_TEL)}
            className="flex-1 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-center text-sm font-bold text-white"
          >
            WA
          </a>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-black/30 py-8">
        <div className="mx-auto max-w-5xl px-4 text-xs text-white/60">
          <div>
            © {year} Marko Prevoznik - Šlep služba 0-24 - Cerovac / Smederevska Palanka
          </div>
          <div className="mt-2 text-[11px] text-white/45">
            Powered by{" "}
            <span className="font-semibold text-white/55">Petković Solutions</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
