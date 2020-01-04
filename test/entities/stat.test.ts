import Stat from "../../src/game/entities/stat";
import MonsterStat from "../../src/game/entities/monster-stat";
import Level from "../../src/game/entities/monster-level";
import HP from "../../src/game/entities/hp";
import EffortValue from "../../src/game/entities/effort-value";
import IndividualValue from "../../src/game/entities/individual-value";

describe("MonsterStat", () => {
  it("値が取れる", () => {
    expect(new MonsterStat(1).value).toBe(1);
  });
  it("1未満は例外", () => {
    expect(() => {
      new MonsterStat(0);
    }).toThrowError();
  });
});

describe("ステータスの計算", () => {
  describe("Level", () => {
    it("値が取れる", () => {
      const level1 = new Level(1);
      expect(level1.value).toBe(1);
      const level100 = new Level(100);
      expect(level100.value).toBe(100);
    });
    it("1を下回る場合は例外とする", () => {
      expect(() => {
        new Level(0);
      }).toThrowError();
    });
    it("100を超える場合は例外とする", () => {
      expect(() => {
        new Level(101);
      }).toThrowError();
    });
  });

  describe("HP", () => {
    it("レベル50の種族値130、個体値31、努力値252", () => {
      const hp = HP(new Level(50), 255, 31, 252);
      expect(hp).toBe(362);
    });
  });

  describe("HP以外", () => {
    it("レベル50の種族値130、個体値31、努力値252、上昇補正", () => {
      const status = Stat(new Level(50), 130, 31, 252, 1.1);
      expect(status).toBe(200);
    });

    it("補正なし", () => {
      const status = Stat(new Level(50), 130, 31, 252);
      expect(status).toBe(182);
    });
  });
});

describe("個体値", () => {
  it("0から31まで", () => {
    expect(new IndividualValue(0).value).toBe(0);
    expect(new IndividualValue(31).value).toBe(31);
  });
  it("範囲外は例外", () => {
    expect(() => {
      new IndividualValue(-1);
    }).toThrowError();
    expect(() => {
      new IndividualValue(32);
    }).toThrowError();
  });
});

describe("努力値", () => {
  it("0から252まで", () => {
    expect(new EffortValue(0).value).toBe(0);
    expect(new EffortValue(252).value).toBe(252);
  });
  it("範囲外は例外", () => {
    expect(() => {
      new EffortValue(-1);
    }).toThrowError();
    expect(() => {
      new EffortValue(253);
    }).toThrowError();
  });
});
