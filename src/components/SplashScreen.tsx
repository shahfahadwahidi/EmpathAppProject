import SplashScreenOriginal from '../imports/SplashScreen';

export default function SplashScreen() {
  return (
    <div className="relative w-full h-full">
      <SplashScreenOriginal />
      {/* Overlay with tagline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="absolute bottom-32 left-0 right-0 text-center px-8">
          <h2 className="text-white text-2xl tracking-wide" style={{ fontWeight: 500 }}>
            We Listen. You Heal.
          </h2>
        </div>
      </div>
    </div>
  );
}
