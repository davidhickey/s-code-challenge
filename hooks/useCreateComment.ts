import { useMutation } from "@tanstack/react-query";
import { createComment } from "@/lib/api/videos";
import { CreateCommentInput } from "@/lib/api/videos/types";

const useCreateComment = () => {
  return useMutation({
    mutationFn: (data: CreateCommentInput) => createComment(data),
  });
};

export default useCreateComment; 