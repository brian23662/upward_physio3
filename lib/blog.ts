/**
 * Sample blog posts. In production you'd swap this for MDX files,
 * a headless CMS (Sanity/Contentful), or markdown files in /content.
 *
 * The slug is the URL path. The body is plain HTML for now — swap for
 * MDX with `next-mdx-remote` when you want richer formatting.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO format
  readingTime: string;
  category: string;
  author: string;
  coverImage: string;
  body: string; // HTML string
}

export const posts: BlogPost[] = [
  {
    slug: "five-exercises-for-lower-back-pain",
    title: "5 Exercises to Fix Lower Back Pain",
    excerpt:
      "Most lower back pain isn't structural — it's movement. Here are five evidence-based exercises that address the real culprits.",
    date: "2026-04-15",
    readingTime: "6 min read",
    category: "Recovery",
    author: "Dr. Sarah Mitchell",
    coverImage:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1200&h=600&fit=crop",
    body: `
      <p>If you've ever woken up with a stiff lower back or pulled something innocuous like reaching for a coffee mug, you know that lower back pain is rarely about the moment it happens. It's the accumulation of weeks — sometimes years — of poor movement patterns and de-conditioning.</p>
      <p>The good news: most non-specific lower back pain responds well to targeted exercise. Here are five that we use with clients regularly.</p>
      <h2>1. Hip hinges</h2>
      <p>The hip hinge teaches your body to load the posterior chain (glutes, hamstrings) instead of dumping force into the lumbar spine. Stand tall, push hips back like closing a car door, and keep a flat spine.</p>
      <h2>2. Dead bug</h2>
      <p>Core stability without spine flexion. Lie on your back, alternate opposite arm and leg lowering while keeping your low back pressed into the floor.</p>
      <h2>3. Glute bridge</h2>
      <p>Activates the glutes and counteracts the all-day sitting that turns them off. Drive through heels, squeeze at the top, control the descent.</p>
      <h2>4. Bird dog</h2>
      <p>Anti-rotation core work. From quadruped, extend opposite arm and leg without letting your hips shift.</p>
      <h2>5. Cat-cow</h2>
      <p>Mobility, not stretching. Move slowly through full spinal flexion and extension to wake up the segments.</p>
      <p><strong>The caveat:</strong> if your pain is sharp, radiates down a leg, or you have any neurological symptoms, see a clinician before exercising. These movements are for general stiffness and weakness — not for diagnosing what's wrong.</p>
    `,
  },
  {
    slug: "the-science-of-concierge-pt",
    title: "The Science of Concierge Physical Therapy",
    excerpt:
      "Why one-on-one care for the full hour outperforms the busy clinic model — and what the research actually says.",
    date: "2026-03-28",
    readingTime: "8 min read",
    category: "Practice",
    author: "Dr. Marcus Chen",
    coverImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
    body: `
      <p>Concierge medicine isn't new, but its application to physical therapy is. The traditional outpatient PT model — where one therapist juggles two or three patients simultaneously — exists because of insurance economics, not because it's clinically optimal.</p>
      <h2>What the research shows</h2>
      <p>Multiple studies in JOSPT and PTJ have demonstrated that one-on-one care produces faster functional gains, better adherence, and fewer total visits to discharge compared to multi-patient models. The mechanism is straightforward: more attention, better cueing, faster progression.</p>
      <h2>The hidden cost of "covered" PT</h2>
      <p>Insurance-based PT is rarely "free." Co-pays, time spent, and longer treatment durations add up. When you account for the additional visits required and the slower return to function, concierge care often comes out comparable — or better — when measured per outcome instead of per visit.</p>
      <p>The point isn't that concierge is for everyone. It's that the model exists because the conventional approach has real, measurable limitations.</p>
    `,
  },
  {
    slug: "preventing-running-injuries",
    title: "Why Most Runners Get Injured (And How to Avoid It)",
    excerpt:
      "Running injuries are predictable. Here's the framework we use to keep recreational and competitive runners healthy.",
    date: "2026-03-10",
    readingTime: "7 min read",
    category: "Performance",
    author: "Dr. Aisha Patel",
    coverImage:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=600&fit=crop",
    body: `
      <p>Roughly 50% of recreational runners experience an injury serious enough to interrupt training each year. That number is astonishing — and it's almost entirely preventable.</p>
      <h2>The training error problem</h2>
      <p>The vast majority of running injuries trace back to training errors: too much volume, too soon. The classic 10% rule (don't increase weekly mileage by more than 10%) is a useful starting point, but most injuries happen during transition periods — the first few weeks of a new training block.</p>
      <h2>Strength training is non-negotiable</h2>
      <p>Runners who don't strength train get injured at significantly higher rates than those who do. Two sessions per week of basic compound lifts (squats, deadlifts, single-leg work) buys enormous resilience.</p>
      <h2>Cadence matters more than form</h2>
      <p>Cadence (steps per minute) is one of the few running metrics with strong evidence behind it. Most amateur runners benefit from increasing cadence by 5-10%, which reduces ground reaction forces and overstride.</p>
    `,
  },
  {
    slug: "ergonomics-for-remote-work",
    title: "Ergonomics for Remote Work: A Therapist's Guide",
    excerpt:
      "Three years of working from home has produced a wave of preventable injuries. Here's how to set up a workspace that doesn't break you.",
    date: "2026-02-22",
    readingTime: "5 min read",
    category: "Wellness",
    author: "Dr. Tom Reyes",
    coverImage:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&h=600&fit=crop",
    body: `
      <p>Remote work was a public health experiment we never planned. The result: a wave of neck, shoulder, and lower back pain in people who used to be just fine.</p>
      <h2>The basics, done right</h2>
      <p>Monitor at eye level. Elbows at 90 degrees. Feet flat on the floor or on a footrest. These aren't suggestions — they're the floor for sustainable computer work.</p>
      <h2>The thing nobody tells you</h2>
      <p>The best ergonomic setup is the one you change throughout the day. Sit, stand, walk a lap, take a call from the couch. Static loading — even good static loading — is what damages tissue over time.</p>
      <h2>Movement breaks that actually work</h2>
      <p>Every 45 minutes, get up. Walk for two minutes, do five shoulder rolls, and stretch your hip flexors. This isn't optional if you want to remain functional after age 40.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  // Sort newest first
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
