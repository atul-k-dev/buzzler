'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const ease = [0.22, 1, 0.36, 1] as const;

interface Post {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    id: 1,
    category: 'INSIGHTS',
    date: '/APR 22, 2025',
    title: 'From Data to Decisions: How AI Turns Insights into Action',
    excerpt:
      "AI doesn't just collect data—it transforms it into actionable steps that grow your business.",
    image: '/blog-1.png',
    featured: true,
  },
  {
    id: 2,
    category: 'INSIGHTS',
    date: '/APR 22, 2025',
    title: 'AI Personalization: Turning Browsers into Buyers',
    excerpt:
      'See how AI personalization can increase sales by delivering shopping experienc...',
    image: '/blog-2.png',
  },
  {
    id: 3,
    category: 'AI STRATEGY',
    date: '/APR 22, 2025',
    title: 'The Hidden Costs of Not Automating Your Business',
    excerpt:
      'Delaying automation can cost your business more than you think. Learn the...',
    image: '/blog-3.png',
  },
];

const LatestInsightsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative py-20 lg:py-28 bg-background overflow-hidden z-10"
    >
      {/* Top Divider */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease }}
        className="max-w-7xl mx-auto px-6 mb-12"
      >
        <div className="w-full h-[1px] bg-border relative">
          <div className="absolute top-0 left-0 w-32 h-[4px] bg-foreground/60"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }} />
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase font-mono">/WHAT WE BUILD</span>
        </div>
      </motion.div>


      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* ── Posts Grid ───────────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-6 items-start"
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 36 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className={`group cursor-pointer flex flex-col ${post.featured ? '' : ' '
                }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-sm mb-5 ${post.featured
                  ? 'aspect-[4/3] lg:aspect-[16/11]'
                  : 'aspect-[4/3]'
                  }`}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes={
                    post.featured
                      ? '(max-width: 1024px) 100vw, 55vw'
                      : '(max-width: 1024px) 100vw, 22vw'
                  }

                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)'
                  }}

                />
                {/* accent gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Meta row */}
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] font-mono uppercase text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                  {post.category}
                </span>
                <span className="text-[10px] tracking-[0.15em] font-mono text-muted-foreground">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`font-bold leading-snug text-foreground mb-3 group-hover:text-accent transition-colors duration-300 ${post.featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                  }`}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>

              {/* Read more indicator */}
              <div className="mt-4 flex items-center gap-1.5 text-[11px] tracking-widest font-mono uppercase text-accent opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                Read article <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile "More insights" link */}
        <div className="mt-10 flex sm:hidden justify-center">
          <a
            href="#"
            className="flex items-center gap-2 border border-border rounded-sm px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-all duration-300"
          >
            More insights <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestInsightsSection;
