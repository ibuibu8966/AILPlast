'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-cyan-500/20 z-40">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
            <span className="inline-block">AI×</span><span className="hidden sm:inline-block">プログラミング</span><span className="inline-block sm:hidden">プロ</span><span className="inline-block">サロン</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">特徴</Link>
            <Link href="#curriculum" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">カリキュラム</Link>
            <Link href="#instructors" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">講師紹介</Link>
            <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">料金</Link>
            <Link href="#faq" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">FAQ</Link>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
              今すぐ申し込む
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}