import { useEffect, useRef, useState } from 'react';
import { NAV } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const mq = window.matchMedia('(min-width:961px)');
    const onMq = (e) => e.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    mq.addEventListener('change', onMq);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  return (
    <div className={`top${open ? ' open' : ''}`} ref={ref}>
      <div className="wrap">
        <a className="mark" href="#topo" aria-label="LR Moeda Antiga & Prata 925">
          <svg viewBox="-14 -14 790 775" aria-hidden="true"><use href="#lrLogo" /></svg>
          <span className="mt"><b>MOEDA ANTIGA</b><small>&amp; PRATA 925</small></span>
        </a>
        <nav className="nav" id="nav" aria-label="Menu principal" onClick={(e) => e.target.closest('a') && setOpen(false)}>
          {NAV.map((item, i) => (
            <a key={item.href} href={item.href} style={{ '--i': i }}>{item.label}</a>
          ))}
        </nav>
        <button
          className="navbtn"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  );
}
