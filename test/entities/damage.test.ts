import BasicDamage from "../../src/entities/basic-damage";
import LevelDamage from "../../src/entities/level-damage";
import Level from "../../src/entities/level";

describe("BasicDamage", () => {
  it("とくこう130族からとくぼう130族へのはかいこうせん", () => {
    const damage = new BasicDamage(200, 200, 150);
    expect(damage.value).toBe(68);
  });
});

describe("LevelDamage", () => {
  it("ナイトヘッド", () => {
    const damage = new LevelDamage(new Level(50));
    expect(damage.value).toBe(50);
  });
});
