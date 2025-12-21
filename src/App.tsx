import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import OnboardingScreen from "./components/OnboardingScreen";
import AuthScreen from "./components/AuthScreen";
import MentalHealthScreening from "./components/MentalHealthScreening";
import HomeScreen from "./components/HomeScreen";
import ChatScreen from "./components/ChatScreen";
import CommunityScreen from "./components/CommunityScreen";
import SessionTypeSelection from "./components/SessionTypeSelection";
import PsychologistDirectory from "./components/PsychologistDirectory";
import BookingConfirmation from "./components/BookingConfirmation";
import BookingSuccess from "./components/BookingSuccess";
import CarePlanDashboard from "./components/CarePlanDashboard";
import SubscriptionPlans from "./components/SubscriptionPlans";
import MoodTrackerScreen from "./components/MoodTrackerScreen";
import ExercisesScreen from "./components/ExercisesScreen";
import ProfileScreen from "./components/ProfileScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<string>("splash");
  const [showSplash, setShowSplash] = useState(true);
  const [selectedSessionType, setSelectedSessionType] =
    useState<any>(null);
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<any>(null);
  const [selectedDateTime, setSelectedDateTime] =
    useState<any>(null);
  const [userPlan, setUserPlan] = useState<string>("free"); // 'free', 'support', 'comfort', 'empathplus'
  const [sessionsRemaining, setSessionsRemaining] =
    useState<number>(3); // for empathplus users

  useEffect(() => {
    if (currentScreen === "splash") {
      const timer = setTimeout(() => {
        setShowSplash(false);
        setCurrentScreen("onboarding");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const navigateTo = (screen: string, data?: any) => {
    if (data?.sessionType) {
      setSelectedSessionType(data.sessionType);
    }
    if (data?.psychologist) {
      setSelectedPsychologist(data.psychologist);
    }
    if (data?.dateTime) {
      setSelectedDateTime(data.dateTime);
    }
    if (data?.plan) {
      setUserPlan(data.plan);
      if (data.plan === "empathplus") {
        setSessionsRemaining(3);
      }
    }

    // Auto-redirect booking to booking-confirmation
    if (screen === "booking") {
      setCurrentScreen("booking-confirmation");
    } else {
      setCurrentScreen(screen);
    }
  };

  const handleBookingComplete = () => {
    if (userPlan === "empathplus" && sessionsRemaining > 0) {
      setSessionsRemaining(sessionsRemaining - 1);
    }
    // Reset booking state
    setSelectedSessionType(null);
    setSelectedPsychologist(null);
    setSelectedDateTime(null);
    navigateTo("booking-success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#312e81] via-[#4c1d95] to-[#5b21b6] flex items-center justify-center p-4">
      <div className="w-full max-w-[375px] h-[812px] relative bg-[#fafaf9] rounded-[40px] shadow-2xl overflow-hidden">
        {showSplash && currentScreen === "splash" && (
          <SplashScreen />
        )}
        {currentScreen === "onboarding" && (
          <OnboardingScreen
            onComplete={() => navigateTo("auth")}
          />
        )}
        {currentScreen === "auth" && (
          <AuthScreen
            onComplete={() => navigateTo("screening")}
          />
        )}
        {currentScreen === "screening" && (
          <MentalHealthScreening
            onComplete={() => navigateTo("home")}
          />
        )}
        {currentScreen === "home" && (
          <HomeScreen
            onNavigate={navigateTo}
            userPlan={userPlan}
          />
        )}
        {currentScreen === "chat" && (
          <ChatScreen onNavigate={navigateTo} />
        )}
        {currentScreen === "community" && (
          <CommunityScreen onNavigate={navigateTo} />
        )}
        {currentScreen === "session-type" && (
          <SessionTypeSelection onNavigate={navigateTo} />
        )}
        {currentScreen === "psychologists" && (
          <PsychologistDirectory
            sessionType={selectedSessionType}
            onNavigate={navigateTo}
          />
        )}
        {currentScreen === "booking-confirmation" && (
          <BookingConfirmation
            sessionType={selectedSessionType}
            psychologist={selectedPsychologist}
            dateTime={selectedDateTime}
            userPlan={userPlan}
            sessionsRemaining={sessionsRemaining}
            onNavigate={navigateTo}
            onConfirm={handleBookingComplete}
          />
        )}
        {currentScreen === "booking-success" && (
          <BookingSuccess onNavigate={navigateTo} />
        )}
        {currentScreen === "care-plan" && (
          <CarePlanDashboard
            sessionsRemaining={sessionsRemaining}
            onNavigate={navigateTo}
          />
        )}
        {currentScreen === "subscription" && (
          <SubscriptionPlans onNavigate={navigateTo} />
        )}
        {currentScreen === "mood" && (
          <MoodTrackerScreen onNavigate={navigateTo} />
        )}
        {currentScreen === "exercises" && (
          <ExercisesScreen onNavigate={navigateTo} />
        )}
        {currentScreen === "profile" && (
          <ProfileScreen
            onNavigate={navigateTo}
            userPlan={userPlan}
          />
        )}
      </div>
    </div>
  );
}