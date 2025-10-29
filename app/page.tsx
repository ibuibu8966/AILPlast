'use client';

import { useState } from 'react';
import Header from './components/Header';
import SectionQuestionFlow from './components/SectionQuestionFlow';

export default function Home() {
  const [showQuestionFlow, setShowQuestionFlow] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleQuestionFlowComplete = () => {
    window.location.href = '/contact';
  };

  const handleViewNormalLP = () => {
    window.location.href = '/home';
  };

  // 質問フロー表示中（ヘッダー非表示）
  if (showQuestionFlow) {
    return <SectionQuestionFlow onComplete={handleQuestionFlowComplete} />;
  }

  // 申し込みフォーム表示（ヘッダー表示）
  if (showApplicationForm) {
    return (
      <div className="min-h-screen bg-black">
        <Header hide={false} onLogoClick={handleViewNormalLP} />
        <div className="pt-20">
          <section id="application" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                お申し込みフォーム
              </h2>
              <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">お名前 <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="山田 太郎" required />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="example@email.com" required />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">電話番号</label>
                    <input type="tel" className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors" placeholder="090-1234-5678" />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">ご質問・ご要望</label>
                    <textarea className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors h-32" placeholder="ご自由にお書きください"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                    送信する
                  </button>
                </form>
              </div>

              {/* 「まだ迷っている方へ」セクション */}
              <div className="mt-12 text-center">
                <button
                  onClick={handleViewNormalLP}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-lg font-semibold underline decoration-2 underline-offset-4"
                >
                  詳しい内容をもう一度確認したい方はこちら
                </button>
                <p className="text-sm text-gray-500 mt-4">ヘッダーのメニューから各セクションをご覧いただけます</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // デフォルトでは何も表示しない（通常は質問フローか申し込みフォームが表示される）
  return null;
}