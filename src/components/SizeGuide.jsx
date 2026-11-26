import { useState } from 'react';
import { whatsLink } from '../data.js';
import { WhatsIcon } from './Icons.jsx';
import RingComparator from './RingComparator.jsx';

const METHODS = [
  {
    title: 'Com um fio ou tira de papel',
    note: 'Use quando você ainda não tem uma aliança.',
    steps: [
      'Corte um fio (ou uma tira de papel com cerca de 1 cm de largura e 15 cm de comprimento).',
      'Enrole no dedo onde a aliança vai ficar, na base, e confira se passa pela articulação.',
      'Marque com uma caneta o ponto em que as pontas se encontram.',
      'Estique o fio sobre uma régua e meça em milímetros. Esse é o tamanho da circunferência.',
    ],
  },
  {
    title: 'Com uma aliança que já serve',
    note: 'Use quando você tem um anel que cabe bem no dedo.',
    steps: [
      'Escolha um anel que passe pela articulação e fique confortável.',
      'Apoie o anel sobre uma régua e meça a distância de uma borda interna à outra, sem contar o metal.',
      'Esse é o diâmetro interno, em milímetros.',
      'Se preferir, é só nos enviar uma foto do anel sobre a régua.',
    ],
  },
];

const TIPS = [
  ['Meça no fim do dia', 'Pela manhã e no frio o dedo fica menor. À noite ele está no tamanho real.'],
  ['Repita duas ou três vezes', 'Compare as medidas. Se variarem, vale a maior das medidas repetidas.'],
  ['Atenção à largura', 'Alianças mais largas ficam mais justas. Na dúvida entre dois tamanhos, nos avise.'],
];

const MODES = {
  circ: { label: 'Tenho a circunferência', field: 'Circunferência do dedo (mm)' },
  diam: { label: 'Tenho o diâmetro', field: 'Diâmetro interno (mm)' },
};

const fmt = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export default function SizeGuide() {
  const [mode, setMode] = useState('circ');
  const [raw, setRaw] = useState('');

  /* medida vinda do comparador: preenche o conversor e leva a pessoa até ele */
  const applyMeasure = (mm) => {
    setMode('diam');
    setRaw(mm.toFixed(1).replace('.', ','));
    document.getElementById('size-calc')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const value = parseFloat(raw.replace(',', '.'));
  const ok = Number.isFinite(value) && (mode === 'circ' ? value >= 40 && value <= 90 : value >= 12 && value <= 29);
  const circ = ok ? (mode === 'circ' ? value : value * Math.PI) : 0;
  const diam = ok ? (mode === 'circ' ? value / Math.PI : value) : 0;

  const message = ok
    ? `Olá! Quero ajuda para escolher o tamanho da minha aliança. Minha medida: circunferência de ${fmt(circ)} mm (diâmetro interno de ${fmt(diam)} mm).`
    : 'Olá! Quero ajuda para descobrir o tamanho da minha aliança.';

  return (
    <section className="size" id="tamanho">
      <div className="wrap">
        <div className="sec-head size-head">
          <p className="eyebrow">Guia rápido</p>
          <h2>Como saber o tamanho da aliança?</h2>
          <p className="lead">São dois jeitos simples de medir em casa. Depois é só nos enviar a medida e a gente confirma o número certo para você.</p>
        </div>

        <div className="size-methods">
          {METHODS.map((m, i) => (
            <article className="size-card" key={m.title}>
              <span className="size-num" aria-hidden="true">{i + 1}</span>
              <h3>{m.title}</h3>
              <p className="size-note">{m.note}</p>
              <ol>{m.steps.map((s) => <li key={s}>{s}</li>)}</ol>
            </article>
          ))}
        </div>

        <RingComparator onUse={applyMeasure} />

        <ul className="size-tips">
          {TIPS.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}
        </ul>

        <div className="size-calc" id="size-calc">
          <div className="size-calc-copy">
            <p className="eyebrow">Conferir a medida</p>
            <h3>Converta e envie pelo WhatsApp</h3>
            <p>Digite o que você mediu. Mostramos a outra medida e você já manda tudo pronto para a gente.</p>
          </div>
          <div className="size-calc-box">
            <div className="size-toggle" role="group" aria-label="Que medida você tem?">
              {Object.entries(MODES).map(([k, v]) => (
                <button key={k} type="button" aria-pressed={mode === k} onClick={() => { setMode(k); setRaw(''); }}>{v.label}</button>
              ))}
            </div>
            <label className="size-field">
              <span>{MODES[mode].field}</span>
              <input type="text" inputMode="decimal" autoComplete="off" placeholder={mode === 'circ' ? 'ex.: 58' : 'ex.: 18,5'}
                     value={raw} onChange={(e) => setRaw(e.target.value)} />
            </label>
            <p className="size-result" aria-live="polite">
              {ok
                ? (mode === 'circ'
                    ? <>Diâmetro interno: <b>{fmt(diam)} mm</b></>
                    : <>Circunferência: <b>{fmt(circ)} mm</b></>)
                : raw
                  ? 'Confira o valor digitado, ele parece fora do comum para um dedo.'
                  : 'A conversão aparece aqui.'}
            </p>
            <a className="btn btn-gold" href={whatsLink(message)} target="_blank" rel="noopener noreferrer">
              <WhatsIcon />{ok ? 'Enviar minha medida' : 'Pedir ajuda no WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}