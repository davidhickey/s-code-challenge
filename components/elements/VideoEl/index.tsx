const VideoEl = ({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className: string;
}) => {
  return (
    <video src={src} width={width} height={height} className={className} />
  );
};

export default VideoEl;
