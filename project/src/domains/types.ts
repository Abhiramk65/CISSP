export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface FlashCard {
  id: number;
  front: string;
  back: string;
  category: string;
}

export interface Domain {
  id: number;
  name: string;
  description: string;
  questions: Question[];
  flashCards?: FlashCard[];
}

export interface LearningMaterial {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'article' | 'quiz';
  url?: string;
  icon: React.ReactNode;
} 