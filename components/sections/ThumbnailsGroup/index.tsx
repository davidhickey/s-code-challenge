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
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {thumbnails.map((thumbnail) => (
          <Thumbnail
            key={thumbnail.id}
            id={thumbnail.id}
            src={thumbnail.src}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
            className={thumbnail.className}
            title={thumbnail.title}
            link={thumbnail.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailsGroup;
