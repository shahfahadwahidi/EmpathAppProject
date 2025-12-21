import { ArrowLeft, ChevronRight, Bell, Lock, HelpCircle, LogOut, MessageCircle, Calendar, User, Heart, Target, Award, Zap, Shield } from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  userPlan: string;
}

const goals = [
  { icon: Target, label: 'Reduce anxiety', progress: 65, color: 'from-[#312e81] to-[#4c1d95]' },
  { icon: Heart, label: 'Better sleep', progress: 45, color: 'from-[#0284c7] to-[#7dd3fc]' },
  { icon: Zap, label: 'Daily mindfulness', progress: 80, color: 'from-[#14b8a6] to-[#5eead4]' },
];

const achievements = [
  { emoji: '🔥', label: '7 day streak', unlocked: true },
  { emoji: '⭐', label: '50 exercises', unlocked: true },
  { emoji: '🌟', label: '100 check-ins', unlocked: false },
  { emoji: '💎', label: 'Monthly goal', unlocked: false },
];

const settingsOptions = [
  { icon: Bell, label: 'Notifications', value: 'On' },
  { icon: Lock, label: 'Privacy & Security', value: '' },
  { icon: HelpCircle, label: 'Help & Support', value: '' },
];

export default function ProfileScreen({ onNavigate, userPlan }: ProfileScreenProps) {
  const planNames: Record<string, string> = {
    free: 'Starter Plan',
    support: 'Support Plan',
    comfort: 'Comfort Plan',
    empathplus: 'Empath Plus'
  };

  const planName = planNames[userPlan] || 'Free Plan';
  const isPremium = userPlan !== 'free';

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[#292524]">Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* User Profile */}
        <div className="bg-gradient-to-br from-[#ddd6fe] to-[#c4b5fd] rounded-3xl p-6 mb-6 text-center shadow-sm">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
            👤
          </div>
          <h2 className="text-[#292524] mb-1">Alex Johnson</h2>
          <p className="text-[#44403c] text-sm mb-4">alex.johnson@email.com</p>
          <button className="bg-white/90 text-[#312e81] px-6 py-2 rounded-2xl text-sm active:scale-95 transition-transform shadow-sm">
            Edit Profile
          </button>
        </div>

        {/* Subscription Status */}
        <button
          onClick={() => onNavigate(userPlan === 'empathplus' ? 'care-plan' : 'subscription')}
          className="w-full bg-white border border-[#e7e5e4] rounded-3xl p-5 mb-6 flex items-center justify-between shadow-sm active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              isPremium ? 'bg-gradient-to-br from-[#fcd34d] to-[#fbbf24]' : 'bg-[#f5f5f4]'
            }`}>
              <Award size={24} className={isPremium ? 'text-white' : 'text-[#a8a29e]'} />
            </div>
            <div className="text-left">
              <p className="text-[#292524]">{planName}</p>
              <p className="text-[#57534e] text-sm">
                {isPremium ? 'Active subscription' : 'Upgrade for more features'}
              </p>
            </div>
          </div>
          <ChevronRight size={20} className="text-[#78716c]" />
        </button>

        {/* Mental Health Goals */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#292524]">Your goals</h2>
            <button className="text-[#312e81] text-sm">Edit</button>
          </div>
          <div className="space-y-3">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white border border-[#e7e5e4] rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${goal.color} rounded-xl flex items-center justify-center text-white`}>
                    <goal.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#292524] text-sm">{goal.label}</p>
                    <p className="text-[#a8a29e] text-xs">{goal.progress}% complete</p>
                  </div>
                </div>
                <div className="w-full bg-[#f5f5f4] rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${goal.color} h-2 rounded-full transition-all`}
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h2 className="text-[#292524] mb-4">Achievements</h2>
          <div className="grid grid-cols-4 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 flex flex-col items-center gap-2 ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-[#fef3c7] to-[#fde68a]'
                    : 'bg-[#f5f5f4] opacity-50'
                }`}
              >
                <span className="text-2xl">{achievement.emoji}</span>
                <p className="text-xs text-center text-[#57534e]">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-6 shadow-sm mb-6">
          <h3 className="text-[#292524] mb-4">Your stats</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl text-[#312e81] mb-1">142</p>
              <p className="text-xs text-[#a8a29e]">Check-ins</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-[#0284c7] mb-1">38</p>
              <p className="text-xs text-[#a8a29e]">Exercises</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-[#14b8a6] mb-1">21</p>
              <p className="text-xs text-[#a8a29e]">Day streak</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="mb-6">
          <h2 className="text-[#292524] mb-4">Settings</h2>
          <div className="bg-white border border-[#e7e5e4] rounded-3xl overflow-hidden shadow-sm">
            {settingsOptions.map((option, index) => (
              <button
                key={index}
                className={`w-full flex items-center justify-between px-5 py-4 ${
                  index !== settingsOptions.length - 1 ? 'border-b border-[#f5f5f4]' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <option.icon size={20} className="text-[#57534e]" />
                  <span className="text-[#292524]">{option.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {option.value && <span className="text-[#a8a29e] text-sm">{option.value}</span>}
                  <ChevronRight size={20} className="text-[#a8a29e]" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Sign Out */}
        <button className="w-full bg-[#fef2f2] border border-[#fecaca] text-[#991b1b] py-4 rounded-3xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform mb-4">
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>

        {/* Privacy Note */}
        <div className="bg-[#99f6e4]/20 border border-[#5eead4] rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <Shield size={16} className="text-[#0891b2] flex-shrink-0 mt-0.5" />
            <p className="text-[#292524] text-xs leading-relaxed">
              Empath is not meant for collecting personally identifiable information or securing sensitive data. All therapy sessions are HIPAA-compliant.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e7e5e4] pt-3 pb-8">
        <div className="flex justify-around items-center px-6">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <Heart size={20} />
            <span className="text-xs">Home</span>
          </button>
          <button onClick={() => onNavigate('chat')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <MessageCircle size={20} />
            <span className="text-xs">Chat</span>
          </button>
          <button onClick={() => onNavigate('mood')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <Calendar size={20} />
            <span className="text-xs">Journal</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#312e81]">
            <div className="w-10 h-10 bg-[#ddd6fe] rounded-2xl flex items-center justify-center">
              <User size={20} />
            </div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}