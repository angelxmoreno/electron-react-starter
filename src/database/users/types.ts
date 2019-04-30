import * as ReduxDB from "redux-db";
// Data models
export interface User {
  id: string;
  name: string;
  imgUrl: string;
  createdDate?: Date;
  modifiedDate?: Date;
}

export interface UserRecord extends ReduxDB.TableRecord<User> {}

export type UserTable = ReduxDB.Table<UserRecord>;
