import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { addArticle, deleteArticle, editArticle, getArticles } from "./thunks";
import { Article } from "./types";

interface ArticleState {
  isLoading: boolean;
  articles: Article[];
  total: number;
  page: number;
  searchQuery: string;
}

const initialState: ArticleState = {
  isLoading: false,
  articles: [],
  total: 0,
  page: 1,
  searchQuery: "",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.page = 1; // Скидаємо сторінку на 1 при зміні запиту
    },
  },
  extraReducers: (builder) => {
    // Обробка завантаження списку статей
    builder.addCase(getArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload.data;
      state.total = payload.total;
    });
    builder.addCase(getArticles.rejected, (state) => {
      state.isLoading = false;
      state.articles = [];
    });

    // Додавання статті
    builder.addCase(addArticle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addArticle.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles.push(payload);
    });
    builder.addCase(addArticle.rejected, (state) => {
      state.isLoading = false;
    });

    // Редагування статті
    builder.addCase(editArticle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editArticle.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const index = state.articles.findIndex((a) => a.id === payload.id);
      if (index !== -1) {
        state.articles[index] = payload;
      }
      state.total++;
    });
    builder.addCase(editArticle.rejected, (state) => {
      state.isLoading = false;
    });

    // Видалення статті
    builder.addCase(deleteArticle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteArticle.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = state.articles.filter((a) => a.id !== payload);
      state.total -= 1; // Зменшуємо загальну кількість статей
    });
    builder.addCase(deleteArticle.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setPage, setSearchQuery } = articleSlice.actions;
export default articleSlice.reducer;
