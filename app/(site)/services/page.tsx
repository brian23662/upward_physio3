import Link from "next/link";
import {
  HeartHandshake,
  Activity,
  Trophy,
  ShieldCheck,
  Building2,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Services",
  description:
    "Concierge physical therapy, orthopedic rehab, performance training, injury prevention, and workplace wellness — all delivered 1:1 by doctors of physical therapy.",
};

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: "concierge",
    icon: HeartHandshake,
    title: "Concierge Physical Therapy",
    tagline: "Care that comes to you",
    description:
      "Our flagship offering. A doctor of physical therapy comes to your home, office, or trains you in our clinic — depending on what fits your life. Same therapist every visit, full hour every time.",
    features: [
      "Home, office, or in-clinic options",
      "Same DPT every session",
      "60-minute appointments",
      "All equipment provided",
      "Same-week availability",
    ],
  },
  {
    id: "orthopedic",
    icon: Activity,
    title: "Orthopedic Rehab & Injury Recovery",
    tagline: "Evidence-based recovery, expertly guided",
    description:
      "Whether you're rehabbing post-surgery, recovering from a sprain, or working through chronic pain, we build a structured program around your specific diagnosis — and adjust it as you progress.",
    features: [
      "Post-surgical rehabilitation",
      "ACL, rotator cuff, hip & knee replacements",
      "Chronic pain management",
      "Sports injuries & overuse syndromes",
      "Return-to-sport testing",
    ],
  },
  {
    id: "performance",
    icon: Trophy,
    title: "Strength & Conditioning Performance",
    tagline: "For when good isn't enough",
    description:
      "For athletes and active individuals who want more than rehab. We blend physical therapy expertise with sport-specific training to push you past plateaus — safely and measurably.",
    features: [
      "Sport-specific programming",
      "Movement assessment & analysis",
      "Strength & power development",
      "Speed, agility, conditioning",
      "Tracked outcomes via testing",
    ],
  },
  {
    id: "prevention",
    icon: ShieldCheck,
    title: "Injury Prevention Programs",
    tagline: "Catch problems before they catch you",
    description:
      "The best injury is the one that never happens. Our prevention programs use comprehensive movement screening to identify weak links and build customized training to address them.",
    features: [
      "Functional movement screening",
      "Customized corrective exercise plans",
      "Quarterly check-ins & re-testing",
      "Pre-season athletic prep",
      "Group programming for teams",
    ],
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Workplace Wellness & Corporate Consulting",
    tagline: "Healthier teams, better work",
    description:
      "Bring physical therapy expertise to your workplace. We design programs that reduce injury rates, improve ergonomics, and educate your team — all measurable, all tailored to your industry.",
    features: [
      "On-site ergonomic assessments",
      "Lunch & learn workshops",
      "Injury risk reduction programs",
      "Executive 1:1 sessions",
      "Quarterly wellness reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 grain-overlay sm:pt-40 sm:pb-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              Services
            </p>
            <h1
              className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Five focused offerings. One consistent standard.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Every service we offer is delivered 1:1 by a doctor of physical
              therapy. Choose what fits your goals — or talk to us if you're
              not sure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — alternating sections */}
      <div className="divide-y divide-light-gray">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const reverse = idx % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-24 py-24 sm:py-32"
            >
              <div className="container-wide">
                <div
                  className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal>
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
                      {service.tagline}
                    </p>
                    <h2
                      className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl"
                      style={{ letterSpacing: "-0.025em" }}
                    >
                      {service.title}
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-navy/75 sm:text-lg">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Get started with this program
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <div className="rounded-2xl border border-light-gray bg-white p-8 shadow-sm sm:p-10">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-navy/50">
                        What&apos;s included
                      </p>
                      <ul className="mt-6 space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </div>
                            <span className="text-sm text-navy/80 sm:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
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
              Not sure which is right for you?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Let&apos;s talk. A free 20-minute consultation will help us point
              you toward the right program — or refer you elsewhere if we&apos;re
              not the fit.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book a free consult
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
