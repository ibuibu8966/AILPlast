'use client';

import { useState } from 'react';

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <section id="curriculum" className="relative py-20 bg-gray-900 overflow-hidden">
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
            <span className="inline-block">カリキュラム</span><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap animate-gradient bg-[length:200%_auto]">内容</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto fade-in">
          {/* タブナビゲーション */}
          <div className="flex justify-center mb-8 border-b border-cyan-500/20">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-semibold transition-colors text-xs sm:text-sm md:text-base ${
                activeTab === 'basic'
                  ? 'text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="whitespace-nowrap">基礎カリキュラム</span>
            </button>
            <button
              onClick={() => setActiveTab('specialized')}
              className={`px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-semibold transition-colors text-xs sm:text-sm md:text-base ${
                activeTab === 'specialized'
                  ? 'text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="whitespace-nowrap">専門分野</span>
            </button>
          </div>

          {/* タブコンテンツ */}
          <div className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-cyan-500/30">
            {activeTab === 'basic' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-4">
                    <span className="whitespace-nowrap">基礎カリキュラム</span>
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base px-2">実務で即使えるスキルを段階的に習得</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <h4 className="text-base sm:text-lg md:text-xl font-black mb-4 text-cyan-400">
                      <i className="fas fa-brain mr-3"></i><span className="whitespace-nowrap">AI×プロンプト設計</span>
                    </h4>
                    <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base px-2">
                      要約・抽出・分類・仕様化の型とチェックリ<br className="sm:hidden" />スト。誤り検出の再質問テンプレ付き。
                    </p>
                    <div className="text-xs sm:text-sm text-cyan-300 px-2">
                      <strong>到達目標：</strong> <span className="inline-block">30日で「日常タスクの自動化」</span><span className="inline-block">＋「議事録のAI化」を1つ完成</span>
                    </div>
                  </div>

                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <h4 className="text-base sm:text-lg md:text-xl font-black mb-4 text-cyan-400">
                      <i className="fas fa-cog mr-3"></i><span className="whitespace-nowrap">GASで業務自動化</span>
                    </h4>
                    <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base px-2">
                      Gmail/Sheets/Driveの連携。通知、添付保<br className="sm:hidden" />存、表整形、定期実行、失敗時リトライま<br className="sm:hidden" />で。
                    </p>
                    <div className="text-xs sm:text-sm text-cyan-300 px-2">
                      <strong>実例：</strong> <span className="inline-block">楽天注文履歴の自動出力、</span><span className="inline-block">iPhone明細PDFの自動保存＆文字起こし</span>
                    </div>
                  </div>

                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <h4 className="text-base sm:text-lg md:text-xl font-black mb-4 text-cyan-400">
                      <i className="fas fa-spider mr-3"></i><span className="whitespace-nowrap">スクレイピング→可視化</span>
                    </h4>
                    <p className="text-gray-300 mb-4 text-xs sm:text-sm md:text-base px-2">
                      日次収集→表・グラフ更新。例外・ブロック<br className="sm:hidden" />対策、キャッシュ戦略を学習。
                    </p>
                    <div className="text-xs sm:text-sm text-cyan-300 px-2">
                      <strong>到達目標：</strong> <span className="inline-block">90日で社内/副業向けの</span><span className="inline-block">ツールを1本公開</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specialized' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-4">
                    <span className="whitespace-nowrap">専門分野カリキュラム</span>
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base px-2">実際のビジネスシーンで活用できる専門知識</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <h4 className="text-base sm:text-lg font-black mb-4 text-cyan-400">
                      <i className="fas fa-calculator mr-3"></i><span className="whitespace-nowrap">経理×AI</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 px-2">
                      <li>• 領収書・請求書の自動読み取りと仕訳生成</li>
                      <li>• 勘定科目の自動判定システム</li>
                      <li>• 月次・年次決算資料の自動作成</li>
                      <li>• 経費精算の承認フロー自動化</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <h4 className="text-base sm:text-lg font-black mb-4 text-cyan-400">
                      <i className="fas fa-exchange-alt mr-3"></i><span className="whitespace-nowrap">転売×AI</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 px-2">
                      <li>• 商品トレンド分析と仕入れ判断支援</li>
                      <li>• 競合価格の自動監視と価格調整</li>
                      <li>• 商品説明文の自動生成</li>
                      <li>• 在庫管理と売上予測</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <h4 className="text-base sm:text-lg font-black mb-4 text-cyan-400">
                      <i className="fas fa-bullhorn mr-3"></i><span className="whitespace-nowrap">アフィリエイト×AI</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 px-2">
                      <li>• SEOに最適化されたコンテンツ自動生成</li>
                      <li>• キーワード分析と記事企画の自動化</li>
                      <li>• 成果の良い案件の自動抽出</li>
                      <li>• SNS投稿の自動化とエンゲージメント分析</li>
                    </ul>
                  </div>

                  <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                    <h4 className="text-base sm:text-lg font-black mb-4 text-cyan-400">
                      <i className="fas fa-chart-line mr-3"></i><span className="whitespace-nowrap">その他の分野</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 px-2">
                      <li>• マーケティング自動化</li>
                      <li>• HR・採用支援システム</li>
                      <li>• 不動産投資分析ツール</li>
                      <li>• カスタム業務システム開発</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}