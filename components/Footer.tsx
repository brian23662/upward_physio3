import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const footerLinks = {
  Practice: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#concierge", label: "Concierge PT" },
    { href: "/services#orthopedic", label: "Orthopedic Rehab" },
    { href: "/services#performance", label: "Performance Training" },
    { href: "/services#prevention", label: "Injury Prevention" },
    { href: "/services#corporate", label: "Workplace Wellness" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-wide py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-light.svg"
                alt="Upward Physio"
                width={241}
                height={320}
                className="h-[320px] w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Premium concierge physical therapy. We meet you where you are — at
              home, in clinic, or at work — and help you move upward.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="rounded-full border border-white/20 p-2.5 transition-colors hover:border-primary hover:bg-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="rounded-full border border-white/20 p-2.5 transition-colors hover:border-primary hover:bg-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="rounded-full border border-white/20 p-2.5 transition-colors hover:border-primary hover:bg-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              Practice
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.Practice.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-orange" />
                <span>
                  Serving the Denver
                  <br />
                  metro area
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent-orange" />
                <a
                  href="mailto:dj@upwardphysio.com"
                  className="transition-colors hover:text-white"
                >
                  dj@upwardphysio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Upward Physio. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
