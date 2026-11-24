import { INSTAGRAM, MAPS, whatsLink } from '../data.js';
import { InstaIcon, PinIcon, WhatsIcon } from './Icons.jsx';

/* Ruas e quarteirões do mapa ilustrado */
const BLOCKS = [20, 150, 320, 460].flatMap((x, c) =>
  [[20, 80], [130, 70], [230, 90]].map(([y, h]) => ({ x, y, h, w: [110, 150, 120, 120][c] }))
);

const Row = ({ href, icon, label, value }) => (
  <a className="crow" href={href} target="_blank" rel="noopener noreferrer">
    <span className="ico">{icon}</span>
    <span className="row-body"><span className="label">{label}</span><br /><span className="value">{value}</span></span>
  </a>
);

export default function Location() {
  return (
    <section className="contact" id="localizacao">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Localização</p>
          <h2>Venha conversar</h2>
        </div>
        <div className="cgrid">
          <div className="map">
            <svg className="bg" viewBox="0 0 600 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="600" height="340" fill="#ebe6df" />
              <g fill="#f7f4ef">{BLOCKS.map((b) => <rect key={`${b.x}-${b.y}`} x={b.x} y={b.y} width={b.w} height={b.h} rx="6" />)}</g>
              <g stroke="#fff" strokeWidth="10" strokeLinecap="round"><path d="M0 115H600M0 215H600M140 0V340M310 0V340M450 0V340" /></g>
              <path d="M0 330L600 90" stroke="#fff" strokeWidth="14" strokeLinecap="round" />
              <circle cx="300" cy="165" r="46" fill="rgba(183,138,46,.18)" />
            </svg>
            <svg className="pin" viewBox="0 0 44 58" aria-hidden="true">
              <path d="M22 57C22 57 3 36 3 21a19 19 0 0 1 38 0c0 15-19 36-19 36Z" fill="#b78a2e" stroke="#fff" strokeWidth="2" />
              <circle cx="22" cy="21" r="7" fill="#fff" />
            </svg>
            <div className="addr">
              <div className="ico"><PinIcon /></div>
              <div><b>Praça da Bandeira, Centro</b><span>Vitória de Santo Antão · PE · CEP 55602-200</span></div>
            </div>
            <a className="btn btn-gold" href={MAPS} target="_blank" rel="noopener noreferrer"><PinIcon />Ver no Google Maps</a>
          </div>
          <p className="refline"><b>Referência:</b> na descida de Tânia Calçados, em frente à Executiva Prime.</p>
          <div className="talk on-dark">
            <h3>Fale com a gente</h3>
            <Row href={whatsLink()} icon={<WhatsIcon />} label="WhatsApp" value="(81) 98102-8722" />
            <Row href={INSTAGRAM} icon={<InstaIcon />} label="Instagram" value="@aliancamoedaantigaeprata" />
            <a className="btn btn-gold" href={whatsLink()} target="_blank" rel="noopener noreferrer"><WhatsIcon />Falar no WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
