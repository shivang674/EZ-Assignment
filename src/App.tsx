import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { StoryboardSection } from './components/StoryboardSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { HighlightReelSection } from './components/HighlightReelSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<'film' | 'branding' | 'art' | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f1ed]">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <StoryboardSection onServiceClick={setSelectedService} />
      <HighlightReelSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
      
      <Toaster />
    </div>
  );
}
