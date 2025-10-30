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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20 relative overflow-hidden">
        {/* Tech grid overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.03
          }}></div>
        </div>

        {/* Animated tech elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/30 rounded-lg transform rotate-45 floating hidden lg:block"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-blue-400/30 rounded-lg transform rotate-12 floating-reverse hidden lg:block"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-cyan-300/20 rounded-full floating hidden lg:block" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Animated glow effects */}
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          {/* ヘッダーセクション with フォーム */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* 背景グロー効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full"></div>

              {/* Outer decorative frames */}
              <div className="absolute -inset-4 border-2 border-cyan-400/20 rounded-3xl hidden md:block"></div>
              <div className="absolute -inset-4 border border-cyan-400/20 rounded-3xl transform rotate-1 hidden md:block"></div>

              <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-16 border-2 border-cyan-500/40 shadow-2xl overflow-hidden">
                {/* Inner glow lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                {/* ヘッダー部分 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12 md:mb-16">
                  {/* 画像 */}
                  <div className="w-56 h-56 md:w-80 md:h-80 flex-shrink-0 relative">
                    {/* Outer glow rings */}
                    <div className="absolute -inset-4 border-2 border-cyan-400/20 rounded-3xl animate-pulse"></div>
                    <div className="absolute -inset-6 border border-blue-400/10 rounded-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                    <img
                      src="/bow-image.jpg"
                      alt="お辞儀"
                      className="relative w-full h-full object-cover rounded-3xl shadow-2xl ring-4 ring-cyan-500/50 border-2 border-cyan-400/30"
                    />
                    {/* Sparkles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
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
                <div className="relative">
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    お名前 <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-2 border-gray-700/50 rounded-xl text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all backdrop-blur-sm shadow-lg"
                      placeholder="山田 太郎"
                    />
                    <div className="absolute inset-0 rounded-xl pointer-events-none border border-cyan-500/0 transition-all peer-focus:border-cyan-500/50"></div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    メールアドレス <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-2 border-gray-700/50 rounded-xl text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all backdrop-blur-sm shadow-lg"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-2 border-gray-700/50 rounded-xl text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all backdrop-blur-sm shadow-lg"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    ご質問・ご要望
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/70 to-gray-800/70 border-2 border-gray-700/50 rounded-xl text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all resize-none h-32 backdrop-blur-sm shadow-lg"
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

                    {/* Premium Submit Button */}
                    <div className="relative pt-4">
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

                      <button
                        type="submit"
                        className="group relative w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] text-white font-black py-5 px-8 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 border-2 border-cyan-400/30"
                      >
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>送信する</span>
                          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>

                        {/* Sparkles */}
                        <div className="absolute top-2 right-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
                        <div className="absolute bottom-2 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      </button>
                    </div>
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