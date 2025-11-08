import { motion } from 'motion/react';
import { ArrowRight, Film, Palette, Building2 } from 'lucide-react';
import { Button } from './ui/button';

interface ServicesGridProps {
  onServiceClick: (service: 'film' | 'branding' | 'art') => void;
}

export function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  const services = [
    {
      id: 'film' as const,
      icon: Film,
      title: 'Film Production',
      description: 'Living many lifetimes through the art of filmmaking',
      color: '#ff6b4a'
    },
    {
      id: 'branding' as const,
      icon: Building2,
      title: 'Branding',
      description: 'Creating voices that people remember and trust',
      color: '#4a9eff'
    },
    {
      id: 'art' as const,
      icon: Palette,
      title: 'Art Curation',
      description: 'Taking art where it belongs - to the people',
      color: '#ff9f4a'
    }
  ];

  return (
    <section id="stories" className="min-h-screen flex items-center justify-center bg-[#f5f1ed] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[#2c3e50] italic" style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem' }}>
            What V Create
          </h2>
          <p className="text-[#2c3e50] max-w-2xl mx-auto" style={{ lineHeight: '1.8' }}>
            From films that move hearts to brands that inspire trust, and art that connects communities - we bring stories to life in every form.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onServiceClick(service.id)}
            >
              <div className="bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                
                <h3 className="text-[#2c3e50] mb-3" style={{ fontSize: '1.5rem' }}>
                  {service.title}
                </h3>
                
                <p className="text-[#2c3e50] mb-6" style={{ lineHeight: '1.6' }}>
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group-hover:text-[#ff6b4a] p-0"
                >
                  Explore Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
