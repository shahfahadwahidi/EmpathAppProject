import { MessageCircle, Calendar, User, Heart, Shield } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
  userPlan: string;
}

export default function HomeScreen({ onNavigate, userPlan }: HomeScreenProps) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

  const handlePsychologistClick = () => {
    onNavigate('session-type');
  };

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Status Bar */}
      <div className="h-[44px] flex items-center justify-between px-6">
        <span className="text-[#292524]">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-[#292524]/70 rounded-sm" />
          <div className="w-4 h-3 bg-[#292524]/70 rounded-sm" />
          <div className="w-6 h-3 bg-[#292524]/70 rounded-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Header */}
        <div className="mt-6 mb-6">
          <h1 className="text-[#292524] mb-2">
            {greeting}
          </h1>
          <p className="text-[#57534e] leading-relaxed">
            Hi, we're here for you.
          </p>
        </div>

        {/* Emotional Status Card */}
        <div className="bg-gradient-to-br from-[#ddd6fe] to-[#c4b5fd] rounded-3xl p-6 mb-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[#312e81] text-sm mb-1">Your emotional wellness</p>
              <h2 className="text-[#292524]">You're doing okay</h2>
            </div>
            <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center">
              <Heart size={24} className="text-[#312e81]" />
            </div>
          </div>
          <p className="text-[#44403c] text-sm leading-relaxed mb-4">
            We're here whenever you need support. You don't have to go through this alone.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => onNavigate('chat')}
              className="flex-1 bg-white/90 text-[#312e81] py-3 rounded-2xl active:scale-[0.98] transition-transform"
            >
              Talk to AI
            </button>
            <button
              onClick={handlePsychologistClick}
              className="flex-1 bg-[#312e81] text-white py-3 rounded-2xl active:scale-[0.98] transition-transform"
            >
              Talk to Pro
            </button>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => onNavigate('chat')}
            className="bg-gradient-to-br from-[#312e81] to-[#4c1d95] rounded-3xl p-6 text-left shadow-md active:scale-[0.98] transition-transform"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
              <MessageCircle size={24} className="text-white" />
            </div>
            <h3 className="text-white mb-1">Talk to Empath</h3>
            <p className="text-white/70 text-sm">AI companion</p>
          </button>

          <button
            onClick={handlePsychologistClick}
            className="bg-gradient-to-br from-[#5eead4] to-[#2dd4bf] rounded-3xl p-6 text-left shadow-md active:scale-[0.98] transition-transform"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
              <Heart size={24} className="text-white" />
            </div>
            <h3 className="text-white mb-1">Talk to Psychologist</h3>
            <p className="text-white/70 text-sm">Licensed pros</p>
          </button>
        </div>

        {/* Reassurance Section */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#bae6fd]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield size={24} className="text-[#0284c7]" />
            </div>
            <div>
              <h3 className="text-[#292524] mb-2">You're safe here</h3>
              <p className="text-[#57534e] text-sm leading-relaxed">
                All conversations are encrypted end-to-end. Your privacy is protected, and your data is never shared.
              </p>
            </div>
          </div>
        </div>

        {/* Care Plan Card - Only for Empath Plus users */}
        {userPlan === 'empathplus' && (
          <button
            onClick={() => onNavigate('care-plan')}
            className="w-full bg-gradient-to-br from-[#c4b5fd] to-[#a78bfa] rounded-3xl p-5 mb-6 shadow-md active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-left">
                <h3 className="text-white mb-1">Your Care Plan</h3>
                <p className="text-white/80 text-sm">3 sessions remaining</p>
              </div>
              <div className="text-3xl">💜</div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-white h-2 rounded-full" style={{ width: '100%' }} />
            </div>
          </button>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-[#f5f5f4] rounded-2xl p-4 text-center">
            <p className="text-2xl text-[#312e81] mb-1">12</p>
            <p className="text-xs text-[#a8a29e]">Check-ins</p>
          </div>
          <div className="bg-[#f5f5f4] rounded-2xl p-4 text-center">
            <p className="text-2xl text-[#0891b2] mb-1">3</p>
            <p className="text-xs text-[#a8a29e]">Sessions</p>
          </div>
          <div className="bg-[#f5f5f4] rounded-2xl p-4 text-center">
            <p className="text-2xl text-[#14b8a6] mb-1">7</p>
            <p className="text-xs text-[#a8a29e]">Day streak</p>
          </div>
        </div>

        {/* Subscription Prompt */}
        {userPlan === 'free' && (
          <button
            onClick={() => onNavigate('subscription')}
            className="w-full bg-gradient-to-r from-[#fcd34d] to-[#fbbf24] rounded-3xl p-5 flex items-center justify-between shadow-md active:scale-[0.98] transition-transform"
          >
            <div className="text-left">
              <h3 className="text-[#292524] mb-1">Upgrade to Comfort Plan</h3>
              <p className="text-[#44403c] text-sm">Unlimited AI + 1 session from Rs. 1,000</p>
            </div>
            <div className="text-2xl">✨</div>
          </button>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e7e5e4] pt-3 pb-8">
        <div className="flex justify-around items-center px-6">
          <button className="flex flex-col items-center gap-1 text-[#312e81]">
            <div className="w-10 h-10 bg-[#ddd6fe] rounded-2xl flex items-center justify-center">
              <Heart size={20} />
            </div>
            <span className="text-xs">Home</span>
          </button>
          <button onClick={() => onNavigate('chat')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <MessageCircle size={20} />
            <span className="text-xs">Chat</span>
          </button>
          <button onClick={() => onNavigate('community')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="text-xs">Community</span>
          </button>
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <User size={20} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}