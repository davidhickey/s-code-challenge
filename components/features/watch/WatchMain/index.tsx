import { Video } from "@/lib/api/videos/types";
// import CommentsMain from "../comments/CommentsMain";
import VideoEl from "@/components/elements/VideoEl";

const WatchMain = ({ video }: { video: Video }) => {
  return (
    <div className="flex flex-1 justify-center py-5 px-4">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-4">
        <div className="relative flex items-center justify-center aspect-video rounded-xl overflow-hidden">
          <VideoEl
            src={video.video_url}
            width={960}
            height={540}
            internalSrc={false}
          />
        </div>
        <h1 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left">
          {video.title}
        </h1>
        <p className="text-[#111518] text-sm font-normal leading-normal tracking-[0.015em] px-4 text-left">
          Uploaded by: {video.user_id}
        </p>
        <p className="text-[#111518] text-sm font-normal leading-normal tracking-[0.015em] px-4 text-left">
          {video.description}
        </p>
        {/* <CommentsMain video_id={video.id} /> */}
      </div>
    </div>
  );
};

export default WatchMain;
