'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              AI×プログラミングサロン
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              最先端のAI技術とプログラミングスキルを学べるオンラインコミュニティ
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>株式会社SENRITSU</p>
              <p>大阪府東大阪市高殿町11-2</p>
              <p>カワショウビル2・3階</p>
            </div>
          </div>

          {/* リンク */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/home#features" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  特徴
                </Link>
              </li>
              <li>
                <Link href="/home#curriculum" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  カリキュラム
                </Link>
              </li>
              <li>
                <Link href="/home#instructors" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  講師紹介
                </Link>
              </li>
              <li>
                <Link href="/home#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  料金
                </Link>
              </li>
              <li>
                <Link href="/home#faq" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:senritsu@senritsu.site" className="hover:text-cyan-400 transition-colors">
                  senritsu@senritsu.site
                </a>
              </li>
              <li>TEL: 07-3626-8645</li>
              <li>
                <a href="https://senritsu.site" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  https://senritsu.site
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 法的文書リンク */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                利用規約
              </Link>
              <Link href="/commercial" className="text-gray-400 hover:text-cyan-400 transition-colors">
                特定商取引法に基づく表記
              </Link>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; 2025 株式会社SENRITSU. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
