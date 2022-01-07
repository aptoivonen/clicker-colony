import { createAction } from "@reduxjs/toolkit";

const updated = createAction("updated");
const colonistAdded = createAction("colonistAdded");
const resourceClicked = createAction("resourceClicked");

export { updated, colonistAdded, resourceClicked };
