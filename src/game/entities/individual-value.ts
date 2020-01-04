/**
 * 個体値
 */
export default class IndividualValue {
  public readonly value: number;

  public constructor(value: number) {
    if (value < 0 || 31 < value) {
      throw new Error();
    }
    this.value = value;
  }
}
