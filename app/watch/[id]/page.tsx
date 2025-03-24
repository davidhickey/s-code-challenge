import { getVideos, getVideo } from "@/lib/api/videos";
import { Video } from "@/lib/api/videos/types";

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
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <p>{video.video_url}</p>
      <p>{video.user_id}</p>
      <p>{video.created_at}</p>
    </div>
  )
};

export default Watch;
