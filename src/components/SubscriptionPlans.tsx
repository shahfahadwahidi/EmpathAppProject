import { ArrowLeft, Check, Sparkles, Heart, Crown, MessageSquare, Phone, Video } from 'lucide-react';

interface SubscriptionPlansProps {
  onNavigate: (screen: string, data?: any) => void;
}

const plans = [
  {
    id: 'free',
    name: 'Starter',
    price: 0,
    icon: Heart,
    gradient: 'from-[#f5f5f4] to-[#e7e5e4]',
    textColor: 'text-[#292524]',
    iconBg: 'bg-[#a8a29e]',
    features: [
      'Limited AI chat',
      'PHQ-9 & GAD-7 assessment',
      'Crisis guidance'
    ],
    limitations: [
      'No human sessions'
    ]
  },
  {
    id: 'support',
    name: 'Support',
    price: 499,
    icon: Sparkles,
    gradient: 'from-[#bae6fd] to-[#7dd3fc]',
    textColor: 'text-[#0c4a6e]',
    iconBg: 'bg-[#0284c7]',
    features: [
      'Unlimited AI support',
      'Emotional guidance',
      'Priority responses'
    ],
    limitations: [
      'No psychologist sessions'
    ],
    popular: false
  },
  {
    id: 'comfort',
    name: 'Comfort',
    price: 1000,
    icon: Heart,
    gradient: 'from-[#c4b5fd] to-[#a78bfa]',
    textColor: 'text-[#4c1d95]',
    iconBg: 'bg-[#6d28d9]',
    features: [
      'Unlimited AI support',
      '1 text-based psychologist session',
      'Discount on extra sessions',
      'Best for students'
    ],
    popular: true
  },
  {
    id: 'empathplus',
    name: 'Empath Plus',
    price: 2000,
    icon: Crown,
    gradient: 'from-[#fcd34d] to-[#f59e0b]',
    textColor: 'text-[#78350f]',
    iconBg: 'bg-[#d97706]',
    features: [
      'Unlimited AI support',
      '3 sessions per month (text/audio/video)',
      'Priority booking',
      'Discount on extra sessions',
      'Ideal for serious care'
    ],
    popular: false
  }
];

const oneTimeSessions = [
  {
    id: 'text',
    name: 'Text Session',
    icon: MessageSquare,
    duration: '30 minutes',
    price: 700,
    gradient: 'from-[#99f6e4] to-[#5eead4]'
  },
  {
    id: 'audio',
    name: 'Audio Session',
    icon: Phone,
    duration: '30 minutes',
    price: 1200,
    gradient: 'from-[#bae6fd] to-[#7dd3fc]'
  },
  {
    id: 'video',
    name: 'Video Session',
    icon: Video,
    duration: '45 minutes',
    price: 1500,
    gradient: 'from-[#c4b5fd] to-[#a78bfa]'
  }
];

export default function SubscriptionPlans({ onNavigate }: SubscriptionPlansProps) {
  const handleSelectPlan = (planId: string) => {
    onNavigate('home', { plan: planId });
  };

  const handleSelectOneTime = (sessionType: any) => {
    onNavigate('session-type', { sessionType });
  };

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[#292524]">Choose Your Plan</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Header Text */}
        <div className="text-center mb-6">
          <h2 className="text-[#292524] mb-2">Invest in your mental wellness</h2>
          <p className="text-[#57534e] leading-relaxed">
            Choose a plan that supports your healing journey
          </p>
        </div>

        {/* Section 1: Subscription Plans */}
        <div className="mb-8">
          <h3 className="text-[#292524] mb-4">Monthly Subscriptions</h3>
          <div className="space-y-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-br ${plan.gradient} rounded-3xl p-6 shadow-md ${
                  plan.popular ? 'ring-2 ring-[#312e81]' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#312e81] text-white px-4 py-1 rounded-full text-xs">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${plan.iconBg} rounded-2xl flex items-center justify-center`}>
                      <plan.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className={`${plan.textColor} mb-1`}>{plan.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-2xl ${plan.textColor}`}>
                          {plan.price === 0 ? 'Free' : `Rs. ${plan.price}`}
                        </span>
                        {plan.price > 0 && <span className={`text-sm ${plan.textColor} opacity-70`}>/month</span>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check size={16} className={`${plan.textColor} flex-shrink-0 mt-0.5`} />
                      <p className={`text-sm ${plan.textColor} opacity-90`}>{feature}</p>
                    </div>
                  ))}
                  {plan.limitations?.map((limitation, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className={`w-4 h-4 flex-shrink-0 mt-0.5`}>
                        <div className={`w-2 h-2 rounded-full ${plan.textColor} opacity-30 mx-auto mt-1`} />
                      </div>
                      <p className={`text-sm ${plan.textColor} opacity-60 line-through`}>{limitation}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 rounded-2xl transition-all active:scale-[0.98] ${
                    plan.id === 'free'
                      ? 'bg-white/50 text-[#292524] border border-[#292524]/20'
                      : plan.popular
                      ? 'bg-[#312e81] text-white shadow-lg'
                      : 'bg-white/90 backdrop-blur-sm text-[#292524]'
                  }`}
                >
                  {plan.id === 'free' ? 'Current Plan' : 'Upgrade Care'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: One-Time Sessions */}
        <div className="mb-6">
          <div className="text-center mb-4">
            <h3 className="text-[#292524] mb-2">Prefer pay-per-session?</h3>
            <p className="text-[#57534e] text-sm">No subscription required</p>
          </div>
          
          <div className="space-y-3">
            {oneTimeSessions.map((session) => (
              <button
                key={session.id}
                onClick={() => handleSelectOneTime(session)}
                className={`w-full bg-gradient-to-r ${session.gradient} rounded-2xl p-5 text-left shadow-md active:scale-[0.98] transition-transform`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                      <session.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white mb-1">{session.name}</h4>
                      <p className="text-white/70 text-sm">{session.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-xl">Rs. {session.price}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Message */}
        <div className="mt-6 bg-white border border-[#e7e5e4] rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#99f6e4]/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h4 className="text-[#292524] mb-1">Flexible & secure</h4>
              <p className="text-[#57534e] text-sm leading-relaxed">
                Cancel anytime. Your privacy always comes first.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-[#292524] rounded-full" />
      </div>
    </div>
  );
}