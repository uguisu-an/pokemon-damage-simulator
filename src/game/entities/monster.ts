import MonsterType from "./monster-type";
import MonsterLevel from "./monster-level";
import MonsterStats from "./monster-stats";

export default class Monster {
  public speciesName: string;
  public type: MonsterType;
  public level: MonsterLevel;
  public stats: MonsterStats;

  public constructor(
    speciesName: string,
    type: MonsterType,
    level: MonsterLevel,
    stats: MonsterStats
  ) {
    this.speciesName = speciesName;
    this.type = type;
    this.level = level;
    this.stats = stats;
  }
}
