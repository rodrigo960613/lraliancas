import { useRef, useState } from 'react';
import { COLORS, whatsLink } from '../data.js';
import { WhatsIcon } from './Icons.jsx';

const src = (id, color) => `/img/${id}-${color}.webp`;

export default function ModelCard({ model }) {
  const [color, setColor] = useState('moeda'); // cor mostrada
  const [fading, setFading] = useState(false);
  const timer = useRef(0);
  const next = COLORS[color].other;
  const lower = model.name.toLowerCase();

  const swap = () => {
    setFading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setColor(next), 350); // o fade-in acontece em onLoad
  };
  const preload = () => { new Image().src = src(model.id, next); };

  const message = `Olá! Vi no site e quero falar sobre a aliança ${model.name} em ${COLORS[color].label}.`;

  return (
    <article className="card">
      <div className="stage">
        <img
          className={fading ? 'fade' : undefined}
          src={src(model.id, color)}
          width="422" height="412" loading="lazy"
          alt={`Par de alianças ${lower} em ${COLORS[color].label}`}
          onLoad={() => setFading(false)}
        />
      </div>
      <h3>{model.name}</h3>
      <p className="avail"><b>Disponível em</b>{model.avail}</p>
      <div className="acts">
        <button className="swap" type="button" onClick={swap} onPointerEnter={preload} onFocus={preload}
                aria-label={`Ver ${lower} em ${COLORS[next].label}`}>
          <span className={color === 'moeda' ? 'pill silver' : 'pill'} />
          <span className="t">{COLORS[color].button}</span>
        </button>
        <a className="wabtn" href={whatsLink(message)} target="_blank" rel="noopener noreferrer"><WhatsIcon />Falar sobre esse modelo</a>
      </div>
    </article>
  );
}
