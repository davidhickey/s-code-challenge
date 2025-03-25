import Thumbnail, { ThumbnailProps } from "@/components/common/Thumbnail";
const ThumbnailsGroup = ({
  thumbnails,
  title,
}: {
  thumbnails: ThumbnailProps[];
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-2 py-8">
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">
          {title}
        </h2>
      < div className={`flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden`}>
        <div className="flex items-stretch p-4 gap-3">
          {thumbnails.map((thumbnail) => (
            <Thumbnail key={thumbnail.id} {...thumbnail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailsGroup;
