'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'プログラミング初心者でも参加できますか？',
      answer: 'はい、初心者歓迎です。基礎から丁寧に解説し、個別サポートも充実しています。週3-5時間の学習時間を確保していただければ、確実にスキルアップできる環境を用意しています。'
    },
    {
      question: 'どのような開発環境が必要ですか？',
      answer: 'Windows 11またはmacOS Catalina以降、メモリ8GB以上を推奨します。また、安定したインターネット接続環境が必要です。具体的な環境構築については、入会後に詳しくご案内いたします。'
    },
    {
      question: 'サポート体制はどうなっていますか？',
      answer: 'Discordでの24時間質問対応、週1回の定期ライブ配信、過去の全配信アーカイブ視聴、個別コードレビューなど、充実したサポート体制を整えています。'
    },
    {
      question: '途中参加でもついていけますか？',
      answer: '可能です。全ての学習コンテンツはアーカイブ化されており、個別のロードマップ作成でキャッチアップを支援します。また、過去の質問や解決事例も検索できるため、効率的に学習を進められます。'
    },
    {
      question: '忙しくて時間が取れない場合は？',
      answer: 'アーカイブ視聴により自分のペースで学習可能です。週3-5時間程度の時間確保を推奨していますが、短時間でも継続することで着実にスキルアップできるカリキュラム設計になっています。'
    }
  ];

  return (
    <section id="faq" className="relative py-20 bg-gray-800 overflow-hidden">
      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.02
        }}></div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0"></div>
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          {/* Tech decoration at top */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '0.6s'}}></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-8 text-white drop-shadow-2xl">
            <span className="inline-block">よくある</span><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap animate-gradient bg-[length:200%_auto]">質問</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 fade-in">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl border border-cyan-500/30 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm sm:text-base md:text-lg font-black text-white pr-4">{faq.question}</h3>
                  <i className={`fas fa-chevron-${openFaq === index ? 'up' : 'down'} text-cyan-400 transition-transform duration-200`}></i>
                </div>
              </button>
              <div className={`px-6 pb-4 transition-all duration-200 ${openFaq === index ? 'block' : 'hidden'}`}>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}