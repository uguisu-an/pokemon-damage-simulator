import { Damage } from "./damage";
import MonsterType from "./monster-type";
import Type from "./type";

export default class TypeResistanceBonus {
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
