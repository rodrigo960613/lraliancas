/* Regra do aro brasileiro: aro = circunferência interna (mm) − 40.
   Diâmetro interno = circunferência ÷ π. */
export const ARO_OFFSET = 40;

export const fmt = (n) => n.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
export const aroFromCirc = (circ) => Math.round(circ) - ARO_OFFSET;