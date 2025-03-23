import Thumbnail, { ThumbnailProps } from "@/components/common/Thumbnail";
const ThumbnailsGroup = ({
  thumbnails,
  title,
}: {
  thumbnails: ThumbnailProps[];
  title: string;
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          {title}
        </h2>
      </div>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {thumbnails.map((thumbnail) => (
            <Thumbnail
              key={thumbnail.id}
              id={thumbnail.id}
              image={thumbnail.image}
              className={thumbnail.className}
              title={thumbnail.title}
              link={thumbnail.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailsGroup;
