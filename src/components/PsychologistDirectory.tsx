import { ArrowLeft, Star, Video, Phone, MessageSquare, MessageCircle, Filter, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PsychologistDirectoryProps {
  sessionType?: any;
  onNavigate: (screen: string, data?: any) => void;
}

const psychologists = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialization: "Anxiety & Depression",
    rating: 4.9,
    reviews: 234,
    price: 2500,
    availability: "Available today",
    image: "https://images.unsplash.com/photo-1710452772856-57452a2a60a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNvdW5zZWxvciUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTY4NTY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    sessionTypes: ["video", "audio", "text"],
    verified: true
  },
  {
    id: 2,
    name: "Dr. Hassan Khan",
    specialization: "Stress & Burnout",
    rating: 4.8,
    reviews: 189,
    price: 2200,
    availability: "Next available: Tomorrow",
    image: "https://images.unsplash.com/photo-1748288166888-f1bd5d6ef9ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHN5Y2hvbG9naXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1Njg1Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    sessionTypes: ["video", "audio"],
    verified: true
  },
  {
    id: 3,
    name: "Dr. Amina Malik",
    specialization: "Relationship & Family",
    rating: 5.0,
    reviews: 156,
    price: 3000,
    availability: "Available today",
    image: "https://images.unsplash.com/photo-1733685318562-c726472bc1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHRoZXJhcGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjU2MjMzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    sessionTypes: ["video", "audio", "text"],
    verified: true
  }
];

const filters = ["All", "Anxiety", "Depression", "Stress", "Relationships"];

export default function PsychologistDirectory({ sessionType, onNavigate }: PsychologistDirectoryProps) {
  const handleSelectPsychologist = (psychologist: any) => {
    onNavigate('booking', { psychologist });
  };

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => onNavigate(sessionType ? 'session-type' : 'home')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-[#292524]">Choose Psychologist</h1>
            {sessionType && (
              <p className="text-[#a8a29e] text-sm">{sessionType.name} • Rs. {sessionType.price}</p>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716c]" size={20} />
          <input
            type="text"
            placeholder="Search by name or specialization"
            className="w-full bg-[#f5f5f4] border border-[#e7e5e4] rounded-2xl pl-12 pr-4 py-3 text-[#292524] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#312e81]/30"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                index === 0
                  ? 'bg-[#312e81] text-white'
                  : 'bg-[#f5f5f4] text-[#57534e]'
              }`}
            >
              {filter}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full text-sm whitespace-nowrap bg-[#f5f5f4] text-[#57534e] flex items-center gap-2">
            <Filter size={16} />
            More
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Info Banner */}
        <div className="bg-[#bae6fd]/20 border border-[#7dd3fc] rounded-2xl p-4 mb-6">
          <p className="text-[#292524] text-sm leading-relaxed">
            All psychologists are licensed and verified. Sessions are confidential and HIPAA-compliant.
          </p>
        </div>

        {/* Psychologist Cards */}
        <div className="space-y-4">
          {psychologists.map((psychologist) => (
            <div key={psychologist.id} className="bg-white border border-[#e7e5e4] rounded-3xl p-5 shadow-sm">
              <div className="flex gap-4 mb-4">
                <div className="relative">
                  <ImageWithFallback
                    src={psychologist.image}
                    alt={psychologist.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  {psychologist.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#14b8a6] rounded-full flex items-center justify-center border-2 border-white">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-[#292524] mb-1">{psychologist.name}</h3>
                  <p className="text-[#57534e] text-sm mb-2">{psychologist.specialization}</p>
                  
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-[#fbbf24] fill-[#fbbf24]" />
                      <span className="text-[#292524] text-sm">{psychologist.rating}</span>
                      <span className="text-[#a8a29e] text-xs">({psychologist.reviews})</span>
                    </div>
                    <span className="text-[#a8a29e] text-xs">•</span>
                    <span className="text-[#14b8a6] text-xs">{psychologist.availability}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {psychologist.sessionTypes.includes("video") && (
                      <div className="w-7 h-7 bg-[#ddd6fe] rounded-lg flex items-center justify-center">
                        <Video size={14} className="text-[#312e81]" />
                      </div>
                    )}
                    {psychologist.sessionTypes.includes("audio") && (
                      <div className="w-7 h-7 bg-[#bae6fd] rounded-lg flex items-center justify-center">
                        <Phone size={14} className="text-[#0284c7]" />
                      </div>
                    )}
                    {psychologist.sessionTypes.includes("text") && (
                      <div className="w-7 h-7 bg-[#99f6e4] rounded-lg flex items-center justify-center">
                        <MessageSquare size={14} className="text-[#0891b2]" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#f5f5f4]">
                <div>
                  <p className="text-[#a8a29e] text-xs">Starting from</p>
                  <p className="text-[#292524]">PKR {psychologist.price.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => handleSelectPsychologist(psychologist)}
                  className="bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white px-6 py-3 rounded-2xl active:scale-[0.98] transition-transform"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e7e5e4] pt-3 pb-8">
        <div className="flex justify-around items-center px-6">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="text-xs">Home</span>
          </button>
          <button onClick={() => onNavigate('chat')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <MessageCircle size={20} />
            <span className="text-xs">Chat</span>
          </button>
          <button onClick={() => onNavigate('mood')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-xs">Journal</span>
          </button>
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}