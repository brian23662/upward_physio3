import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact",
  description:
    "Send DJ a note. He responds personally within one business day — usually much sooner.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dj@upwardphysio.com",
    href: "mailto:dj@upwardphysio.com",
  },
  {
    icon: MapPin,
    label: "Service area",
    value: "In-home & partner gyms across the Denver metro area",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Evenings & weekends, by appointment",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 grain-overlay sm:pt-40 sm:pb-24">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              Get in touch
            </p>
            <h1
              className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Let&apos;s start the conversation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Send us a note. We respond within one business day — usually
              much sooner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-light-gray bg-light-gray/30 p-8 sm:p-10">
                  <h2 className="text-xl font-bold text-navy">Reach us directly</h2>
                  <ul className="mt-8 space-y-6">
                    {contactInfo.map((item) => {
                      const Icon = item.icon;
                      const content = (
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-navy/50">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm font-medium text-navy">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      );

                      return (
                        <li key={item.label}>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="block transition-opacity hover:opacity-70"
                            >
                              {content}
                            </a>
                          ) : (
                            content
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* What happens next — replaces a "find us" map since this
                    is a mobile practice with no fixed clinic address. */}
                <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    What happens next
                  </p>
                  <ol className="mt-6 space-y-4 text-sm leading-relaxed text-navy/80">
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">1.</span>
                      <span>DJ reads your note personally — usually within a few hours.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">2.</span>
                      <span>He&apos;ll reply with a few times for a free 20-minute intro call.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">3.</span>
                      <span>If it&apos;s a fit, you&apos;ll book your first session — at home or at a partner gym.</span>
                    </li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
