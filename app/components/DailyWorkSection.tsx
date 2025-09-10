'use client';

export default function DailyWorkSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/11.jpg" 
          alt="仕事で悩む人" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/40 to-black/70"></div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full rotate-animation">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg">
            <span className="inline-block whitespace-nowrap">毎日の作業、もっと</span><span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">楽にできるはず</span><span className="inline-block whitespace-nowrap">なのに...</span>
          </h2>
          <p className="text-gray-300 fade-in-animation text-sm sm:text-base md:text-lg font-medium px-2 whitespace-nowrap">毎日同じ作業の繰り返しで時間を取られていませんか？</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Problem 1 */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-20">
                <img src="/11.jpg" alt="背景" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-12 transition-transform duration-300">
                      <i className="fas fa-exclamation-triangle text-3xl text-white"></i>
                    </div>
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
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-20">
                <img src="/susan-q-yin-Ctaj_HCqW84-unsplash.jpg" alt="背景" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center transform -rotate-3 group-hover:-rotate-12 transition-transform duration-300">
                      <i className="fas fa-compass text-3xl text-white"></i>
                    </div>
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
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-20">
                <img src="/pexels-ivan-samkov-7703268.jpg" alt="背景" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-12 transition-transform duration-300">
                      <i className="fas fa-hourglass-half text-3xl text-white"></i>
                    </div>
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

        <div className="mt-16 max-w-6xl mx-auto fade-in px-6">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                alt="AIとプログラミング学習" 
                className="w-full h-full object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-12 md:p-16 text-center md:text-left">
              <div className="max-w-3xl">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 text-white font-bold drop-shadow-lg">
                  <span className="inline-block">そんなあなたのために、</span><br className="md:hidden" />
                  <span className="inline-block">「<span className="text-cyan-300">学ぶ</span>」で終わらせない実践的な</span><br className="md:hidden" />
                  <span className="inline-block whitespace-nowrap">サロンを用意しました。</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-200">
                  <span className="inline-block">明日の業務から使える「<span className="text-cyan-400 font-bold">武器</span>」を手に入れて、</span><br className="md:hidden" />
                  <span className="inline-block whitespace-nowrap">働き方を変えてみませんか？</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}