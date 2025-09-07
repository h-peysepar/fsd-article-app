import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { useDeleteArticle } from "../model/useDeleteArticle";
import { useState } from "react";

type Props = {
  id: string;
};

export const DeleteArticleButton = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const { handleDelete } = useDeleteArticle(id);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Article</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              handleDelete();
              setOpen(false);
            }}
          >
            Comfirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
