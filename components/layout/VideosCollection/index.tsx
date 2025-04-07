"use client";

import ThumbnailsGroup from "@/components/sections/ThumbnailsGroup";
import useGetVideos from "@/hooks/useGetVideos";
import { Video } from "@/lib/api/videos/types";
import { transformYoutubeVideo } from "@/utils/componentHelpers";
const VideosCollection = ({videoData}: {videoData: Video[]}) => {
  const {data: videos} = useGetVideos("david_hickey", videoData);


  const transformedVideos = videos.map(video => transformYoutubeVideo(video));

  return (
    <>
    {transformedVideos.length > 0 && <ThumbnailsGroup thumbnails={transformedVideos} title="Guitar Lessons" />}

      {transformedVideos.length > 0 && <ThumbnailsGroup thumbnails={transformedVideos} title="Alt Guitar Lessons" />}

      {transformedVideos.length > 0 && <ThumbnailsGroup thumbnails={transformedVideos} title="Metal Guitar Lessons" />}
    </>
  )
};

export default VideosCollection;