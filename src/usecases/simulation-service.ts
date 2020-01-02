import DamageRange from "../entities/damage-range";
import { BaseDamage } from "../entities/damage";

export default class SimulationService {
  public simulate(req: SimulationRequest): SimulationResponse {
    const base = new DamageRange(
      new BaseDamage(req.attacker.atk, req.defender.def, req.move.power)
    );
    const damage = base.damages.map(d => d.damage);
    const damageRatio = damage.map(
      n => Math.floor((n / req.defender.hp) * 1000) / 10
    );
    const criticalDamage = base.damages.map(d => d.scale(1.5).damage);
    const criticalDamageRatio = criticalDamage.map(
      n => Math.floor((n / req.defender.hp) * 1000) / 10
    );
    return {
      damage,
      damageRatio,
      criticalDamage,
      criticalDamageRatio
    };
  }
}

interface SimulationRequest {
  attacker: {
    types: string[];
    level: number;
    atk: number;
  };
  defender: {
    types: string[];
    level: number;
    def: number;
    hp: number;
  };
  move: {
    type: string;
    power: number;
  };
}

interface SimulationResponse {
  damage: number[];
  damageRatio: number[];
  criticalDamage: number[];
  criticalDamageRatio: number[];
}
