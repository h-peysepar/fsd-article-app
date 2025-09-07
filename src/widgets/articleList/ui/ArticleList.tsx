import { Loader } from "@/shared/ui/loader";
import { useArticleList } from "../model";
import { ArticleCard } from "@/entities/article/ui";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { DeleteArticleButton } from "@/features/article-delete/ui";
import { useSelector } from "react-redux";
import { RootState } from "@/app/stores/MainStore";

export const ArticleList = () => {
  const { articles, isLoading } = useArticleList();
  const { user } = useSelector((state: RootState) => state.user);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {articles.length === 0 ? (
        <p>Статті не знайдено</p>
      ) : (
        articles?.map((article) => (
          <ArticleCard key={article.id} article={article}>
            {user?.id && (
              <>
                <Link to={`/articles/${article.id}/edit`}>
                  <Button variant="outline">Редагувати</Button>
                </Link>
                <DeleteArticleButton id={article.id} />
              </>
            )}
          </ArticleCard>
        ))
      )}
    </div>
  );
};
