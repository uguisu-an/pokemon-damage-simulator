import { Damage } from "./damage";
import MonsterType from "./monster-type";
import Type from "./type";
import DamageModifier from "./damage-modifier";

export default class TypeResistanceBonus implements DamageModifier {
  private monsterType: MonsterType;
  private moveType: Type;

  public constructor(monsterType: MonsterType, moveType: Type) {
    this.monsterType = monsterType;
    this.moveType = moveType;
  }

  public modify(damage: Damage): Damage {
    const scale = this.monsterType.resist(this.moveType);
    return damage.scale(scale);
  }
}
