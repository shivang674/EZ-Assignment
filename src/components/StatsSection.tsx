import { motion } from 'motion/react';
import statsImage from 'figma:asset/ee654896a3fd5f20a59995c69364d101d7902bc1.png';

export function StatsSection() {
  const stats = [
    { number: '85+', label: 'Projects' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Experts Team' }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center bg-[#f5f1ed] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Description and Stats */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-[#2c3e50]" style={{ fontSize: '1.8rem' }}>
                A montage of familiar faces and names.
              </h2>
              <p className="text-[#2c3e50] max-w-md" style={{ lineHeight: '1.8' }}>
                Some stories come from the biggest names.<br />
                Others begin with bold, rising voices.<br />
                We've been fortunate to walk alongside both -<br />
                listening, creating, and building stories that<br />
                matter.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ rotate: -2, y: 20, opacity: 0 }}
                  whileInView={{ rotate: index % 2 === 0 ? -3 : 3, y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#fff9e6] p-8 shadow-md transform hover:scale-105 transition-transform cursor-pointer"
                  style={{ 
                    width: '140px',
                    height: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div className="text-[#2c3e50]" style={{ fontSize: '3rem' }}>
                    {stat.number}
                  </div>
                  <div className="text-[#ff6b4a]" style={{ fontSize: '1rem' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center items-start">
            <img 
              src={statsImage} 
              alt="Projects and Brands" 
              className="w-full max-w-2xl"
            />
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center">
          <p className="text-[#2c3e50] italic max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', lineHeight: '1.5' }}>
            Every project is more than just a brief - it's a new chapter waiting to be written. Together, we've crafted tales that inspire, connect, and endure.
          </p>
        </div>
      </div>
    </section>
  );
}
