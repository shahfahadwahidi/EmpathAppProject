import { ArrowLeft, Calendar as CalendarIcon, MessageCircle, User, Heart } from 'lucide-react';

interface MoodTrackerScreenProps {
  onNavigate: (screen: string) => void;
}

const weeklyMoods = [
  { day: 'Mon', mood: '😊', score: 4, color: 'bg-[#86efac]' },
  { day: 'Tue', mood: '😌', score: 3, color: 'bg-[#7dd3fc]' },
  { day: 'Wed', mood: '😐', score: 2, color: 'bg-[#fde68a]' },
  { day: 'Thu', mood: '😊', score: 4, color: 'bg-[#86efac]' },
  { day: 'Fri', mood: '😌', score: 3, color: 'bg-[#7dd3fc]' },
  { day: 'Sat', mood: '😊', score: 5, color: 'bg-[#86efac]' },
  { day: 'Sun', mood: '😌', score: 3, color: 'bg-[#7dd3fc]' },
];

const moodInsights = [
  { label: 'Average mood this week', value: '3.4 / 5', color: 'from-[#312e81] to-[#4c1d95]' },
  { label: 'Best day', value: 'Saturday', color: 'from-[#14b8a6] to-[#5eead4]' },
  { label: 'Mood entries', value: '23 this month', color: 'from-[#0284c7] to-[#7dd3fc]' },
];

export default function MoodTrackerScreen({ onNavigate }: MoodTrackerScreenProps) {
  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[#292524]">Mood Journal</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Weekly Chart */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#292524]">This week</h2>
            <button className="text-[#312e81] text-sm">View all</button>
          </div>

          {/* Mood Bars */}
          <div className="flex items-end justify-between gap-2 h-40 mb-4">
            {weeklyMoods.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="text-xl">{item.mood}</div>
                <div className="relative w-full h-full flex items-end">
                  <div
                    className={`w-full rounded-t-2xl ${item.color} transition-all`}
                    style={{ height: `${(item.score / 5) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-[#a8a29e]">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="mb-6">
          <h2 className="text-[#292524] mb-4">Insights</h2>
          <div className="space-y-3">
            {moodInsights.map((insight, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${insight.color} rounded-2xl p-5 text-white shadow-sm`}
              >
                <p className="text-sm opacity-90 mb-1">{insight.label}</p>
                <p className="text-xl">{insight.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mood Patterns */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-6 shadow-sm">
          <h3 className="text-[#292524] mb-4">Patterns we noticed</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#fef3c7] rounded-xl flex items-center justify-center flex-shrink-0">
                ☀️
              </div>
              <div>
                <p className="text-[#292524] text-sm">Morning mood</p>
                <p className="text-[#57534e] text-xs leading-relaxed">You tend to feel better in the mornings</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#d1f4e0] rounded-xl flex items-center justify-center flex-shrink-0">
                🎯
              </div>
              <div>
                <p className="text-[#292524] text-sm">Exercise impact</p>
                <p className="text-[#57534e] text-xs leading-relaxed">Higher mood on days you exercise</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-[#ddd6fe] rounded-xl flex items-center justify-center flex-shrink-0">
                💭
              </div>
              <div>
                <p className="text-[#292524] text-sm">Journaling helps</p>
                <p className="text-[#57534e] text-xs leading-relaxed">Consistent improvement after journaling</p>
              </div>
            </div>
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
          <button className="flex flex-col items-center gap-1 text-[#312e81]">
            <div className="w-10 h-10 bg-[#ddd6fe] rounded-2xl flex items-center justify-center">
              <CalendarIcon size={20} />
            </div>
            <span className="text-xs">Journal</span>
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