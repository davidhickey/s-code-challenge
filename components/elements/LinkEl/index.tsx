import Link from "next/link";

const LinkEl = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return <Link href={href} className={className}>{children}</Link>;
};

export default LinkEl;
