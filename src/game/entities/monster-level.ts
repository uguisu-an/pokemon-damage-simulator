export default class MonsterLevel {
  public readonly value: number;

  public constructor(level: number) {
    if (level < 1) throw new Error();
    if (level > 100) throw new Error();
    this.value = level;
  }
}
