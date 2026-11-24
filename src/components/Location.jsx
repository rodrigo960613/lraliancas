import { INSTAGRAM, MAPS, whatsLink } from '../data.js';
import { InstaIcon, PinIcon, WhatsIcon } from './Icons.jsx';

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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63197.123139190626!2d-35.367968278320305!3d-8.119781999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aa558e3e0743f3%3A0x71079d22e819742b!2sPRA%C3%87A%20DA%20BANDEIRA!5e0!3m2!1spt-BR!2sbr!4v1795524565146!5m2!1spt-BR!2sbr"
              title="Mapa da Praça da Bandeira no Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
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
