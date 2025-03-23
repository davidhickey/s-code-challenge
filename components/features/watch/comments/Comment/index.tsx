import ImageEl from "@/components/elements/ImageEl";

export interface CommentProps {
  id: string;
  content: string;
  author: {
    id: string;
    avatarImg: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  likes: number;
  dislikes: number;
}
const Comment = ({ id, content, author, createdAt }: CommentProps) => {
  return (
    <div className="flex flex-col gap-2" id={id}>
      <div className="flex flex-row gap-2">
        <ImageEl
          src={author.avatarImg}
          alt={author.name}
          width={32}
          height={32}
          className="rounded-full"
          fill={false}
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold">{author.name}</h3>
          <p className="text-sm text-gray-500">{createdAt}</p>
          <p className="text-sm text-gray-500">{content}</p>
          <div className="flex flex-row gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
