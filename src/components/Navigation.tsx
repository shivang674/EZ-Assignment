import { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1ed]/95 backdrop-blur-sm border-b border-[#e8dfd5]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-[#ff6b4a]">V</span>
            <span className="text-[#2c3e50]">Films</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#2c3e50] hover:text-[#ff6b4a] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('stories')}
              className="text-[#2c3e50] hover:text-[#ff6b4a] transition-colors"
            >
              Storyboard
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-[#2c3e50] hover:text-[#ff6b4a] transition-colors"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[#2c3e50] hover:text-[#ff6b4a] transition-colors"
            >
              Varnan
            </button>
            <Button 
              className="bg-[#ff6b4a] hover:bg-[#ff5a3a] text-white rounded-full px-6"
              onClick={() => scrollToSection('contact')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#2c3e50]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[#2c3e50] hover:text-[#ff6b4a] transition-colors text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('stories')}
              className="text-[#2c3e50] hover:text-[#ff6b4a] transition-colors text-left"
            >
              Storyboard
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-[#2c3e50] hover:text-[#ff6b4a] transition-colors text-left"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[#2c3e50] hover:text-[#ff6b4a] transition-colors text-left"
            >
              Varnan
            </button>
            <Button 
              className="bg-[#ff6b4a] hover:bg-[#ff5a3a] text-white rounded-full px-6 w-full"
              onClick={() => scrollToSection('contact')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Let's Talk
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
