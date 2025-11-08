import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    toast.success('Thank you for reaching out! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[#f5f1ed] py-20 relative overflow-hidden">
      {/* Decorative mandala patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          <circle cx="200" cy="200" r="130" fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          <circle cx="200" cy="200" r="110" fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 200 + 110 * Math.cos(angle);
            const y1 = 200 + 110 * Math.sin(angle);
            const x2 = 200 + 150 * Math.cos(angle);
            const y2 = 200 + 150 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff6b4a" strokeWidth="1"/>;
          })}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x = 200 + 130 * Math.cos(angle);
            const y = 200 + 130 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="3" fill="#ff6b4a"/>;
          })}
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          <circle cx="200" cy="200" r="130" fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          <circle cx="200" cy="200" r="110" fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 200 + 110 * Math.cos(angle);
            const y1 = 200 + 110 * Math.sin(angle);
            const x2 = 200 + 150 * Math.cos(angle);
            const y2 = 200 + 150 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff6b4a" strokeWidth="1"/>;
          })}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text */}
        <div className="space-y-6">
          <h2 className="text-[#2c3e50]" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            Join the Story
          </h2>
          <p className="text-[#2c3e50]" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Ready to bring your vision to life? Let's talk.
          </p>
          <div className="space-y-3 text-[#2c3e50]" style={{ lineHeight: '1.8' }}>
            <p>Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.</p>
            <p>Let's catch up over coffee.</p>
            <p>Great stories always begin with a good conversation</p>
          </div>
          
          {/* Contact Info */}
          <div className="pt-6 space-y-2">
            <a 
              href="mailto:vernita@varnanfilms.co.in" 
              className="block text-[#ff6b4a] hover:underline"
            >
              vernita@varnanfilms.co.in
            </a>
            <a 
              href="tel:+919876846467" 
              className="block text-[#ff6b4a] hover:underline"
            >
              +91 98768 46467
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/80 backdrop-blur-sm p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your name*"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#f5f1ed] border-[#e8dfd5] focus:border-[#ff6b4a] text-[#2c3e50]"
              />
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your email*"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#f5f1ed] border-[#e8dfd5] focus:border-[#ff6b4a] text-[#2c3e50]"
              />
            </div>
            
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#f5f1ed] border-[#e8dfd5] focus:border-[#ff6b4a] text-[#2c3e50]"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Your message*"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-[#f5f1ed] border-[#e8dfd5] focus:border-[#ff6b4a] text-[#2c3e50] resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-[#ff6b4a] hover:bg-[#ff5a3a] text-white rounded-full"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
