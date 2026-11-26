/* Passo a passo ilustrado: medir o dedo com fio ou tira de papel.
   Os desenhos são SVG (leves, nítidos em qualquer tela e sem arquivos de imagem). */

const PAPER = '#fffdf8';
const PAPER_LINE = '#cdbfa4';
const FINGER = '#f3e8d8';
const FINGER_LINE = '#c9b08a';
const GOLD = '#b78a2e';
const GOLD_DARK = '#8a5d17';
const INK = '#1f1f23';
const MUTED = '#6b6970';

const Label = ({ x, y, children, anchor = 'middle', size = 11, color = MUTED, weight = 500 }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={color} fontFamily="Jost, system-ui, sans-serif">{children}</text>
);

/* 1. Preparar o fio ou o papel */
const FigPrepare = () => (
  <svg viewBox="0 0 240 150" role="img" aria-label="Tira de papel com 1 cm de largura e 15 cm de comprimento, e um fio">
    <rect x="40" y="44" width="184" height="24" rx="2" fill={PAPER} stroke={PAPER_LINE} />
    <path d="M40 90H224M40 85V95M224 85V95" stroke={GOLD} strokeWidth="1.5" fill="none" />
    <Label x="132" y="108">cerca de 15 cm</Label>
    <path d="M30 44V68M26 44H34M26 68H34" stroke={GOLD} strokeWidth="1.5" fill="none" />
    <Label x="28" y="36" size={10}>1 cm</Label>
    <path d="M40 130C70 118 90 142 120 130S170 118 224 130" stroke={GOLD} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <Label x="132" y="148" size={10}>ou um fio que não estica</Label>
  </svg>
);

/* 2. Enrolar na base do dedo */
const FigWrap = () => (
  <svg viewBox="0 0 240 150" role="img" aria-label="Dedo com a tira enrolada na base, abaixo da junta">
    <path d="M90 150V42a30 30 0 0 1 60 0V150" fill={FINGER} stroke={FINGER_LINE} strokeWidth="2" />
    <path d="M96 60Q120 66 144 60" stroke={FINGER_LINE} strokeWidth="1.5" fill="none" />
    <path d="M97 66Q120 72 143 66" stroke={FINGER_LINE} strokeWidth="1.2" fill="none" />
    <path d="M90 108Q120 94 150 108" stroke={GOLD} strokeWidth="6" fill="none" strokeDasharray="2 5" opacity=".55" />
    <path d="M90 108Q120 124 150 108" stroke={GOLD} strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M138 116L172 100" stroke={GOLD} strokeWidth="6" strokeLinecap="round" />
    <Label x="40" y="66" anchor="middle" size={10}>junta</Label>
    <path d="M62 62H88" stroke={MUTED} strokeWidth="1" strokeDasharray="2 3" />
    <Label x="198" y="128" anchor="middle" size={10}>base do dedo</Label>
    <path d="M176 120L158 114" stroke={MUTED} strokeWidth="1" />
  </svg>
);

/* 3. Marcar onde as pontas se encontram */
const FigMark = () => (
  <svg viewBox="0 0 240 150" role="img" aria-label="Caneta marcando o ponto em que as duas pontas da tira se encontram">
    <rect x="20" y="78" width="130" height="24" rx="2" fill={PAPER} stroke={PAPER_LINE} />
    <rect x="104" y="70" width="116" height="24" rx="2" fill={PAPER} stroke={PAPER_LINE} opacity=".96" />
    <path d="M104 78V102" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
    <path d="M118 52L108 74" stroke={INK} strokeWidth="9" strokeLinecap="round" />
    <circle cx="106" cy="78" r="3.2" fill={GOLD_DARK} />
    <Label x="120" y="124" size={11}>marque onde as pontas</Label>
    <Label x="120" y="139" size={11}>se encontram</Label>
  </svg>
);

/* 4. Esticar e medir na régua (58 mm = aro 18) */
const FigRuler = () => {
  const ticks = Array.from({ length: 71 }, (_, i) => i);
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label="Tira esticada sobre uma régua, medindo 58 milímetros">
      <path d="M15 34H189M15 29V39M189 29V39" stroke={GOLD} strokeWidth="1.5" fill="none" />
      <Label x="102" y="24" size={12} color={GOLD_DARK} weight={600}>58 mm</Label>
      <rect x="15" y="46" width="174" height="18" rx="2" fill={PAPER} stroke={PAPER_LINE} />
      <path d="M15 40V72M189 40V72" stroke={GOLD} strokeWidth="2" />
      <rect x="8" y="64" width="224" height="42" rx="3" fill="#fbf3dc" stroke={FINGER_LINE} />
      {ticks.map((i) => (
        <path key={i} d={`M${15 + i * 3} 64v${i % 10 === 0 ? 14 : i % 5 === 0 ? 10 : 6}`} stroke={MUTED} strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
        <Label key={n} x={15 + n * 30} y="97" size={9}>{n}</Label>
      ))}
      <Label x="120" y="132" size={13} color={GOLD_DARK} weight={600}>58 − 40 = aro 18</Label>
    </svg>
  );
};

const STEPS = [
  {
    Fig: FigPrepare,
    title: 'Prepare o fio ou o papel',
    text: 'Corte uma tira de papel com cerca de 1 cm de largura e 15 cm de comprimento. Se preferir, use um fio que não estique, como linha de costura.',
  },
  {
    Fig: FigWrap,
    title: 'Enrole na base do dedo',
    text: 'Dê uma volta no dedo onde a aliança vai ficar, rente à base e sem apertar. Confira se a tira passa pela junta do dedo.',
  },
  {
    Fig: FigMark,
    title: 'Marque o encontro das pontas',
    text: 'Com uma caneta, faça uma marca no ponto em que a ponta de fora encontra o resto da tira.',
  },
  {
    Fig: FigRuler,
    title: 'Estique e meça na régua',
    text: 'Abra a tira sobre uma régua e meça do início até a marca, em milímetros. Esse valor é a circunferência. Aro = circunferência − 40.',
  },
];

export default function MeasureGuide() {
  return (
    <div className="mg">
      <ol className="mg-steps">
        {STEPS.map(({ Fig, title, text }, i) => (
          <li className="mg-step" key={title}>
            <div className="mg-fig"><Fig /></div>
            <span className="mg-num" aria-hidden="true">{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
      <p className="mg-tip"><b>Dica:</b> meça no fim do dia, quando o dedo está um pouco maior, e repita duas ou três vezes. Se as medidas variarem, fique com a maior.</p>
    </div>
  );
}