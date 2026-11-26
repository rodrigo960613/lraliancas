import { useEffect, useState } from 'react';

const COIN_MM = 27; // diâmetro da moeda de R$ 1,00
const KEY = 'lr-coin-px';
const fmt = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/* O tamanho da moeda na tela varia de aparelho para aparelho: a pessoa calibra uma vez
   e guardamos o valor só neste navegador. */
function initialCoinPx() {
  try {
    const saved = Number(localStorage.getItem(KEY));
    if (saved >= 70 && saved <= 240) return saved;
  } catch { /* navegador sem storage: segue com o padrão */ }
  return window.innerWidth < 700 ? 165 : 102;
}

export default function RingComparator({ onUse }) {
  const [coinPx, setCoinPx] = useState(initialCoinPx);
  const [ringMm, setRingMm] = useState(18);

  useEffect(() => {
    try { localStorage.setItem(KEY, String(coinPx)); } catch { /* ignora */ }
  }, [coinPx]);

  const pxPerMm = coinPx / COIN_MM;
  const ringPx = ringMm * pxPerMm;
  const circ = ringMm * Math.PI;

  return (
    <div className="cmp">
      <div className="cmp-intro">
        <p className="eyebrow">Compare na tela</p>
        <h3>Meça com uma moeda de R$ 1,00</h3>
        <p className="cmp-warn">Tem uma aliança ou anel antigo que serve? Então é só comparar. Apoie os objetos sobre a tela com cuidado para não riscar.</p>
      </div>

      <div className="cmp-stage" aria-hidden="true">
        <figure className="cmp-item">
          <div className="cmp-coin" style={{ width: coinPx, height: coinPx }}><span>1</span></div>
          <figcaption>Moeda de R$ 1,00 ({COIN_MM} mm)</figcaption>
        </figure>
        <figure className="cmp-item">
          <div className="cmp-ring" style={{ width: ringPx, height: ringPx }}><span>{fmt(ringMm)} mm</span></div>
          <figcaption>Aliança antiga</figcaption>
        </figure>
      </div>

      <div className="cmp-controls">
        <label className="cmp-slider">
          <span><b>1.</b> Calibre a tela. Apoie a moeda sobre o disco dourado e arraste até ela cobrir o disco por inteiro.</span>
          <input type="range" min="70" max="240" step="0.5" value={coinPx}
                 onChange={(e) => setCoinPx(Number(e.target.value))} aria-label="Tamanho do disco da moeda" />
        </label>

        <label className="cmp-slider">
          <span><b>2.</b> Apoie a aliança antiga no círculo tracejado e arraste até ele encostar na borda de dentro.</span>
          <input type="range" min="12" max="29" step="0.1" value={ringMm}
                 onChange={(e) => setRingMm(Number(e.target.value))} aria-label="Diâmetro interno da aliança em milímetros" />
        </label>

        <p className="cmp-read" aria-live="polite">
          Diâmetro interno <b>{fmt(ringMm)} mm</b> <i>·</i> circunferência <b>{fmt(circ)} mm</b>
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => onUse(ringMm)}>Usar essa medida</button>
        <p className="cmp-small">Deixe o zoom do navegador em 100%. Se mudar o zoom, calibre de novo. É uma medida aproximada, e a gente confirma com você pelo WhatsApp.</p>
      </div>
    </div>
  );
}