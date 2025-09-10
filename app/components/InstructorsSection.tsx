'use client';

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="inline-block">実績豊富な</span><span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">講師陣</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 fade-in">
            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-cyan-500/30">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  K
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">KIDD</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  <span className="whitespace-nowrap">AI・生成AIツール</span><span className="whitespace-nowrap">専門講師</span>
                </p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-xs sm:text-sm md:text-base px-2">
                最新のAI技術とツールに精通し、実践的な活用方法を分<br className="sm:hidden" />かりやすく解説。常に最新トレンドをキャッチアップ<br className="sm:hidden" />し、本当に使えるAI情報のみを厳選してお届けしま<br className="sm:hidden" />す。
              </p>
              
              <div>
                <h4 className="font-bold text-white mb-3 text-xs sm:text-sm md:text-base">専門分野:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-robot text-cyan-400 mt-1 mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-300">AI・生成AIツールの使い方謟習と最新動向の紹介</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-question-circle text-cyan-400 mt-1 mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-300">ライブQ&Aとデモ・モックアプリの共有</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-broadcast-tower text-cyan-400 mt-1 mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-300">定期ライブ配信</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-3xl p-8 shadow-xl border border-cyan-500/30">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  R
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">R</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-300">
                  <span className="whitespace-nowrap">プログラミング・開発</span><span className="whitespace-nowrap">実務講師</span>
                </p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-xs sm:text-sm md:text-base px-2">
                元テックキャンプ講師として豊富な指導経験を持ち、現<br className="sm:hidden" />在は会社経営も手がけるプロフェッショナル。要件定義<br className="sm:hidden" />から本番デプロイまでの実務フローを、実際の開発を通<br className="sm:hidden" />じて指導します。
              </p>
              
              <div>
                <h4 className="font-bold text-white mb-3 text-xs sm:text-sm md:text-base">専門分野:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-code text-cyan-400 mt-1 mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-300">プロトタイプ開発のライブ解説</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-server text-cyan-400 mt-1 mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-300">開発環境構築から本番デプロイまで</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-double text-cyan-400 mt-1 mr-2"></i>
                    <span className="text-xs sm:text-sm text-gray-300">コードレビューと品質管理、実務レベルの開発フロー指導</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <p className="text-xs text-gray-400">
                  ※「TECH CAMP」は株式会社divの登録商標です。本サロンは同社とは一切関係ありません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}