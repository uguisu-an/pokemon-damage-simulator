/**
 * ダメージ
 */
export class Damage {
  public readonly damage: number;

  public constructor(damage: number) {
    this.damage = damage;
  }

  /**
   * 補正をかける
   * @param scale 補正値
   */
  public scale(scale: number): Damage {
    return new Damage(Math.floor(this.damage * scale));
  }
}

/**
 * 補正なしのダメージ
 */
export class BaseDamage extends Damage {
  public constructor(
    atk: number,
    def: number,
    power: number,
    level: number = 50
  ) {
    const lv = Math.floor((level * 2) / 5 + 2);
    const damage = Math.floor(Math.floor((lv * power * atk) / def) / 50 + 2);
    super(damage);
  }
}
