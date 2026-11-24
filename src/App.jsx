import LogoDefs from './components/LogoDefs.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import VideoSection from './components/VideoSection.jsx';
import Catalog from './components/Catalog.jsx';
import MoreSection from './components/MoreSection.jsx';
import Location from './components/Location.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';

export default function App() {
  return (
    <>
      <LogoDefs />
      <Header />
      <Hero />
      <main>
        <VideoSection />
        <Catalog />
        <MoreSection />
        <Location />
      </main>
      <footer>
        <div className="wrap"><b>LR</b> · MOEDA ANTIGA &amp; PRATA 925 · Vitória de Santo Antão - PE</div>
      </footer>
      <FloatingButtons />
    </>
  );
}
