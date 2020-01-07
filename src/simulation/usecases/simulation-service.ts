import DamageRange from "../../game/entities/damage-range";
import { BaseDamage } from "../../game/entities/damage";
import StatRank from "../../game/entities/stat-rank";

export default class SimulationService {
  public simulate(req: SimulationRequest): SimulationResponse {
    const atk = new StatRank(req.attacker.atkRank).scale(req.attacker.atk);
    const def = new StatRank(req.defender.defRank).scale(req.defender.def);
    const base = new DamageRange(new BaseDamage(atk, def, req.move.power));
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
    atkRank: number;
  };
  defender: {
    types: string[];
    level: number;
    def: number;
    defRank: number;
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
