import { Damage } from "./damage";
import MonsterType from "./monster-type";
import Type from "./type";

/**
 * タイプ一致ボーナス
 */
export default class TypeMatchAttackBonus {
  private monsterType: MonsterType;
  private moveType: Type;

  public constructor(monsterType: MonsterType, moveType: Type) {
    this.monsterType = monsterType;
    this.moveType = moveType;
  }

  public modify(damage: Damage): Damage {
    if (this.monsterType.hasSameType(this.moveType)) {
      return damage.scale(1.5);
    }
    return damage;
  }
}
