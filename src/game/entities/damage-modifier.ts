import { Damage } from "./damage";

export default interface DamageModifier {
  modify(damage: Damage): Damage;
}
