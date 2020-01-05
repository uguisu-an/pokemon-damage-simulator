/**
 * せいかく
 */
export class Nature {
  public readonly type: NatureType;

  public constructor(type: NatureType) {
    this.type = type;
  }
}

/**
 * せいかくタイプ
 */
export const enum NatureType {
  Adamant,
  Bashful,
  Bold,
  Brave,
  Calm,
  Careful,
  Docile,
  Gentle,
  Hardly,
  Hasty,
  Impish,
  Jolly,
  Lax,
  Lonely,
  Mild,
  Modest,
  Naive,
  Naughty,
  Quiet,
  Quirky,
  Rash,
  Relaxed,
  Sassy,
  Serious,
  Timid
}
