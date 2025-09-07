import { RootState } from "@/app/stores/MainStore/mainStore";
import { ArticleCreateForm } from "@/features/article-create/ui";
import { ArticlePagination } from "@/features/article-pagination/ui";
import { ArticleSearch } from "@/features/article-search/ui/ArticleSearch";
import { ArticleList } from "@/widgets/articleList/ui/ArticleList";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Статті</h1>

      {user && (
        <div className="border p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Нова стаття</h2>
          <ArticleCreateForm />
        </div>
      )}
      <ArticleSearch />
      <ArticleList />
      <ArticlePagination />
    </div>
  );
};
