import { ArrowLeft, Clock, Play, Book, Wind, Heart, MessageCircle, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExercisesScreenProps {
  onNavigate: (screen: string) => void;
}

const exercises = [
  {
    title: 'Breathing Exercise',
    description: 'Calm your mind with guided breathing',
    duration: '5 min',
    category: 'Breathwork',
    image: 'https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY2FsbSUyMGJyZWF0aGluZ3xlbnwxfHx8fDE3NjU2ODQzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Wind,
    gradient: 'from-[#7dd3fc] to-[#bae6fd]',
  },
  {
    title: 'Guided Meditation',
    description: 'Find peace in the present moment',
    duration: '10 min',
    category: 'Meditation',
    image: 'https://images.unsplash.com/photo-1593810451056-0acc1fad48c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsbmVzcyUyMHJlbGF4YXRpb24lMjB5b2dhfGVufDF8fHx8MTc2NTY4NDMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Heart,
    gradient: 'from-[#c4b5fd] to-[#ddd6fe]',
  },
  {
    title: 'Journaling Prompt',
    description: 'Express your thoughts and feelings',
    duration: '15 min',
    category: 'Journaling',
    image: 'https://images.unsplash.com/photo-1601128688653-7dc405e3ac4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwd3JpdGluZyUyMHRoZXJhcHl8ZW58MXx8fHwxNzY1Njg0MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Book,
    gradient: 'from-[#fde68a] to-[#fef3c7]',
  },
];

const categories = [
  { name: 'All', active: true },
  { name: 'Breathing' },
  { name: 'Meditation' },
  { name: 'Journaling' },
  { name: 'Sleep' },
];

export default function ExercisesScreen({ onNavigate }: ExercisesScreenProps) {
  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => onNavigate('home')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[#292524]">Wellness Exercises</h1>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                category.active
                  ? 'bg-[#312e81] text-white'
                  : 'bg-[#f5f5f4] text-[#57534e]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        {/* Featured Exercise */}
        <div className="bg-gradient-to-br from-[#ddd6fe] to-[#c4b5fd] rounded-3xl p-6 mb-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <p className="text-[#312e81] text-sm mb-2">Featured Today</p>
              <h2 className="text-[#292524] mb-2">Morning Mindfulness</h2>
              <p className="text-[#44403c] text-sm mb-4 leading-relaxed">Start your day with intention and calm</p>
              <div className="flex items-center gap-2 text-[#44403c] text-sm">
                <Clock size={16} />
                <span>8 min</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-white/90 text-[#312e81] py-3 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-sm">
            <Play size={20} />
            <span>Start Exercise</span>
          </button>
        </div>

        {/* Exercise List */}
        <div className="space-y-4">
          <h3 className="text-[#292524]">Recommended for you</h3>
          
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden border border-[#e7e5e4] shadow-sm">
              <div className="relative h-40 overflow-hidden">
                <ImageWithFallback
                  src={exercise.image}
                  alt={exercise.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${exercise.gradient} opacity-30`} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-[#57534e] text-sm">
                  <Clock size={14} />
                  <span>{exercise.duration}</span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${exercise.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <exercise.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#292524] mb-1">{exercise.title}</h3>
                    <p className="text-[#57534e] text-sm mb-3 leading-relaxed">{exercise.description}</p>
                    <button className="bg-[#f5f5f4] text-[#57534e] px-4 py-2 rounded-xl text-sm active:scale-95 transition-transform">
                      {exercise.category}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] rounded-2xl p-5 text-center">
            <div className="text-3xl mb-2">📝</div>
            <p className="text-[#78350f] text-sm">Daily Journal</p>
          </div>
          <div className="bg-gradient-to-br from-[#dbeafe] to-[#bae6fd] rounded-2xl p-5 text-center">
            <div className="text-3xl mb-2">🌙</div>
            <p className="text-[#0c4a6e] text-sm">Sleep Sounds</p>
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
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <User size={20} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}