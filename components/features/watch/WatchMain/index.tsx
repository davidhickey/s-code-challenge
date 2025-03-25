import { Video } from "@/lib/api/videos/types";
import VideoEl from "@/components/elements/VideoEl";
import CommentsMain from "../comments/CommentsMain";
import { CommentProps } from "../comments/Comment";
const WatchMain = async ({
  video,
  comments,
}: {
  video: Video;
  comments?: CommentProps[];
}) => {
  return (
    <div className="flex flex-1 justify-center py-5 px-4">
      <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1 gap-4">
        <div className="video-details-container flex flex-col gap-2 pb-8">
          <div className="relative flex items-center justify-center aspect-video rounded-xl overflow-hidden pb-4">
            <VideoEl
              src={video.video_url}
              width={960}
              height={540}
              internalSrc={false}
            />
          </div>
          <h1 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left">
            {video.title}
          </h1>
          <p className="text-sm font-normal leading-normal tracking-[0.015em] px-4 text-left">
            Uploaded by: {video.user_id} on{" "}
            {new Date(video.created_at).toLocaleDateString()}
          </p>
          <p className="text-sm font-normal leading-normal tracking-[0.015em] px-4 text-left">
            {video.description}
          </p>
        </div>
        <div className="divider border-t border-[#f0f2f4] mx-4" />
        <CommentsMain comments={comments} video_id={video.id} />
      </div>
    </div>
  );
};

export default WatchMain;
