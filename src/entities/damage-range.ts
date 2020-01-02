import { Damage, BaseDamage } from "./damage";

/**
 * ダメージの範囲
 */
export default class DamageRange {
  public readonly damages: Damage[] = [];

  public constructor(
    atk: number,
    def: number,
    power: number,
    level: number = 50
  ) {
    const damage = new BaseDamage(atk, def, power, level);
    for (let i = 85; i <= 100; i++) {
      this.damages.push(damage.scale(i / 100));
    }
  }

  public get min(): Damage {
    return this.damages[0];
  }

  public get max(): Damage {
    return [...this.damages].splice(-1)[0];
  }
}
