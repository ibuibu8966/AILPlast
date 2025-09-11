'use client';

import Header from '../components/Header';

export default function InstructorsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              実績豊富な講師陣
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* 講師1: KIDD */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-cyan-500/30">
                    K
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">KIDD</h3>
                    <p className="text-cyan-400">AI・生成AIツール専門講師</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    最新のAI技術と実践的な活用方法を専門とする講師。
                    企業向けAI導入コンサルティングの豊富な経験を持ち、
                    初心者にも分かりやすい解説で定評がある。
                  </p>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="text-white font-semibold mb-3">専門分野</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                        <i className="fas fa-robot mr-1"></i>AI ツール活用講習
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                        <i className="fas fa-microphone mr-1"></i>ライブQ&A
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                        <i className="fas fa-video mr-1"></i>定期ライブ配信
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      <span>受講生満足度 4.9/5.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 講師2: R */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-purple-500/30">
                    R
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-white">R</h3>
                    <p className="text-purple-400">プログラミング・開発実務講師</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    元TECH CAMP講師、現経営者。
                    実務経験豊富なエンジニアとして、
                    即戦力となる実践的なスキルの習得をサポート。
                  </p>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <h4 className="text-white font-semibold mb-3">専門分野</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        <i className="fas fa-code mr-1"></i>プロトタイプ開発ライブ解説
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        <i className="fas fa-server mr-1"></i>環境構築から本番デプロイまで
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        <i className="fas fa-code-branch mr-1"></i>コードレビュー
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      <span>受講生満足度 4.8/5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* サポート体制 */}
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center text-white mb-8">充実のサポート体制</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-comments text-white text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">24時間質問対応</h4>
                  <p className="text-gray-400 text-sm">Discordで質問し放題。講師陣が迅速に回答</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-video text-white text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">週次ライブ配信</h4>
                  <p className="text-gray-400 text-sm">最新技術の解説と実演を毎週ライブで配信</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-user-graduate text-white text-2xl"></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">個別メンタリング</h4>
                  <p className="text-gray-400 text-sm">学習進捗に応じた個別アドバイス</p>
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