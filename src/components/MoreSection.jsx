import { INSTAGRAM, whatsLink } from '../data.js';
import { InstaIcon, WhatsIcon } from './Icons.jsx';

export default function MoreSection() {
  return (
    <section className="more" id="fale-conosco">
      <div className="wrap">
        <div className="frame">
          <p className="eyebrow">Atendimento</p>
          <h2>Seu modelo não está no catálogo?</h2>
          <div className="rule" aria-hidden="true"><i /></div>
          <p className="sub2">Envie uma referência — produzimos a aliança do jeito que você deseja</p>
          <div className="cta on-dark">
            <a className="btn btn-gold" href={whatsLink()} target="_blank" rel="noopener noreferrer"><WhatsIcon />Falar no WhatsApp</a>
            <a className="btn btn-ghost" href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><InstaIcon />Ver no Instagram</a>
          </div>
          <p className="hint">(81) 98202-8722 · @aliancamoedaantigaeprata</p>
        </div>
      </div>
    </section>
  );
}
