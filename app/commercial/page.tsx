'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CommercialPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            特定商取引法に基づく表記
          </h1>

          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20">
            <div className="text-gray-300 space-y-6">
              <p className="text-sm text-gray-400">最終改定日：2025年10月30日　版番号：v1.0</p>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">販売事業者名</h2>
                  <p>株式会社SENRITSU</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">運営統括責任者</h2>
                  <p>加藤 大成</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">所在地</h2>
                  <p>大阪府東大阪市高殿町11-2 カワショウビル2・3階</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">電話番号</h2>
                  <p>07-3626-8645</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">お問い合わせメールアドレス</h2>
                  <p>senritsu@senritsu.site</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">公式サイトURL</h2>
                  <p>
                    <a href="https://senritsu.site" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
                      https://senritsu.site
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">販売価格</h2>
                  <p>月額2,980円（税込）</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">商品代金以外の必要料金</h2>
                  <p>銀行振込手数料等が発生する場合はお客様負担（クレジットカード手数料の上乗せ請求は行いません）</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">お支払方法</h2>
                  <p>UnivaPayを通じたクレジットカード決済</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">お支払時期</h2>
                  <p>初回は申込時（決済完了時）。以降は毎月1日に自動決済。</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">役務の提供時期</h2>
                  <p>決済完了後24時間以内に、コミュニティ参加用の招待URLを送付します。</p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-cyan-400">解約・退会について</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>退会をご希望の場合は、毎月15日までに所定のフォームよりご連絡ください。</li>
                    <li><strong>15日までの解約申請：</strong>翌月分からの請求を停止します。</li>
                    <li><strong>16日以降の解約申請：</strong>翌月分の請求が発生し、翌々月から請求停止となります。</li>
                    <li>最低契約期間はありません。</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-cyan-400">返品・返金・中途解約について</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>本サービスはデジタル役務の特性上、提供開始後の返品・返金には応じておりません。</li>
                    <li>月途中での中途解約はできません（当月の日割り・返金なし）。</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-cyan-400">定期購入（自動更新）について</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>本サービスは月額の定期購入です。お客様が解約手続きをされない限り、毎月自動で更新・課金されます。</li>
                    <li>無料体験・初月割引はありません。</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">動作環境</h2>
                  <p>インターネット接続環境およびメール受信可能な環境が必要です。</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">資格・免許</h2>
                  <p>不要（該当する免許はありません）。</p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-cyan-400">その他</h2>
                  <p>通信販売におけるクーリング・オフ制度は適用されません。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
