'use client';

import { useRouter } from 'next/navigation';

export default function FinalCTASection() {
  const router = useRouter();
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="bg-gray-800 rounded-3xl p-12 shadow-2xl border border-cyan-500/30">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
              <span className="whitespace-nowrap">結果が出る学びを、</span><span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">今日から。</span>
            </h2>
            <p className="text-base sm:text-xl md:text-2xl font-bold mb-6 text-cyan-400">
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
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-cyan-400">
                <span className="whitespace-nowrap">今始めれば、</span><span className="inline-block">3ヶ月後には周りから頼られる存在になっています。</span>
              </p>
            </div>
            
            <div>
              <button
                onClick={() => router.push('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-full shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-2 transition-all duration-300 mb-6 whitespace-nowrap">
                <i className="fas fa-rocket mr-2 sm:mr-4"></i>お申し込みはこちら
              </button>
              
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