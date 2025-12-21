import { useState } from 'react';
import { ArrowLeft, Calendar, MessageCircle, User, Heart, Plus, AlertCircle } from 'lucide-react';

interface CarePlanDashboardProps {
  sessionsRemaining: number;
  onNavigate: (screen: string) => void;
}

const upcomingSessions = [
  {
    id: 1,
    therapist: 'Dr. Sarah Ahmed',
    date: 'Dec 16, 2024',
    time: '10:00 AM',
    type: 'Text Session',
    status: 'Confirmed'
  }
];

export default function CarePlanDashboard({ sessionsRemaining, onNavigate }: CarePlanDashboardProps) {
  const [showOutOfSessionsModal, setShowOutOfSessionsModal] = useState(false);

  const handleBookSession = () => {
    if (sessionsRemaining === 0) {
      setShowOutOfSessionsModal(true);
    } else {
      onNavigate('session-type');
    }
  };

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[#292524]">Your Care Plan</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Plan Summary Card */}
        <div className="bg-gradient-to-br from-[#c4b5fd] to-[#a78bfa] rounded-3xl p-6 mb-6 shadow-md text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="mb-1">Empath Plus</h2>
              <p className="text-white/80 text-sm">Rs. 2,000/month</p>
            </div>
            <div className="text-4xl">💜</div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm">Sessions this month</p>
              <p className="text-xl">{sessionsRemaining} / 3</p>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all"
                style={{ width: `${(sessionsRemaining / 3) * 100}%` }}
              />
            </div>
          </div>

          <p className="text-white/70 text-xs mt-3">
            ℹ️ Unused sessions do not roll over
          </p>
        </div>

        {/* Book Session Button */}
        <button
          onClick={handleBookSession}
          className="w-full bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white py-4 rounded-3xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform mb-6"
        >
          <Plus size={20} />
          <span>Book a Session</span>
        </button>

        {/* Upcoming Sessions */}
        <div className="mb-6">
          <h3 className="text-[#292524] mb-4">Upcoming sessions</h3>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-white border border-[#e7e5e4] rounded-3xl p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-[#292524] mb-1">{session.therapist}</h4>
                      <p className="text-[#57534e] text-sm">{session.type}</p>
                    </div>
                    <div className="bg-[#86efac]/20 text-[#166534] px-3 py-1 rounded-full text-xs">
                      {session.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#57534e] text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{session.date}</span>
                    </div>
                    <span>•</span>
                    <span>{session.time}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#f5f5f4] rounded-2xl p-6 text-center">
              <p className="text-[#a8a29e] text-sm">No upcoming sessions</p>
              <button
                onClick={handleBookSession}
                className="text-[#312e81] text-sm mt-2 underline"
              >
                Book your first session
              </button>
            </div>
          )}
        </div>

        {/* Plan Benefits */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-6 shadow-sm">
          <h3 className="text-[#292524] mb-4">Your benefits</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#ddd6fe] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-[#57534e] text-sm">Unlimited AI emotional support</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#ddd6fe] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-[#57534e] text-sm">3 therapist sessions per month</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#ddd6fe] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-[#57534e] text-sm">Priority booking access</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#ddd6fe] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs">✓</span>
              </div>
              <p className="text-[#57534e] text-sm">Discount on additional sessions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Out of Sessions Modal */}
      {showOutOfSessionsModal && (
        <div className="absolute inset-0 bg-[#292524]/60 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-[320px] w-full shadow-2xl">
            <div className="w-16 h-16 bg-[#fef3c7] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertCircle size={32} className="text-[#d97706]" />
            </div>

            <h2 className="text-[#292524] text-center mb-3">
              You've used all your sessions
            </h2>
            
            <p className="text-[#57534e] text-center text-sm leading-relaxed mb-6">
              You've used all your sessions for this month. Your plan renews on Jan 1st.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowOutOfSessionsModal(false);
                  onNavigate('session-type');
                }}
                className="w-full bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white py-3 rounded-2xl active:scale-[0.98] transition-transform"
              >
                Book Extra Session
              </button>
              <button
                onClick={() => setShowOutOfSessionsModal(false)}
                className="w-full bg-[#f5f5f4] text-[#57534e] py-3 rounded-2xl active:scale-[0.98] transition-transform"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

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
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <User size={20} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
