export default function Stat(
  level: number,
  base: number,
  individual: number,
  effort: number,
  scale: number
): number {
  const effortLevel = Math.floor(effort / 4);
  const baseLevel = base * 2 + individual + effortLevel;
  return Math.floor(((baseLevel * level) / 100 + 5) * scale);
}
