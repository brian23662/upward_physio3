import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact",
  description:
    "Book a consultation or ask a question. We respond within one business day — usually much sooner.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Call",
    value: "(305) 555-0100",
    href: "tel:+13055550100",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@upwardphysio.com",
    href: "mailto:hello@upwardphysio.com",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "123 Wellness Way, Miami, FL 33131",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 7am–7pm · Sat 8am–2pm",
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

                {/* Map — grayscale filter tones it toward our muted palette */}
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-light-gray">
                  <iframe
                    title="Upward Physio location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57366.04841289459!2d-80.23123!3d25.7616798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="280"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{
                      border: 0,
                      filter: "grayscale(40%) contrast(0.95)",
                    }}
                  />
                  <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 shadow-md backdrop-blur-sm">
                    <p className="text-xs font-bold text-navy">Miami, FL</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
