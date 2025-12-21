import { Check, Calendar, MessageSquare } from 'lucide-react';

interface BookingSuccessProps {
  onNavigate: (screen: string) => void;
}

export default function BookingSuccess({ onNavigate }: BookingSuccessProps) {
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

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-20">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-[#86efac] to-[#22c55e] rounded-full flex items-center justify-center mb-6 shadow-lg">
          <Check size={48} className="text-white" strokeWidth={3} />
        </div>

        <h1 className="text-[#292524] text-center mb-3">
          Your session is confirmed
        </h1>
        
        <p className="text-[#57534e] text-center leading-relaxed mb-8 max-w-[280px]">
          You're not alone. We'll send you a reminder before your session starts.
        </p>

        {/* Session Details Card */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-6 w-full max-w-[300px] mb-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#ddd6fe] rounded-2xl flex items-center justify-center">
              <Calendar size={24} className="text-[#312e81]" />
            </div>
            <div>
              <p className="text-[#292524]">Tuesday, Dec 16</p>
              <p className="text-[#57534e] text-sm">10:00 AM</p>
            </div>
          </div>
          <div className="border-t border-[#f5f5f4] pt-4">
            <p className="text-[#292524] text-sm mb-1">Dr. Sarah Ahmed</p>
            <p className="text-[#57534e] text-xs">Text Session • 30 minutes</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-[300px] space-y-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white py-4 rounded-3xl shadow-lg active:scale-[0.98] transition-transform"
          >
            Back to Home
          </button>
          <button
            onClick={() => onNavigate('chat')}
            className="w-full bg-white border border-[#e7e5e4] text-[#292524] py-4 rounded-3xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
          >
            <MessageSquare size={20} />
            <span>Talk to AI Now</span>
          </button>
        </div>

        {/* Reassurance Message */}
        <p className="mt-8 text-center text-[#a8a29e] text-sm px-4 leading-relaxed max-w-[280px]">
          While you wait, feel free to talk to our AI companion anytime you need support.
        </p>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-[#292524] rounded-full" />
      </div>
    </div>
  );
}
