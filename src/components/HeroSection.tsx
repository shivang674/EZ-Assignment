import heroImage from 'figma:asset/7898ac55826d2a39158e47dbb99dd063eb3ec2f9.png';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#f5f1ed] pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Logo */}
          <div className="flex justify-center md:justify-start">
            <img 
              src={heroImage} 
              alt="V Films Logo with Mandala" 
              className="w-full max-w-md"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left space-y-8">
            <h1 className="text-[#2c3e50] italic" style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', lineHeight: '1.2' }}>
              Varnan is where stories find their voice and form
            </h1>
            
            <div className="space-y-4">
              <div className="flex gap-2 justify-center md:justify-start text-[#ff6b4a]" style={{ fontSize: '1.5rem' }}>
                <span>Films</span>
                <span>.</span>
                <span>Brands</span>
                <span>.</span>
                <span>Art</span>
              </div>
              
              <p className="text-[#2c3e50] max-w-md mx-auto md:mx-0" style={{ lineHeight: '1.8' }}>
                Since 2009, V've been telling stories - stories of people, 
                their journeys, and the places that shape them. 
                Some begin in polished boardrooms, others in humble 
                village squares. But every story starts the same way - by 
                listening with intention. V believes it takes trust, patience, 
                and an eye for the unseen to capture what truly matters. 
                V doesn't just tell stories - V honors them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
