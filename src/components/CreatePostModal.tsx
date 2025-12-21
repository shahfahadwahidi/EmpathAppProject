import { useState } from 'react';
import { X, Lock, AlertCircle } from 'lucide-react';

interface CreatePostModalProps {
  onClose: () => void;
  onSubmit: (postData: { text: string; emotion: string; anonymous: boolean }) => void;
}

const emotions = [
  { name: 'Anxiety', emoji: '😰', color: 'bg-[#bae6fd]/30', textColor: 'text-[#0c4a6e]' },
  { name: 'Depression', emoji: '😔', color: 'bg-[#c4b5fd]/30', textColor: 'text-[#4c1d95]' },
  { name: 'Burnout', emoji: '😵', color: 'bg-[#fcd34d]/30', textColor: 'text-[#78350f]' },
  { name: 'Healing Stories', emoji: '🌱', color: 'bg-[#86efac]/30', textColor: 'text-[#166534]' },
  { name: 'Exams & Stress', emoji: '📚', color: 'bg-[#fca5a5]/30', textColor: 'text-[#7f1d1d]' },
  { name: 'Relationships', emoji: '💕', color: 'bg-[#f9a8d4]/30', textColor: 'text-[#831843]' },
];

export default function CreatePostModal({ onClose, onSubmit }: CreatePostModalProps) {
  const [text, setText] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('Anxiety');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = () => {
    if (!text.trim()) return;

    // Check for crisis keywords
    const crisisKeywords = ['hurt myself', 'end it', 'suicide', 'kill myself', 'want to die'];
    const hasCrisisKeyword = crisisKeywords.some(keyword => 
      text.toLowerCase().includes(keyword)
    );

    if (hasCrisisKeyword) {
      setShowWarning(true);
      return;
    }

    onSubmit({ text, emotion: selectedEmotion, anonymous: isAnonymous });
  };

  return (
    <div className="absolute inset-0 bg-[#292524]/60 backdrop-blur-sm flex items-end justify-center z-50">
      <div className="bg-white rounded-t-[40px] w-full max-h-[85%] overflow-y-auto shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#e7e5e4] px-6 pt-6 pb-4 rounded-t-[40px]">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[#292524]">Share how you're feeling</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-[#f5f5f4] rounded-full flex items-center justify-center text-[#57534e]"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-[#78716c] text-sm">You can write freely here...</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Text Input */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind? This is a judgment-free space."
            className="w-full bg-[#f5f5f4] border border-[#e7e5e4] rounded-3xl px-5 py-4 text-[#292524] placeholder:text-[#a8a29e] outline-none resize-none min-h-[150px] leading-relaxed"
            maxLength={500}
          />
          <p className="text-[#a8a29e] text-xs text-right mt-2">
            {text.length}/500 characters
          </p>

          {/* Emotion Selector */}
          <div className="mt-6">
            <h3 className="text-[#292524] mb-3">How are you feeling?</h3>
            <div className="grid grid-cols-2 gap-3">
              {emotions.map((emotion) => (
                <button
                  key={emotion.name}
                  onClick={() => setSelectedEmotion(emotion.name)}
                  className={`${emotion.color} ${emotion.textColor} p-4 rounded-2xl text-left transition-all ${
                    selectedEmotion === emotion.name
                      ? 'ring-2 ring-[#312e81] scale-[1.02]'
                      : 'ring-1 ring-[#e7e5e4]'
                  }`}
                >
                  <div className="text-2xl mb-1">{emotion.emoji}</div>
                  <p className="text-sm">{emotion.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Anonymous Toggle */}
          <div className="mt-6 bg-[#e0f2fe] border border-[#bae6fd] rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-[#0284c7] rounded-xl flex items-center justify-center">
                  <Lock size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[#292524]">Post anonymously</p>
                  <p className="text-[#57534e] text-xs">Your identity stays private</p>
                </div>
              </div>
              <button
                onClick={() => setIsAnonymous(!isAnonymous)}
                className={`w-14 h-8 rounded-full transition-all ${
                  isAnonymous ? 'bg-[#312e81]' : 'bg-[#d6d3d1]'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-all ${
                    isAnonymous ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 bg-[#fef3c7] border border-[#fcd34d] rounded-2xl p-4">
            <div className="flex items-start gap-2">
              <AlertCircle size={18} className="text-[#78350f] flex-shrink-0 mt-0.5" />
              <p className="text-[#78350f] text-xs leading-relaxed">
                This is a support space, not a replacement for therapy. If you're in crisis, please reach out to a professional.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!text.trim()}
            className={`w-full mt-6 py-4 rounded-3xl transition-all ${
              text.trim()
                ? 'bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white shadow-lg active:scale-[0.98]'
                : 'bg-[#f5f5f4] text-[#a8a29e] cursor-not-allowed'
            }`}
          >
            Post to Community
          </button>

          <button
            onClick={onClose}
            className="w-full mt-3 bg-[#f5f5f4] text-[#57534e] py-4 rounded-3xl active:scale-[0.98] transition-transform"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Crisis Warning Modal */}
      {showWarning && (
        <div className="absolute inset-0 bg-[#292524]/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-[320px] w-full shadow-2xl">
            <div className="w-16 h-16 bg-[#fef3c7] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} className="text-[#d97706]" />
            </div>

            <h2 className="text-[#292524] text-center mb-3">
              We're here for you
            </h2>
            
            <p className="text-[#57534e] text-center text-sm leading-relaxed mb-6">
              It sounds like you might be going through a really difficult time. Would you like to speak with a professional who can provide immediate support?
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowWarning(false);
                  onClose();
                  // This would navigate to session-type in parent component
                }}
                className="w-full bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white py-3 rounded-2xl active:scale-[0.98] transition-transform"
              >
                Talk to Professional Now
              </button>
              <button
                onClick={() => setShowWarning(false)}
                className="w-full bg-[#f5f5f4] text-[#57534e] py-3 rounded-2xl active:scale-[0.98] transition-transform"
              >
                Continue Posting
              </button>
            </div>

            <div className="mt-4 bg-[#fee2e2] border border-[#fca5a5] rounded-2xl p-3">
              <p className="text-[#7f1d1d] text-xs leading-relaxed">
                <strong>Crisis Resources:</strong><br />
                Pakistan Suicide Helpline: 0800-12345<br />
                Available 24/7
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
