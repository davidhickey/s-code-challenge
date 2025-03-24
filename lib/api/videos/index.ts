import { apiClient } from "@/lib/apiClient";
import { CreateVideoInput, EditVideoInput, CreateCommentInput, Video } from "./types";

export const createVideo = async (data: CreateVideoInput) => {
  return apiClient('https://take-home-assessment-423502.uc.r.appspot.com/api/videos', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getVideo = async (video_id: string) => {
  return apiClient(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos/single?video_id=${video_id}`, {
    method: 'GET',
  });
};

export const getVideos = async (user_id: string): Promise<{videos:Video[]}> => {
  return apiClient(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=${user_id}`, {
    method: 'GET',
  });
};

export const editVideo = async (data: EditVideoInput) => {
  return apiClient(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const createComment = async (data: CreateCommentInput) => {
  return apiClient(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getComments = async (video_id: string) => {
  return apiClient(`https://take-home-assessment-423502.uc.r.appspot.com/api/videos/comments?video_id=${video_id}`, {
    method: 'GET',
  });
};



