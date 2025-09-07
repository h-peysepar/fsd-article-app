// file: src/entities/article/model/useArticlePagination.ts

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/stores/MainStore/mainStore";
import { useEffect } from "react";
import { getArticles, setPage } from "@/entities/article/model";

export const useArticlePagination = () => {
  const dispatch: AppDispatch = useDispatch();

  const { page, total, isLoading, searchQuery } = useSelector(
    (state: RootState) => state.article
  );
  const canNext = page < Math.ceil(total / 10);
  const canPrev = page > 1;

  // Функція для зміни сторінки
  const handlePageChange = (newPage: number) => {
    if (newPage !== page) {
      dispatch(setPage(newPage)); // Викликаємо екшн для зміни сторінки
    }
  };

  const onPrev = () => {
    if (page > 1) {
      dispatch(setPage(page - 1)); // Викликаємо екшн для зміни сторінки
    }
  };
  const onNext = () => {
    if (page < total) {
      dispatch(setPage(page + 1)); // Викликаємо екшн для зміни сторінки
    }
  };

  // Завантаження статей кожен раз, коли змінюється сторінка або ліміт
  useEffect(() => {
    dispatch(getArticles({ page, searchQuery }));
  }, [dispatch, page, searchQuery]);

  return {
    page,
    canNext,
    canPrev,
    isLoading,
    total,
    handlePageChange,
    onPrev,
    onNext,
  };
};
