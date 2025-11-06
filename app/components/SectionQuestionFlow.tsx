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
        // 最後の質問の場合は、アニメーション状態を維持したまま遷移
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
      <div className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-black/70 to-cyan-900/50" />
        </div>

        {/* Tech grid overlay */}
        <div className="absolute inset-0 z-1">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.03
          }}></div>
        </div>

        {/* Animated tech elements */}
        <div className="absolute inset-0 z-2">
          {/* Floating tech shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/30 rounded-lg transform rotate-45 floating hidden md:block"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-400/30 rounded-lg transform rotate-12 floating-reverse hidden md:block"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-cyan-300/20 rounded-full floating hidden md:block" style={{animationDelay: '2s'}}></div>

          {/* Tech circles */}
          <div className="absolute top-40 right-1/3 hidden lg:block">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 border border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute inset-8 border border-cyan-400/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Animated glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* ウェルカムコンテンツ */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-12">
            {/* アイコン with tech decoration */}
            <div className="relative inline-block mb-12">
              {/* Outer glow rings */}
              <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -inset-8 border-2 border-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -inset-12 border border-blue-400/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>

              {/* Icon container with gradient border */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-75"></div>
                <div className="relative inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full border-4 border-cyan-400/50 shadow-2xl">
                  {/* Inner tech decoration */}
                  <div className="absolute inset-4 border border-cyan-400/20 rounded-full"></div>
                  <div className="absolute inset-6 border border-blue-400/10 rounded-full"></div>

                  {/* AI Brain Icon */}
                  <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none">
                    {/* Central brain core */}
                    <circle cx="12" cy="12" r="4" fill="url(#brainGradient)" className="animate-pulse" />

                    {/* Neural connections */}
                    <path d="M12 8 L12 4 M12 16 L12 20 M8 12 L4 12 M16 12 L20 12"
                          stroke="url(#connectionGradient)" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{animationDelay: '0.3s'}} />
                    <path d="M15 9 L18 6 M9 15 L6 18 M15 15 L18 18 M9 9 L6 6"
                          stroke="url(#connectionGradient)" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{animationDelay: '0.6s'}} />

                    {/* Outer nodes */}
                    <circle cx="12" cy="4" r="2" fill="#06b6d4" className="animate-pulse" />
                    <circle cx="12" cy="20" r="2" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '0.2s'}} />
                    <circle cx="4" cy="12" r="2" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '0.4s'}} />
                    <circle cx="20" cy="12" r="2" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                    <circle cx="6" cy="6" r="1.5" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '0.8s'}} />
                    <circle cx="18" cy="6" r="1.5" fill="#06b6d4" className="animate-pulse" style={{animationDelay: '1s'}} />
                    <circle cx="6" cy="18" r="1.5" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '1.2s'}} />
                    <circle cx="18" cy="18" r="1.5" fill="#3b82f6" className="animate-pulse" style={{animationDelay: '1.4s'}} />

                    <defs>
                      <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Sparkle effects */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>

            <h1 className="welcome-title font-black text-white mb-6 leading-tight drop-shadow-2xl">
              ようこそ
            </h1>
            <h2 className="welcome-subtitle font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-8 animate-gradient bg-[length:200%_auto] drop-shadow-lg">
              AI×プログラミングサロン
            </h2>

            {/* Subtitle enhancement */}
            <p className="text-gray-400 text-sm md:text-base mb-8 tracking-wider">
              <span className="inline-block border-l-2 border-cyan-400 pl-3">未来のスキルを、今ここで手に入れる</span>
            </p>
          </div>

          {/* Tech frame decoration */}
          <div className="relative inline-block mb-12 max-w-3xl w-full px-4">
            {/* Outer decorative frames */}
            <div className="absolute -inset-6 border-2 border-cyan-400/20 rounded-2xl hidden md:block"></div>
            <div className="absolute -inset-6 border border-cyan-400/20 rounded-2xl transform rotate-2 hidden md:block"></div>
            <div className="absolute -inset-6 border border-blue-400/10 rounded-2xl transform -rotate-2 hidden md:block"></div>

            {/* Corner tech decorations */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-400 hidden md:block"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-cyan-400 hidden md:block"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-blue-400 hidden md:block"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-blue-400 hidden md:block"></div>

            <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 md:p-10 lg:p-12 border-2 border-cyan-400/50 shadow-2xl overflow-hidden">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

              <p className="welcome-text text-gray-200 leading-relaxed relative z-10">
                これから<span className="text-cyan-300 font-bold bg-cyan-400/10 px-2 py-1 rounded">6つの質問</span>で<br />
                あなたに最適なコンテンツをご案内します
              </p>

              {/* Tech dots decoration */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="relative inline-block">
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

            <button
              onClick={handleStartQuestions}
              className="group relative inline-flex items-center px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] text-white font-black welcome-button rounded-full overflow-hidden transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 border-2 border-cyan-400/30"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <span>質問を開始する</span>
                <svg className="w-6 h-6 ml-1 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>

              {/* Sparkles */}
              <div className="absolute top-1 right-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-1 left-8 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </button>
          </div>

          {/* Bottom hint text */}
          <p className="text-gray-500 text-xs md:text-sm mt-8 tracking-wide">
            所要時間: 約1分 | 回答は自動保存されます
          </p>

          {/* Tech decoration lines */}
          <div className="absolute -bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent hidden md:block"></div>
        </div>
      </div>
    );
  }

  // 質問画面
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-black/80 to-cyan-900/50" />
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.03
        }}></div>
      </div>

      {/* Animated tech elements */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* Floating tech shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/30 rounded-lg transform rotate-45 floating hidden lg:block"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-400/30 rounded-lg transform rotate-12 floating-reverse hidden lg:block"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 border border-cyan-300/20 rounded-full floating hidden lg:block" style={{animationDelay: '2s'}}></div>

        {/* Tech circles */}
        <div className="absolute top-40 right-1/4 hidden lg:block">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 border border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse pointer-events-none z-[1]"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse pointer-events-none z-[1]" style={{animationDelay: '2s'}}></div>

      {/* 進捗インジケーター */}
      <div className="absolute top-8 left-0 right-0 z-10">
        <div className="max-w-md mx-auto px-4">
          <div className="relative">
            {/* Tech decoration around progress bar */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse hidden md:block"></div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 animate-pulse hidden md:block" style={{animationDelay: '0.5s'}}></div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-cyan-300 text-sm font-bold tracking-wider">質問 {progress} / 6</span>
              <span className="text-cyan-300 text-sm font-bold">{Math.round((progress / 6) * 100)}%</span>
            </div>
            <div className="relative w-full bg-gray-900/80 backdrop-blur-sm rounded-full h-3 border border-cyan-400/30 shadow-lg overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

              <div
                className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-[length:200%_auto] h-3 rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50 animate-gradient"
                style={{ width: `${(progress / 6) * 100}%` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* 質問エリア */}
        <div className={`relative z-10 max-w-7xl mx-auto text-center transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="relative mb-10 px-6">
            {/* Tech decoration at top of question */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
              </div>
            </div>

            <h1 className="question-title font-black text-white mb-2 leading-tight drop-shadow-2xl bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text">
              {currentQuestion.question}
            </h1>
            {currentQuestion.subtext && (
              <div className="relative inline-block">
                <p className="question-subtext text-gray-200 mt-2 leading-relaxed whitespace-pre-line font-medium">
                  {currentQuestion.subtext}
                </p>
                {/* Underline decoration */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              </div>
            )}
          </div>

          {/* 選択肢カード */}
          <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-3xl mx-auto px-2">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.value;
              const shouldHide = selectedAnswer !== null && !isSelected;

              return (
                <div key={option.value} className="relative group">
                  {/* Multiple glow layers */}
                  <div className={`absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-lg transition-opacity duration-1000
                    ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}
                  `}></div>
                  <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur transition-opacity duration-1000
                    ${isSelected ? 'opacity-75' : 'opacity-0 group-hover:opacity-30'}
                  `}></div>

                  {/* Decorative frame */}
                  <div className={`absolute -inset-3 border border-cyan-400/20 rounded-3xl transition-opacity duration-500
                    ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}></div>

                  <button
                    onClick={() => handleAnswer(option.value)}
                    disabled={isAnimating}
                    className={`relative w-full backdrop-blur-xl border-2 rounded-3xl p-4 md:p-10 transition-all duration-500 h-[260px] md:h-[320px] flex flex-col overflow-hidden
                      ${isSelected ? 'scale-105 border-cyan-400 shadow-2xl shadow-cyan-500/50' : 'border-cyan-400/30'}
                      ${shouldHide ? 'opacity-0 scale-95 pointer-events-none' : ''}
                      ${!isAnimating && !isSelected ? 'hover:border-cyan-500/50 hover:scale-105 hover:-translate-y-2' : ''}
                      ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}
                    style={{
                      backgroundImage: option.backgroundImage
                        ? `url('${option.backgroundImage}')`
                        : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/60 to-gray-900/50"></div>

                    {/* Top glow line */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-opacity duration-500
                      ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}></div>

                    {/* Inner glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 transition-opacity duration-500
                      ${isSelected ? 'opacity-100' : 'opacity-0'}
                    `}></div>

                    <div className="relative flex flex-col items-center text-center h-full w-full px-1">
                      {/* アイコン - 固定位置 */}
                      <div className="relative mb-4 md:mb-6 flex-shrink-0">
                        {/* Pulse rings */}
                        <div className={`absolute -inset-4 border-2 border-cyan-400/30 rounded-2xl transition-opacity duration-500
                          ${isSelected ? 'opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-100'}
                        `}></div>
                        <div className={`absolute -inset-6 border border-cyan-400/20 rounded-2xl transition-opacity duration-500
                          ${isSelected ? 'opacity-100 animate-pulse' : 'opacity-0 group-hover:opacity-100'}
                        `} style={{animationDelay: '0.5s'}}></div>

                        {/* Icon glow */}
                        <div className={`absolute inset-0 bg-cyan-500 rounded-2xl blur-xl transition-opacity duration-500
                          ${isSelected ? 'opacity-50 animate-pulse' : 'opacity-0'}
                        `}></div>

                        <div className={`relative flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl transition-all duration-500 shadow-lg
                          ${isSelected ? 'scale-125 shadow-cyan-500/50' : 'shadow-cyan-500/20'}
                        `}>
                          <span className="text-2xl md:text-4xl font-black text-white">{option.value}</span>

                          {/* Sparkle */}
                          <div className={`absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full transition-opacity duration-500
                            ${isSelected ? 'opacity-100 animate-ping' : 'opacity-0'}
                          `}></div>
                        </div>
                      </div>

                    {/* ラベル - 固定高さ（2行分） */}
                    <div className="option-label-container flex items-center justify-center mb-2 md:mb-4">
                      <h3 className={`option-label font-black leading-[1.3] whitespace-pre-line transition-all duration-500 w-full
                        ${isSelected ? 'text-cyan-300 drop-shadow-lg' : 'text-white'}
                      `}>
                        {option.label}
                      </h3>
                    </div>

                    {/* 説明テキスト - 固定高さ（2行分） */}
                    <div className="option-description-container flex items-center justify-center">
                      {option.description && (
                        <p className={`option-description leading-[1.4] whitespace-pre-line transition-all duration-500 w-full
                          ${isSelected ? 'text-gray-100 font-medium' : 'text-gray-300'}
                        `}>
                          {option.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom decoration line (only when selected) */}
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-opacity duration-500
                      ${isSelected ? 'opacity-100' : 'opacity-0'}
                    `}></div>
                  </div>
                </button>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}
