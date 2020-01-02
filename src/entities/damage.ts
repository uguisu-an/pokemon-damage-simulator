export class BaseDamage {
  public readonly damage: number;

  public constructor(
    atk: number,
    def: number,
    power: number,
    level: number = 50
  ) {
    const lv = Math.floor((level * 2) / 5 + 2);
    this.damage = Math.floor(Math.floor((lv * power * atk) / def) / 50 + 2);
  }
}
