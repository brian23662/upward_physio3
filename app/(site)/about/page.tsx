import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description:
    "Learn about Upward Physio's mission, values, and the doctors of physical therapy who lead every visit.",
};

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Lead Therapist, DPT",
    bio: "15+ years treating elite athletes and weekend warriors alike. Believes the best therapy meets people where they are.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Senior Clinician, DPT, OCS",
    bio: "Board-certified orthopedic specialist focused on post-surgical rehab and complex pain cases.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Performance Lead, DPT, CSCS",
    bio: "Bridges rehab and performance training. Works with collegiate athletes and corporate executives.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop",
  },
  {
    name: "Dr. Tom Reyes",
    role: "Mobile Care Specialist, DPT",
    bio: "Leads our home-visit program. Believes recovery should fit your life, not interrupt it.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=600&fit=crop",
  },
];

const values = [
  {
    title: "Person-first",
    body: "Every plan starts with who you are, what you do, and where you want to go. The protocol comes second.",
  },
  {
    title: "Evidence-led",
    body: "We treat with what works. That means staying current, measuring outcomes, and adjusting fast.",
  },
  {
    title: "Honest progress",
    body: "We tell you what's working and what isn't. No fluff, no over-promising, no extra visits for the sake of it.",
  },
  {
    title: "Movement is medicine",
    body: "We don't just treat injuries — we teach you how to move so they don't come back.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 grain-overlay sm:pt-40 sm:pb-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              About us
            </p>
            <h1
              className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Helping people move upward — physically, mentally, and in life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Upward Physio was founded on a simple idea: physical therapy
              should fit your life. Not the other way around.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="eyebrow">Our story</p>
              <h2
                className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                Built by clinicians frustrated with the status quo
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-navy/75 sm:text-lg">
                <p>
                  After years working in high-volume clinics where therapists
                  juggled three patients at once, our founder Dr. Sarah Mitchell
                  knew something had to give. Patients deserved real attention.
                  Therapists deserved to actually practice their craft.
                </p>
                <p>
                  Upward Physio is the answer. One therapist. One patient.
                  One full hour. Treatment delivered wherever it makes the most
                  sense — your home gym, your office, our clinic.
                </p>
                <p>
                  We're a small, deliberate team. We treat fewer patients on
                  purpose, so the ones we work with get everything we have.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION CALLOUT */}
      <section className="bg-light-gray/40 py-24 sm:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Our mission</p>
              <p
                className="mt-6 text-2xl font-medium leading-snug text-navy sm:text-3xl lg:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                To help every person we work with move better, feel stronger,
                and trust their body again — through care that's personal,
                proven, and genuinely human.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Meet the team"
            title="Doctors of physical therapy. Every single one."
            description="No techs running sessions. No assistants picking up the slack. The clinician you book is the clinician you see."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="group">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-light-gray">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-navy py-24 sm:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What we stand for"
            title="Our values, in plain language"
            invert
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Work with us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
