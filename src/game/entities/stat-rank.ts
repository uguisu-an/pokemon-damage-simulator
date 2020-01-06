/**
 * 能力ランク
 */
export default class StatRank {
  public readonly rank: number;

  public constructor(rank: number) {
    if (rank > 6 || rank < -6) throw new Error();
    this.rank = rank;
  }

  public scale(value: number): number {
    return Math.floor((value * this.numerator) / this.denominator);
  }

  /**
   * 分子
   */
  private get numerator(): number {
    if (this.rank < 0) return 2;
    return 2 + this.rank;
  }

  /**
   * 分母
   */
  private get denominator(): number {
    if (this.rank > 0) return 2;
    return 2 - this.rank;
  }
}
