import Comment, { CommentProps } from "../Comment";
import CreateCommentForm from "../CreateCommentForm";
const CommentsMain = ({ comments, video_id }: { comments?: CommentProps[], video_id: string }) => {
  return (
    <div className="py-8">
      {comments && comments.length > 0 && 
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">Comments</h2>
          <div className="px-4">
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
          </div>
        </div>
      }
      <CreateCommentForm video_id={video_id} />
    </div>
  );
};

export default CommentsMain;
