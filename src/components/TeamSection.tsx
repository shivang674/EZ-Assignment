import { Button } from './ui/button';
import teamImage from 'figma:asset/5af7b4b2cd6ddc607c318162d4ba90ab888c995e.png';

export function TeamSection() {
  const handleViewPortfolio = () => {
    // This can be customized to navigate to portfolio page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="team" className="min-h-screen flex items-center justify-center bg-[#f5f1ed] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          {/* Top section with image */}
          <div className="flex justify-center">
            <img 
              src={teamImage} 
              alt="V Films Team" 
              className="w-full max-w-5xl"
            />
          </div>

          {/* Bottom section */}
          <div className="text-center space-y-8">
            <p className="text-[#2c3e50] max-w-2xl mx-auto" style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
              Take a closer look at the stories V bring to life.
            </p>
            
            <Button 
              onClick={handleViewPortfolio}
              className="bg-[#ff6b4a] hover:bg-[#ff5a3a] text-white rounded-full px-8 py-6"
              style={{ fontSize: '1rem' }}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
