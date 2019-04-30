import { createSelector, createStructuredSelector } from 'reselect';
import { db } from "../schema";
import { PostTable, PostViewModel, PostRecord } from "./types";
import { AppState } from "../../store/rootReducers";



const dbSelector = createStructuredSelector({
  User: (state: any) => state.db.User,
  Post: (state: any) => state.db.Post
});

const getPostState = (state: AppState) => state.db.Post;

export const selectPosts = createSelector(
  getPostState,
  table => {
    const postTable = db.selectTable(table) as PostTable;
    return postTable.values();
  }
);

export const selectPost = createSelector(
  dbSelector,
  (state: AppState, id: string) => id,
  (tables, id) => {
    const postTable = db.selectTables(tables).Post as PostTable
    const post:PostRecord = postTable.get(id);

    return {
      ...post.value,
      author: post.author.value
    } as PostViewModel;
  }
);
