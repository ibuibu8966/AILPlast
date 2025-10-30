'use client';

export default function DailyWorkSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/11.jpg"
          alt="仕事で悩む人"
          className="w-full h-full object-cover opacity-20"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/50 to-black/80"></div>
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.02
        }}></div>
      </div>

      {/* Animated tech elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-cyan-400/20 rounded-lg transform rotate-45 floating hidden lg:block"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-purple-400/20 rounded-lg transform rotate-12 floating-reverse hidden lg:block"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-blue-300/20 rounded-full floating hidden lg:block" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating animation elements - Enhanced */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
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

          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black mb-6 drop-shadow-2xl">
            <span className="inline-block whitespace-nowrap">毎日の作業、もっと</span><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap animate-gradient bg-[length:200%_auto]">楽にできるはず</span><span className="inline-block whitespace-nowrap">なのに...</span>
          </h2>
          <p className="text-gray-300 fade-in-animation text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-2 whitespace-nowrap max-w-3xl mx-auto">
            毎日同じ作業の繰り返しで時間を取られていませんか？
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Problem 1 */}
          <div className="group relative">
            {/* Multiple glow layers */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>

            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-100/50">
              <div className="absolute inset-0 opacity-20">
                <img src="/11.jpg" alt="背景" className="w-full h-full object-cover" />
              </div>

              {/* Top glow line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    {/* Multiple pulse rings */}
                    <div className="absolute -inset-4 border-2 border-cyan-400/30 rounded-2xl animate-pulse"></div>
                    <div className="absolute -inset-6 border border-cyan-400/20 rounded-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <i className="fas fa-exclamation-triangle text-4xl text-white"></i>
                    </div>
                    {/* Sparkles */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-center text-gray-900">
                  <span className="whitespace-nowrap">AIツールが</span><br className="sm:hidden" /><span className="whitespace-nowrap">使いこなせない</span>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed px-2">
                  <span className="inline-block">ChatGPTは知っているけど、</span><br className="sm:hidden" />
                  <span className="inline-block">仕事でうまく活用できていない</span>
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="group relative md:-mt-4">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="absolute -inset-3 border border-purple-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-white via-purple-50/30 to-white rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-100/50">
              <div className="absolute inset-0 opacity-20">
                <img src="/susan-q-yin-Ctaj_HCqW84-unsplash.jpg" alt="背景" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 border-2 border-purple-400/30 rounded-2xl animate-pulse"></div>
                    <div className="absolute -inset-6 border border-purple-400/20 rounded-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center transform -rotate-3 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <i className="fas fa-compass text-4xl text-white"></i>
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-center text-gray-900">
                  <span className="whitespace-nowrap">何から始めれば</span><br className="sm:hidden" /><span className="whitespace-nowrap">いいかわからない</span>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed px-2">
                  <span className="inline-block">プログラミングに興味はあるけど、</span><br className="sm:hidden" />
                  <span className="inline-block">最初の一歩が踏み出せない</span>
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="group relative md:-mt-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <div className="absolute -inset-3 border border-blue-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100/50">
              <div className="absolute inset-0 opacity-20">
                <img src="/pexels-ivan-samkov-7703268.jpg" alt="背景" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

              <div className="relative z-10 p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 border-2 border-blue-400/30 rounded-2xl animate-pulse"></div>
                    <div className="absolute -inset-6 border border-blue-400/20 rounded-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <i className="fas fa-hourglass-half text-4xl text-white"></i>
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-center text-gray-900">
                  <span className="whitespace-nowrap">効率化の方法が</span><br className="sm:hidden" /><span className="whitespace-nowrap">見つからない</span>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed px-2">
                  <span className="inline-block">毎日同じ作業の繰り返しで</span><br className="sm:hidden" />
                  <span className="inline-block">時間ばかりが過ぎていく</span>
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto fade-in px-6">
          <div className="relative group">
            {/* Multiple glow layers */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>

            {/* Outer decorative frames */}
            <div className="absolute -inset-6 border-2 border-cyan-400/10 rounded-3xl hidden lg:block"></div>
            <div className="absolute -inset-6 border border-cyan-400/10 rounded-3xl transform rotate-1 hidden lg:block"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover-lift border-2 border-cyan-400/30">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="AIとプログラミング学習"
                  className="w-full h-full object-cover"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
              </div>

              {/* Inner glow lines */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-cyan-400/50 via-blue-400/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-purple-400/50 via-blue-400/50 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 p-12 md:p-16 lg:p-20 text-center md:text-left">
                <div className="max-w-3xl">
                  {/* Top decoration */}
                  <div className="flex justify-center md:justify-start mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                      <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg md:text-xl lg:text-3xl mb-8 text-white font-black drop-shadow-2xl leading-relaxed">
                    <span className="inline-block">そんなあなたのために、</span><br className="md:hidden" />
                    <span className="inline-block">「<span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">学ぶ</span>」で終わらせない実践的な</span><br className="md:hidden" />
                    <span className="inline-block whitespace-nowrap">サロンを用意しました。</span>
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-semibold">
                    <span className="inline-block">明日の業務から使える「<span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent font-black text-xl md:text-2xl">武器</span>」を手に入れて、</span><br className="md:hidden" />
                    <span className="inline-block whitespace-nowrap">働き方を変えてみませんか？</span>
                  </p>

                  {/* Bottom sparkles */}
                  <div className="absolute bottom-8 right-8 flex gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}