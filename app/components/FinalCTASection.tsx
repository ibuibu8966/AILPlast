'use client';

import { useRouter } from 'next/navigation';

export default function FinalCTASection() {
  const router = useRouter();
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="bg-gray-800 rounded-3xl p-12 shadow-2xl border border-cyan-500/30">
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

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-white drop-shadow-2xl">
              <span className="whitespace-nowrap">結果が出る学びを、</span><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap animate-gradient bg-[length:200%_auto]">今日から。</span>
            </h2>
            <p className="text-base sm:text-xl md:text-2xl font-black mb-6 text-cyan-400">
              <span className="inline-block">AI×プログラミングで、</span><span className="inline-block">あなたのキャリアを次のレベルへ。</span>
            </p>
            
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                <span className="whitespace-nowrap">「学んだけど使えない」</span><span className="whitespace-nowrap">「時間だけが過ぎていく」</span><span className="whitespace-nowrap">そんな経験はもう終わりです。</span>
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                このサロンでは、<strong className="text-cyan-400">学んだその日から実践できる</strong>実用的なスキルを身につけられます。週3〜5時間の学習で、&quot;動く成果物&quot;が確実に積み上がっていきます。
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                作業時間の削減・社内評価アップ・副業の受注力向上・ポートフォリオ充実を現実のものにしましょう。
              </p>
            </div>
            
            <div className="mb-12">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-cyan-400">
                <span className="whitespace-nowrap">今始めれば、</span><span className="inline-block">3ヶ月後には周りから頼られる存在になっています。</span>
              </p>
            </div>

            <div>
              <div className="relative inline-block mb-6">
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

                <button
                  onClick={() => router.push('/contact')}
                  className="group relative inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] text-white px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-black rounded-full overflow-hidden transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 border-2 border-cyan-400/30 whitespace-nowrap"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  <i className="fas fa-rocket relative z-10"></i>
                  <span className="relative z-10">お申し込みはこちら</span>

                  {/* Sparkles */}
                  <div className="absolute top-2 right-12 w-1 h-1 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-12 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </button>
              </div>
              
              <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 text-gray-400 text-xs sm:text-sm">
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-cyan-400 mr-2"></i>
                  <span className="whitespace-nowrap">安全な決済</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-headset text-cyan-400 mr-2"></i>
                  <span className="whitespace-nowrap">充実サポート</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-cyan-400 mr-2"></i>
                  <span className="whitespace-nowrap">いつでも学習</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}