import { BaseDamage } from "../../src/entities/damage";

describe("BaseDamage", () => {
  it("とくこう130族からとくぼう130族へのはかいこうせん", () => {
    const damage = new BaseDamage(200, 200, 150);
    expect(damage.damage).toBe(68);
  });
});
