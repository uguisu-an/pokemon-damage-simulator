import Stat from "../src/stat";

describe("ステータスの計算", () => {
  describe("HP以外", () => {
    it("レベル50の種族値130、個体値31、努力値252、上昇補正", () => {
      const status = Stat(50, 130, 31, 252, 1.1);
      expect(status).toBe(200);
    });
  });
});
