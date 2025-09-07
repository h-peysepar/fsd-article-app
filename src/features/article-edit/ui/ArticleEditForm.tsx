import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { Button } from "@/shared/ui/button";
import { useArticleEdit } from "../model/useArticleEdit";
import { Loader } from "@/shared/ui/loader";

export const ArticleEditForm = () => {
  const { title, body, setTitle, setBody, onSubmit, loading } =
    useArticleEdit();

  if (loading)
    return (
      <div className="p-4">
        <Loader />
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введіть заголовок статті"
      />
      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Введіть зміст статті"
      />
      <Button type="submit">Зберегти</Button>
    </form>
  );
};
