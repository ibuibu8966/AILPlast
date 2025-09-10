'use client';

interface ScrollProgressBarProps {
  scrollProgress: number;
}

export default function ScrollProgressBar({ scrollProgress }: ScrollProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}