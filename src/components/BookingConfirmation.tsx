import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, CreditCard } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BookingConfirmationProps {
  sessionType: any;
  psychologist: any;
  dateTime: any;
  userPlan: string;
  sessionsRemaining: number;
  onNavigate: (screen: string) => void;
  onConfirm: () => void;
}

const dates = [
  { day: 'Mon', date: '15', available: true },
  { day: 'Tue', date: '16', available: true },
  { day: 'Wed', date: '17', available: false },
  { day: 'Thu', date: '18', available: true },
  { day: 'Fri', date: '19', available: true },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
];

export default function BookingConfirmation({ 
  sessionType, 
  psychologist, 
  userPlan,
  sessionsRemaining,
  onNavigate, 
  onConfirm 
}: BookingConfirmationProps) {
  const [selectedDate, setSelectedDate] = useState('16');
  const [selectedTime, setSelectedTime] = useState('');

  if (!psychologist || !sessionType) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-[#57534e]">Loading...</p>
      </div>
    );
  }

  const isSubscriber = userPlan === 'empathplus' && sessionsRemaining > 0;
  const finalPrice = sessionType.price;

  return (
    <div className="relative w-full h-full bg-[#fafaf9] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#e7e5e4] pt-11 pb-4 px-6">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('psychologists')} className="text-[#57534e]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-[#292524]">Confirm Booking</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
        {/* Psychologist Info */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-5 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <ImageWithFallback
              src={psychologist.image}
              alt={psychologist.name}
              className="w-16 h-16 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <h2 className="text-[#292524] mb-1">{psychologist.name}</h2>
              <p className="text-[#57534e] text-sm">{psychologist.specialization}</p>
            </div>
          </div>
          <div className="bg-[#f5f5f4] rounded-2xl p-3">
            <p className="text-[#57534e] text-sm">{sessionType.name} • {sessionType.duration}</p>
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-6">
          <h3 className="text-[#292524] mb-3">Select date</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {dates.map((date) => (
              <button
                key={date.date}
                onClick={() => date.available && setSelectedDate(date.date)}
                disabled={!date.available}
                className={`flex-shrink-0 w-20 rounded-2xl p-3 text-center transition-all ${
                  selectedDate === date.date
                    ? 'bg-[#312e81] text-white'
                    : date.available
                    ? 'bg-white border border-[#e7e5e4] text-[#292524]'
                    : 'bg-[#f5f5f4] text-[#d6d3d1] cursor-not-allowed'
                }`}
              >
                <p className="text-xs mb-1">{date.day}</p>
                <p className="text-xl">{date.date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-6">
          <h3 className="text-[#292524] mb-3">Select time</h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 px-2 rounded-xl text-sm transition-all ${
                  selectedTime === time
                    ? 'bg-[#312e81] text-white'
                    : 'bg-white border border-[#e7e5e4] text-[#292524]'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-white border border-[#e7e5e4] rounded-3xl p-5">
          <h3 className="text-[#292524] mb-4">Payment summary</h3>
          
          {isSubscriber ? (
            <>
              <div className="bg-[#ddd6fe]/30 border border-[#c4b5fd] rounded-2xl p-4 mb-4">
                <p className="text-[#4c1d95] text-sm mb-1">💜 Using your Empath Plus plan</p>
                <p className="text-[#57534e] text-xs">This session will use 1 of your {sessionsRemaining} remaining sessions</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#292524]">Total</span>
                <span className="text-[#292524] text-xl">Included in plan</span>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-[#57534e]">Session fee</span>
                  <span className="text-[#292524]">Rs. {finalPrice}</span>
                </div>
                <div className="border-t border-[#f5f5f4] pt-3 flex justify-between">
                  <span className="text-[#292524]">Total</span>
                  <span className="text-[#292524] text-xl">Rs. {finalPrice}</span>
                </div>
              </div>
              <div className="bg-[#fef3c7] border border-[#fcd34d] rounded-2xl p-3">
                <p className="text-[#78350f] text-xs">
                  💡 Save money with Empath Plus — Get 3 sessions for Rs. 2,000/month
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#e7e5e4] p-6 pb-10">
        <button
          onClick={onConfirm}
          disabled={!selectedTime}
          className={`w-full py-4 rounded-3xl flex items-center justify-center gap-2 transition-all ${
            selectedTime
              ? 'bg-gradient-to-r from-[#312e81] to-[#4c1d95] text-white shadow-lg active:scale-[0.98]'
              : 'bg-[#f5f5f4] text-[#a8a29e] cursor-not-allowed'
          }`}
        >
          {isSubscriber ? <Calendar size={20} /> : <CreditCard size={20} />}
          <span>{isSubscriber ? 'Confirm Booking' : 'Confirm & Pay'}</span>
        </button>
      </div>
    </div>
  );
}
