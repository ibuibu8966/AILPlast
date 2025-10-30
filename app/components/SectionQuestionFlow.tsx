'use client';

import { useState, useRef } from 'react';
import { sectionQuestions, questionOrder, Answer } from '../data/sectionQuestionFlow';

interface SectionQuestionFlowProps {
  onComplete: () => void;
}

export default function SectionQuestionFlow({ onComplete }: SectionQuestionFlowProps) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentQuestionId = questionOrder[currentQuestionIndex];
  const currentQuestion = sectionQuestions[currentQuestionId];
  const progress = currentQuestionIndex + 1;

  const handleStartQuestions = () => {
    setShowWelcome(false);
  };

  const handleAnswer = (answer: Answer) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setSelectedAnswer(answer);

    // 選択したカードを強調表示する時間（1秒）
    setTimeout(() => {
      // 最後の質問の場合は完了
      if (currentQuestion.nextQuestion === null) {
        // 最後の質問の場合は、アニメーション完了後に即座に遷移
        setIsAnimating(false);
        onComplete();
      } else {
        // 次の質問へ進む
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsAnimating(false);
      }
    }, 1000);
  };

  // ウェルカム画面
  if (showWelcome) {
    return (
      <div className="min-h-screen relative flex flex-col items-center justify-center px-4">
        {/* 背景動画 */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/3141210-uhd_3840_2160_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>

        {/* ウェルカムコンテンツ */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8 animate-pulse">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ようこそ
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8">
              AI×プログラミングサロン
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
              これから<span className="text-cyan-400 font-bold">6つの質問</span>で
            </p>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              あなたに最適なコンテンツをご案内します
            </p>
          </div>

          <button
            onClick={handleStartQuestions}
            className="inline-flex items-center px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
          >
            質問を開始する
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // 質問画面
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4">
      {/* 背景動画 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/3141210-uhd_3840_2160_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* 進捗インジケーター */}
      <div className="absolute top-8 left-0 right-0 z-10">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">質問 {progress} / 6</span>
            <span className="text-gray-400 text-sm">{Math.round((progress / 6) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(progress / 6) * 100}%` }}
            />
          </div>
        </div>
      </div>

        {/* 質問エリア */}
        <div className={`relative z-10 max-w-7xl mx-auto text-center transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {currentQuestion.question}
            </h1>
            {currentQuestion.subtext && (
              <p className="text-xl text-gray-300 mt-4">
                {currentQuestion.subtext}
              </p>
            )}
          </div>

          {/* 選択肢カード */}
          <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-3xl mx-auto">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.value;
              const shouldHide = selectedAnswer !== null && !isSelected;

              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  disabled={isAnimating}
                  className={`group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-10 transition-all duration-500 min-h-[260px] md:min-h-[320px] flex flex-col
                    ${isSelected ? 'scale-110 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border-cyan-400 shadow-2xl shadow-cyan-500/50' : ''}
                    ${shouldHide ? 'opacity-0 scale-95 pointer-events-none' : ''}
                    ${!isAnimating && !isSelected ? 'hover:bg-white/20 hover:border-cyan-500/50 hover:scale-105 hover:-translate-y-2' : ''}
                    ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className={`flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-4 md:mb-6 flex-shrink-0 transition-all duration-500
                      ${isSelected ? 'scale-125 shadow-lg shadow-cyan-500/50' : ''}
                    `}>
                      <span className="text-2xl md:text-4xl font-bold text-white">{option.value}</span>
                    </div>
                    <h3 className={`text-sm md:text-lg font-bold text-white mb-3 md:mb-4 leading-snug whitespace-pre-line transition-all duration-500
                      ${isSelected ? 'text-cyan-300' : ''}
                    `}>
                      {option.label}
                    </h3>
                    {option.description && (
                      <p className={`text-xs md:text-sm text-gray-300 leading-relaxed whitespace-pre-line transition-all duration-500
                        ${isSelected ? 'text-gray-200' : ''}
                      `}>
                        {option.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
}
