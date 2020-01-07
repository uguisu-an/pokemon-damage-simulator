export default class MonsterService {
  public build(req: MonsterRequest): MonsterResponse {}
}

interface MonsterRequest {
  species: string;
  nature: string;
  effort: {
    hp: number;
    atk: number;
    def: number;
    spAtk: number;
    spDef: number;
    spd: number;
  };
  individual: {
    hp: number;
    atk: number;
    def: number;
    spAtk: number;
    spDef: number;
    spd: number;
  };
}

interface MonsterResponse {
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  spd: number;
}
