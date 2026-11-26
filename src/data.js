export const WHATS = '5581982028722';
export const INSTAGRAM = 'https://www.instagram.com/aliancamoedaantigaeprata/';
export const MAPS = 'https://maps.app.goo.gl/88k2hWmH5gEvLwnh8';

export const NAV = [
  { href: '#topo', label: 'Início' },
  { href: '#apresentacao', label: 'Apresentação' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#tamanho', label: 'Tamanho' },
  { href: '#fale-conosco', label: 'Fale conosco' },
  { href: '#localizacao', label: 'Localização' },
];

/* avail = larguras em que cada modelo é produzido */
export const MODELS = [
  { id: 'tradicional', name: 'Tradicional', avail: '2mm a 8mm' },
  { id: 'chanfrada', name: 'Chanfrada', avail: '2mm a 10mm' },
  { id: 'reta-sem-friso', name: 'Reta sem friso', avail: '2mm a 10mm' },
  { id: 'friso-duplo-lateral', name: 'Friso duplo lateral', avail: '4mm a 10mm' },
  { id: 'friso-unico-lateral', name: 'Friso único lateral', avail: '3mm a 8mm' },
  { id: 'friso-central', name: 'Friso central', avail: '4mm a 10mm' },
];

export const COLORS = {
  moeda: { label: 'moeda antiga', other: 'prata', button: 'Ver em prata' },
  prata: { label: 'prata 925', other: 'moeda', button: 'Ver em moeda' },
};

export const HERO_PHOTOS = [
  { src: '/img/casal-1.webp', w: 416, h: 458, pos: '50% 60%', alt: 'Casal se beijando enquanto a mão mostra um par de alianças numa caixa vermelha' },
  { src: '/img/casal-2.webp', w: 371, h: 540, alt: 'Mãos de um casal com alianças sobre um buquê de flores rosas' },
  { src: '/img/casal-3.webp', w: 375, h: 524, alt: 'Casal mostrando as mãos com as alianças' },
  { src: '/img/casal-4.webp', w: 376, h: 514, pos: '60% 70%', alt: 'Alianças na palma da mão durante uma cerimônia' },
];

export const whatsLink = (text) =>
  `https://wa.me/${WHATS}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
