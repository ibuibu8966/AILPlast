export type Answer = 'A' | 'B';

export interface QuestionWithSection {
  id: string;
  question: string;
  subtext?: string;
  options: {
    value: Answer;
    label: string;
    description?: string;
    backgroundImage?: string;
  }[];
  sectionToShow: string; // 表示するセクション名（全選択肢共通）
  nextQuestion: string | null; // 次の質問ID
}

// 6つの質問とセクションのマッピング
export const sectionQuestions: Record<string, QuestionWithSection> = {
  q1: {
    id: 'q1',
    question: 'あなたはどれにあてはまりますか？',
    subtext: '毎日同じ作業の繰り返しで時間を取られていませんか？',
    options: [
      {
        value: 'A',
        label: 'AIツールが使いこなせない',
        description: 'ChatGPTは知っているけど、仕事で活用できていない',
        backgroundImage: '/question-bg/q1-yes.png'
      },
      {
        value: 'B',
        label: '何から始めればいいかわからない',
        description: 'プログラミングに興味はあるけど、最初の一歩が踏み出せない',
        backgroundImage: '/question-bg/q1-no.png'
      }
    ],
    sectionToShow: 'DailyWorkSection',
    nextQuestion: 'q2'
  },

  q2: {
    id: 'q2',
    question: 'AIを活用する世界に飛び込みたいですか？',
    subtext: '時代の転換点に立つ今、準備をするか否かで大きな差が生まれています。',
    options: [
      {
        value: 'A',
        label: '飛び込みたい',
        description: '新しい技術を学んで、キャリアをアップグレードしたい',
        backgroundImage: '/question-bg/q2a-yes.png'
      },
      {
        value: 'B',
        label: 'AIを活用して、収入を上げたい',
        description: 'スキルを身につけて副業や転職で収入アップを目指したい',
        backgroundImage: '/question-bg/q2a-no.png'
      }
    ],
    sectionToShow: 'WhyAIProgrammingSection',
    nextQuestion: 'q3'
  },

  q3: {
    id: 'q3',
    question: 'AIを使って何ができるようになりたいですか？',
    subtext: 'すでに使える業務効率化から、本格的な自動化システム構築まで',
    options: [
      {
        value: 'A',
        label: '普段の仕事の自動化',
        description: 'Excel作業、データ入力、報告書作成など日常業務を楽にしたい',
        backgroundImage: '/question-bg/q3a-yes.png'
      },
      {
        value: 'B',
        label: '物販のツール開発',
        description: '楽天注文履歴の抽出や在庫管理など、EC業務を効率化したい',
        backgroundImage: '/question-bg/q3a-no.png'
      }
    ],
    sectionToShow: 'WhatYouCanDoWithAISection',
    nextQuestion: 'q4'
  },

  q4: {
    id: 'q4',
    question: 'このサロンに入ってどう変わりたいですか？',
    subtext: '30日後、90日後のあなたは今とは全く違うレベルに到達します',
    options: [
      {
        value: 'A',
        label: '日常タスクの自動化システムを1つ完成',
        description: '30日後には自分専用の自動化システムが動いている状態に',
        backgroundImage: '/question-bg/q4a-yes.png'
      },
      {
        value: 'B',
        label: '社内で使える実用的なツールを1本公開',
        description: '実際に現場で使えるツールを開発して、周りから頼られる存在に',
        backgroundImage: '/question-bg/q4a-no.png'
      }
    ],
    sectionToShow: 'HowYouWillChangeSection',
    nextQuestion: 'q5'
  },

  q5: {
    id: 'q5',
    question: 'あなたはこのサロンのどこに興味がありますか？',
    subtext: '',
    options: [
      {
        value: 'A',
        label: 'AI・生成AI専門カリキュラム',
        description: '最新ツールの使い方を徹底的に学べる体系的なカリキュラム',
        backgroundImage: '/question-bg/q5a-yes.jpg'
      },
      {
        value: 'B',
        label: '本格プログラミング実装',
        description: 'GAS/JavaScript/Pythonで実際に動くシステムを作れる',
        backgroundImage: '/question-bg/q5a-no.png'
      }
    ],
    sectionToShow: 'FeaturesSection',
    nextQuestion: 'q6'
  },

  q6: {
    id: 'q6',
    question: 'どのカリキュラムに興味がありますか？',
    subtext: '',
    options: [
      {
        value: 'A',
        label: 'AI×プロンプト設計',
        description: '要約・抽出・分類・仕様化の型とチェックリスト',
        backgroundImage: '/question-bg/q6a-yes.png'
      },
      {
        value: 'B',
        label: 'GASで業務自動化',
        description: 'Gmail/Sheets/Driveの連携、楽天/メルカリとの連携実装',
        backgroundImage: '/question-bg/q6a-no.png'
      }
    ],
    sectionToShow: 'CurriculumSection',
    nextQuestion: null // 最後の質問
  }
};

// 質問の順序
export const questionOrder = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
