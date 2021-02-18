const resources = ["coins", "colonists", "power", "copper", "lead"];

const getDomElements = (resourceId) => {
  return {
    amount: document.getElementById(resourceId + "-amount"),
    change: document.getElementById(resourceId + "-change"),
    button: document.getElementById(resourceId + "-button"),
  };
};

const initResource = (resourceObj) => {
  resourceObj.amount.textContent = "0";
  resourceObj.change.textContent = "+ 0";
  resourceObj.button.addEventListener("click", (event) => {
    console.log("clicked: " + event.currentTarget.id);
  });
};

export default class Colony {
  constructor() {
    resources.forEach((resourceId) => {
      this[resourceId] = getDomElements(resourceId);
      initResource(this[resourceId]);
    });
  }
}
