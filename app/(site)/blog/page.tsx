import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Blog",
  description:
    "Field notes from DJ Keim, DPT — practical, evidence-led writing on recovery, performance, prevention, and movement.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-32 pb-20 grain-overlay sm:pt-40 sm:pb-28">
        <div className="container-wide">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-orange">
              Blog
            </p>
            <h1
              className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Field notes from a clinician who treats real people.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Practical, evidence-led writing on recovery, performance, and how
              to keep your body working for the long haul.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED + GRID */}
      <section className="py-24 sm:py-32">
        <div className="container-wide">
          {/* Featured */}
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-light-gray">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-medium text-navy/60">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {featured.readingTime}
                  </span>
                </div>
                <h2
                  className="mt-5 text-3xl font-bold tracking-tight text-navy transition-colors group-hover:text-primary sm:text-4xl"
                  style={{ letterSpacing: "-0.025em" }}
                >
                  {featured.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-navy/70 sm:text-lg">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-light-gray">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-xs font-medium text-navy/60">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                      {post.category}
                    </span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-navy transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
