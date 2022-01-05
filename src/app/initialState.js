/* 
    *** Buildings ***

    Building properties

    req = property must exist
    resourceObj = object containing resource names as keys and integers as values, e.g. {copper: 1, power: 10}
    capacityObj = object containing "resource" || "colonists" || "power" as keys and integers as values

    name {string, req}
      display name

    description {string, req}
      describes for user what this building does

    level {number, req}
      building level, starting 0, how many times building can produce

    levelUpCost {resourceObj, req}
      resource cost to level up building

    production {resourceObj}
      amount of resources produced by workers per update per worker if consumptions resources are available
      Building without workers produces by itself. 

    consumption {resourceObj}
      amount of resources consumed by production per update per worker if resources are available.
      If there are too few resources, produce by the fraction of the least available consumed resource

    workers: {number}
      if exists, this building can have workers, max. workers = level. Workers produce resources per update.
      If property is missing, building can't have workers

    prerequisites: {string[]}
      list of building keys indicating what buildings must have at least level = 1 for this
      building to be "level uppable"

    capacity: {capacityObj}
      list of things this building increases storage capacity of per level
  */

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
    idle: 2,
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
    quarters: {
      name: "Quarters",
      description: "Living quarters for colonists",
      level: 1,
      levelUpCost: {
        money: 10,
      },
      capacity: {
        colonists: 10,
      },
    },
    hydroponicFarm: {
      name: "Hydroponic Farm",
      description: "Produces food for colonists",
      level: 1,
      levelUpCost: {
        money: 10,
      },
      production: {
        food: 3,
      },
    },
    copperMine: {
      name: "Copper Mine",
      description: "Engineers can mine for copper",
      level: 1,
      levelUpCost: {
        copper: 10,
      },
      production: {
        copper: 3,
      },
      workers: 0,
    },
    leadMine: {
      name: "Lead Mine",
      description: "Engineers can mine for lead",
      level: 1,
      levelUpCost: {
        lead: 10,
      },
      production: {
        lead: 3,
      },
      workers: 0,
    },
  },
};

export default initialState;
