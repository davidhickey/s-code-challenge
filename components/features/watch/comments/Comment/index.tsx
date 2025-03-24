
export interface CommentProps {
  id: string;
  content: string;
  user_id: string;
  createdAt: string;
}

const Comment = ({ id, content, user_id, createdAt }: CommentProps) => {
  return (
    <div className="flex flex-col gap-2" id={id}>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold">{user_id}</h3>
          <p className="text-sm text-gray-500">Created at: {new Date(createdAt).toLocaleTimeString()} on {new Date(createdAt).toLocaleDateString()}</p>
          <p className="text-sm text-gray-500">{content}</p>
          <div className="flex flex-row gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
