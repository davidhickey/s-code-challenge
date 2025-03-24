import { apiClient } from "@/lib/apiClient";
import { CreateVideoRequest, EditVideoRequest, CreateCommentRequest } from "./types";

export const createVideo = async (data: CreateVideoRequest) => {
  return apiClient('/api/videos', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getVideo = async (video_id: string) => {
  return apiClient(`/api/videos/single?video_id=${video_id}`, {
    method: 'GET',
  });
};

export const getVideos = async (user_id: string) => {
  return apiClient(`/api/videos?user_id=${user_id}`, {
    method: 'GET',
  });
};

export const editVideo = async (data: EditVideoRequest) => {
  return apiClient(`/api/videos`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const createComment = async (data: CreateCommentRequest) => {
  return apiClient(`/api/videos/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getComments = async (video_id: string) => {
  return apiClient(`/api/videos/comments?video_id=${video_id}`, {
    method: 'GET',
  });
};



