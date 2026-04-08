import Image from "next/image";
import { getSiteContent, type Locale, viberLink, whatsappLink } from "@/site/content";

type HomePageProps = {
  locale: Locale;
};

export default function HomePage({ locale }: HomePageProps) {
  const content = getSiteContent(locale);
  const isEnglish = locale === "en";
  const switchHref = isEnglish ? "/" : "/en";

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-set.png"
              alt={content.company.logoAlt}
              width={44}
              height={44}
              className="rounded-md border border-white/10 bg-black/30 object-cover"
              priority
            />
            <div className="leading-tight">
              <div className="text-base font-semibold">{content.company.name}</div>
              <div className="text-xs text-white/70">{content.company.serviceLine}</div>
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={switchHref}
              className="rounded-xl border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/5"
            >
              {content.navigation.switchLabel}
            </a>
            <a
              href={`tel:${content.company.phoneTel}`}
              className="rounded-xl bg-[rgb(var(--accent))] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              {content.navigation.call}: {content.company.phoneRaw}
            </a>
            <a
              href={viberLink(content.company.phoneTel)}
              className="rounded-xl border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/5"
            >
              {content.navigation.viber}
            </a>
            <a
              href={whatsappLink(content.company.phoneTel)}
              className="rounded-xl border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/5"
            >
              {content.navigation.whatsapp}
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pb-8 pt-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
              {content.hero.availability}
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              {content.hero.title}
              <span className="text-[rgb(var(--accent))]">{content.hero.titleAccent}</span>
            </h1>

            <p className="mt-3 text-white/80">{content.hero.areaLine}</p>

            <p className="mt-5 text-base text-white/80">{content.hero.description}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${content.company.phoneTel}`}
                className="rounded-2xl bg-[rgb(var(--accent))] px-6 py-4 text-center text-base font-bold text-black hover:opacity-90"
              >
                {content.hero.callNow}: {content.company.phoneRaw}
              </a>
              <div className="flex gap-3">
                <a
                  href={viberLink(content.company.phoneTel)}
                  className="flex-1 rounded-2xl border border-white/15 px-5 py-4 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  {content.hero.sendLocationViber}
                </a>
                <a
                  href={whatsappLink(content.company.phoneTel)}
                  className="flex-1 rounded-2xl border border-white/15 px-5 py-4 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  {content.hero.sendLocationWhatsApp}
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
              {content.hero.badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm font-semibold text-white/90">{content.hero.cardTitle}</div>
              <div className="mt-2 text-2xl font-extrabold text-[rgb(var(--accent))]">
                {content.company.phoneRaw}
              </div>
              <div className="mt-2 text-sm text-white/75">{content.company.areaShort}</div>
              <div className="mt-5 grid gap-3">
                <a
                  href={`tel:${content.company.phoneTel}`}
                  className="rounded-2xl bg-[rgb(var(--accent))] px-5 py-4 text-center text-base font-bold text-black hover:opacity-90"
                >
                  {content.hero.cardPrimaryCta}
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={viberLink(content.company.phoneTel)}
                    className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                  >
                    {content.navigation.viber}
                  </a>
                  <a
                    href={whatsappLink(content.company.phoneTel)}
                    className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                  >
                    {content.navigation.whatsapp}
                  </a>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/60">{content.company.estimateNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-extrabold">{content.services.title}</h2>
        <p className="mt-2 text-white/70">{content.services.subtitle}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {content.services.items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 rounded-2xl bg-[rgb(var(--accent))]/20 ring-1 ring-white/10" />
                <div>
                  <div className="text-base font-bold">{item.title}</div>
                  <div className="mt-1 text-sm text-white/75">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
          <h2 className="text-2xl font-extrabold">{content.process.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {content.process.steps.map((step) => (
              <div key={step.n} className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-sm text-white/70">
                  {content.process.stepLabel} {step.n}
                </div>
                <div className="mt-1 text-base font-bold">{step.title}</div>
                <div className="mt-2 text-sm text-white/75">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-2xl font-extrabold">{content.coverage.title}</h2>
        <p className="mt-2 text-white/75">{content.coverage.description}</p>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-base font-bold">{content.coverage.contactTitle}</div>
              <div className="mt-1 text-sm text-white/75">{content.company.estimateNote}</div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${content.company.phoneTel}`}
                className="rounded-2xl bg-[rgb(var(--accent))] px-6 py-3 text-center text-sm font-bold text-black hover:opacity-90"
              >
                {content.navigation.call}: {content.company.phoneRaw}
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={viberLink(content.company.phoneTel)}
                  className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  {content.navigation.viber}
                </a>
                <a
                  href={whatsappLink(content.company.phoneTel)}
                  className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/5"
                >
                  {content.navigation.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/30 pb-24 pt-8 sm:pb-8">
        <div className="mx-auto max-w-5xl px-4 text-xs text-white/60">
          © {new Date().getFullYear()} {content.footer.rights}
        </div>
        <div className="mx-auto mt-4 flex max-w-5xl justify-start px-4">
          <a
            href="https://petkovicsolutions.com"
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex rounded-md px-1.5 py-1 text-[10px] tracking-[0.12em] text-white/40 underline-offset-4 transition hover:text-white/65 hover:underline"
          >
            Powered by Petkovic Solutions
          </a>
        </div>
      </footer>

      <div className="fixed bottom-3 left-0 right-0 z-50 sm:hidden">
        <div className="mx-auto flex max-w-md gap-2 px-3">
          <a
            href={switchHref}
            className="rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-center text-sm font-bold text-white"
          >
            {content.navigation.switchLabel}
          </a>
          <a
            href={`tel:${content.company.phoneTel}`}
            className="flex-1 rounded-2xl bg-[rgb(var(--accent))] px-4 py-3 text-center text-sm font-extrabold text-black"
          >
            {content.mobileBar.call}
          </a>
          <a
            href={viberLink(content.company.phoneTel)}
            className="flex-1 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-center text-sm font-bold text-white"
          >
            {content.mobileBar.viber}
          </a>
          <a
            href={whatsappLink(content.company.phoneTel)}
            className="flex-1 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-center text-sm font-bold text-white"
          >
            {content.mobileBar.whatsappShort}
          </a>
        </div>
      </div>
    </main>
  );
}
