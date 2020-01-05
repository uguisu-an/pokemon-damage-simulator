import AttackTarget from "./attack-target";
import AttackEffect from "./attack-effect";

/**
 * 攻撃
 */
export default class Attack {
  private target: AttackTarget;
  private effect: AttackEffect;

  public constructor(target: AttackTarget, effect: AttackEffect) {
    this.target = target;
    this.effect = effect;
  }
}
