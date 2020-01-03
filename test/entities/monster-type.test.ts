import MonsterType from "../../src/game/entities/monster-type";
import Type from "../../src/game/entities/type";

// SameTypeAttackBonus
describe("MonsterType", () => {
  const types = new MonsterType(Type.normal(), Type.flying());
  describe("#includes", () => {
    it("わざのタイプと一致したら真", () => {
      expect(types.includes(Type.normal())).toBe(true);
    });
    it("わざのタイプと一致しなかったら偽", () => {
      expect(types.includes(Type.fire())).toBe(false);
    });
  });
});
