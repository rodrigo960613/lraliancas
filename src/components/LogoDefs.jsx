/* Define o logotipo "LR" uma única vez; o resto do site usa <use href="#lrLogo" /> */
export default function LogoDefs() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
    <defs>
    <linearGradient id="lrGold" gradientUnits="userSpaceOnUse" x1="40" y1="30" x2="720" y2="730">
    <stop offset="0" stopColor="#b98f33"/><stop offset=".25" stopColor="#d6b25c"/><stop offset=".48" stopColor="#c49a3f"/><stop offset=".72" stopColor="#e6cd86"/><stop offset=".88" stopColor="#f2e1a6"/><stop offset="1" stopColor="#d1ab52"/>
    </linearGradient>
    <clipPath id="lrOuter"><circle cx="377.4" cy="368.9" r="373.8"/></clipPath>
    <clipPath id="lrRightArc"><path d="M-825.2 -961.9 L1825.2 2033.9 L3323.2 708.7 L672.7 -2287.2 Z"/></clipPath>
    <clipPath id="lrLeftArc"><path clipRule="evenodd" d="M-200 -200 H1200 V1200 H-200 Z M415.2 450.8 L1091.1 1214.7 L2589.0 -110.5 L1913.2 -874.5 Z"/></clipPath>
    <clipPath id="lrTopCutR"><path d="M235 -40 H900 V368.9 H900 V900 H-100 V368.9 H235 Z"/></clipPath>
    <clipPath id="lrTopCutL"><path d="M-100 -40 H205 V368.9 H900 V900 H-100 Z"/></clipPath>
    <filter id="lrBevel" x="-8%" y="-8%" width="118%" height="120%" colorInterpolationFilters="sRGB">
    <feGaussianBlur in="SourceAlpha" stdDeviation="2.6" result="b"/>
    <feDiffuseLighting in="b" surfaceScale="3.6" diffuseConstant="1.05" lightingColor="#fff" result="diff"><feDistantLight azimuth="225" elevation="58"/></feDiffuseLighting>
    <feComponentTransfer in="diff" result="diff2"><feFuncR type="linear" slope="1.22" intercept="0"/><feFuncG type="linear" slope="1.22" intercept="0"/><feFuncB type="linear" slope="1.22" intercept="0"/></feComponentTransfer>
    <feComposite in="diff2" in2="SourceAlpha" operator="in" result="diffIn"/>
    <feBlend in="SourceGraphic" in2="diffIn" mode="multiply" result="shaded"/>
    <feSpecularLighting in="b" surfaceScale="4.5" specularConstant=".55" specularExponent="22" lightingColor="#fff3c8" result="spec"><feDistantLight azimuth="225" elevation="46"/></feSpecularLighting>
    <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn"/>
    <feComposite in="shaded" in2="specIn" operator="arithmetic" k1="0" k2="1" k3=".8" k4="0" result="lit"/>
    <feDropShadow in="lit" dx="4" dy="6" stdDeviation="5" floodColor="#5a4210" floodOpacity=".28"/>
    </filter>
    <g id="lrLogo" filter="url(#lrBevel)">
     <g clipPath="url(#lrOuter)" fill="url(#lrGold)">
      <g clipPath="url(#lrLeftArc)"><g clipPath="url(#lrTopCutL)"><path d="M3.6 368.9 A373.8 373.8 0 1 0 751.2 368.9 A373.8 373.8 0 1 0 3.6 368.9 Z M59.4 368.9 A318.0 318.0 0 1 1 695.4 368.9 A318.0 318.0 0 1 1 59.4 368.9 Z" fillRule="evenodd"/></g></g>
      <g clipPath="url(#lrRightArc)"><g clipPath="url(#lrTopCutR)"><path d="M3.6 368.9 A373.8 373.8 0 1 0 751.2 368.9 A373.8 373.8 0 1 0 3.6 368.9 Z M59.4 368.9 A318.0 318.0 0 1 1 695.4 368.9 A318.0 318.0 0 1 1 59.4 368.9 Z" fillRule="evenodd"/></g></g>
      <path d="M149 0 H205 V525 H480 V572 H149 Z"/>
      <path d="M235 141 H469 A141 141 0 0 1 469 423 H235 Z M288 194 V375 H469 A89 89 0 0 0 469 193 H288 Z M235 141 H288 V499 H235 Z" fillRule="nonzero"/>
      <path d="M397.5 420.2 L632.8 686.1 L672.0 651.4 L436.8 385.5 Z"/>
     </g>
    </g>
    </defs>
    </svg>
  );
}
