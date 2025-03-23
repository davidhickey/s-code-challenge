import ImageEl from "@/components/elements/ImageEl";
import LinkEl from "@/components/elements/LinkEl";

export interface ThumbnailProps {
  id?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className: string;
  title: string;
  link: string;
}
const Thumbnail = ({
  id,
  image,
  className,
  title,
  link,
}: ThumbnailProps) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60" id={id}>
      <LinkEl href={link}>
        <ImageEl
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={className}
        />
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </LinkEl>
    </div>
  );
};

export default Thumbnail;
