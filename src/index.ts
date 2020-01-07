import SimulationService from "./simulation/usecases/simulation-service";

// ひかえめC252エーフィからしんちょうHD252ブラッキーへのはかいこうせん
const simulation = new SimulationService();
const res = simulation.simulate({
  attacker: {
    types: ["psychic"],
    level: 50,
    atk: 200,
    atkRank: 3
  },
  defender: {
    types: ["dark"],
    level: 50,
    def: 200,
    defRank: 2,
    hp: 202
  },
  move: {
    power: 150,
    type: "normal"
  }
});

console.info(res);
