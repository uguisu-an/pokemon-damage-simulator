import Level from "./monster-level";

export default function Stat(
  level: Level,
  base: number,
  individual: number,
  effort: number,
  nature: number = 1.0
): number {
  const effortLevel = Math.floor(effort / 4);
  const baseLevel = base * 2 + individual + effortLevel;
  return Math.floor(((baseLevel * level.value) / 100 + 5) * nature);
}
