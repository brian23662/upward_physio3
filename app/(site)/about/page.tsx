import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import { ABOUT, HOW_IT_WORKS } from "@/lib/about";

export const metadata = {
  title: "About",
  description:
    "Upward Physio is DJ Keim, DPT, CSCS — a Denver-area concierge physical therapist building a practice around in-home and partner-gym care.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 grain-overlay sm:pt-40 sm:pb-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              {ABOUT.eyebrow}
            </p>
            <h1
              className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              {ABOUT.headingLead}{" "}
              <span className="italic text-accent-orange">
                {ABOUT.headingItalic}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Upward Physio is built and run by one clinician — Daniel
              &ldquo;DJ&rdquo; Keim. The practice you reach is the
              practice that treats you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BIO + CREDENTIALS */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Bio paragraphs */}
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">The clinician</p>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                Seven years across three modes of care
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/80 sm:text-lg">
                {ABOUT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Credentials sidebar */}
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="sticky top-28 rounded-2xl border border-light-gray bg-light-gray/30 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Credentials
                </p>
                <dl className="mt-8 space-y-7">
                  {ABOUT.credentials.map((c) => (
                    <div key={c.label}>
                      <dt className="text-xs font-bold uppercase tracking-wider text-navy/50">
                        {c.label}
                      </dt>
                      <dd className="mt-2 text-sm font-medium leading-relaxed text-navy sm:text-base">
                        {c.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY PULL-QUOTE */}
      <section className="border-t border-light-gray/60 bg-gradient-to-b from-white to-light-gray/30 py-24 sm:py-32">
        <div className="container-narrow">
          <Reveal>
            <div className="relative">
              <Quote
                className="absolute -left-2 -top-4 h-16 w-16 text-primary/15"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <blockquote
                className="relative pl-4 text-2xl font-medium leading-snug text-navy sm:text-3xl lg:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                &ldquo;{ABOUT.philosophy}&rdquo;
              </blockquote>
              <p className="mt-8 pl-4 text-sm font-semibold text-primary">
                — DJ Keim, DPT, CSCS
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="eyebrow">{HOW_IT_WORKS.eyebrow}</p>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                {HOW_IT_WORKS.headingLead}{" "}
                <span className="italic text-primary">
                  {HOW_IT_WORKS.headingItalic}
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
                {HOW_IT_WORKS.intro}
              </p>
            </Reveal>
          </div>

          {/* Three steps */}
          <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
            {HOW_IT_WORKS.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <span
                    className="block text-5xl font-bold text-primary/30 sm:text-6xl"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Details strip */}
          <Reveal delay={0.4}>
            <div className="mt-20 grid gap-6 rounded-2xl border border-light-gray bg-light-gray/30 p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
              {HOW_IT_WORKS.details.map((d) => (
                <div key={d.label}>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">
                    {d.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy/80">
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 sm:py-24">
        <div className="container-wide text-center">
          <Reveal>
            <h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              style={{ letterSpacing: "-0.025em" }}
            >
              Ready to see if this is a fit?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Send DJ a note. Free 20-minute intro call, no commitment.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
