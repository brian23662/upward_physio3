"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "After two failed rounds of PT elsewhere, the team at Upward had me back to running pain-free in eight weeks. The home visits made all the difference.",
    name: "Maria Delgado",
    role: "Marathon Runner",
  },
  {
    quote:
      "Post-surgery rehab that actually felt like progress. They tracked every milestone and pushed me at exactly the right moments.",
    name: "James Reyes",
    role: "ACL Recovery Patient",
  },
  {
    quote:
      "Our team's ergonomic program with Upward dropped reported back issues by 60% in one quarter. They get it.",
    name: "Priya Anand",
    role: "Head of People, TechFirm Co.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute -left-4 -top-4 text-primary/20">
        <Quote className="h-20 w-20" strokeWidth={1.5} />
      </div>

      <div className="relative min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 px-4 text-center sm:px-12"
          >
            <p className="text-xl font-medium leading-relaxed text-navy sm:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-8">
              <p className="text-base font-bold text-navy">{current.name}</p>
              <p className="mt-1 text-sm text-navy/60">{current.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="rounded-full border border-light-gray p-2.5 text-navy transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-primary" : "w-1.5 bg-light-gray"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="rounded-full border border-light-gray p-2.5 text-navy transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
