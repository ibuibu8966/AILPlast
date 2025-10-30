'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  hide?: boolean;
  onLogoClick?: () => void;
}

export default function Header({ hide = false, onLogoClick }: HeaderProps) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (hide) return null;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-cyan-500/20 z-40">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center justify-between">
            {onLogoClick ? (
              <button
                onClick={handleLogoClick}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                <span className="inline-block">AI×プログラミングサロン</span>
              </button>
            ) : (
              <Link href="/home" className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                <span className="inline-block">AI×プログラミングサロン</span>
              </Link>
            )}

            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/home#features" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">特徴</Link>
              <Link href="/home#curriculum" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">カリキュラム</Link>
              <Link href="/home#instructors" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">講師紹介</Link>
              <Link href="/home#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">料金</Link>
              <Link href="/home#faq" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">FAQ</Link>
              <button
                onClick={() => router.push('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
                今すぐ申し込む
              </button>
            </div>

            {/* スマホ用ボタン */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => router.push('/contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 text-sm rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                申し込む
              </button>
              <button
                onClick={toggleMenu}
                className="text-cyan-400 hover:text-cyan-300 transition-colors p-2"
                aria-label="メニュー"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* スマホ用ドロワーメニュー */}
      <div
        className={`fixed top-[57px] left-0 right-0 bg-black/98 backdrop-blur-md border-b border-cyan-500/20 z-30 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 space-y-4">
          <Link
            href="/home#features"
            onClick={closeMenu}
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 border-b border-gray-800"
          >
            特徴
          </Link>
          <Link
            href="/home#curriculum"
            onClick={closeMenu}
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 border-b border-gray-800"
          >
            カリキュラム
          </Link>
          <Link
            href="/home#instructors"
            onClick={closeMenu}
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 border-b border-gray-800"
          >
            講師紹介
          </Link>
          <Link
            href="/home#pricing"
            onClick={closeMenu}
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 border-b border-gray-800"
          >
            料金
          </Link>
          <Link
            href="/home#faq"
            onClick={closeMenu}
            className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 border-b border-gray-800"
          >
            FAQ
          </Link>
          <button
            onClick={() => {
              closeMenu();
              router.push('/contact');
            }}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 mt-4"
          >
            今すぐ申し込む
          </button>
        </nav>
      </div>
    </>
  );
}