import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Phone } from 'lucide-react';

interface AuthScreenProps {
  onComplete: () => void;
}

export default function AuthScreen({ onComplete }: AuthScreenProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

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
      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="mb-10 text-center">
          <div className="text-[56px] mb-4">💙</div>
          <h1 className="text-[#292524] mb-2">
            Welcome to Empath
          </h1>
          <p className="text-[#57534e] leading-relaxed">
            Your safe space for emotional healing
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone/Email Input */}
          <div className="relative">
            {isSignUp ? (
              <>
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716c]" size={20} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-[#e7e5e4] rounded-3xl pl-12 pr-4 py-4 text-[#292524] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#312e81]/30 focus:border-[#312e81]"
                />
              </>
            ) : (
              <>
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716c]" size={20} />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#e7e5e4] rounded-3xl pl-12 pr-4 py-4 text-[#292524] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#312e81]/30 focus:border-[#312e81]"
                  required
                />
              </>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716c]" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-[#e7e5e4] rounded-3xl pl-12 pr-12 py-4 text-[#292524] placeholder:text-[#a8a29e] focus:outline-none focus:ring-2 focus:ring-[#312e81]/30 focus:border-[#312e81]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#78716c]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white py-4 rounded-3xl shadow-lg active:scale-[0.98] transition-transform mt-6"
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        {/* Google Sign In */}
        <div className="mt-4">
          <button className="w-full bg-white border border-[#e7e5e4] text-[#292524] py-4 rounded-3xl flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
              <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
              <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
              <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Toggle Auth Mode */}
        <div className="mt-6 text-center">
          <p className="text-[#57534e]">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#312e81]"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Privacy Note */}
        <p className="mt-8 text-center text-[#a8a29e] text-sm px-4 leading-relaxed">
          Your privacy is our priority. All conversations are encrypted and confidential.
        </p>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[34px] flex items-center justify-center">
        <div className="w-[134px] h-[5px] bg-[#292524] rounded-full" />
      </div>
    </div>
  );
}
