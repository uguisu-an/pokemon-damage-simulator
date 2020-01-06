import StatRank from "../../src/game/entities/stat-rank";

describe("StatRank", () => {
  it("ランクを取得できる", () => {
    const rank = new StatRank(6);
    expect(rank.rank).toBe(6);
  });
  it("-6から6まで", () => {
    expect(() => {
      new StatRank(-7);
    }).toThrowError();
    expect(() => {
      new StatRank(7);
    }).toThrowError();
  });
  describe("#scale", () => {
    it("0は等倍", () => {
      const rank = new StatRank(0);
      expect(rank.scale(200)).toBe(200);
    });
    it("1以上は能力を上昇させる", () => {
      const rank = new StatRank(3);
      expect(rank.scale(200)).toBe(500);
    });
    it("0未満は能力を下降させる", () => {
      const rank = new StatRank(-6);
      expect(rank.scale(200)).toBe(50);
    });
    it("小数点以下は切り捨て", () => {
      const rank = new StatRank(3);
      expect(rank.scale(1)).toBe(2);
    });
  });
});
