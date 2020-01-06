class Rank {
  public readonly rank: number;

  public constructor(rank: number) {
    if (rank > 6 || rank < -6) throw new Error();
    this.rank = rank;
  }

  public scale(value: number): number {
    let numerator = 2;
    if (this.rank > 0) {
      numerator += this.rank;
    }
    let denominator = 2;
    if (this.rank < 0) {
      denominator -= this.rank;
    }
    return Math.floor((value * numerator) / denominator);
  }
}

describe("Rank", () => {
  it("ランクを取得できる", () => {
    const rank = new Rank(6);
    expect(rank.rank).toBe(6);
  });
  it("-6から6まで", () => {
    expect(() => {
      new Rank(-7);
    }).toThrowError();
    expect(() => {
      new Rank(7);
    }).toThrowError();
  });
  describe("#scale", () => {
    it("0は等倍", () => {
      const rank = new Rank(0);
      expect(rank.scale(200)).toBe(200);
    });
    it("1以上は能力を上昇させる", () => {
      const rank = new Rank(3);
      expect(rank.scale(200)).toBe(500);
    });
    it("0未満は能力を下降させる", () => {
      const rank = new Rank(-6);
      expect(rank.scale(200)).toBe(50);
    });
    it("小数点以下は切り捨て", () => {
      const rank = new Rank(3);
      expect(rank.scale(1)).toBe(2);
    });
  });
});
