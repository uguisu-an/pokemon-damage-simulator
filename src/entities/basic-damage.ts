/**
 * 普通のダメージの計算
 */
export default class BasicDamage {
  public readonly value: number;

  public constructor(
    attack: number,
    defence: number,
    power: number,
    level: number = 50,
    scale: number = 1.0
  ) {
    const levelScale = Math.floor((level * 2) / 5 + 2);
    const basis = Math.floor((levelScale * power * attack) / defence) / 50;
    this.value = Math.floor(basis * scale + 2) * scale;
  }
}
