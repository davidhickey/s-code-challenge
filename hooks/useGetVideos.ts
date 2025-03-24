import { getVideos } from "@/lib/api/videos";
import { useQuery } from "@tanstack/react-query";

export const useGetVideos = (user_id: string) => {
  return useQuery({
    queryKey: ['videos', user_id],
    queryFn: () => getVideos(user_id),
  });
};

export default useGetVideos;
