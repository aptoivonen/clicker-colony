import { createAction } from "@reduxjs/toolkit";

/**
 * Meant to be used in thunks, not directly in components.
 * Components should only use thunks.
 */

const updated = createAction("updated");
const colonistAdded = createAction("colonistAdded");
const resourceClicked = createAction("resourceClicked");

export { updated, colonistAdded, resourceClicked };
