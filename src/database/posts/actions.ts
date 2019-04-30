import { Post } from "./types";
import { createStandardAction } from 'typesafe-actions';

export const CREATE_POST = "DB/CREATE/Post";
export const DELETE_POST = "DB/DELETE/Post";

export const createPostAction = createStandardAction(CREATE_POST)<Partial<Post>>()
export const deletePostAction = createStandardAction(DELETE_POST)<string>()