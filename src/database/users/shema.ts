import * as ReduxDB from "redux-db";

const userSchema: ReduxDB.Schema = {
  User: {
    id: { type: "PK" },
    name: { type: "ATTR" },
    modifiedDate: { type: "MODIFIED" }
  }
};

export default userSchema;
