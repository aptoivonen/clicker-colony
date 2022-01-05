const initialState = {
  round: 1,
  resources: {
    food: 0,
    money: 0,
    copper: 0,
    lead: 0,
    power: 0,
  },
  colonists: {
    idle: 0,
    dead: 0,
    consumption: {
      food: 1,
      money: 3,
    },
    hireCost: {
      money: 10,
    },
  },
  buildings: {
    hydroponicFarm: {
      level: 1,
      levelUpCost: {
        money: 10,
      },
      production: {
        food: 3,
      },
    },
    copperMine: {
      level: 1,
      levelUpCost: {
        copper: 10,
      },
      production: {
        copper: 3,
      },
      workers: 0,
    },
  },
};

export default initialState;
