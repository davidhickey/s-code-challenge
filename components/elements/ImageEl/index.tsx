import Image from "next/image";
const ImageEl = ({
  src,
  alt,
  width,
  height,
  className,
  fill,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  fill: boolean;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      fill={fill}
    />
  );
};

export default ImageEl;
