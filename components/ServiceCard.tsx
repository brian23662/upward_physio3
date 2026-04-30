"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  HeartHandshake,
  Activity,
  Trophy,
  ShieldCheck,
  Building2,
} from "lucide-react";

// Map of icon names → components. We do the lookup inside this Client
// Component so callers (Server Components) only need to pass a string —
// React components themselves can't cross the server/client boundary.
const iconMap = {
  HeartHandshake,
  Activity,
  Trophy,
  ShieldCheck,
  Building2,
} as const;

export type ServiceIconName = keyof typeof iconMap;

interface ServiceCardProps {
  icon: ServiceIconName;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-light-gray bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-navy/5"
      >
        {/* Accent bar — scales on hover for subtle visual rhythm */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
        />

        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>

        <h3 className="text-xl font-bold tracking-tight text-navy">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary">
          <span>Learn more</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}
