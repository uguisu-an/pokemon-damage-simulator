/**
 * レベルを元にしたダメージの計算
 */
export default class LevelDamage {
  public readonly value: number;

  public constructor(level: number) {
    this.value = level;
  }
}
