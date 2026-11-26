import MeasureGuide from './MeasureGuide.jsx';
import RingComparator from './RingComparator.jsx';

export default function SizeGuide() {
  return (
    <section className="size" id="tamanho">
      <div className="wrap">
        <div className="sec-head size-head">
          <p className="eyebrow">Guia rápido</p>
          <h2>Como saber o tamanho da aliança?</h2>
          <p className="lead">Meça o dedo com um fio ou uma tira de papel e descubra o seu aro. Se já tiver uma aliança que serve, compare na tela.</p>
        </div>
        <MeasureGuide />
        <RingComparator />
      </div>
    </section>
  );
}