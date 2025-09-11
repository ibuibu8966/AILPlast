'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

  const faqs = [
    {
      question: 'プログラミング初心者でも参加できますか？',
      answer: 'はい、もちろん参加可能です！基礎から丁寧に解説し、初心者の方でも理解できるようにサポートします。週3〜5時間程度の学習時間を確保できれば、着実にスキルアップできます。'
    },
    {
      question: 'どのような開発環境が必要ですか？',
      answer: 'パソコン（Windows 11以降 / macOS Catalina以降）、メモリ8GB以上、安定したインターネット環境があれば大丈夫です。特別なソフトウェアの購入は不要で、無料のツールを使用します。'
    },
    {
      question: 'サポート体制はどうなっていますか？',
      answer: '24時間Discord質問対応、週1回のライブ配信、録画アーカイブ、コードレビューなど充実したサポート体制を整えています。講師陣が迅速に回答し、つまずきポイントを即座に解決します。'
    },
    {
      question: '途中参加でもついていけますか？',
      answer: 'はい、問題ありません。過去のアーカイブ動画で基礎から学習でき、個別の学習ロードマップも提供しています。自分のペースで着実に進められる環境を整えています。'
    },
    {
      question: '忙しくて時間が取れない場合は？',
      answer: 'アーカイブ視聴により、好きな時間に学習可能です。週末だけの学習でも十分にスキルアップできます。効率的な学習方法もアドバイスしています。'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              よくある質問
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-cyan-500/20 overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <button
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-all duration-300"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                      <div className="flex items-center">
                        <span className="text-cyan-400 mr-4 text-lg font-bold">Q{index + 1}.</span>
                        <span className="text-lg font-medium text-white">{faq.question}</span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-cyan-400 transform transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-5">
                        <div className="flex items-start">
                          <span className="text-cyan-400 mr-4 text-lg font-bold">A.</span>
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* その他の質問セクション */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                  <h3 className="text-2xl font-bold text-white mb-4">まだ疑問がありますか？</h3>
                  <p className="text-gray-400 mb-6">
                    お気軽にお問い合わせください。<br />
                    24時間以内に回答いたします。
                  </p>
                  <button 
                    onClick={() => router.push('/contact')}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    お問い合わせはこちら
                  </button>
                </div>
              </div>

              {/* 追加のFAQカテゴリー */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white text-center mb-8">カテゴリー別FAQ</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <i className="fas fa-graduation-cap text-white"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">学習について</h4>
                    <p className="text-gray-400 text-sm">カリキュラム、学習時間、難易度など</p>
                  </div>
                  
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                      <i className="fas fa-credit-card text-white"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">料金・支払い</h4>
                    <p className="text-gray-400 text-sm">プラン、決済方法、解約など</p>
                  </div>
                  
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                      <i className="fas fa-laptop-code text-white"></i>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">技術サポート</h4>
                    <p className="text-gray-400 text-sm">環境構築、エラー対処、ツール使用</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"
      />
    </>
  );
}