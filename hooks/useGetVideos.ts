import { getVideos } from "@/lib/api/videos";
import { Video } from "@/lib/api/videos/types";
import { useQuery } from "@tanstack/react-query";

export const useGetVideos = (user_id: string, initialData: Video[]) => {
  return useQuery({
    queryKey: ['videos'],
    queryFn: async () => {
      const response = await getVideos(user_id);
      return response.videos;
    },
    initialData
  });
};

export default useGetVideos;
