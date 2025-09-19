'use client';

import { useState, useEffect } from 'react';
import ParticleSystem from './ParticleSystem';

interface HeroWithTransitionProps {
  onProceed: (answer: 'yes' | 'no') => void;
}

export default function HeroWithTransition({ onProceed }: HeroWithTransitionProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center justify-center">
      <ParticleSystem />
      
      {/* 背景グラデーション効果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-full text-cyan-400 font-semibold mb-6 border border-cyan-500/30">
              🚀 2024年最注目のスキル
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI×プログラミング
            </span>
            <br />
            <span className="text-white">
              次世代のエンジニアへ
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            ChatGPT、Claude、GitHub Copilotを使いこなし<br />
            <span className="text-cyan-400 font-semibold">開発速度10倍</span>のエンジニアになる
          </p>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl text-white font-bold mb-8">
              AIに関する情報で人生を豊かにしませんか？
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onProceed('yes')}
                className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl min-w-[150px]"
              >
                はい
              </button>
              <button
                onClick={() => onProceed('no')}
                className="px-12 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold text-xl rounded-full hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-xl min-w-[150px]"
              >
                いいえ
              </button>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            ※ あなたに合った提案をするための簡単な質問（所要時間：約1分）
          </p>

          {/* 実績バッジ */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg px-4 py-2 border border-cyan-500/20">
              <span className="text-cyan-400 font-bold">1,000+</span>
              <span className="text-gray-400 ml-2">受講生</span>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg px-4 py-2 border border-cyan-500/20">
              <span className="text-cyan-400 font-bold">98%</span>
              <span className="text-gray-400 ml-2">満足度</span>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg px-4 py-2 border border-cyan-500/20">
              <span className="text-cyan-400 font-bold">24h</span>
              <span className="text-gray-400 ml-2">サポート</span>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}