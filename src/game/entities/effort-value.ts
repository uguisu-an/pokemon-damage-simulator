/**
 * 努力値
 */
export default class EffortValue {
  public readonly value: number;

  public constructor(value: number) {
    if (value < 0 || 252 < value) {
      throw new Error();
    }
    this.value = value;
  }
}
