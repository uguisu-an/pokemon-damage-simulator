import Type from "./type";

/**
 * ポケモンのタイプ
 */
export default class MonsterType {
  private types: Type[];

  public constructor(...types: Type[]) {
    this.types = types;
  }

  public includes(type: Type): boolean {
    return this.types.some(t => t.equals(type));
  }
}
