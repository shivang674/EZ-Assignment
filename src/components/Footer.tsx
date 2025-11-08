import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2c3e50] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[#ff6b4a]">V</span>
              <span>Films</span>
            </div>
            <p className="text-gray-300" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              Where stories find their voice and form.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3>Quick Links</h3>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#ff6b4a] transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#ff6b4a] transition-colors text-left"
              >
                Storyboard
              </button>
              <button 
                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#ff6b4a] transition-colors text-left"
              >
                Our Story
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-[#ff6b4a] transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3>Get In Touch</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:vernita@varnanfilms.co.in" 
                className="flex items-center gap-2 text-gray-300 hover:text-[#ff6b4a] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span style={{ fontSize: '0.9rem' }}>vernita@varnanfilms.co.in</span>
              </a>
              <a 
                href="tel:+919876846467" 
                className="flex items-center gap-2 text-gray-300 hover:text-[#ff6b4a] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span style={{ fontSize: '0.9rem' }}>+91 98768 46467</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-1" />
                <span style={{ fontSize: '0.9rem' }}>Varnan Films Studio<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400" style={{ fontSize: '0.9rem' }}>
            © {currentYear} V Films. All rights reserved. Crafting stories since 2009.
          </p>
        </div>
      </div>
    </footer>
  );
}
