import { AppDispatch, RootState } from "@/app/stores/MainStore/mainStore";
import { editArticle } from "@/entities/article"; // припускаємо, що editArticle — це асинхронна дія (thunk)
import { ROUTES } from "@/shared/config";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useArticleEdit = () => {
  const { id } = useParams<{ id: string }>();
  // Шукаємо статтю за id (перевірте, що у Redux state статті зберігаються у полі "articles")
  const article = useSelector((state: RootState) =>
    state.article.articles.find((a) => a.id === id)
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setBody(article.body);
    }
  }, [article]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error("Заповніть усі поля");
      return;
    }

    // Викликаємо асинхронну дію редагування статті
    dispatch(editArticle({ id: id ?? "", title, body }));

    toast.success("Зміни збережено!");
    navigate(ROUTES.HOME);
  };

  return {
    title,
    body,
    setTitle,
    setBody,
    onSubmit,
    loading: !article,
  };
};
