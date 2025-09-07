import { AppDispatch, RootState } from "@/app/stores/MainStore/mainStore";
import { getArticles, setSearchQuery } from "@/entities/article/model";
import { useDebounce } from "@/shared/lib";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useArticleSearch = () => {
  const dispatch: AppDispatch = useDispatch();
  const globalSearch = useSelector(
    (state: RootState) => state.article.searchQuery
  );

  const [localSearch, setLocalSearch] = useState(globalSearch);
  const debouncedSearch = useDebounce(localSearch, 300);

  // Виклик запиту при debounce
  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearch));
    dispatch(getArticles({ searchQuery: debouncedSearch }));
  }, [debouncedSearch]);

  return {
    search: localSearch,
    setSearch: setLocalSearch,
  };
};
