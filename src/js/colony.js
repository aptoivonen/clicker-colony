const resources = ["coins", "colonists", "power", "copper", "lead"];

const getResourceDomElements = (resourceId) => {
  return {
    amount: document.getElementById(resourceId + "-amount"),
    change: document.getElementById(resourceId + "-change"),
    button: document.getElementById(resourceId + "-button"),
  };
};

const initResourceBlock = (resourceObj) => {
  resourceObj.amount.textContent = "0";
  resourceObj.change.textContent = "+ 0";
  resourceObj.button.addEventListener("click", (event) => {
    console.log("clicked: " + event.currentTarget.id);
  });
};

export default class Colony {
  constructor() {
    resources.forEach((resourceId) => {
      this[resourceId] = getResourceDomElements(resourceId);
      initResourceBlock(this[resourceId]);
    });
  }
}
