import { ArrowLeft, MessageSquare, Phone, Video, Shield } from 'lucide-react';

interface SessionTypeSelectionProps {
  onNavigate: (screen: string, data?: any) => void;
}

const sessionTypes = [
  {
    id: 'text',
    name: 'Text Session',
    icon: MessageSquare,
    duration: '30 minutes',
    price: 700,
    bestFor: 'First-time users',
    gradient: 'from-[#99f6e4] to-[#5eead4]',
    iconBg: 'bg-[#0891b2]'
  },
  {
    id: 'audio',
    name: 'Audio Call',
    icon: Phone,
    duration: '30 minutes',
    price: 1200,
    bestFor: 'Deeper conversation',
    gradient: 'from-[#bae6fd] to-[#7dd3fc]',
    iconBg: 'bg-[#0284c7]'
  },
  {
    id: 'video',
    name: 'Video Call',
    icon: Video,
    duration: '45 minutes',
    price: 1500,
    bestFor: 'Face-to-face support',
    gradient: 'from-[#c4b5fd] to-[#a78bfa]',
    iconBg: 'bg-[#6d28d9]'
  }
];

export default function SessionTypeSelection({ onNavigate }: SessionTypeSelectionProps) {
  const handleSelectSession = (sessionType: any) => {
    onNavigate('psychologists', { sessionType });
  };

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4 mb-3">
          <button onClick={() => onNavigate('home')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-[#292524]">Book a Therapy Session</h1>
            <p className="text-[#a8a29e] text-sm">Choose what works best for you</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Session Type Cards */}
        <div className="space-y-4 mb-6">
          {sessionTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleSelectSession(type)}
              className={`w-full bg-gradient-to-r ${type.gradient} rounded-3xl p-6 text-left shadow-md active:scale-[0.98] transition-transform`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 ${type.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <type.icon size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-white mb-1">{type.name}</h2>
                  <p className="text-white/80 text-sm mb-2">{type.duration}</p>
                  <p className="text-white/70 text-xs italic">{type.bestFor}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div>
                  <p className="text-white/70 text-xs mb-1">Starting from</p>
                  <p className="text-white text-xl">Rs. {type.price}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-xl text-sm">
                  Select
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Reassurance */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-5">
          <div className="flex items-start gap-3">
            <Shield size={20} className="text-[#0891b2] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[#292524] text-sm mb-1">All sessions are private and confidential</p>
              <p className="text-[#57534e] text-xs leading-relaxed">
                Talk to licensed psychologists in a safe, encrypted environment. Your privacy is our priority.
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Option */}
        <div className="mt-6 text-center">
          <p className="text-[#a8a29e] text-sm mb-3">
            Want unlimited sessions?
          </p>
          <button
            onClick={() => onNavigate('subscription')}
            className="text-[#312e81] underline"
          >
            View subscription plans
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-[#292524] rounded-full" />
      </div>
    </div>
  );
}
