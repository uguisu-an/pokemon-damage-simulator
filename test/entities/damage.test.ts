import DamageRange from "../../src/entities/damage-range";

describe("DamageRange", () => {
  describe("とくこう130族からとくぼう130族へのはかいこうせん", () => {
    const range = new DamageRange(200, 200, 150);

    it("最大乱数（補正なし）", () => {
      expect(range.max.damage).toBe(68);
    });
    it("最小乱数", () => {
      expect(range.min.damage).toBe(57);
    });
  });
});
