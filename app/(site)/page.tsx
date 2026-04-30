import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceCard, { type ServiceIconName } from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const services: Array<{
  icon: ServiceIconName;
  title: string;
  description: string;
  href: string;
}> = [
  {
    icon: "HeartHandshake",
    title: "Concierge Physical Therapy",
    description:
      "Personalized 1:1 care delivered at your home, office, or our modern clinic. Built around your life, not the other way around.",
    href: "/services#concierge",
  },
  {
    icon: "Activity",
    title: "Orthopedic Rehab & Recovery",
    description:
      "Evidence-based recovery from surgery, sprains, and chronic pain — guided by clinicians who've seen it all.",
    href: "/services#orthopedic",
  },
  {
    icon: "Trophy",
    title: "Strength & Performance",
    description:
      "For athletes and active individuals chasing peak output. Programmed by therapists who train themselves.",
    href: "/services#performance",
  },
  {
    icon: "ShieldCheck",
    title: "Injury Prevention",
    description:
      "Proactive movement screening and customized training plans that catch problems before they catch you.",
    href: "/services#prevention",
  },
  {
    icon: "Building2",
    title: "Workplace Wellness",
    description:
      "Ergonomic assessments, lunch & learns, and wellness programs that keep your team performing.",
    href: "/services#corporate",
  },
];

const benefits = [
  {
    stat: "1:1",
    label: "One-on-one care",
    description: "Same therapist every visit. No double-booking.",
  },
  {
    stat: "60min",
    label: "Full hour sessions",
    description: "Time enough to assess, treat, and progress.",
  },
  {
    stat: "DPT",
    label: "Doctor-level clinicians",
    description: "Every therapist holds a doctorate. No shortcuts.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-24 grain-overlay sm:pt-40 sm:pb-32">
        {/* Decorative gradient blob */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-teal/30 blur-3xl"
        />

        <div className="container-wide relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent-orange" />
              <span className="text-xs font-medium text-white/80">
                Premium concierge physical therapy
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="mt-8 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Rise Higher.{" "}
              <span className="block text-accent-orange sm:inline">Move Better.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Premium concierge physical therapy that meets you where you are — at
              home, in clinic, or at work. Personalized 1:1 care for recovery,
              performance, and prevention.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors hover:text-accent-orange"
              >
                Explore services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* Hero stats strip */}
          <Reveal delay={0.5}>
            <div className="mt-20 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-8">
              {benefits.map((b) => (
                <div key={b.label}>
                  <div className="text-4xl font-bold text-accent-orange sm:text-5xl">
                    {b.stat}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">
                    {b.label}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-white/60">
                    {b.description}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we do"
            title="Care designed around your life"
            description="Five focused offerings, one consistent standard. Every program is built individually — never templated."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="border-t border-light-gray/60 py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow">Why Upward</p>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                Physical therapy that respects your time and treats you like an adult.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-navy/70 sm:text-lg">
                Most clinics run you through a circuit of machines and call it
                care. We do it differently. Your therapist is your therapist
                — same person, every visit. They know your history, your goals,
                and what's working. That's how progress actually happens.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Read our story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <ol className="space-y-8">
                {[
                  {
                    title: "One therapist, start to finish",
                    body: "No handoffs, no re-explaining. Continuity is the difference between recovery and revisiting.",
                  },
                  {
                    title: "Hour-long sessions, no exceptions",
                    body: "We don't book overlapping patients. The full hour is yours.",
                  },
                  {
                    title: "Treatment in your environment",
                    body: "Recovery happens where you live and work. So that's where we treat.",
                  },
                  {
                    title: "Outcomes-tracked, not visit-counted",
                    body: "We measure what matters: function, range, strength, and getting you back to your life.",
                  },
                ].map((item, i) => (
                  <li
                    key={item.title}
                    className="group relative flex gap-6 border-l-2 border-light-gray pl-8 transition-colors hover:border-primary"
                  >
                    <span
                      className="absolute -left-px top-0 -translate-x-1/2 bg-light-gray/40 px-2 font-bold text-primary/40 transition-colors group-hover:text-primary"
                      style={{ fontSize: "0.9rem", letterSpacing: "0.05em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy/70 sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-b from-white to-light-gray/30 py-24 sm:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What clients say"
            title="Results that compound"
          />

          <div className="mt-16">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"
        />
        <div className="container-wide relative text-center">
          <Reveal>
            <h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.025em" }}
            >
              Ready to move better?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              A 20-minute consultation is all it takes to map your path forward.
              No pressure, no commitments — just a real conversation.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book your consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
