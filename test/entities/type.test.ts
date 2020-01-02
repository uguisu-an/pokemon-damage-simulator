import Type from "../../src/entities/type";

describe("Type", () => {
  const normal = Type.normal();

  describe("#equals", () => {
    it("同じタイプなら一致する", () => {
      expect(normal.equals(Type.normal())).toBeTruthy();
    });
  });
});
