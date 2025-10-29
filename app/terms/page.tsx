'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            利用規約
          </h1>

          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20">
            <div className="text-gray-300 space-y-6">
              <p className="text-sm text-gray-400">最終改定日：2025年10月30日　版番号：v1.0</p>

              <p>
                本利用規約（以下「本規約」）は、株式会社SENRITSU（以下「当社」）が提供するオンラインサロン（以下「本サービス」）の利用条件を定めるものです。会員（以下「ユーザー」）は、本規約に同意のうえ本サービスをご利用ください。
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第1条（適用）</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>本規約はユーザーと当社との間の本サービスに関わる一切の関係に適用されます。</li>
                  <li>当社が本サービス上で随時掲載する各種ポリシー・ガイドライン等は本規約の一部を構成します。</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第2条（会員登録）</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>所定の申込手続を完了し、当社が承諾した時点で会員契約が成立します。</li>
                  <li>未成年者の利用はできません。</li>
                  <li>登録情報に変更が生じた場合、ユーザーは遅滞なく当社所定の方法で届け出るものとします。</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第3条（アカウントの管理）</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ユーザーは、自己の責任においてアカウント・パスワードを管理し、第三者に譲渡、貸与、共有してはなりません。</li>
                  <li>アカウントの不正使用等により生じた損害について、当社は故意または重過失がない限り責任を負いません。</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第4条（料金・支払・更新）</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>本サービスの利用料は月額2,980円（税込）とします。</li>
                  <li>支払方法はUnivaPayを通じたクレジットカード決済とします。</li>
                  <li>初回は申込時（決済完了時）に課金し、以降は毎月1日に自動更新・自動課金されます。</li>
                  <li>無料体験・初月割引はありません。</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第5条（解約・退会）</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ユーザーは毎月15日までに当社所定のフォームから解約申請を行うことで、翌月分以降の課金を停止できます。</li>
                  <li>16日以降の申請は翌月分の課金が発生し、翌々月からの停止となります。</li>
                  <li>月途中の中途解約はできません。当月分の返金・日割りは行いません。</li>
                  <li>最低契約期間は設けません。</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第6条（禁止事項）</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>法令または公序良俗に反する行為</li>
                  <li>他者の知的財産権・肖像権・プライバシーを侵害する行為</li>
                  <li>アカウントの共有、譲渡、販売、貸与</li>
                  <li>本サービスの運営を妨害する行為、過度な負荷を与える行為</li>
                  <li>反社会的勢力への利益供与その他反社会的勢力と関係する行為</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第7条（知的財産）</h2>
                <p>
                  本サービスに含まれるコンテンツの著作権その他知的財産権は当社または正当な権利者に帰属します。ユーザーは私的利用の範囲を超えて、無断で複製・転載・頒布等をしてはなりません。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第8条（サービスの変更・中断・終了）</h2>
                <p>
                  当社は、やむを得ない事由がある場合、ユーザーへの事前告知のうえで本サービスの内容変更・中断・終了を行うことができます。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第9条（保証の否認・免責）</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>当社は、本サービスがユーザーの特定目的に適合すること、恒常的・完全に提供されることを保証しません。</li>
                  <li>当社は、当社の故意または重過失によらない限り、本サービスの利用に関連してユーザーに生じた損害について責任を負いません。</li>
                  <li>万一当社が責任を負う場合でも、当社の責任は直近1か月間にユーザーが当社に支払った利用料の総額を上限とします。</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第10条（反社会的勢力の排除）</h2>
                <p>
                  ユーザーは、反社会的勢力に該当せず、また関与しないことを表明・保証します。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第11条（準拠法・管轄）</h2>
                <p>
                  本規約は日本法を準拠法とし、本サービスに起因または関連する一切の紛争については大阪地方裁判所を第一審の専属的合意管轄とします。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-cyan-400 mt-8">第12条（規約の変更）</h2>
                <p>
                  当社は、必要と判断した場合、事前通知のうえ本規約を変更できます。変更後の規約は本サービス上に掲示した時点から効力を生じます。
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
