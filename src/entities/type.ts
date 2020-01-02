type TypeName =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

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

function types(types: Partial<TypeMap>): TypeMap {
  return {
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
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 1,
    fairy: 1,
    ...types
  };
}

export default class Type {
  private name: TypeName;
  private effect: TypeMap;

  public constructor(name: TypeName, effect: TypeMap) {
    this.name = name;
    this.effect = effect;
  }

  public equals(type: Type): boolean {
    return this.name === type.name;
  }

  public affect(type: Type): number {
    return this.effect[type.name];
  }

  public static normal(): Type {
    return new Type(
      "normal",
      types({
        rock: 0.5,
        ghost: 0,
        steel: 0.5
      })
    );
  }

  public static rock(): Type {
    return new Type("rock", types({}));
  }

  public static steel(): Type {
    return new Type("steel", types({}));
  }

  public static ghost(): Type {
    return new Type("ghost", types({}));
  }
}
