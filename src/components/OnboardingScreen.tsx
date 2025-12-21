import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const onboardingData = [
  {
    title: "Talk freely. You're not alone.",
    description: "Share your feelings in a judgment-free space designed for your emotional well-being",
    emoji: "💙",
    gradient: "from-[#ddd6fe] to-[#e0e7ff]"
  },
  {
    title: "AI support + real psychologists.",
    description: "Get instant AI companionship and connect with licensed mental health professionals",
    emoji: "🤝",
    gradient: "from-[#bae6fd] to-[#ddd6fe]"
  },
  {
    title: "Private. Safe. Judgment-free.",
    description: "Your conversations are encrypted and confidential. Your healing journey, your pace",
    emoji: "🔒",
    gradient: "from-[#99f6e4] to-[#bae6fd]"
  }
];

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const current = onboardingData[currentStep];

  return (
    <div className={`relative w-full h-full bg-gradient-to-b ${current.gradient} flex flex-col`}>
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
        <button onClick={handleSkip} className="text-[#57534e] px-4 py-2">
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-32">
        <div className="mb-12 text-[100px]">
          {current.emoji}
        </div>
        
        <h1 className="text-[#292524] text-center mb-4 max-w-[280px]">
          {current.title}
        </h1>
        
        <p className="text-[#57534e] text-center max-w-[300px] leading-relaxed">
          {current.description}
        </p>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-40 left-0 right-0 flex justify-center gap-2">
        {onboardingData.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentStep 
                ? 'w-8 bg-[#312e81]' 
                : 'w-2 bg-[#a8a29e]'
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <div className="absolute bottom-20 left-0 right-0 px-8">
        <button
          onClick={handleNext}
          className="w-full bg-[#312e81] text-white py-4 rounded-3xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform"
        >
          <span>{currentStep === onboardingData.length - 1 ? "Get Started" : "Continue"}</span>
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
