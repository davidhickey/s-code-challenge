import ImageEl from "@/components/elements/ImageEl";
import LinkEl from "@/components/elements/LinkEl";
import VideoEl from "@/components/elements/VideoEl";

export interface ThumbnailProps {
  id?: string;
  image_url?: string;
  width?: number;
  height?: number;
  alt?: string;
  video_url?: string;
  className: string;
  title: string;
  link: string;
  internalSrc?: boolean;
  allowFullScreen?: boolean;
  controls?: boolean;
}
const Thumbnail = ({
  id,
  image_url,
  width,
  height,
  alt,
  className,
  title,
  link,
  video_url,
  internalSrc,
  allowFullScreen,
  controls,
}: ThumbnailProps) => {
  return (
    <div className="flexmin-w-60 " id={id}>
      <LinkEl href={link} className="w-full flex flex-col gap-4">
        <div className="w-full aspect-video bg-cover rounded-xl flex flex-col overflow-hidden">
            {(video_url && !image_url) &&
              <VideoEl src={video_url} className={className} internalSrc={internalSrc} allowFullScreen={allowFullScreen} controls={controls} />
            }
          {(image_url && !video_url) &&
            <ImageEl
              src={image_url}
              alt={alt || ""  }
              width={width || 0}
              height={height || 0}
              className={className}
            />
          }
          </div>
          <h3 className="text-[#111518] text-base font-medium leading-normal">{title}</h3>
      </LinkEl>
    </div>
  );
};

export default Thumbnail;
