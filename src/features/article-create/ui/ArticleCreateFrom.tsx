import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useArticleCreate } from "../model/useArticleCreate";

export const ArticleCreateForm = () => {
  const { title, body, setTitle, setBody, onSubmit } = useArticleCreate();

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Текст"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button type="submit">Створити статтю</Button>
    </form>
  );
};
