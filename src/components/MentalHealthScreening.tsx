import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface MentalHealthScreeningProps {
  onComplete: () => void;
}

const phq9Questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself",
  "Trouble concentrating on things",
  "Moving or speaking slowly or being fidgety",
  "Thoughts of being better off dead"
];

const gad7Questions = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it's hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid as if something awful might happen"
];

const options = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 }
];

export default function MentalHealthScreening({ onComplete }: MentalHealthScreeningProps) {
  const [stage, setStage] = useState<'intro' | 'phq9' | 'gad7'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [phq9Answers, setPhq9Answers] = useState<number[]>([]);
  const [gad7Answers, setGad7Answers] = useState<number[]>([]);

  const handleIntroNext = () => {
    setStage('phq9');
  };

  const handleAnswer = (value: number) => {
    if (stage === 'phq9') {
      const newAnswers = [...phq9Answers, value];
      setPhq9Answers(newAnswers);
      
      if (currentQuestionIndex < phq9Questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setStage('gad7');
        setCurrentQuestionIndex(0);
      }
    } else if (stage === 'gad7') {
      const newAnswers = [...gad7Answers, value];
      setGad7Answers(newAnswers);
      
      if (currentQuestionIndex < gad7Questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        onComplete();
      }
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      if (stage === 'phq9') {
        setPhq9Answers(phq9Answers.slice(0, -1));
      } else {
        setGad7Answers(gad7Answers.slice(0, -1));
      }
    } else if (stage === 'gad7') {
      setStage('phq9');
      setCurrentQuestionIndex(phq9Questions.length - 1);
      setGad7Answers([]);
    }
  };

  if (stage === 'intro') {
    return (
      <div className="relative w-full h-full bg-gradient-to-b from-[#fafaf9] to-[#f5f5f4] flex flex-col">
        {/* Status Bar */}
        <div className="h-[44px] flex items-center justify-between px-6">
          <span className="text-[#292524]">9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-[#292524]/70 rounded-sm" />
            <div className="w-4 h-3 bg-[#292524]/70 rounded-sm" />
            <div className="w-6 h-3 bg-[#292524]/70 rounded-sm" />
          </div>
        </div>

        {/* Skip Button */}
        <div className="absolute top-14 right-6">
          <button onClick={onComplete} className="text-[#78716c] px-4 py-2">
            Skip for now
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 pb-20">
          <div className="text-[72px] mb-8">🌱</div>
          
          <h1 className="text-[#292524] text-center mb-4">
            Let's understand how you've been feeling lately
          </h1>
          
          <p className="text-[#57534e] text-center leading-relaxed mb-4 max-w-[300px]">
            This helps us support you better. You can skip if you want.
          </p>

          <div className="bg-[#ddd6fe]/30 border border-[#c4b5fd] rounded-2xl p-5 mb-8 max-w-[300px]">
            <p className="text-[#292524] text-sm text-center leading-relaxed">
              This will take about 3-5 minutes. Your responses are private and will only be used to personalize your experience.
            </p>
          </div>

          <button
            onClick={handleIntroNext}
            className="w-full max-w-[300px] bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white py-4 rounded-3xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform"
          >
            <span>Begin Assessment</span>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-[34px] flex items-center justify-center">
          <div className="w-[134px] h-[5px] bg-[#292524] rounded-full" />
        </div>
      </div>
    );
  }

  const questions = stage === 'phq9' ? phq9Questions : gad7Questions;
  const totalQuestions = phq9Questions.length + gad7Questions.length;
  const currentOverallIndex = stage === 'phq9' ? currentQuestionIndex : phq9Questions.length + currentQuestionIndex;
  const progress = ((currentOverallIndex + 1) / totalQuestions) * 100;

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#fafaf9] to-[#f5f5f4] flex flex-col">
      {/* Status Bar */}
      <div className="h-[44px] flex items-center justify-between px-6">
        <span className="text-[#292524]">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-[#292524]/70 rounded-sm" />
          <div className="w-4 h-3 bg-[#292524]/70 rounded-sm" />
          <div className="w-6 h-3 bg-[#292524]/70 rounded-sm" />
        </div>
      </div>

      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <button onClick={handleBack} className="text-[#57534e]">
            <ChevronLeft size={24} />
          </button>
          <button onClick={onComplete} className="text-[#78716c] text-sm">
            Skip for now
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-[#e7e5e4] rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#312e81] to-[#5eead4] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <div className="mb-8">
          <p className="text-[#a8a29e] text-sm mb-2">Recently, how often have you felt:</p>
          <h2 className="text-[#292524] leading-snug">
            {questions[currentQuestionIndex]}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full bg-white border-2 border-[#e7e5e4] text-[#292524] py-4 px-6 rounded-2xl text-left hover:border-[#312e81] hover:bg-[#fafaf9] active:scale-[0.98] transition-all"
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Reassurance Text */}
        <p className="mt-8 text-center text-[#a8a29e] text-sm px-4 leading-relaxed">
          Take your time. There are no right or wrong answers.
        </p>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-[#292524] rounded-full" />
      </div>
    </div>
  );
}