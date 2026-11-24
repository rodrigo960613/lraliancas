export default function VideoSection() {
  return (
    <section className="video-sec" id="apresentacao">
      <div className="wrap video-grid">
        <div className="video-copy">
          <p className="eyebrow">Apresentação</p>
          <h2>Conheça a LR Moeda Antiga &amp; Prata 925</h2>
          <p className="lead">Entre na nossa loja pelo vídeo e veja o cuidado com cada aliança, do modelo escolhido até a caixinha de veludo. É assim que a sua história ganha forma.</p>
        </div>
        <div className="phone">
          <video controls playsInline preload="none" poster="/video/poster.webp" aria-label="Vídeo de apresentação da LR Moeda Antiga & Prata 925">
            <source src="/video/apresentacao.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
