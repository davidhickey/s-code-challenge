import { Video } from "@/lib/api/videos/types";
import { CommentProps } from "@/components/features/watch/comments/Comment";
import { Comment } from "@/lib/api/videos/types";
export const transformYoutubeVideo = (video: Video) => {
  return {
    id: video.id,
    title: video.title,
    width: 560,
    height: 315,
    video_url: video.video_url,
    className: 'w-full h-full',
    link: `/watch/${video.id}`,
    internalSrc: false,
    allowFullScreen: true,
    controls: true,
  };
};

export const transformComment = (comment: Comment): CommentProps => {
  return {
    id: comment.id,
    content: comment.content,
    user_id: comment.user_id,
    createdAt: comment.created_at,
  };
};