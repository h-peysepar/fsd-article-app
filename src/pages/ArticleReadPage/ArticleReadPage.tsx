import { RootState } from "@/app/stores/MainStore/mainStore";
import { ROUTES } from "@/shared/config";
import { Button } from "@/shared/ui/button";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

export const ArticleReadPage = () => {
  const { id } = useParams();
  const article = useSelector((state: RootState) =>
    state.article.articles.find((a) => a.id === id)
  );

  if (!article) {
    return <div className="p-6">Статтю не знайдено</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-muted-foreground">{article.body}</p>

      <Link to={`/${ROUTES.ARTICLE_EDIT.replace(":id", article.id)}`}>
        <Button variant="outline">Редагувати</Button>
      </Link>
    </div>
  );
};
