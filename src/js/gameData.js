export default class GameData {
  constructor() {
    this.resources = {
      colonists: 0, // this is colonists available
      coins: 0,
      power: 0,
      copper: 0,
      lead: 0,
    };
    this.buildings = {
      quarters: {
        level: 0,
        worker: 0,
        price: { copper: 10, lead: 10 },
      },
      generator: {
        level: 0,
        worker: 0,
        price: { copper: 10, lead: 10 },
        production: { power: 10 },
      },
      copperMine: {
        level: 0,
        worker: 0,
        price: { copper: 10 },
        production: { copper: 10, power: -10 },
      },
      leadMine: {
        level: 0,
        worker: 0,
        price: { copper: 10 },
        production: { lead: 10, power: -10 },
      },
    };
  }
}
