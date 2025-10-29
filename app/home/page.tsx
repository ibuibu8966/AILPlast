'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DailyWorkSection from '../components/DailyWorkSection';
import WhyAIProgrammingSection from '../components/WhyAIProgrammingSection';
import WhatYouCanDoWithAISection from '../components/WhatYouCanDoWithAISection';
import HowYouWillChangeSection from '../components/HowYouWillChangeSection';
import FeaturesSection from '../components/FeaturesSection';
import CurriculumSection from '../components/CurriculumSection';
import InstructorsSection from '../components/InstructorsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

export default function HomePage() {
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

      <Header hide={false} />

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

      <Footer />

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
