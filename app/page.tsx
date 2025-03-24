import { NextPage } from "next";
import Hero from "@/components/sections/Hero";
import ThumbnailsGroup from "@/components/sections/ThumbnailsGroup";
import { getVideos } from "@/lib/api/videos";
import { transformYoutubeVideo } from "@/utils/componentHelpers";

const Home: NextPage = async () => {
  const data = await getVideos("david_hickey");
  const transformedVideos = data.videos.map(transformYoutubeVideo);

  return (
    <div className="home-page-container">
      <Hero />
      {transformedVideos.length > 0 && <ThumbnailsGroup thumbnails={transformedVideos} title="Guitar Lessons" />}
    </div>
  );
};

export default Home;
