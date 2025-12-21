import svgPaths from "./svg-kjlg9czczv";
import imgImage1 from "figma:asset/d83f48332a4afd6d435eba7725aade3252bd0fee.png";

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-[calc(50%-0.5px)] translate-x-[-50%] w-[375px]" data-name="Home Indicator">
      <div className="absolute bg-[#4f3422] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function IPhoneXOrNewer() {
  return (
    <div className="absolute h-[44px] left-[calc(50%-0.5px)] top-0 translate-x-[-50%] w-[375px]" data-name="iPhone X or newer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 44">
        <g id="iPhone X or newer">
          <rect fill="var(--fill-0, #4F3422)" height="10" id="Rectangle" rx="1.5" width="3" x="308" y="18" />
          <rect fill="var(--fill-0, #4F3422)" height="8" id="Rectangle_2" rx="1.5" width="3" x="303" y="20" />
          <rect fill="var(--fill-0, #4F3422)" height="6" id="Rectangle_3" rx="1.5" width="3" x="298" y="22" />
          <rect fill="var(--fill-0, #4F3422)" height="4" id="Rectangle_4" rx="1.5" width="3" x="293" y="24" />
          <g id="Battery">
            <path d={svgPaths.p3a0af180} id="Vector" opacity="0.35" stroke="var(--stroke-0, #4F3422)" />
            <path d={svgPaths.p24fa9380} fill="var(--fill-0, #4F3422)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p34928580} fill="var(--fill-0, #4F3422)" id="Vector_2" />
          </g>
          <g id="Wifi"></g>
          <g id="Mobile Signal"></g>
          <g id="Vector_3">
            <path d={svgPaths.p2820a180} fill="#4F3422" />
            <path d={svgPaths.pf88a900} fill="#4F3422" />
            <path d={svgPaths.p2dd31a00} fill="#4F3422" />
            <path d={svgPaths.p1d880500} fill="#4F3422" />
          </g>
          <path d={svgPaths.p28aaf640} id="Vector_4" stroke="var(--stroke-0, #4F3422)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function SplashScreen() {
  return (
    <div className="bg-[#fa8397] overflow-clip relative rounded-[40px] size-full" data-name="Splash Screen">
      <div className="absolute h-[282px] left-[69px] top-[226px] w-[239px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <HomeIndicator />
      <IPhoneXOrNewer />
    </div>
  );
}