import MonsterType from "../../src/game/entities/monster-type";
import Type from "../../src/game/entities/type";
import { Damage } from "../../src/game/entities/damage";
import TypeMatchAttachBonus from "../../src/game/entities/type-match-attack-bonus";

describe("TypeMatchAttackBonus", () => {
  const monsterType = new MonsterType(Type.fire(), Type.ground());
  it("タイプ一致なら1.5倍", () => {
    const moveType = Type.ground();
    const damage = new Damage(81);
    const bonus = new TypeMatchAttachBonus(monsterType, moveType);
    expect(bonus.modify(damage).damage).toBe(121);
  });
  it("タイプ一致でないなら等倍", () => {
    const moveType = Type.normal();
    const damage = new Damage(81);
    const bonus = new TypeMatchAttachBonus(monsterType, moveType);
    expect(bonus.modify(damage).damage).toBe(81);
  });
});
