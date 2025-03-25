export interface CommentProps {
  id: string;
  content: string;
  user_id: string;
  createdAt: string;
}

const Comment = ({ id, content, user_id, createdAt }: CommentProps) => {
  return (
    <div className="flex flex-col gap-2 py-4" id={id}>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-2 justify-center">
            <h3 className="text-md font-bold">{user_id}</h3>
            <span className="text-xs text-gray-500 self-center">
              Created at: {new Date(createdAt).toLocaleTimeString()} on{" "}
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-gray-500">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
