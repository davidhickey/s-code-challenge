import Hero from "@/components/sections/Hero";
import ThumbnailsGroup from "@/components/sections/ThumbnailsGroup";

const thumbnails = [
  {
    id: "1",
    title: "Thumbnail 1",
    image: {
      src: "/images/thumbnail-1.jpg",
      alt: "Thumbnail 1",
      width: 100,
      height: 100,
        },
    className: "w-full h-full",
    link: "/",
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
export default function Home() {
  return (
    <div className="home-page-container">
      <Hero />
      <ThumbnailsGroup thumbnails={thumbnails} title="Thumbnails Group 1" />
      <ThumbnailsGroup thumbnails={thumbnails} title="Thumbnails Group 2" />
    </div>
  );
}
