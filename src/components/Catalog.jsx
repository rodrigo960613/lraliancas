import { MODELS } from '../data.js';
import ModelCard from './ModelCard.jsx';

const Price = ({ head, badge, value }) => (
  <div className="price">
    <div className="head">{head}{badge && <em>{badge}</em>}</div>
    <small>O par</small><strong>{value}</strong>
    <div className="both"><span className="pill" />Moeda Antiga<span className="pill silver" />Prata 925</div>
  </div>
);

export default function Catalog() {
  return (
    <section id="modelos">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Catálogo de alianças</p>
          <h2>Modelos Tradicionais</h2>
          <p className="lead">Alianças de 2 mm a 10 mm em moeda antiga ou prata 925. Use o botão de cada modelo para ver nas duas cores.</p>
        </div>
        <div className="page">
          <div className="page-body">
            <div className="prices">
              <Price head="De 2 mm a 8 mm" value="R$ 280,00" />
              <Price head="10 mm " badge="Linha Luxo" value="R$ 450,00" />
            </div>
            <div>
              <div className="label" style={{ marginBottom: '.8rem' }}>Acabamentos disponíveis</div>
              <div className="grid">{MODELS.map((m) => <ModelCard key={m.id} model={m} />)}</div>
            </div>
            <p className="guarantee">Garantia eterna da cor<i>✦</i>Caixinha de veludo inclusa<i>✦</i>Revestimento em prata 925</p>
          </div>
        </div>
      </div>
    </section>
  );
}
