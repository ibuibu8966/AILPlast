'use client';

export default function WhyAIProgrammingSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* 背景動画 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/3141210-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-gray-900/80 to-gray-900/90"></div>
      </div>
      
      {/* 装飾的な要素 */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl floating-reverse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            <span className="inline-block">なぜ今、</span><span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">AIとプログラミング</span><span className="inline-block">なのか</span>
          </h2>
          <p className="text-gray-300 fade-in-animation text-sm sm:text-base">
            <span className="inline-block">時代の転換点に立つ今、</span><span className="inline-block">準備をするかしないで大きな差が生まれています。</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-12 fade-in relative z-20">
          <div className="relative z-30">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-cyan-400 whitespace-nowrap">変化の波が押し寄せている</h3>
            <div className="space-y-4 relative z-40">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base">AIの伸びは&quot;待ってくれない&quot;</h4>
                  <p className="text-gray-200 text-xs sm:text-xs md:text-sm font-medium leading-relaxed">
                    <span className="block">AIは毎年およそ29%のペースで拡大。</span>
                    <span className="block">いまの規模が4年で&quot;ほぼ2倍&quot;に。</span>
                    <span className="block">2028年には約6,320億ドル規模に</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base">作れる人が&quot;先に選ばれる&quot;</h4>
                  <p className="text-gray-200 text-xs sm:text-xs md:text-sm font-medium leading-relaxed">
                    <span className="block">プログラマーの求人はこの10年で約17%増。</span>
                    <span className="block">AIを使って仕事を前に進められる人に声がかかっています</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base">単純作業は&quot;どんどん任せる&quot;時代へ</h4>
                  <p className="text-gray-200 text-xs sm:text-xs md:text-sm font-medium leading-relaxed">
                    <span className="block">AI用の巨大なサーバー施設への投資は去年より約51%増。</span>
                    <span className="block">くり返し作業をこなすソフトも約18%増</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-white text-xs sm:text-sm md:text-base">だから、今動くほど得をする</h4>
                  <p className="text-gray-200 text-xs sm:text-xs md:text-sm font-medium leading-relaxed">
                    <span className="block">波が大きいほど、早く乗った人の差は広がります。</span>
                    <span className="block">基礎から始めれば、数年後の選択肢が増えます</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-2xl p-8 shadow-2xl border-2 border-cyan-400/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text relative z-10 whitespace-nowrap">市場動向</h3>
            <div className="space-y-6 relative z-10">
              <div className="bg-white/80 backdrop-blur p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-800">AI市場の伸び</span>
                  <span className="text-cyan-500 font-black text-lg">毎年+29%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 h-4 rounded-full shadow-sm" style={{width: '90%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">4年で&quot;ほぼ2倍&quot;へ（100が200になるペース）</p>
              </div>
              <div className="bg-white/80 backdrop-blur p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-800">プログラマーの求人</span>
                  <span className="text-blue-500 font-black text-lg">10年で+17%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 h-4 rounded-full shadow-sm" style={{width: '60%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">AIを使える人から選ばれる</p>
              </div>
              <div className="bg-white/80 backdrop-blur p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-800">自動化への投資</span>
                  <span className="text-purple-500 font-black text-lg">去年より+51%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 h-4 rounded-full shadow-sm" style={{width: '80%'}}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">AI用サーバーに資金集中（100億が151億になる勢い）</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong>出典：</strong>IDC／Gartner／米国労働統計局／世界経済フォーラム／Dell&apos;Oro／国際ロボット連盟など最新公表値
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 text-center max-w-4xl mx-auto fade-in hover-lift relative overflow-hidden border border-cyan-500/20">
          <div className="absolute inset-0 shimmer"></div>
          <p className="text-base sm:text-lg md:text-xl mb-2 text-white relative z-10">
            <span className="inline-block">今から学べば、</span><span className="inline-block">数年後の選択肢が増えます</span>
          </p>
          <p className="text-cyan-400 font-bold relative z-10 text-sm sm:text-base">
            <i className="fas fa-rocket mr-2"></i>
            <span className="whitespace-nowrap">波に乗り遅れないための準備を始めましょう</span>
          </p>
        </div>
      </div>
    </section>
  );
}