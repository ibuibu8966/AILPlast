'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Night city background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Night city background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-black/50 to-cyan-900/50"></div>
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.03
        }}></div>
      </div>

      {/* Animated tech elements */}
      <div className="absolute inset-0 z-2">
        {/* Floating tech shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/30 rounded-lg transform rotate-45 floating"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-400/30 rounded-lg transform rotate-12 floating-reverse"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-cyan-300/20 rounded-full floating" style={{animationDelay: '2s'}}></div>
        
        {/* Tech circles */}
        <div className="absolute top-40 right-1/3">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 border border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute inset-8 border border-cyan-400/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main title */}
          <h1 className="mb-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2">
              <span className="inline-block">AI×</span><span className="inline-block sm:inline">プログラミング</span><span className="inline-block sm:inline">サロン</span>
            </span>
            <span className="block text-sm sm:text-base md:text-xl lg:text-2xl text-cyan-300 font-light tracking-wider">
              <span className="inline-block">未来のスキルを、</span><span className="inline-block">今ここで手に入れよう</span>
            </span>
          </h1>

          {/* Tech frame decoration */}
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 border border-cyan-400/30 rounded-lg"></div>
            <div className="absolute -inset-4 border border-cyan-400/30 rounded-lg transform rotate-3"></div>
            <div className="relative bg-black/60 backdrop-blur-md rounded-lg p-8 border border-cyan-400/50">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                <span className="block sm:inline">実務ですぐに使える<span className="text-cyan-300 font-bold">AIスキル</span>と</span>
                <span className="block sm:inline"><span className="text-blue-300 font-bold">プログラミング</span>を同時に習得できます</span>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <button className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
              <span className="relative z-10">今すぐ始める</span>
              <i className="fas fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform"></i>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Bottom info */}
          <div className="text-gray-300 text-sm">
            毎日の作業、もっと楽にできるはずなのに...
          </div>

          {/* Tech decoration lines */}
          <div className="absolute -bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
}