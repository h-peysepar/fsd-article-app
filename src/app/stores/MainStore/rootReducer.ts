import { articleReducer } from "@/entities/article/model";
import { userReducer } from "@/entities/user/model";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});
