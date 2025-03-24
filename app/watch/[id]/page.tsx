import { getVideos, getVideo, getComments } from "@/lib/api/videos";
import { Video, Comment } from "@/lib/api/videos/types";
import WatchMain from "@/components/features/watch/WatchMain";
import { transformComment } from "@/utils/componentHelpers";
export async function generateStaticParams() {
  const videos = await getVideos("david_hickey");
  return videos.videos.map((video) => ({
    id: video.id,
  }));
}

const Watch = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id }  = await params;
  const { video } = await getVideo(id) as { video: Video };
  const { comments } = await getComments(id) as { comments: Comment[] };
  const transformedComments = comments.map((comment) => transformComment(comment));
  
  return (
    <div>
      <WatchMain video={video} comments={transformedComments} />
    </div>
  )
};

export default Watch;
