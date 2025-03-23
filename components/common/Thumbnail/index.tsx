import ImageEl from "@/components/elements/ImageEl";
import LinkEl from "@/components/elements/LinkEl";

export interface ThumbnailProps {
  id?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  title: string;
  link: string;
}
const Thumbnail = ({
  id,
  src,
  alt,
  width,
  height,
  className,
  title,
  link,
}: ThumbnailProps) => {
  return (
    <div className="relative" id={id}>
      <LinkEl href={link}>
        <ImageEl
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          fill={true}
        />
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </LinkEl>
    </div>
  );
};

export default Thumbnail;
