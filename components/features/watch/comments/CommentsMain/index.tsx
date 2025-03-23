import Comment, { CommentProps } from "../Comment";
const CommentsMain = ({ comments }: { comments: CommentProps[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default CommentsMain;
