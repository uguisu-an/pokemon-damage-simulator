import MonsterType from "../../src/game/entities/monster-type";
import Type from "../../src/game/entities/type";
import { Damage } from "../../src/game/entities/damage";
import TypeMatchAttackBonus from "../../src/game/entities/type-match-attack-bonus";
import TypeResistanceBonus from "../../src/game/entities/type-resistance-bonus";

const damage = new Damage(81);

describe("TypeMatchAttackBonus", () => {
  const monsterType = new MonsterType(Type.fire(), Type.ground());
  it("タイプ一致なら1.5倍", () => {
    const moveType = Type.ground();
    const bonus = new TypeMatchAttackBonus(monsterType, moveType);
    expect(bonus.modify(damage).damage).toBe(121);
  });
  it("タイプ一致でないなら等倍", () => {
    const moveType = Type.normal();
    const bonus = new TypeMatchAttackBonus(monsterType, moveType);
    expect(bonus.modify(damage).damage).toBe(81);
  });
});

describe("TypeResistanceBonus", () => {
  const moveType = Type.poison();
  it("4倍弱点", () => {
    const monsterType = new MonsterType(Type.grass(), Type.fairy());
    const bonus = new TypeResistanceBonus(monsterType, moveType);
    expect(bonus.modify(damage).damage).toBe(324);
  });
  it("無効", () => {
    const monsterType = new MonsterType(Type.steel(), Type.fairy());
    const bonus = new TypeResistanceBonus(monsterType, moveType);
    expect(bonus.modify(damage).damage).toBe(0);
  });
});
