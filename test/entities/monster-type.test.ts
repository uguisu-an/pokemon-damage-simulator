import MonsterType from "../../src/game/entities/monster-type";
import Type from "../../src/game/entities/type";

// SameTypeAttackBonus
describe("MonsterType", () => {
  it("引数は２つまで", () => {
    expect(() => {
      new MonsterType(Type.normal(), Type.fire(), Type.grass());
    }).toThrowError();
  });

  describe("#includes", () => {
    const types = new MonsterType(Type.normal(), Type.flying());
    it("タイプ一致したら真", () => {
      expect(types.includes(Type.normal())).toBe(true);
    });
    it("タイプ一致しなかったら偽", () => {
      expect(types.includes(Type.fire())).toBe(false);
    });
  });
});
