'use client';

import { useRouter } from 'next/navigation';

export default function PricingSection() {
  const router = useRouter();
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">料金プラン</span>
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto fade-in">
          <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl border-2 border-cyan-500/30 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold">
              POPULAR
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                <span className="whitespace-nowrap">ベーシックプラン</span>
              </h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">¥2,980</span>
                <span className="text-base sm:text-lg md:text-xl text-gray-300">/月（税込）</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base">全ての機能が含まれています</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-6 text-center text-white">
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
              <button
                onClick={() => router.push('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-2 transition-all duration-300 w-full"
              >
                <i className="fas fa-credit-card mr-3"></i><span className="whitespace-nowrap">今すぐ申し込む</span>
              </button>
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