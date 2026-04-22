import type { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About Us — Buzzler Technologies',
  description:
    'Learn about Buzzler Technologies — our story, mission, values, and the team building intelligent digital ecosystems for mobility, travel-tech, and beyond.',
};

export default function Page() {
  return <AboutPage />;
}
