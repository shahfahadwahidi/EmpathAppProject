import { useState } from 'react';
import { Search, Info, Heart, MessageCircle, Bookmark, Flag, Plus, Calendar, User, Shield, Sparkles, ArrowLeft } from 'lucide-react';
import CreatePostModal from './CreatePostModal';

interface CommunityScreenProps {
  onNavigate: (screen: string) => void;
}

const emotionCategories = [
  { id: 'all', name: 'All', color: 'bg-[#f5f5f4]', textColor: 'text-[#292524]' },
  { id: 'anxiety', name: 'Anxiety', color: 'bg-[#bae6fd]/30', textColor: 'text-[#0c4a6e]' },
  { id: 'depression', name: 'Depression', color: 'bg-[#c4b5fd]/30', textColor: 'text-[#4c1d95]' },
  { id: 'burnout', name: 'Burnout', color: 'bg-[#fcd34d]/30', textColor: 'text-[#78350f]' },
  { id: 'healing', name: 'Healing Stories', color: 'bg-[#86efac]/30', textColor: 'text-[#166534]' },
  { id: 'exams', name: 'Exams & Stress', color: 'bg-[#fca5a5]/30', textColor: 'text-[#7f1d1d]' },
  { id: 'relationships', name: 'Relationships', color: 'bg-[#f9a8d4]/30', textColor: 'text-[#831843]' },
];

interface Post {
  id: number;
  username: string;
  avatar: string;
  timestamp: string;
  text: string;
  emotionTag: string;
  emotionColor: string;
  emotionTextColor: string;
  supports: number;
  replies: number;
  isProfessional?: boolean;
  isVerified?: boolean;
  isPinned?: boolean;
}

const samplePosts: Post[] = [
  {
    id: 1,
    username: 'Dr. Sarah Ahmed',
    avatar: '👩‍⚕️',
    timestamp: '2 hours ago',
    text: 'Remember: Healing is not linear. Some days will feel harder than others, and that is completely normal. Progress includes the difficult days too. You are doing better than you think.',
    emotionTag: 'Professional Note',
    emotionColor: 'bg-[#ddd6fe]',
    emotionTextColor: 'text-[#4c1d95]',
    supports: 234,
    replies: 12,
    isProfessional: true,
    isPinned: true,
  },
  {
    id: 2,
    username: 'Anonymous Soul',
    avatar: '🌸',
    timestamp: '3 hours ago',
    text: 'Today was really hard. Could not get out of bed until noon. But I made myself tea and took a shower. Small wins.',
    emotionTag: 'Depression',
    emotionColor: 'bg-[#c4b5fd]/30',
    emotionTextColor: 'text-[#4c1d95]',
    supports: 89,
    replies: 24,
    isVerified: true,
  },
  {
    id: 3,
    username: 'Hopeful Heart',
    avatar: '🌻',
    timestamp: '5 hours ago',
    text: 'Been anxiety-free for 3 days now. I know it might come back, but I am celebrating this moment. To anyone struggling: it does get lighter.',
    emotionTag: 'Healing Stories',
    emotionColor: 'bg-[#86efac]/30',
    emotionTextColor: 'text-[#166534]',
    supports: 156,
    replies: 31,
    isVerified: true,
  },
  {
    id: 4,
    username: 'Quiet Mind',
    avatar: '🌙',
    timestamp: '8 hours ago',
    text: 'Exam in 2 days and I cannot focus. My heart races every time I open the book. Does anyone else feel physically sick from exam stress?',
    emotionTag: 'Exams & Stress',
    emotionColor: 'bg-[#fca5a5]/30',
    emotionTextColor: 'text-[#7f1d1d]',
    supports: 67,
    replies: 18,
  },
];

export default function CommunityScreen({ onNavigate }: CommunityScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [supportedPosts, setSupportedPosts] = useState<Set<number>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set());
  const [showGuidelines, setShowGuidelines] = useState(false);

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.emotionTag.toLowerCase() === selectedCategory);

  const handleSupport = (postId: number) => {
    setSupportedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleSave = (postId: number) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleNewPost = (postData: any) => {
    const newPost: Post = {
      id: posts.length + 1,
      username: 'Anonymous Soul',
      avatar: ['🌸', '🌻', '🌙', '💫', '🌺', '🦋'][Math.floor(Math.random() * 6)],
      timestamp: 'Just now',
      text: postData.text,
      emotionTag: postData.emotion,
      emotionColor: emotionCategories.find(e => e.name === postData.emotion)?.color || 'bg-[#f5f5f4]',
      emotionTextColor: emotionCategories.find(e => e.name === postData.emotion)?.textColor || 'text-[#292524]',
      supports: 0,
      replies: 0,
    };
    setPosts([newPost, ...posts]);
    setShowCreateModal(false);
  };

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1">
            <h1 className="text-[#292524] mb-1">Community</h1>
            <p className="text-[#a8a29e] text-sm">A safe space to share and feel heard</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-[#f5f5f4] flex items-center justify-center text-[#57534e]">
              <Search size={20} />
            </button>
            <button 
              onClick={() => setShowGuidelines(true)}
              className="w-10 h-10 rounded-full bg-[#f5f5f4] flex items-center justify-center text-[#57534e]"
            >
              <Info size={20} />
            </button>
          </div>
        </div>

        {/* Moderation Banner */}
        <div className="bg-[#e0f2fe] border border-[#bae6fd] rounded-2xl p-3 flex items-start gap-2">
          <Shield size={16} className="text-[#0284c7] flex-shrink-0 mt-0.5" />
          <p className="text-[#0c4a6e] text-xs leading-relaxed">
            Our team actively moderates this space to keep it safe.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-[#e7e5e4] px-6 py-4">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {emotionCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category.id
                  ? `${category.color} ${category.textColor} ring-2 ring-offset-2 ring-${category.color.split('-')[1]}`
                  : 'bg-[#f5f5f4] text-[#78716c]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32 space-y-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-white rounded-3xl p-5 shadow-sm ${
                post.isProfessional 
                  ? 'border-2 border-[#ddd6fe] bg-gradient-to-br from-white to-[#faf5ff]' 
                  : 'border border-[#e7e5e4]'
              }`}
            >
              {/* Pinned Badge */}
              {post.isPinned && (
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#f5f5f4]">
                  <Sparkles size={14} className="text-[#6d28d9]" />
                  <span className="text-[#6d28d9] text-xs">Pinned by moderators</span>
                </div>
              )}

              {/* Post Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e0e7ff] to-[#ddd6fe] rounded-2xl flex items-center justify-center text-2xl">
                    {post.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[#292524]">{post.username}</p>
                      {post.isVerified && (
                        <div className="bg-[#86efac]/30 text-[#166534] px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                          <Shield size={10} />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                    <p className="text-[#a8a29e] text-xs">{post.timestamp}</p>
                  </div>
                </div>
                <button className="text-[#a8a29e] w-8 h-8 flex items-center justify-center">
                  <Flag size={16} />
                </button>
              </div>

              {/* Post Content */}
              <p className="text-[#292524] text-sm leading-relaxed mb-3">
                {post.text}
              </p>

              {/* Emotion Tag */}
              <div className="mb-4">
                <span className={`${post.emotionColor} ${post.emotionTextColor} px-3 py-1 rounded-full text-xs`}>
                  {post.emotionTag}
                </span>
              </div>

              {/* Interaction Buttons */}
              <div className="flex items-center gap-4 pt-3 border-t border-[#f5f5f4]">
                <button
                  onClick={() => handleSupport(post.id)}
                  className={`flex items-center gap-2 ${
                    supportedPosts.has(post.id) ? 'text-[#f43f5e]' : 'text-[#78716c]'
                  }`}
                >
                  <Heart
                    size={18}
                    fill={supportedPosts.has(post.id) ? 'currentColor' : 'none'}
                  />
                  <span className="text-sm">
                    {post.supports + (supportedPosts.has(post.id) ? 1 : 0)}
                  </span>
                </button>
                <button className="flex items-center gap-2 text-[#78716c]">
                  <MessageCircle size={18} />
                  <span className="text-sm">{post.replies}</span>
                </button>
                <button
                  onClick={() => handleSave(post.id)}
                  className={`ml-auto ${
                    savedPosts.has(post.id) ? 'text-[#6d28d9]' : 'text-[#78716c]'
                  }`}
                >
                  <Bookmark
                    size={18}
                    fill={savedPosts.has(post.id) ? 'currentColor' : 'none'}
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-[#e0e7ff] to-[#ddd6fe] rounded-full flex items-center justify-center mb-6 text-5xl">
              💭
            </div>
            <h3 className="text-[#292524] mb-2">No posts yet</h3>
            <p className="text-[#78716c] text-center text-sm max-w-[250px] leading-relaxed">
              You can be the first — we're here to listen.
            </p>
          </div>
        )}

        {/* Professional Help CTA */}
        <div className="mt-6 bg-gradient-to-br from-[#5eead4]/20 to-[#2dd4bf]/20 border border-[#5eead4] rounded-3xl p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-[#5eead4] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Heart size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-[#292524] mb-1">Need one-on-one support?</h4>
              <p className="text-[#57534e] text-sm leading-relaxed">
                Talk to a licensed psychologist for personalized care.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('session-type')}
            className="w-full bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white py-3 rounded-2xl active:scale-[0.98] transition-transform"
          >
            Talk to Professional
          </button>
        </div>
      </div>

      {/* Floating Create Button */}
      <button
        onClick={() => setShowCreateModal(true)}
        className="fixed bottom-28 right-6 bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform z-10"
      >
        <Plus size={24} />
      </button>

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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="text-xs">Community</span>
          </button>
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1 text-[#78716c]">
            <User size={20} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <CreatePostModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleNewPost}
        />
      )}

      {/* Guidelines Modal */}
      {showGuidelines && (
        <div className="absolute inset-0 bg-[#292524]/60 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-3xl p-6 max-w-[340px] w-full shadow-2xl max-h-[600px] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#292524]">Community Guidelines</h2>
              <button onClick={() => setShowGuidelines(false)} className="text-[#78716c]">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-[#292524] mb-2 text-sm">✨ Be Kind & Supportive</h3>
                <p className="text-[#57534e] text-sm leading-relaxed">
                  This is a safe space. Treat others with empathy and respect.
                </p>
              </div>
              <div>
                <h3 className="text-[#292524] mb-2 text-sm">🔒 Stay Anonymous</h3>
                <p className="text-[#57534e] text-sm leading-relaxed">
                  Don't share personal details like your real name, location, or contact info.
                </p>
              </div>
              <div>
                <h3 className="text-[#292524] mb-2 text-sm">🚫 No Harmful Content</h3>
                <p className="text-[#57534e] text-sm leading-relaxed">
                  Avoid sharing graphic content, self-harm methods, or anything that could trigger others.
                </p>
              </div>
              <div>
                <h3 className="text-[#292524] mb-2 text-sm">💜 This is Not Therapy</h3>
                <p className="text-[#57534e] text-sm leading-relaxed">
                  This space offers peer support, not professional treatment. If you're in crisis, please reach out to a professional.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowGuidelines(false)}
              className="w-full mt-6 bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white py-3 rounded-2xl active:scale-[0.98] transition-transform"
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}