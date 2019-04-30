import * as ReduxDB from "redux-db";
import { User, UserRecord } from "../users/types";

export interface Post {
  id: string;
  authorId: string;
  title: string;
  body: string;
  createdDate?: Date;
  modifiedDate?: Date;
}

export interface PostViewModel extends Post {
  author: User;
}

export interface PostRecord extends ReduxDB.TableRecord<Post> {
  author: UserRecord;
}

export type PostTable = ReduxDB.Table<PostRecord>;
