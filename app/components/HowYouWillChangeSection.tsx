'use client';

export default function HowYouWillChangeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            <span className="inline-block">サロンに入ると、あなたは</span><span className="text-cyan-400 whitespace-nowrap">どう変わる</span><span className="inline-block">？</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base px-2">
            <span className="text-cyan-400 font-bold whitespace-nowrap">30日後、90日後</span><span className="inline-block">のあなたは今とは全く違うレベルにいます</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 fade-in">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-cyan-500/30">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              30
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-4 text-cyan-400">
              <span className="whitespace-nowrap">30日後の到達目標</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-rocket text-cyan-400 mt-1 mr-3"></i>
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">日常タスクの自動化システム1つ完成</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check text-cyan-400 mt-1 mr-3"></i>
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">AI議事録システムの構築と運用開始</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-code text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">プロンプト設計の基本パターンを習得</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-blue-500/30">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              90
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-4 text-blue-400">
              <span className="whitespace-nowrap">90日後の到達目標</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-times text-cyan-400 mt-1 mr-3"></i>
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">社内で使える実用的なツールを1本公開</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-briefcase text-cyan-400 mt-1 mr-3"></i>
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">複数の自動化システムを組み合わせた業務フロー構築</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-chart-line text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">副業案件に対応できるスキルレベルに到達</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 border border-cyan-500/20 rounded-2xl p-8 max-w-4xl mx-auto fade-in">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-6 text-cyan-400">
            <span className="whitespace-nowrap">得られる具体的な変化</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <i className="fas fa-clock text-3xl text-cyan-400 mb-3"></i>
              <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base whitespace-nowrap">時間の大幅削減</h4>
              <p className="text-xs sm:text-sm text-gray-400">毎日2-3時間の時短を実現</p>
            </div>
            <div className="text-center">
              <i className="fas fa-star text-3xl text-cyan-400 mb-3"></i>
              <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base whitespace-nowrap">社内評価アップ</h4>
              <p className="text-xs sm:text-sm text-gray-400">効率化の提案と実装で存在感向上</p>
            </div>
            <div className="text-center">
              <i className="fas fa-chart-line text-3xl text-blue-400 mb-3"></i>
              <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base whitespace-nowrap">副業の受注力向上</h4>
              <p className="text-xs sm:text-sm text-gray-400">実績とポートフォリオの充実</p>
            </div>
            <div className="text-center">
              <i className="fas fa-gem text-3xl text-cyan-400 mb-3"></i>
              <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base whitespace-nowrap">将来への投資</h4>
              <p className="text-xs sm:text-sm text-gray-400">AI時代に必要不可欠なスキルセット獲得</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}