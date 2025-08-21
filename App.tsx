import HeroSection from './components/HeroSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import LeadershipSection from './components/LeadershipSection';
import ThoughtLeadershipSection from './components/ThoughtLeadershipSection';
import DesignPhilosophySection from './components/DesignPhilosophySection';
import ContactSection from './components/ContactSection';
import FloatingNavigation from './components/FloatingNavigation';

export default function App() {
  return (
    <div className="min-h-screen">
      <FloatingNavigation />
      <HeroSection />
      <CaseStudiesSection />
      <LeadershipSection />
      <ThoughtLeadershipSection />
      <DesignPhilosophySection />
      <ContactSection />
    </div>
  );
}