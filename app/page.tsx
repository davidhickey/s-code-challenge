"use client";
import { NextPage } from "next";
import Hero from "@/components/sections/Hero";
import ThumbnailsGroup from "@/components/sections/ThumbnailsGroup";
import ButtonEl from "@/components/elements/ButtonEl";

const thumbnails = [
  {
    id: "1",
    title: "Thumbnail 1",
    video_url: "https://www.youtube.com/embed/ORvZoUu0pVs?si=6FKPiw3w3GLgVPrd",
    className: "w-full h-full",
    link: "/",
    controls: false,
    allowFullScreen: true,
    internalSrc: false,
    image_url: "",
    width: 560,
    height: 315,
    alt: "",
  },
  {
    id: "2",
    title: "Thumbnail 2",
    image: {
      src: "/images/thumbnail-2.jpg",
      alt: "Thumbnail 2",
      width: 100,
      height: 100,
    },
    className: "w-full h-full",
    link: "/",
  },
  {
    id: "3",
    title: "Thumbnail 3",
    image: {
      src: "/images/thumbnail-3.jpg",
      alt: "Thumbnail 3",
      width: 100,
      height: 100,
    },
    className: "w-full h-full",
    link: "/",
  },
  {
    id: "4",
    title: "Thumbnail 4",
    image: {
      src: "/images/thumbnail-4.jpg",
      alt: "Thumbnail 4",
      width: 100,
      height: 100,
    },
    className: "w-full h-full",
    link: "/",
  },
  {
    id: "5",
    title: "Thumbnail 5",
    image: {
      src: "/images/thumbnail-5.jpg",
      alt: "Thumbnail 5",
      width: 100,
      height: 100,
    },
    className: "w-full h-full",
    link: "/",
  },
];
const Home: NextPage = () => {
  const handleCreateTestVideo = () => {
    console.log("Create Test Video");
    createVideo();
  };

  const handleGetTestVideos = () => {
    console.log("Get Test Videos");
    getVideos();
  };

  const createVideo = async () => {
    try {
      console.log("Creating test video...");
      const response = await fetch("https://take-home-assessment-423502.uc.r.appspot.com/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: "david_hickey",
          description: "This is a test video 1.",
          video_url: "https://www.youtube.com/watch?v=ORvZoUu0pVs",
          title: "Test Video 1",
        }),
      });
      const data = await response.json();
      console.log('test video create response ', data);
    } catch (e) {
      console.error(e);
    }
  };

  const getVideos = async () => {
    try {
      console.log("Getting test videos...");
      const response = await fetch("https://take-home-assessment-423502.uc.r.appspot.com/api/videos?user_id=david_hickey", {
        method: "GET",
      });
      const data = await response.json();
      console.log("test video get response ", data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="home-page-container">
      <ButtonEl onClick={handleCreateTestVideo}>Create Test Video</ButtonEl>
      <ButtonEl onClick={handleGetTestVideos}>Get Test Videos</ButtonEl>
      <Hero />
      <ThumbnailsGroup thumbnails={thumbnails} title="Thumbnails Group 1" />
      <ThumbnailsGroup thumbnails={thumbnails} title="Thumbnails Group 2" />
    </div>
  );
};

export default Home;
