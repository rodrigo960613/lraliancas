import { useEffect, useState } from 'react';
import { whatsLink } from '../data.js';
import { WhatsIcon } from './Icons.jsx';
import { aroFromCirc, fmt } from '../sizeUtils.js';

const COIN_MM = 27; // diâmetro da moeda de R$ 1,00
const KEY = 'lr-coin-px';

/* O tamanho da moeda na tela varia de aparelho para aparelho: a pessoa calibra uma vez
   e guardamos o valor só neste navegador. */
function initialCoinPx() {
  try {
    const saved = Number(localStorage.getItem(KEY));
    if (saved >= 70 && saved <= 240) return saved;
  } catch { /* navegador sem storage: segue com o padrão */ }
  return window.innerWidth < 700 ? 165 : 102;
}

export default function RingComparator() {
  const [coinPx, setCoinPx] = useState(initialCoinPx);
  const [ringMm, setRingMm] = useState(18);

  useEffect(() => {
    try { localStorage.setItem(KEY, String(coinPx)); } catch { /* ignora */ }
  }, [coinPx]);

  const pxPerMm = coinPx / COIN_MM;
  const ringPx = ringMm * pxPerMm;
  const circ = ringMm * Math.PI;
  const aro = aroFromCirc(circ);

  const message = `Olá! Medi no site o tamanho da minha aliança: aro ${aro} (aproximado), diâmetro interno de ${fmt(ringMm)} mm e circunferência de ${fmt(circ)} mm. Pode me ajudar a escolher?`;

  return (
    <div className="cmp">
      <div className="cmp-intro">
        <p className="eyebrow">Tamanho da aliança</p>
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
          <input type="range" min="14" max="26" step="0.1" value={ringMm}
                 onChange={(e) => setRingMm(Number(e.target.value))} aria-label="Diâmetro interno da aliança em milímetros" />
        </label>

        <div className="cmp-aro" aria-live="polite">
          <span>Seu aro aproximado</span>
          <strong>{aro}</strong>
          <small>diâmetro {fmt(ringMm)} mm <i>·</i> circunferência {fmt(circ)} mm</small>
        </div>
        <a className="btn btn-gold" href={whatsLink(message)} target="_blank" rel="noopener noreferrer"><WhatsIcon />Enviar minha medida</a>
        <p className="cmp-small">Deixe o zoom do navegador em 100%. Se mudar o zoom, calibre de novo. É uma medida aproximada, e a gente confirma com você pelo WhatsApp.</p>
      </div>
    </div>
  );
}