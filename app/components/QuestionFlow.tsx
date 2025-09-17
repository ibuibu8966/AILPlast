'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { questions, finalMessages, Answer } from '../data/questionFlow';

interface QuestionFlowProps {
  onComplete: () => void;
  hideHeader: boolean;
  setHideHeader: (hide: boolean) => void;
  initialAnswer?: 'yes' | 'no';
}

export default function QuestionFlow({ onComplete, hideHeader, setHideHeader, initialAnswer = 'yes' }: QuestionFlowProps) {
  const [currentQuestionId, setCurrentQuestionId] = useState(initialAnswer === 'yes' ? 'q2a' : 'q2b');
  const [answers, setAnswers] = useState<Record<string, Answer>>({ q1: initialAnswer });
  const [showFinal, setShowFinal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(2);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    setHideHeader(true);
  }, [setHideHeader]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 初期再生位置を0.5秒に設定
    video.currentTime = 0.5;

    const handleTimeUpdate = () => {
      if (!isReversing && video.currentTime >= video.duration - 0.1) {
        setIsReversing(true);
        video.playbackRate = -1;
      } else if (isReversing && video.currentTime <= 0.5) {
        setIsReversing(false);
        video.playbackRate = 1;
        video.currentTime = 0.5; // 0.5秒に戻す
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [isReversing]);

  const handleAnswer = (answer: Answer) => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newAnswers = { ...answers, [currentQuestionId]: answer };
    setAnswers(newAnswers);

    setTimeout(() => {
      const currentQuestion = questions[currentQuestionId];
      const nextQuestionId = currentQuestion.nextQuestions[answer];

      if (nextQuestionId) {
        setCurrentQuestionId(nextQuestionId);
        setProgress(progress + 1);
      } else {
        setShowFinal(true);
      }
      setIsAnimating(false);
    }, 300);
  };

  const router = useRouter();
  
  const handleCTA = () => {
    router.push('/contact');
  };

  const getFinalMessageKey = () => {
    const lastAnswer = answers[currentQuestionId];
    return `${currentQuestionId}-${lastAnswer}`;
  };

  if (showFinal) {
    const finalMessage = finalMessages[getFinalMessageKey()];
    return (
      <div className="min-h-screen relative flex items-center justify-center px-4">
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
        <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {finalMessage.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {finalMessage.subtitle}
            </p>
            
            {/* 料金情報 */}
            {finalMessage.pricing && (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">{finalMessage.pricing.monthly}</h3>
                <p className="text-gray-300">{finalMessage.pricing.description}</p>
              </div>
            )}
            
            {/* サービス内容 */}
            {finalMessage.services && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">含まれるサービス</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
                  {finalMessage.services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={handleCTA}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            {finalMessage.buttonText}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionId];

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
            <span className="text-gray-400 text-sm">質問 {progress} / 3</span>
            <span className="text-gray-400 text-sm">{Math.round((progress / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(progress / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* 質問エリア */}
      <div className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {currentQuestion.text}
          </h1>
        </div>

        {/* 回答ボタン */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => handleAnswer('yes')}
            disabled={isAnimating}
            className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-full hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            はい
          </button>

          <button
            onClick={() => handleAnswer('no')}
            disabled={isAnimating}
            className="px-12 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold text-xl rounded-full hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            いいえ
          </button>
        </div>
      </div>

    </div>
  );
}