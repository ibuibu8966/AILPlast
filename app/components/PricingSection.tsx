'use client';

import { useRouter } from 'next/navigation';

export default function PricingSection() {
  const router = useRouter();
  return (
    <section id="pricing" className="relative py-20 bg-gray-900 overflow-hidden">
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
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap animate-gradient bg-[length:200%_auto]">料金プラン</span>
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto fade-in">
          <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl border-2 border-cyan-500/30 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold">
              POPULAR
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-4">
                <span className="whitespace-nowrap">ベーシックプラン</span>
              </h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">¥2,980</span>
                <span className="text-base sm:text-lg md:text-xl text-gray-300">/月（税込）</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">全ての機能が含まれています</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-base sm:text-lg md:text-xl font-black mb-6 text-center text-white">
                <span className="whitespace-nowrap">含まれるサービス:</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">AI・生成AIツールの使い方講習</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">最新動向の紹介とライブQ&A</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">プログラミング基礎解説</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">デモ・モックアプリの共有</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">定期ライブ配信（週1回または月1回）</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">アーカイブ視聴（過去の全配信）</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">Discord質問し放題</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">コードレビューサポート</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">個別最適化アンケート</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">学習ロードマップ提供</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative inline-block w-full">
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

                <button
                  onClick={() => router.push('/contact')}
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-black rounded-full overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 border-2 border-cyan-400/30 w-full"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  <i className="fas fa-credit-card relative z-10"></i>
                  <span className="relative z-10 whitespace-nowrap">今すぐ申し込む</span>

                  {/* Sparkles */}
                  <div className="absolute top-1 right-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-1 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mt-4">
                安全な決済システムで簡単お申し込み
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}