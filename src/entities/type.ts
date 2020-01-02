export default class Type {
  private name: string;
  private effect: TypeMap;

  public constructor(name: string, effect: TypeMap) {
    this.name = name;
    this.effect = effect;
  }

  public equals(type: Type): boolean {
    return this.name === type.name;
  }

  public static normal(): Type {
    return new Type("Normal", {
      normal: 1,
      fire: 1,
      water: 1,
      grass: 1,
      electric: 1,
      ice: 1,
      fighting: 1,
      poison: 1,
      ground: 1,
      flying: 1,
      psychic: 1,
      bug: 1,
      rock: 0.5,
      ghost: 0,
      dragon: 1,
      dark: 1,
      steel: 0.5,
      fairy: 1
    });
  }
}

interface TypeMap {
  normal: number;
  fire: number;
  water: number;
  grass: number;
  electric: number;
  ice: number;
  fighting: number;
  poison: number;
  ground: number;
  flying: number;
  psychic: number;
  bug: number;
  rock: number;
  ghost: number;
  dragon: number;
  dark: number;
  steel: number;
  fairy: number;
}
