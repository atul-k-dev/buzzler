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
          <h2 className="text-xl font-semibold mt-1">{title}</h2>
        </div>
        <div className="md:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}

const LAST_UPDATED = 'April 22, 2026';

export default function TermsPage() {
  return (
    <CompanyLayout
      label="/legal"
      title="Terms of Service"
      subtitle={`Last updated: ${LAST_UPDATED}`}
    >
      <FadeIn className="mb-10">
        <div className="bg-surface rounded-xl p-5 text-base text-muted-foreground leading-relaxed">
          Please read these Terms of Service carefully before using any Buzzler Technologies products
          or services. By accessing or using our services, you agree to be bound by these terms. If
          you do not agree, please discontinue use immediately.
        </div>
      </FadeIn>

      <div className="flex flex-col gap-10 mb-16">
        <Section number="/01" title="Acceptance of Terms">
          <p>
            By accessing or using any service operated by Buzzler Technologies Private Limited
            ("Buzzler", "we", "us", or "our"), you confirm that you are at least 18 years old and
            capable of entering a legally binding agreement, and that you accept these Terms in full.
          </p>
          <p>
            We reserve the right to update these Terms at any time. Continued use of our services
            after changes are posted constitutes your acceptance of the revised Terms.
          </p>
        </Section>

        <Section number="/02" title="Services">
          <p>
            Buzzler Technologies provides custom software development, design, consulting, and related
            digital services. The scope of services for any specific engagement is defined in a
            separate Statement of Work (SOW) or project agreement.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any service at any time, with or
            without notice.
          </p>
        </Section>

        <Section number="/03" title="Intellectual Property">
          <p>
            Upon full receipt of payment, all custom deliverables specifically created for a client
            project are assigned to the client, unless otherwise specified in the project agreement.
          </p>
          <p>
            Buzzler retains ownership of all pre-existing intellectual property, frameworks, tools,
            and methodologies used in delivering services. Nothing in these Terms grants you rights
            in our proprietary platforms, internal tooling, or brand assets.
          </p>
        </Section>

        <Section number="/04" title="Client Responsibilities">
          <p>
            Clients are responsible for providing accurate project requirements, timely feedback, and
            any necessary access, content, or third-party credentials required to deliver the agreed
            services. Delays caused by the client may affect delivery timelines and cost estimates.
          </p>
        </Section>

        <Section number="/05" title="Payment Terms">
          <p>
            Payment schedules are defined in the relevant project agreement or SOW. Invoices are due
            within the period stated on the invoice. Late payments may incur interest at the rate of
            1.5% per month or the maximum permitted by applicable law.
          </p>
          <p>
            Buzzler reserves the right to suspend services in the event of non-payment.
          </p>
        </Section>

        <Section number="/06" title="Confidentiality">
          <p>
            Both parties agree to keep confidential all non-public information disclosed in
            connection with a project. This obligation survives the termination of any agreement.
            Buzzler will not disclose client project details publicly without written consent.
          </p>
        </Section>

        <Section number="/07" title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Buzzler's total liability for any claim arising
            from or related to our services shall not exceed the total amount paid by you in the
            three months preceding the event giving rise to the claim.
          </p>
          <p>
            We shall not be liable for indirect, incidental, special, consequential, or punitive
            damages, including but not limited to loss of profits or data.
          </p>
        </Section>

        <Section number="/08" title="Governing Law">
          <p>
            These Terms are governed by the laws of India. Any disputes shall be resolved through
            binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, or
            through the courts of competent jurisdiction in New Delhi, India.
          </p>
        </Section>

        <Section number="/09" title="Contact">
          <p>
            Questions about these Terms? Reach us at{' '}
            <a href="mailto:legal@buzzler.in" className="text-foreground font-semibold hover:text-accent transition-colors">
              legal@buzzler.in
            </a>{' '}
            or visit our{' '}
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
          <Link href="/legal/privacy" className="text-foreground font-semibold hover:text-accent transition-colors">
            Privacy Policy →
          </Link>
        </div>
      </FadeIn>
    </CompanyLayout>
  );
}
