// ひかえめC252エーフィからしんちょうHD252ブラッキーへのはかいこうせん
// import SimulationService from "./simulation/usecases/simulation-service";
// const simulation = new SimulationService();
// const res = simulation.simulate({
//   attacker: {
//     types: ["psychic"],
//     level: 50,
//     atk: 200,
//     atkRank: 3
//   },
//   defender: {
//     types: ["dark"],
//     level: 50,
//     def: 200,
//     defRank: 2,
//     hp: 202
//   },
//   move: {
//     power: 150,
//     type: "normal"
//   }
// });
// console.info(res);

import MonsterService from "./simulation/usecases/monster-service";
const service = new MonsterService();
console.info(
  service.build({
    species: "Dragapult",
    nature: "Timid",
    individual: {
      hp: 31,
      atk: 31,
      def: 31,
      spAtk: 31,
      spDef: 31,
      spd: 31
    },
    effort: {
      hp: 6,
      atk: 0,
      def: 0,
      spAtk: 252,
      spDef: 0,
      spd: 252
    }
  })
);
