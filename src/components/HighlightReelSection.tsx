import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HighlightReelSection() {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Mock video data - replace with real video URLs
  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1632670468093-6e7a07ae9848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZpbG1tYWtlciUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYyNjEwMDkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Corporate Documentary'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwYnJhbmQlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYyNjEwMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Brand Campaign'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1730509408462-be3190250cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydCUyMGdhbGxlcnklMjBjdXJhdG9yfGVufDF8fHx8MTc2MjYxMDA5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Art Festival'
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f1ed] py-20 relative overflow-hidden">
      {/* Vintage camera illustration */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-30 hidden lg:block">
        <svg width="150" height="200" viewBox="0 0 150 200" fill="none">
          <rect x="30" y="40" width="90" height="80" stroke="#ff6b4a" strokeWidth="2" fill="none"/>
          <circle cx="75" cy="80" r="25" stroke="#ff6b4a" strokeWidth="2" fill="none"/>
          <circle cx="75" cy="80" r="15" stroke="#ff6b4a" strokeWidth="2" fill="none"/>
          <rect x="20" y="120" width="110" height="60" stroke="#ff6b4a" strokeWidth="2" fill="none"/>
          <line x1="30" y1="150" x2="120" y2="150" stroke="#ff6b4a" strokeWidth="1"/>
          <circle cx="110" cy="60" r="5" fill="#ff6b4a"/>
          <rect x="45" y="20" width="60" height="20" stroke="#ff6b4a" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Mandala decoration */}
      <div className="absolute right-8 bottom-12 w-64 h-64 opacity-20 hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="#ff6b4a" strokeWidth="1"/>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = 100 + 80 * Math.cos(angle);
            const y = 100 + 80 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="5" fill="#ff6b4a"/>;
          })}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-[#2c3e50]" style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>
            The Highlight Reel
          </h2>
          <p className="text-[#2c3e50]" style={{ fontSize: '1.2rem' }}>
            Watch the magic we've captured.
          </p>
        </div>

        {/* Film Strip Container */}
        <div className="relative">
          {/* Film strip frame */}
          <div className="relative bg-gray-200 p-8 shadow-2xl">
            {/* Film perforations - top */}
            <div className="absolute top-2 left-0 right-0 flex justify-around px-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`top-${i}`} className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              ))}
            </div>

            {/* Film perforations - bottom */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-around px-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`bottom-${i}`} className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              ))}
            </div>

            {/* Video container */}
            <div className="relative bg-white p-4">
              <div className="relative w-full aspect-video bg-black">
                {isPlaying ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${videos[currentVideo].videoUrl}?autoplay=1`}
                    title={videos[currentVideo].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <>
                    <ImageWithFallback
                      src={videos[currentVideo].thumbnail}
                      alt={videos[currentVideo].title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-20 h-20 bg-[#ff6b4a] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-10 h-10 text-white ml-1" fill="white"/>
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevVideo}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-md"
            >
              <ChevronLeft className="w-8 h-8 text-[#2c3e50]" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextVideo}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-md"
            >
              <ChevronRight className="w-8 h-8 text-[#2c3e50]" />
            </Button>
          </div>

          {/* Video indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentVideo(index);
                  setIsPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentVideo === index ? 'bg-[#ff6b4a] w-8' : 'bg-[#2c3e50]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
