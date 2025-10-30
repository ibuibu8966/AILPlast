'use client';

export default function WhatYouCanDoWithAISection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pexels-tara-winstead-8386440.jpg"
          alt="AI技術の背景"
          className="w-full h-full object-cover"
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/95 to-black/95"></div>
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.02
        }}></div>
      </div>

      {/* Animated tech elements */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/30 rounded-lg transform rotate-45 floating hidden lg:block"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-blue-400/30 rounded-lg transform rotate-12 floating-reverse hidden lg:block"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-cyan-300/20 rounded-full floating hidden lg:block" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse pointer-events-none z-[1]"></div>
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse pointer-events-none z-[1]" style={{animationDelay: '2s'}}></div>

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
            <span className="inline-block">AIを使って</span><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap animate-gradient bg-[length:200%_auto]">何ができる</span><span className="inline-block">のか？</span>
          </h2>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base px-2 font-medium">
            <span className="inline-block">すぐに使える</span><span className="text-cyan-300 font-black whitespace-nowrap">業務効率化</span><span className="inline-block">から、</span><span className="inline-block">本格的な</span><span className="text-blue-300 font-black whitespace-nowrap">自動化システム構築</span><span className="inline-block">まで</span>
          </p>
        </div>

        {/* メインコンテンツエリア */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in">
          {/* 日常業務の効率化カード */}
          <div className="group relative">
            {/* Multiple glow layers */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-60 transition duration-1000"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gray-800/80 backdrop-blur-md border-2 border-cyan-500/30 rounded-3xl p-8 hover:bg-gray-800/90 transition-all duration-300 shadow-2xl">
              {/* Top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-6 flex items-center text-white">
              <i className="fas fa-briefcase text-cyan-400 mr-3"></i>
              <span className="whitespace-nowrap">日常業務の効率化</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                <span className="text-gray-300">要約・抽出・分類・仕様化の型と<br className="hidden sm:inline" />チェックリストを活用</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                <span className="text-gray-300">議事録の自動化とポイント抽出</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                <span className="text-gray-300">データの整理と分析レポート<br className="hidden sm:inline" />自動生成</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                <span className="text-gray-300">仕様書の下書きと要件整理の<br className="hidden sm:inline" />効率化</span>
              </div>
            </div>
            </div>
          </div>

          {/* 実際の活用例カード */}
          <div className="group relative">
            {/* Multiple glow layers */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-60 transition duration-1000"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-blue-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gray-800/80 backdrop-blur-md border-2 border-cyan-500/30 rounded-3xl p-8 hover:bg-gray-800/90 transition-all duration-300 shadow-2xl">
              {/* Top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-6 flex items-center text-white">
              <i className="fas fa-lightbulb text-cyan-400 mr-3"></i>
              <span className="whitespace-nowrap">実際の活用例</span>
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
                <i className="fas fa-shopping-cart text-cyan-400 mr-2"></i>
                <span className="font-semibold text-gray-200 text-xs sm:text-sm md:text-base">楽天の注文履歴を自動抽出・整理</span>
              </div>
              <div className="bg-gray-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
                <i className="fas fa-mobile-alt text-blue-400 mr-2"></i>
                <span className="font-semibold text-gray-200 text-xs sm:text-sm md:text-base">iPhone明細PDFの自動保存＆文字起こし</span>
              </div>
              <div className="bg-gray-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
                <i className="fas fa-envelope text-cyan-400 mr-2"></i>
                <span className="font-semibold text-gray-200 text-xs sm:text-sm md:text-base">Gmail請求書の自動保存と分類</span>
              </div>
              <div className="bg-gray-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4">
                <i className="fas fa-users text-blue-400 mr-2"></i>
                <span className="font-semibold text-gray-200 text-xs sm:text-sm md:text-base">会議内容の自動要約とタスク抽出</span>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* 特化分野での活用 */}
        <div className="mt-12 text-center fade-in">
          <p className="text-base sm:text-lg md:text-xl font-bold mb-4 text-cyan-400">
            <span className="whitespace-nowrap">さらに、特化分野での活用も</span>
          </p>
          <p className="text-gray-300 mb-8 text-xs sm:text-sm md:text-base px-2">
            今後サロンでは、様々な分野でのAI活用ノウハウも展開予定：
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-gray-800/70 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 hover:bg-gray-800/90 transition-all duration-300">
              <i className="fas fa-calculator text-cyan-400 text-2xl mb-2"></i>
              <p className="font-semibold text-xs sm:text-sm text-white whitespace-nowrap">経理×AI</p>
              <p className="text-xs text-gray-400">仕訳の自動化、決算書類の作成支援、経費精算の効率化</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 hover:bg-gray-800/90 transition-all duration-300">
              <i className="fas fa-sync text-cyan-400 text-2xl mb-2"></i>
              <p className="font-semibold text-xs sm:text-sm text-white whitespace-nowrap">転売×AI</p>
              <p className="text-xs text-gray-400">商品リサーチの自動化、価格動向分析、出品作業の効率化</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 hover:bg-gray-800/90 transition-all duration-300">
              <i className="fas fa-bullhorn text-blue-400 text-2xl mb-2"></i>
              <p className="font-semibold text-xs sm:text-sm text-white whitespace-nowrap">アフィリエイト×AI</p>
              <p className="text-xs text-gray-400">コンテンツ生成、SEO分析、案件選定の自動化</p>
            </div>
            <div className="bg-gray-800/70 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 hover:bg-gray-800/90 transition-all duration-300">
              <i className="fas fa-chart-line text-cyan-400 text-2xl mb-2"></i>
              <p className="font-semibold text-xs sm:text-sm text-white whitespace-nowrap">その他</p>
              <p className="text-xs text-gray-400">マーケティング、HR、不動産投資分析など</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}