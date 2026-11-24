import { MODELS } from '../data.js';
import ModelCard from './ModelCard.jsx';

const Price = ({ head, sizes, value }) => (
  <article className="price">
    <h3 className="head">{head}</h3>
    <p className="price-sizes">{sizes}</p>
    <div className="price-options">
      <div className="price-option">
        <span><i className="pill" />Moeda Antiga</span>
        <strong>{value}</strong>
        <small>o par</small>
      </div>
      <div className="price-option">
        <span><i className="pill silver" />Prata 925</span>
        <strong>{value}</strong>
        <small>o par</small>
      </div>
    </div>
  </article>
);

export default function Catalog() {
  return (
    <section id="modelos">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Catálogo de alianças</p>
          <h2>Modelos Tradicionais</h2>
          <p className="lead">Escolha entre seis acabamentos em moeda antiga ou prata 925. Toque no botão de cada modelo para alternar a cor.</p>
        </div>
        <div className="page">
          <div className="page-body">
            <div className="prices">
              <Price head="Alianças tradicionais" sizes="2, 3, 4, 5, 6 e 8 mm" value="R$ 280,00" />
              <Price head="Alianças tradicionais" sizes="10 mm" value="R$ 450,00" />
            </div>
            <div>
              <div className="label" style={{ marginBottom: '.8rem' }}>Acabamentos disponíveis</div>
              <div className="grid">{MODELS.map((m) => <ModelCard key={m.id} model={m} />)}</div>
            </div>
            <p className="guarantee">Garantia eterna para moeda antiga<i>✦</i>Caixinha de veludo inclusa<i>✦</i>Kit de limpeza na compra</p>
          </div>
        </div>
      </div>
    </section>
  );
}
