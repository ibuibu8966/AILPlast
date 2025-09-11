'use client';

import Header from '../components/Header';

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              料金プラン
            </h2>
            
            <div className="max-w-4xl mx-auto">
              {/* プランカード */}
              <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-1 rounded-3xl">
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">ベーシックプラン</h3>
                    <p className="text-gray-400">全てのコンテンツに無制限アクセス</p>
                  </div>
                  
                  <div className="text-center mb-10">
                    <div className="flex items-baseline justify-center">
                      <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        ¥2,980
                      </span>
                      <span className="text-gray-400 ml-2 text-xl">/月（税込）</span>
                    </div>
                    <p className="text-cyan-400 mt-3">
                      <i className="fas fa-gift mr-2"></i>
                      今なら初月無料・いつでも解約可能
                    </p>
                  </div>
                  
                  {/* 含まれるサービス */}
                  <div className="space-y-4 mb-10">
                    <h4 className="text-lg font-semibold text-white text-center mb-6">含まれるサービス</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">AI・生成AIツールの使い方講習</p>
                          <p className="text-gray-400 text-sm">ChatGPT、Claude、Gemini等の実践活用</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">最新動向の紹介とライブQ&A</p>
                          <p className="text-gray-400 text-sm">週1回の定期配信で最新情報をキャッチ</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">プログラミング基礎解説</p>
                          <p className="text-gray-400 text-sm">GAS、Python、JavaScriptの実践講座</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">デモ・モックアプリの共有</p>
                          <p className="text-gray-400 text-sm">実際に動くサンプルコードで学習</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">定期ライブ配信</p>
                          <p className="text-gray-400 text-sm">リアルタイムで質問・相談可能</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">アーカイブ視聴</p>
                          <p className="text-gray-400 text-sm">過去の全配信をいつでも視聴可能</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">Discord質問し放題</p>
                          <p className="text-gray-400 text-sm">24時間いつでも質問・相談OK</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">コードレビューサポート</p>
                          <p className="text-gray-400 text-sm">プロの視点でコード品質を向上</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">個別最適化アンケート</p>
                          <p className="text-gray-400 text-sm">あなたに合った学習プランを提案</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3 flex-shrink-0"></i>
                        <div>
                          <p className="text-white font-medium">学習ロードマップ提供</p>
                          <p className="text-gray-400 text-sm">効率的な学習経路をガイド</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg py-4 rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                    <i className="fas fa-rocket mr-2"></i>
                    今すぐ始める（初月無料）
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm mt-4">
                    ※ クレジットカード登録必要・いつでも解約可能
                  </p>
                </div>
              </div>
              
              {/* 特典 */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-medal text-white text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">30日間返金保証</h4>
                  <p className="text-gray-400 text-sm">満足いただけない場合は全額返金</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-users text-white text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">活発なコミュニティ</h4>
                  <p className="text-gray-400 text-sm">500名以上の仲間と切磋琢磨</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-certificate text-white text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">修了証明書発行</h4>
                  <p className="text-gray-400 text-sm">スキルの証明として活用可能</p>
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