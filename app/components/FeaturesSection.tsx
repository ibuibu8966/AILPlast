'use client';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-white">
            <span className="inline-block">サロンの</span><span className="text-cyan-400 whitespace-nowrap">3つの特徴</span>
          </h2>
        </div>

        <div className="space-y-20">
          {/* 特徴1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-900/50 border border-cyan-400/50 rounded-full text-cyan-400 text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
                <span className="whitespace-nowrap">AI・生成AI専門</span><span className="whitespace-nowrap">カリキュラム</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed px-2">
                最新ツールの&quot;正しい使い方&quot;を厳選し、実務で再現できる型を配布。プロンプト設計から自動化実装まで、段階的に学べる体系化されたカリキュラムです。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">プロンプト設計チェックリスト（要約・抽出・分類・仕様化）</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">ツール用途マップと比較（検索・要約・表変換・議事録化）</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">楽天注文履歴抽出・iPhone明細PDF自動保存などの実例</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-cyan-500/20">
              <div className="text-center">
                <i className="fas fa-brain text-6xl text-cyan-400 mb-6"></i>
                <div className="space-y-4">
                  <div className="bg-cyan-900/30 border border-cyan-500/20 rounded-lg p-4">
                    <span className="text-sm font-semibold text-cyan-400">30日後の到達目標</span>
                    <p className="text-sm text-gray-300 mt-2">日常タスクの自動化 + AI議事録システム完成</p>
                  </div>
                  <div className="bg-blue-900/30 border border-blue-500/20 rounded-lg p-4">
                    <span className="text-sm font-semibold text-blue-400">90日後の到達目標</span>
                    <p className="text-sm text-gray-300 mt-2">社内で使える実用ツール1本公開</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 特徴2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
            <div className="lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900/50 border border-blue-400/50 rounded-full text-blue-400 text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
                <span className="whitespace-nowrap">本格プログラミング</span><span className="whitespace-nowrap">実装</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed px-2">
                基礎→API連携→運用まで、&quot;動かし続ける&quot;実装力を獲得。例外処理やログ管理まで含めた、現場レベルの開発スキルを身につけます。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-code text-cyan-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">GAS/JavaScript/Pythonでの自動化とAPI連携</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-shield-alt text-cyan-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">例外処理・ログ・通知（Slack/メール）まで含めた運用設計</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-database text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">スクレイピング→シート/DB→可視化（定期実行・失敗時リトライ）</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center">
                <i className="fas fa-laptop-code text-6xl text-blue-400 mb-6"></i>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-gray-300">JavaScript/GAS</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full">
                      <div className="w-full h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-gray-300">Python</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full">
                      <div className="w-5/6 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-gray-300">API連携</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full">
                      <div className="w-4/5 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 特徴3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-900/50 border border-purple-400/50 rounded-full text-purple-400 text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
                <span className="whitespace-nowrap">コミュニティ</span><span className="whitespace-nowrap">学習環境</span>
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed px-2">
                Discordで&quot;詰まりを最短で解消&quot;し、成果物を積み上げる。質問し放題の環境で、挫折せずに継続的な成長を実現できます。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fab fa-discord text-purple-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">質問箱・自動化レシピ・制作ギャラリー・ライブ告知チャンネル</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-video text-cyan-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">ライブ配信＋アーカイブでいつでも復習、質問し放題</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-code-branch text-blue-400 mt-1 mr-3"></i>
                  <span className="text-gray-300 text-xs sm:text-sm md:text-base">コードレビュー（可読性・保守性・例外処理・運用設計）</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-cyan-500/20">
              <div className="text-center">
                <i className="fas fa-users text-6xl text-purple-400 mb-6"></i>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-gray-300">質問対応</span>
                    <span className="text-xs bg-cyan-900/50 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">24時間</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-gray-300">ライブ配信</span>
                    <span className="text-xs bg-blue-900/50 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">週1回</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-semibold text-gray-300">コードレビュー</span>
                    <span className="text-xs bg-purple-900/50 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">随時</span>
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