const ButtonEl = ({
  children,
  className = "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#198ae6] text-white text-sm font-bold leading-normal tracking-[0.015em]",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonEl;
