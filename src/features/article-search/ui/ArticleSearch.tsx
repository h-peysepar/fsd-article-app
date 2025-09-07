import { Input } from "@/shared/ui/input";
import { useArticleSearch } from "../model/useArticleSearch";
import { Button } from "@/shared/ui/button";
import { X } from "lucide-react";

export const ArticleSearch = () => {
  const { search, setSearch } = useArticleSearch();

  return (
    <div className="relative w-full ">
      <Input
        type="text"
        placeholder="Пошук за заголовком..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pr-10"
      />
      {search && (
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setSearch("")}
          className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
