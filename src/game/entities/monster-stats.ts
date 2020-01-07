import MonsterStat from "./monster-stat";

/**
 * 能力値
 */
export default class MonsterStats {
  public readonly hp: MonsterStat;
  public readonly atk: MonsterStat;
  public readonly def: MonsterStat;
  public readonly spAtk: MonsterStat;
  public readonly spDef: MonsterStat;
  public readonly spd: MonsterStat;

  public constructor(
    hp: MonsterStat,
    atk: MonsterStat,
    def: MonsterStat,
    spAtk: MonsterStat,
    spDef: MonsterStat,
    spd: MonsterStat
  ) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spAtk = spAtk;
    this.spDef = spDef;
    this.spd = spd;
  }
}
