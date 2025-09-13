import { articleReducer } from "@/entities/article";
import { userReducer } from "@/entities/user";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});
