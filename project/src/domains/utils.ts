import { Question } from './types';

// Fisher-Yates shuffle algorithm
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const randomizeQuestion = (question: Question): Question => {
  // Create array of option indices
  const optionIndices = question.options.map((_, index) => index);
  // Shuffle the indices
  const shuffledIndices = shuffleArray(optionIndices);
  
  // Create new question with shuffled options
  const randomizedQuestion: Question = {
    ...question,
    options: shuffledIndices.map(index => question.options[index]),
    correctAnswer: shuffledIndices.indexOf(question.correctAnswer)
  };
  
  return randomizedQuestion;
}; 