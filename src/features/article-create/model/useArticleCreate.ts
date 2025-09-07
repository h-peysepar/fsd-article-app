import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { addArticle } from "@/entities/article/model";
import { AppDispatch } from "@/app/stores/MainStore";

export const useArticleCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error("Заповніть усі поля");
      return;
    }

    dispatch(
      addArticle({
        title,
        body,
      })
    );

    toast.success("Статтю створено!");
    setTitle("");
    setBody("");
  };

  return {
    title,
    body,
    setTitle,
    setBody,
    onSubmit,
  };
};
