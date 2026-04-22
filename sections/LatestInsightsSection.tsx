'use client';

import React, { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ease = [0.22, 1, 0.36, 1] as const;

interface Post {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    id: 1,
    category: 'BALERT',
    date: '/APR 22, 2025',
    title: 'Travel Together, Stay Organized',
    excerpt:
      "Make every group trip seamless and stress-free with Balert's powerful tools for planning, expense management, and collaboration.",
    image: '/img/cardImg/build1.webp',
    link: 'https://balert.in/',
    featured: true,
  },
  {
    id: 2,
    category: 'VEDABUX',
    date: '/APR 22, 2025',
    title: 'A sacred Farewell to pooja leftovers.',
    excerpt:
      'VedaBux offers a sacred and eco-friendly way to manage your Pooja Left Over Nirmalayam helping devotees complete their worship with gratitude.',
    image: '/img/cardImg/build2.png',
    link: 'https://vedabux.com/',
  },
  {
    id: 3,
    category: 'GROWBIT',
    date: '/APR 22, 2025',
    title: 'Scale Your Business With GrowBit',
    excerpt:
      'Connect with seasoned professionals across the country. From B2B to B2C, startups to enterprises - we are obsessed with scaling your business through our next wave gig marketplace services.',
    image: '/img/cardImg/news3.png',
    link: 'https://growbit.in/',
  },
];

/** Shared article card */
const PostCard = ({ post, i, gridInView }: { post: Post; i: number; gridInView: boolean }) => (
  <motion.article
    key={post.id}
    initial={{ opacity: 0, y: 36 }}
    animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
    transition={{ duration: 0.6, ease, delay: i * 0.12 }}
    className={`group cursor-pointer flex flex-col ${post.featured ? '' : ' '}`}
  >
    <a href={post.link} target='_blank' rel='noopener noreferrer'>
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-sm mb-5 ${
          post.featured ? 'aspect-[4/3] lg:aspect-[16/11]' : 'aspect-[4/3]'
        }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover bg-surface rounded-lg transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={
            post.featured
              ? '(max-width: 1024px) 100vw, 55vw'
              : '(max-width: 1024px) 100vw, 22vw'
          }
          style={{
            clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 50px, 100% 100%, 0 100%)',
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
        className={`font-bold leading-snug text-foreground mb-3 group-hover:text-accent transition-colors duration-300 ${
          post.featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
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
    </a>
  </motion.article>
);

const LatestInsightsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // Separate refs for desktop grid and mobile carousel wrapper
  const desktopGridRef = useRef<HTMLDivElement>(null);
  const mobileGridRef = useRef<HTMLDivElement>(null);

  // Use the desktop ref on desktop, mobile ref on mobile
  const desktopGridInView = useInView(desktopGridRef, { once: true, amount: 0.1 });
  const mobileGridInView = useInView(mobileGridRef, { once: true, amount: 0.1 });

  // Embla carousel (mobile only)
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: false },
    [autoplay.current]
  );

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
          <div
            className="absolute top-0 left-0 w-32 h-[4px] bg-foreground/60"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
          />
          <span className="absolute -top-6 left-0 text-[10px] tracking-widest text-foreground uppercase font-mono">
            /WHAT WE BUILD
          </span>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 pr-0 sm:pr-4 lg:px-8">

        {/* ── Desktop Grid ──────────────────────── */}
        <div
          ref={desktopGridRef}
          className="hidden lg:grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-6 items-start"
        >
          {posts.map((post, i) => (
            <PostCard key={post.id} post={post} i={i} gridInView={desktopGridInView} />
          ))}
        </div>

        {/* ── Mobile Embla Carousel ────────────────────────── */}
        <div className="lg:hidden" ref={mobileGridRef}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pl-1 pr-1">
              {posts.map((post, i) => (
                <div key={post.id} className="flex-[0_0_88%] min-w-0 pl-3">
                  <PostCard post={post} i={i} gridInView={mobileGridInView} />
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default LatestInsightsSection;
