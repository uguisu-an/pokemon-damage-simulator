import { Damage } from "./damage";

/**
 * 乱数によるダメージの範囲
 */
export default class DamageRange {
  public readonly damages: Damage[] = [];

  public constructor(base: Damage) {
    for (let i = 85; i <= 100; i++) {
      this.damages.push(base.scale(i / 100));
    }
  }

  public get min(): Damage {
    return this.damages[0];
  }

  public get max(): Damage {
    return [...this.damages].splice(-1)[0];
  }
}
