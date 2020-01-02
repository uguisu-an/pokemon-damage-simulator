import Type from "../../src/entities/type";

describe("Type", () => {
  const normal = Type.normal();

  describe("#equals", () => {
    it("同じタイプなら一致する", () => {
      expect(normal.equals(Type.normal())).toBeTruthy();
    });
  });

  describe("#affect", () => {
    it("岩と鋼には半減", () => {
      expect(normal.affect(Type.rock())).toBe(0.5);
      expect(normal.affect(Type.steel())).toBe(0.5);
    });
    it("霊には無効", () => {
      expect(normal.affect(Type.ghost())).toBe(0);
    });
  });
});
