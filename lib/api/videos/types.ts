export type CreateVideoInput = {
  user_id: string;
  description: string;
  video_url: string;
  title: string;
};

export type EditVideoInput = {
  video_id: string;
  title: string;
  description: string;
};

export type CreateCommentInput = {
  video_id: string;
  content: string;
  user_id: string;
};

export type Video = {
  id: string;
  created_at: string;
  num_comments: number;
  title: string;
  description: string;
  video_url: string;
  user_id: string;
};
