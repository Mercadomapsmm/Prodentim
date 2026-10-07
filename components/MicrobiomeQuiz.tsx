'use client';
import React, { useState } from 'react';
import { HelpCircle, CheckCircle, ArrowRight, RotateCcw, Sparkles, AlertTriangle, ChevronRight } from 'lucide-react';

interface MicrobiomeQuizProps {
  onOpenCheckout: (pkg: string) => void;
}

export default function MicrobiomeQuiz({ onOpenCheckout }: MicrobiomeQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      title: "Do your gums bleed when brushing or flossing?",
      options: [
        { label: "Never, my gums are very healthy", score: 0 },
        { label: "Occasionally or once in a while", score: 1 },
        { label: "Frequently or every time I brush", score: 2 }
      ]
    },
    {
      title: "How often do you experience bad breath (halitosis) after brushing?",
      options: [
        { label: "Rarely or never", score: 0 },
        { label: "Sometimes by afternoon", score: 1 },
        { label: "Constantly, regardless of mouthwash", score: 2 }
      ]
    },
    {
      title: "Do you experience tooth sensitivity to hot or cold foods/drinks?",
      options: [
        { label: "No sensitivity at all", score: 0 },
        { label: "Mild twinges occasionally", score: 1 },
        { label: "Severe sharp pain regularly", score: 2 }
      ]
    },
    {
      title: "What type of oral hygiene products do you primarily use?",
      options: [
        { label: "Regular commercial fluoride toothpaste & mouthwash", score: 2 },
        { label: "Natural or herbal toothpaste", score: 1 },
        { label: "Probiotic and microbiome-conscious dental care", score: 0 }
      ]
    }
  ];

  const handleSelectOption = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  return (
    <section id="quiz" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Take the 60-Second Oral Microbiome Check
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Discover your oral bacteria balance and learn how ProDentim can protect your teeth and gums.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {!quizCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Title */}
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">
                {questions[currentStep].title}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.score)}
                    className="w-full text-left bg-slate-800/80 hover:bg-emerald-500/15 hover:border-emerald-500/50 border border-slate-700/80 p-4 rounded-2xl transition-all font-medium text-slate-200 hover:text-white flex items-center justify-between group"
                  >
                    <span>{option.label}</span>
                    <div className="w-6 h-6 rounded-full border border-slate-600 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40 shadow-xl">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black">
                Assessment Complete!
              </h3>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-lg mx-auto text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Microbiome Imbalance Index:</span>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                    totalScore <= 2 ? 'bg-emerald-500/20 text-emerald-400' :
                    totalScore <= 5 ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {totalScore <= 2 ? 'Low Imbalance' : totalScore <= 5 ? 'Moderate Imbalance' : 'High Imbalance'}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {totalScore <= 2 
                    ? "Your oral microbiome is in fairly good shape, but adding targeted probiotics can further enhance your enamel and breath freshness."
                    : totalScore <= 5
                    ? "You show signs of an unbalanced oral microbiome, which is likely causing gum sensitivity and bad breath. ProDentim's 3.5 billion CFU probiotic blend can help rebalance your mouth."
                    : "Your answers indicate significant oral microbiome disruption caused by harsh commercial toothpastes. Immediate repopulation with beneficial strains like L. Paracasei and B. lactis is highly recommended."}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenCheckout('pkg-3')}
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                >
                  <span>Claim Recommended ProDentim Pack</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium px-6 py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
