'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DailyWorkSection from './components/DailyWorkSection';
import WhyAIProgrammingSection from './components/WhyAIProgrammingSection';
import WhatYouCanDoWithAISection from './components/WhatYouCanDoWithAISection';
import HowYouWillChangeSection from './components/HowYouWillChangeSection';
import FeaturesSection from './components/FeaturesSection';
import CurriculumSection from './components/CurriculumSection';
import InstructorsSection from './components/InstructorsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // スクロールアニメーション
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* スクロールプログレスバー */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />

      <HeroSection />

      <DailyWorkSection />

      <WhyAIProgrammingSection />

      <WhatYouCanDoWithAISection />

      <HowYouWillChangeSection />

      <FeaturesSection />

      <CurriculumSection />

      <InstructorsSection />

      <PricingSection />

      <FAQSection />

      <FinalCTASection />

      {/* フッター */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">AI×プログラミングサロン</h3>
            <p className="text-gray-400">未来のスキルを身につけ、キャリアを加速させよう</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <i className="fab fa-discord text-2xl text-purple-400 hover:scale-110 transition-transform cursor-pointer"></i>
            <i className="fab fa-twitter text-2xl text-blue-400 hover:scale-110 transition-transform cursor-pointer"></i>
            <i className="fab fa-youtube text-2xl text-red-400 hover:scale-110 transition-transform cursor-pointer"></i>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2024 AI×プログラミングサロン. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
      />

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        /* ホバーエフェクト */
        .hover\\:-translate-y-2:hover {
          transform: translateY(-8px);
        }
        
        .hover\\:-translate-y-1:hover {
          transform: translateY(-4px);
        }
        
        /* アニメーション遅延 */
        .fade-in:nth-child(1) { animation-delay: 0.1s; }
        .fade-in:nth-child(2) { animation-delay: 0.2s; }
        .fade-in:nth-child(3) { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}