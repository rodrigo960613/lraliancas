import { HERO_PHOTOS, whatsLink } from '../data.js';
import { WhatsIcon } from './Icons.jsx';

const CHIPS = ['Revestimento em prata 925', 'Enviamos para todo o Brasil', 'Garantia eterna da cor', 'Gravação personalizada', '2 mm a 10 mm'];

export default function Hero() {
  return (
    <header className="hero" id="topo">
      <div className="wrap">
        <div className="hero-copy">
          <h1 className="tagline">Alianças que contam a sua história</h1>
          <div className="cta">
            <a className="btn btn-gold" href={whatsLink()} target="_blank" rel="noopener noreferrer"><WhatsIcon />Falar no WhatsApp</a>
            <a className="btn btn-ghost" href="#modelos">Ver modelos</a>
          </div>
          <ul className="chips">{CHIPS.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
        <div className="mosaic">
          {HERO_PHOTOS.map((p, i) => (
            <figure key={p.src}>
              <img src={p.src} width={p.w} height={p.h} alt={p.alt} style={p.pos ? { objectPosition: p.pos } : undefined}
                   loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : undefined} />
            </figure>
          ))}
        </div>
      </div>
    </header>
  );
}
