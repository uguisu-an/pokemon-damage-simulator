import Level from "./level";

/**
 * レベルを元にしたダメージの計算
 */
export default class LevelDamage {
  public readonly value: number;

  public constructor(level: Level) {
    this.value = level.value;
  }
}
