const VideoEl = ({
  internalSrc = true,
  src,
  width,
  height,
  className,
  controls = true,
  allowFullScreen = true,
}: {
  internalSrc?: boolean;
  src: string;
  width?: number;
  height?: number;
  className?: string;
  controls?: boolean;
  allowFullScreen?: boolean;
}) => {
  return (
  <>
   {internalSrc ? (
    <video width={width} height={height} className={className} controls={controls}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
   ) : (
    <iframe src={src} width={width} height={height} className={className} allowFullScreen={allowFullScreen} />
   )}
  </>
  );
};

export default VideoEl;
