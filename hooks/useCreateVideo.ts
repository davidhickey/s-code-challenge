import { useMutation } from "@tanstack/react-query";
import { createVideo } from "@/lib/api/videos";
import { CreateVideoInput } from "@/lib/api/videos/types";

export const useCreateVideo = () => {
  return useMutation({
    mutationFn: (data: CreateVideoInput) => createVideo(data),
  });
};
