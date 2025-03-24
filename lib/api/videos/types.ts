export type CreateVideoRequest = {
  user_id: string;
  description: string;
  video_url: string;
  title: string;
};

export type EditVideoRequest = {
  video_id: string;
  title: string;
  description: string;
};

export type CreateCommentRequest = {
  video_id: string;
  content: string;
  user_id: string;
};
