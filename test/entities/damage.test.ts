import { BaseDamage } from "../../src/entities/damage";

describe("Damage", () => {
  describe("とくこう130族からとくぼう130族へのはかいこうせん", () => {
    const damage = new BaseDamage(200, 200, 150);
    it("最大乱数（補正なし）", () => {
      expect(damage.damage).toBe(68);
    });
    it("最小乱数", () => {
      expect(damage.scale(0.85).damage).toBe(57);
    });
  });
});
