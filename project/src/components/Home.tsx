import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowLeft, CheckCircle, XCircle, Brain, Target, Clock, Users, Lock, Network, Key, Bug, Code, AlertCircle, PieChart, BarChart, Award, Menu, X } from 'lucide-react';
import { Domain, Question, FlashCard } from '../domains/types';
import { domains } from '../domains';
import { shuffleArray, randomizeQuestion } from '../domains/utils';
import { themes } from '../themes';
import ThemeSwitcher from './ThemeSwitcher';
import DigitalRain from './DigitalRain';

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
  const [currentTheme, setCurrentTheme] = useState<string>('default');
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [autoAdvance, setAutoAdvance] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [analysisData, setAnalysisData] = useState<{
    timeSpent: number;
    startTime: number | null;
  }>({
    timeSpent: 0,
    startTime: null
  });

  const handleDomainSelect = (domain: Domain) => {
    // Prepare the shuffled questions first
    const shuffledQuestions = domain.questions && domain.questions.length > 0 
      ? shuffleArray(domain.questions).map(randomizeQuestion) 
      : [];
    
    // Batch all state updates together to prevent UI lag
    setSelectedDomain(domain);
    setRandomizedQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setScore(0);
    setAnsweredQuestions(new Set());
    setCorrectAnswers(new Set());
    setSelectedAnswers({});
    setShowResults(false);
    setAnalysisData({
      timeSpent: 0,
      startTime: Date.now()
    });
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!randomizedQuestions.length) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
    
    const isCorrect = answerIndex === randomizedQuestions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswers(new Set([...correctAnswers, currentQuestion]));
    }
    setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion]));

    if (autoAdvance) {
      setTimeout(() => {
        if (currentQuestion < randomizedQuestions.length - 1) {
          nextQuestion();
        }
      }, 1500);
    }
  };

  const nextQuestion = () => {
    if (randomizedQuestions.length && currentQuestion < randomizedQuestions.length - 1) {
      const nextIndex = currentQuestion + 1;
      jumpToQuestion(nextIndex);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      const prevIndex = currentQuestion - 1;
      jumpToQuestion(prevIndex);
    }
  };

  const jumpToQuestion = (index: number) => {
    setCurrentQuestion(index);
    setShowExplanation(answeredQuestions.has(index));
    setSelectedAnswer(selectedAnswers[index] ?? null);
  };

  const handleSubmit = () => {
    if (analysisData.startTime) {
      setAnalysisData(prev => ({
        ...prev,
        timeSpent: Math.floor((Date.now() - prev.startTime!) / 1000)
      }));
    }
    setShowResults(true);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const calculatePerformanceMetrics = () => {
    const totalQuestions = randomizedQuestions.length;
    const correctCount = correctAnswers.size;
    const incorrectCount = answeredQuestions.size - correctCount;
    const accuracy = (correctCount / totalQuestions) * 100;
    
    return {
      totalQuestions,
      correctCount,
      incorrectCount,
      accuracy,
      timePerQuestion: analysisData.timeSpent / totalQuestions
    };
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

  const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0];

  const getAnswerButtonStyle = (
    theme: string,
    isSelected: boolean,
    showingExplanation: boolean,
    isCorrect: boolean
  ): string => {
    if (theme === 'matrix') {
      if (isSelected) {
        if (showingExplanation) {
          return isCorrect
            ? "bg-black/80 border-green-500 text-green-400"
            : "bg-black/80 border-red-500 text-red-400";
        }
        return "bg-black/80 border-green-500 text-green-400";
      }
      if (showingExplanation && isCorrect) {
        return "bg-black/80 border-green-500 text-green-400";
      }
      return "bg-black/60 border-green-700 hover:border-green-500 text-green-500";
    }

    if (isSelected) {
      if (showingExplanation) {
        return isCorrect
          ? "bg-gradient-to-r from-success-200 to-success-300 border-success-500 shadow-md"
          : "bg-gradient-to-r from-error-200 to-error-300 border-error-500 shadow-md";
      }
      return "bg-gradient-to-r from-primary-200 to-primary-300 border-primary-500 shadow-md";
    }
    if (showingExplanation && isCorrect) {
      return "bg-gradient-to-r from-success-200 to-success-300 border-success-500 shadow-md";
    }
    return "border-gray-300 hover:border-gray-400 bg-white";
  };

  const renderDomainOverview = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {domains.map((domain) => (
        <motion.div
          key={domain.id}
          variants={itemVariants}
          className={`${
            currentTheme === 'matrix' 
              ? 'bg-black/80 border-green-500 hover:border-green-400' 
              : 'bg-white border-primary-100'
          } rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border`}
          onClick={() => handleDomainSelect(domain)}
        >
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 ${
              currentTheme === 'matrix'
                ? 'bg-black border-2 border-green-500'
                : currentTheme === 'cyberpunk'
                  ? 'bg-green-700 border-2 border-green-800 text-black'
                  : `bg-gradient-to-br ${currentThemeData.gradients.primary}`
            } rounded-xl flex items-center justify-center mr-4 text-white shadow-md`}>
              {domainIcons[domain.id as keyof typeof domainIcons]}
            </div>
            <div>
              <h2 className={`text-xl font-semibold ${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-900'
              }`}>
                Domain {domain.id}
              </h2>
              <p className={`text-sm ${
                currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-500'
              }`}>
                {domain.questions.length} questions
              </p>
            </div>
          </div>
          <h3 className={`text-lg font-medium mb-2 ${
            currentTheme === 'matrix' ? 'text-green-400' : 'text-gray-900'
          }`}>
            {domain.name}
          </h3>
          <p className={`text-sm mb-4 ${
            currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-600'
          }`}>
            {domain.description}
          </p>
          <div className={`flex items-center text-sm ${
            currentTheme === 'matrix' ? 'text-green-500' 
            : currentTheme === 'cyberpunk' ? 'text-green-700'
            : 'text-primary-600'
          }`}>
            <Brain className="w-4 h-4 mr-1" />
            {domain.flashCards?.length || 0} flash cards
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderFlashCards = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className={`text-2xl font-bold mb-6 ${
        currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-900'
      }`}>Flash Cards</h2>
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
              <div className={`absolute inset-0 backface-hidden rounded-xl shadow-lg p-6 flex items-center justify-center text-center overflow-hidden ${
                currentTheme === 'matrix'
                  ? 'bg-black/80 border-2 border-green-500'
                  : 'bg-white border-2 border-blue-100'
              }`}>
                <div className="w-full">
                  <p className={`text-lg font-medium mb-2 break-words ${
                    currentTheme === 'matrix' ? 'text-green-400' : 'text-gray-900'
                  }`}>{card.front}</p>
                  <span className={`text-sm font-medium ${
                    currentTheme === 'matrix' ? 'text-green-600' : 'text-blue-600'
                  }`}>{card.category}</span>
                </div>
              </div>
              
              {/* Back of card */}
              <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl shadow-lg p-6 flex items-center justify-center text-center overflow-y-auto ${
                currentTheme === 'matrix'
                  ? 'bg-black/90 border-2 border-green-500'
                  : 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200'
              }`}>
                <div className="w-full">
                  <div className={`prose prose-sm max-w-none ${
                    currentTheme === 'matrix' ? 'prose-invert' : ''
                  }`}>
                    <p className={`text-base whitespace-pre-line break-words ${
                      currentTheme === 'matrix' ? 'text-green-400' : 'text-gray-700'
                    }`}>{card.back}</p>
                  </div>
                  <div className={`mt-4 flex items-center justify-center text-sm ${
                    currentTheme === 'matrix' ? 'text-green-600' : 'text-blue-600'
                  }`}>
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

  const renderResultsScreen = () => {
    const metrics = calculatePerformanceMetrics();
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className={`text-center ${
          currentTheme === 'matrix' ? 'text-green-400' : 'text-gray-900'
        }`}>
          <h2 className="text-3xl font-bold mb-2">Domain Complete!</h2>
          <p className="text-lg">Here's how you performed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Score Card */}
          <div className={`p-6 rounded-xl shadow-lg ${
            currentTheme === 'matrix'
              ? 'bg-black/80 border border-green-500'
              : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-900'
              }`}>Score</h3>
              <Award className={`w-6 h-6 ${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-primary-600'
              }`} />
            </div>
            <div className={`text-3xl font-bold mb-2 ${
              currentTheme === 'matrix' ? 'text-green-400' : 'text-primary-600'
            }`}>
              {Math.round(metrics.accuracy)}%
            </div>
            <p className={`text-sm ${
              currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-600'
            }`}>
              {metrics.correctCount} correct out of {metrics.totalQuestions}
            </p>
          </div>

          {/* Time Card */}
          <div className={`p-6 rounded-xl shadow-lg ${
            currentTheme === 'matrix'
              ? 'bg-black/80 border border-green-500'
              : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-900'
              }`}>Time</h3>
              <Clock className={`w-6 h-6 ${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-primary-600'
              }`} />
            </div>
            <div className={`text-3xl font-bold mb-2 ${
              currentTheme === 'matrix' ? 'text-green-400' : 'text-primary-600'
            }`}>
              {formatTime(analysisData.timeSpent)}
            </div>
            <p className={`text-sm ${
              currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-600'
            }`}>
              ~{Math.round(metrics.timePerQuestion)}s per question
            </p>
          </div>

          {/* Performance Card */}
          <div className={`p-6 rounded-xl shadow-lg ${
            currentTheme === 'matrix'
              ? 'bg-black/80 border border-green-500'
              : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-900'
              }`}>Performance</h3>
              <BarChart className={`w-6 h-6 ${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-primary-600'
              }`} />
            </div>
            <div className={`text-3xl font-bold mb-2 ${
              currentTheme === 'matrix' ? 'text-green-400' : 'text-primary-600'
            }`}>
              {metrics.correctCount}/{metrics.totalQuestions}
            </div>
            <p className={`text-sm ${
              currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-600'
            }`}>
              {metrics.incorrectCount} incorrect answers
            </p>
          </div>
        </div>

        {/* Question Analysis */}
        <div className={`mt-8 p-6 rounded-xl shadow-lg ${
          currentTheme === 'matrix'
            ? 'bg-black/80 border border-green-500'
            : 'bg-white'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${
            currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-900'
          }`}>Question Analysis</h3>
          <div className="space-y-6">
            {randomizedQuestions.map((question, index) => (
              <div key={index} className={`p-4 rounded-lg ${
                currentTheme === 'matrix'
                  ? 'bg-black/60 border border-green-700'
                  : 'bg-gray-50'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className={`font-medium mb-2 ${
                        currentTheme === 'matrix' ? 'text-green-400' : 'text-gray-900'
                      }`}>
                        {index + 1}. {question.question}
                      </p>
                      <div className="ml-4">
                        {correctAnswers.has(index) ? (
                          <CheckCircle className={`w-6 h-6 ${
                            currentTheme === 'matrix' ? 'text-green-500' : 'text-success-600'
                          }`} />
                        ) : (
                          <XCircle className={`w-6 h-6 ${
                            currentTheme === 'matrix' ? 'text-red-500' : 'text-error-600'
                          }`} />
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-3 space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className={`p-2 rounded ${
                          currentTheme === 'matrix'
                            ? optionIndex === question.correctAnswer
                              ? 'bg-black/80 border border-green-500 text-green-400'
                              : optionIndex === selectedAnswers[index]
                                ? 'bg-black/80 border border-red-500 text-red-400'
                                : 'bg-black/40 border border-green-900 text-green-600'
                            : optionIndex === question.correctAnswer
                              ? 'bg-success-50 border border-success-200 text-success-700'
                              : optionIndex === selectedAnswers[index]
                                ? 'bg-error-50 border border-error-200 text-error-700'
                                : 'bg-gray-50 border border-gray-200 text-gray-600'
                        }`}>
                          <div className="flex items-center">
                            <div className="mr-2">
                              {optionIndex === question.correctAnswer ? (
                                <CheckCircle className={`w-4 h-4 ${
                                  currentTheme === 'matrix' ? 'text-green-500' : 'text-success-600'
                                }`} />
                              ) : optionIndex === selectedAnswers[index] ? (
                                <XCircle className={`w-4 h-4 ${
                                  currentTheme === 'matrix' ? 'text-red-500' : 'text-error-600'
                                }`} />
                              ) : (
                                <div className={`w-4 h-4 rounded-full border ${
                                  currentTheme === 'matrix'
                                    ? 'border-green-700'
                                    : 'border-gray-300'
                                }`} />
                              )}
                            </div>
                            {option}
                          </div>
                        </div>
                      ))}
                    </div>

                    {question.explanation && (
                      <div className={`mt-3 text-sm ${
                        currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        <span className={`font-medium ${
                          currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-700'
                        }`}>Explanation: </span>
                        {question.explanation}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setSelectedDomain(null)}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              currentTheme === 'matrix'
                ? 'bg-black/60 text-green-500 hover:bg-black/70 border border-green-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Back to Domains
          </button>
          <button
            onClick={() => {
              handleDomainSelect(selectedDomain!);
            }}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              currentTheme === 'matrix'
                ? 'bg-black border-2 border-green-500 text-green-500 hover:border-green-400'
                : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md'
            }`}
          >
            Retry Domain
          </button>
        </div>
      </motion.div>
    );
  };

  const renderSubmitButton = () => {
    if (answeredQuestions.size === randomizedQuestions.length && !showResults) {
      return (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSubmit}
            className={`px-8 py-3 rounded-lg transition-all duration-300 ${
              currentTheme === 'matrix'
                ? 'bg-black border-2 border-green-500 text-green-500 hover:border-green-400'
                : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md'
            }`}
          >
            Submit and View Results
          </button>
        </div>
      );
    }
    return null;
  };

  const renderMobileSidebar = () => (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed right-0 top-0 h-full w-80 max-w-[90vw] flex flex-col rounded-l-xl shadow-lg p-4 overflow-auto ${
              currentTheme === 'matrix'
                ? 'bg-black/95 border-l border-green-500'
                : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-semibold ${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-900'
              }`}>
                Question Progress
              </h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`p-2 rounded-lg ${
                  currentTheme === 'matrix'
                    ? 'text-green-500 hover:bg-black/70'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tab buttons for mobile */}
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setActiveTab('practice')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeTab === 'practice'
                    ? currentTheme === 'matrix'
                      ? 'bg-black border-2 border-green-500 text-green-500'
                      : currentTheme === 'cyberpunk'
                        ? 'bg-green-700 border-2 border-green-800 text-black'
                        : `bg-gradient-to-r ${currentThemeData.gradients.primary} text-white shadow-md`
                    : currentTheme === 'matrix'
                      ? 'bg-black/50 text-green-600 hover:bg-black/70 border border-green-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Practice
              </button>
              <button
                onClick={() => setActiveTab('flashcards')}
                className={`flex-1 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeTab === 'flashcards'
                    ? currentTheme === 'matrix'
                      ? 'bg-black border-2 border-green-500 text-green-500'
                      : currentTheme === 'cyberpunk'
                        ? 'bg-green-700 border-2 border-green-800 text-black'
                        : `bg-gradient-to-r ${currentThemeData.gradients.primary} text-white shadow-md`
                    : currentTheme === 'matrix'
                      ? 'bg-black/50 text-green-600 hover:bg-black/70 border border-green-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Flash Cards
              </button>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${
                  currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-600'
                }`}>Progress</span>
                <span className={`text-sm font-medium ${
                  currentTheme === 'matrix' ? 'text-green-400' 
                  : currentTheme === 'crimson' ? 'text-red-400'
                  : currentTheme === 'cyberpunk' ? 'text-green-600'
                  : 'text-blue-600'
                }`}>
                  {Math.round((answeredQuestions.size / randomizedQuestions.length) * 100)}%
                </span>
              </div>
              <div className={`w-full h-1.5 rounded-full ${
                currentTheme === 'matrix' ? 'bg-green-900' : 'bg-gray-200'
              }`}>
                <div 
                  className={`h-full rounded-full transition-all duration-300 shadow-sm ${
                    currentTheme === 'matrix'
                      ? 'bg-green-500'
                      : 'bg-gradient-to-r from-primary-500 to-primary-600'
                  }`}
                  style={{ width: `${(answeredQuestions.size / randomizedQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Score */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-600'
                }`}>Score</span>
                <span className={`text-sm font-medium ${
                  currentTheme === 'matrix' ? 'text-green-400' : 'text-green-600'
                }`}>
                  {correctAnswers.size}/{answeredQuestions.size}
                </span>
              </div>
            </div>

            {/* Questions Grid */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-5 gap-2">
                {randomizedQuestions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      jumpToQuestion(index);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                      currentTheme === 'matrix'
                        ? index === currentQuestion
                          ? 'bg-black border-2 border-green-500 text-green-400'
                          : answeredQuestions.has(index)
                            ? correctAnswers.has(index)
                              ? 'bg-black/80 border border-green-500 text-green-500'
                              : 'bg-black/80 border border-red-500 text-red-500'
                            : 'bg-black/60 border border-green-700 text-green-600 hover:border-green-500'
                        : index === currentQuestion
                          ? currentTheme === 'crimson'
                            ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md'
                            : currentTheme === 'cyberpunk'
                              ? 'bg-gradient-to-r from-green-700 to-green-800 text-white shadow-md'
                              : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                          : answeredQuestions.has(index)
                            ? correctAnswers.has(index)
                              ? 'bg-gradient-to-r from-success-200 to-success-300 text-success-700 shadow-md'
                              : 'bg-gradient-to-r from-error-200 to-error-300 text-error-700 shadow-md'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className={`mt-4 pt-4 border-t ${
              currentTheme === 'matrix' ? 'border-green-800' : 'border-gray-200'
            }`}>
              <div className={`flex items-center justify-between text-xs ${
                currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-500'
              }`}>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded mr-1 shadow-sm ${
                    currentTheme === 'matrix'
                      ? 'bg-green-500'
                      : 'bg-gradient-to-r from-success-200 to-success-300'
                  }`}></div>
                  Correct
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded mr-1 shadow-sm ${
                    currentTheme === 'matrix'
                      ? 'bg-red-500'
                      : 'bg-gradient-to-r from-error-200 to-error-300'
                  }`}></div>
                  Incorrect
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderPracticeContent = () => {
    if (showResults) {
      return renderResultsScreen();
    }

    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-2 rounded-lg ${
                  currentTheme === 'matrix'
                    ? 'bg-black border border-green-600 text-green-500 hover:border-green-500'
                    : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>
              
              <p className={`${
                currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-600'
              }`}>
                Question {currentQuestion + 1} of {randomizedQuestions.length}
              </p>
              <div className="hidden sm:flex items-center space-x-2">
                <span className={`text-sm ${
                  currentTheme === 'matrix' ? 'text-green-500' : 'text-green-600'
                }`}>
                  Correct: {correctAnswers.size}
                </span>
                <span className={`text-sm ${
                  currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  | Answered: {answeredQuestions.size}
                </span>
              </div>
            </div>
            {/* Auto-advance toggle */}
            <button
              onClick={() => setAutoAdvance(prev => !prev)}
              className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-sm lg:text-base transition-all duration-300 ${
                currentTheme === 'matrix'
                  ? autoAdvance
                    ? 'bg-black border-2 border-green-500 text-green-500'
                    : 'bg-black/50 text-green-600 hover:bg-black/70 border border-green-600'
                  : currentTheme === 'crimson'
                    ? autoAdvance
                      ? 'bg-red-600 border-2 border-red-700 text-white'
                      : 'bg-red-500/50 text-white hover:bg-red-500/70 border border-red-600'
                    : currentTheme === 'cyberpunk'
                      ? autoAdvance
                        ? 'bg-green-700 border-2 border-green-800 text-black'
                        : 'bg-green-600/50 text-black hover:bg-green-600/70 border border-green-700'
                      : autoAdvance
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                        : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              <span className="hidden sm:inline">Auto Next: {autoAdvance ? 'On' : 'Off'}</span>
              <span className="sm:hidden">Auto: {autoAdvance ? 'On' : 'Off'}</span>
            </button>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <p className={`text-xl font-medium mb-4 ${
                currentTheme === 'matrix' ? 'text-green-400' : 'text-gray-900'
              }`}>
                {randomizedQuestions[currentQuestion].question}
              </p>
              <div className="space-y-3">
                {randomizedQuestions[currentQuestion].options.map(
                  (option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                        getAnswerButtonStyle(
                          currentTheme,
                          selectedAnswer === index,
                          showExplanation,
                          index === randomizedQuestions[currentQuestion].correctAnswer
                        )
                      }`}
                      disabled={showExplanation}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center">
                        {showExplanation && (
                          <span className="mr-2">
                            {index === randomizedQuestions[currentQuestion].correctAnswer ? (
                              <CheckCircle className={`w-5 h-5 ${
                                currentTheme === 'matrix' ? 'text-green-500' : 'text-success-600'
                              }`} />
                            ) : selectedAnswer === index ? (
                              <XCircle className={`w-5 h-5 ${
                                currentTheme === 'matrix' ? 'text-red-500' : 'text-error-600'
                              }`} />
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
                  <h3 className={`text-lg font-semibold mb-2 ${
                    currentTheme === 'matrix' ? 'text-green-400' : 'text-gray-900'
                  }`}>
                    Explanation
                  </h3>
                  <p className={`${
                    currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-700'
                  }`}>
                    {randomizedQuestions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}

              <div className="flex justify-between mt-6">
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    currentTheme === 'matrix'
                      ? currentQuestion === 0
                        ? 'bg-black/50 text-green-800 cursor-not-allowed border border-green-800'
                        : 'bg-black/60 text-green-500 hover:bg-black/70 border border-green-600'
                      : currentQuestion === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Previous
                </button>
                {currentQuestion < randomizedQuestions.length - 1 && (
                  <button
                    onClick={nextQuestion}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                      currentTheme === 'matrix'
                        ? 'bg-black border-2 border-green-500 text-green-500 hover:border-green-400'
                        : currentTheme === 'crimson'
                          ? 'bg-red-600 border-2 border-red-700 text-white hover:bg-red-700'
                          : currentTheme === 'cyberpunk'
                            ? 'bg-green-700 border-2 border-green-800 text-black hover:bg-green-600'
                            : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md'
                    }`}
                  >
                    {showExplanation ? 'Next Question' : 'Skip Question'}
                  </button>
                )}
              </div>
            </div>

            {/* Desktop Sidebar - Hidden on mobile */}
            <div className={`hidden lg:flex w-64 flex-shrink-0 flex-col rounded-xl shadow-lg p-4 overflow-auto ${
              currentTheme === 'matrix'
                ? 'bg-black/80 border border-green-500'
                : 'bg-white'
            }`}>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${
                    currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-600'
                  }`}>Progress</span>
                  <span className={`text-sm font-medium ${
                    currentTheme === 'matrix' ? 'text-green-400' 
                    : currentTheme === 'crimson' ? 'text-red-400'
                    : currentTheme === 'cyberpunk' ? 'text-green-600'
                    : 'text-blue-600'
                  }`}>
                    {Math.round((answeredQuestions.size / randomizedQuestions.length) * 100)}%
                  </span>
                </div>
                <div className={`w-full h-1.5 rounded-full ${
                  currentTheme === 'matrix' ? 'bg-green-900' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full rounded-full transition-all duration-300 shadow-sm ${
                      currentTheme === 'matrix'
                        ? 'bg-green-500'
                        : 'bg-gradient-to-r from-primary-500 to-primary-600'
                    }`}
                    style={{ width: `${(answeredQuestions.size / randomizedQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-600'
                  }`}>Score</span>
                  <span className={`text-sm font-medium ${
                    currentTheme === 'matrix' ? 'text-green-400' : 'text-green-600'
                  }`}>
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
                        currentTheme === 'matrix'
                          ? index === currentQuestion
                            ? 'bg-black border-2 border-green-500 text-green-400'
                            : answeredQuestions.has(index)
                              ? correctAnswers.has(index)
                                ? 'bg-black/80 border border-green-500 text-green-500'
                                : 'bg-black/80 border border-red-500 text-red-500'
                              : 'bg-black/60 border border-green-700 text-green-600 hover:border-green-500'
                          : index === currentQuestion
                            ? currentTheme === 'crimson'
                              ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md'
                              : currentTheme === 'cyberpunk'
                                ? 'bg-gradient-to-r from-green-700 to-green-800 text-white shadow-md'
                                : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                            : answeredQuestions.has(index)
                              ? correctAnswers.has(index)
                                ? 'bg-gradient-to-r from-success-200 to-success-300 text-success-700 shadow-md'
                                : 'bg-gradient-to-r from-error-200 to-error-300 text-error-700 shadow-md'
                              : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`mt-4 pt-4 border-t ${
                currentTheme === 'matrix' ? 'border-green-800' : 'border-gray-200'
              }`}>
                <div className={`flex items-center justify-between text-xs ${
                  currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-500'
                }`}>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded mr-1 shadow-sm ${
                      currentTheme === 'matrix'
                        ? 'bg-green-500'
                        : 'bg-gradient-to-r from-success-200 to-success-300'
                    }`}></div>
                    Correct
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded mr-1 shadow-sm ${
                      currentTheme === 'matrix'
                        ? 'bg-red-500'
                        : 'bg-gradient-to-r from-error-200 to-error-300'
                    }`}></div>
                    Incorrect
                  </div>
                </div>
              </div>
            </div>
          </div>
          {renderSubmitButton()}
        </div>
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentThemeData.gradients.background} relative`}>
      {currentTheme === 'matrix' && <DigitalRain />}
      {renderMobileSidebar()}
      <ThemeSwitcher
        themes={themes}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />
      <div className={`max-w-7xl mx-auto p-4 lg:p-8 relative z-10 ${currentTheme === 'matrix' ? 'text-green-500' : ''}`}>
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-4xl font-bold text-center mb-8 flex items-center justify-center ${
            currentTheme === 'matrix' ? 'text-green-500' 
            : currentTheme === 'crimson' ? 'text-red-50' 
            : currentTheme === 'cyberpunk' ? 'text-green-800'
            : 'text-primary-700'
          }`}
        >
          <Shield className={`w-8 h-8 mr-3 ${
            currentTheme === 'matrix' ? 'text-green-500' 
            : currentTheme === 'crimson' ? 'text-red-200'
            : currentTheme === 'cyberpunk' ? 'text-green-700'
            : 'text-primary-500'
          }`} />
          CISSP Practice Questions
        </motion.h1>
        
        {!selectedDomain ? (
          renderDomainOverview()
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${
              currentTheme === 'matrix'
                ? 'bg-black/80 border-green-500'
                : 'bg-white border-primary-100'
            } rounded-xl shadow-lg p-6 border`}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className={`${
                    currentTheme === 'matrix'
                      ? 'text-green-500 hover:text-green-400'
                      : currentTheme === 'cyberpunk'
                        ? 'text-green-700 hover:text-green-600'
                        : 'text-primary-600 hover:text-primary-700'
                  } mr-4 flex items-center`}
                >
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  Back to Domains
                </button>
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${
                    currentTheme === 'matrix'
                      ? 'bg-black border-2 border-green-500'
                      : currentTheme === 'crimson'
                        ? 'bg-black border-2 border-red-500'
                        : currentTheme === 'cyberpunk'
                          ? 'bg-green-700 border-2 border-green-800 text-black'
                          : `bg-gradient-to-br from-primary-400 to-primary-600`
                  } rounded-xl flex items-center justify-center mr-3 text-white shadow-md`}>
                    {domainIcons[selectedDomain.id as keyof typeof domainIcons]}
                  </div>
                  <div>
                    <h2 className={`text-2xl font-semibold ${
                      currentTheme === 'matrix' ? 'text-green-500' : 'text-gray-900'
                    }`}>
                      {selectedDomain.name}
                    </h2>
                    <p className={`text-sm ${
                      currentTheme === 'matrix' ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      Domain {selectedDomain.id}
                    </p>
                  </div>
                </div>
              </div>
              {randomizedQuestions.length > 0 && (
                <div className={`text-sm font-medium ${
                  currentTheme === 'matrix' ? 'text-green-500' 
                  : currentTheme === 'cyberpunk' ? 'text-green-700'
                  : 'text-primary-600'
                }`}>
                  Score: {score}/{currentQuestion + 1}
                </div>
              )}
            </div>

            {/* Desktop Tab buttons - Hidden on mobile */}
            <div className="hidden lg:flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab('practice')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'practice'
                    ? currentTheme === 'matrix'
                      ? 'bg-black border-2 border-green-500 text-green-500'
                      : currentTheme === 'cyberpunk'
                        ? 'bg-green-700 border-2 border-green-800 text-black'
                        : `bg-gradient-to-r ${currentThemeData.gradients.primary} text-white shadow-md`
                    : currentTheme === 'matrix'
                      ? 'bg-black/50 text-green-600 hover:bg-black/70 border border-green-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Practice Questions
              </button>
              <button
                onClick={() => setActiveTab('flashcards')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'flashcards'
                    ? currentTheme === 'matrix'
                      ? 'bg-black border-2 border-green-500 text-green-500'
                      : currentTheme === 'cyberpunk'
                        ? 'bg-green-700 border-2 border-green-800 text-black'
                        : `bg-gradient-to-r ${currentThemeData.gradients.primary} text-white shadow-md`
                    : currentTheme === 'matrix'
                      ? 'bg-black/50 text-green-600 hover:bg-black/70 border border-green-600'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Flash Cards
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'practice' && randomizedQuestions.length > 0 ? (
                renderPracticeContent()
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