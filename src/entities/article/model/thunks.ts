import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { Article } from "./types";
import {
  addArticleApi,
  deleteArticleApi,
  editArticleApi,
  getArticlesApi,
} from "../api";

export const getArticles = createAsyncThunk(
  "article/fetchArticles",
  async (
    {
      page = 1,
      limit = 10,
      searchQuery = "",
    }: { page?: number; limit?: number; searchQuery?: string },
    thunkAPI
  ) => {
    try {
      const response = await getArticlesApi({
        _page: page,
        _per_page: limit,
        title_like: searchQuery,
      });
      return response;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронна дія для додавання статті
export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (article: Omit<Article, "id">, thunkAPI) => {
    try {
      const newArticle = await addArticleApi(article);
      toast.success("Статтю додано!");
      return newArticle;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронна дія для редагування статті
export const editArticle = createAsyncThunk(
  "article/editArticle",
  async (article: Article, thunkAPI) => {
    try {
      const updatedArticle = await editArticleApi(article);
      toast.success("Статтю оновлено!");
      return updatedArticle;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Асинхронна дія для видалення статті
export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (id: string, thunkAPI) => {
    try {
      await deleteArticleApi(id);
      toast.success("Статтю видалено!");
      return id;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
