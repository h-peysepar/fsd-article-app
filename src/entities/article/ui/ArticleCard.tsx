import { Link } from "react-router-dom";
import { Article } from "../model/types";
import { ReactNode } from "react";

type ArticleCardProps = {
  article: Article;
  children?: ReactNode;
};

export const ArticleCard = ({ article, children }: ArticleCardProps) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold">
        <Link to={`/articles/${article.id}`}>{article.title}</Link>
      </h2>
      <p className="text-muted-foreground">{article.body?.slice(0, 100)}</p>
      <div className="mt-4 flex justify-between items-center">{children}</div>
    </div>
  );
};
