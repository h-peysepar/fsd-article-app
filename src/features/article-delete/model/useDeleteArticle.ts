import { AppDispatch } from "@/app/stores/MainStore";
import { deleteArticle } from "@/entities/article/model";
import { ROUTES } from "@/shared/config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useDeleteArticle = (id: string) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteArticle(id));
    toast.success("Статтю видалено");
    navigate(ROUTES.HOME);
  };

  return { handleDelete };
};
