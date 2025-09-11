'use client';

import Header from '../components/Header';

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              サロンの3つの特徴
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* 特徴1: AI・生成AI専門カリキュラム */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-cyan-500/30">
                    01
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  AI・生成AI<br className="sm:hidden" />専門カリキュラム
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p className="pb-2 border-b border-gray-700">
                    最新ツールの正しい使い方と実践テンプレート
                  </p>
                  <p className="text-sm">プロンプト設計から自動化実装まで</p>
                  <div className="mt-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                    <p className="text-cyan-300 text-sm font-semibold mb-2">
                      <i className="fas fa-flag-checkered mr-2"></i>30日目標
                    </p>
                    <p className="text-gray-300 text-sm">
                      日常タスクの自動化＋AI議事録システム
                    </p>
                  </div>
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                    <p className="text-blue-300 text-sm font-semibold mb-2">
                      <i className="fas fa-trophy mr-2"></i>90日目標
                    </p>
                    <p className="text-gray-300 text-sm">
                      社内向け実践ツールを1つリリース
                    </p>
                  </div>
                </div>
              </div>

              {/* 特徴2: 本格プログラミング実装 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-purple-500/30">
                    02
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  本格プログラミング<br className="sm:hidden" />実装
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p className="pb-2 border-b border-gray-700">
                    基礎からAPI連携・運用まで
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <i className="fas fa-code text-purple-400 mt-1 mr-3"></i>
                      <p className="text-sm">GAS/JavaScript/Python 自動化・API連携</p>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-shield-alt text-pink-400 mt-1 mr-3"></i>
                      <p className="text-sm">例外処理・ログ・通知（Slack/メール）</p>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-database text-purple-400 mt-1 mr-3"></i>
                      <p className="text-sm">スクレイピング→シート/DB→可視化</p>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-sync text-pink-400 mt-1 mr-3"></i>
                      <p className="text-sm">スケジューリング・リトライロジック</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 特徴3: コミュニティ学習環境 */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-green-500/30">
                    03
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  コミュニティ<br className="sm:hidden" />学習環境
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p className="pb-2 border-b border-gray-700">
                    Discordで疑問を即解決
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <i className="fab fa-discord text-purple-400 mr-3"></i>
                      <p className="text-sm">質問チャンネル</p>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-robot text-green-400 mr-3"></i>
                      <p className="text-sm">自動化レシピ集</p>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-images text-teal-400 mr-3"></i>
                      <p className="text-sm">作品ギャラリー</p>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-broadcast-tower text-purple-400 mr-3"></i>
                      <p className="text-sm">ライブ配信告知</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                    <p className="text-green-300 text-xs">
                      <i className="fas fa-check-circle mr-1"></i>
                      ライブ配信＋アーカイブで復習
                    </p>
                    <p className="text-green-300 text-xs mt-1">
                      <i className="fas fa-check-circle mr-1"></i>
                      質問無制限・コードレビューあり
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">コードレビューで品質向上をサポート</p>
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                <span className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                  <i className="fas fa-book-open mr-2"></i>可読性
                </span>
                <span className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                  <i className="fas fa-tools mr-2"></i>保守性
                </span>
                <span className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                  <i className="fas fa-exclamation-triangle mr-2"></i>例外処理
                </span>
                <span className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-full text-cyan-300 text-sm">
                  <i className="fas fa-cogs mr-2"></i>運用設計
                </span>
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