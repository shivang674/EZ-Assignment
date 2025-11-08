import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // 🔍 Basic validation
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message })
      });

      if (response.ok) {
        toast.success('Form Submitted');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Submission failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[#f5f1ed] py-20 relative overflow-hidden">
      {/* Keep your mandala patterns and layout unchanged */}
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Text remains same */}
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

          <div className="pt-6 space-y-2">
            <a href="mailto:vernita@varnanfilms.co.in" className="block text-[#ff6b4a] hover:underline">
              vernita@varnanfilms.co.in
            </a>
            <a href="tel:+919876846467" className="block text-[#ff6b4a] hover:underline">
              +91 98768 46467
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/80 backdrop-blur-sm p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#f5f1ed] border-[#e8dfd5] focus:border-[#ff6b4a] text-[#2c3e50]"
            />

            <Input
              type="email"
              name="email"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#f5f1ed] border-[#e8dfd5] focus:border-[#ff6b4a] text-[#2c3e50]"
            />

            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#f5f1ed] border-[#e8dfd5] focus:border-[#ff6b4a] text-[#2c3e50]"
            />

            <Textarea
              name="message"
              placeholder="Your message*"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-[#f5f1ed] border-[#e8dfd5] focus:border-[#ff6b4a] text-[#2c3e50] resize-none"
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ff6b4a] hover:bg-[#ff5a3a] text-white rounded-full"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
