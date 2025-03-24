import ButtonEl from "@/components/elements/ButtonEl";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#111518]">
        <div className="size-4">
          <Link href="/">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
              fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
        <h2 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em]">
          <Link href="/">Academy</Link>
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-[#111518] text-sm font-medium leading-normal"
            href="#"
          >
            For You
          </a>
          <a
            className="text-[#111518] text-sm font-medium leading-normal"
            href="#"
          >
            Following
          </a>
          <a
            className="text-[#111518] text-sm font-medium leading-normal"
            href="#"
          >
            Discover
          </a>
          <a
            className="text-[#111518] text-sm font-medium leading-normal"
            href="#"
          >
            Profile
          </a>
        </div>
        <Link href="/create">
          <ButtonEl>
            <span className="truncate">Create</span>
          </ButtonEl>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
