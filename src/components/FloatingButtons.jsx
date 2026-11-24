import { useEffect, useState } from 'react';
import { whatsLink } from '../data.js';
import { ArrowUpIcon, WhatsIcon } from './Icons.jsx';

/* WhatsApp sempre visível; "voltar ao início" aparece quando o hero sai da tela */
export default function FloatingButtons() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('topo');
    if (!hero || !('IntersectionObserver' in window)) return setShowUp(true);
    const io = new IntersectionObserver(([e]) => setShowUp(!e.isIntersecting), { rootMargin: '-120px 0px 0px 0px' });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div className="fabs">
      <button type="button" className={`fab fab-up${showUp ? ' show' : ''}`} aria-label="Voltar ao início da página"
              onClick={(e) => { window.scrollTo({ top: 0, behavior: 'smooth' }); e.currentTarget.blur(); }}>
        <ArrowUpIcon />
      </button>
      <a className="fab fab-wa" href={whatsLink('Olá! Vim pelo site da LR e quero falar sobre as alianças.')}
         target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <WhatsIcon />
      </a>
    </div>
  );
}
