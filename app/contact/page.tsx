'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理
    console.log('Form submitted:', formData);
    alert('お問い合わせを受け付けました。担当者より連絡させていただきます。');
  };

  const handleViewNormalLP = () => {
    window.location.href = '/home';
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <div className="container mx-auto px-6 py-20">
          {/* ヘッダーセクション with フォーム */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* 背景グロー効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full"></div>

              <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 md:p-16 border-2 border-cyan-500/30 shadow-2xl">
                {/* ヘッダー部分 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12 md:mb-16">
                  {/* 画像 */}
                  <div className="w-56 h-56 md:w-80 md:h-80 flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                    <img
                      src="/bow-image.jpg"
                      alt="お辞儀"
                      className="relative w-full h-full object-cover rounded-3xl shadow-2xl ring-4 ring-cyan-500/50"
                    />
                  </div>
                  {/* テキスト */}
                  <div className="text-center md:text-left">
                    <div className="mb-6">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl animate-gradient bg-[length:200%_auto]">
                          2,980円で
                          <br />
                          人生を変えましょう
                        </span>
                      </h1>
                      <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-semibold mb-4">
                        今すぐ始めて、新しい未来へ
                      </p>
                    </div>
                  </div>
                </div>

                {/* フォーム部分 */}
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    お申し込みフォーム
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    ご質問・ご要望
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none h-32"
                    placeholder="ご自由にお書きください"
                  />
                </div>

                {/* 同意チェックボックス */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    className="mt-1 w-4 h-4 rounded border-gray-700 bg-gray-900/50 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-300">
                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
                      プライバシーポリシー
                    </a>
                    および
                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
                      利用規約
                    </a>
                    に同意する <span className="text-red-500">*</span>
                  </label>
                </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      送信する
                    </button>
                  </form>

                  {/* 「まだ迷っている方へ」セクション */}
                  <div className="mt-12 text-center">
                    <p className="text-sm md:text-base text-gray-400 mb-4">
                      ※このLP自体もAIを活用して制作しています
                    </p>
                    <button
                      onClick={handleViewNormalLP}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-base md:text-lg font-semibold underline decoration-2 underline-offset-4"
                    >
                      詳しい内容をもう一度確認する
                    </button>
                  </div>
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