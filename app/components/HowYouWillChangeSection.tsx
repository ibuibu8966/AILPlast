'use client';

export default function HowYouWillChangeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.02
        }}></div>
      </div>

      {/* Animated tech elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/30 rounded-lg transform rotate-45 floating hidden lg:block"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-blue-400/30 rounded-lg transform rotate-12 floating-reverse hidden lg:block"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-cyan-300/20 rounded-full floating hidden lg:block" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0"></div>
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 fade-in">
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

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 text-white drop-shadow-2xl">
            <span className="inline-block">サロンに入ると、あなたは</span><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap animate-gradient bg-[length:200%_auto]">どう変わる</span><span className="inline-block">？</span>
          </h2>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base px-2 font-medium">
            <span className="text-cyan-300 font-black whitespace-nowrap">30日後、90日後</span><span className="inline-block">のあなたは今とは全く違うレベルにいます</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 fade-in">
          {/* 30日後カード */}
          <div className="group relative">
            {/* Multiple glow layers */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>

            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gray-800 rounded-3xl p-8 shadow-2xl border-2 border-cyan-500/30 overflow-hidden">
              {/* Top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

              <div className="relative flex justify-center mb-4">
                {/* Multiple pulse rings */}
                <div className="absolute -inset-4 border-2 border-cyan-400/30 rounded-full animate-pulse"></div>
                <div className="absolute -inset-6 border border-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>

                <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  30
                  {/* Sparkles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-black text-center mb-4 text-cyan-400">
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
          </div>

          {/* 90日後カード */}
          <div className="group relative">
            {/* Multiple glow layers */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>

            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-blue-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gray-800 rounded-3xl p-8 shadow-2xl border-2 border-blue-500/30 overflow-hidden">
              {/* Top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

              <div className="relative flex justify-center mb-4">
                {/* Multiple pulse rings */}
                <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
                <div className="absolute -inset-6 border border-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>

                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  90
                  {/* Sparkles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-black text-center mb-4 text-blue-400">
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
        </div>

        <div className="group relative bg-gray-800 border border-cyan-500/20 rounded-3xl p-8 max-w-4xl mx-auto fade-in shadow-2xl">
          {/* Top glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-center mb-6 text-cyan-400">
            <span className="whitespace-nowrap">得られる具体的な変化</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="relative inline-block mb-3">
                <div className="absolute -inset-2 border border-cyan-400/20 rounded-full animate-pulse"></div>
                <i className="fas fa-clock text-3xl text-cyan-400"></i>
              </div>
              <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base whitespace-nowrap">時間の大幅削減</h4>
              <p className="text-xs sm:text-sm text-gray-400">毎日2-3時間の時短を実現</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-block mb-3">
                <div className="absolute -inset-2 border border-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <i className="fas fa-star text-3xl text-cyan-400"></i>
              </div>
              <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base whitespace-nowrap">社内評価アップ</h4>
              <p className="text-xs sm:text-sm text-gray-400">効率化の提案と実装で存在感向上</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-block mb-3">
                <div className="absolute -inset-2 border border-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <i className="fas fa-chart-line text-3xl text-blue-400"></i>
              </div>
              <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base whitespace-nowrap">副業の受注力向上</h4>
              <p className="text-xs sm:text-sm text-gray-400">実績とポートフォリオの充実</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-block mb-3">
                <div className="absolute -inset-2 border border-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
                <i className="fas fa-gem text-3xl text-cyan-400"></i>
              </div>
              <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base whitespace-nowrap">将来への投資</h4>
              <p className="text-xs sm:text-sm text-gray-400">AI時代に必要不可欠なスキルセット獲得</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
