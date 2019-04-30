import * as ReduxDB from "redux-db";
import { UserTable } from "./users/types";
import { userReducer } from "./users/reducers";
import userSchema from "./users/shema";
import postSchema from "./posts/shema";
import { PostTable } from "./posts/types";
import { postReducer } from "./posts/reducers";

//schema
const schema: ReduxDB.Schema = {
  ...userSchema,
  ...postSchema
};

export interface Session extends ReduxDB.TableMap {
  User: UserTable;
  Post: PostTable;
}

export const db = ReduxDB.createDatabase(schema);

const DB_ACTION = "DB";
const DB_ACTION_CREATE = "CREATE";
const DB_ACTION_DELETE = "DELETE";
const DB_ACTION_UPDATE = "UPDATE";

const DB_ACTIONS = [DB_ACTION_CREATE, DB_ACTION_DELETE, DB_ACTION_UPDATE];

const DB_TABLES = Object.keys(db.tableMap);
const dbActionBuilder = (actionType: string) => {
  const types = actionType.split("/");
  const isDbAction = types.length === 3 && types[0] === DB_ACTION;
  const action = types[1] || undefined;
  const table = types[2] || undefined;

  const actionName = action && DB_ACTIONS.includes(action) && action;
  const tableName = table && DB_TABLES.includes(table) && table;

  return {
    actionType,
    isDbAction,
    actionName,
    tableName
  };
};

// Handles delete, create and update on all known db tables
const monolithReducer = (session: Session, action: any) => {
  const dbAction = dbActionBuilder(action.type);

  if (dbAction.isDbAction && dbAction.tableName) {
    const dbTable = session[dbAction.tableName];

    switch (dbAction.actionName) {
      case DB_ACTION_CREATE:
        console.log("creating a " + dbAction.tableName);
        dbTable.upsert(action.payload);
        break;

      case DB_ACTION_DELETE:
        console.log("deleting a " + dbAction.tableName);
        dbTable.delete(action.payload);
        break;

      case DB_ACTION_UPDATE:
        console.log("updating a " + dbAction.tableName);
        dbTable.update(action.payload);
        break;
    }
  }
};

export const dbReducer = db.combineReducers(
  monolithReducer,
  userReducer,
  postReducer
);
