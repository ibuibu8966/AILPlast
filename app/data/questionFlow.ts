export type Answer = 'yes' | 'no';

export interface Question {
  id: string;
  text: string;
  subtext?: string;
  nextQuestions: {
    yes: string | null;
    no: string | null;
  };
}

export interface FinalMessage {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  pricing?: {
    monthly: string;
    description: string;
  };
  services?: string[];
  isSpecial?: boolean;
}

export const questions: Record<string, Question> = {
  // Q1: 現状の痛み - DailyWorkSection
  q1: {
    id: 'q1',
    text: 'Excel作業、データ入力、報告書作成...',
    subtext: '毎日2時間以上、同じ作業の繰り返しで疲れていませんか？',
    nextQuestions: {
      yes: 'q2a',
      no: 'q2b'
    }
  },

  // Q2: AIツール活用 + 市場の認識
  q2a: {
    id: 'q2a',
    text: 'ChatGPT使ってるけど、仕事で本当に活かせていない',
    subtext: 'AI市場は毎年29%成長。この波に乗り遅れていませんか？',
    nextQuestions: {
      yes: 'q3a',
      no: 'q3b'
    }
  },
  q2b: {
    id: 'q2b',
    text: '今の仕事に効率化の余地はない？',
    subtext: '同僚がAIで10倍速で仕事をこなし始めても大丈夫ですか？',
    nextQuestions: {
      yes: 'q3c',
      no: 'q3a'
    }
  },

  // Q3: 具体的な活用例 - WhatYouCanDo
  q3a: {
    id: 'q3a',
    text: '楽天注文履歴の自動抽出、Gmail請求書の自動分類',
    subtext: '月20時間削減できる自動化、今すぐ使いたくないですか？',
    nextQuestions: {
      yes: 'q4a',
      no: 'q4b'
    }
  },
  q3b: {
    id: 'q3b',
    text: 'AI議事録システムで会議が楽になる',
    subtext: '毎日2-3時間の単純作業から解放されたくないですか？',
    nextQuestions: {
      yes: 'q3a',
      no: 'q4c'
    }
  },
  q3c: {
    id: 'q3c',
    text: '5年後も今のスキルだけで生き残れる？',
    subtext: 'AIを「使われる側」から「使う側」になりませんか？',
    nextQuestions: {
      yes: 'q6',  // 強情なので最終質問へ
      no: 'q3a'
    }
  },

  // Q4: 短期的な成果 - HowYouWillChange
  q4a: {
    id: 'q4a',
    text: '30日後：日常タスクの自動化システムが完成',
    subtext: '90日後には副業案件も受けられるレベルに。興味ありますか？',
    nextQuestions: {
      yes: 'q5a',
      no: 'q5b'
    }
  },
  q4b: {
    id: 'q4b',
    text: 'プロンプト設計の型とチェックリストを配布',
    subtext: '実際に動くシステムを作れたら、年収30%アップも可能ですよ？',
    nextQuestions: {
      yes: 'q4a',
      no: 'q5c'
    }
  },
  q4c: {
    id: 'q4c',
    text: '毎月10万円の副業収入が増えたら？',
    subtext: '年間120万円、生活が大きく変わりませんか？',
    nextQuestions: {
      yes: 'q4a',
      no: 'q6'  // 興味なしなので最終質問へ
    }
  },

  // Q5: 学習環境とサポート - Features/Instructors
  q5a: {
    id: 'q5a',
    text: 'GAS/JavaScript/Pythonで本格実装を学べる',
    subtext: '現役AIエンジニアから直接学べて、24時間サポート付き。安心ですよね？',
    nextQuestions: {
      yes: 'q6a',
      no: 'q6b'
    }
  },
  q5b: {
    id: 'q5b',
    text: '実績1000人以上、満足度98%のサロン',
    subtext: '独学で挫折するより、体系的に学べる環境の方が良くないですか？',
    nextQuestions: {
      yes: 'q5a',
      no: 'q6c'
    }
  },
  q5c: {
    id: 'q5c',
    text: 'ChatGPT、Claude、GitHub Copilot全て使いこなす',
    subtext: '開発速度10倍のエンジニアになりたくないですか？',
    nextQuestions: {
      yes: 'q5a',
      no: 'q6'
    }
  },

  // Q6: 価格と最終決断 - Pricing
  q6a: {
    id: 'q6a',
    text: '月額2,980円 = コーヒー1杯分で人生が変わる',
    subtext: '初月無料＋返金保証付き。リスクゼロで試しませんか？',
    nextQuestions: {
      yes: null,  // 申し込みへ
      no: 'q6'
    }
  },
  q6b: {
    id: 'q6b',
    text: '1日100円の投資で、将来の年収が変わる',
    subtext: '3ヶ月後「あの時始めていれば...」と後悔したくないですよね？',
    nextQuestions: {
      yes: 'q6a',
      no: 'q6'
    }
  },
  q6c: {
    id: 'q6c',
    text: '仲間と切磋琢磨できるコミュニティ付き',
    subtext: '一人で学習するより成長が早い。今すぐ始めませんか？',
    nextQuestions: {
      yes: 'q6a',
      no: 'q6'
    }
  },

  // Q6: 最終質問（どのルートからも来る可能性あり）
  q6: {
    id: 'q6',
    text: '人生を変える最後のチャンス',
    subtext: '本当に、本当に見逃しますか？',
    nextQuestions: {
      yes: null,
      no: null
    }
  }
};

// 最大質問数を計算する関数（デバッグ用）
function getMaxQuestionPath(): number {
  // 最長パス: q1 -> q2a -> q3a -> q4a -> q5a -> q6a = 6問
  // 別の長いパス: q1 -> q2b -> q3a -> q4b -> q5b -> q6a = 6問
  // q6（最終質問）に行くパス: q1 -> q2b -> q3c -> q6 = 4問
  return 6;
}

export const finalMessages: Record<string, FinalMessage> = {
  // 全てのパターンで同じメッセージに統一
  'q6a-yes': {
    id: 'q6a-yes',
    title: 'では、人生を変えましょう。',
    subtitle: '今から3ヶ月後、AIエンジニアとして活躍するあなたの姿が見えます',
    buttonText: '今すぐ申し込む',
    pricing: {
      monthly: '月額 ¥2,980',
      description: '初期費用0円、最初の1ヶ月無料'
    },
    services: [
      '収入UPの設計図',
      '時短の自動化スキル',
      '実践で使える型',
      '24時間サポート体制',
      '返金保証付き'
    ]
  },
  'q6-yes': {
    id: 'q6-yes',
    title: 'では、人生を変えましょう。',
    subtitle: '今から3ヶ月後、AIエンジニアとして活躍するあなたの姿が見えます',
    buttonText: '今すぐ申し込む',
    pricing: {
      monthly: '月額 ¥2,980',
      description: '初期費用0円、最初の1ヶ月無料'
    },
    services: [
      '収入UPの設計図',
      '時短の自動化スキル',
      '実践で使える型',
      '24時間サポート体制',
      '返金保証付き'
    ]
  },
  'q6-no': {
    id: 'q6-no',
    title: 'では、人生を変えましょう。',
    subtitle: '今から3ヶ月後、AIエンジニアとして活躍するあなたの姿が見えます',
    buttonText: '今すぐ申し込む',
    pricing: {
      monthly: '月額 ¥2,980',
      description: '初期費用0円、最初の1ヶ月無料'
    },
    services: [
      '収入UPの設計図',
      '時短の自動化スキル',
      '実践で使える型',
      '24時間サポート体制',
      '返金保証付き'
    ]
  }
};