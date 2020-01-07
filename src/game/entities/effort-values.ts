import EffortValue from "./effort-value";

export default class EffortValues {
  public readonly hp: EffortValue;
  public readonly atk: EffortValue;
  public readonly def: EffortValue;
  public readonly spAtk: EffortValue;
  public readonly spDef: EffortValue;
  public readonly spd: EffortValue;

  public constructor(
    hp: number,
    atk: number,
    def: number,
    spAtk: number,
    spDef: number,
    spd: number
  ) {
    if (hp + atk + def + spAtk + spDef + spd > 510) {
      throw new Error();
    }
    this.hp = new EffortValue(hp);
    this.atk = new EffortValue(atk);
    this.def = new EffortValue(def);
    this.spAtk = new EffortValue(spAtk);
    this.spDef = new EffortValue(spDef);
    this.spd = new EffortValue(spd);
  }
}
