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

  // TODO テストしてない

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

  public static fire(): Type {
    return new Type(
      "fire",
      types({
        bug: 2,
        steel: 2,
        grass: 2,
        ice: 2,
        rock: 0.5,
        fire: 0.5,
        water: 0.5,
        dragon: 0.5
      })
    );
  }

  public static water(): Type {
    return new Type(
      "water",
      types({
        ground: 2,
        rock: 2,
        fire: 2,
        water: 0.5,
        grass: 0.5,
        dragon: 0.5
      })
    );
  }

  public static grass(): Type {
    return new Type(
      "grass",
      types({
        ground: 2,
        rock: 2,
        water: 2,
        flying: 0.5,
        poison: 0.5,
        bug: 0.5,
        steel: 0.5,
        fire: 0.5,
        grass: 0.5,
        dragon: 0.5
      })
    );
  }

  public static electric(): Type {
    return new Type(
      "electric",
      types({
        flying: 2,
        water: 2,
        ground: 0,
        grass: 0.5,
        electric: 0.5,
        dragon: 0.5
      })
    );
  }

  public static ice(): Type {
    return new Type(
      "ice",
      types({
        flying: 2,
        ground: 2,
        grass: 2,
        dragon: 2,
        steel: 0.5,
        fire: 0.5,
        water: 0.5,
        ice: 0.5
      })
    );
  }

  public static fighting(): Type {
    return new Type(
      "fighting",
      types({
        normal: 2,
        rock: 2,
        steel: 2,
        ice: 2,
        dark: 2,
        flying: 0.5,
        poison: 0.5,
        psychic: 0.5,
        bug: 0.5,
        ghost: 0,
        fairy: 0.5
      })
    );
  }

  public static poison(): Type {
    return new Type(
      "poison",
      types({
        grass: 2,
        fairy: 2,
        poison: 0.5,
        ground: 0.5,
        rock: 0.5,
        ghost: 0.5,
        steel: 0
      })
    );
  }

  public static ground(): Type {
    return new Type(
      "ground",
      types({
        poison: 2,
        rock: 2,
        steel: 2,
        fire: 2,
        electric: 2,
        flying: 0,
        bug: 0.5,
        grass: 0.5
      })
    );
  }

  public static flying(): Type {
    return new Type(
      "flying",
      types({
        fighting: 2,
        bug: 2,
        grass: 2,
        rock: 0.5,
        steel: 0.5,
        electric: 0.5
      })
    );
  }

  public static psychic(): Type {
    return new Type(
      "psychic",
      types({
        fighting: 2,
        poison: 2,
        steel: 0.5,
        psychic: 0.5,
        dark: 0
      })
    );
  }

  public static bug(): Type {
    return new Type(
      "bug",
      types({
        grass: 2,
        psychic: 2,
        dark: 2,
        fighting: 0.5,
        flying: 0.5,
        poison: 0.5,
        ghost: 0.5,
        steel: 0.5,
        fire: 0.5,
        fairy: 0.5
      })
    );
  }

  public static rock(): Type {
    return new Type(
      "rock",
      types({
        flying: 2,
        bug: 2,
        fire: 2,
        ice: 2,
        fighting: 0.5,
        ground: 0.5,
        steel: 0.5
      })
    );
  }

  public static ghost(): Type {
    return new Type(
      "ghost",
      types({
        ghost: 2,
        psychic: 2,
        normal: 0,
        dark: 0.5
      })
    );
  }

  public static dragon(): Type {
    return new Type(
      "dragon",
      types({
        dragon: 2,
        steel: 0.5,
        fairy: 0
      })
    );
  }

  public static dark(): Type {
    return new Type(
      "dark",
      types({
        ghost: 2,
        psychic: 2,
        fighting: 0.5,
        dark: 0.5,
        fairy: 0.5
      })
    );
  }

  public static steel(): Type {
    return new Type(
      "steel",
      types({
        rock: 2,
        ice: 2,
        fairy: 2,
        steel: 0.5,
        fire: 0.5,
        water: 0.5,
        electric: 0.5
      })
    );
  }

  public static fairy(): Type {
    return new Type(
      "fairy",
      types({
        fighting: 2,
        dragon: 2,
        dark: 2,
        poison: 0.5,
        steel: 0.5,
        fire: 0.5
      })
    );
  }
}
