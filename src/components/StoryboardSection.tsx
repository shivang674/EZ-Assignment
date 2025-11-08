import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StoryboardSectionProps {
  onServiceClick: (service: 'film' | 'branding' | 'art') => void;
}

export function StoryboardSection({ onServiceClick }: StoryboardSectionProps) {
  const polaroids = [
    {
      id: 'film' as const,
      image: 'https://images.unsplash.com/photo-1632670468093-6e7a07ae9848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpbG1tYWtlciUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYyNjEwMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Film Production',
      rotation: -6,
      top: '0%'
    },
    {
      id: 'branding' as const,
      image: 'https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwYnJhbmQlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYyNjEwMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Branding',
      rotation: 2,
      top: '5%'
    },
    {
      id: 'art' as const,
      image: 'https://images.unsplash.com/photo-1730509408462-be3190250cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydCUyMGdhbGxlcnklMjBjdXJhdG9yfGVufDF8fHx8MTc2MjYxMDA5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Art Curation',
      rotation: -4,
      top: '0%'
    }
  ];

  return (
    <section id="stories" className="min-h-screen flex items-center justify-center bg-[#f5f1ed] py-20 relative overflow-hidden">
      {/* Decorative border pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1000 80" preserveAspectRatio="none">
          <pattern id="mandala-pattern" x="0" y="0" width="100" height="80" patternUnits="userSpaceOnUse">
            <path d="M50,10 Q60,20 50,30 Q40,20 50,10 M50,30 Q60,40 50,50 Q40,40 50,30 M50,50 Q60,60 50,70 Q40,60 50,50" 
                  fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#mandala-pattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-[#2c3e50] mb-4" style={{ fontSize: '2rem', fontFamily: 'Georgia, serif' }}>
            The storyboard reveals the breadth of our craft.
          </h2>
          {/* Brush stroke decoration */}
          <div className="flex justify-center">
            <svg width="500" height="20" viewBox="0 0 500 20" className="opacity-60">
              <path d="M0,10 Q125,5 250,10 T500,10" fill="none" stroke="#2c3e50" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Polaroid Photos */}
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12 max-w-5xl mx-auto">
          {polaroids.map((polaroid, index) => (
            <motion.div
              key={polaroid.id}
              initial={{ y: 50, opacity: 0, rotate: 0 }}
              whileInView={{ y: 0, opacity: 1, rotate: polaroid.rotation }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              className="cursor-pointer relative"
              onClick={() => onServiceClick(polaroid.id)}
              style={{ marginTop: polaroid.top }}
            >
              {/* Tape effect */}
              <div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-[#e8dfd5] opacity-60 shadow-sm"
                style={{ transform: `translateX(-50%) rotate(${polaroid.rotation > 0 ? -2 : 2}deg)` }}
              ></div>
              
              {/* Polaroid frame */}
              <div className="bg-white p-4 pb-16 shadow-xl" style={{ width: '280px' }}>
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={polaroid.image}
                    alt={polaroid.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Caption */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-[#2c3e50]" style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif' }}>
                    {polaroid.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
