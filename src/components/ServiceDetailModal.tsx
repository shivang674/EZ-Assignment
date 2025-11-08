import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import filmImage from '../assets/FilmProduction.png';
import brandingImage from '../assets/Branding.png';
import artImage from '../assets/ArtCuration.png';


interface ServiceDetailModalProps {
  service: 'film' | 'branding' | 'art' | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  const serviceData = {
    film: {
      image: filmImage,
      quote: '"Filmmaking is a chance to live many lifetimes." - Robert Altman',
      title: 'Film Production',
      description: "Who says films are just an escape?\nWe see them as a way to live many lives - to feel, to explore, and to tell stories that stay.\nAnd with each film, we carry new memories and new reasons to keep creating.",
      heading: 'V crafts:',
      items: [
        'Documentaries',
        'Corporate Videos',
        '2D Animation Videos',
        '3D Animation Videos'
      ]
    },
    branding: {
      image: brandingImage,
      quote: '"A brand is a voice, and a product is a souvenir." - Lisa Gansky',
      title: 'Branding',
      description: "A brand isn't just what you see - it's what you remember, what you carry home, and what you trust.\nWe shape brands that people remember, return to, and fall in love with.",
      heading: 'V creates:',
      items: [
        'Branding & Communication',
        'Market Mapping',
        'Content Management',
        'Social Media Management',
        'Rebranding'
      ]
    },
    art: {
      image: artImage,
      quote: '"V take art where it belongs, to the people." - Vernita Verma',
      title: 'Art Curation',
      description: "Art isn't meant to sit on distant walls - it's meant to breathe, to travel, to belong.\nThrough every festival, every performance, and every gathering, we help stories find their stage and their people.",
      heading: 'V curates:',
      items: [
        'Art Festivals',
        'Live Performances',
        'Community Events',
        'Cultural Storytelling'
      ]
    }
  };

  const data = serviceData[service];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#f5f1ed] overflow-y-auto"
      >
        {/* Header with Back Button */}
        <div className="sticky top-0 z-10 bg-[#f5f1ed]/95 backdrop-blur-sm border-b border-[#e8dfd5]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#ff6b4a]">V</span>
              <span className="text-[#2c3e50]">Films</span>
            </div>
            
            <Button
              variant="outline"
              onClick={onClose}
              className="rounded-full border-[#ff6b4a] text-[#ff6b4a] hover:bg-[#ff6b4a] hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-5xl mx-auto px-6 pt-12">
          <div className="text-center mb-8">
            <p className="text-[#2c3e50] italic" style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem' }}>
              {data.quote}
            </p>
            <div className="mt-4 w-full h-px bg-gradient-to-r from-transparent via-[#2c3e50] to-transparent opacity-30"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white p-4 shadow-lg">
                <img 
                  src={data.image} 
                  alt={data.title}
                  className="w-full max-w-md"
                />
                <p className="text-center mt-4 text-[#2c3e50]" style={{ fontSize: '1.1rem' }}>
                  {data.title}
                </p>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-[#2c3e50] whitespace-pre-line" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                  {data.description}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[#2c3e50]" style={{ fontSize: '1.1rem' }}>
                  {data.heading}
                </p>
                <ul className="space-y-2">
                  {data.items.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 text-[#2c3e50]"
                      style={{ fontSize: '1rem' }}
                    >
                      <span className="w-2 h-2 bg-[#ff6b4a] rounded-full"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Button 
                className="bg-[#ff6b4a] hover:bg-[#ff5a3a] text-white rounded-full px-8 py-6 group"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                Explore Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-20"></div>
      </motion.div>
    </AnimatePresence>
  );
}
