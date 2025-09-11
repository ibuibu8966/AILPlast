export type Answer = 'yes' | 'no';

export interface Question {
  id: string;
  text: string;
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
  isSpecial?: boolean; // Q5のNOパターン用
}

export const questions: Record<string, Question> = {
  q1: {
    id: 'q1',
    text: 'この1年で、年収を100万円以上アップさせたいですか？',
    nextQuestions: {
      yes: 'q2a',
      no: 'q2b'
    }
  },
  q2a: {
    id: 'q2a',
    text: '3ヶ月以内に"AI×自動化"のスキルを身につけたいですか？',
    nextQuestions: {
      yes: 'q3a1',
      no: 'q3a2'
    }
  },
  q2b: {
    id: 'q2b',
    text: '今の仕事に、5年後も十分な将来性があると感じていますか？',
    nextQuestions: {
      yes: 'q3b1',
      no: 'q3b2'
    }
  },
  q3a1: {
    id: 'q3a1',
    text: '月額2,980円で、今日から始めますか？',
    nextQuestions: {
      yes: null,
      no: 'q4'
    }
  },
  q3a2: {
    id: 'q3a2',
    text: '迷いがあっても、"小さく始めて合うか判断する"価値はあると思いますか？',
    nextQuestions: {
      yes: 'q3a1',
      no: 'q4'
    }
  },
  q3b1: {
    id: 'q3b1',
    text: 'それでも"AIスキル"で市場価値をさらに上げたいですか？',
    nextQuestions: {
      yes: 'q3a1',
      no: 'q4'
    }
  },
  q3b2: {
    id: 'q3b2',
    text: 'AIの波に乗り遅れる前に、今から動きますか？',
    nextQuestions: {
      yes: 'q3a1',
      no: 'q4'
    }
  },
  q4: {
    id: 'q4',
    text: '先延ばしにせず、まずは1ヶ月だけ始めてみますか？',
    nextQuestions: {
      yes: null,
      no: 'q5'
    }
  },
  q5: {
    id: 'q5',
    text: '「今のまま」より「今から一歩」で、未来は良くなると思いますか？',
    nextQuestions: {
      yes: null,
      no: null
    }
  }
};

export const finalMessages: Record<string, FinalMessage> = {
  'q3a1-yes': {
    id: 'q3a1-yes',
    title: '素晴らしい決断です！',
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
  'q4-yes': {
    id: 'q4-yes',
    title: '賢明な選択です！',
    subtitle: 'まずは1ヶ月、リスクなしで始めてみましょう',
    buttonText: '今すぐ申し込む',
    pricing: {
      monthly: '月額 ¥2,980',
      description: '初月無料・いつでも解約可能'
    },
    services: [
      '収入UPの設計図',
      '時短の自動化スキル',
      '実践で使える型'
    ]
  },
  'q5-yes': {
    id: 'q5-yes',
    title: '未来を変える一歩を踏み出しましょう',
    subtitle: '今から始めることで、3ヶ月後には別人のようなスキルが身につきます',
    buttonText: '今すぐ申し込む',
    pricing: {
      monthly: '月額 ¥2,980',
      description: '30日間返金保証付き'
    },
    services: [
      '収入UPの設計図',
      '時短の自動化スキル',
      '実践で使える型'
    ]
  },
  'q5-no': {
    id: 'q5-no',
    title: 'いつでも戻れます。今が最短の始めどきです。',
    subtitle: '迷っている間にも、チャンスは過ぎていきます。小さな一歩から始めませんか？',
    buttonText: '今すぐ申し込む',
    pricing: {
      monthly: '月額 ¥2,980',
      description: 'いつでも解約可能・返金保証付き'
    },
    services: [
      '収入UPの設計図',
      '時短の自動化スキル',
      '実践で使える型'
    ],
    isSpecial: true
  }
};