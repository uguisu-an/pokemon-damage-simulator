import MonsterType from "./monster-type";
import MonsterStats from "./monster-stats";

/**
 * 種族
 */
export default class MonsterSpecies {
  public readonly name: string;
  public readonly type: MonsterType;
  public readonly stats: MonsterStats;

  public constructor(name: string, type: MonsterType, stats: MonsterStats) {
    this.name = name;
    this.type = type;
    this.stats = stats;
  }
}
