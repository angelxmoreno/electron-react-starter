import * as ReduxDB from "redux-db";

const postSchema: ReduxDB.Schema = {
  Post: {
    id: { type: "PK" },
    author: { fieldName: "authorId", references: "User", relationName: "posts" },
    modifiedDate: { type: "MODIFIED" },
  }
};

export default postSchema;
