import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowLeft, CheckCircle, XCircle, Brain, Target, Clock, Users, Lock, Network, Key, Bug, Code, AlertCircle } from 'lucide-react';
import { Domain, Question, FlashCard } from '../domains/types';
import { domains } from '../domains';
import { shuffleArray, randomizeQuestion } from '../domains/utils';

const domainIcons = {
  1: <Shield className="w-8 h-8" />,
  2: <Lock className="w-8 h-8" />,
  3: <Network className="w-8 h-8" />,
  4: <Network className="w-8 h-8" />,
  5: <Key className="w-8 h-8" />,
  6: <Bug className="w-8 h-8" />,
  7: <AlertCircle className="w-8 h-8" />,
  8: <Code className="w-8 h-8" />
};

const Home: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<'practice' | 'flashcards'>('practice');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [correctAnswers, setCorrectAnswers] = useState<Set<number>>(new Set());

  const handleDomainSelect = (domain: Domain) => {
    setSelectedDomain(domain);
    setCurrentQuestion(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setScore(0);
    setAnsweredQuestions(new Set());
    setCorrectAnswers(new Set());
    
    if (domain.questions && domain.questions.length > 0) {
      const shuffledQuestions = shuffleArray(domain.questions).map(randomizeQuestion);
      setRandomizedQuestions(shuffledQuestions);
    } else {
      setRandomizedQuestions([]);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!randomizedQuestions.length) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    const isCorrect = answerIndex === randomizedQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswers(new Set([...correctAnswers, currentQuestion]));
    }
    setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]));
  };

  const nextQuestion = () => {
    if (randomizedQuestions.length && currentQuestion < randomizedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
    }
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQuestion(index);
    setShowExplanation(false);
    setSelectedAnswer(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const renderDomainOverview = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain) => (
          <motion.div
            key={domain.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => handleDomainSelect(domain)}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 text-white">
                {domainIcons[domain.id as keyof typeof domainIcons]}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Domain {domain.id}
                </h2>
                <p className="text-sm text-gray-500">
                  {domain.questions.length} questions
                </p>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {domain.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {domain.description}
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <Brain className="w-4 h-4 mr-1" />
              {domain.flashCards?.length || 0} flash cards
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderFlashCards = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Flash Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedDomain?.flashCards?.map((card: FlashCard) => (
          <motion.div
            key={card.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative h-64 cursor-pointer perspective-1000"
            onClick={() => setFlippedCard(flippedCard === card.id ? null : card.id)}
          >
            <div 
              className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                flippedCard === card.id ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front of card */}
              <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg p-6 flex items-center justify-center text-center border-2 border-blue-100 overflow-hidden">
                <div className="w-full">
                  <p className="text-lg font-medium text-gray-900 mb-2 break-words">{card.front}</p>
                  <span className="text-sm text-blue-600 font-medium">{card.category}</span>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 flex items-center justify-center text-center border-2 border-blue-200 overflow-y-auto">
                <div className="w-full">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-base text-gray-700 whitespace-pre-line break-words">{card.back}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-center text-sm text-blue-600">
                    <span className="mr-1">Click to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center"
        >
          <Shield className="w-8 h-8 mr-3 text-blue-600" />
          CISSP Practice Questions
        </motion.h1>
        
        {!selectedDomain ? (
          renderDomainOverview()
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-gray-600 hover:text-gray-900 mr-4 flex items-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  Back to Domains
                </button>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 text-white">
                    {domainIcons[selectedDomain.id as keyof typeof domainIcons]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {selectedDomain.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Domain {selectedDomain.id}
                    </p>
                  </div>
                </div>
              </div>
              {randomizedQuestions.length > 0 && (
                <div className="text-sm text-gray-500">
                  Score: {score}/{currentQuestion + 1}
                </div>
              )}
            </div>

            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab('practice')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'practice'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Practice Questions
              </button>
              <button
                onClick={() => setActiveTab('flashcards')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'flashcards'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Flash Cards
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'practice' && randomizedQuestions.length > 0 ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <p className="text-gray-600">
                          Question {currentQuestion + 1} of {randomizedQuestions.length}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-green-600">
                            Correct: {correctAnswers.size}
                          </span>
                          <span className="text-sm text-gray-600">
                            | Answered: {answeredQuestions.size}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-1">
                        <p className="text-xl font-medium text-gray-900 mb-4">
                          {randomizedQuestions[currentQuestion].question}
                        </p>
                        <div className="space-y-3">
                          {randomizedQuestions[currentQuestion].options.map(
                            (option, index) => (
                              <motion.button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                                  selectedAnswer === index
                                    ? showExplanation
                                      ? index === randomizedQuestions[currentQuestion].correctAnswer
                                        ? "bg-green-100 border-green-500"
                                        : "bg-red-100 border-red-500"
                                      : "bg-blue-100 border-blue-500"
                                    : showExplanation && index === randomizedQuestions[currentQuestion].correctAnswer
                                      ? "bg-green-100 border-green-500"
                                      : "border-gray-300 hover:border-gray-400"
                                }`}
                                disabled={showExplanation}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-center">
                                  {showExplanation && (
                                    <span className="mr-2">
                                      {index === randomizedQuestions[currentQuestion].correctAnswer ? (
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                      ) : selectedAnswer === index ? (
                                        <XCircle className="w-5 h-5 text-red-500" />
                                      ) : null}
                                    </span>
                                  )}
                                  {option}
                                </div>
                              </motion.button>
                            )
                          )}
                        </div>

                        {showExplanation && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              Explanation
                            </h3>
                            <p className="text-gray-700">
                              {randomizedQuestions[currentQuestion].explanation}
                            </p>
                          </motion.div>
                        )}

                        <div className="flex justify-between mt-6">
                          <button
                            onClick={previousQuestion}
                            disabled={currentQuestion === 0}
                            className={`px-6 py-2 rounded-lg transition-colors ${
                              currentQuestion === 0
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            Previous
                          </button>
                          {showExplanation && currentQuestion < randomizedQuestions.length - 1 && (
                            <button
                              onClick={nextQuestion}
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              Next Question
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Fixed Right Sidebar */}
                      <div className="w-64 flex-shrink-0 fixed right-8 top-32 bottom-8 flex flex-col bg-white rounded-xl shadow-lg p-4 overflow-auto">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-600">Progress</span>
                            <span className="text-sm text-blue-600 font-medium">
                              {Math.round((answeredQuestions.size / randomizedQuestions.length) * 100)}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-blue-600 rounded-full transition-all duration-300"
                              style={{ width: `${(answeredQuestions.size / randomizedQuestions.length) * 100}%` }}
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600">Score</span>
                            <span className="text-sm text-green-600 font-medium">
                              {correctAnswers.size}/{answeredQuestions.size}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                          <div className="grid grid-cols-5 gap-2">
                            {randomizedQuestions.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => jumpToQuestion(index)}
                                className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                                  index === currentQuestion
                                    ? 'bg-blue-600 text-white'
                                    : answeredQuestions.has(index)
                                      ? correctAnswers.has(index)
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                              >
                                {index + 1}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-100 rounded mr-1"></div>
                              Correct
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-red-100 rounded mr-1"></div>
                              Incorrect
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : activeTab === 'practice' ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Shield className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Questions Coming Soon
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We're currently preparing questions for {selectedDomain.name}. 
                    Please check back later or try another domain.
                  </p>
                </motion.div>
              ) : (
                renderFlashCards()
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home; 