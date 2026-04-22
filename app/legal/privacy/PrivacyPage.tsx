'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CompanyLayout from '@/components/CompanyLayout';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <FadeIn delay={0.05} className="border-t border-border pt-8 pb-4">
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <span className="text-[10px] tracking-widest font-mono text-muted-foreground uppercase">{number}</span>
          <h2 className="text-lg font-black mt-1">{title}</h2>
        </div>
        <div className="md:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}

const LAST_UPDATED = 'April 22, 2026';

export default function PrivacyPage() {
  return (
    <CompanyLayout
      label="/legal"
      title="Privacy Policy"
      subtitle={`Last updated: ${LAST_UPDATED}`}
    >
      <FadeIn className="mb-10">
        <div className="bg-surface border border-border rounded-2xl p-6 text-sm text-muted-foreground leading-relaxed">
          Buzzler Technologies is committed to protecting your privacy. This policy explains what
          information we collect, how we use it, and your rights over your data. If you have any
          questions, please{' '}
          <Link href="/contact" className="text-foreground font-semibold hover:text-accent transition-colors">
            contact us
          </Link>
          .
        </div>
      </FadeIn>

      <div className="flex flex-col gap-10 mb-16">
        <Section number="/01" title="Information We Collect">
          <p>
            We collect information you provide directly — such as your name, email address, and
            project details when you contact us through our website or project intake forms.
          </p>
          <p>
            We may also automatically collect usage data including IP addresses, browser type, pages
            visited, and time spent on our website through analytics tools such as Vercel Analytics.
            This data is aggregated and anonymised where possible.
          </p>
        </Section>

        <Section number="/02" title="How We Use Your Information">
          <p>We use collected information to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Respond to enquiries and deliver project services</li>
            <li>Communicate about project status, invoices, and updates</li>
            <li>Improve our website and service offerings</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third parties for marketing
            purposes.
          </p>
        </Section>

        <Section number="/03" title="Cookies">
          <p>
            Our website uses cookies solely for functional purposes (e.g., theme preferences). We do
            not use tracking or advertising cookies. You can configure your browser to refuse cookies,
            though some features of the site may not function correctly without them.
          </p>
        </Section>

        <Section number="/04" title="Third-Party Services">
          <p>
            We use reputable third-party services including Vercel (hosting), and may use services
            such as Google Analytics in future. These providers have their own privacy policies, and
            we encourage you to review them.
          </p>
          <p>
            We only share data with third parties as necessary to deliver our services or to comply
            with law.
          </p>
        </Section>

        <Section number="/05" title="Data Retention">
          <p>
            We retain personal data only as long as necessary for the purposes outlined in this
            policy, or as required by applicable law. Project-related data is typically retained for
            five years following the close of the engagement.
          </p>
        </Section>

        <Section number="/06" title="Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict certain processing</li>
            <li>Receive your data in a portable format</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:privacy@buzzler.com" className="text-foreground font-semibold hover:text-accent transition-colors">
              privacy@buzzler.com
            </a>
            .
          </p>
        </Section>

        <Section number="/07" title="Data Security">
          <p>
            We implement industry-standard security measures to protect your personal information,
            including encryption in transit (TLS) and access controls. No method of transmission
            over the internet is 100% secure, however, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section number="/08" title="Children's Privacy">
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly
            collect personal data from children. If you believe we have inadvertently collected such
            information, please contact us and we will delete it promptly.
          </p>
        </Section>

        <Section number="/09" title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will indicate the revised date
            at the top of this page. Your continued use of our services following any changes
            constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section number="/10" title="Contact">
          <p>
            For privacy-related enquiries, contact us at{' '}
            <a href="mailto:privacy@buzzler.com" className="text-foreground font-semibold hover:text-accent transition-colors">
              privacy@buzzler.com
            </a>{' '}
            or through our{' '}
            <Link href="/contact" className="text-foreground font-semibold hover:text-accent transition-colors">
              contact page
            </Link>
            .
          </p>
        </Section>
      </div>

      <FadeIn delay={0.05}>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground border-t border-border pt-8">
          <p>Related policies:</p>
          <Link href="/legal/terms" className="text-foreground font-semibold hover:text-accent transition-colors">
            Terms of Service →
          </Link>
        </div>
      </FadeIn>
    </CompanyLayout>
  );
}
