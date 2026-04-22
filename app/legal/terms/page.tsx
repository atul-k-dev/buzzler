import type { Metadata } from 'next';
import TermsPage from './TermsPage';

export const metadata: Metadata = {
  title: 'Terms of Service — Buzzler Technologies',
  description:
    'Read the Terms of Service for Buzzler Technologies products and services.',
};

export default function Page() {
  return <TermsPage />;
}
