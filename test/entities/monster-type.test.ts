import MonsterType from "../../src/game/entities/monster-type";
import Type from "../../src/game/entities/type";

// SameTypeAttackBonus
describe("MonsterType", () => {
  it("引数は２つまで", () => {
    expect(() => {
      new MonsterType(Type.normal(), Type.fire(), Type.grass());
    }).toThrowError();
  });

  describe("#hasSameType", () => {
    const types = new MonsterType(Type.normal(), Type.flying());
    it("タイプ一致したら真", () => {
      expect(types.hasSameType(Type.normal())).toBe(true);
    });
    it("タイプ一致しなかったら偽", () => {
      expect(types.hasSameType(Type.fire())).toBe(false);
    });
  });
});
