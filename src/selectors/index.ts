import { propOr } from "ramda";

export const selectTasks = propOr([], "tasks");
export const selectTitle = propOr("", "title");
export const selectValues = propOr([], "values");
export const selectStatusColor = propOr("", "statusColor");
export const selectId = propOr("", "id");
export const selectSubTasks = propOr([], "subTasks");
