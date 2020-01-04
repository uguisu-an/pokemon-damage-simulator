import Level from "./monster-level";

export default function HP(
  level: Level,
  base: number,
  individual: number,
  effort: number
): number {
  const baseStat = Math.floor(
    ((base * 2 + individual + effort / 4) * level.value) / 100
  );
  return baseStat + level.value + 10;
}
