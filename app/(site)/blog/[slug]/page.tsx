import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-generate static pages at build time for each post
export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      {/* HEADER */}
      <header className="bg-navy pt-32 pb-16 grain-overlay sm:pt-40 sm:pb-20">
        <div className="container-narrow">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>

          <div className="mt-8">
            <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-orange">
              {post.category}
            </span>
            <h1
              className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              {post.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* COVER IMAGE */}
      <div className="container-narrow -mt-12 mb-16 sm:-mt-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-light-gray shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="container-narrow pb-24 sm:pb-32">
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <div className="mt-16 border-t border-light-gray pt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Work with our team
          </Link>
        </div>
      </div>

      {/* Inline styles for the post body — keeps the prose readable
          without pulling in the @tailwindcss/typography plugin. */}
      <style>{`
        .prose-content {
          font-size: 1.125rem;
          line-height: 1.75;
          color: rgba(20, 54, 70, 0.85);
        }
        .prose-content p {
          margin-block: 1.25em;
        }
        .prose-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #143646;
          letter-spacing: -0.02em;
          margin-top: 2.5em;
          margin-bottom: 0.75em;
          line-height: 1.2;
        }
        .prose-content strong {
          color: #143646;
          font-weight: 700;
        }
        .prose-content a {
          color: #e6661a;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
      `}</style>
    </article>
  );
}
