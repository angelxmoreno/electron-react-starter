import { createSelector } from "reselect";
import { db } from "../schema";
import { UserTable, User } from "./types";
import { AppState } from "../../store/rootReducers";

const getUserState = (state: AppState) => state.db.User;

export const selectUsers = createSelector(
  getUserState,
  table => {
    const userTable = db.selectTable(table) as UserTable;
    return userTable.values();
  }
);
