'use client';

import { useState } from 'react';
import Header from '../components/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            お申し込み・お問い合わせ
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    会社名（法人の場合）
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="株式会社〇〇"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-300">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300">プライバシーポリシー</a>に同意する
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg py-4 rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  送信する
                </button>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white">メール</h3>
                </div>
                <p className="text-gray-300">support@ai-programming-salon.com</p>
                <p className="text-gray-500 text-sm mt-1">24時間以内に返信いたします</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-white">営業時間</h3>
                </div>
                <p className="text-gray-300">平日 10:00 - 19:00</p>
                <p className="text-gray-500 text-sm mt-1">土日祝日も対応可能です</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}