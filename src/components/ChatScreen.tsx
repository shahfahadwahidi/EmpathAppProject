import { useState } from 'react';
import { ArrowLeft, Send, Mic, MessageCircle, Calendar, User, Heart, AlertCircle } from 'lucide-react';

interface ChatScreenProps {
  onNavigate: (screen: string) => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there. I'm here to listen and support you. How are you feeling today?",
    sender: 'ai',
    timestamp: new Date(),
  },
];

export default function ChatScreen({ onNavigate }: ChatScreenProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [showCrisisAlert, setShowCrisisAlert] = useState(false);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    
    // Simple crisis detection simulation
    const crisisKeywords = ['hurt myself', 'end it', 'suicide', 'kill myself', 'want to die'];
    const hasCrisisKeyword = crisisKeywords.some(keyword => 
      inputText.toLowerCase().includes(keyword)
    );

    if (hasCrisisKeyword) {
      setShowCrisisAlert(true);
    }

    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: hasCrisisKeyword 
          ? "I hear you, and I want you to know that you're not alone. Your feelings are valid. Would you like to speak with a licensed professional right now? They can provide immediate support."
          : "Thank you for sharing that with me. I'm here to listen. Can you tell me more about what's been on your mind?",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-gradient-to-br from-[#312e81] to-[#4c1d95] rounded-full flex items-center justify-center text-xl">
              💙
            </div>
            <div>
              <h2 className="text-[#292524]">Empath AI</h2>
              <p className="text-[#a8a29e] text-xs">Always here for you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Crisis Alert Banner */}
      {showCrisisAlert && (
        <div className="bg-gradient-to-r from-[#fcd34d] to-[#fbbf24] px-6 py-4">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-[#78350f] flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-[#292524] mb-2 leading-relaxed">
                It sounds like you might be going through a difficult time. Would you like to talk to a professional?
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => onNavigate('psychologists')}
                  className="bg-[#292524] text-white px-4 py-2 rounded-xl text-sm active:scale-95 transition-transform"
                >
                  Talk to Professional
                </button>
                <button
                  onClick={() => setShowCrisisAlert(false)}
                  className="bg-white/50 text-[#292524] px-4 py-2 rounded-xl text-sm active:scale-95 transition-transform"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 pb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-3xl px-5 py-3 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white rounded-br-md'
                  : 'bg-white border border-[#e7e5e4] text-[#292524] rounded-bl-md'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/60' : 'text-[#a8a29e]'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Responses */}
      <div className="px-6 pb-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setInputText("I'm feeling anxious")}
            className="bg-white border border-[#e7e5e4] text-[#57534e] px-4 py-2 rounded-full text-sm whitespace-nowrap active:scale-95 transition-transform"
          >
            I'm feeling anxious
          </button>
          <button
            onClick={() => setInputText("I need someone to talk to")}
            className="bg-white border border-[#e7e5e4] text-[#57534e] px-4 py-2 rounded-full text-sm whitespace-nowrap active:scale-95 transition-transform"
          >
            Need to talk
          </button>
          <button
            onClick={() => setInputText("Having a tough day")}
            className="bg-white border border-[#e7e5e4] text-[#57534e] px-4 py-2 rounded-full text-sm whitespace-nowrap active:scale-95 transition-transform"
          >
            Tough day
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-[#e7e5e4] px-6 py-3 pb-24">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-[#f5f5f4] rounded-3xl flex items-center px-5 py-3 border border-[#e7e5e4]">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none text-[#292524] placeholder:text-[#a8a29e]"
            />
            <button className="text-[#78716c] ml-2">
              <Mic size={20} />
            </button>
          </div>
          <button
            onClick={handleSend}
            className="w-12 h-12 bg-gradient-to-r from-[#312e81] to-[#4c1d95] rounded-full flex items-center justify-center text-white active:scale-95 transition-transform shadow-lg"
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e7e5e4] pt-3 pb-8">
        <div className="flex justify-around items-center px-6">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <Heart size={20} />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#312e81]">
            <div className="w-10 h-10 bg-[#ddd6fe] rounded-2xl flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
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