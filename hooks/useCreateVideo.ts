import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createVideo } from "@/lib/api/videos";
import { CreateVideoInput } from "@/lib/api/videos/types";

export const useCreateVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateVideoInput) => createVideo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] });
    },
  });
};
