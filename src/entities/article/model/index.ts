import articleReducer, { setPage, setSearchQuery } from "./articleSlice";
import { Article } from "./types";
import { getArticles, addArticle, editArticle, deleteArticle } from "./thunks";

export type { Article };
export {
  articleReducer,
  addArticle,
  editArticle,
  deleteArticle,
  getArticles,
  setPage,
  setSearchQuery,
};
