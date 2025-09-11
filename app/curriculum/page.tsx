'use client';

import { useState } from 'react';
import Header from '../components/Header';

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              カリキュラム内容
            </h2>
            
            {/* タブ切り替え */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg bg-gray-800/50 p-1">
                <button
                  onClick={() => setActiveTab('basic')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'basic'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  基礎カリキュラム
                </button>
                <button
                  onClick={() => setActiveTab('specialized')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'specialized'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  専門分野
                </button>
              </div>
            </div>

            {/* 基礎カリキュラム */}
            {activeTab === 'basic' && (
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-brain text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">AI×プロンプト設計</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <i className="fas fa-check text-cyan-400 mt-1 mr-2"></i>
                      <span>要約・抽出・分類・仕様書テンプレート</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-cyan-400 mt-1 mr-2"></i>
                      <span>エラー箇所の特定＆修正案の提示</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-cogs text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">GASで業務自動化</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <i className="fas fa-check text-purple-400 mt-1 mr-2"></i>
                      <span>Gmail/スプレッドシート/ドライブ連携</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-purple-400 mt-1 mr-2"></i>
                      <span>通知・ファイル保存・書式設定</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-chart-line text-white text-xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-white">スクレイピング→可視化</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-400 mt-1 mr-2"></i>
                      <span>日次収集・グラフ更新・例外処理</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-green-400 mt-1 mr-2"></i>
                      <span>キャッシュ戦略・スケジューリング</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* 専門分野 */}
            {activeTab === 'specialized' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-calculator text-white"></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">経理×AI</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• レシート・請求書の自動読み取り</li>
                    <li>• 勘定科目の自動分類</li>
                    <li>• 月次・年次レポート生成</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-shopping-cart text-white"></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">転売×AI</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• 商品トレンド分析</li>
                    <li>• 競合価格の自動追跡</li>
                    <li>• 商品説明文の自動生成</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-bullhorn text-white"></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">アフィリエイト×AI</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• SEO最適化コンテンツ生成</li>
                    <li>• キーワード分析・提案</li>
                    <li>• パフォーマンス自動追跡</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <i className="fas fa-plus text-white"></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">その他</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• マーケティング自動化</li>
                    <li>• 人事・採用業務支援</li>
                    <li>• 不動産投資分析</li>
                  </ul>
                </div>
              </div>
            )}

            {/* 学習の流れ */}
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center text-white mb-8">学習の流れ</h3>
              <div className="space-y-4">
                <div className="flex items-center bg-gray-800/30 rounded-lg p-4 border border-cyan-500/20">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-300">基礎知識の習得（動画講義・ハンズオン）</p>
                </div>
                <div className="flex items-center bg-gray-800/30 rounded-lg p-4 border border-cyan-500/20">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-300">実践課題への取り組み（サンプルコード提供）</p>
                </div>
                <div className="flex items-center bg-gray-800/30 rounded-lg p-4 border border-cyan-500/20">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-300">コードレビュー・フィードバック</p>
                </div>
                <div className="flex items-center bg-gray-800/30 rounded-lg p-4 border border-cyan-500/20">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-300">オリジナルプロジェクトの開発</p>
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