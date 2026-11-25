import { whatsLink } from '../data.js';
import { WhatsIcon } from './Icons.jsx';

const SPECIAL_MODELS = [
  {
    name: 'Curvas e Entrelaçadas',
    description: 'Em moeda antiga ou prata 925, com fios torcidos em curvas suaves, com ou sem pedras.',
    price: 'R$ 300,00',
    image: 'curvado-entrelacado',
    alt: 'Alianças curvas e entrelaçadas em uma caixa de veludo',
  },
  {
    name: 'Friso com pedras',
    description: 'Frisos paralelos com pedras cravejadas.',
    price: 'R$ 350,00',
    image: 'friso-com-pedras',
    alt: 'Alianças com frisos paralelos e pedras cravejadas',
  },
  {
    name: 'Luxo com pedras',
    description: 'Modelo largo com fileira de pedras.',
    price: 'R$ 450,00',
    image: 'luxo-com-pedras',
    alt: 'Alianças largas com fileira de pedras em uma caixa vermelha',
  },
  {
    name: 'Com pedras',
    description: 'Aliança com pedras em toda a frente.',
    price: 'R$ 450,00',
    image: 'alianca-com-pedras',
    alt: 'Alianças com pedras em toda a frente',
  },
];

const SPECIAL_ENGRAVINGS = [
  { name: 'À mão', price: 'R$ 40,00', image: 'gravacao-a-mao' },
  { name: 'A laser', price: 'R$ 80,00', image: 'gravacao-a-laser' },
];

function ProductCard({ model }) {
  const message = `Olá! Vi no site e quero saber mais sobre o modelo ${model.name}.`;

  return (
    <article className="special-card">
      <img src={`/img/catalogo/${model.image}.webp`} alt={model.alt} loading="lazy" />
      <div className="special-card-copy">
        <h4>{model.name}</h4>
        <p>{model.description}</p>
        <div className="special-card-price"><span>O par</span><strong>{model.price}</strong></div>
        <a className="wabtn" href={whatsLink(message)} target="_blank" rel="noopener noreferrer">
          <WhatsIcon />Consultar modelo
        </a>
      </div>
    </article>
  );
}

export default function CatalogExtras() {
  const luxuryMessage = 'Olá! Quero saber mais sobre as alianças da Linha Luxo.';

  return (
    <section className="catalog-extra" id="linhas-especiais">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Linha Luxo</p>
          <h2>Detalhes para uma aliança única</h2>
          <p className="lead">Conheça a Linha Luxo, os modelos especiais e as opções para personalizar o seu par.</p>
        </div>

        <article className="luxury-feature">
          <img src="/img/catalogo/linha-luxo.webp" alt="Alianças da Linha Luxo com frisos e acabamento espelhado" loading="lazy" />
          <div className="luxury-copy">
            <p className="eyebrow">Linha exclusiva</p>
            <h3>Linha Luxo</h3>
            <p>Frisos marcantes e acabamento espelhado para um par imponente e sofisticado.</p>
            <p className="luxury-sizes"><b>Espessuras disponíveis</b>2 mm · 5 mm · 7 mm · 9 mm · 10 mm</p>
            <div className="luxury-prices">
              <div><span><i className="pill" />Moeda Antiga</span><strong>R$ 450,00</strong><small>o par</small></div>
              <div><span><i className="pill silver" />Prata 925</span><strong>R$ 680,00</strong><small>o par</small></div>
            </div>
            <a className="wabtn" href={whatsLink(luxuryMessage)} target="_blank" rel="noopener noreferrer">
              <WhatsIcon />Consultar Linha Luxo
            </a>
          </div>
        </article>

        <div className="special-heading">
          <p className="eyebrow">Feitas para surpreender</p>
          <h3>Curvas, pedras e modelos especiais</h3>
        </div>
        <div className="special-grid">
          {SPECIAL_MODELS.map((model) => <ProductCard key={model.image} model={model} />)}
        </div>

        <div className="material-heading">
          <p className="eyebrow">Materiais e cuidado</p>
          <h3>Beleza que acompanha a sua história</h3>
        </div>
        <div className="material-grid">
          <article className="material-card">
            <span className="material-mark" aria-hidden="true">✦</span>
            <h4>Moeda antiga legítima</h4>
            <p>O metal reage naturalmente ao pH da pele. Se a aliança escurecer com o tempo, isso não é defeito: basta limpar e polir para recuperar o brilho. A cor tem garantia eterna.</p>
          </article>
          <article className="material-card">
            <span className="material-mark" aria-hidden="true">925</span>
            <h4>Prata 925</h4>
            <p>Prata de lei com brilho frio e sofisticado. Disponível nos acabamentos tradicionais de 2 mm a 10 mm, com o mesmo cuidado artesanal.</p>
          </article>
        </div>

        <article className="lining-card">
          <div>
            <p className="eyebrow">Conforto no dia a dia</p>
            <h3>Revestimento interno em prata 925</h3>
            <p>O forro anatômico é opcional. Ele proporciona mais conforto, melhora o acabamento no contato com a pele e cria uma camada de proteção entre o metal e o dedo.</p>
            <p>É especialmente indicado para quem tem suor mais ácido; pode ajudar a reduzir oxidação, escurecimento e manchas esverdeadas no dedo.</p>
          </div>
          <div className="lining-price"><span>Opcional · acréscimo por par</span><strong>+ R$ 90,00</strong></div>
        </article>

        <div className="engraving">
          <div className="engraving-copy">
            <p className="eyebrow">Personalize seu par</p>
            <h3>Gravação personalizada</h3>
            <p>Eternize nomes, datas ou um símbolo especial no interior das suas alianças.</p>
          </div>
          <div className="engraving-grid">
            {SPECIAL_ENGRAVINGS.map((option) => {
              const message = `Olá! Quero fazer uma gravação ${option.name.toLowerCase()} nas alianças.`;
              return (
                <article className="engraving-card" key={option.name}>
                  <img src={`/img/catalogo/${option.image}.webp`} alt={`Exemplo de gravação ${option.name.toLowerCase()} em alianças`} loading="lazy" />
                  <div className="engraving-option">
                    <div><h4>{option.name}</h4><small>o par</small></div>
                    <strong>{option.price}</strong>
                  </div>
                  <a className="wabtn" href={whatsLink(message)} target="_blank" rel="noopener noreferrer">
                    <WhatsIcon />Consultar gravação
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <div className="benefits">
          <p className="eyebrow">Diferenciais LR</p>
          <div className="benefits-grid">
            <div><b>Caixinha de veludo</b><span>Inclusa em todos os pares</span></div>
            <div><b>Kit de limpeza</b><span>Brinde na compra da aliança</span></div>
            <div><b>Garantia eterna</b><span>Da cor das alianças de moeda</span></div>
            <div><b>Forro anatômico</b><span>Revestimento opcional em prata 925</span></div>
          </div>
        </div>

        <p className="custom-order">
          <b>Tem um modelo específico que não está no catálogo?</b>
          Envie sua referência pelo WhatsApp; produzimos a aliança do jeito que você deseja.
        </p>
      </div>
    </section>
  );
}
