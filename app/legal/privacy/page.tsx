import type { Metadata } from 'next';
import PrivacyPage from './PrivacyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Buzzler Technologies',
  description:
    'Read the Privacy Policy for Buzzler Technologies. We are committed to protecting your personal data.',
};

export default function Page() {
  return <PrivacyPage />;
}
