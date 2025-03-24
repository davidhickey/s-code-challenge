import Comment, { CommentProps } from "../Comment";
import CreateCommentForm from "../CreateCommentForm";
const CommentsMain = ({ comments, video_id }: { comments?: CommentProps[], video_id: string }) => {
  console.log('comments are ', comments);
  return (
    <div>
      {comments && comments.length > 0 && 
        <div className="flex flex-col gap-2">
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      }
      <CreateCommentForm video_id={video_id} />
    </div>
  );
};

export default CommentsMain;
