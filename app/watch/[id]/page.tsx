import { getVideos, getVideo } from "@/lib/api/videos";
import { Video } from "@/lib/api/videos/types";
import WatchMain from "@/components/features/watch/WatchMain";
export async function generateStaticParams() {
  const videos = await getVideos("david_hickey");
  return videos.videos.map((video) => ({
    id: video.id,
  }));
}

const Watch = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id }  = await params;
  const { video } = await getVideo(id) as { video: Video };
  return (
    <div>
      <WatchMain video={video} />
    </div>
  )
};

export default Watch;
