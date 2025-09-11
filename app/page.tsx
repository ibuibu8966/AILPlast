'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroWithTransition from './components/HeroWithTransition';
import QuestionFlow from './components/QuestionFlow';
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
  const [showHero, setShowHero] = useState(true);
  const [showQuestionFlow, setShowQuestionFlow] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

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

  const handleQuestionFlowComplete = () => {
    setShowQuestionFlow(false);
    setShowApplicationForm(true);
    setHideHeader(false);
  };

  const handleHeroProceed = () => {
    setShowHero(false);
    setShowQuestionFlow(true);
  };

  if (showHero) {
    return (
      <div className="min-h-screen bg-black">
        <Header hide={false} />
        <HeroWithTransition onProceed={handleHeroProceed} />
      </div>
    );
  }

  if (showQuestionFlow) {
    return (
      <QuestionFlow 
        onComplete={handleQuestionFlowComplete}
        hideHeader={hideHeader}
        setHideHeader={setHideHeader}
      />
    );
  }

  if (showApplicationForm) {
    return (
      <div className="min-h-screen bg-black">
        <Header hide={false} />
        <div className="pt-20">
          <section id="application" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                お申し込みフォーム
              </h2>
              <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">お名前 <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="山田 太郎" required />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="example@email.com" required />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">電話番号</label>
                    <input type="tel" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="090-1234-5678" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">ご質問・ご要望</label>
                    <textarea className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors h-32" placeholder="ご自由にお書きください"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* スクロールプログレスバー */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header hide={hideHeader} />

      {/* 他のセクションはヘッダーから見れるように残す */}
      <div className="pt-20">
        <DailyWorkSection />
      </div>

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