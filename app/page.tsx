import { NextPage } from "next";
import Hero from "@/components/sections/Hero";
import { getVideos } from "@/lib/api/videos";
import CreateVideosForm from "@/components/features/videos/CreateVideosForm";
import VideosCollection from "@/components/layout/VideosCollection";
const Home: NextPage = async () => {
  const data = await getVideos("david_hickey");

  return (
    <div className="home-page-container">
      <Hero />
        <CreateVideosForm enableHide={true} />
        <VideosCollection videoData={data.videos} />
    </div>
  );
};

export default Home;
