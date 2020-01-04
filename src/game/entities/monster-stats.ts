/**
 * 能力値
 */
export default class MonsterStats {
  public readonly hp: number;
  public readonly atk: number;
  public readonly def: number;
  public readonly spAtk: number;
  public readonly spDef: number;
  public readonly spd: number;

  public constructor(
    hp: number,
    atk: number,
    def: number,
    spAtk: number,
    spDef: number,
    spd: number
  ) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.spAtk = spAtk;
    this.spDef = spDef;
    this.spd = spd;
  }
}
