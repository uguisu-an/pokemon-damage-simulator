import Type from "./type";

/**
 * ポケモンのタイプ
 */
export default class MonsterType {
  private types: Type[];

  public constructor(...types: Type[]) {
    if (types.length > 2) throw new Error("");
    this.types = types;
  }

  public hasSameType(type: Type): boolean {
    return this.types.some(t => t.equals(type));
  }

  public resist(type: Type): number {
    return this.types.reduce((p, t) => p * type.affect(t), 1.0);
  }
}
