export type Answer = 'A' | 'B';

export interface QuestionWithSection {
  id: string;
  question: string;
  subtext?: string;
  options: {
    value: Answer;
    label: string;
    description?: string;
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
        description: 'ChatGPTは知っているけど、\n仕事で活用できていない'
      },
      {
        value: 'B',
        label: '何から始めればいいかわからない',
        description: 'プログラミングに興味はあるけど、\n最初の一歩が踏み出せない'
      }
    ],
    sectionToShow: 'DailyWorkSection',
    nextQuestion: 'q2'
  },

  q2: {
    id: 'q2',
    question: 'AIを活用する世界に飛び込みたいですか？',
    subtext: '時代の転換点に立つ今、\n準備をするか否かで大きな差が生まれています。',
    options: [
      {
        value: 'A',
        label: '飛び込みたい',
        description: '新しい技術を学んで、\nキャリアをアップグレード\nしたい'
      },
      {
        value: 'B',
        label: 'AIを活用して、\n収入を上げたい',
        description: 'スキルを身につけて\n副業や転職で\n収入アップを目指したい'
      }
    ],
    sectionToShow: 'WhyAIProgrammingSection',
    nextQuestion: 'q3'
  },

  q3: {
    id: 'q3',
    question: 'AIを使って何ができるようになりたいですか？',
    subtext: 'すでに使える業務効率化から、\n本格的な自動化システム構築まで',
    options: [
      {
        value: 'A',
        label: '普段の仕事の自動化',
        description: 'Excel作業、データ入力、\n報告書作成など\n日常業務を楽にしたい'
      },
      {
        value: 'B',
        label: '物販のツール開発',
        description: '楽天注文履歴の抽出や\n在庫管理など、\nEC業務を効率化したい'
      }
    ],
    sectionToShow: 'WhatYouCanDoWithAISection',
    nextQuestion: 'q4'
  },

  q4: {
    id: 'q4',
    question: 'このサロンに入ってどう変わりたいですか？',
    subtext: '30日後、\n90日後のあなたは今とは全く違うレベルに到達します',
    options: [
      {
        value: 'A',
        label: '日常タスクの\n自動化システムを\n1つ完成',
        description: '30日後には自分専用の\n自動化システムが\n動いている状態に'
      },
      {
        value: 'B',
        label: '社内で使える\n実用的なツールを\n1本公開',
        description: '実際に現場で使える\nツールを開発して、\n周りから頼られる存在に'
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
        label: 'AI・生成AI専門\nカリキュラム',
        description: '最新ツールの使い方を\n徹底的に学べる\n体系的なカリキュラム'
      },
      {
        value: 'B',
        label: '本格プログラミング\n実装',
        description: 'GAS/JavaScript/Pythonで\n実際に動くシステムを\n作れる'
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
        description: '契約・抽出・分類・\n仕様化の型と\nチェックリスト'
      },
      {
        value: 'B',
        label: 'GASで業務自動化',
        description: 'Gmail/Sheets/Driveの\n連携、楽天/メルカリとの\n連携実装'
      }
    ],
    sectionToShow: 'CurriculumSection',
    nextQuestion: null // 最後の質問
  }
};

// 質問の順序
export const questionOrder = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];
