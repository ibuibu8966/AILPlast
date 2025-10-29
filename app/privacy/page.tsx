'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            プライバシーポリシー
          </h1>

          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20">
            <div className="text-gray-300 space-y-6">
              <p className="text-sm text-gray-400">最終改定日：2025年10月30日　版番号：v1.0</p>

              <p>
                株式会社SENRITSU（以下「当社」）は、当社が提供するオンラインサロン（以下「本サービス」）におけるユーザーの個人情報（個人データを含む）の取扱いについて、以下のとおり定めます。
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">1. 事業者情報</h2>
                <div className="pl-4 space-y-2">
                  <p><strong>事業者名：</strong>株式会社SENRITSU</p>
                  <p><strong>所在地：</strong>大阪府東大阪市高殿町11-2 カワショウビル2・3階</p>
                  <p><strong>代表者：</strong>加藤 大成</p>
                  <p><strong>連絡先：</strong>senritsu@senritsu.site</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">2. 取得する情報</h2>
                <ul className="list-disc pl-8 space-y-2">
                  <li>氏名、メールアドレス、決済に必要な情報、ユーザーID等のアカウント情報</li>
                  <li>本サービスの利用履歴、ログ情報（アクセス日時、IPアドレス、ユーザーエージェント等）</li>
                  <li>お問い合わせ時に取得する情報</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">3. 利用目的</h2>
                <ul className="list-disc pl-8 space-y-2">
                  <li>本サービスの提供、本人確認、アカウント管理</li>
                  <li>料金の請求・決済、決済トラブル対応</li>
                  <li>重要なお知らせ等の通知、問い合わせ対応</li>
                  <li>本サービスの保守・改善・不正利用防止</li>
                  <li>法令の定めまたは行政機関等の要請に基づく対応</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">4. 第三者提供・委託</h2>
                <ul className="list-disc pl-8 space-y-2">
                  <li>当社は、決済処理のため、必要な範囲でUnivaPayに個人データを提供します。</li>
                  <li>当社は、上記の目的達成に必要な範囲で、個人データの取扱いを外部に委託することがあります。その際、委託先の適切な監督を行います。</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">5. 個人データの国外移転</h2>
                <p>
                  現時点で、当社は個人データを海外の第三者に提供する予定はありません。将来、国外移転が生じる場合には、移転先の国名、移転先の体制、移転根拠を含め本ポリシーを改定のうえ適切に公表します。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">6. 安全管理措置</h2>
                <p>
                  当社は、個人データの漏えい等を防止するため、アクセス権限の最小化、ログ管理、暗号化、従業者への教育等、必要かつ適切な安全管理措置を講じます。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">7. Cookie等の利用</h2>
                <p>
                  本サービスでは、ユーザー体験の向上・不正防止等のためCookie等の技術を利用する場合があります。ユーザーはブラウザ設定によりCookieを無効化できますが、本サービスの一部機能が利用できない場合があります。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">8. 保有個人データの開示等の請求</h2>
                <p>
                  ユーザーは、当社の保有個人データに関して、利用目的の通知、開示、訂正・追加・削除、利用停止・消去、第三者提供の停止を求めることができます。
                </p>
                <div className="pl-4 space-y-2">
                  <p><strong>受付窓口：</strong>senritsu@senritsu.site</p>
                  <p><strong>回答期間の目安：</strong>請求受領後15日以内を目安に対応します。</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">9. 未成年者の取扱い</h2>
                <p>本サービスは未成年の方はご利用いただけません。</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">10. 法令遵守と見直し</h2>
                <p>
                  当社は、個人情報保護法その他関係法令を遵守し、本ポリシーの内容を継続的に見直し、必要に応じて改定します。改定後の内容は本ページで公表します。
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
