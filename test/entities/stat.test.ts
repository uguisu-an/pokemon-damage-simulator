import Stat from "../../src/entities/stat";
import Level from "../../src/entities/level";
import HP from "../../src/entities/hp";

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
