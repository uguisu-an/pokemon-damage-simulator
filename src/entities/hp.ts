export default function HP(
  level: number,
  base: number,
  individual: number,
  effort: number
): number {
  const baseStat = Math.floor(
    ((base * 2 + individual + effort / 4) * level) / 100
  );
  return baseStat + level + 10;
}
