import { User } from "./types";
import { createStandardAction } from 'typesafe-actions';

export const CREATE_USER = "DB/CREATE/User";
export const DELETE_USER = "DB/DELETE/User";

export const createUserAction = createStandardAction(CREATE_USER)<Partial<User>>()
export const deleteUserAction = createStandardAction(DELETE_USER)<string>()
