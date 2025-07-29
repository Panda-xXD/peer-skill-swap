import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Zap } from 'lucide-react';
import { skillsetQuestions } from '../data/skillsetQuestions';
import { UserSkillsetProfile } from '../types';

interface SkillsetQuestionnaireProps {
  onComplete: (profile: UserSkillsetProfile) => void;
  onSkip: () => void;
}

export function SkillsetQuestionnaire({ onComplete, onSkip }: SkillsetQuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  const question = skillsetQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === skillsetQuestions.length - 1;
  const progress = ((currentQuestion + 1) / skillsetQuestions.length) * 100;

  const handleAnswer = (option: string) => {
    const currentAnswers = answers[question.id] || [];
    
    if (question.type === 'single') {
      setAnswers(prev => ({ ...prev, [question.id]: [option] }));
    } else {
      const newAnswers = currentAnswers.includes(option)
        ? currentAnswers.filter(a => a !== option)
        : [...currentAnswers, option];
      setAnswers(prev => ({ ...prev, [question.id]: newAnswers }));
    }
  };

  const canProceed = () => {
    const currentAnswers = answers[question.id] || [];
    return currentAnswers.length > 0;
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const profile: UserSkillsetProfile = {
        skillsOffered: answers['skills-offered'] || [],
        skillsWanted: answers['skills-wanted'] || [],
        experienceLevels: {
          primary: answers['experience-level']?.[0] || 'Beginner'
        },
        interests: answers['goals'] || [],
        availability: answers['availability']?.[0] || 'Flexible timing'
      };
      onComplete(profile);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">SkillSync Setup</h1>
                  <p className="text-purple-100">Let's find your perfect skill matches</p>
                </div>
              </div>
              <button
                onClick={onSkip}
                className="text-purple-100 hover:text-white transition-colors text-sm"
              >
                Skip for now
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-purple-100 mt-2">
              <span>Question {currentQuestion + 1} of {skillsetQuestions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected = (answers[question.id] || []).includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {isSelected && (
                        <div className="bg-purple-500 text-white rounded-full p-1">
                          <Check className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {question.type === 'multiple' && (
              <p className="text-sm text-gray-600 mt-4 text-center">
                You can select multiple options
              </p>
            )}
          </div>

          {/* Navigation */}
          <div className="px-8 py-6 bg-gray-50 flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex space-x-2">
              {skillsetQuestions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index <= currentQuestion ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <span>{isLastQuestion ? 'Complete Setup' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}