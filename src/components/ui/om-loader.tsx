import { useState, useEffect } from 'react';

interface OmLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function OmLoader({ onComplete, duration = 3000 }: OmLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, duration);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + (100 / (duration / 50));
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [duration, onComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-transparent border-t-orange-500 border-r-amber-500 animate-spin"></div>
        </div>
        
        {/* Middle rotating ring (reverse) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-transparent border-b-amber-600 border-l-orange-600 animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Inner pulsing circle */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center animate-pulse shadow-lg">
          <span className="text-white text-2xl font-bold animate-pulse">ॐ</span>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-8 -left-8 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute -top-4 -right-6 w-3 h-3 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-6 -left-4 w-2 h-2 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-4 -right-8 w-3 h-3 bg-orange-500 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-20 text-center">
        <p className="text-orange-800 text-lg font-medium animate-pulse">Brahma Gurukul</p>
        <p className="text-amber-700 text-sm mt-1">Ancient Wisdom, Modern Education</p>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-10 left-10 right-10">
        <div className="w-full h-1 bg-orange-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-amber-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-orange-300 text-4xl animate-pulse">✦</div>
      <div className="absolute top-10 right-10 text-amber-300 text-4xl animate-pulse" style={{ animationDelay: '0.7s' }}>✦</div>
      <div className="absolute bottom-20 left-10 text-yellow-400 text-3xl animate-pulse" style={{ animationDelay: '1.2s' }}>✧</div>
      <div className="absolute bottom-20 right-10 text-orange-400 text-3xl animate-pulse" style={{ animationDelay: '1.8s' }}>✧</div>
    </div>
  );
}
