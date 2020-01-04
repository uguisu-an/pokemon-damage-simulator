/**
 * 能力値
 */
export default class MonsterStat {
  public readonly value: number;

  public constructor(value: number) {
    if (value < 1) throw new Error();
    this.value = value;
  }
}
