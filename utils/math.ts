export function clamp(num: number, min = -Infinity, max = Infinity): number {
  return Math.min(Math.max(num, min), max);
}

export const roundNumber = (num: number, fractionDigits = 2) => {
  return +num.toFixed(fractionDigits);
};
